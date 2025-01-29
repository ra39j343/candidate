const User = require('../models/user');
const Invite = require('../models/invite');

exports.register = async (req, res) => {
    try {
        const { username, password, inviteCode } = req.body;

        // Validate invite code
        const invite = await Invite.findOne({ code: inviteCode, used: false });
        if (!invite) {
            return res.status(400).json({ error: 'Invalid or used invite code' });
        }

        // Create user
        const user = new User({
            username,
            password,
            invitedBy: invite.createdBy
        });

        // Generate new invite code for the user
        user.inviteCode = user.generateInviteCode();
        
        await user.save();
        
        // Mark invite as used
        invite.used = true;
        await invite.save();

        // Start session
        req.session.userId = user._id;

        res.json({ 
            success: true, 
            message: 'Registration successful',
            username: user.username
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Error during registration' });
    }
};

exports.login = async (req, res) => {
    console.log('\n=== Login Attempt ===');
    console.log('Received:', {
        username: req.body.username,
        password: req.body.password
    });

    try {
        const user = await User.findOne({ username: req.body.username });
        console.log('Database query result:', {
            userFound: !!user,
            username: user?.username
        });

        if (!user) {
            console.log('No user found');
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isValid = await user.comparePassword(req.body.password);
        console.log('Password comparison result:', isValid);

        if (!isValid) {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Start session
        req.session.userId = user._id;
        console.log('Login successful, session created');

        res.json({
            success: true,
            message: 'Login successful',
            username: user.username
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Error during login' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: 'Could not log out' });
        }
        res.json({ success: true, message: 'Logged out successfully' });
    });
};

exports.generateInvite = async (req, res) => {
    try {
        const invite = new Invite({
            code: Math.random().toString(36).substring(2, 15),
            createdBy: req.session.userId
        });
        
        await invite.save();
        
        res.json({ 
            success: true, 
            inviteCode: invite.code 
        });
    } catch (error) {
        console.error('Invite generation error:', error);
        res.status(500).json({ error: 'Error generating invite' });
    }
}; 
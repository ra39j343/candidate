const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

console.log('Connecting to MongoDB in Docker...');

// Update connection string to use Docker container
mongoose.connect('mongodb://127.0.0.1:27017/candidate-data')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const User = require('./models/user');

async function resetAdmin() {
    try {
        // Delete existing admin
        await User.deleteOne({ username: 'admin' });
        console.log('Deleted existing admin account');

        // Create new password hash
        const password = 'admin123';
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Verify hash immediately
        const verifyHash = await bcrypt.compare(password, hashedPassword);
        console.log('Password hash verification:', verifyHash);

        // Create new admin
        const admin = new User({
            username: 'admin',
            password: hashedPassword,
            inviteCode: 'ADMIN' + Math.random().toString(36).substring(2, 8),
            createdAt: new Date()
        });

        await admin.save();
        console.log('\n=== New Admin Account ===');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('Invite Code:', admin.inviteCode);
        console.log('Password Hash:', hashedPassword);
        console.log('========================\n');
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        mongoose.connection.close();
    }
}

resetAdmin(); 
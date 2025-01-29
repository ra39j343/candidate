const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/candidate-data')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

const User = require('./models/user');

async function verifyPassword() {
    try {
        const user = await User.findOne({ username: 'admin' });
        if (!user) {
            console.log('No admin user found!');
            return;
        }

        console.log('Found user:', {
            username: user.username,
            storedHash: user.password
        });

        // Test password comparison
        const testPassword = 'admin123';
        const isMatch = await bcrypt.compare(testPassword, user.password);
        
        console.log('\nPassword verification test:');
        console.log('Test password:', testPassword);
        console.log('Matches stored hash:', isMatch);

        // Create new hash for comparison
        const newHash = await bcrypt.hash(testPassword, 10);
        console.log('\nNew hash generation test:');
        console.log('New hash:', newHash);
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        mongoose.connection.close();
    }
}

verifyPassword(); 
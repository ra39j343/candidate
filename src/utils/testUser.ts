import { connectDB } from '../lib/db';
import { User } from '../models/user';

async function testUserModel() {
  try {
    // Connect to database
    await connectDB();
    console.log('🔌 Connected to MongoDB');

    // Delete existing test user if exists
    await User.deleteOne({ username: 'testuser' });
    console.log('🧹 Cleaned up any existing test user');

    // Create new user
    const user = new User({
      username: 'testuser',
      password: 'test123'
    });

    // Generate invite code
    user.inviteCode = user.generateInviteCode();
    
    // Save user (this will trigger password hashing)
    await user.save();
    console.log('✅ Created user:', {
      username: user.username,
      inviteCode: user.inviteCode,
      hashedPassword: user.password.substring(0, 10) + '...'
    });

    // Test password comparison
    const isValidPassword = await user.comparePassword('test123');
    const isInvalidPassword = await user.comparePassword('wrongpass');
    
    console.log('\n🔐 Password verification test:');
    console.log('Correct password matches:', isValidPassword);
    console.log('Wrong password matches:', isInvalidPassword);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    // Close connection
    setTimeout(() => process.exit(0), 1000);
  }
}

// Run the test
testUserModel(); 
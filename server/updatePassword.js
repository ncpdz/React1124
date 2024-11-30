const bcrypt = require('bcrypt');
const { User } = require('./models'); // Đảm bảo bạn đã import đúng đường dẫn

async function updatePassword(email, newPassword) {
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      console.log('Password updated successfully for:', email);
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.error('Error updating password:', error);
  }
}

updatePassword('admin@example.com', '111111');

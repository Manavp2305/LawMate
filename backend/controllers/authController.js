const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Strong password check function
function isStrongPassword(password) {
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
  return strongRegex.test(password);
}

// 🔹 Register controller
exports.register = async (req, res) => {
  const { name, email, phone, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({ msg: 'Password must be at least 8 characters long with uppercase, lowercase, number, and special character' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const otp = crypto.randomInt(100000, 999999).toString();

  const user = new User({
    name,
    email,
    phone,
    password: hashedPassword,
    otp,
  });

  await user.save();

  // Send OTP email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    text: `Your OTP is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ msg: 'Error sending OTP email' });
    }
    return res.status(200).json({ msg: 'Registered successfully. OTP sent to email.' });
  });
};

// 🔹 OTP verification controller
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  if (user.otp !== otp) return res.status(400).json({ msg: 'Invalid OTP' });

  user.isVerified = true;
  user.otp = null;
  await user.save();

  res.status(200).json({ msg: 'Email verified successfully' });
};

// 🔹 Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  if (!user.isVerified) return res.status(400).json({ msg: 'Please verify your email first' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  res.status(200).json({ msg: 'Login successful' });
};

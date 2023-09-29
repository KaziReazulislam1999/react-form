const User = require("../model/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  try {
    const exist = await User.findOne({ email: email.toLowerCase() }).exec();

    if (exist) {
      return res.status(400).json({
        messaged: "Already exist!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await new User({
      fName,
      lName,
      email,
      password: hashPassword,
    }).save();

    console.log(user);

    res.status(200).json({
      message: "Registration success",
    });
  } catch (error) {}
};

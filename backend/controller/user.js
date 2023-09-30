const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  try {
    const exist = await User.findOne({ email: email.toLowerCase() }).exec();

    if (exist) {
      return res.status(400).json({
        message: "Already exist!",
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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  {
    try {
      const matchUser = await User.findOne({ email: email.toLowerCase() });

      if (!matchUser) {
        return res.status(404).json({
          message: "Not found!",
        });
      }

      const matchPassword = await bcrypt.compare(password, matchUser.password);

      if (!matchPassword) {
        return res.status(401).json({
          message: "Invalid credintials!",
        });
      }

      const token = jwt.sign({ id: matchUser._id }, process.env.SECRET, {
        expiresIn: "30d",
      });

      res.status(200).json({
        message: "Login success",
        userData: {
          name: matchUser.fName,
          email: matchUser.email,
          token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const User = require("../model/User");

exports.registerUser = async (req, res) => {
  const { fName, lName, email, password } = req.body;

  const exist = await User.findOne({ email: email.toLowerCase() }).exec();

  if (exist) {
    return res.status(400).json({
      messaged: "Already exist!",
    });
  }

  const user = await new User({
    fName,
    lName,
    email,
    password,
  }).save();

  console.log(user);

  res.status(200).json({
    message: "Registration success",
  });
};

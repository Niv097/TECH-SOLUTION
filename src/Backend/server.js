import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "sapraniv.v@gmail.com",
    pass: "cvsuudiqkyqujevr",
  },
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/tech")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((e) => {
    console.log("Not Connected");
  });

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    key: String,
    profession: String,
  },
  { versionKey: false }
);

const User = new mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    })
    .catch((err) => {
      res.send({ message: "Error occurred" });
    });
});

app.post("/register", (req, res) => {
  const { name, email, password, key, profession } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
          key,
          profession,
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully Registered, Please login now." });
          })
          .catch((err) => {
            res.send({ message: "Error occurred" });
          });
      }
    })
    .catch((err) => {
      res.send({ message: "Error occurred" });
    });
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const resetKey = Math.random().toString(36).substring(2, 10);
    console.log(resetKey);
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.send({ message: "User not registered" });
    }

    user.key = resetKey;
    await user.save();

    const mailOptions = {
      from: "noreply@example.com",
      to: email,
      subject: "Password Reset",
      text: `Hello! To reset your password, use the following key: ${resetKey}`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(info);

    res.send({ message: "Password reset key sent to your email" });
  } catch (error) {
    console.error(error);

    // Check if the error is due to HTML response (non-JSON)
    if (error.response && error.response.includes("<!DOCTYPE")) {
      // Handle the HTML response appropriately
      res
        .status(500)
        .send({ message: "Error sending email: Check your email settings" });
    } else {
      // Handle other errors
      res.status(500).send({ message: "An error occurred" });
    }
  }
});
app.post("/reset-password", (req, res) => {
  const { email, key, newPassword } = req.body;

  User.findOne({ email: email, key: key })
    .then((user) => {
      if (!user) {
        return res.send({ message: "Invalid reset key" });
      }

      user.password = newPassword;
      user.key = ""; // Clear the reset key after password reset
      user.save();

      return res.send({ message: "Password reset successful" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error occurred" });
    });
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message, profession } = req.body;

  // Create the email message
  const mailOptions = {
    from: email,
    to: "sapraniv.v@gmail.com",
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nProfession: ${profession}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error sending email" });
    } else {
      console.log(info);
      res.send({ message: "Email sent successfully" });
    }
  });
});
app.post("/product", (req, res) => {
  const { name, email, service, message } = req.body;

  // Create the email message
  const mailOptions = {
    from: email,
    to: "sanket2122003@gmail.com",
    subject: service.join(", "),
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${service.join(
      ", "
    )}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error sending email" });
    } else {
      console.log(info);
      res.send({ message: "Out team will Contact toy within 24 Hours" });
    }
  });
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});

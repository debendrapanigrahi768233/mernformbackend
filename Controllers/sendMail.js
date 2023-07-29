const nodemailer = require("nodemailer");

const sendMail = async (email, fname) => {
  let testAccount = await nodemailer.createTestAccount();
  console.log("Inside send mail");
  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "onie.harris@ethereal.email",
      pass: "JZubSYx4VbrdzGHNJT",
    },
  });
  console.log(email);
  let info = await transporter.sendMail({
    from: '"Debendra 👻" <debbhubaneswar123@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Submitted", // Subject line
    text: `Hello ${fname} ,Your form is submitted successfully`,
    html: "<b>Hello Your form is submitted successfully</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  //   res.json(info);
};

module.exports = sendMail;

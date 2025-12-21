const formidable = require('formidable');
const nodemailer = require('nodemailer');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Only POST allowed');
    return;
  }

  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).send('Error reading form');
      return;
    }

    let textBody = 'New form info:\n\n';
    for (const key in fields) {
      textBody += `${key}: ${Array.isArray(fields[key]) ? fields[key].join(', ') : fields[key]}\n`;
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',  // Change if not Gmail
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: 'leadeanguitar@gmail.com',  // Your email
      to: 'leadeanguitar@gmail.com',    // Where to send
      subject: fields._subject || 'New Form Submission',
      text: textBody,
      attachments: []
    };

    const fileGroups = Object.values(files);
    for (const group of fileGroups) {
      const fileList = Array.isArray(group) ? group : [group];
      for (const file of fileList) {
        if (file && file.size > 0) {
          const content = await fs.readFile(file.filepath);
          mailOptions.attachments.push({
            filename: file.originalFilename || file.newFilename,
            content: content
          });
        }
      }
    }

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    }
  });
};

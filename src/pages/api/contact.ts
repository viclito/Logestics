// import type { NextApiRequest, NextApiResponse } from "next";
// import {mailOptions, transporter } from "../../../config/nodemailer";

// type Data = {
//   name?: string; // Make name optional for error state
//   age?: number;  // Make age optional for error state
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   if (req.method === "POST") {
//     const data = req.body;
//     if (name || email || phoneNumber || message) {
//     return res.status (400).json({ message: "Bad request" });
//     }
//     try
//     {
//     catch (error) {
//     console.log(error);
//     return res.status (400).json({ message:"bad ......" });
//     }
//     }
//     return res.status (400).json ({ message: "Bad request" });
// }

import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../config/nodemailer";

type Data = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, message } = req.body;
    console.log(req.body);
    

    // Check if any required field is missing
    if (!name || !email || !phoneNumber || !message) {
      return res.status(400).json({ message: "Bad req" });
    }

    try {
      // Use 'await' to make sure the asynchronous operation completes before moving on
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Phone Number: ${phoneNumber}
          Message: ${message}
        `,
      });

      return res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  return res.status(400).json({ message: "Bad request" });
}


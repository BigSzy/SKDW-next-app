import { NextResponse } from "next/server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { SESClient } from "@aws-sdk/client-ses";

// Create SES service object.
const sesClient = new SESClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.SECRET,
  },
});

const createSendEmailCommand = (toAddress, fromAddress, body) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        // Html: {
        //   Charset: "UTF-8",
        //   Data: "HTML_FORMAT_BODY",
        // },
        Text: {
          Charset: "UTF-8",
          Data: `
          ${body.firstName} ${body.lastName}
          ${body.mobile} 
          ${body.email}
          ${body.message}
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: body.subject,
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

export async function POST(request) {
  const body = await request.json();

  const sendEmailCommand = createSendEmailCommand(
    "szymon.kaluza@outlook.com",
    "szymon.kaluza@outlook.com",
    body
  );

  try {
    console.log(body);

    const racaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET_KEY}&response=${body.token}`,
      { method: "POST" }
    );
    const recaptchaPayload = await racaptchaResponse.json();

    if (recaptchaPayload.success) {
      console.log("Recaptcha successful");
      const response = await sesClient.send(sendEmailCommand);
      const data = { message: "Message Sent" };
      return NextResponse.json(data);
    } else {
      console.log(recaptchaPayload);
      const data = { message: "Recaptcha failed" };
      return NextResponse.json(data);
    }
  } catch (e) {
    console.error("Failed to send email.");
    console.log(e);
    return e;
  }
}

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    try {
        let transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                secure: false,
                auth: {
                user: 'highdefinitionwebsite@outlook.com',
                pass: process.env.PASSWORD
            },
            tls: { ciphers: 'SSLv3' }
        });

        const output = `
            <div style="padding: 20px; background-color: #faedff; border-radius: 10px; font-family: 'Roboto';">
                <h1>High Definition Website Contact Request</h1>
                <h4>Contact Details:</h4>
                <ul> 
                    <li>Name: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Subject: ${req.body.subject}</li>
                </ul>

                <h4>Message</h4>
                <p>${req.body.message}</p>
            </div>
        `;
        
        await transporter.sendMail({
            from: 'highdefinitionwebsite@outlook.com',
            to: "ftc18225@gmail.com",
            subject: req.body.subject,
            html: output,
        });
        
        return res.status(200).send(JSON.stringify({error: false}));
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true}));
    }
}
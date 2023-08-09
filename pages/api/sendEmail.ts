import axios from 'axios';

export default async function handler(req:any, res:any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { to, subject, text } = req.body;

    const apiKey = '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';
    const senderEmail = 'prashanthkumarmorcha@gmail.com';
    const senderName = 'Prasanth Kumar';

    try {
        const response = await axios.post(
            'https://api.sendinblue.com/v3/smtp/email',
            {
                sender: { name: senderName, email: senderEmail },
                to: [{ email: to }],
                subject,
                textContent: text,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey,
                },
            }
        );

        if (response.status === 201) {
            res.status(200).json({ message: 'Email sent successfully' });
        } else {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
}

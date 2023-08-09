import React, { useState } from 'react';

function MyComponent() {
    const [emailData, setEmailData] = useState({
        recipient: '',
        subject: '',
        text: '',
    });

    const handleChange = (e:any) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const apiUrl = '/api/sendEmail';
            const emailDetails = {
                to: emailData.recipient,
                subject: emailData.subject,
                text: emailData.text,
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailDetails),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message); // Email sent successfully
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="recipient" value={emailData.recipient} onChange={handleChange} placeholder="Recipient" />
                <input type="text" name="subject" value={emailData.subject} onChange={handleChange} placeholder="Subject" />
                <textarea name="text" value={emailData.text} onChange={handleChange} placeholder="Email content"></textarea>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export default MyComponent;

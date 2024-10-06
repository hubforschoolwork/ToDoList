import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('All fields are required!');
            return;
        }

        fetch('your-api-endpoint', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                setSubmissionStatus('Your message has been sent successfully.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmissionStatus('There was an error sending your message.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setSubmissionStatus('There was an error sending your message.');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>Message:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
            {submissionStatus && <p>{submissionStatus}</p>}
        </form>
    );
}

export default ContactForm;
import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', message: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { firstname, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [firstname]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
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
                setFormData({ firstname: '', lastname: '', email: '', message: '' });
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
            
                <label>First Name:
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                </label>
            
<br/>
            <div>
                <label>Last Name:
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                </label>
            </div>
<br/>

            <div>
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
<br/>
            <div>
                <label>Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} />
                </label>
            </div>
<br/>

            <button type="submit">Submit</button>
            {submissionStatus && <p>{submissionStatus}</p>}
        </form>
    );
}

export default ContactForm;





// import React, { useState } from 'react';


// function ContactForm() {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         comment: '',
//     });

//     const handleChange = (e) => {
//         const { firstname, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [firstname]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add submission logic here
//         if (!formData.name || !formData.email || !formData.message) {
//             alert('All fields are required!');
//             return;
//         }
//         // new code ends here
//         // console.log(formData);


//         //new code
//         fetch('your-api-endpoint', {
//             method: 'POST',
//             body: JSON.stringify(formData),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(response => {
//             if (response.ok) {
//                 setSubmissionStatus('Your message has been sent successfully.');
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 setSubmissionStatus('There was an error sending your message.');
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setSubmissionStatus('There was an error sending your message.');
//         });
//     };

// //end new code




//     };

//     return (
//         <div className="contact-container">
//         <form onSubmit={handleSubmit} className="form-container">
//             <div>
//                 <label>
//                 First Name:
//                 <input type="text" input class="form-control" name="firstname" value={formData.firstname} onChange={handleChange} />
//             </label>
//             </div>
// <br/>
//             <div>
//            <label>
//                 Last Name:
//                 <input type="text" input class="form-control" name="lastname" value={formData.lastname} onChange={handleChange} />
//             </label>
//             </div>
// <br/>

//             <div>
//             <label>
//                 Email:
//                 <input type="email" input class="form-control" name="email" value={formData.email} onChange={handleChange} />
//             </label>
//             </div>

// <br/>
//             <label>
//                 Comments:
//                 <textarea name="comments" input class="form-control" value={formData.comments} onChange={handleChange} />
//             </label>


// <br/>
//             <button type="submit" class="btn btn-info btn-outline-dark" button id="button1">Submit</button>
//             {/* new code */}
//             {submissionStatus && <p>{submissionStatus}</p>}
//         </form>
//         </div>
//     );
// }

// export default ContactForm;


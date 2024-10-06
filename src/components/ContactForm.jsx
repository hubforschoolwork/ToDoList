import React, { useState } from 'react';


function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        comment: '',
    });

    const handleChange = (e) => {
        const { firstname, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [firstname]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add submission logic here
        console.log(formData);
    };

    return (
        <div className="contact-container">
        <form onSubmit={handleSubmit} className="form-container">
            <div>
                <label>
                First Name:
                <input type="text" input class="form-control" name="firstname" value={formData.firstname} onChange={handleChange} />
            </label>
            </div>
<br/>
            <div>
           <label>
                Last Name:
                <input type="text" input class="form-control" name="lastname" value={formData.lastname} onChange={handleChange} />
            </label>
            </div>
<br/>

            <div>
            <label>
                Email:
                <input type="email" input class="form-control" name="email" value={formData.email} onChange={handleChange} />
            </label>
            </div>

<br/>
            <label>
                Comments:
                <textarea name="comments" input class="form-control" value={formData.comments} onChange={handleChange} />
            </label>


<br/>
            <button type="submit" class="btn btn-info btn-outline-dark" button id="button1">Submit</button>

        </form>
        </div>
    );
}

export default ContactForm;


import React, { useState } from 'react'

function MyForm() {
    const [inputData, setInputData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        commebts:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', inputData);
        setInputData({ firstName: '', lastName: '', email: '', comments: '' }); // Reset the form
    };

    return (
        <div className="contact-container">
            <form className="form-container" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    value={inputData.firstName} 
                    onChange={handleChange} 
                    placeholder="First Name" 
                />

                <input 
                    type="text" 
                    name="lastName" 
                    value={inputData.lastName} 
                    onChange={handleChange} 
                    placeholder="Last Name" 
                />

                <input 
                    type="email" 
                    name="email" 
                    value={inputData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                />
                
                <input 
                    type="text" 
                    name="email" 
                    value={inputData.comments} 
                    onChange={handleChange} 
                    placeholder="Comments" 
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;
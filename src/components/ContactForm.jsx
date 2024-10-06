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
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
            </label>


            <label>
                Last Name:
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </label>


            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>


            <label>
                Comments:
                <textarea name="comments" value={formData.comments} onChange={handleChange} />
            </label>

            <button type="submit">Submit</button>

        </form>
    );
}

export default ContactForm;



// import React, { useState } from 'react';


// function ContactForm() {
//     return (
//         const [formData, setFormData] = useState({
//             firstname: '',
//             lastname: '',
//             email: '',
//             comments: '',
//         });



//         <container>
//             <div className='Form'>
//                 <form>
//                     <div class="mb-3">
//                         <label for="exampleFormControlInput1" class="form-label">First Name</label>
//                         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="email">
//                         </></div>

//                     <div class="mb-3">
//                         <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
//                         </></div>

//                     <div class="mb-3">
//                         <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
//                         </></div>



//                     <div class="mb-3">
//                         <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>


//                     <button type="submit" class="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </container>
//     );
// }

// export default Form;



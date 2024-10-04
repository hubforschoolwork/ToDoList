import React from 'react';
import beachImage from '../assets/beach-4161593_1280.jpg';



const BackgroundImageComponent = () => {
    return (
        <div style={{
            position: 'absolute', // Ensure that the div fills the entire screen
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${beachImage})`,
            backgroundSize: 'cover', // Ensures the image covers the entire component
            backgroundPosition: 'center', // Centers the image
            zIndex: -1 // Places the background behind other components

        }}>
        </div>
    );
};

export default BackgroundImageComponent;



// const BackgroundImageComponent = () => {
//     return (
//         <div style={{
//             backgroundImage: `url(${beachImage})`,
//             backgroundSize: 'cover', // Ensures the image covers the entire component
//             // height: '100vh', // Sets the height of the component
//             // width: '100%', // Sets the width of the component
//             display: 'flex', // This helps center content if needed
//             justifyContent: 'center', // Centers child content horizontally
//             alignItems: 'center' // Centers child content vertically
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             right: '0',
//             bottom: '0',
//             zindex: '-1',

//             }}>

//         </div>
//     );
// };

// export default BackgroundImageComponent;


// import React from 'react';
// import './App.css';

// const backgroundwaves = () => {
//     return (
//         <div className="backgroundwaves">

//         </div>
//     );

// }




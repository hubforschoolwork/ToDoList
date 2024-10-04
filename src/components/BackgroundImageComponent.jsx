import React from 'react';
import beachImage from './assets/beach-4161593_1280.jpg';

const BackgroundImageComponent = () => {
    return (
        <div style={{
            backgroundImage: `url(${beachImage})`,
            backgroundSize: 'cover', // Ensures the image covers the entire component
            height: '100vh', // Sets the height of the component
            width: '100%', // Sets the width of the component
            display: 'flex', // This helps center content if needed
            justifyContent: 'center', // Centers child content horizontally
            alignItems: 'center' // Centers child content vertically

            }}>

        </div>
    );
};

export default BackgroundImageComponent;


// import React from 'react';
// import './App.css';

// const backgroundwaves = () => {
//     return (
//         <div className="backgroundwaves">

//         </div>
//     );

// }




import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'


const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1675352162037-792ae4045e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1681142990331-e1e84aac661f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1652377933909-aebe606e8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1679312995862-b6a43db982d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1623658962582-a09214e103e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxN3xhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1661165584656-7c09a1c85b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2NXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        url: 'https://images.unsplash.com/photo-1664648576579-3768db2102fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3xhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
];

const divStyle = {
    margin: '50px',
    padding: '20px',
    display: 'flex',
    alighItems: 'center',
    justifyContent: 'center',
    height: '500px',
    backgroundSize: 'cover',
}

function ImageSlider() {
    return (
        <div className='slide-container'>
            <h2>ImageSlider</h2>
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default ImageSlider


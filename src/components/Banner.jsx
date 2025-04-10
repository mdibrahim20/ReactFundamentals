import React from 'react';

const Banner = (props) => {
    return (
        <div>
            <h1>This is Banner Part</h1>
            <img src="https://th.bing.com/th/id/OIP.3NjvyKpo2vu0TaIgyBeWawHaEK?rs=1&pid=ImgDetMain" />
            <h1>{props.title}</h1>
        </div>
    );
};

export default Banner;
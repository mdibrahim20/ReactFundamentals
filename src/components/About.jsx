import React from 'react';
const FormSubmitPost = (e)=>{
e.preventDefault();
alert("hello")
}
const About = (props) => {
    return (
        <div>
            <h1>This is About Component</h1>
            <ul>
                <li>{props.item['name']}</li>
                <li>{props.item['age']}</li>
                <li>{props.item['email']}</li>
                <button onClick={props.clickFunc}>Click Me</button>
            </ul>

            <form onSubmit={FormSubmitPost} action="">
                <input type="text" placeholder='name' />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default About;
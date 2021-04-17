import React from "react";

const Contact = () =>{
    return(
        <div className="mid-section">
            <h1>Contact Us</h1>
            <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
                <label>First name:</label><br />
                <input className="input" name="name" type="text" value="" size="30" /><br /><br />

                <label>Last email:</label><br />
                <input className="input" name="email" type="text" value="" size="30" /><br /><br />

                <label>Message:</label><br />
                <textarea className="input" name="message" rows="7" cols="30"></textarea><br /><br />

                <input type="submit" value="Send" />
            </form>
        </div>   
    )
}

export default Contact;
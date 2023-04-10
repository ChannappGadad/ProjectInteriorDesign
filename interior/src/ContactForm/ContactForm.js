import "../ContactForm/ContactForm.css";
import React from "react";




const ContactForm = () => {
    return(
        <div class="container">
            <form action="#" className="containerForm">
                <div class="form-row">
                    <div class="input-data">
                        <input type="text"  placeholder="Name" required/>
                    </div>
                    <div class="input-data">
                        <input type="text" placeholder="Email" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data">
                        <input type="text" placeholder="Subject" required/>
                    </div>
                    <div class="input-data">
                        <input type="text" placeholder="Phone" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <textarea rows="50" cols="80" placeholder="Hello Iam Intrested in.." required></textarea>
                        <br />
                        <div class="underline"></div>
                        <br />
                    </div>
                </div>
            </form>
     </div>
    )
}

export default ContactForm;
import React from 'react';
import './ContactForm.scss';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            method: 'Phone',
            title: 'Mr'
        };
    };

    handleMethodChange = (e) => {
        this.setState({
            method: e.target.value,
        });
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    render() {
        return (
            <form acceptCharset="UTF-8" action="https://usebasin.com/f/f440957b7bf6" method="POST">
                <div className="form-wrapper">
                    <p>Preferred method of communication:
                    <input type="radio" name="Preferred method of communication" id="phone-method" 
                    value="Phone" checked={this.state.method === "Phone"} onChange={this.handleMethodChange} />
                    <label htmlFor="phone-method">Phone</label>
                    <input type="radio" name="Preferred method of communication" id="email-method" 
                    value="Email" onChange={this.handleMethodChange} />
                    <label htmlFor="email-method">Email</label>
                    </p>
        
                    <p><label htmlFor="contact-time">Preferred time to contact: </label>
                    <input name="time" id="contact-time" required="required" placeholder="2pm"/></p>
        
                    <p>Title: &nbsp;
                    <input type="radio" name="Title" id="Mr" value="Mr" checked={this.state.title === "Mr"} onChange={this.handleTitleChange} />
                    <label htmlFor="Mr">Mr &nbsp;</label>
                    <input type="radio" name="Title" id="Mrs" value="Mrs" onChange={this.handleTitleChange} />
                    <label htmlFor="Mrs">Mrs &nbsp;</label>
                    <input type="radio" name="Title" id="Ms" value="Ms" onChange={this.handleTitleChange} />
                    <label htmlFor="Ms">Ms</label> &emsp;
                    <label htmlFor="name">Name: </label>
                    <input name="Name" id="name" required="required" placeholder="Bob"/>
                    </p>
                    
                    <p><label htmlFor="email">Email: </label>
                    <input type="email" name="Email" id="email" required="required" placeholder="bob@gmail.com"/> &emsp;
                    <label htmlFor="contact-number">Contact number: </label>
                    <input name="Contact Number" id="contact-number" placeholder="+60123456789"/></p>
                    
                    <p><label>Enquiries: </label>
                    <textarea name="Enquiries" id="enquiry" required="required" rows="3" column="5"/>
                    <br /><br />
                    <input type="submit" /></p>
                </div>
            </form>
        );
    };
}

export default ContactForm;
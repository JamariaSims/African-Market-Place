import React from 'react'
import NavigationBar from '../components/NavigationBar'
import "../App.css"

function Contact() {
    return (

    <div className = 'contact-form'>

    <NavigationBar PageName = {Contact} Tabs = {["Home", "About Us"]} />
        
            <h1> Contact Us </h1>
            <h2>Phone: 1 (800) 555 5000</h2>
            <h2>Mail: sautimarketplace@email.com</h2>

            <label> Name </label>
            <input placeholder = 'Name' />

            <label> Email </label>
            <input placeholder = 'Email' />

            <label> Message </label>
            <textarea placeholder='Message'/>

            <button type = "submit">Submit</button>

        </div>

    )
}

export default Contact

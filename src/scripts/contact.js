import { Header } from "../components/header.js";
import { heroSection } from "../components/hero-profile.js";
import { sidebar, toggleTheme } from "../helpers/header.js";
import { mailIcon } from "./../helpers/assets"

const xhr = new XMLHttpRequest();

(document.querySelector('[data-image]') || {}).innerHTML = heroSection(mailIcon)
const buttonToggle = document.querySelectorAll('[data-toggle]')
document.addEventListener('DomContentLoaded', new Header())
document.addEventListener('DomContentLoaded', sidebar())
Array.from(buttonToggle).forEach(button => button.addEventListener('click', toggleTheme))

if (typeof window !== "undefined") {
    window.toggleTheme = toggleTheme
}

// const form = document.querySelector('#getintouch')
// const button = document.querySelector('[data-button-submit]')
// button.addEventListener('click', e => {
//     console.log(e);
//     e.preventDefault()

//     // Set the request method and URL
//     xhr.open("POST", "https://your-email-server.com/send-email", true);

//     // Set the request headers
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     // Create the email data to be sent
//     const emailData = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;

//     // Send the request
//     xhr.send(emailData);

//     // Handle the response
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log("Email sent successfully!");
//         } else {
//             console.error("Error sending email:", xhr.statusText);
//         }
//     };
// })

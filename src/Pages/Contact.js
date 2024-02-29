import React, {useState} from 'react';
import './Contact.css';

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        message: ''
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://formspree.io/f/xjvnrkww', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');

                    setFormData(initialState);
                } else {
                    alert('Error sending message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending message. Please try again later.');
            });
    };

    return (
        <section className='section--contact'>
            <div className='contact__left'>
                <div className='contact__left--container'>
                    <h1 className='contact-title'>Contact me</h1>
                    <h2 className='contact-subtitle'>Question? Proposal? Just want to say hello? Go ahead!</h2>
                    <div className='contact__left--info'>
                        <span className='contact-text'> LINKEDIN: </span>
                        <a
                            className='contact-url'
                            href="https://www.linkedin.com/in/miriamabella/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/miriamabella/
                        </a>
                        <p><span className='contact-text'> EMAIL: </span> miriam.abella211@gmail.com</p>
                        <p><span className='contact-text'> ADDRESS: </span> Dübendorf, Zürich canton, Switzerland.</p>
                    </div>

                </div>

            </div>
            <div className='contact__right'>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <div className='contact-info'>
                        <input className='contact-field' type="text" id="name" name="name" placeholder='Name'
                               value={formData.name} onChange={handleChange}/>
                        <input className='contact-field' type="email" id="email" name="email" placeholder='Email'
                               value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className='contact-message'>
                        <textarea className='contact-field' id="message" name="message" placeholder='Message'
                                  value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className='contact-buttons'>
                        <button className='contact-field' type="submit">SEND</button>
                        <button className='contact-field' type="button" onClick={() => setFormData(initialState)}>
                            RESET
                        </button>
                    </div>

                </form>
            </div>
        </section>
)
    ;
}

export default Contact;
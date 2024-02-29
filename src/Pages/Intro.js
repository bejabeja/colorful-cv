import mabellaCV from "../imgs/MAbellaCV24.pdf";
import './Intro.css';

const Intro = () => {
    return (
        <section className='section-one'>
            <div className='left'>
                <div>
                    <p className='main-text'> Hi! My name is </p>
                    <h1 className='main-title'> Miriam Abella </h1>
                    <p className='text'> I'm a Full Stack Developer chilling out in Zurich, Switzerland.</p>
                    <p className='text'>
                        Let's turn your ideas into digital magic together!</p>
                    <div className='links'>
                        <a
                            className="main-url"
                            href="https://www.linkedin.com/in/miriamabella/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LINKEDIN
                        </a>
                        <a
                            className="main-url"
                            href={mabellaCV}
                            download="MAbellaCV.pdf"
                        >
                            DOWNLOAD CV
                        </a>

                    </div>
                </div>
            </div>
            <div className='right'></div>
        </section>
    );
}

export default Intro;
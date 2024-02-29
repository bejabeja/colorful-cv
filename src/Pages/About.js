import './About.css'
import htmlIcon from '../imgs/techstack/devicon_html5.svg'
import cssIcon from '../imgs/techstack/devicon_css3.svg'
import graphQL from '../imgs/techstack/logo_graphql.png'
import reactIcon from '../imgs/techstack/devicon_react.svg'
import phpIcon from '../imgs/techstack/devicon_php.svg'
import gitIcon from '../imgs/techstack/logo_git.svg'
import railsIcon from '../imgs/techstack/logo_rails.svg'
import sqlIcon from '../imgs/techstack/logos_mysql.svg'

const About = () => {
    return (

        <section className='section--about'>
            <div className='about--left'>
                <h1 className='about--title'>About</h1>
                <div className='about--text'>
                    <p>
                        Hey there! 👋
                    </p>
                    <p>
                        With three years of hands-on experience in full-stack development,
                        I've been diving deep into creating user-friendly and efficient web applications that could
                        scale.
                    </p>
                    <p>
                        In my previous role at Lifull Connect, I played a key role in designing and implementing robust
                        and scalable applications. My technical expertise spans both front-end and back-end
                        technologies, including HTML, CSS, React.js, PHP, Jest, PHPUnit, and SQL databases.
                    </p>
                    <p>
                        I'm all about bringing that can-do attitude, being open to learning, and continually
                        growing professionally.
                    </p>
                    <p>
                        Looking forward to connecting with you soon! 🚀

                    </p>
                </div>
            </div>

            <div className='about--right'>
                <div className='about--tech-stacks'>
                    <img src={htmlIcon} alt='Html logo'/>
                    <img src={cssIcon} alt='Css logo'/>
                    <img src={graphQL} alt='GraphQL logo'/>
                    <img src={reactIcon} alt='React logo'/>
                    <img src={phpIcon} alt='PHP logo'/>
                    <img src={gitIcon} alt='Git logo'/>
                    <img src={railsIcon} alt='Rails logo'/>
                    <img src={sqlIcon} alt='MySQL logo'/>
                </div>
            </div>
        </section>
    );
}

export default About;
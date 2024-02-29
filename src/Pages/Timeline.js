import React, {useEffect, useState} from "react";
import lifulLogo from "../imgs/lifull-logo.png";
import graduate from "../imgs/graduate.svg";
import world from "../imgs/world.svg";
import seidorLogo from "../imgs/seidorLogo.webp";
import './Timeline.css'

const LargeScreenTimeline = () => <div className='timeline'>
    <div className='timeline_component'>
        <div className='timeline__date timeline__date--right'> 2020 - 2023</div>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component timeline_component--bg'>
        <img src={lifulLogo} className='timeline__icon' alt='Lifull Connect company logo'/>
        <h2 className='timeline__tile'>Lifull Connect</h2>
        <p className='timeline__paragraph'> My role as a Full Stack Developer involved contributing
            to the development of a real estate website </p>
        <p className='timeline__paragraph'> MAIN TECH: React, PHP, Symfony, Jest, PHPUnit, RoR, GraphQL,
            Git,
            Docker, Jira, Figma
        </p>
    </div>

    <div className='timeline_component timeline_component--bg'>
        <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
        <h2 className='timeline__tile'>Bootcamp</h2>
        <p className='timeline__paragraph'> Intensive three-month bootcamp focused on technological
            skills
            in web programming.</p>
        <p className='timeline__paragraph'> MAIN TECH: SQL, Java, HTML, CSS</p>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date'> Late 2019</div>
    </div>

    <div className='timeline_component'>
        <div className='timeline__date timeline__date--right'> 2018 - 2019</div>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component timeline_component--bg'>
        <img src={world} className='timeline__icon' alt='world mapa icon'/>
        <h2 className='timeline__tile'>Australian Adventure</h2>
        <p className='timeline__paragraph'> I spent a year in Australia, attending a six-month English
            course and exploring the country</p>
        <p> SCHOOL: Pacific English School</p>
    </div>

    <div className='timeline_component timeline_component--bg'>
        <img src={seidorLogo} className='timeline__icon' alt='Seidor company logo'/>
        <h2 className='timeline__tile'>Seidor</h2>
        <p className='timeline__paragraph'>
            As a Unity Developer, my primary responsibility entailed the development of the VR
            application
            canvas, ensuring its seamless integration and functionality within the virtual
            environment. </p>
        <p className='timeline__paragraph'> MAIN TECH: C#, Unity, After Effects, Illustrator</p>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date'> 2017 - 2018</div>
    </div>

    <div className='timeline_component'>
        <div className='timeline__date timeline__date--right'> 2015 - 2017</div>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component timeline_component--bg'>
        <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
        <h2 className='timeline__tile'>TEKNOS</h2>
        <p className='timeline__paragraph'> Completed the Technical Degree in 3D Animation and Web
            Application development</p>
        <p className='timeline__paragraph'> MAIN TECH: JS, HTML, CSS, C#, Unity</p>

    </div>

    <div className='timeline_component timeline_component--bg'>
        <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
        <h2 className='timeline__tile'>Vic University</h2>
        <p className='timeline__paragraph'>I have successfully completed a media program. </p>
        <p className='timeline__paragraph'> Erasmus program: 2013/14 in TAMK, Finland</p>
    </div>
    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date'> 2010 - 2015</div>
    </div>
</div>;
const SmallScreenTimeline = () => <div className='timeline'>

    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> 2020 - 2023</div>
        <div className='timeline_component--bg'>
            <img src={lifulLogo} className='timeline__icon' alt='Lifull Connect company logo'/>
            <h2 className='timeline__tile'>Lifull Connect</h2>
            <p className='timeline__paragraph'> My role as a Full Stack Developer involved contributing
                to the development of a real estate website </p>
            <p className='timeline__paragraph'> MAIN TECH: React, PHP, Symfony, Jest, PHPUnit, RoR, GraphQL,
                Git,
                Docker, Jira, Figma
            </p>
        </div>
    </div>

    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> Late 2019</div>
        <div className='timeline_component--bg'>
            <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
            <h2 className='timeline__tile'>Bootcamp</h2>
            <p className='timeline__paragraph'> Intensive three-month bootcamp focused on technological skills
                in web programming.</p>
            <p className='timeline__paragraph'> MAIN TECH: SQL, Java, HTML, CSS</p>
        </div>
    </div>


    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> 2018 - 2019</div>
        <div className='timeline_component--bg'>
            <img src={world} className='timeline__icon' alt='world mapa icon'/>
            <h2 className='timeline__tile'>Australian Adventure</h2>
            <p className='timeline__paragraph'> I spent a year in Australia, attending a six-month English
                course and exploring the country</p>
            <p> SCHOOL: Pacific English School</p>
        </div>
    </div>

    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> 2017 - 2018</div>
        <div className='timeline_component--bg'>
            <img src={seidorLogo} className='timeline__icon' alt='Seidor company logo'/>
            <h2 className='timeline__tile'>Seidor</h2>
            <p className='timeline__paragraph'>
                As a Unity Developer, my primary responsibility entailed the development of the VR application
                canvas, ensuring its seamless integration and functionality within the virtual environment. </p>
            <p className='timeline__paragraph'> MAIN TECH: C#, Unity, After Effects, Illustrator</p>
        </div>
    </div>


    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> 2015 - 2017</div>
        <div className='timeline_component--bg'>
            <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
            <h2 className='timeline__tile'>TEKNOS</h2>
            <p className='timeline__paragraph'> Completed the Technical Degree in 3D Animation and Web
                Application development</p>
            <p className='timeline__paragraph'> MAIN TECH: JS, HTML, CSS, C#, Unity</p>
        </div>
    </div>

    <div className='timeline_middle'>
        <div className='timeline__point'></div>
    </div>
    <div className='timeline_component'>
        <div className='timeline__date--phone'> 2010 - 2015</div>
        <div className='timeline_component--bg'>
            <img src={graduate} className='timeline__icon' alt='Graduate logo'/>
            <h2 className='timeline__tile'>Vic University</h2>
            <p className='timeline__paragraph'>I have successfully completed a media program. </p>
            <p className='timeline__paragraph'> Erasmus program: 2013/14 in TAMK, Finland</p>
        </div>
    </div>
</div>;

const Timeline = () => {
    const isSmallScreen = useWindowSize();

    return (
        <section className='section-timeline'>
            <h1 className='section-title'>Experience and education</h1>
            {!isSmallScreen &&
                <LargeScreenTimeline/>
            }
            {isSmallScreen &&
                <SmallScreenTimeline/>
            }
        </section>
    );
}

function useWindowSize() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 767);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isSmallScreen;
}


export default Timeline;
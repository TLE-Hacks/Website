import {SOCIALS, TOP_SECTION} from '../../Module/General';
import AnimatedTyping from '../Typed/index.js';
import './style.css';

const Btn = props => {
    return (
        <button className={props.class}>
            <i className={props.ico}></i>
            {props.type}
            <div className="overlay">
                <div className="overlay-text">{props.overlay}</div>
            </div>
        </button>
    );
};

const About = () => {
    return (
        <div className="AboutMe">
            <h2>{TOP_SECTION.TITLE}</h2>
            <AnimatedTyping/>
        </div>
    );
};

const Myinfo = () => {
    return (
        <div className="Myinfo">
            <About/>
            <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
            <div className="button-group">
                <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
                    <Btn
                        ico="fab fa-2x fa-discord"
                        class="join_disco"
                        type="Join Our Discord"
                        overlay="Discord"
                    />
                </a>
                <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
                    <Btn
                        class="register"
                        type="Register"
                        overlay="Hackers registration"
                    />
                </a>
            </div>
        </div>
    );
};

export {Btn, Myinfo};

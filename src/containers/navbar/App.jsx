import {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import {HashLink as Link} from 'react-router-hash-link';
import styled from 'styled-components';
import HomePage from '../Home/HomePage';
import logoClose from './assets/ham-c.svg';
import hamLogo from './assets/ham.svg';
import './styles.scss';

import {MdxContent} from '../Mdx';

const NAVIGATION_OFFSET = 66;

const Wrapper = styled.div`
    display: block;
    width: 40%;

    @media (max-width: 1000px) {
        margin: 0;
        display: ${props => (props.toggle ? 'none' : 'static')};
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: ${props => (props.toggle ? '-1000px' : '0px')};
        transition: top 1s;
        .nav-content {
            height: 35%;
            background-color: #09704e;
        }
    }
`;

const NAVBAR = () => {
    const [toggle, setToggle] = useState(true);
    const [isOffset, setIsOffset] = useState(false);

    const navigation = useRef();

    const listenScrollEvent = () => {
        if (window.scrollY >= NAVIGATION_OFFSET) {
            setIsOffset(true);
        } else {
            setIsOffset(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    const handleOutsideClick = (event, ref) => {
        if (!ref.current.contains(event.target)) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', e =>
            handleOutsideClick(e, navigation)
        );

        return () => {
            document.removeEventListener('mousedown', e =>
                handleOutsideClick(e, navigation)
            );
        };
    }, []);

    return (
        <Router>
            <nav className={`nav_bar ${isOffset && 'nav_bar-offset-crossed'}`}>
                <Wrapper toggle={toggle}>
                    <div className="nav-content" ref={navigation}>
                        <ul>
                            <li>
                                <Link to={`#home`}>
                                    <span className="links">Home</span>{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to={`#faq`}>
                                    <span className="links">FAQ</span>{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to={`#prizes`}>
                                    <span className="links">Prizes</span>{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to={`#sponsors`}>
                                    <span className="links">Sponsors</span>{' '}
                                </Link>
                            </li>
                            <li>
                                <Link to={`#team`}>
                                    <span className="links">Team</span>{' '}
                                </Link>
                            </li>
                            <img
                                className="s-close"
                                onClick={() => setToggle(true)}
                                src={logoClose}
                                alt=""
                            />
                        </ul>
                    </div>
                    <div className="ease"/>
                </Wrapper>
                <img
                    className="s-open"
                    onClick={() => setToggle(false)}
                    src={hamLogo}
                    alt=""
                />
            </nav>

            <Switch>
                <Route path="/blog" exact={true}>
                    <MdxContent/>
                </Route>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default NAVBAR;

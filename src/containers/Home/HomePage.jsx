import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Logo, LogoSectionAbout} from '../../components/About';
import {Accordion} from '../../components/Accordian';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing';
import {FirstPrize, PrizeHeading} from '../../components/Prizes';
import Media from '../../components/Socials/index.jsx';
import {Sponsor, SponsorsHead, SponsorUS} from '../../components/Sponsors/sponsors.jsx';
import {Member} from '../../components/Team';
import {
    FOOTER,
    frequentlyAskedQuestions,
    JudgesInfo,
    Prizeinfo,
    sponsorLogos,
    TeamInfo
} from '../../Module/General';
import MyCalendar from '../calendar';
import './about.css';
import pattern from './assets/pattern4.png';

const SponsorGroup = (props, index) => {
    return (
        <Row key={index}>
            {props.map((s, i) => (
                <Col key={i} className="" sm={12} lg={4} md={6}>
                    {' '}
                    <Sponsor srcx={s.src}/>{' '}
                </Col>
            ))}
        </Row>
    );
};

// Prize group
const PrizeGroup = (props, index) => {
    return (
        <Row key={index}>
            {props.map((s, i) => (
                <Col key={i} className="" sm={12} lg={4} md={4}>
                    <FirstPrize icon={s.icon} type={s.type} content={s.content}/>
                </Col>
            ))}
        </Row>
    );
};

// Prize group ending
const TeamMembers = (props, index) => {
    return (
        <Row key={index} className="members">
            {props.map((s, i) => (
                <Col key={i} className="" sm={12} lg={4} md={4}>
                    <Member info={s}/>
                </Col>
            ))}
        </Row>
    );
};

const FrequentlyAsked = (props, index) => {
    return (
        <Row key={index} className="sf">
            {props.map((s, i) => (
                <Col key={i} sm={12} lg={6} md={6}>
                    <Accordion panels={s}/>
                </Col>
            ))}
        </Row>
    );
};

export default function HomePage() {
    const [media, setMedia] = useState();
    UseMedia('min-width', 1000, setMedia);

    return (
        <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
            <div className="color_section" id="home">
                <Container fluid>
                    <Row className="Row info">
                        <Col className="info-div" sm={12} lg={7} md={7}>
                            <Myinfo/>
                        </Col>
                        <Col className="d-image" sm={12} lg={5} md={5}>
                            <MyCalendar/>
                        </Col>
                    </Row>

                    <Row className="mediaInfo">
                        <Col className="" sm={12} lg={12} md={12}>
                            <Media/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid>
                {/* Logo section  */}
                <Row className="logoSection">
                    <Col className="info-div" sm={12} lg={8} md={8}>
                        <LogoSectionAbout/>
                    </Col>
                    <Col className="info-div" sm={12} lg={4} md={4}>
                        <Logo/>
                    </Col>
                </Row>

                {/* ********Frequently asked Questions here ***** */}
                <div className="Myfaqs" id="faq">
                    {frequentlyAskedQuestions.map(FrequentlyAsked)}
                    {/* ********Frequently asked Questions ending here ***** */}
                </div>

                {/* ********Prizes here ***** */}
                <Row className="prize_section" id="prizes">
                    <PrizeHeading type="Prizes"/>
                    {Prizeinfo.map(PrizeGroup)}
                </Row>
                {/* ********Prizes ending here ***** */}

                {/* ********Sponsors here ***** */}

                <Row className="sponsorSection" id="sponsors">
                    <SponsorsHead/>
                    <SponsorUS/>
                    {sponsorLogos.map(SponsorGroup)}
                </Row>
                {/* ********Sponsors ending here ***** */}

                {media && <Birds top="120vh" left="0vh" type=""/>}

                {/* ********Team here ***** */}
                <h1 id="team" style={{marginTop: "15vh"}}><b>Our Team</b></h1>
                {FOOTER.JOIN_TEAM.required}
                {TeamInfo.map(TeamMembers)}
                {/* ********Team ending here ***** */}

                {/* ********Judges here ***** */}

                {/* <h1 id="team" style={{marginTop: "15vh"}}>Judges</h1>
                {FOOTER.JOIN_TEAM.required}
                {JudgesInfo.map(TeamMembers)} */}
                {/* ********Team ending here ***** */}
            </Container>
            <Footer/>
        </div>
    );
}

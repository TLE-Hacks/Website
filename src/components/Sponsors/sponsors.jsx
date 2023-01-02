import {SOCIALS} from '../../Module/General';
import {Btn} from '../Landing';
import './sponsors.scss';

function SponsorsHead() {
    return <h1 className="shead"><b>Sponsors & Partners</b></h1>;
}

function Sponsor(props) {
    return (
        <div className="Sponsor ">
            <img src={props.srcx} alt="TLE hacks"></img>
        </div>
    );
}

function SponsorUS() {
    return (
        <div className="joinT sponsorUS">
            <h3>Interested in Sponsoring?</h3>
            <a href={SOCIALS.email}>
                <Btn className="sponsor_btn" type="Sponsor us" overlay="Send an email"/>
            </a>{' '}
        </div>
    );
}

export {SponsorsHead, Sponsor, SponsorUS};

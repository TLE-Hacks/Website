import {useEffect, useState} from 'react';
import {FOOTER, SOCIALS} from '../../Module/General';
import DevPost from './assets/icons8-dev-post.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
import Twitter from './assets/icons8-twitter.svg';
import PrivacyPolicy from './assets/Privacy policy.pdf';
import TermsOfUse from './assets/Terms of use.pdf';
import './style.scss';

const Footer = () => {
	const [template, setTemplate] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () => {
			window.removeEventListener('scroll', listenScrollEvent);
		};
	}, []);

	const listenScrollEvent = () => {
		if (window.scrollY > 2800) setTemplate(true);
		else if (window.scrollY < 2800) setTemplate(false);
	};

	return (
			<div>
				<div className="footer">
					<div className="social-icons-container">
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
								<img src={Insta} alt=""/>
							</a>
						</div>
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
								<img src={Dis} alt=""/>
							</a>
						</div>
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
								<img src={Linked} alt=""/>
							</a>
						</div>
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.email}>
								<img src={Mail} alt=""/>
							</a>
						</div>
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
								<img src={Twitter} alt=""/>
							</a>
						</div>
						<div className="social-icon">
							<a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
								<img src={DevPost} alt=""/>
							</a>
						</div>
					</div>
					<div className="Register_a">
						<p>
							Contact us
							<a href={SOCIALS.email}>
								<em>{SOCIALS.mail}</em>
							</a>
						</p>

						{FOOTER.Privacy_policy.required && (
								<a href={PrivacyPolicy} download target="blank" className="privacy-policy">
									<p>Privacy Policy</p>
								</a>
						)}
						{FOOTER.Terms_of_use.required && (
								<a href={TermsOfUse} download target="blank" className="privacy-policy">
									<p>Terms of Use</p>
								</a>
						)}
					</div>
				</div>
			</div>
	);
};

export default Footer;

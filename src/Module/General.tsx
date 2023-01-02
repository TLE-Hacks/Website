import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets
import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
    TITLE: 'Join TLE Hacks',
    Typed_effect: ['36 hours of creation', 1000, 'Win awesome prizes', 1000],
    SHORT_DESCRIPTION:
        'Join us on 24th February 2023 virtually from across the nation for 36 hours of creation, innovation, & fun.',
    IMG_SRC: boy,
    DISCORD_LINK: '',
    JUDGES_FORM_LINK:
        'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u',
    HACKERS_REGISTRATION_FORM_LINK:
        'https://forms.gle/phLiK7nYjbzXKn6y7',
    target: "_blank"
};

const SOCIALS = {
    instagram: 'https://www.instagram.com/tlehacks/',
    discord: 'https://discord.gg/GjK39bgkg9',
    linkedin: 'https://www.linkedin.com/company/tle-hacks/',
    twitter: 'https://twitter.com/TLEHacks',
    devpost: 'https://tle-hacks.devpost.com',
    email: 'mailto:tlehacks@gmail.com',
    mail: 'tlehacks@gmail.com'
};

const MIDDLE_SECTION = {
    TITLE: 'What is TLE Hacks?',
    LONG_DESCRIPTION:
        'TLE Hacks is 36 hour long running hackathon will be held on February 24-26. We calls for hackers,' +
        ' artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part' +
        ' to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at TLE Hacks' +
        ' will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.',
    LOGO: hackathonLogo
};

const FOOTER = {
    VOLUNTEERING_FORM: {
        required: false,
        src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
    },
    JOIN_TEAM: {
        required: false,
        src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
    },
    Privacy_policy: {
        required: false,
        src: ''
    },
    Terms_of_use: {
        required: false,
        src: ''
    }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2023, 18-11-2023 (without trailing zeros)
 */

const calendarStartingDate = {
    month: 2,
    year: 2023
};

const schedule = [
    {
        day: '24-2-2023',
        events: [
            {
                title: 'Intro to pyschology',
                timings: '12 AM - 1 Pm',
                content:
                    'JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.',
                image: 'https://i.imgur.com/EjM8qVK.jpg',
                organizer: 'Porf Juliana',
                role: 'Software Engineer',
                company: 'JP Morgan'
            }
        ]
    },
    {
        day: '24-2-2023',
        events: [
            {
                title: 'Intro to deep learning',
                timings: '1 PM - 2 Pm',
                content:
                    'JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.',
                image: 'https://i.imgur.com/EjM8qVK.jpg',
                organizer: 'Rahul Dravid',
                role: 'Software Engineer',
                company: 'JP Morgan'
            },
            {
                title: 'Intro to deep learning',
                timings: '12 AM - 1 Pm',
                content:
                    'JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.',
                image: 'https://i.imgur.com/EjM8qVK.jpg',
                organizer: 'Rahul Dravid',
                role: 'Software Engineer',
                company: 'JP Morgan'
            }
        ]
    },
    {
        day: '26-2-2023',
        events: [
            {
                title: 'Intro to psychology',
                timings: '12 AM - 1 Pm',
                content:
                    'JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.',
                image: 'https://i.imgur.com/EjM8qVK.jpg',
                organizer: 'Porf Juliana',
                role: 'Software Engineer',
                company: 'JP Morgan'
            }
        ]
    },
    {
        day: '25-2-2023',
        events: [
            {
                title: 'Intro to deep learning',
                timings: '12 AM - 1 Pm',
                content:
                    'JAVA was developed by Sun Microsystems Inc in 1991, later acquired by Oracle Corporation. It was developed by James Gosling and Patrick Naughton. It is a simple programming language.  Writing, compiling and debugging a program is easy in java.  It helps to create modular programs and reusable code.',
                image: 'https://i.imgur.com/EjM8qVK.jpg',
                organizer: 'Rahul Dravid',
                role: 'Software Engineer',
                company: 'JP Morgan'
            }
        ]
    }
];


/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
    [
        //Array 1
        {
            icon: <i className="first fas fa-4x fa-trophy"></i>,
            type: 'Overall First',
            content:
                'First Overall prize will be given to a project that outstands all other submissions'
        },
        {
            icon: <i className=" second fas fa-4x fa-medal"></i>,
            type: 'Overall Second',
            content:
                'Second Overall prize will be given to the second best project of the hackathon'
        },
        {
            icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
            type: 'Third Second',
            content:
                'Best third overall project of the hackathon will win some awesome prizes'
        }
    ],
    [
        //Array 2
        {
            icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
            type: 'Best Solo',
            content:
                'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
        },
        {
            icon: <i className="first fas fa-4x fa-trophy"></i>,
            type: ' Best Beginner',
            content: 'Your project will qualify for this category if atleast 50% '
        },
        {
            icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
            type: 'Best UI/UX',
            content: 'Project with most creative designs will be UI/UX track'
        }
    ],
    [
        //Array 3
        {
            icon: <i className="fas fa-4x sixth fa-male"></i>,
            type: 'Best Web App with Qoom',
            content: 'Must use qoom in your project to win this category'
        },
        {
            icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
            type: 'More prizes',
            content: 'More prizes will be revealed later'
        }
    ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
    [
        //Array 1
        {
            name: 'Peterson Guo',
            role: 'Director',
            github: 'https://github.com/Peterson120',
            img: me
        },
        {
            name: 'Jake Zhang',
            role: 'Co-Director',
            img: moon
        },
        {
            name: 'Victoria Do',
            role: 'Co-Director',
            img: Ryah
        }
    ],
    [
        //Array 2
        {
            name: 'Bryson Lee',
            role: 'Organizer',
            img: lyin
        },
        {
            name: 'David Gao',
            role: 'Organizer',
            img: zoha
        },
        {
            name: 'Eric Zhang',
            role: 'Web Developer',
            github: 'https://github.com/16BitNarwhal',
            img: zoha
        }
    ],
    [
        //Array 3
        {
            name: 'Enoch Chan',
            role: 'Lead Marketer',
            img: lyin
        },
        {
            name: 'Zain Malik',
            role: 'Marketer',
            img: zoha
        },
        {
            name: 'Christine Lau',
            role: 'Visual Designer',
            img: zoha
        }
    ]
];

const JudgesInfo = [
    [
        //Array 1
        {
            name: 'Rehan',
            role: 'Organizer',
            github: '',
            linkedin: '',
            img: me
        },
        {
            name: 'Moon',
            role: 'Organizer',
            github: '',
            linkedin: '',
            img: moon
        },
        {
            name: 'Ryah Garcia',
            role: 'Organizer',
            github: '',
            linkedin: '',
            img: Ryah
        }
    ],
    [
        //Array 2
        {
            name: 'Lyanola',
            role: 'Organizer',
            github: '',
            linkedin: '',
            img: lyin
        },
        {
            name: 'Zoheb',
            role: 'Organizer',
            github: '',
            linkedin: '',
            img: zoha
        }
    ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
    [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
    [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
    [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
    [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
    [
        [
            {
                label: 'What is a hackathon?',
                content:
                    'A hackathon is a 36 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
            },
            {
                label: 'Who can attend?',
                content:
                    'TLE Hacks is open to all undergraduate, high school students and middle school students from all schools.'
            },
            {
                label: 'I am a first time hacker, what should I do?',
                content:
                    'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
            },
            {
                label: 'How team formation works?',
                content:
                    "You can form team with 4 members in it at maximum, with at least one member from Pierre Elliott Trudeau High School. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
            }
        ],
        [
            {
                label: 'How to register myself in the hackathon?',
                content:
                    'All you need is to fill our form above and join Discord, we will guide you through everything there'
            },
            {
                label: 'I have more questions?',
                content:
                    'Reach us directly at (tlehacks@gmail.com) we would happy to help you.'
            },
            {
                label: 'Can I volunteer?',
                content:
                    'Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you.'
            },
            {
                label: 'Will there be swag?',
                content: 'Yes! Participants will receiving TLE Hacks swag!.'
            }
        ]
    ]
];

export {
    TOP_SECTION,
    MIDDLE_SECTION,
    SOCIALS,
    FOOTER,
    Prizeinfo,
    sponsorLogos,
    TeamInfo,
    JudgesInfo,
    frequentlyAskedQuestions,
    schedule,
    calendarStartingDate
};

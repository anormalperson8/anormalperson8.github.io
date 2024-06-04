// import {
//     benefitIcon1,
//     benefitIcon2,
//     benefitIcon3,
//     benefitIcon4,
//     benefitImage2,
//     chromecast,
//     disc02,
//     discord,
//     discordBlack,
//     facebook,
//     figma,
//     file02,
//     framer,
//     homeSmile,
//     instagram,
//     notification2,
//     notification3,
//     notification4,
//     notion,
//     photoshop,
//     plusSquare,
//     protopie,
//     raindrop,
//     recording01,
//     recording03,
//     roadmap1,
//     roadmap2,
//     roadmap3,
//     roadmap4,
//     searchMd,
//     slack,
//     sliders04,
//     telegram,
//     twitter,
// } from "../assets";

import linkWhite from "../assets/link-white.png"
import github from "../assets/github_white.svg"
import email from "../assets/email_white.png"
import bluesky from "../assets/bluesky.svg"
import py from "../assets/python.svg"
import c from "../assets/c.svg"
import cpp from "../assets/cpp.svg"
import java from "../assets/java.svg"
import excel from "../assets/excel.svg"
import html from "../assets/html.svg"
import tex from "../assets/latex.svg"
import tux from "../assets/tux.svg"
import bdayEevee from "../assets/BdayEevee.png"
import qotdEevee from "../assets/QOTD_Eevee.png"
import jerry from "../assets/jerry.png"
import web from "../assets/webpage.png"
import card1 from "../assets/projects/card-1.svg"
import card2 from "../assets/projects/card-2.svg"
import card3 from "../assets/projects/card-3.svg"
import card4 from "../assets/projects/card-4.svg"
import card5 from "../assets/projects/card-5.svg"
import card6 from "../assets/projects/card-6.svg"

export const mainNavigation = [
    {
        id: "0",
        title: "Home",
        url: "/#top",
        onlyMobile: false,
    },
    {
        id: "1",
        title: "About Me",
        url: "/#knowledge",
        onlyMobile: false,
    },
    {
        id: "2",
        title: "Projects",
        url: "/#project",
        onlyMobile: false,
    },
    {
        id: "3",
        title: "Courses",
        url: "/#courses",
        onlyMobile: false,
    },
    {
        id: "4",
        title: "Teaching",
        url: "/teaching",
        onlyMobile: false,
    },
];

export const studentsNav = [
    {
        id: "0",
        title: "Materials",
        url: "/teaching/students#materials",
        onlyMobile: false,
    },
    {
        id: "1",
        title: "Add. Materials",
        url: "/teaching/students#supplementary",
        onlyMobile: false,
    },
    {
        id: "2",
        title: "Teacher's page",
        url: "/teaching/teachers",
        onlyMobile: true,
    },
];

export const teachersNav = [
    {
        id: "0",
        title: "Teacher's materials",
        url: "/teaching/teachers#materials",
        onlyMobile: false,
    },
    {
        id: "1",
        title: "Lesson Plans",
        url: "/teaching/teachers#plans",
        onlyMobile: false,
    },
    {
        id: "2",
        title: "Student's page",
        url: "/teaching/students",
        onlyMobile: true,
    },
];

// export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
    {
        imageUrl: github,
        link: "https://github.com/anormalperson8"
    },
    {
        imageUrl: email,
        link: "mailto:anormalperson8@gmail.com"
    },
    {
        imageUrl: bluesky,
        link: "https://bsky.app/profile/anormalperson8.bsky.social"
    }
];

// export const brainwaveServices = [
//     "Photo generating",
//     "Photo enhance",
//     "Seamless Integration",
// ];

// export const brainwaveServicesIcons = [
//     recording03,
//     recording01,
//     disc02,
//     chromecast,
//     sliders04,
// ];

// export const roadmap = [
//     {
//         id: "0",
//         title: "Voice recognition",
//         text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//         date: "May 2023",
//         status: "done",
//         imageUrl: roadmap1,
//         colorful: true,
//     },
//     {
//         id: "1",
//         title: "Gamification",
//         text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//         date: "May 2023",
//         status: "progress",
//         imageUrl: roadmap2,
//     },
//     {
//         id: "2",
//         title: "Chatbot customization",
//         text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//         date: "May 2023",
//         status: "done",
//         imageUrl: roadmap3,
//     },
//     {
//         id: "3",
//         title: "Integration with APIs",
//         text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//         date: "May 2023",
//         status: "progress",
//         imageUrl: roadmap4,
//     },
// ];

export const selfIntro = "Hi! I'm Sunny! Currently studying computer engineering, " +
    "I am interested in all sorts of things related to the world of computer science, " +
    "from algorithms to machine learning. ";

export const selfInfo = [
    {
        id: "0",
        title: "Year 3 student at the Hong Kong University of Science and Technology (HKUST)",
        text: "HKUST",
        link: "https://hkust.edu.hk",
    },
    {
        id:"1",
        title: "Studying BEng in Computer Engineering (CPEG)",
        text: "BEng in CPEG",
        link: "https://cpeg.hkust.edu.hk",
    },
    {
        id:"2",
        title: "Also pursuing a minor in Humanities (HUMA)",
        text: "minor in HUMA",
        link: "https://shss.hkust.edu.hk/ug/minor/hm/index",
    },
    {
        id:"3",
        title: "I love food and puzzle games and learning about all kinds of trivia"
    }
]

export const languages = [
    {
        id: "0",
        title: "Cantonese",
        text: "(Mother Language)"
    },
    {
        id: "1",
        title: "English",
        text: "(Fluent)",
    },
    {
        id: "2",
        title: "Mandarin",
        text: "(Fluent)",
    },
    {
        id: "3",
        title: "Spanish",
        text: "(Beginner, currently learning on Duolingo)",
    },
];

export const programmingLang = [
    {
        id: "0",
        title: "Java",
    },
    {
        id: "1",
        title: "Python",
    },
    {
        id: "2",
        title: "C/C++",
    },
    {
        id: "3",
        title: "Excel VBA",
    },
    {
        id: "4",
        title: "JavaScript",
    },
];

export const markUpLang = [
    {
        id: "0",
        title: "HTML/CSS",
    },
    {
        id: "1",
        title: "LaTeX",
    },
];

export const otherTechSkills = [
    {
        id: "0",
        title: "Microsoft Office"
    },
    {
        id: "1",
        title: "Knowledge of operating systems such as Windows and Linux",
    },
]

export const circleLogos = [
    {
        id: "0",
        title: "Python",
        icon: py,
        width: 36,
        height: 36,
    },
    {
        id: "1",
        title: "Java",
        icon: java,
        width: 24,
        height: 26,
    },
    {
        id: "2",
        title: "C++",
        icon: cpp,
        width: 34,
        height: 36,
    },
    {
        id: "3",
        title: "C",
        icon: c,
        width: 34,
        height: 36,
    },
    {
        id: "4",
        title: "HTML",
        icon: html,
        width: 46,
        height: 48,
    },
    {
        id: "5",
        title: "Microsoft Excel",
        icon: excel,
        width: 34,
        height: 36,
    },
    {
        id: "6",
        title: "LaTeX",
        icon: tex,
        width: 44,
        height: 46,
    },
    {
        id: "7",
        title: "Linux",
        icon: tux,
        width: 34,
        height: 36,
    },
];

// export const pricing = [
//     {
//         id: "0",
//         title: "Basic",
//         description: "AI chatbot, personalized recommendations",
//         price: "0",
//         features: [
//             "An AI chatbot that can understand your queries",
//             "Personalized recommendations based on your preferences",
//             "Ability to explore the app and its features without any cost",
//         ],
//     },
//     {
//         id: "1",
//         title: "Premium",
//         description: "Advanced AI chatbot, priority support, analytics dashboard",
//         price: "9.99",
//         features: [
//             "An advanced AI chatbot that can understand complex queries",
//             "An analytics dashboard to track your conversations",
//             "Priority support to solve issues quickly",
//         ],
//     },
//     {
//         id: "2",
//         title: "Enterprise",
//         description: "Custom AI chatbot, advanced analytics, dedicated account",
//         price: null,
//         features: [
//             "An AI chatbot that can understand your queries",
//             "Personalized recommendations based on your preferences",
//             "Ability to explore the app and its features without any cost",
//         ],
//     },
// ];

export const projects = [
    {
        id: "0",
        title: "Birthday Eevee",
        text: "A Discord bot that stores guild members' birthdays, and announces them on the corresponding date. " +
            "Themed after Eevee the Pokémon and coded in Python with the Nextcord library.",
        state: "(Creator)",
        backgroundUrl: card1,
        iconUrl: linkWhite,
        imageUrl: bdayEevee,
        link: "https://github.com/anormalperson8/Birthday",
    },
    {
        id: "1",
        title: "QOTD Eevee",
        text: "A Discord bot that allows user submissions of trivia/interesting questions, with an " +
            "approval system for moderators, used for Discord guilds' \"Question of the Day\" (QOTD) channels. " +
            "Themed after Eevee the Pokémon and coded in Python with the Nextcord library.",
        state: "(Creator)",
        backgroundUrl: card2,
        iconUrl: linkWhite,
        imageUrl: qotdEevee,
        link: "https://github.com/anormalperson8/QOTD",
        light: true,
    },
    {
        id: "2",
        title: "Tom-and-Jerry-inspired Maze Game",
        text: "An HKUST Software Engineering course project that is a maze game, based on the cartoon Tom and Jerry.\n" +
            "Includes GUI components and simple algorithms, coded in Java.",
        state: "(Collaborator)",
        backgroundUrl: card3,
        iconUrl: linkWhite,
        imageUrl: jerry,
        link: "https://github.com/151044/COMP3111-Course-Project",
        light: false,
    },
    {
        id: "3",
        title: "Personal Webpage",
        text: "This webpage. Coded with ReactJS and Tailwind CSS.",
        state: "(Creator)",
        backgroundUrl: card4,
        iconUrl: linkWhite,
        imageUrl: web,
        link: "https://github.com/anormalperson8/anormalperson8.github.io",
        light: true,
    },
    // {
    //     id: "4",
    //     title: "Project 5",
    //     text: "Text 5. Description should be inserted later.",
    //     backgroundUrl: "./src/assets/projects/card-5.svg",
    //     iconUrl: linkWhite,
    //     imageUrl: linkWhite,
    //     link: "#top",
    //     light: false,
    // },
    // {
    //     id: "5",
    //     title: "Project 6",
    //     text: "Text 6. Description should be inserted later.",
    //     backgroundUrl: "./src/assets/projects/card-6.svg",
    //     iconUrl: linkWhite,
    //     imageUrl: linkWhite,
    //     link: "#top",
    //     light: false,
    // },
    // {
    //     id: "6",
    //     title: "Project 7",
    //     text: "Text 7. Description should be inserted later.",
    //     backgroundUrl: "./src/assets/projects/card-1.svg",
    //     iconUrl: linkWhite,
    //     imageUrl: linkWhite,
    //     link: "#top",
    //     light: false,
    // },
];

export const files = [
    {
        id: "0",
        title: "Jupyter Notebook Practice",
        text: "For practice in workshop 1.",
        backgroundUrl: card1,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Workshop1-Practice.ipynb",
        light: true,
    },
    {
        id: "1",
        title: "PowerPoint Presentation",
        text: "Notes for workshop 1 in PDF form.",
        backgroundUrl: card2,
        iconUrl: linkWhite,
        link: "src/attached_files/Notes/Workshop1-Notes.pdf",
        light: false,
    },
    {
        id: "2",
        title: "Beamer Presentation",
        text: "Notes for workshop 2 in PDF form.",
        backgroundUrl: card3,
        iconUrl: linkWhite,
        link: "src/attached_files/Notes/Workshop2-Notes.pdf",
        light: true,
    },
    {
        id: "3",
        title: "Jupyter Notebook - Hangman",
        text: "A guided implementation of the Hangman game in Python.",
        backgroundUrl: card4,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Hangman.ipynb",
        light: false,
    },
    {
        id: "4",
        title: "Jupyter Notebook - Hangman (Solution)",
        text: "A guided implementation of the Hangman game in Python, with answers.",
        backgroundUrl: card5,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Hangman_Ans.ipynb",
        light: false,
    },
];

export const teacherFiles = [
    {
        id: "0",
        title: "Beamer Presentation",
        text: "Notes for workshop 2 in PDF form. This is the teacher's version that contains transitions.",
        backgroundUrl: card1,
        iconUrl: linkWhite,
        link: "src/attached_files/Notes/Workshop2-Notes-Teachers.pdf",
        light: false,
    },
    {
        id: "1",
        title: "Take-Home Exercise: Number Guessing Game (Solution)",
        text: "A guided implementation of the Number Guessing game in Python, with answers.",
        backgroundUrl: card2,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Number_Guessing_Ans.ipynb",
        light: true,
    },
    {
        id: "2",
        title: "Jupyter Notebook - Hangman (Solution)",
        text: "A guided implementation of the Hangman game in Python, with answers.",
        backgroundUrl: card3,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Hangman_Ans.ipynb",
        light: false,
    },
    {
        id: "3",
        title: "Kahoot Revision Quiz",
        text: "A quiz for revision at the beginning of workshop 2",
        backgroundUrl: card4,
        iconUrl: linkWhite,
        link: "https://create.kahoot.it/share/idpo-2910-theme-5-lesson-2-revision-quiz/277e2f03-3850-4c3a-a09a-a00622054bfe",
        light: false,
    },
];

export const addFiles = [
    {
        id: "0",
        title: "Jupyter Notebook Upload Guide",
        text: "A guide on how to upload Jupyter Notebook files onto the Google Colaboratory platform",
        backgroundUrl: card1,
        iconUrl: linkWhite,
        link: "src/attached_files/Notes/Jupyter_Notebook_Upload_Instructions.pdf",
        light: false,
    },
    {
        id: "1",
        title: "Supplementary notes",
        text: "Supplementary notes for workshop 1 in PDF form.",
        backgroundUrl: card2,
        iconUrl: linkWhite,
        link: "src/attached_files/Notes/Workshop1-Notes-Supplementary.pdf",
        light: true,
    },
    {
        id: "2",
        title: "Take-Home Exercise: Number Guessing Game",
        text: "A guided implementation of the Number Guessing game in Python.",
        backgroundUrl: card3,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Number_Guessing.ipynb",
        light: false,
    },
    {
        id: "3",
        title: "Take-Home Exercise: Number Guessing Game (Solution)",
        text: "A guided implementation of the Number Guessing game in Python, with answers.",
        backgroundUrl: card4,
        iconUrl: linkWhite,
        link: "src/attached_files/Jupyter-Notebooks/Number_Guessing_Ans.ipynb",
        light: false,
    },
];

export const lessonPlan = [
    {
        id: "0",
        title: "Lesson Plan 1",
        text: "Proposed lesson plan for workshop 1.",
        backgroundUrl: card1,
        iconUrl: linkWhite,
        link: "src/attached_files/Lesson-Plans/Lesson1-Plan.pdf",
        light: true,
    },
    {
        id: "0",
        title: "Lesson Plan 2",
        text: "Proposed lesson plan for workshop 2.",
        backgroundUrl: card2,
        iconUrl: linkWhite,
        link: "src/attached_files/Lesson-Plans/Lesson2-Plan.pdf",
        light: false,
    },
];

// export const socials = [
//     {
//         id: "0",
//         title: "Discord",
//         iconUrl: discordBlack,
//         url: "#",
//     },
//     {
//         id: "1",
//         title: "Twitter",
//         iconUrl: twitter,
//         url: "#",
//     },
//     {
//         id: "2",
//         title: "Instagram",
//         iconUrl: instagram,
//         url: "#",
//     },
//     {
//         id: "3",
//         title: "Telegram",
//         iconUrl: telegram,
//         url: "#",
//     },
//     {
//         id: "4",
//         title: "Facebook",
//         iconUrl: facebook,
//         url: "#",
//     },
// ];

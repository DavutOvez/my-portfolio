const logotext = "Davut Ovezov";
const meta = {
    title: "Davut Ovezov",
    description: "I’m Davut Ovezov, aspiring cybersecurity analyst and backend developer, currently studying in London.",
};
const introdata = {
    title: "I’m Davut Ovezov",
    animated: {
        first: "Junior Backend Developer",
        second: "Cybersecurity Enthusiast",
        third: "Flutter Mobile Developer",
    },
    description: "I’m a student passionate about coding .",
    your_img_url: "/react-portfolio/src/assets/images/IMG_3360_2.jpg", 
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m 15 and passionate about backend development, cybersecurity, and mobile apps. I love coding, learning, and experimenting with new ideas.",
};

const worktimeline = [

    {
        jobtitle: "Airline Reservation System",
        where: "Course Project",
        date: "2025",
    },
    {
        jobtitle: "LMS - Learning Management System",
        where: "Course Project",
        date: "2025",
    },
    {
        jobtitle: "EduStat - Study Time Tracker",
        where: "Personal Project",
        date: "2025",
    },
];

const skills = [
    {
        name: "Python",
        value: 80,
    },
    {
        name: "Django",
        value: 75,
    },
    {
        name: "Flutter",
        value: 60,
    },
    {
        name: "JavaScript",
        value: 45,
    },
    
];

const services = [
    {
        title: "Backend Development",
        description: "Building RESTful APIs and server-side applications with Python and Django.",
    },
    {
        title: "Mobile Application Development",
        description: "Developing cross-platform mobile apps using Flutter and Dart.",
    },
    
];

const dataportfolio = [
    {
        img: "https://via.placeholder.com/400x200?text=Airline+Reservation+System",
        description: "Django-powered airline reservation system for school project.",
        link: "#",
    },
    {
        img: "https://via.placeholder.com/400x200?text=EduStat",
        description: "Terminal app for tracking and analyzing study time.",
        link: "#",
    },
    // İstersen başka projeleri buraya ekleyebiliriz.
];

const contactConfig = {
    YOUR_EMAIL: process.env.REACT_APP_YOUR_EMAIL,
    YOUR_FONE: process.env.REACT_APP_YOUR_PHONE,
    description: process.env.REACT_APP_CONTACT_DESCRIPTION,
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_USER_ID,
};

const socialprofils = {
    github: "https://github.com/DavutOvez",
    tiktok: "https://tiktok.com/@davut__ovez",
    instagram: "https://instagram.com/davut__ovez",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
const logotext = "Davut Ovezov";
const meta = {
    title: "Davut Ovezov",
    description: "I’m Davut Ovezov, aspiring  backend developer.",
};
const introdata = {
    title: "I’m Davutmyrat Ovezov",
    animated: {
        first: "Junior Backend Developer",
        second: "Flutter Mobile Developer",
        third: "Hackathon Winner",
    },
    description: "High school student passionate about coding, experienced in Python/Django and Flutter. Projects include Cheffit (PeddieHacks 2025 winner), airline reservation system, LMS, and Flutter apps. Outside of coding, I enjoy gym, chess, and reading books.",
    your_img_url: "/react-portfolio/src/assets/images/IMG_3360_2.jpg", 
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m 15, passionate about backend development and mobile apps, with hands-on experience in Python/Django and Flutter/Dart. I’ve collaborated on projects like Cheffit—our winning app at PeddieHacks 2025—and built systems like airline reservation and LMS apps. Outside of coding, I enjoy gym, chess, and reading books.",
};

const worktimeline = [
    {
        jobtitle: "Cheffit - Tinder for Recipes (Winner)",
        where: "PeddieHacks 2025 Hackathon",
        date: "2025",
    },
    {
        jobtitle: "Airline Reservation System",
        where: "Django Course Project",
        date: "2025",
    },
    {
        jobtitle: "LMS - Learning Management System",
        where: "Django Course Project",
        date: "2025",
    },
    {
        jobtitle: "Calculator - Flutter Mobile App",
        where: "Personal Project",
        date: "2025",
    },
    {
        jobtitle: "Task Manager - Flutter Mobile App",
        where: "Personal Project",
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
        value: 85,
    },
    {
        name: "Django",
        value: 80,
    },
    {
        name: "Flutter",
        value: 65,
    },
    {
        name: "Dart",
        value: 60,
    },
    {
        name: "JavaScript",
        value: 50,
    },
];
const services = [
    {
        title: "Backend Development",
        description: "Designing and building RESTful APIs and server-side applications using Python and Django.",
    },
    {
        title: "Mobile App Development",
        description: "Developing cross-platform mobile applications with Flutter and Dart.",
    },
];

const dataportfolio = [
    {
        img: "https://via.placeholder.com/400x200?text=Cheffit",
        description: "Cheffit — a Tinder-style recipe discovery app built for PeddieHacks 2025, where our team won the hackathon.",
        link: "#",
    },
    {
        img: "https://via.placeholder.com/400x200?text=Airline+Reservation+System",
        description: "A Django-powered airline reservation system developed as a course project, focusing on backend logic and data handling.",
        link: "#",
    },
    {
        img: "https://via.placeholder.com/400x200?text=LMS",
        description: "A Learning Management System with a Django backend, handling users, courses, and content management.",
        link: "#",
    },
    {
        img: "https://via.placeholder.com/400x200?text=EduStat",
        description: "EduStat — a study time tracking application designed to help students analyze and improve their study habits.",
        link: "#",
    },
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
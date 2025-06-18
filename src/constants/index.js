const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "+", label: "Months of Experience" },
    { value: 5, suffix: "+", label: "Satisfied Client" },
    { value: 8, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Room For Learning" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Akash brings creativity and technical expertise, which significantly improves our frontend performance. His work has been invaluable in delivering faster experiences.",
        // imgPath: "/images/exp5.png",
        logoPath: "/images/logo3.png",
        title: "Frontend Project",
        date: "June 2024",
        responsibilities: [
            " Built a secure full-stack file management app using Next.js 15, React 19, and Appwrite for authentication.",
            " Developed robust file handling features including upload, download, rename, and delete.",
            " Integrated a real-time dashboard with file usage stats, global search, and smart filters.",
            " Engineered a responsive, modular UI for scalability and cross-device compatibility."
        ],
    },
    {
        review: "Akash's contribution to the fullstack web application have been outstanding. He approaches challenges with a problem-solving mindset.",
        // imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Project",
        date: "December 2024",
        responsibilities: [
            "Built a full-featured admin panel to manage books and users using Next.js and TypeScript",
            "Integrated PostgreSQL with Drizzle ORM, Redis caching via Upstash, and real-time email notifications.",
            "Designed a dynamic book borrowing lifecycle with reminders, auto-generated PDF receipts, and onboarding flows.",
            "Developed admin dashboards with search, filters, pagination, and role-based access control."
        ],
    },
    {
        review: "Akash work on full stack web app brought a high level of quality and efficiency. He created solutions that enhanced our  experience & meet our goals.",
        // imgPath: "/images/exp3.png",
        logoPath: "/images/logo4.png",
        title: "Full Stack Project",
        date: "April 2025",
        responsibilities: [
            "Developed an AI-powered mock interview platform with real-time voice interaction capabilities.",
            "Integrated Firebase for secure authentication and persistent interview data tracking.",
            "Implemented Vapi AI for instant feedback and Google Gemini for personalized recommendations.",
            "Built a dynamic dashboard with interview transcripts, performance metrics, and actionable insights.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Omraj Sharma",
        mentions: "@OmrajSharma",
        review:
            "I can’t say enough good things about Akash. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Piyush Thakur",
        mentions: "@PiyushThakur",
        review:
            "Working with Akash was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Sonali Sharma",
        mentions: "@SonaliSharma",
        review:
            "Collaborating with Akash was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Amber Sharma",
        mentions: "@AmberSharma",
        review:
            "Akash was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Ajay Rose",
        mentions: "@AjayRose",
        review:
            "Akash’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Anamika Sharma",
        mentions: "@AnamikaSharma",
        review:
            "Akash was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        link:"https://www.instagram.com/s.o.r.a__kun/"
    },
    {
        name: "github",
        imgPath: "/images/git.png",
        link: "https://github.com/AkashSkSharma"
    },
    {
        name: "x",
        imgPath: "/images/x.png",
        link: "https://x.com/AkashSharma_Dev",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/akash-sharma-707680183/",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
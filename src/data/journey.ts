export interface Journey {
    id: string;
    educationId?: string;
    color?: string;
    title: string;
    subtitle: string;
    date: string;
    location: string;
    blurb: string;
    description: string[];
}
const journey: Journey[] = [
    {
        id: "dell-2025",
        title: "Software Developer II",
        subtitle: "Dell Technologies",
        date: "May 2025 - Present",
        location: "Ottawa, Canada",
        blurb: "Radio software development",
        description: [
            "At Dell, I produce and maintain software for the company's radio products, which are used in wireless communication systems. This involves designing, coding, testing, and debugging software components, including drivers and services, that control the operation of radio hardware.",
            "I work cross-functionally with hardware and systems teams to ensure that our software meets performance and reliability standards, and I stay up-to-date with industry trends to incorporate new technologies into our products."
        ],
    },
    {
        id: "mbc-2024",
        title: "Software Developer",
        subtitle: "McGill Biomechanics Club",
        date: "Sept 2024 - May 2025",
        location: "Montreal, Canada",
        blurb: "EMG data healthcare portal",
        description: [
            "As a Software Developer at the McGill Biomechanics Club, I developed a full-stack platform that serves as a user portal for both patients and doctors. The platform integrates real-time sensor EMG data to display results in a user-friendly way and support exoskeleton testing for tremor suppression and monitoring.",
            "This system enables patients and healthcare professionals to track muscle activity, analyze trends, and monitor progress in a clear, accessible format. I was involved in the full software development life cycle, including design, development, testing, and deployment. This included gathering requirements, creating technical designs, implementing both frontend and backend features, conducting code reviews, and ensuring the platform's scalability.",
            "I also worked on optimizing real-time data processing and enhancing user experience, ensuring that both patients and doctors could easily access and interpret critical health data."
        ],
    },
    {
        id: "amazon-2024",
        title: "Software Development Engineer Intern",
        subtitle: "Amazon",
        date: "May 2024 - Aug 2024",
        location: "Vancouver, Canada",
        blurb: "ECommerce ordering accounting software",
        description: [
            "At Amazon, I developed a full-stack platform for the Ordering Accounting team--used by over 100 Amazon engineers--that automated the execution of a service to redrive accounting workflows triggered by financially significant events. This included building a responsive React website from scratch and integrating other financial services into the backend to seamlessly handle accounting events.",
            "I contributed to CI/CD pipelines for efficient deployment and integration testing and to ensure rapid releases. This experience allowed me to enhance both frontend and backend development skills, leveraging AWS Lambda, S3, DynamoDB, and EventBridge, and collaborating with cross-functional teams to create operational improvements.",
            "Throughout the project, I followed Agile methodologies, participating in sprint activities and iterative development, while adhering to best practices for the full software development life cycle, including code reviews, source control, testing, and operations."
        ],
    },
    {
        id: "msbn-2023",
        title: "Consultant",
        subtitle: "McGill Social Business Network",
        date: "Sept 2023 - Apr 2024",
        location: "Montreal, Canada",
        blurb: "Pro-bono consulting for local nonprofits",
        description: [
            "As a Consultant at the McGill Social Business Network, I provided pro-bono initiatives to develop marketing and financial strategies for a local nonprofit organization. I helped expand more than 2 consignment opportunities and organized annual conferences to boost both awareness and profitability. My role involved collaborating with the client to create sustainable growth strategies while supporting their mission."
        ],
    },
    {
        id: "mcgill-ca-2022",
        title: "Undergraduate Course Assistant",
        subtitle: "McGill University",
        date: "Aug 2022 - Dec 2023",
        location: "Montreal, Canada",
        blurb: "Anatomical science lead",
        description: [
            "At McGill University, I served as an Undergraduate Course Assistant for an anatomy course, where I facilitated weekly lab sessions for a diverse group of 20 students, fostering an interactive learning environment. I also streamlined grading and feedback processing by developing Python scripts, improving both efficiency and accuracy."
        ],
    },
    {
        id: "rvh-2020",
        title: "Intensive Care Unit Volunteer Attendant",
        subtitle: "Royal Victoria Hospital",
        date: "Sept 2020 - May 2023",
        location: "Montreal, Canada",
        blurb: "Healthcare support and patient liaison",
        description: [ 
            "As an ICU Volunteer Attendant at the Royal Victoria Hospital, I provided support to over 100 visitors, patients, and healthcare staff in the ICU on a weekly basis. My responsibilities included greeting and escorting visitors around the ICU, ensuring their comfort, and keeping track of more than 30 patients using the ICU patient log. This experience honed my communication and organizational skills, allowing me to assist healthcare teams while maintaining a calm and supportive environment for patients and their families."
        ],
    },
    {
        id: "mcgill-2020",
        title: "McGill University",
        subtitle: "Bachelor of Science",
        date: "Sept 2020 - May 2025",
        location: "Montreal, Canada",
        blurb: "Software Engineering and Anatomy & Cell Biology",
        description: [
            "Coursework in systems programming, algorithms, web development, linear algebra, statistics, discrete math, human anatomy, molecular and cell biology, physiology, immunology, neuroscience, and more.",
            "Activities and societies include Varsity Artistic Swimming, McGill Social Business Network Consulting, McGill Biomechanics Club, McGill Artificial Intelligence Society, McGill Consulting Association, The McGill Tribune, HOSA McGill, McGill Triathlon Club."
        ],
    },
];

export default journey;
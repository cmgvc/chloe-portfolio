import PageLayout from "../PageLayout";
import SectionSubtitle from "../../components/SectionSubtitle";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const CONTACT_LINKS = [
    { label: "chloe.gavv@gmail.com", href: "mailto:chloe.gavv@gmail.com", icon: EmailIcon, color: "hover:text-[#b95c23]" },
    { label: "@cmgvc", href: "https://github.com/cmgvc", icon: GitHubIcon, color: "hover:text-[#FF8C42]" },
    { label: "@chloe-gav", href: "https://www.linkedin.com/in/chloe-gav/", icon: LinkedInIcon, color: "hover:text-[#FF8C42]" },
];

export default function Contact() {
    return (
        <PageLayout label="Contact" title="Contact Me" divId="contact-div" icon={null}>
            <SectionSubtitle>Always open to new projects. Let’s build something.</SectionSubtitle>
            
            <section className="mt-4 flex flex-col gap-4 mb-[5vh]">
                {CONTACT_LINKS.map(({ label, href, icon: Icon, color }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-1 flex gap-6 font-semibold duration-300 items-center ${color}`}
                    >
                        <Icon className="bg-black rounded-md scale-[1.3]" />
                        <span>{label}</span>
                    </a>
                ))}
            </section>

            <footer className="mt-10 opacity-50 text-center">
                <p>© 2026 Chloe Gav. All rights reserved.</p>
            </footer>
        </PageLayout>
    );
}
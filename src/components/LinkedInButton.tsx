import { SiLinkedin } from "react-icons/si";
import Button from "./Button";

interface LinkedInButtonProps {
    url: string;
    label?: string;
}

export default function LinkedInButton({ url, label = "LinkedIn" }: LinkedInButtonProps) {
    return (
        <Button
            className="flex items-center justify-center gap-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <SiLinkedin className="w-6 h-6" />
            <span className="font-semibold">{label}</span>
        </Button>
    );
}
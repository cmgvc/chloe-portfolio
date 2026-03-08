import { SiGithub } from "react-icons/si";
import Button from "./Button";

interface GitHubButtonProps {
    url: string;
    label?: string;
}

export default function GitHubButton({ url, label = "GitHub" }: GitHubButtonProps) {
    return (
        <Button
            className="flex items-center justify-center gap-2"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <SiGithub className="w-6 h-6" />
            <span className="font-semibold">{label}</span>
        </Button>
    );
}



export default function Beyond({ onBack }: { onBack: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="text-4xl font-bold">Beyond This Portfolio</h1>
            <p className="text-center max-w-xl">
                This portfolio is just a snapshot of my journey and experiences. Beyond this, I have a wide range of projects, collaborations, and adventures that I haven't included here. If you're curious to see more of my work, learn about my future aspirations, or just want to connect, feel free to reach out or explore further!
            </p>
            <button
                onClick={onBack}
                className="px-6 py-3 bg-[#f0c6a6] text-[#0D0B0A] font-bold rounded hover:bg-[#e0b080] transition"
            >
                Back to Portfolio
            </button>
        </div>
    );
}
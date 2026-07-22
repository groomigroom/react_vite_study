interface FooterPartProps {
    text: string;
};

export default function FooterPart({ text }: FooterPartProps) {
    return (
        <footer>
            <p>{text}</p>
        </footer>
    );
};

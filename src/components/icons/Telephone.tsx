interface TelephoneProps {
    className?: string;
};

export default function Telephone({ className }: TelephoneProps) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 384">
            <path
                d="M212,231.4a73.39,73.39,0,0,0-32.68,60.4c-24.28-11.95-47.82-31.81-64.12-65.18-15.76-32.25-18.46-61-14.89-85.42a73.42,73.42,0,0,0,69.15,19c39.4-9.72,4.21-152.41-35.2-142.7A73.52,73.52,0,0,0,78.43,90.36C48.19,126.41,24.71,204.42,53.36,262.73c29.48,60,106.43,89.59,152.22,86a73.51,73.51,0,0,0,88.07,4.85C327.41,331.09,245.79,208.86,212,231.4Z"
                style={{
                    fill: "none",
                    stroke: "#fff",
                    strokeLinejoin: "round",
                    strokeWidth: 14,
                }}
            />
        </svg>
    );
}

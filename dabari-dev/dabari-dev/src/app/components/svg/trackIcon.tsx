import { cn } from "../../../../lib/utils";

export default function TrackIcon({ className }: { className?: string }) {
	return (
		<svg
			width="19"
			height="19"
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-[19px] h-[19px] stroke-[#BBBFC6]", className)}
		>
			<path
				d="M18 9.5V2.41667C18 1.63427 17.3658 1 16.5833 1H2.41667C1.63427 1 1 1.63427 1 2.41667V16.5833C1 17.3658 1.63427 18 2.41667 18H9.5"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.2777 16.1111C14.8425 16.1111 16.111 14.8426 16.111 13.2778C16.111 11.7129 14.8425 10.4444 13.2777 10.4444C11.7128 10.4444 10.4443 11.7129 10.4443 13.2778C10.4443 14.8426 11.7128 16.1111 13.2777 16.1111Z"
				strokeWidth="2"
			/>
			<path
				d="M15.6389 15.1667L18 17.0556"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.77783 5.72223H14.2223"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.77783 9.5H8.55561"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

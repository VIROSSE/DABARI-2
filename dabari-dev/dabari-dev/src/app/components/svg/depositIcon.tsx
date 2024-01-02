import { cn } from "../../../../lib/utils";

export default function DepositIcon({ className }: { className?: string }) {
	return (
		<svg
			width="34"
			height="34"
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-[34px] h-[34px] fill-white", className)}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.50008 29.75L25.5001 29.75C28.6167 29.75 31.1667 27.2 31.1667 24.0833C31.1667 21.675 29.7501 19.6917 27.6251 18.8417L27.6251 24.0833C27.6251 24.65 27.3417 25.2167 27.0584 25.6417C26.7751 26.0667 26.0667 26.2083 25.5001 26.2083L8.50008 26.2083C7.93341 26.2083 7.36675 25.925 6.94175 25.6417C6.51675 25.3583 6.37508 24.65 6.37508 24.0833L6.37508 18.8417C4.25008 19.6917 2.83342 21.675 2.83342 24.0833C2.83342 27.2 5.38342 29.75 8.50008 29.75ZM8.50008 7.08333L8.50008 24.0833L25.5001 24.0833L25.5001 7.08333C25.5001 5.525 24.2251 4.25 22.6667 4.25L11.3334 4.25C9.77508 4.25 8.50008 5.525 8.50008 7.08333ZM18.1334 16.4333L19.1251 15.4417C19.5501 15.0167 20.2584 15.0167 20.6834 15.4417C21.1084 15.8667 21.1084 16.575 20.6834 17L18.8417 18.8417C17.8501 19.8333 16.2917 19.8333 15.3001 18.8417L13.4584 17C13.0334 16.575 13.0334 15.8667 13.4584 15.4417C13.8834 15.0167 14.5917 15.0167 15.0167 15.4417L16.0084 16.4333L16.0084 10.4833C16.0084 9.91667 16.4334 9.35 17.1417 9.35C17.8501 9.35 18.2751 9.775 18.2751 10.4833L18.2751 16.4333L18.1334 16.4333Z"
			/>
		</svg>
	);
}
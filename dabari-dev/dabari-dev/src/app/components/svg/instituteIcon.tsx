import { cn } from "../../../../lib/utils";

export default function InstituteIcon({ className }: { className?: string }) {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-[20px] h-[20px] fill-[#3D4B5A]", className)}
		>
			<path d="M19.0822 18.1722H0.908898C0.406791 18.1722 0 18.579 0 19.0815C0 19.5832 0.406791 19.99 0.908898 19.99H19.0817C19.5839 19.99 19.9906 19.5832 19.9906 19.0815C19.9902 18.579 19.5834 18.1722 19.0822 18.1722Z" />
			<path d="M2.04464 15.8093C1.54253 15.8093 1.13574 16.2161 1.13574 16.7182C1.13574 17.2203 1.54253 17.6276 2.04464 17.6276H17.9461C18.4482 17.6276 18.855 17.2203 18.855 16.7182C18.855 16.2161 18.4482 15.8093 17.9461 15.8093H17.7193V7.63095H17.9461C18.1976 7.63095 18.4001 7.42756 18.4001 7.17693C18.4001 6.9263 18.1967 6.72291 17.9461 6.72291H2.04464C1.79359 6.72291 1.59062 6.9263 1.59062 7.17693C1.59062 7.42756 1.79401 7.63095 2.04464 7.63095H2.27186V15.8089L2.04464 15.8093ZM15.9015 7.63095V15.8089H13.1757V7.63095H15.9015ZM11.3579 7.63095V15.8089H8.63202V7.63095H11.3579ZM4.08881 7.63095H6.81465V15.8089H4.08881V7.63095Z" />
			<path d="M0.908915 5.90592H19.0818C19.0847 5.90592 19.0881 5.90592 19.0907 5.90592C19.5932 5.90592 19.9996 5.49913 19.9996 4.99702C19.9996 4.59789 19.7426 4.25961 19.3856 4.13706L10.3689 0.0797839C10.1319 -0.0265946 9.86088 -0.0265946 9.62344 0.0797839L0.536165 4.16855C0.145117 4.34471 -0.069767 4.76937 0.0204419 5.18808C0.110225 5.60678 0.480422 5.90592 0.908915 5.90592Z" />
		</svg>
	);
}
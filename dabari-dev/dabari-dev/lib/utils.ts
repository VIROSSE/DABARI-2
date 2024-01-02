import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomWord = "";
  for (let i = 0; i < 2; i++) {
    randomWord += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  const randomNumber = Math.floor(Math.random() * 10000);

  const result = randomWord + randomNumber.toString();

  return result;
}

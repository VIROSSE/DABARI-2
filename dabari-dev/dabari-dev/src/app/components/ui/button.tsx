import * as React from "react"
import { cn } from "../../../../lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import Link from "next/link"
import Image from "next/image"
import RightArrow from '../../../../public/icons/arrows/right-arrow.svg'

import Loading from '../../../../public/icons/other/loading.png'



const buttonVariants = cva(
  "inline-flex items-center  justify-center  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background rounded-xl",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr from-[#3D4B5A] to-[#85AED5] relative text-white transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        destructive:
          " text-red-500 hover:bg-red-200/60 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        outline:
          "border border-input hover:bg-primary/10 text-primary/80 border-primary/80 dark:text-primary/70 dark:border-primary/70 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        secondary:
          "bg-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary/100 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        ghost:
          "hover:bg-primary/10 hover:text-primary/80 text-primary/90 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        link: "underline-offset-4 hover:underline text-primary transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        dark: "bg-black text-primary-foreground transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-none hover:border border-black hover:text-black text-sm dark:bg-gray-900 dark:text-gray-100 hover:text-white",
        tab: "whitespace-nowrap px-3 py-1 transition-all data-[state=active]:border-b-transparent data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      },
      size: {
        default: "h-10 py-2 px-7",
        sm: "h-10  px-3 text-xs",
        lg: "h-14 px-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { onSubmitLoading?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)




const ButtonWithIcon = ({ title, className, size, link = '/' }: { title: string, className?: string, size?: 'lg' | 'sm', link?: string }) => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        buttonVariants({ variant: "default", size: size ?? 'default' }),
        "  space-x-3", className
      )}
    >

      <p className='text-sm md:text-base'>{title}</p>
      <Image
        src={RightArrow}
        alt="right arrow"
        className="-ml-1"
        height={10}
        loading='lazy'
      />
    </Link>
  )
}


const SubmitButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, title, onSubmitLoading, ...props }, ref) => {
    return (
      <button
        type="submit"
        disabled={onSubmitLoading}
        className={cn(
          buttonVariants({ variant: "default" }),
          "font-bold text-base px-8 space-x-3", className
        )}
        {...props}
      >
        <p >{title}</p>

        {onSubmitLoading ? (
          <Image
            src={Loading}
            alt="log"
            height={18}
            loading='lazy'
            className='spin-in animate-spin'
          />
        ) : (
          <Image
            src={RightArrow}
            alt="right arrow"
            className=""
            height={10}
            loading='lazy'
          />
        )}
      </button>
    )
  }
)



Button.displayName = "Button"
SubmitButtonWithIcon.displayName = "SubmitButtonWithIcon"


export { Button, buttonVariants, ButtonWithIcon, SubmitButtonWithIcon }

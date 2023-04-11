import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { classNameOptimization } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';


export const Variants = cva(
    'active:scale-95 inline-flex items-center justify-center transition rounded-md text-sm font-medium transition-colors  focus:ring-20 bg-primary',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-white hover:bg-orange-800 ',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-14 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps <typeof Variants> {

};
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, variant,size, ...props }, ref) => {
        return (
            <button  
                className={classNameOptimization(Variants({ variant, size, className }))}
                ref={ref}
                {...props}>
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'
export default Button;
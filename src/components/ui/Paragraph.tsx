import { FC, HTMLAttributes, HtmlHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'cva'
import { classNameOptimization } from '@/lib/utils';
const Variants = cva("mb-2 text-center block", {
  variants: {
    size: {
      default: 'text-base lg:text-paragraph text-lg',
      md: 'text-2xl text-black font-semibold',
      sm: "text-xl font-semibold",
      lg: "text-3xl lg:text-4xl font-semibold",
      title: "lg:text-5xl text-black xs:text-4xl font-semibold xs:leading-normal lg:leading-relaxed"
    }
  },
  defaultVariants: {
    size: 'default'
}
})

interface ParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement>, VariantProps<typeof Variants> {

};
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={classNameOptimization(Variants({ size, className }))}>
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph;
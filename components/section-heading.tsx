import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  eyebrow?: string
  description?: string
  className?: string
}

export function SectionHeading({ title, eyebrow, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-16 md:mb-20', className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
    </div>
  )
}
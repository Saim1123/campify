import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "../../lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ className, container = true, children, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("relative py-20 md:py-32", className)}
    {...props}
  >
    {container ? (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    ) : (
      children
    )}
  </section>
));

Section.displayName = "Section";

export { Section };

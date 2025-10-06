import { ComponentPropsWithoutRef, ReactNode, ElementType } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: ReactNode;
  className: string;
  background: ReactNode;
  Icon: ElementType;
  description: string;
  href: string;
  cta: string;
}

function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 gap-4", className)} {...props}>
      {children}
    </div>
  );
}

function BentoCard({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        className,
      )}
      {...props}
    >
      <div className="p-4">
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-14">
          <Icon className="h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <Button
            variant="link"
            size="sm"
            className={cn(
              "pointer-events-auto p-0",
              "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
            )}
          >
            <span>{cta}</span>
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Button>
        </Link>
      </div>
      <div>{background}</div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Button variant="link" size="sm" className="pointer-events-auto p-0" tabIndex={-1} aria-hidden="true" asChild>
          <span className="flex items-center">
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </span>
        </Button>
      </Link>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-foreground/[.03]" />
    </div>
  );
}

export { BentoCard, BentoGrid };

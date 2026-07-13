
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Section({
    children,
    className,
    id,
    fullWidth = false,
    background = "transparent",
    ...props
}) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24",
                background === "brand" && "bg-brand-900 text-white",
                background === "surface" && "bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-white",
                className
            )}
            {...props}
        >
            <div className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                !fullWidth && "max-w-7xl",
                "relative z-10"
            )}>
                {children}
            </div>
        </section>
    );
}

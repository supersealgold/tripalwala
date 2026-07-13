
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const variants = {
    primary: "[background:linear-gradient(to_right,#CC2525,#F5A520)] text-white hover:brightness-110 shadow-lg shadow-red-500/30",
    secondary: "bg-surface-100 text-surface-900 hover:bg-surface-200 border border-surface-200",
    outline: "bg-transparent border border-surface-300 text-surface-700 hover:border-red-500 hover:text-red-600",
    subtle: "bg-transparent text-surface-600 hover:text-red-600 hover:bg-red-50",
    glass: "glass text-surface-900 hover:bg-white/80 border-white/40 shadow-sm",
};

const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg font-semibold",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    as: Component = "button",
    ...props
}) {
    return (
        <Component
            className={cn(
                "inline-flex items-center justify-center rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

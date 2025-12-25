import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const Component = asChild ? motion.slot : motion.button;

    const variants = {
        primary: 'bg-sac-primary hover:bg-sac-secondary text-sac-darker font-bold shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)] border border-sac-accent/20',
        outline: 'bg-transparent border border-sac-primary text-sac-primary hover:bg-sac-primary/10 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]',
        ghost: 'bg-transparent hover:bg-sac-primary/5 text-gray-300 hover:text-white',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-lg',
    };

    const sizes = {
        sm: 'h-8 px-4 text-xs',
        md: 'h-10 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10 p-2 flex items-center justify-center',
    };

    return (
        <Component
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </Component>
    );
});

Button.displayName = 'Button';

export { Button };

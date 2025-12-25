import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            className={cn(
                'relative overflow-hidden rounded-2xl bg-dark-card/50 backdrop-blur-xl border border-white/5 shadow-xl transition-all duration-300 hover:border-sac-primary/20 hover:shadow-2xl hover:shadow-sac-primary/5',
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-sac-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 p-6">
                {children}
            </div>
        </motion.div>
    );
});

Card.displayName = 'Card';

export { Card };

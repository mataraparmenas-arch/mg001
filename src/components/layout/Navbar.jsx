import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.jpg';

const NavLink = ({ to, children, mobile = false }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={cn(
                "relative font-medium transition-colors hover:text-sac-primary",
                isActive ? "text-sac-primary" : "text-gray-300",
                mobile ? "block py-3 text-lg" : "text-sm"
            )}
        >
            {children}
            {!mobile && isActive && (
                <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-sac-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-dark-bg/80 backdrop-blur-lg border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} alt="M-Grand Sacco" className="h-10 w-10 object-contain rounded-xl" />
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-sac-primary transition-colors">
                            M-Grand<span className="text-sac-primary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/loans">Loans & Products</NavLink>
                        <NavLink to="/membership">Membership</NavLink>
                        <NavLink to="/downloads">Resources</NavLink>
                        <NavLink to="/news">News</NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link to="/contact">Contact</Link>
                        </Button>
                        <Button size="sm" className="shadow-lg shadow-sac-primary/20">
                            Join Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-dark-bg/95 backdrop-blur-xl"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                            <NavLink to="/" mobile>Home</NavLink>
                            <NavLink to="/about" mobile>About Us</NavLink>
                            <NavLink to="/loans" mobile>Loans & Products</NavLink>
                            <NavLink to="/membership" mobile>Membership</NavLink>
                            <NavLink to="/downloads" mobile>Resources</NavLink>
                            <NavLink to="/news" mobile>News</NavLink>
                            <NavLink to="/contact" mobile>Contact</NavLink>
                            <div className="pt-4 flex flex-col gap-3">
                                <Button className="w-full justify-center">Join M-Grand Sacco</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

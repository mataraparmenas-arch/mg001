import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { SOCIAL_LINKS } from '../../lib/constants';
import logo from '../../assets/logo.jpg';

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="text-gray-400 hover:text-sac-primary transition-colors flex items-center gap-2 group">
            <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3 opacity-0 group-hover:opacity-100">
                <ArrowRight size={12} />
            </span>
            {children}
        </Link>
    </li>
);

const Footer = () => {
    return (
        <footer className="relative bg-dark-bg border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sac-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="M-Grand Sacco" className="h-8 w-8 rounded-lg object-contain" />
                            <span className="text-xl font-bold text-white">M-Grand Sacco</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering members through futuristic financial solutions. Join the fastest growing global digital cooperative today.
                        </p>
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-sac-primary hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-sac-primary hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-sac-primary hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-sac-primary hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/about">About Us</FooterLink>
                            <FooterLink to="/loans">Our Products</FooterLink>
                            <FooterLink to="/membership">Membership</FooterLink>
                            <FooterLink to="/downloads">Downloads</FooterLink>
                            <FooterLink to="/news">News & Events</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 text-sac-primary" size={20} />
                                <span>Nairobi, Kenya<br />M-Grand Plaza, 4th Floor</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-sac-primary" size={20} />
                                <span>+254 700 000 000</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-sac-primary" size={20} />
                                <span>mgrand20242024@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4 text-sm">Subscribe to get the latest financial insights and Sacco news.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-sac-primary transition-colors"
                            />
                            <Button className="w-full">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} M-Grand Sacco. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

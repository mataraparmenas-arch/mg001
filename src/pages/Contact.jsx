import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-dark-bg pt-28 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                                Get in <span className="text-sac-primary">Touch</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                We are here to help. Reach out to us for any inquiries, support, or feedback.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="p-6 bg-sac-primary/5 hover:bg-sac-primary/10 transition-colors">
                                <div className="h-10 w-10 rounded-full bg-sac-primary/20 flex items-center justify-center text-sac-primary mb-4">
                                    <Phone size={20} />
                                </div>
                                <h3 className="font-bold text-white mb-1">Call Us</h3>
                                <p className="text-gray-400 text-sm">+254 700 000 000</p>
                                <p className="text-gray-400 text-sm">+254 20 123 4567</p>
                            </Card>

                            <Card className="p-6 bg-sac-primary/5 hover:bg-sac-primary/10 transition-colors">
                                <div className="h-10 w-10 rounded-full bg-sac-primary/20 flex items-center justify-center text-sac-primary mb-4">
                                    <Mail size={20} />
                                </div>
                                <h3 className="font-bold text-white mb-1">Email Us</h3>
                                <p className="text-gray-400 text-sm">info@mgrandsacco.com</p>
                                <p className="text-gray-400 text-sm">support@mgrandsacco.com</p>
                            </Card>

                            <Card className="p-6 bg-sac-primary/5 hover:bg-sac-primary/10 transition-colors md:col-span-2">
                                <div className="h-10 w-10 rounded-full bg-sac-primary/20 flex items-center justify-center text-sac-primary mb-4">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-bold text-white mb-1">Visit Us</h3>
                                <p className="text-gray-400 text-sm"> kisii, Kenya.</p>
                            </Card>
                        </div>

                        {/* Map Embed */}
                        <div className="h-64 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.278367984955!2d36.814835!3d-1.283253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7607730e9%3A0x6b4f7c2275726211!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1684852934321!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8 h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <MessageSquare className="text-sac-primary" size={24} />
                                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Subject</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors appearance-none">
                                            <option className="bg-dark-card text-gray-300">General Inquiry</option>
                                            <option className="bg-dark-card text-gray-300">Loan Support</option>
                                            <option className="bg-dark-card text-gray-300">Membership Support</option>
                                            <option className="bg-dark-card text-gray-300">Partnership</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="your@email.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea rows="6" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button className="w-full h-12 text-lg">Send Message</Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

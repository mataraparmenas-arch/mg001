import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CheckCircle, Download, UserPlus } from 'lucide-react';

const Membership = () => {
    return (
        <div className="min-h-screen bg-dark-bg pt-28 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                                Join the <span className="text-sac-primary">Revolution</span>
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Become a member of M-Grand Sacco today and unlock a world of financial opportunities. We are open to the global diaspora and local investors.
                            </p>
                        </div>

                        <Card className="p-8 border-sac-primary/20">
                            <h3 className="text-xl font-bold text-white mb-6">Membership Benefits</h3>
                            <ul className="space-y-4">
                                {[
                                    "High dividend rates on share capital",
                                    "Access to affordable development loans",
                                    "Digital banking platform access",
                                    "Networking opportunities",
                                    "Financial literacy training",
                                    "Emergency support fund"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="text-sac-primary shrink-0" size={20} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <div className="p-6 rounded-2xl bg-sac-primary/10 border border-sac-primary/20">
                            <h4 className="text-white font-bold mb-2">Requirements</h4>
                            <p className="text-sm text-gray-400 mb-4">
                                You will need a copy of your National ID/Passport and a passport-sized photo.
                            </p>
                            <Button variant="outline" className="w-full sm:w-auto">
                                <Download className="mr-2" size={16} /> Download Application Form
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Application Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-full bg-sac-primary/20 flex items-center justify-center text-sac-primary">
                                    <UserPlus size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Apply Online</h3>
                                    <p className="text-gray-400 text-sm">Start your membership journey</p>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">First Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Phone Number</label>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors" placeholder="+254 700 000 000" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Membership Category</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-sac-primary outline-none transition-colors appearance-none">
                                        <option className="bg-dark-card text-gray-300">Individual Membership</option>
                                        <option className="bg-dark-card text-gray-300">Corporate Membership</option>
                                        <option className="bg-dark-card text-gray-300">Diaspora Membership</option>
                                    </select>
                                </div>

                                <Button className="w-full h-12 text-lg">Submit Application</Button>
                                <p className="text-xs text-center text-gray-500">
                                    By submitting this form, you agree to our Terms and Conditions and Privacy Policy.
                                </p>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Membership;

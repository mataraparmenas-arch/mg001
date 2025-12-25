import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Target, Eye, Heart, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-dark-bg pb-20">
            <SEO title="About Us" description="Learn about M-Grand Sacco's vision, mission, and leadership team." />
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-sac-primary/10 rounded-full blur-[100px]" />

                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
                    >
                        Empowering Your <span className="text-sac-primary">Financial Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        M-Grand Sacco is a next-generation cooperative digital platform designed to bring world-class financial services to the global diaspora and local investors.
                    </motion.p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="container mx-auto px-4 py-12">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <Card className="p-8 border-sac-primary/20 bg-dark-card/40">
                        <div className="h-14 w-14 rounded-full bg-sac-primary/10 flex items-center justify-center text-sac-primary mb-6">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To be the leading global digital cooperative, providing seamless, secure, and innovative financial freedom to members worldwide.
                        </p>
                    </Card>

                    <Card className="p-8 border-sac-primary/20 bg-dark-card/40">
                        <div className="h-14 w-14 rounded-full bg-sac-primary/10 flex items-center justify-center text-sac-primary mb-6">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering members through technology-driven financial solutions, fostering a culture of saving, and enabling sustainable investment growth.
                        </p>
                    </Card>

                    <Card className="p-8 border-sac-primary/20 bg-dark-card/40">
                        <div className="h-14 w-14 rounded-full bg-sac-primary/10 flex items-center justify-center text-sac-primary mb-6">
                            <Heart size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-sac-primary" /> Integrity & Trust</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-sac-primary" /> Innovation First</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-sac-primary" /> Member Centricity</li>
                            <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-sac-primary" /> Global Inclusivity</li>
                        </ul>
                    </Card>
                </motion.div>
            </section>

            {/* Leadership Team Mockup */}
            <section className="container mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12 font-display">Leadership Team</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="group overflow-hidden">
                            <div className="h-64 bg-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
                                {/* Placeholder for CMS Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    <Award size={48} className="opacity-20" />
                                </div>
                            </div>
                            <div className="p-4 relative">
                                <h4 className="text-lg font-bold text-white">John Doe</h4>
                                <p className="text-sm text-sac-primary">Board Member</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;

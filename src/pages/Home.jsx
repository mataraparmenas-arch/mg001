import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Globe, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import SEO from '../components/SEO';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark-bg">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sac-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sac-accent text-sm font-medium mb-4"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sac-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sac-primary"></span>
                        </span>
                        The Future of Cooperative Banking
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display"
                    >
                        Financial Freedom for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sac-primary via-sac-accent to-white">
                            Global Generation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join M-Grand Sacco today. Experience seamless digital banking, competitive loans, and a community built for growth. Secure. Global. Future-ready.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full">
                            Become a Member <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/5">
                            Explore Products
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </section>
    );
};

const Stats = () => {
    const stats = [
        { label: "Active Members", value: "15,000+", icon: Users },
        { label: "Total Assets", value: "ksh50M+", icon: TrendingUp },
        { label: "Loans Issued", value: "ksh35M+", icon: ShieldCheck },
        { label: "Global Reach", value: "12 Counties", icon: Globe },
    ];

    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mx-auto h-12 w-12 bg-sac-primary/10 rounded-2xl flex items-center justify-center text-sac-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, icon: Icon, delay }) => (
    <Card className="h-full flex flex-col" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay }} viewport={{ once: true }}>
        <div className="h-12 w-12 rounded-lg bg-sac-primary/10 flex items-center justify-center text-sac-primary mb-6">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <div className="flex items-center text-sac-primary font-medium group cursor-pointer">
            Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </Card>
);

const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">Why Choose M-Grand?</h2>
                    <p className="text-gray-400 text-lg">
                        We combine traditional cooperative values with cutting-edge technology to give you the best financial experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Digital-First Banking"
                        description="Manage your account, apply for loans, and track your savings from anywhere in the world with our secure platform."
                        icon={Globe}
                        delay={0.1}
                    />
                    <FeatureCard
                        title="Competitive Loans"
                        description="Access flexible loan products with low interest rates designed to help you grow your business and personal wealth."
                        icon={TrendingUp}
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Secure & Transparent"
                        description="Your funds are safe with us. We use enterprise-grade security and maintain full transparency in all operations."
                        icon={ShieldCheck}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="bg-dark-bg">
            <SEO title="Home" />
            <Hero />
            <Stats />
            <Features />
        </div>
    );
};

export default Home;

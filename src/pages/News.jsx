import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsCard = ({ title, date, author, excerpt, image, category, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="h-full"
    >
        <Card className="h-full flex flex-col overflow-hidden p-0 group cursor-pointer hover:border-sac-primary/40">
            <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-sac-primary text-dark-bg text-xs font-bold uppercase rounded-full">
                    {category}
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-60" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{author}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sac-primary transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-sac-primary text-sm font-medium">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </Card>
    </motion.div>
);

const News = () => {
    const posts = [
        {
            title: "M-Grand Sacco Declares Record Dividends for 2024",
            date: "Dec 15, 2024",
            author: "Admin",
            category: "Announcements",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
            excerpt: "We are pleased to announce a 15% dividend payout on share capital and 12% interest on deposits for the financial year ending 2024."
        },
        {
            title: "New Diaspora Banking Features Launched",
            date: "Nov 28, 2024",
            author: "Tech Team",
            category: "Product Update",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            excerpt: "Our new digital platform features enhanced security and seamless international transfers for our diaspora members."
        },
        {
            title: "Financial Literacy Webinar Series",
            date: "Nov 10, 2024",
            author: "Education Comm.",
            category: "Events",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
            excerpt: "Join us this weekend for an exclusive webinar on 'Investment Strategies for 2025' featuring top financial experts."
        },
        {
            title: "AGM Scheduled for January 2025",
            date: "Oct 05, 2024",
            author: "Secretary",
            category: "Notices",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop",
            excerpt: "Notice is hereby given that the Annual General Meeting will be held virtually on January 25th, 2025."
        }
    ];

    return (
        <div className="min-h-screen bg-dark-bg pt-28 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                    >
                        Latest <span className="text-sac-primary">News & Updates</span>
                    </motion.h1>
                    <p className="text-gray-400">Stay informed about M-Grand Sacco activities, events, and financial insights.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <NewsCard key={index} {...post} delay={index * 0.1} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">Load More Articles</Button>
                </div>
            </div>
        </div>
    );
};

export default News;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FileText, Download, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const Downloads = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Forms', 'Reports', 'Policies', 'Newsletters'];

    const files = [
        { title: "Membership Application Form", category: "Forms", size: "1.2 MB", date: "Dec 2024" },
        { title: "Annual Financial Report 2024", category: "Reports", size: "4.5 MB", date: "Nov 2024" },
        { title: "Loan Application Form", category: "Forms", size: "0.8 MB", date: "Dec 2024" },
        { title: "Sacco By-Laws 2024", category: "Policies", size: "2.1 MB", date: "Jan 2024" },
        { title: "Q3 2024 Newsletter", category: "Newsletters", size: "3.2 MB", date: "Oct 2024" },
        { title: "Credit Policy", category: "Policies", size: "1.5 MB", date: "Jun 2024" },
    ];

    const filteredFiles = filter === 'All' ? files : files.filter(f => f.category === filter);

    return (
        <div className="min-h-screen bg-dark-bg pt-28 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-white mb-4 font-display"
                    >
                        Downloads & <span className="text-sac-primary">Resources</span>
                    </motion.h1>
                    <p className="text-gray-400">Access important documents, reports, and forms.</p>
                </div>

                {/* Filter & Search Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    filter === cat
                                        ? "bg-sac-primary text-dark-bg shadow-lg shadow-sac-primary/20"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64 group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-sac-primary transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search documents..."
                            className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-white focus:border-sac-primary outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Files Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {filteredFiles.map((file, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="hover:border-sac-primary/30 group cursor-pointer transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="h-10 w-10 rounded-lg bg-sac-primary/10 flex items-center justify-center text-sac-primary group-hover:bg-sac-primary group-hover:text-dark-bg transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                                        {file.category}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2 line-clamp-1">{file.title}</h4>

                                <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-white/5">
                                    <div className="flex gap-3">
                                        <span>{file.size}</span>
                                        <span>•</span>
                                        <span>{file.date}</span>
                                    </div>
                                    <Download size={18} className="text-gray-400 group-hover:text-sac-primary transition-colors" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Downloads;

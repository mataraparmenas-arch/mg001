import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Briefcase, Home, Zap, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

const LoanProduct = ({ title, icon: Icon, rate, maxAmount, period, features }) => (
    <Card className="flex flex-col h-full hover:border-sac-primary/40 transition-colors duration-500">
        <div className="mb-6 flex items-start justify-between">
            <div className="h-12 w-12 rounded-lg bg-sac-primary/10 flex items-center justify-center text-sac-primary">
                <Icon size={24} />
            </div>
            <div className="text-right">
                <p className="text-3xl font-bold text-white">{rate}%</p>
                <p className="text-xs text-gray-500 uppercase">Interest Rate</p>
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-400 mb-6">
            <span>Up to {maxAmount}</span>
            <span className="h-4 w-[1px] bg-gray-700" />
            <span>{period} Repayment</span>
        </div>

        <div className="space-y-3 mb-8 flex-grow">
            {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-sac-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                </div>
            ))}
        </div>

        <Button className="w-full group">
            Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
    </Card>
);

const Loans = () => {
    const products = [
        {
            title: "Development Loan",
            icon: Home,
            rate: "1.0",
            maxAmount: "KES 5M",
            period: "48 Months",
            features: ["3x your savings", "Guarantors required", "Fast processing", "Flexible repayment terms"]
        },
        {
            title: "Emergency Loan",
            icon: Zap,
            rate: "1.2",
            maxAmount: "KES 500k",
            period: "12 Months",
            features: ["Instant approval", "No hidden fees", "Disbursed to mobile", "Repay anytime"]
        },
        {
            title: "Business Capital",
            icon: Briefcase,
            rate: "1.1",
            maxAmount: "KES 10M",
            period: "36 Months",
            features: ["Asset financing available", "Grace period of 1 month", "Business advisory included", "Top-up available"]
        },
        {
            title: "Education Loan",
            icon: GraduationCap,
            rate: "1.0",
            maxAmount: "KES 1M",
            period: "24 Months",
            features: ["School fees direct payment (optional)", "Quick turnaround", "Low processing fee", "Flexible schedule"]
        }
    ];

    return (
        <div className="min-h-screen bg-dark-bg pb-20 pt-10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 py-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                    >
                        Premium Loan <span className="text-sac-primary">Products</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400"
                    >
                        Choose from our wide range of tailored financial solutions designed to help you achieve your goals faster.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <LoanProduct {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loans;

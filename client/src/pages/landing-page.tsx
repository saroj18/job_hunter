import type React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Header from "../components/header";
import FeatureCard from "../components/feature-card";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Elevate Your Career with AI-Powered Resumes
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create stunning resumes, get expert AI analysis, and find your dream
            job - all in one place.
          </motion.p>
          <motion.button
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
        <div className="text-center mt-16">
          <a href="#features" className="inline-block animate-bounce">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            How ResumeAI Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="Create Your Resume"
              description="Build a professional resume with our intuitive tools and AI-powered templates."
              icon="📝"
            />
            <FeatureCard
              title="AI Analysis"
              description="Receive instant feedback and tailored suggestions to optimize your resume."
              icon="🤖"
            />
            <FeatureCard
              title="Job Matching"
              description="Discover perfect job opportunities aligned with your skills and experience."
              icon="🎯"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Resumate AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

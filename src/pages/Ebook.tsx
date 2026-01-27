import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Users, TrendingUp, Target, Lightbulb, BarChart, Clock, FileText } from "lucide-react";

const Ebook = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium mb-6 animate-bounce">
              📚 In Production
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              The Ultimate Digital Marketing E-book
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive guide packed with proven strategies, real case studies, and actionable insights for modern marketers.
            </p>
            
            {/* Progress Section */}
            <div className="max-w-lg mx-auto mb-12">
              <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className="flex justify-between text-sm font-medium mb-3">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    E-book Writing Progress
                  </span>
                  <span className="text-emerald-600 font-bold">80%</span>
                </div>
                <Progress value={80} className="h-4 bg-emerald-100 mb-3" />
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-medium text-emerald-600">✓ Research</div>
                    <div className="text-muted-foreground">Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-emerald-600">✓ Writing</div>
                    <div className="text-muted-foreground">80% Done</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-muted-foreground">⏳ Design</div>
                    <div className="text-muted-foreground">In Queue</div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Expected Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Pages</div>
              </div>
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Case Studies</div>
              </div>
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-cyan-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Strategies</div>
              </div>
              <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-emerald-700 mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Tips & Tricks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            What Will Be Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Mastery</h3>
              <p className="text-muted-foreground">Complete strategies for Facebook, Instagram, TikTok, and LinkedIn marketing success.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-teal-500 text-white rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meta Ads Deep Dive</h3>
              <p className="text-muted-foreground">Advanced Facebook and Instagram advertising techniques with real campaign examples.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Optimization</h3>
              <p className="text-muted-foreground">How to measure, analyze, and optimize your marketing campaigns for maximum ROI.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Building Strategies</h3>
              <p className="text-muted-foreground">Create a powerful brand presence that resonates with your target audience.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content Creation Secrets</h3>
              <p className="text-muted-foreground">Proven formulas for creating viral content that drives engagement and conversions.</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Case Studies & Examples</h3>
              <p className="text-muted-foreground">Real-world success stories and detailed breakdowns of winning campaigns.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Production Timeline
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center">✓</div>
                <div>
                  <h3 className="font-semibold">Research & Planning</h3>
                  <p className="text-sm text-muted-foreground">Market research and content strategy - Completed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Content Writing</h3>
                  <p className="text-sm text-muted-foreground">80% Complete - Currently writing chapters 8-12</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-75">
                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">3</div>
                <div>
                  <h3 className="font-semibold">Design & Layout</h3>
                  <p className="text-sm text-muted-foreground">Coming Next - Professional design and formatting</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-75">
                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center">4</div>
                <div>
                  <h3 className="font-semibold">Final Review & Launch</h3>
                  <p className="text-sm text-muted-foreground">Expected Launch: Next Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Early Access & Special Launch Price
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our VIP list and be the first to get this comprehensive marketing guide at a special pre-launch discount.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="flex-1"
            onClick={scrollToContact}
          >
            Join VIP List
          </Button>
          <p className="text-sm mt-4 opacity-75">
            VIP members get 50% off the launch price + exclusive bonuses
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ebook;

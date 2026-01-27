import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, Zap, Award, Star, BookOpen } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6 animate-bounce">
              🚀 Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Professional Marketing Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get ready to master the art of digital marketing with our upcoming comprehensive course collection!
            </p>
            
            {/* Progress Section */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Course Development Progress</span>
                <span className="text-purple-600">80%</span>
              </div>
              <Progress value={80} className="h-3 bg-purple-100" />
              <p className="text-sm text-muted-foreground mt-2">Almost ready to launch!</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-muted-foreground">Courses in Development</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
                <div className="text-muted-foreground">Hours of Content</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Expert</div>
                <div className="text-muted-foreground">Led Instruction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What's Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500 text-white rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Building Brand Using Meta</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Master Facebook and Instagram marketing to build powerful brand presence and drive engagement.
              </p>
              <Badge variant="outline" className="border-purple-500 text-purple-600">Meta Certified</Badge>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-blue-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 text-white rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Small Business Social Media Management</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Complete guide to managing social media for small businesses with limited resources but big dreams.
              </p>
              <Badge variant="outline" className="border-blue-500 text-blue-600">Practical Focus</Badge>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-green-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500 text-white rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Deep Meta Ads Mastery</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced Facebook and Instagram advertising strategies for maximum ROI and conversion optimization.
              </p>
              <Badge variant="outline" className="border-green-500 text-green-600">Advanced Level</Badge>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 border-pink-200 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-pink-500 text-white rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Deep TikTok Ads</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive TikTok advertising course covering viral content creation and ad optimization.
              </p>
              <Badge variant="outline" className="border-pink-500 text-pink-600">Trending Platform</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Wait for Our Courses?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert-Led Content</h3>
              <p className="text-muted-foreground">Learn from industry professionals with years of hands-on experience.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Projects</h3>
              <p className="text-muted-foreground">Build real campaigns and create a portfolio that showcases your skills.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lifetime Access</h3>
              <p className="text-muted-foreground">Get lifetime access to course materials and future updates.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;

import { TrendingUp, Target, Users, BarChart3, Megaphone, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Data-driven strategies tailored to your business goals and target audience.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic to your website.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage your audience across all major social platforms with compelling content.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track performance with comprehensive reporting and actionable insights.",
  },
  {
    icon: Users,
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience and drives conversions.",
  },
  {
    icon: Zap,
    title: "PPC Campaigns",
    description: "Maximize ROI with targeted paid advertising campaigns across multiple channels.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

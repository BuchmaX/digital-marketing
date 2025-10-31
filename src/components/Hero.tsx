import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              Transform Your Digital Presence with my Help
            </div>
            <h1 className="text-5xl md:text-6xl">
              Grow Your Business with{" "}
              <span className="text-blue-600">Data-Driven Marketing</span>
            </h1>
            <p className="text-xl text-gray-600">
              We help businesses scale their online presence through strategic
              digital marketing campaigns that deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">500+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl">3x</div>
                <div className="text-gray-600">Avg. ROI</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjE3MDgxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Marketing Team"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-8 right-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-8 left-8 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

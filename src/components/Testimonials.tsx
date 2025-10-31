import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Working with this team transformed our online presence. We saw a 300% increase in qualified leads within just 3 months!",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content: "The ROI on our digital marketing campaigns has exceeded all expectations. Their strategic approach is unmatched.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcoStyle",
    content: "From SEO to social media, they handled everything professionally. Our revenue doubled in 6 months!",
    rating: 5,
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their digital presence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarFallback className="bg-blue-600 text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

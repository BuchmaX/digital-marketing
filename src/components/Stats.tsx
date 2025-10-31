import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Stats() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-blue-100">
              Our proven strategies have helped hundreds of businesses achieve their digital marketing goals and drive sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl">250%</div>
                <div className="text-blue-100">Average Traffic Increase</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">4.8/5</div>
                <div className="text-blue-100">Client Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">$50M+</div>
                <div className="text-blue-100">Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl">95%</div>
                <div className="text-blue-100">Client Retention</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MTY4MTczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Growth"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

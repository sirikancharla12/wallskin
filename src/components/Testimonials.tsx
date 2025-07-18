

import AnimationContainer from "../ui/AnimationContainer";
import SectionHeader2 from "../ui/header2";
import TestimonialCard from "../ui/TestimonialCars";
import testimonials from "../data/testimonials.json";
import DotCarousel from "../ui/DotCorosouel";

export default function Testimonials() {
  return (
    <AnimationContainer>
      <section className="mx-10 my-10">
        <SectionHeader2 title="Testimonials" />

        <div className="sm:hidden mt-8">
          <DotCarousel>
            {testimonials.slice(0, 5).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </DotCarousel>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mt-8">
          {testimonials.map((testimonial) => (
            <AnimationContainer key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </AnimationContainer>
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}

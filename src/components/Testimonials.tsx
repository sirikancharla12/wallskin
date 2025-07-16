import AnimationContainer from "../ui/AnimationContainer";
import SectionHeader2 from "../ui/header2";
import TestimonialCard from "../ui/TestimonialCars";
import testimonials from "../data/testimonials.json"

export default function Testimonials(){
    return(
            <AnimationContainer>
      <section className="mx-10 my-10">
        <SectionHeader2 title="Testimonials" />
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {testimonials.map((testimonial) => (
            <AnimationContainer>
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />

            </AnimationContainer>
          ))}
        </div>
      </section>
    </AnimationContainer>
    )
}
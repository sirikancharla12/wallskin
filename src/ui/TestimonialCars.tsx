

interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative p-6 w-full h-[320px] bg-[#fffaf5] font-sk ">
      {/* Profile + Stars */}
      <div className="flex flex-col items-start gap-2 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex items-center gap-1 text-yellow-400 text-[16px] ml-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-[15px] text-medium-gray font-medium leading-snug mb-16">
        {testimonial.quote}
      </p>

      {/* Name + Quote PNG */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-start">
        <p className="text-dark-gray font-sk font-semibold text-[15px]">{testimonial.name}</p>
        <img
          src="/landingpage/quote.png" 
          alt="quote mark"
          className="w-[60px] h-full object-contain opacity-70"
        />
      </div>
    </div>
  );
}

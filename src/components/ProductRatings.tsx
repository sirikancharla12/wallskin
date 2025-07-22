

// "use client"

// import { Star } from "lucide-react"
// import TestimonialCard from "../ui/TestimonialCars"
// import DotCarousel from "../ui/DotCorosouel"

// const testimonials = [
//   {
//     id: "1",
//     name: "Tanishka Sharma",
//     image: "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
//     rating: 5,
//     quote:
//       "Finally, A Wallpaper That's As Kind To The Planet As It Is Beautiful. The Peel-And-Stick Held Up Perfectly In My Humid Bathroom, And Removal Was Shockingly Easy",
//   },
//   {
//     id: "2",
//     name: "Ravi Kumar",
//     image: "/placeholder.svg?height=60&width=60",
//     rating: 5,
//     quote: "Absolutely loved the quality and ease of application. Highly recommended!",
//   },
//   {
//     id: "3",
//     name: "Anikha",
//     image: "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
//     rating: 4,
//     quote:
//       "Finally, A Wallpaper That's As Kind To The Planet As It Is Beautiful. The Peel-And-Stick Held Up Perfectly In My Humid Bathroom, And Removal Was Shockingly Easy",
//   },
// ]

// const ratingDistribution = [
//   { stars: 5, percentage: 80 },
//   { stars: 4, percentage: 60 },
//   { stars: 3, percentage: 40 },
//   { stars: 2, percentage: 20 },
//   { stars: 1, percentage: 5 },
// ]

// export default function ProductRatings() {
//   return (
//     <div className="w-full mt-16 px-6 md:px-10">
//       {/* Desktop Layout */}
//       <div className="hidden md:flex justify-between items-start gap-12 w-full">
//         {/* Ratings Block */}
//         <div className="flex w-1/2 gap-6 items-start">
//           {/* Score */}
//           <div className="text-7xl font-bold text-gray-900 leading-none min-w-[80px]">
//             4.5
//             <span className="text-2xl text-gray-400 font-normal"> /5</span>
//             <p className="text-sm text-gray-500 mt-1">(4.2k+ Reviews)</p>
//           </div>

//           {/* Bars */}
//           <div className="flex flex-col gap-3 w-full">
//             {ratingDistribution.map((item) => (
//               <div key={item.stars} className="flex items-center gap-3 w-full">
//                 <div className="flex items-center gap-1 min-w-[28px]">
//                   <span className="text-sm text-gray-600">{item.stars}</span>
//                   <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
//                 </div>
//                 <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
//                   <div
//                     className="bg-yellow-400 h-full rounded-full transition-all duration-300"
//                     style={{ width: `${item.percentage}%` }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Testimonial */}
//         <div className="w-1/2 max-w-md">
//           <TestimonialCard testimonial={testimonials[0]} />
//         </div>
//       </div>

//       {/* Mobile Layout */}
//       <div className="md:hidden mt-10">
//         <div className="text-5xl font-bold text-gray-900 leading-none">
//           4.5 <span className="text-xl text-gray-400 font-normal">/5</span>
//         </div>
//         <p className="text-sm text-gray-500 mb-6">(4.2k+ Reviews)</p>

//         <div className="mb-8">
//           {ratingDistribution.map((item) => (
//             <div key={item.stars} className="flex items-center gap-3 w-full mb-2">
//               <div className="flex items-center gap-1 min-w-[28px]">
//                 <span className="text-sm text-gray-600">{item.stars}</span>
//                 <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
//               </div>
//               <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
//                 <div
//                   className="bg-yellow-400 h-full rounded-full transition-all duration-300"
//                   style={{ width: `${item.percentage}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial Carousel with Dots */}
//         <DotCarousel>
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </DotCarousel>
//       </div>
//     </div>
//   )
// }

"use client"

import { Star } from "lucide-react"
import TestimonialCard from "../ui/TestimonialCars"
import DotCarousel from "../ui/DotCorosouel"

const testimonials = [
  {
    id: "1",
    name: "Tanishka Sharma",
    image: "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
    rating: 5,
    quote:
      "Finally, A Wallpaper That's As Kind To The Planet As It Is Beautiful. The Peel-And-Stick Held Up Perfectly In My Humid Bathroom, And Removal Was Shockingly Easy",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote: "Absolutely loved the quality and ease of application. Highly recommended!",
  },
  {
    id: "3",
    name: "Anikha",
    image: "https://i.pinimg.com/736x/c3/e9/7a/c3e97aa255c604a1123e554cc12eefdc.jpg",
    rating: 4,
    quote:
      "Finally, A Wallpaper That's As Kind To The Planet As It Is Beautiful. The Peel-And-Stick Held Up Perfectly In My Humid Bathroom, And Removal Was Shockingly Easy",
  },
]

const ratingDistribution = [
  { stars: 5, percentage: 100 },
  { stars: 4, percentage: 70 },
  { stars: 3, percentage: 40 },
  { stars: 2, percentage: 20 },
  { stars: 1, percentage: 10 },
]

export default function ProductRatings() {
  return (
    <div className="w-full mt-16 px-6 md:px-10">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-start gap-10 w-full">
        {/* Left: Rating Number + Bars */}
        <div className="flex w-1/2 gap-8 items-start">
          {/* Score */}
          <div className="min-w-[120px]">
            <h3 className="text-base font-sk text-dark-gray mb-1">Ratings & Review</h3>
            <div className="text-8xl leading-[1] font-sk text-black">
              4.5<span className="text-2xl text-gray-400"> /5</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">(4.3k+ Reviews)</p>
          </div>

          {/* Bars */}
          <div className="flex flex-col gap-2 w-full max-w-xs mt-10">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 w-full">
                <div className="flex items-center gap-1 min-w-[28px] text-sm text-gray-700">
                  <span>{item.stars}</span>
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="bg-gray-200 h-1.5 w-full rounded-full overflow-hidden">
                  <div
                    className="bg-black h-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Static Testimonial */}
        <div className="w-1/2 max-w-md">
          <TestimonialCard testimonial={testimonials[0]} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden mt-10">
        <div className="text-5xl font-sk text-gray-900 leading-none">
          4.5 <span className="text-xl text-gray-400 font-normal">/5</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">(4.3k+ Reviews)</p>

        <div className="mb-8">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 w-full mb-2">
              <div className="flex items-center gap-1 min-w-[28px]">
                <span className="text-sm text-gray-600">{item.stars}</span>
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
                <div
                  className="bg-yellow-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <DotCarousel>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </DotCarousel>
      </div>
    </div>
  )
}

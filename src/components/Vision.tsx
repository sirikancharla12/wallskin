


import AnimationContainer from "../ui/AnimationContainer";
import { useNavigate } from "react-router-dom";

export default function OurVision() {
  const navigate = useNavigate()

  return (
    <AnimationContainer>
      <section className="w-full my-6 mt-20 mb-10 bg-pink-50">
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dkwbq4dgw/image/upload/v1752834687/vision_lmb9zb.png"
              alt="Our Vision - Modern interior with botanical wallpaper"
              className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
            />
          </div>

          {/* Right Side - Text Content */}
         <div className="w-full md:w-1/2 flex flex-col  px-6 py-8 md:px-12 md:py-12 text-left">
  <div className="w-full max-w-3xl">
    <h2 className="text-5xl font-sk text-dark-gray">
      Our
      <span className="ml-2 text-5xl font-nautigal text-fancy-color italic">Vision</span>
    </h2>

    <p className="text-medium-gray mt-4 mb-4 text-base font-sk">
  We Believe In Spaces That Whisper Before They Speak, Where Every Wallpaper Roll,
  Curtain Fold, And Blind Slat Is A Quiet Celebration Of Harmony And Intention.
  By Marrying Natural Materials With Thoughtful Design.
</p>

<p className="text-medium-gray mb-4 text-base font-sk">
  We Craft Interiors That Don't Just Adorn Your Home, But Deepen Your Relationship With It.
  Less Trend, More Truth.
</p>

<p className="text-medium-gray mb-6 text-base font-sk">
  From Ethically Sourced Textiles To Precision-Engineered Blinds,
  We Measure Our Success By The Stillness A Room Gains When It Finally Feels Like Yours.
</p>

  </div>

  <button
    className="mt-6 px-6 py-2 w-max border border-amber-700 text-amber-700 text-sm font-medium rounded hover:bg-amber-700 hover:text-white transition-all duration-300"
    onClick={() => navigate("/collections")}
  >
    Discover More
  </button>
</div>

          </div>
      </section>
    </AnimationContainer>
  )
}


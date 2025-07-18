
export default function WhyChooseUs() {
  const features = [
    {
      title: "Curated For Longevity",
      description:
        "No source materials meant to last. Timeless designs with enduring appeal. No disposable trends, only designs that age with grace.",
    },
    {
      title: "Thoughtful Transparency",
      description:
        "From pricing to production, we share every step of our process. Samples and a 365-day return policy back our confidence.",
    },
    {
      title: "Precision Tailoring",
      description:
        "Your service isn't standard. Neither should your experience be. Bespoke matching, and expert consultations ensure perfection.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl ml-3 md:text-3xl font-sk text-dark-gray mb-3 md:ml-10">
            Why Choose Us
          </h2>
          <p className="text-lg ml-3 md:text-3xl font-nautigal text-fancy-color md:ml-10">
            Intentional Design, Uncompromising Quality
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex border border-gray-200 overflow-hidden">
          {/* 1 Half-width Empty */}
          <div className="w-[12.5%] border-r border-gray-200 bg-white"></div>

          {/* 3 Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[25%] border-r border-gray-200 px-6 py-8 text-center bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Right Empty Space */}
          <div className="w-[12.5%] bg-white"></div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden border border-gray-200 divide-y divide-gray-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-6 py-8 text-center bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

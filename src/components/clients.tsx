

import AnimationContainer from "../ui/AnimationContainer";
import SectionHeader2 from "../ui/header2";

const clientLogos = [
  "oracle.png",
  "nutanix.png",
  "intel.png",
  "new-balance.png",
  "crosslead.png",
  "statefarm.png",
];

export default function OurClients() {
  return (
    <AnimationContainer>
        <section className=" w-full">

       
      <div className="mb-5 ml-10">
        <SectionHeader2 title="Our Clients" />
      </div>

      <div className="overflow-hidden w-full border-t border-b border-soft-gray">
        <div
          className="flex items-center justify-center gap-[8rem] w-max animate-[scroll_40s_linear_infinite]"
          style={{
            animation: "scroll 60s linear infinite",
          }}
        >
          {[...clientLogos, ...clientLogos].map((logo, i) => {
            const isSmall = logo === "intel.png" || logo === "new-balance.png";
            const size = isSmall ? "3.75rem" : "5rem"; 

            return (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{ width: size, height: size }}
              >
                <img
                  src={`/landingpage/${logo}`}
                  alt={logo}
                  className="w-full h-full object-contain block"
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
       </section>
    </AnimationContainer>
  );
}

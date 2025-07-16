

import AnimationContainer from "../ui/AnimationContainer";

export default function Footer() {
  return (
    <AnimationContainer>
      <footer className="bg-pure-white border-t-2 border-soft-gray py-10 px-6 md:px-10 font-sk text-sm text-dark-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="">
            <img src="/logo.png" alt="Logo" className="w-15" />
            <p className="text-base text-medium-gray leading-snug">
              We craft interiors meant to last—where every wallpaper, curtain,
              and blind is designed to harmonize with your space, not dominate
              it. Thoughtfully sourced, meticulously made.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#">
                <img src="/landingpage/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#">
                <img src="/landingpage/ig.png" alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
              <ul className="space-y-2 text-medium-gray">
                <li><a href="#">Home</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Shop By Designs</a></li>
                <li><a href="#">Shop By Room</a></li>
                <li><a href="#">Shop By Collection</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-base">Our Policies</h3>
              <ul className="space-y-2 text-medium-gray">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-base">Subscribe to our Newsletter</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="your email"
                className="w-full px-3 py-2 border border-soft-gray rounded-md text-sm outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="text-xs border border-soft-gray px-4 py-1 rounded-md hover:bg-black hover:text-white transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      
      </footer>
        <div className="w-full border-t border-soft-gray"></div>

        <div className="text-sm text-medium-gray text-right mt-4 pr-2 mb-5">
          © 2025 WS. All rights reserved.
        </div>
    </AnimationContainer>
  );
}

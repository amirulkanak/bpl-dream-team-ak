import Logo from '../../assets/icons/logo-footer.png';
import Newsletter from '../newsletter/Newsletter';
const FooterSection = () => {
  return (
    <>
      {/* Newsletter */}
      <Newsletter />
      <footer className="bg-clr-ebony mt-auto">
        <section className="max-width-wrapper pt-60 pb-[4.5rem] flex flex-col items-center gap-y-11 min800:gap-y-16">
          {/* Logo */}
          <img className="w-" src={Logo} alt="BPL Logo" />
          <div className="w-full flex flex-col items-center min800:flex-row min800:justify-between gap-y-8">
            {/* about us */}
            <div className="space-y-4 max-w-[18.5rem] flex flex-col items-center min800:items-start">
              <h3 className="text-white text-lg font-semibold">About Us</h3>
              <p className="text-white/60 text-base text-center min800:text-start">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            {/* quick links */}
            <div className="space-y-4 max-w-[18.5rem]">
              <h3 className="text-white text-lg font-semibold">Quick Links</h3>
              <ul className="text-white/60 list-disc list-inside space-y-3">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* subscribe */}
            <div className="flex flex-col items-center min800:items-start">
              <h3 className="text-white text-lg font-semibold">Subscribe</h3>
              <p className="text-white/60 text-base mt-1 max-w-[18.5rem] text-center min800:text-start">
                Subscribe to our newsletter for the latest updates.
              </p>

              {/* email subscribe */}
              <div className="da-join mt-5 max-w-[26rem]">
                <input
                  className="da-input da-join-item text-clr-woodsmoke border-none focus:outline-none rounded-l-xl text-base"
                  placeholder="Enter your email"
                />
                <button className="da-btn da-join-item border-none focus:outline-none rounded-r-xl text-[#040D11] text-base font-bold bg-gradient-to-r from-amber-500 to-pink-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* copy right */}
        <section className="py-8 text-center border-t border-t-white/15">
          <p className="text-white/60 text-base">
            &copy; 2024 BPL. All rights reserved.
          </p>
        </section>
      </footer>
    </>
  );
};

export default FooterSection;

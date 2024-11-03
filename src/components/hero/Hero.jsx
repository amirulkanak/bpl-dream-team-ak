import { toast } from 'react-toastify';
import BannerImage from '../../assets/images/banner-main.png';

const Hero = ({ updateBalance }) => {
  const addAmount = 1800000;

  return (
    <section className="max-width-wrapper mt-6 min-h-[34rem] bg-clr-woodsmoke rounded-[1.5rem] bg-hero-pattern bg-cover py-5 flex flex-col items-center justify-center gap-6">
      <img src={BannerImage} alt="Cricket" />
      <h1 className="text-center text-white text-[2rem] leading-[3rem] sm:text-[2.5rem] sm:leading-[3.75rem] font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-center text-white/70 text-xl sm:text-2xl font-medium">
        Beyond Boundaries Beyond Limits
      </p>
      <button
        onClick={() => {
          updateBalance(addAmount);
        }}
        className="border border-solid border-clr-chartreuse-yellow p-2 bg-clr-woodsmoke rounded-[1rem]">
        <div className="bg-clr-chartreuse-yellow w-full h-full rounded-[0.75rem] py-[0.88rem] px-5">
          Claim Free Credit
        </div>
      </button>
    </section>
  );
};

export default Hero;

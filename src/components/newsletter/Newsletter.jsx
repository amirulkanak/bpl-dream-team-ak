const Newsletter = () => {
  return (
    <section className="max-width-wrapper flex justify-center -mb-[10.5rem] z-[1] p-6 border border-solid border-white rounded-3xl">
      <div className="max-w-[80.75rem] w-full bg-news-letter rounded-3xl min-h-[21rem] flex flex-col items-center justify-center">
        <h3 className="max-w-[20rem] sm:max-w-full text-center text-clr-woodsmoke text-[2rem] leading-[2.5rem] font-bold">
          Subscribe to our Newsletter
        </h3>
        <p className="max-w-[20rem] sm:max-w-full text-center text-clr-woodsmoke/70 text-xl font-medium mt-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="w-full text-center space-x-4 mt-6">
          <input
            className="da-input da-join-item border w-full max-w-[25rem] h-[3.5rem] border-clr-woodsmoke/15 focus:outline-none rounded-xl text-clr-woodsmoke text-base"
            placeholder="Enter your email"
          />
          <button className="mt-4 sm:mt-0 da-btn da-join-item border-none w-full max-w-[9rem] h-[3.5rem] focus:outline-none rounded-xl text-[#040D11] text-base font-bold bg-gradient-to-r from-amber-500 to-pink-500">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

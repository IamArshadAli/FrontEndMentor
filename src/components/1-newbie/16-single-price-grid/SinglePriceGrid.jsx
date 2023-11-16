const SinglePriceGrid = () => {
  return (
    <section className="w-screen h-screen bg-LightGray116 grid place-items-center">
      <div className="max-w-xs md:max-w-xl mx-8 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden font-Karla">
        <div className="p-6 md:p-9">
          <h3 className="text-Cyan116 text-xl font-bold">Join our community</h3>
          <p className="text-BrightYellow font-bold my-4">
            30-day, hassle-free money back guarantee
          </p>
          <p className="text-GrayishBlue116 text-sm">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-LightGray116">
          <div className="bg-Cyan116 p-6 md:p-8 flex-1">
            <h4 className="font-bold md:mb-2">Monthly Subscription</h4>
            <div className="flex space-x-2 items-center my-2">
              <h1 className="text-xl md:text-2xl font-bold">$29</h1>
              <p className="text-sm font-light opacity-70">
                per month
              </p>
            </div>
            <p className="text-sm mb-5">Full access for less than $1 a day</p>
            <button className="bg-BrightYellow w-full py-2 rounded-md shadow-lg font-bold">
              Sign Up
            </button>
          </div>
          <div className="bg-Cyan116 bg-opacity-90 p-6 md:p-8 flex-1">
            <h4 className="mb-4 font-bold">Why Us</h4>
            <ul className="text-sm md:text-xs leading-snug opacity-70">
              <li>Tutorials by industry experts</li>
              <li>Peer &amp; expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePriceGrid;

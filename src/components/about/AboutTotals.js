const AboutTotals = () => {
  return (
    <div className="w-[73%] m-auto">
      <div className="w-[81%] flex xl:flex-row max-xl:flex-col xl:justify-between max-xl:items-center m-auto py-20  max-xl:gap-y-24">
        <div className="about-total">
          <p className="about-total-numbers">15K</p>
          <p className="about-total-texts">Happy Customers</p>
        </div>
        <div className="about-total">
          <p className="about-total-numbers">150K</p>
          <p className="about-total-texts">Monthly Visitors</p>
        </div>
        <div className="about-total">
          <p className="about-total-numbers">15</p>
          <p className="about-total-texts">Countries Worldwide</p>
        </div>
        <div className="about-total">
          <p className="about-total-numbers">100+</p>
          <p className="about-total-texts">Top Partners</p>
        </div>
      </div>
    </div>
  );
};
export default AboutTotals;

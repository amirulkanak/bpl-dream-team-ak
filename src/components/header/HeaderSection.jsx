import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar';

const HeaderSection = ({ balance, updateBalance }) => {
  return (
    <header className="max-width-wrapper mt-14">
      <Navbar balance={balance} />
      <Hero updateBalance={updateBalance} />
    </header>
  );
};

export default HeaderSection;

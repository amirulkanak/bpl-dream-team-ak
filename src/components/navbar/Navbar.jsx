import Logo from '../../assets/icons/logo.png';
import DollarIcon from '../../assets/icons/dollar-sign.svg';

const Navbar = ({ balance }) => {
  // convert the balance to currency format
  const accountBalance = new Intl.NumberFormat('en-BD', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(balance);

  return (
    <nav className="flex flex-col md:flex-row gap-y-4 items-center justify-between">
      <img src={Logo} alt="BPL Logo" />
      <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center">
        <ul className="text-clr-woodsmoke/70 text-base flex items-center justify-between gap-6 md:gap-12">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <div className="da-btn no-animation cursor-default hover:bg-white bg-white border border-clr-woodsmoke/10 w-fit rounded-xl text-clr-woodsmoke font-semibold">
          <span>{accountBalance} Coins</span>
          <img className="w-5" src={DollarIcon} alt="Dollar Icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import UserIcon from '../../assets/icons/user-icon.svg';
import FlagIcon from '../../assets/icons/flag-icon.svg';

const PlayerCard = ({ player, handleSelectedPlayers }) => {
  const {
    name,
    country,
    image,
    role,
    batting_style,
    bowling_style,
    rating,
    bidding_price,
  } = player;

  // Convert the bidding price to Bangladeshi Taka
  const bdtPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
  })
    .format(bidding_price)
    .replace('BDT', '\u09F3');

  return (
    <div className="max-w-[26.5rem] p-6 border border-solid border-clr-woodsmoke/10 rounded-2xl">
      {/* image */}
      <div className="w-full h-60 overflow-clip rounded-2xl mb-6">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center justify-start gap-4">
          <img className="size-7" src={UserIcon} alt="User Icon" />
          <h2 className="text-clr-woodsmoke text-xl font-semibold">{name}</h2>
        </div>
        <div className="flex items-center justify-between mt-4 pb-4 border-b border-b-clr-woodsmoke/10">
          <div className="flex items-center gap-3">
            <img className="size-5" src={FlagIcon} alt="Flag Icon" />
            <p className="text-clr-woodsmoke/50 text-base">{country}</p>
          </div>
          <span className="px-4 py-2 bg-gray-100 text-clr-woodsmoke border border-solid border-clr-woodsmoke/10 rounded-lg">
            {role}
          </span>
        </div>
        <div>
          <p className="text-clr-woodsmoke text-base font-bold mt-4">
            Rating: {rating}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-clr-woodsmoke text-base font-bold">
              {batting_style}
            </p>
            <p className="text-clr-woodsmoke text-base font-bold">
              {bowling_style}
            </p>
          </div>
          {/* price and choose button */}
          <div className="mt-3 flex items-center justify-between">
            <p className="text-clr-woodsmoke text-base font-bold">
              Price: {bdtPrice}
            </p>
            <button
              onClick={() => handleSelectedPlayers(player)}
              className="py-2 px-4 text-clr-woodsmoke bg-white hover:bg-clr-chartreuse-yellow/50 rounded-lg border border-solid border-clr-woodsmoke/10">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

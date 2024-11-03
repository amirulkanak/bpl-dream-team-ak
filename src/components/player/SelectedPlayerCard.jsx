import DeleteIcon from '../../assets/icons/delete-icon.svg';

const SelectedPlayerCard = ({ player, handleRemoveSelectedPlayer }) => {
  const { name, image, role, bidding_price } = player;

  // Convert the bidding price to Bangladeshi Taka
  const bdtPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
  })
    .format(bidding_price)
    .replace('BDT', '\u09F3');

  return (
    <div className="max-w-full p-6 border border-solid border-clr-woodsmoke/10 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="size-20 overflow-clip rounded-2xl">
          <img
            className="w-full h-full object-cover object-center "
            src={image}
            alt={name}
          />
        </div>
        <div>
          <h2 className="text-clr-woodsmoke text-xl font-semibold">{name}</h2>
          <p className="text-clr-woodsmoke/60 text-base font-semibold mt-2">
            {role}
          </p>
          <p className="text-clr-woodsmoke/80 text-base font-semibold">
            Price: {bdtPrice}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleRemoveSelectedPlayer(player)}
        className="size-6">
        <img src={DeleteIcon} alt="Delete Icon" />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;

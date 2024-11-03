import { useState } from 'react';
import PlayerContainer from '../player/PlayerContainer';
import SelectedPlayerContainer from '../player/SelectedPlayerContainer';

const MainSection = ({
  handleSelectedPlayers,
  selectedPlayers,
  handleRemoveSelectedPlayer,
}) => {
  // Show Selected Players and Available Players
  const [showSelected, setShowSelected] = useState('avaiable');

  // Selected Players Count
  const numberOfSelectedPlayers = selectedPlayers.length;

  // Add More Players button function
  const handleAddMorePlayers = () => {
    setShowSelected('avaiable');
  };

  return (
    <main className="max-width-wrapper mt-12 md:mt-24 mb-32 md:mb-60">
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        {/* heading toggle */}
        {showSelected === 'avaiable' && (
          <h2 className="text-clr-woodsmoke text-3xl font-bold">
            Available Players
          </h2>
        )}
        {showSelected === 'selected' && (
          <h2 className="text-clr-woodsmoke text-3xl font-bold">
            Selected Player ({numberOfSelectedPlayers}/6)
          </h2>
        )}

        {/* Tabs button */}
        <div>
          <button
            onClick={() => setShowSelected('avaiable')}
            className={`avaiable-btn ${
              showSelected === 'avaiable' ? 'active-btn' : ''
            }`}>
            Available
          </button>
          <button
            onClick={() => setShowSelected('selected')}
            className={`selected-btn ${
              showSelected === 'selected' ? 'active-btn' : ''
            }`}>
            Selected ({numberOfSelectedPlayers})
          </button>
        </div>
      </section>

      {/* Section toggle */}
      {/* Player Card Container */}
      {showSelected === 'avaiable' && (
        <PlayerContainer handleSelectedPlayers={handleSelectedPlayers} />
      )}

      {/* Selected Player Container */}
      {showSelected === 'selected' && (
        <SelectedPlayerContainer
          handleAddMorePlayers={handleAddMorePlayers}
          selectedPlayers={selectedPlayers}
          handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
        />
      )}
    </main>
  );
};

export default MainSection;

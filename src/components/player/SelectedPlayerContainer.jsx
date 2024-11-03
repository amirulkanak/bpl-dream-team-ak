import React from 'react';
import SelectedPlayerCard from './SelectedPlayerCard';

const SelectedPlayerContainer = ({
  handleAddMorePlayers,
  selectedPlayers,
  handleRemoveSelectedPlayer,
}) => {
  return (
    <section className="space-y-12">
      <div className="space-y-6">
        {selectedPlayers.length === 0 && (
          <div className="max-w-full p-6 border border-solid border-clr-woodsmoke/10 rounded-2xl">
            <h2 className="text-clr-woodsmoke/60 text-xl font-bold">
              No player is selected. Please add player to your squad.
            </h2>
          </div>
        )}
        {selectedPlayers.map((player) => (
          <SelectedPlayerCard
            key={player.player_id}
            player={player}
            handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
          />
        ))}
      </div>
      <button className="border border-solid border-clr-woodsmoke p-2 bg-white rounded-[1rem]">
        <div
          onClick={handleAddMorePlayers}
          className="bg-clr-chartreuse-yellow w-full h-full rounded-[0.75rem] py-[0.88rem] px-5">
          Add More Players
        </div>
      </button>
    </section>
  );
};

export default SelectedPlayerContainer;

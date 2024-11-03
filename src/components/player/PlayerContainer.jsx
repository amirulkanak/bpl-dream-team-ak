import { useState } from 'react';
import PlayerCard from './PlayerCard';
import { useEffect } from 'react';

const PlayerContainer = ({ handleSelectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('playersDatabase.json')
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 pc:grid-cols-3 gap-6 w-fit mx-auto">
      {players.map((player) => (
        <PlayerCard
          handleSelectedPlayers={handleSelectedPlayers}
          key={player.player_id}
          player={player}
        />
      ))}
    </section>
  );
};

export default PlayerContainer;

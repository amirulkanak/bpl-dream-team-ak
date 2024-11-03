import { useState } from 'react';
import AppContainer from './components/AppContainer';
import HeaderSection from './components/header/HeaderSection';
import MainSection from './components/main/MainSection';
import FooterSection from './components/footer/FooterSection';
import Notify from './components/notification/Notify';
import { toast } from 'react-toastify';

function App() {
  // Account Balance
  const [balance, setBalance] = useState(0);
  const updateBalance = (amount) => {
    setBalance(balance + amount);
    toast.success(
      `Congratulations! Your balance updated with ${amount} coins.`
    );
  };

  // Selected Players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayers = (player) => {
    // Check if selected players are less than 6
    if (selectedPlayers.length >= 6) {
      toast.warning(
        'Your squad is full. Please remove a player to add another.'
      );
      return;
    }

    // Check if player is already selected
    const isPlayerSelected = selectedPlayers.find(
      (selectedPlayer) => selectedPlayer.player_id === player.player_id
    );

    // If player is already selected, show error message
    if (isPlayerSelected) {
      toast.error(
        `${isPlayerSelected.name} is already selected. Please select another player.`
      );
      return;
    }

    // Check if player price is greater than balance
    if (player.bidding_price > balance) {
      toast.error('Insufficient balance. Please claim more credits.');
      return;
    }

    // Update balance and add player to selected players
    setBalance(balance - player.bidding_price);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`Congratulations! ${player.name} is in your squad.`);
  };

  // Remove Player from Selected Players
  const handleRemoveSelectedPlayer = (player) => {
    // filter out the player from selected players
    const updatedPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.player_id !== player.player_id
    );

    // Update selected players and balance
    setSelectedPlayers(updatedPlayers);
    setBalance(balance + player.bidding_price);
    toast.success(
      `${player.name} is removed from your squad and balance is updated.`
    );
  };

  return (
    <AppContainer>
      <HeaderSection balance={balance} updateBalance={updateBalance} />
      <MainSection
        handleSelectedPlayers={handleSelectedPlayers}
        selectedPlayers={selectedPlayers}
        handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
      />
      <FooterSection />
      <Notify />
    </AppContainer>
  );
}

export default App;

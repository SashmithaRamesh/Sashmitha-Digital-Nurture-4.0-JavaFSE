  const IndianPlayers = () => {
  const team = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];
  const [odd1, even1, odd2, even2, odd3, even3] = team;
  const T20players = ['Virat', 'Rohit', 'Hardik'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Karun'];
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>Merged T20 and Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};
export default IndianPlayers;
  const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 80 },
    { name: 'Dhawan', score: 65 },
    { name: 'KL Rahul', score: 50 },
    { name: 'Hardik', score: 88 },
    { name: 'Jadeja', score: 72 },
    { name: 'Bumrah', score: 60 },
    { name: 'Shami', score: 55 },
    { name: 'Ashwin', score: 90 },
    { name: 'Pant', score: 40 },
    { name: 'Surya', score: 85 }
  ];
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListofPlayers;
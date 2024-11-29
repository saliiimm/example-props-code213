import logo from './logo.svg';
import './App.css';
import GamesList from './components/GamesList/GamesList';
import cyberpunk from './assets/cyberpunk.png';
import ea from './assets/eafc25.png';
import elden from './assets/eldenring.png';
import forza from './assets/forza.png';
import gears from './assets/gears.png';
import halo from './assets/haloinfinite.png';
import minecraft from './assets/minecraft.png';
import mw2 from './assets/mw2.png';
import Players from './components/Players/Players';
function App() {
  const xboxGames = [
    {
      id: 1,
      name: 'Halo Infinite',
      category: 'Shooter',
      price: 59.99,
      image: halo,
    },
    {
      id: 2,
      name: 'Forza Horizon 5',
      category: 'Racing',
      price: 69.99,
      image: forza,
    },
    { id: 3, name: 'Gears 5', category: 'Action', price: 39.99, image: gears },
    { id: 4, name: 'FIFA 23', category: 'Sports', price: 59.99, image: ea },
    {
      id: 5,
      name: 'Minecraft',
      category: 'Sandbox',
      price: 19.99,
      image: minecraft,
    },
    {
      id: 6,
      name: 'Call of Duty: Modern Warfare II',
      category: 'Shooter',
      price: 69.99,
      image: mw2,
    },
    { id: 7, name: 'Elden Ring', category: 'RPG', price: 59.99, image: elden },
    {
      id: 8,
      name: 'Cyberpunk 2077',
      category: 'Action RPG',
      price: 49.99,
      image: cyberpunk,
    },
    {
      id: 9,
      name: "Assassin's Creed Valhalla",
      category: 'Adventure',
      price: 39.99,
      image: mw2,
    },
    {
      id: 10,
      name: 'Red Dead Redemption 2',
      category: 'Action-Adventure',
      price: 59.99,
      image: mw2,
    },
    {
      id: 11,
      name: 'Madden NFL 23',
      category: 'Sports',
      price: 59.99,
      image: mw2,
    },
    {
      id: 12,
      name: 'Sea of Thieves',
      category: 'Adventure',
      price: 39.99,
      image: mw2,
    },
    {
      id: 13,
      name: 'The Witcher 3: Wild Hunt',
      category: 'RPG',
      price: 29.99,
      image: mw2,
    },
    { id: 14, name: 'NBA 2K23', category: 'Sports', price: 59.99, image: mw2 },
    { name: 'Overwatch 2', category: 'Shooter', price: 39.99, image: mw2 },
    {
      id: 15,
      name: 'Ori and the Will of the Wisps',
      category: 'Platformer',
      price: 29.99,
      image: mw2,
    },
    { id: 16, name: 'Fallout 4', category: 'RPG', price: 19.99, image: mw2 },
    { name: 'DOOM Eternal', category: 'Shooter', price: 49.99, image: mw2 },
    {
      id: 17,
      name: 'Far Cry 6',
      category: 'Action-Adventure',
      price: 59.99,
      image: mw2,
    },
    {
      id: 18,
      name: 'Cuphead',
      category: 'Platformer',
      price: 19.99,
      image: mw2,
    },
  ];
  return (
    <div className="App">
      <Players vailable={4} maximum={20} />
      <GamesList list={xboxGames} />
    </div>
  );
}

export default App;

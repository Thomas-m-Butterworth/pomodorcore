import '../App.css'
import logo from '../logo.svg';

export default function Header() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pomodorcore</h1>
        <p>A (No) Money in the Bank app to help you pick your pomodore technique playlists base on whatever you're hammering on Last.fm.</p>
      </header>
    )
}
import "./App.css";
import logo from "./logo.svg";
import { FavoriteSites } from "./components/favoriteSites";
import { Colors } from "./components/colors";
let name = "Paul";
let a = 11;
let b = 7;
function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="header__title">{name}</h1>
        <p className="header__text">{a + b}</p>
      </header>
      <main>
        <p className="text">Ласкаво прошу до першого проекту з React!</p>
        <img className="app__logo" src={logo} alt="React" />
        <div className="lists__box">
        <FavoriteSites />
        <Colors />
        </div>
      </main>
    </div>
  );
}

export default App;

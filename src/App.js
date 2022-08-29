import "./App.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherApp />
      <p>
        <a
          href="https://github.com/Lisa-Bond/project-react-weather"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Lisa Bondarenko
      </p>
    </div>
  );
}

export default App;

import "./styles.css";
import Content from "./Content";
import Credits from "./Credits";

export default function App() {
  return (
    <div className="WeatherApp">
      <div className="container-fluid">
        <Content defaultCity="Oslo" />
      </div>
      <Credits />
    </div>
  );
}

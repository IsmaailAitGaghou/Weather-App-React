import DailyDatails from "./components/DailyDatails";
import HourlyDetails from "./components/HourlyDetails";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

export default function App() {
  return (
    <div
      className=" mx-auto max-w-screen-md my-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl
    shadow-gray-400"
    >
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <HourlyDetails />
      <DailyDatails />
    </div>
  );
}

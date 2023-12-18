import "./App.css";
import { ChooseCardPage } from "./pages/ChooseCardPage";
import { GreenPart } from "./pages/GreenPart";
import { MainPage } from "./pages/MainPage/ui";
import { PayPage } from "./pages/PayPage";
import UsefulAdvantages from "./pages/UsefulAdvantages/ui/UsefulAdvantages";
import { Navbar } from "./widgets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="background">
        <MainPage />
      </div>
      <PayPage />
      <ChooseCardPage />
      <UsefulAdvantages />
      <GreenPart />
    </>
  );
}

export default App;

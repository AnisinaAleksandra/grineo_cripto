import "./App.css";
import { ChooseCardPage } from "./pages/ChooseCardPage";
import { GreenPart } from "./pages/GreenPart";
import { HowToUsePart } from "./pages/HowToUsePart";
import { MainPage } from "./pages/MainPage/ui";
import { PayPage } from "./pages/PayPage";
import { ReferralProgram } from "./pages/ReferralProgram";
import { StableAndSecure } from "./pages/StableAndSecure";
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
      <HowToUsePart />
      <StableAndSecure />
      <ReferralProgram />
    </>
  );
}

export default App;

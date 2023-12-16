import "./App.css";
import { ChooseCardPage } from "./pages/ChooseCardPage";
import { MainPage } from "./pages/MainPage/ui";
import { PayPage } from "./pages/PayPage";
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
    </>
  );
}

export default App;

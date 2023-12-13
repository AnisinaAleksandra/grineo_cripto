import "./App.css";
import { MainPage } from "./pages/MainPage/ui";
import { PayPage } from "./pages/PayPage/ui";
import { Navbar } from "./widgets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="background">
        <MainPage />
      </div>
      <PayPage />
    </>
  );
}

export default App;

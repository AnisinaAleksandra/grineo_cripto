import "./App.css";
import { MainPage } from "./pages/MainPage/ui";
import { Navbar } from "./widgets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="background">
        <MainPage />
      </div>
    </>
  );
}

export default App;

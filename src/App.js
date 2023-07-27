import "./styles.css"
import { BubblyContainer } from "react-bubbly-transitions";
import PagesRoute from "./routes/PagesRoute";

const App = () => {
  return (
    <>
      <BubblyContainer />
      <PagesRoute />
    </>
  );
}

export default App
import "bootstrap/dist/css/bootstrap.min.css";

import Navi from "./components/Navi";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navi login={true} />
      <Main />
    </div>
  );
}

export default App;

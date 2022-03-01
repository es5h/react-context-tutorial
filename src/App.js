import {ColorProvider} from "./contexts/color";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
}

export default App;

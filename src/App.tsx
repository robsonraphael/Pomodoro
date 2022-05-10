import React, { useState } from "react";
/* Styled */
import GlobalStyles from "./styles/globalStyles";
/* Components */
import Wrapper from "./styled";
import Options from "./components/options";
import Timer from "./components/timer";
import Start from "./components/start";
/* Themes */
import LightTheme from "./styles/themes/light";
//import DarkTheme from "./styles/themes/dark";

function App() {
  const [min, setMin] = useState(25);

  const StartCount = () => {
    setMin(min - 1);
    console.log(min);
    if (min === 0) {
      alert("Congratulations");
      setMin(min + 25);
    }
  };
  return (
    <Wrapper background={LightTheme.colors.primary}>
      <GlobalStyles />
      <Options
        background={LightTheme.colors.primary}
        color={LightTheme.colors.text}
      />
      <Timer color={LightTheme.colors.title} text={min} />
      <Start
        color={LightTheme.colors.title}
        background={LightTheme.colors.button}
        text={"Start"}
        execute={() => StartCount()}
      />
    </Wrapper>
  );
}

export default App;

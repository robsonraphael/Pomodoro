import { useState } from "react";

/* Components */
import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { Global } from "./style/global";
import { Tasks } from "./components/tasks";

/* Theme */
import { ThemeProvider } from "styled-components";
import { DefaultTheme, ShortTheme, LongTheme } from "./style/theme";

function App() {
  const [theme, setTheme] = useState("default");
  const choseTheme = () => {
    if (theme === "default") return DefaultTheme;
    if (theme === "short") return ShortTheme;
    if (theme === "long") return LongTheme;
  };
  return (
    <>
      <ThemeProvider theme={choseTheme()}>
        <Header />
        <Timer
          isDefault={() => setTheme("default")}
          isShort={() => setTheme("short")}
          isLong={() => setTheme("long")}
        />
        <Tasks />
        <Global />
      </ThemeProvider>
    </>
  );
}

export default App;

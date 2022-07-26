import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { Container } from "./style/global";
import { ThemeProvider } from "styled-components";
import { DefaultTheme, ShortTheme, LongTheme } from "./style/theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("default");

  return (
    <>
      <ThemeProvider
        theme={
          theme === "default"
            ? DefaultTheme
            : ShortTheme && theme === "short"
            ? ShortTheme
            : LongTheme
        }
      >
        <Container>
          <Header />
          <Timer
            isDefault={() => setTheme("default")}
            isShort={() => setTheme("short")}
            isLong={() => setTheme("long")}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

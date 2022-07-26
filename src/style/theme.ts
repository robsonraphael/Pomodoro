interface ThemeProps {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    focus: string;
    text: string;
  };
}

export const DefaultTheme: ThemeProps = {
  colors: {
    background: "rgb(251, 178, 74)",
    primary: "rgb(235, 66, 45)",
    secondary: "rgb(84, 81, 82)",
    focus: "rgb(240, 20, 40)",
    text: "rgb(240, 240, 240)",
  },
};

export const ShortTheme: ThemeProps = {
  colors: {
    background: "rgb(91, 21, 140)",
    primary: "rgb(217, 34, 157)",
    secondary: "rgb(20, 204, 203)",
    focus: "rgb(200, 40, 200)",
    text: "rgb(255, 255, 255)",
  },
};

export const LongTheme: ThemeProps = {
  colors: {
    background: "rgb(30, 190, 100)",
    primary: "rgb(255, 100, 60)",
    secondary: "rgb(255, 255, 50)",
    focus: "rgb(230, 90, 30)",
    text: "rgb(10, 10, 10)",
  },
};

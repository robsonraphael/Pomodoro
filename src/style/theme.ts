interface ThemeProps {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    focus: string;
    hover: string;
    text: string;
  };
}

export const DefaultTheme: ThemeProps = {
  colors: {
    background: "rgb(251, 178, 74)",
    primary: "rgb(235, 66, 45)",
    secondary: "rgb(107, 59, 52)",
    focus: "rgb(186, 131, 54)",
    hover: "rgb(82, 46, 40)",
    text: "rgb(240, 240, 240)",
  },
};

export const ShortTheme: ThemeProps = {
  colors: {
    background: "rgb(155, 25, 230)",
    primary: "rgb(217, 34, 157)",
    secondary: "rgb(140, 11, 97)",
    focus: "rgb(112, 18, 166)",
    hover: "rgb(115, 9, 80)",
    text: "rgb(255, 255, 255)",
  },
};

export const LongTheme: ThemeProps = {
  colors: {
    background: "rgb(7, 179, 122)",
    primary: "rgb(255, 100, 60)",
    secondary: "rgb(128, 81, 69)",
    focus: "rgb(5, 115, 78)",
    hover: "rgb(102, 64, 55)",
    text: "rgb(250, 250, 250)",
  },
};

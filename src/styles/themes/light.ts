interface PropsTheme {
    colors: {
        primary: string,
        secondary: string,
        
        text: string,
        title: string,

        button: string,
    }
}

const LightTheme : PropsTheme = {
    colors: {
        primary: "#f5f5f5",
        secondary: "#471049",

        text: "#000",
        title: "#241049",

        button: "#A387A4"
    }
}

export default LightTheme;
const colors = {
    green: "#8ace00",
    charcoalBlack: "#21272d",
    jetBlack: "#171717",
    pitchBlack: "#000000",
}

const breakpoints = {
    small: "576px",
    medium: "768px",
    large: "1280px",
    extended: "1920px"
}

const media = {
    small: `@media screen and (min-width: ${breakpoints.small})`,
    medium: `@media screen and (min-width: ${breakpoints.medium})`,
    large: `@media screen and (min-width: ${breakpoints.large})`,
    extended: `@media screen and (min-width: ${breakpoints.extended})`,
}

const ThemeSchema = {
    breakpoints,
    media,
    font: {
        family: {
            primary: "sans-serif",
            secondary: "serif"
        },
        sized: {
            title: "clamp(24pt, 32pt, 6vh)",
            subtitle: "",
            content: "",
            label: "",
            description: "",
        },
        color: {
            primary: "#ffffff",
        }
    },
    colors:{
        background: {
            primary: colors.charcoalBlack,
            secondary: colors.jetBlack,
        }
    },
}

export default ThemeSchema;
const colors = {
    green: "#8ace00",
    charcoalBlack: "#21272d",
    jetBlack: "#171717",
    pitchBlack: "#000000",
    lightPaleGreen: "#f8fdf0",
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

const darkTheme = {
    breakpoints,
    media,
    font: {
        family: {
            primary: "monospace",
            secondary: "serif"
        },
        sized: {
            title: "clamp(32px, 2.8em, 10vw)",
            subtitle: "",
            content: "",
            label: "",
            description: "",
            text: "",
        },
        size: {
            small: "clamp(12px, 12pt, 4vw)",
            medium: "clamp(16px, 16pt, 8vw)",
            large: "clamp(24px, 22pt, 12vw)",
        },
        color: {
            accent: colors.green,
            primary: colors.lightPaleGreen,
        }
    },
    colors:{
        background: {
            primary: colors.charcoalBlack,
            secondary: colors.jetBlack,
        }
    },
    background: {
        color: {
            primary: colors.charcoalBlack,
        }
    },
    spacing: {
        padding: {
            small: "6vw",
            medium: "10vw"
        }
    }
}

const Theme = darkTheme;

export default Theme;
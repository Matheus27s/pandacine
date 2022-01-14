import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    colors: {
        blue_dark: "#2C3145",
        blue: "#3549FD",
        green: "#33CC89",
        red: "#BB3640",
        orange: "#C67E3B",
        nave: "#010827",
        white: "#FFFFFF",
        white_100: "#F9F9F9",
        black: "#000000"
    },

    fonts: {
        light: "Josefin Sans Light",
        medium: "Josefin Sans Medium",
        bold: "Josefin Sans Bold",
    },

    text: {
        title: 20,
        content: 16,
        comment: 14
    },

    size: {
        maxHeight: height,
        maxWidth: width,
    }
}
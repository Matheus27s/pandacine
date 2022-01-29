import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.red,
    height: 48,
    width: theme.size.halfWidth,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    elevation: 6,
    shadowColor: "#000",
    borderColor: theme.colors.red,
    borderWidth: 1,
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    fontSize: theme.text.content,
  },
});

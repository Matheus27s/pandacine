import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.nave,
    paddingHorizontal: 16,
  },
  containerVideo: {
    width: theme.size.fullWidth - 24,
    backgroundColor: theme.colors.black,
    borderRadius: 10,
    flex: 5,
  },
  video: {
    borderRadius: 10,
    flex: 5,
  },
  containerSelect: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    flex: 4,
  },
  containerDays: {
    alignItems: "center",
    justifyContent: "center",
  },
  days: {
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    height: 84,
    borderRadius: 20,
  },
  containerHours: {
    alignItems: "center",
    justifyContent: "center",
  },
  hour: {
    backgroundColor: theme.colors.blue,
    marginLeft: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    height: 36,
    borderRadius: 10,
  },
  footer: {
    marginBottom: 16,
    alignContent: "center",
    justifyContent: "flex-end",
    flex: 2,
  },
  title: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.bold,
    fontSize: theme.text.title,
  },
  content: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    fontSize: theme.text.content,
  },
  comment: {
    color: theme.colors.white,
    fontFamily: theme.fonts.light,
    fontSize: theme.text.comment,
    textAlign: "justify",
    marginBottom: 16,
    marginTop: 16,
  },
});

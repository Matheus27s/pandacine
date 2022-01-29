import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.nave,
    paddingHorizontal: 24,
  },
  containerVideo: {
    width: theme.size.fullWidth / 1.2,
    height: theme.size.halfHeight / 1.7,
    backgroundColor: theme.colors.black,
    borderRadius: 10,
    flex: 1,
  },
  video: {
    width: theme.size.fullWidth / 1.2,
    height: theme.size.halfHeight / 1.7,
    borderRadius: 10,
  },
  containerLablesAccents: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: theme.size.fullWidth / 1.4,
    height: theme.size.halfHeight / 3,
    alignItems: "center",
  },
  containerLabel: {
    alignItems: "center",
  },
  iconeLabel: {
    height: 16,
    width: 16,
    borderRadius: 2,
    backgroundColor: theme.colors.blue_dark,
  },
  footer: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerAccents: {
    alignItems: "center",
    justifyContent: "center",
    width: theme.size.fullWidth,
    flex: 2,
  },
  containerTotalPrice: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  contentPrice: {
    flexDirection: "row",
  },
  shadow: {
    width: 30,
    height: 30,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
    margin: 6,
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: theme.text.title,
  },
  content: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.medium,
    fontSize: theme.text.content,
  },
  comment: {
    color: theme.colors.white,
    fontFamily: theme.fonts.light,
    fontSize: theme.text.comment,
    textAlign: "justify",
  },
});

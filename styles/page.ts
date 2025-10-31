import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    backgroundColor: "#181619",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffffff",
    marginTop: 2,
    letterSpacing: 1.0,
  },
  imageContainer: {
    alignItems: "center",
    transform: [{ translateY: 70 }],
    maxWidth: 300,
    height: 300,
  },
  signUpButton: {
    justifyContent: "space-between",
    paddingTop: 200,
  },
  buttonContainer: {
    width: 365,
    height: 60,
    borderRadius: 25,
    overflow: "hidden",
  },
  gradientBackground: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
    loginButtonText: {
      marginTop: 40,
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
  },
});

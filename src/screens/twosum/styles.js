import { StyleSheet, Platform } from "react-native";
import { colors } from "../../configs/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    ...(Platform.OS === "web" && {
      margin: "auto",
      width: "100%",
      maxWidth: 500,
    }),
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 30,
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: colors.gray,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  result: { 
    fontWeight: "bold", 
    fontSize: 15 },
});
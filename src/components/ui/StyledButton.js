import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../configs/colors";

const ButtonFormat = {
    Default: 'default',
    NoBorder: 'noBorder',
    Outline: 'outline',
};

const StyledButton = ({
    children,
    actionHandler,
    type = ButtonFormat.Default,
    color,
    textColor,
    ...buttonProps
}) => {
    const buttonStyle = StyleSheet.flatten([
        styles[type],
        color ? { backgroundColor: color } : {},
        buttonProps.style,
    ]);

     const textStyle = StyleSheet.flatten([
        styles[`${type}Text`],
        textColor ? { color: textColor } : {},
        textStyle,
    ]);

    return(
        <Pressable 
            style={buttonStyle} 
            {...buttonProps} 
            onPress={actionHandler}
        >
            <Text style={textStyle}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
    alignItems: "center",
  },
  noBorder: {
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: "center",
  },
  outline: {
    padding: 10,
    backgroundColor: 'transparent',
    borderWidth: 0.8,
    borderColor: colors.gray,
    borderRadius: 5,
    alignItems: "center",
  },

  //text styling
  defaultText: {
    color: colors.black,
  },
  noBorderText: {
    color: colors.blue,
  },
  outlineText: {
    color: colors.gray,
  }
});


export { StyledButton, ButtonFormat };
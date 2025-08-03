import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';

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
  style,
  styleText,
  hoverable = true,
  ...buttonProps
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = StyleSheet.flatten([
    styles[type],
    color ? { backgroundColor: color } : {},
    style,
    hoverable && isHovered ? styles.buttonHover : {},
  ]);

  const textStyle = StyleSheet.flatten([
    styles[`${type}Text`],
    textColor ? { color: textColor } : {},
    styleText,
  ]);

  return (
    <Pressable
      style={[buttonStyle]}
      {...buttonProps}
      onPress={actionHandler}
      onHoverIn={() => setIsHovered(prev => !prev)}
      onHoverOut={() => setIsHovered(prev => !prev)}
    >
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    backgroundColor: colors.gray,
    borderRadius: 5,
    alignItems: 'center',
  },
  noBorder: {
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  outline: {
    padding: 10,
    backgroundColor: 'transparent',
    borderWidth: 0.8,
    borderColor: colors.gray,
    borderRadius: 5,
    alignItems: 'center',
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
  },
  buttonHover: {
    backgroundColor: colors.pink,
  },
});

export { StyledButton, ButtonFormat };

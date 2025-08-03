import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextFormat = {
  Title: 20,
  Label: 15,
  Default: 12,
  Header: 30,
};

const StyledText = ({
  children,
  type = TextFormat.Default,
  color,
  ...textProps
}) => {
  const style = StyleSheet.flatten([
    styles[type],
    color ? { color } : {},
    textProps.style,
  ]);

  return (
    <Text style={style} {...textProps} allowFontScaling={true}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  [TextFormat.Title]: {
    fontSize: TextFormat.Title,
    fontWeight: '700',
    marginBottom: 15,
  },
  [TextFormat.Label]: {
    fontSize: TextFormat.Label,
    fontWeight: '500',
  },
  [TextFormat.Default]: {
    fontSize: TextFormat.Default,
  },
  [TextFormat.Header]: {
    fontSize: TextFormat.Header,
    fontWeight: '700',
  },
});

export { StyledText, TextFormat };

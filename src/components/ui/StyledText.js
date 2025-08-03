import React from 'react';
import { Text, StyleSheet } from "react-native";

const TextFormat = {
    Title: 20, 
    Label: 15, 
    Default: 12
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
        <Text 
            style={style} 
            {...textProps}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    [TextFormat.Title] : {
        fontSize: TextFormat.Title,
        fontWeight:'700',
        marginBottom:15
    },
    [TextFormat.Label]: {
        fontSize: TextFormat.Label,
        fontWeight:'500',
    },
    [TextFormat.Default]: {
        fontSize: TextFormat.Default,
    },
});


export { StyledText, TextFormat };
import React from "react";
import {  TextInput, StyleSheet } from "react-native";
import { colors } from "../../configs/colors";

const InputFormat = {
    Default: 'default',
    BottomBorder: 'bottomBorder',
};

const StyledInput = ({
    value,
    setValue,
    placeholder, 
    inputType = 'default',
    type = InputFormat.Default,
    style,
    ...inputProps
}) => {
    const inputStyle = StyleSheet.flatten([
        styles[type],
        style,
    ]);

    return (
        <TextInput
            style={inputStyle}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            keyboardType={inputType}
            {...inputProps}
            />
    )
}

const styles = StyleSheet.create({
    default: { 
        borderWidth: 1, 
        borderRadius: 5,
        padding: 10, 
        marginVertical: 10,
        color: colors.black,  
    },
    bottomBorder: {
        borderBottomWidth: 1, 
        borderBottomColor: colors.blue,
        padding: 10, 
        marginVertical: 10,
        color: colors.black,  
    },   
});

export { StyledInput, InputFormat };
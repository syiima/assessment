import React from 'react';
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import { colors } from '../../configs/colors';

const SafeAreaViewContainer = ({ children }) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        ...(Platform.OS === "web" && {
            width: "100%",
        }),
    },
    content : {
        paddingHorizontal: 20,
    }
});

export default SafeAreaViewContainer;
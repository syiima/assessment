import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Platform, StyleSheet, Pressable } from 'react-native';

const Navbar = () => {

    const navTitle = ["Showcase", "Docs", "Blog", "Analytics", "Templates", "Enterprise"]

    const WebNavbar = () => {

        return(
            <SafeAreaView>
                <View style={styles.navbar}>
                    <View style={styles.navRef}>
                        <Text style={styles.aeonTitle}>AEON</Text>
                        <View style={styles.navItems}>
                            {navTitle.map((title, ind) => {
                                return(
                                    <Text key={ind} style={styles.navText}>
                                        <a href='/' style={styles.navLink}>{title}</a>
                                    </Text>
                                )
                            })}
                        </View>
                    </View>
                    <TextInput
                        placeholder="Search Documentation..."
                        style={styles.searchInput}
                    />
                </View>
                
            </SafeAreaView>
        )
    }
    
    const MobileNavbar = () => {
        const [toggleMenu, setToggleMenu] = useState(false);

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.mobileNav}>
                    <Pressable onPress={() => setToggleMenu(prev => !prev)}>
                        <Text style={styles.aeonTitle}>AEON</Text>
                    </Pressable>
                    
                    <View style={styles.rightSide}>
                        <Text style={styles.menuIcon}>⌕</Text>
                        <Pressable onPress={() => setToggleMenu(prev => !prev)}>
                            <Text style={styles.menuIcon}>{toggleMenu ? '✕' : '☰'}</Text>
                        </Pressable>
                    </View>
                </View>

                {toggleMenu && 
                    <View style={styles.menu}>
                        {navTitle.map((title, ind) => {
                            return(
                                <Text key={ind} style={styles.navText}>{title}</Text>
                            )
                        })}
                    </View>
                }
            </SafeAreaView>
        )
    }
    return(
        <View style={styles.mainContainer}>
            {Platform.OS === 'web' ? (
                <WebNavbar/>
            ) : (
                <MobileNavbar/>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {flex:1},
    //web
    navbar: {flex:1, justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', padding:20,  paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 0.8},
    searchInput: {padding: 7, borderRadius:5, borderWidth: 0.7 },
    navRef: {flexDirection: 'row', gap: 16, alignItems:'center'},
    navItems: {flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
    navLink: { textDecorationLine: 'none',  color: 'black'},
    navText: {fontSize: 16, color: 'black'},

    //mobile
    container: { paddingVertical: 20},
    mobileNav: { padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth:0.8},
    rightSide: {flexDirection:'row', alignItems:'center'},
    menuIcon: { paddingHorizontal: 8, fontSize:25 },
    menu: { backgroundColor: 'white', padding: 20, borderWidth: 1, borderColor: '#ccc', zIndex: 1 },

    aeonTitle: { ...(Platform.OS === 'web' ? { color: 'black' } : { color: 'blue', fontWeight:'bold' }),},
})

export default Navbar
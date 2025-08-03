import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";
import NavigationTitle from "./constants";
import { StyledText, TextFormat } from "../../components/ui/StyledText";
import { styles } from './styles';

const MobileNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <View>
            <View style={styles.mobileNav}>
                <Pressable onPress={() => setToggleMenu(prev => !prev)}>
                    <StyledText 
                        type={TextFormat.Label} 
                        style={styles.aeonTitle}
                    >
                        AEON
                    </StyledText>
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
                    {NavigationTitle.map((item, ind) => {
                        return(
                            <StyledText 
                                type={TextFormat.Label} 
                                key={ind} 
                                style={{paddingVertical: 5,}}
                            >
                                {item.name}
                            </StyledText>
                        )
                    })}
                </View>
            }
        </View>
    )
}

export default MobileNavbar;
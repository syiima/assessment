import React from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { StyledText, TextFormat } from "../../components/ui/StyledText";
import { styles } from './styles';
import NavigationTitle from "./constants";

const WebNavbar = () => {
    return(
        <View>
            <View style={styles.navbar}>
                <View style={styles.navRef}>
                    <StyledText 
                        type={TextFormat.Title} 
                        style={styles.aeonTitle}
                    >
                        AEON
                    </StyledText>
                    <View style={styles.navItems}>
                        {NavigationTitle.map((item, ind) => {
                            return(
                                <StyledText 
                                    type={TextFormat.Label} 
                                    key={ind}
                                >
                                    <a 
                                        href={item.route} 
                                        style={styles.navLink}
                                    >
                                        {item.name}
                                    </a>
                                </StyledText>
                            )
                        })}
                    </View>
                </View>
                <TextInput
                    placeholder="Search Documentation..."
                    style={styles.searchInput}
                />
            </View>
        </View>
    )
}

export default WebNavbar;
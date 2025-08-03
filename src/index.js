import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { StyledButton, ButtonFormat } from "./components/ui/StyledButton";
import { StyledText , TextFormat} from "./components/ui/StyledText";
import { colors } from "./configs/colors";

import Calculator from './screens/calculator';
import Navbar from './screens/navbar';
import TwoSum from './screens/twosum';

const Questions = [
{
    num: 1,
    name: "Calculator",
    description: "Get sum of two numbers using calculator.",
},
{
    num: 2,
    name: "Navbar",
    description: "Display navbar at the top. Different UI for web and mobile platform.",
},
{
    num: 3,
    name: "TwoSum",
    description: "Find 2 indices for target sum, by inputting an array of numbers.",
},
]

const MainApp = () => {
    const [ page, setPage ] = useState(0);
    const [ pageName, setPageName ] = useState('');

    const renderScreen = () => {
        const changePage = (item) => {
            setPage(item.num);
            setPageName(item.name);
        }
        switch(page){
            case 1: 
                return <Calculator/>;
            case 2: 
                return <Navbar/>;
            case 3:
                return <TwoSum/>;
            default:
                return(
                    <View style={styles.content}>
                        <StyledText type={TextFormat.Header}>
                            Home
                        </StyledText>
                        <View style={styles.questionView}>
                            <StyledText type={TextFormat.Title}>
                                Below are functions available in this app. Please click on any to view and test the functionality.
                            </StyledText>
                            {Questions.map((item, index) => (
                                <Pressable onPress={() => changePage(item)}>
                                    <View key={index} style={styles.questionBox} >
                                        <StyledText type={TextFormat.Label}>{`${item.num}. ${item.name}`}</StyledText>
                                        <StyledText type={TextFormat.Label}>{item.description}</StyledText>
                                        
                                    </View>
                                </Pressable>
                            ))}
                        </View>
                    
                    </View>
                )
        }
    }

    const Header = () => {
        const resetPage = () => {
            setPage(0);
            setPageName('');
        }
        return(
            <Pressable onPress={resetPage} style={styles.header}>
                <StyledText type={TextFormat.Header}>
                    {`< ${pageName.toUpperCase()}`}
                </StyledText>
                {/* <StyledButton 
                    type={ButtonFormat.Outline} 
                    actionHandler={resetPage}
                    textColor={colors.black}
                    style={{ alignItems: 'flex-start' }}
                    styleText= {{ fontWeight: 'bold', fontSize: 16}}
                    hoverable={ false }
                >
                    {`← ${pageName}`}
                </StyledButton> */}
            </Pressable>
        )
    }

    return(
        <View style={styles.container}>
            {page > 0 && <Header />}
            {renderScreen()}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingVertical: 20, 
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    questionView: {
        marginTop: 30,
    },
    questionBox: {
        margin: 10,
        padding: 10,
        flexDirection: "column",
        minWidth: 50,
        justifyContent:"flex-start",
        alignItems: "stretch",
        borderWidth: 0.8, 
        borderColor: colors.gray,
        borderRadius: 5,
    },
    questionText: {
        color: colors.black,
        marginBottom: 5,
    },
    header: {
        marginLeft:15,
        marginBottom: 10,
    }
});

export default MainApp;
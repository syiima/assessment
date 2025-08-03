import React, { useState } from 'react';
import SafeAreaViewContainer from '../../components/ui/SafeAreaViewContainer';
import { StyledText, TextFormat } from '../../components/ui/StyledText';
import { StyledButton, ButtonFormat } from '../../components/ui/StyledButton';
import { StyledInput } from '../../components/ui/StyledInput';
import AlertBox from '../../components/modals/AlertBox';
import { View } from 'react-native';
import { styles } from './styles';

const Calculator = () => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [total, setTotal] = useState(null);

    const handleAdd = () => {
        if(firstNum !== '' && secondNum !== ''){
            let subtotal = Number(firstNum) + Number(secondNum)
            if(isNaN(subtotal)){
                AlertBox('Please enter only numbers')
            } else {
                setTotal(subtotal)
            }
            
        } else {
            AlertBox('Please enter both numbers')
        }
    }
    
    return(
        <SafeAreaViewContainer>
            <View style={{paddingVertical: 10 }}>
                <StyledText type={TextFormat.Title}>
                    Get the total sum of numbers input: 
                </StyledText>

                <StyledText type={TextFormat.Label}>
                    First Number
                </StyledText>

                <StyledInput
                    value={firstNum}
                    setValue={setFirstNum}
                    placeholder="First Number"
                    keyboardType="numeric"
                />

                <StyledText type={TextFormat.Label}>
                    Second Number
                </StyledText>

                <StyledInput
                    value={secondNum}
                    setValue={setSecondNum}
                    placeholder="Second Number"
                    keyboardType="numeric"
                />

                <StyledButton 
                    type={ButtonFormat.Default} 
                    actionHandler={handleAdd}
                    style={{ marginVertical: 15 }}
                >
                    Calculate total
                </StyledButton>

                {total !== null && 
                    <StyledText type={TextFormat.Label}>
                        Total: {total}
                    </StyledText>
                }
            </View>
        </SafeAreaViewContainer>
    )
}

export default Calculator;
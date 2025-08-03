import React, { useState } from 'react';
import SafeAreaViewContainer from '../../components/ui/SafeAreaViewContainer';
import { StyledText, TextFormat } from '../../components/ui/StyledText';
import { StyledButton, ButtonFormat } from '../../components/ui/StyledButton';
import { StyledInput } from '../../components/ui/StyledInput';
import AlertBox from '../../components/modals/AlertBox';

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
            <StyledText type={TextFormat.Title}>
                Adding Two Numbers
            </StyledText>

            <StyledInput
                value={firstNum}
                setValue={setFirstNum}
                placeholder="First Number"
                keyboardType="numeric"
            />

            <StyledInput
                value={secondNum}
                setValue={setSecondNum}
                placeholder="Second Number"
                keyboardType="numeric"
            />

            <StyledButton 
                type={ButtonFormat.Default} 
                actionHandler={handleAdd}
            >
                Add Two Numbers
            </StyledButton>

            {total !== null && 
                <StyledText type={TextFormat.Label}>
                    Total: {total}
                </StyledText>
            }

        </SafeAreaViewContainer>
    )
}

export default Calculator;
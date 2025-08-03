import React, { useMemo, useState } from 'react';
import { TextInput, Pressable, Text, View } from 'react-native';
import SafeAreaViewContainer from '../../components/ui/SafeAreaViewContainer';
import { StyledText, TextFormat } from '../../components/ui/StyledText';
import { StyledButton, ButtonFormat } from '../../components/ui/StyledButton';
import { StyledInput } from '../../components/ui/StyledInput';
import AlertBox from '../../components/modals/AlertBox';
import { styles } from './styles';
import { filterInputArray, twoSumFinder } from './twosumcalculation';

const TwoSum = () => {
    const [inputArray, setInputArray] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(null);
    const [sortedArray, setSortedArray] = useState(null);
   
    const parsedArray = useMemo(() => 
        filterInputArray(inputArray), [inputArray]
    );
    const sortArray = useMemo(() => {
        return [...parsedArray].sort((a, b) => a - b);
    }, [parsedArray]);

    const parsedTarget = useMemo(() => 
        Number(target), [target]
    );

    const indexFinder = useMemo(() => {
        if (sortArray.length < 2 || isNaN(parsedTarget)){
            return null;
        } else {
            return twoSumFinder(sortArray, parsedTarget);
        }
    }, [sortArray, parsedTarget]);

    const handleCalculate = () => {
        if (sortArray.length < 2 || isNaN(parsedTarget)) {
            AlertBox('Please add more numbers');
            setResult(null);
            setSortedArray(null);
            return;
        }

        if (!indexFinder || indexFinder.length === 0) {
            AlertBox('No valid pair found for the given target.');
            setResult(null);
            setSortedArray(null); 
            return;
        }

        setSortedArray(sortArray);
        setResult(indexFinder);
    };

    return(
        <SafeAreaViewContainer>
            <View style={{paddingVertical: 10 }}>
                <StyledText type={TextFormat.Title}>
                   Find two sum indices by checking array and target value:
                </StyledText>

                <StyledText type={TextFormat.Label}>
                    Enter numbers (comma separated):
                </StyledText>
                <StyledInput
                    value={inputArray}
                    setValue={setInputArray}
                    placeholder="eg: 1,2,3,4"
                    keyboardType="numeric"
                />

                <StyledText type={TextFormat.Label}>
                    Enter target:
                </StyledText>
                <StyledInput
                    value={target}
                    setValue={setTarget}
                    placeholder="eg: 5"
                    keyboardType="numeric"
                />

                <StyledButton 
                    type={ButtonFormat.Default} 
                    actionHandler={handleCalculate}
                    style={{ marginVertical: 15}}
                >
                    Find two sum indices
                </StyledButton>


                {result && (
                    <View>
                        <StyledText type={TextFormat.Label}>
                            Sorted Array: [{sortedArray.join(', ')}] 
                        </StyledText>
                        <StyledText type={TextFormat.Label}>
                            Result: [{result[0]}, {result[1]}]
                        </StyledText>
                    </View>
                )}
            </View>
        </SafeAreaViewContainer>
    )
}

export default TwoSum;

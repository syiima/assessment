import React, { useState } from 'react';
import { SafeAreaView, TextInput, Pressable, Text, StyleSheet, View } from 'react-native';
import { showAlert } from '../components/alertBox';

const TwoSum = () => {
    const [inputArray, setInputArray] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState(null);
    const [sortedArray, setSortedArray] = useState(null);

    const handleCalculate = () => {
        let numbers = inputArray.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        
        let sorted = [...numbers].sort((a, b) => a - b);

        let tgt = parseInt(target);

        if (sorted.length < 2 || isNaN(tgt)) {
            showAlert('Please add more numbers')
            setResult(null);
            setSortedArray(null);
            return;
        }

        let output = twoSum(sorted, tgt);
        if (output.length === 0) {
            showAlert('No valid pair found for the given target.');
            setResult(null);
            setSortedArray(null);
            return;
        }
        
        setSortedArray(sorted);
        setResult(output);
    };

    const twoSum = (numbers, target) => {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left + 1, right + 1]; 
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return [];

    };

   
    // console.log(twoSum([4, 11, 17, 25], 21));
    // console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
    // console.log(twoSum([-1, 0], -1));

    return(
        <SafeAreaView style={styles.container}>
             <Text style={styles.title}>Two Sums</Text>

            <Text>Enter numbers (comma separated):</Text>
            <TextInput
                style={styles.input}
                value={inputArray}
                onChangeText={setInputArray}
                placeholder="eg: 1,2,3,4"
                keyboardType="numeric"
            />

            <Text>Enter target:</Text>
            <TextInput
                style={styles.input}
                value={target}
                onChangeText={setTarget}
                placeholder="eg: 5"
                keyboardType="numeric"
            />

            <Pressable style={styles.button} onPress={handleCalculate}>
                <Text>Find Two Sum</Text>
            </Pressable>

            {result && (
                <View>
                    <Text style={styles.result}>Sorted Array: [{sortedArray.join(', ')}] </Text>
                    <Text style={styles.result}>Result: [{result[0]}, {result[1]}]</Text>

                </View>
            )}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, ...(Platform.OS === 'web' && {margin: 'auto', width: '100%', maxWidth:500})},
  title: { fontWeight: 'bold', marginBottom: 20, fontSize: 30, alignItems:'center'},
  button: { padding: 10, backgroundColor: 'gray', marginBottom: 20, marginTop: 20, borderRadius: 5, alignItems:'center'},
  input: { marginTop: 10, borderWidth: 1, padding: 10, marginVertical: 10,  borderRadius: 5 },
  result: { fontWeight: 'bold', fontSize: 15},
});

export default TwoSum

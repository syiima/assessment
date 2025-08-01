import React, { useState } from 'react';
import { SafeAreaView, TextInput, Pressable, Text, StyleSheet, Alert } from 'react-native';
import {showAlert} from '../components/alertBox'

const Calculator = () => {

    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [total, setTotal] = useState(null);

    const handleAdd = () => {
        if(firstNum !== '' && secondNum !== ''){
            let subtotal = Number(firstNum) + Number(secondNum)
            if(isNaN(subtotal)){
                showAlert('Please enter only numbers')
            } else {
                setTotal(subtotal)
            }
            
        } else {
            showAlert('Please enter both numbers')
        }
    }

    // console.log(handleAdd(1,4));
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Adding Two Numbers</Text>

            <TextInput
                style={styles.input}
                value={firstNum}
                onChangeText={setFirstNum}
                placeholder="First Number"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                value={secondNum}
                onChangeText={setSecondNum}
                placeholder="Second Number"
                keyboardType="numeric"
            />

            <Pressable style={styles.button} onPress={handleAdd}>
                <Text>Add Two Numbers</Text>
            </Pressable>


            {total !== null && <Text styles={styles.result}>Total: {total}</Text>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, ...(Platform.OS === 'web' && {margin: 'auto', width: '100%', maxWidth:500})},
  title: { fontWeight: 'bold', marginBottom: 20, fontSize: 30, alignItems:'center'},
  button: { padding: 10, backgroundColor: 'gray', marginBottom: 20, marginTop: 20, borderRadius: 5, alignItems:'center'},
  input: { marginTop: 10, borderWidth: 1, padding: 10, marginVertical: 10,  borderRadius: 5},
  result: { fontWeight: 'bold', fontSize: 15},
  
});

export default Calculator;
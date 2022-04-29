import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

function StartGameScreen () {

const [enteredValue, setEnteredValue] = useState('');
const [confirmed, setConfirmed] = useState(false);
const [selectedNumber, setSelectedNumber] = useState(undefined);

const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
}

const resetInputHandler = input => {
    setEnteredValue('')
    setConfirmed(false)
}

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return

    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
}

let confirmedOutput;

if(confirmed){
    confirmedOutput = (
    <Card style={styles.selectedContainer}>
        <Text>You selected:</Text>
        <NumberContainer>
            {selectedNumber}
        </NumberContainer>
    </Card>
    )
}

  return (
    <View style={styles.screen}>
        <Card>
            <Text style={styles.title}>Select a Number</Text>
                <Input 
                style={styles.input}
                blurOnSubmit//Android
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button style={styles.button} title="Reset" color={Colors.secondary} onPress={resetInputHandler}/>
                    </View>
                    <View style={styles.button}>
                    <Button style={styles.button} title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/>
                </View>
            </View>
        </Card>
        {confirmedOutput}
    </View>
  )
}

const styles = StyleSheet.create({
    selectedContainer:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .26,
        shadowRadius: 6,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    },
    button:{
       width: 100
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input:{
        width: 50,
        textAlign: 'center'
    }
  });

export default StartGameScreen;
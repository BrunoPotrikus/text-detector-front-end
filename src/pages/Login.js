import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login () {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <View style={styles.conatainer}>

            <Text style={styles.title}>Login</Text>

            <TextInput 
                placeholder='Email'
                style={styles.input} 
                value={email}
                onChange={text => {setEmail(text)}}
            />

            <TextInput 
                placeholder='Senha'
                style={styles.input} 
                value={password}
                onChange={text => {setPassword(text)}}
            />

            <Pressable title="Criar Conta" style={styles.button}>
                <Text style={styles.textButton}>Login</Text>
            </Pressable>

            <TouchableOpacity onPress={() => { navigation.navigate('CreateAccount') }}>
                <Text style={styles.criar}>Criar Conta</Text>
            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({

    conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    title: {
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 40,
        marginBottom: 30
    },
    button: {
        borderRadius: 10,
        width: 100,
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    criar: {
        fontSize: 15,
        marginTop: 15,
        fontWeight: 'bold'
    }

});
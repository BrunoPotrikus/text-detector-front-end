import React, { useState, useContext } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import State from "../services/State";

import { AuthContext } from "../contexts/auth";

function CreateAccount () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

    function handleSignUp (userEmail, userPassword) {

        console.log(`Email: ${userEmail}`);
        console.log(`Senha: ${userPassword}`);

        signUp(userEmail, userPassword);

    }

    return (

        <View  style={styles.conatainer}>

            <Text style={styles.title}>Criar Conta</Text>

            <TextInput 
                placeholder="Email"
                style={styles.input} 
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput 
                placeholder="Senha"
                style={styles.input} 
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <Pressable title="Criar Conta" style={styles.button}  onPress={handleSignUp(email, password)}>
                <Text style={styles.textButton}>Criar Conta</Text>
            </Pressable>

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
    }

});

export default CreateAccount;
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';

function ImagePickerComponent ({ onSubmit }) {

    const [image, setImage] = useState(null);
    const [text, setText] = useState('Adicione uma imagem');

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true

        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setText('Carregando...');
            const apiText = await onSubmit(result.assets);
            setText(apiText.text);
        }

    };

    return (

        <View style={styles.conatainer}>

            <Button title='Selecione uma imagem' onPress={pickImage}/>

            {image && (

                <Image
                
                    source={{ uri: image }}
                    style={styles.image}
                
                />

            )}

            <Text style={styles.text}>{text}</Text>

        </View>

    )
}

const styles = StyleSheet.create({

    conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    text: {
        color: '#000'
    }

});

export default ImagePickerComponent;

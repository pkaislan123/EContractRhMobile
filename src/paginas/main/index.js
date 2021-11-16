import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, Icon, ImageBackground, Button, TextInput, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import 'react-native-gesture-handler';


import {
    styles
  } from '../../styles';




const avisar = (message) => {
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );

    return null;
};

 

class Main extends React.Component {

    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@eContractRh:token')
            if (value !== null) {
                avisar(value)
            } else {
                avisar("nulo")
    
            }
        } catch (e) {
            avisar("erro: " + e)
        }
    }

    
    render() {
        return (
            
            <View style={styles.container}>
                
                <StatusBar hidden />
                
                <ImageBackground source={require('../../imagens/fundo_negro.jpg')} style={styles.backgroundImage}>
              

                    <View >
                        <Text>You have (undefined) friends.</Text>
                        <Button style={{ right: 0 }}
                            title="Token"
                            color="#841584"
                            onPress={this.getData}

                        />
                    </View>

                </ImageBackground>

            </View>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import { Text, Image, View, ImageBackground, Button, TextInput, ToastAndroid } from 'react-native';
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

class Login extends React.Component {


    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    // state = { usuario: '', senha: '', error: '' };
    state = { usuario: '00613742613', senha: 'TIt@niwm2014', error: '' };


    handleCpfChange = (usuario) => {
        this.setState({ usuario });
    };

    handleSenhaChange = (senha) => {
        this.setState({ senha });
    };


    telaPrincipal = () => {
        this.props.navigation.navigate('Home');
    }



    logar = async () => {
        if (this.state.usuario.length === 0 || this.state.senha.length === 0) {
            this.setState({ error: 'Preencha CPF e senha para continuar!' }, () => false);
            avisar("Preencha CPF e senha para continuar!");
        } else {
            try {
                await AsyncStorage.removeItem('@eContractRh:token');
                const response = await api.post('/login', {
                    usuario: this.state.usuario,
                    senha: this.state.senha,
                }
                );


                const jsonValue = await response.data;

                await AsyncStorage.setItem('@eContractRh:token', jsonValue);
                this.props.navigation.navigate('Home');


            } catch (_err) {
                this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
                avisar("Erro ao Logar: " + _err);
                console.log("Erro ao Logar: " + _err);

            }
        }
    };



    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />

                <ImageBackground source={require('../../imagens/fundo_negro.jpg')} style={styles.backgroundImage}>



                    <Image source={require('../../imagens/logo.jpg')} style={{ height: 150, width: 300, marginLeft: 0, marginTop: 130, marginBottom: 30, justifyContent: 'flex-start', }} />


                    <View style={styles.texto2}>

                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white', margin: 3, justifyContent: 'flex-start', borderBottomWidth: 1, borderColor: '#fff' }} > Login </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ justifyContent: 'flex-start', }} ></Text>
                        </View>

                    </View>

                    <View style={styles.texto}>
                        <Text style={{ color: 'white' }} >     Colaborador</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input}
                            value={this.state.usuario}
                            onChangeText={this.handleCpfChange}
                        />
                    </View>

                    <View style={styles.texto}>
                        <Text style={{ color: 'white' }} >              Senha</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            value={this.state.senha}
                            onChangeText={this.handleSenhaChange}
                        />

                    </View>




                    <View style={styles.cardContent}>
                        <Button style={{ right: 0 }}
                            title="Entrar"
                            color="#841584"
                            onPress={this.logar}

                        />
                    </View>


                    <View style={{ margin: 100 }}>
                        <View style={styles.texto}>
                            <Text style={{ color: 'blue' }} >*Copyright Todos os Direitos Reservados E-Contract Titaniwm 2021</Text>
                        </View>
                    </View>



                </ImageBackground>

            </View>
        );
    }


}


export default Login;
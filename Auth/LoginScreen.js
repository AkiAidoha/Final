import React from 'react';
import {
    ActivityIndicator,
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground,
    View,
    Image,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import SvgUri from 'react-native-svg-uri';
import styles from './Style';
import { KeyboardAvoidingView } from 'react-native';
import firebase from '../FireBase/FireBase'

export default class LoginScreen extends React.Component{

    state = {
        email: '',
        password: '',
    }

    handleChangeUsername = (email) => {
        this.setState({email})
    }
    handleChangePassword = (password) => {
        this.setState({password})
    }


    loginUser = (email, password) => {
        let errorCode;
        if(((email === '' && password === '') || (email === '' || password === ''))) {
            Alert.alert("Введите все Ваши данные");
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                this.props.navigation.navigate("Main")
            })
            .catch((error)=> {
                errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {

                    alert('Неправильный email или пароль.');
                }else if(errorCode === 'invalid-email'){

                    alert('Неправильный email или пароль.');
                }else if('auth/user-not-found'){

                    alert("Email не найден.");
                }
                else if('auth/user-disabled'){

                    alert("Email не найден.");
                }else {

                    this.props.navigation.navigate('Main');
                }
            });
        }
        
    }


    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>

                <View style={styles.logoView}>
                    <Image source={require('../assets/images/logo.png')}
                           style={styles.logo}/>
                </View>

                <View style={styles.inputs}>
                    <View style={styles.inputRectangle}>
                        <View style={styles.rectangleOne}>
                            <SvgUri
                                width="30"
                                height="30"
                                source={require('../assets/images/user.svg')}
                            />
                        </View>
                        <View style={styles.rectangleTwo}>
                            <TextInput  placeholder={"Email"}
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.email}
                                        onChangeText={this.handleChangeUsername}
                                        underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>

                    <View style={styles.inputRectangle}>
                        <View style={styles.rectangleOne}>
                            <SvgUri
                                width="30"
                                height="30"
                                source={require('../assets/images/padlock.svg')}
                            />
                        </View>
                        <View style={styles.rectangleTwo}>
                            <TextInput  placeholder={"Пароль"}
                                        style={styles.textinput}
                                        placeholderTextColor="white"
                                        value={this.state.password}
                                        onChangeText={this.handleChangePassword}
                                        secureTextEntry
                                        underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Forgot")}>
                        <Text style={{
                            textAlign: 'right',
                            alignSelf:'stretch',
                            marginRight: 25,
                            marginTop: 10,
                            color: '#57e5dd',
                        }}>Забыли пароль?</Text>
                    </TouchableOpacity>

                     <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.loginUser(this.state.email, this.state.password)}
                         >
                            <Text style={styles.buttonText}>Войти</Text>
                        </TouchableOpacity>
                            <Text style={{
                                textAlign: 'right',
                                alignSelf:'stretch',
                                marginRight: 25,
                                marginTop: 10,
                                color: '#57e5dd',
                            }}
                                  onPress={()=> this.props.navigation.navigate("Registration")}>
                                    Нет учетной записи?
                            </Text>
                    </View>

                </View>

            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        );
    }
}
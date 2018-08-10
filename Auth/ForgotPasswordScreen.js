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
    }

    handleChangeUsername = (email) => {
        this.setState({email})
    }


    forgotPassword = (email) => {
       firebase.auth().sendPasswordResetEmail(email).then((user)=> {
           alert("Пожалуйста, проверьте почту");
       })
        .catch((error)=> {
            errorCode = error.code;
            if (errorCode === 'auth/wrong-password') {
                console.log("Wrong password");
                alert('Неправильный email или пароль.');
            }else if(errorCode === 'invalid-email'){
                console.log("Invalid email");
                alert('Неправильный email или пароль.');
            }else if('auth/user-not-found'){
                console.log("User not found");
                alert("Email не найден.");
            }
            else if('auth/user-disabled'){
                console.log("User disabled");
                alert("Email не найден.");
            }
       });
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

                     <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => this.forgotPassword(this.state.email)}
                         >
                            <Text style={styles.buttonText}>Отправить</Text>        
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        );
    }
}
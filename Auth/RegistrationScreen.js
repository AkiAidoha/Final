import React from 'react';
import {
    ActivityIndicator,
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    View,
    ImageBackground,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from 'react-native';
 import SvgUri from 'react-native-svg-uri';
import DatePicker from 'react-native-datepicker';
import styles from './Style';
import { KeyboardAvoidingView } from 'react-native';
import firebase from '../FireBase/FireBase'
 export default class RegistrationScreen extends React.Component{
    
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
    
    signUpUser = (email, password) => {
        let errorCode;
        if(((email === '' && password === '') || (email === '' || password === ''))) {
            Alert.alert("Введите все Ваши данные");
        }else{
            firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
                this.props.navigation.navigate("Login")
                alert("Вы успешно зарегистрированы.");
            })
            .catch((error)=> {
                errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    console.log("Wrong password");
                    alert('Неправильный email или пароль.');
                }else if(errorCode === 'invalid-email'){
                    console.log("Invalid email");
                    alert('Неправильный email или пароль.');
                }else if('auth/email-already-in-use'){
                    console.log("Email already in use");
                    alert("Email уже используется.");
                }
                else if('auth/user-disabled'){
                    console.log("User disabled");
                    alert("Email не найден.");
                }else {
                    console.log("Navigate to Login");
                    this.props.navigation.navigate('Login');
                    alert("Вы успешно зарегистрированы.");
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
                      <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={() => this.signUpUser(this.state.email, this.state.password)}
                        >
                            <Text style={styles.buttonText}>Зарегистрироваться</Text>        
                        </TouchableOpacity>
                        <Text style={{
                            textAlign: 'right',
                            alignSelf:'stretch',
                            marginRight: 25,
                            marginTop: 10,
                            color: '#57e5dd',
                        }}
                            onPress={()=> this.props.navigation.navigate("Login")}>
                                Есть аккаунт?
                        </Text>
                    </View>
                 </View>

            </View>
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>
        );
    }
}

    // signUpUser = (email, password) => {
    //     let errorCode;
    //     if(((email === '' && password === '') || (email === '' || password === ''))) {
    //         Alert.alert("Введите все Ваши данные");
    //     }else{
    //         firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
    //             alert("Вы успешно зарегистрированы.");
    //             user.sendEmailVerification().then(()=>{
    //                 alert("Пожалуйста, проверьте почту");
    //             }).catch((e)=>{
    //                 alert(e);
    //             });
    //         })
    //         .catch((error)=> {
    //             errorCode = error.code;
    //             if (errorCode === 'auth/wrong-password') {
    //                 console.log("Wrong password");
    //                 alert('Неправильный email или пароль.');
    //             }else if(errorCode === 'invalid-email'){
    //                 console.log("Invalid email");
    //                 alert('Неправильный email или пароль.');
    //             }else if('auth/email-already-in-use'){
    //                 console.log("Email already in use");
    //                 alert("Email уже используется.");
    //             }
    //             else if('auth/user-disabled'){
    //                 console.log("User disabled");
    //                 alert("Email не найден.");
    //             }else {
    //                 console.log("Navigate to Login");
    //                 this.props.navigation.navigate('Login');
    //                 alert("Вы успешно зарегистрированы.");
    //             }
    //         });
    //     }
    // }

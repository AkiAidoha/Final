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
    Keyboard
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

        try{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            this.props.navigation.navigate("Login")
        }catch(err) {
            console.log(err)
        }
    
    }


    render(){
        return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <View style={styles.container}>
                    <ImageBackground
                        style={{
                        flex: 1,
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff'
                        }}
                        source={require('../assets/images/32-649_4.jpg')}
                    >
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
                        <Text style={styles.noAccount} 
                            onPress={()=> this.props.navigation.navigate("Login")}>
                                Есть аккаунт?
                        </Text>
                    </View>

                </View>
                </ImageBackground>    
            </View>
          </TouchableWithoutFeedback>  
        </KeyboardAvoidingView>
        );
    }
}
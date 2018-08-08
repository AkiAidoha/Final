import React from 'react';
import { 
    View,
    StatusBar,
    Text,
    TouchableOpacity, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard, 
    ScrollView,
    Switch,
    StyleSheet,
    Alert
} from 'react-native';
import styles from './Style';
import SvgUri from 'react-native-svg-uri';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../FireBase/FireBase'



export default class ProfileScreen extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        return ({
        title: 'Мои данные',
        headerStyle: {
            backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '500'
        },
        headerLeft:null,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <SvgUri
                    width="30"
                    height="30"
                    style={{ paddingRight: 10  }}
                    source={require('../assets/images/edit.svg')}
                />
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity onPress={()=>{
                firebase.auth().signOut();
                navigation.navigate('Login');
            }}>
                <Text style={styles.exit}>Выход</Text>
            </TouchableOpacity>
        )
    })
    };

    state = {
        user: {
            "city": "",
            "dob": "",
            "gender": "",
            "height": "",
            "username": "",
            "weight": "",
        }
    }

    fetchHandler = () => {
        let user = firebase.auth().currentUser.uid;
        firebase
            .database()
            .ref('users')
            .orderByChild('userId')
            .equalTo(user)
            .once('value', snap => {
                if(snap.val()) {
                    this.setState({
                        user: snap.val()[Object.keys(snap.val())[0]]
                    })
                }
            });
    }


    componentDidMount = () => {
        this.fetchHandler()
    }

    componentWillReceiveProps = () => {
        this.fetchHandler()
    }
    

    render() {

        return (
            <KeyboardAvoidingView style={styles.container2} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView>
                        <StatusBar
                            backgroundColor="white"
                            barStyle="light-content"
                        />      
                        <View style={styles.userData}>
                            <View style={styles.seperator}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/profile.svg')}
                                    /> 
                                </View>    
                                <Text style={styles.leftSide}>Имя: </Text>

                                <Text style={styles.rightSide}>{this.state.user.username}</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/genderBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Пол: </Text>
                                <Text style={styles.rightSide}>{this.state.user.gender}</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/calendarBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Дата рождения: </Text>
                                <Text style={styles.rightSide}>{this.state.user.dob}</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/heightBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Рост: </Text>
                                <Text style={styles.rightSide}>{this.state.user.height}</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/weightBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Вес: </Text>
                                <Text style={styles.rightSide}>{this.state.user.weight}</Text>
                            </View>
                            <View style={styles.seperator2}>
                                <View style={styles.userIcon}> 
                                    <SvgUri
                                        width="30"
                                        height="30"
                                        source={require('../assets/images/enterpriseBlack.svg')}
                                    /> 
                                </View> 
                                <Text style={styles.leftSide}>Город: </Text>
                                <Text style={styles.rightSide}>{this.state.user.city}</Text>
                            </View>
                        </View>            
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
    }
}
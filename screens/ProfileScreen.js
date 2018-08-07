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
import DatePicker from 'react-native-datepicker';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../FireBase/FireBase'



export default class ProfileScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Редактировать',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
    };

    constructor(props) {
        super(props);
        
        this.inputRefs = {};
    
        this.state = {
            gender: '',
            name: '',
            height: '',
            weight: '',
            bdate: '',
            city: '',
            items: [
                {
                    label: 'Астана',
                    value: 'Астана'
                },
                {
                    label: 'Алматы',
                    value: 'Алматы'
                },
                {
                    label: 'Шымкент',
                    value: 'Шымкент'
                },
                {
                    label: 'Караганды',
                    value: 'Караганды'
                },
                {
                    label: 'Актобе',
                    value: 'Актобе'
                },
                {
                    label: 'Тараз',
                    value: 'Тараз'
                },
                {
                    label: 'Павлодар',
                    value: 'Павлодар'
                },
                {
                    label: 'Усть-Каменогорск',
                    value: 'Усть-Каменогорск'
                },
                {
                    label: 'Семей',
                    value: 'Семей'
                },
                {
                    label: 'Уральск',
                    value: 'Уральск'
                },
                {
                    label: 'Костанай',
                    value: 'Костанай'
                },
                {
                    label: 'Атырау',
                    value: 'Атырау'
                },
                {
                    label: 'Кызылорда',
                    value: 'Кызылорда'
                },
                {
                    label: 'Петропавловск',
                    value: 'Петропавловск'
                },
                {
                    label: 'Актау',
                    value: 'Актау'
                },
                {
                    label: 'Туркестан',
                    value: 'Туркестан'
                },
                {
                    label: 'Темиртау',
                    value: 'Темиртау'
                },
                {
                    label: 'Кокшетау',
                    value: 'Кокшетау'
                },
                {
                    label: 'Талдыкорган',
                    value: 'Талдыкорган'
                },
                {
                    label: 'Экибастуз',
                    value: 'Экибастуз'
                },
                {
                    label: 'Рудный',
                    value: 'Рудный'
                }
            ],
            items2: [
                {
                    label: 'Мужской',
                    value: 'Мужской'
                },
                {
                    label: 'Женский',
                    value: 'Женский'
                }
            ]
        };
    }

    handleDate = (bdate) => {
        this.setState({bdate})
    }

    handleHeight = (height) => {
        this.setState({height})
    }

    handleWeight = (weight) => {
        this.setState({weight})
    }

    handleName = (name) =>{
        this.setState({name})
    }


    removeHandler = () => {
        const database = firebase.database()
        let user = firebase.auth().currentUser.uid;
        let ref = firebase.database().ref('users');
        ref
            .orderByChild('userId')
            .equalTo(user)
            .once('value', snap => {
                if(snap.val()) {
                    ref.child(Object.keys(snap.val())[0]).remove()
                }
            });
    }

    writeUserData = () => {
        const {name} = this.state
        const {gender} = this.state
        const {city} = this.state
        const {height} = this.state
        const {weight} = this.state
        const {bdate} = this.state

        const database = firebase.database()
        let user = firebase.auth().currentUser.uid;
        const userRef = database.ref('users/')
        if( name==='' && 
            gender==='' && 
            city==='' && 
            height==='' && 
            weight==='' && 
            bdate==='' ){

            Alert.alert("Введите все Ваши данные")
        }else if(weight < 50){
            Alert.alert("Ваш вес меньше чем 50кг, к сожалению вы не можете быть донором")
        }else{
            let result = userRef.push({
                username: this.state.name,
                height: this.state.height,
                weight: this.state.weight,
                dob: this.state.bdate,
                gender: this.state.gender,
                city: this.state.city,
                userId: user
            })
            Alert.alert("Вы успешно изменили свои данные")
            this.props.navigation.navigate("ShowProfile", {
                newUser: result
            })
        }
        
    }


    render() {
        this.removeHandler()
        return (
            <KeyboardAvoidingView style={styles.container2} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <ScrollView>
                            <StatusBar
                                backgroundColor="white"
                                barStyle="light-content"
                            />
                            <View style={styles.personData}>
                                <Text style={styles.formTitle}>Заполните форму</Text>
                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/user.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput
                                            placeholder={"ФИО"} 
                                            style={styles.textinput}
                                            placeholderTextColor="white"
                                            value={this.state.name}
                                            onChangeText={this.handleName}
                                            underlineColorAndroid='transparent'
                                        />  
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/gender.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Ваш пол...',
                                                value: null,
                                            }}
                                            
                                            items={this.state.items2}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    gender: value,
                                                });
                                            }}
                                            style={pickerSelectStyles}
                                            value={this.state.gender}
                                            ref={(el) => {
                                                this.inputRefs.picker2 = el;
                                            }}
                                        />
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/calendar.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <DatePicker
                                            date={this.state.bdate}
                                            mode="date"
                                            placeholder="Дата рождения"
                                            format="YYYY-MM-DD"
                                            showIcon = {false}
                                            customStyles={{
                                                dateInput:{
                                                    borderWidth: 0,
                                                },
                                                placeholderText: {
                                                    fontSize: 14,
                                                    color: 'white',
                                                }
                                            }}
                                            confirmBtnText="Подтвердить"
                                            cancelBtnText="Отмена"
                                            onDateChange={this.handleDate}
                                        />
                                    </View> 
                                </View> 

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/height.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput  placeholder={"Рост, см"} 
                                                    keyboardType = 'numeric'
                                                    maxLength = {3}
                                                    style={styles.textinput}
                                                    placeholderTextColor="white"
                                                    value={this.state.height}
                                                    onChangeText={this.handleHeight}
                                                    underlineColorAndroid='transparent'
                                        /> 
                                    </View> 
                                </View>


                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/weighing.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <TextInput  placeholder={"Вес, кг"} 
                                                    keyboardType = 'numeric'
                                                    maxLength = {3}
                                                    style={styles.textinput}
                                                    placeholderTextColor="white"
                                                    value={this.state.weight}
                                                    onChangeText={this.handleWeight}
                                                    underlineColorAndroid='transparent'
                                        />  
                                    </View> 
                                </View>

                                <View style={styles.inputRectangle}>
                                    <View style={styles.rectangleOne}>
                                        <SvgUri
                                            width="30"
                                            height="30"
                                            source={require('../assets/images/enterprise.svg')}
                                        />
                                    </View>
                                    <View style={styles.rectangleTwo}>
                                        <RNPickerSelect
                                            placeholder={{
                                                label: 'Ваш город...',
                                                value: null,
                                            }}
                                            
                                            items={this.state.items}
                                            onValueChange={(value) => {
                                                this.setState({
                                                    city: value,
                                                });
                                            }}
                                            style={pickerSelectStyles}
                                            value={this.state.city}
                                            ref={(el) => {
                                                this.inputRefs.picker = el;
                                            }}
                                        />
                                    </View> 
                                </View>
                               
                                <View style={styles.submitView}>
                                    <TouchableOpacity 
                                        style={styles.submit}
                                        onPress={() => this.writeUserData()}
                                    >
                                        <Text style={styles.buttonText}>Изменить</Text>        
                                    </TouchableOpacity>
                                </View>
                            
                            </View>                    
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
    }
}

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        color: 'white',
        paddingLeft: 20
    },
    placeholderColor: 'white',
    
};
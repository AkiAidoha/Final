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
    Alert
} from 'react-native';
import styles from './Style';
import SvgUri from 'react-native-svg-uri';
import DatePicker from 'react-native-datepicker';
import { KeyboardAvoidingView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../FireBase/FireBase'

export default class BloodScreen extends React.Component {
  static navigationOptions = {
    title: 'Сдать кровь',
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
        bdate: '',
        value: '',
        city: undefined,
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
        switch6: false,
        component: undefined,
        items: [
            {
                label: 'Цельная кровь',
                value: 'Цельная кровь',
            },
            {
                label: 'Тромбоциты',
                value: 'Тромбоциты',
            },
            {
                label: 'Плазма',
                value: 'Плазма',
            },
            {
                label: 'Эритроциты',
                value: 'Эритроциты',
            },
            {
                label: 'Гранулоциты',
                value: 'Гранулоциты',
            },
            {
                label: 'Лейкоциты',
                value: 'Лейкоциты',
            },
        ],
        
    };
}

    handleChangeDate = (bdate) => {
        this.setState({bdate})
    }

    handleChangeValue = (value) => {
        this.setState({value})
    }

    writeBloodData = () => {
        const {bdate} = this.state
        const {component} = this.state
        const {value} = this.state

        const database = firebase.database()
        const userRef = database.ref('donation/')
        if( 
            bdate==='' && 
            component==='' && 
            value==='' 
        ){

            Alert.alert("Введите все Ваши данные")
        }else{
            let user = firebase.auth().currentUser.uid;
            let result = userRef.push({
                bdate: this.state.bdate,
                component: this.state.component,
                value: this.state.value,
                userId: user
            })
            Alert.alert("Ваша донация успешно зарегистрирована!")
            this.props.navigation.navigate('History', {show: false})
        }  
    }   



  render() {

    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView>
            <View style={styles.container}>
              <StatusBar
                backgroundColor="white"
                barStyle="light-content"
              />

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
                            placeholder="Дата донации"
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
                            onDateChange={this.handleChangeDate}
                        />
                    </View> 
                </View> 


                <View style={styles.inputRectangle}>
                    <View style={styles.rectangleOne}>
                        <SvgUri
                            width="30"
                            height="30"
                            source={require('../assets/images/tint-drop.svg')}
                        />
                    </View>
                    <View style={styles.rectangleTwo}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Выберите компонент',
                                value: null,
                            }}

                        items={this.state.items}
                            onValueChange={(component) => {
                                this.setState({
                                    component: component,
                                });
                            }}
                            style={pickerSelectStyles}
                            value={this.state.component}
                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                        />
                    </View>
                </View>


                <View style={styles.inputRectangle}>
                    <View style={styles.rectangleOne}>
                        <SvgUri
                            width="30"
                            height="30"
                            source={require('../assets/images/transfusion.svg')}
                        />
                    </View>
                    <View style={styles.rectangleTwo}>
                        <TextInput  placeholder={"Объем, мл"}
                                    keyboardType = 'numeric'
                                    maxLength = {5}
                                    style={styles.textinput}
                                    placeholderTextColor="white"
                                    value={this.state.value}
                                    onChangeText={this.handleChangeValue}
                                    underlineColorAndroid='transparent'
                        />
                    </View>
                </View>


                <View style={styles.questionView}>
                    <Text style={styles.question}>Что вы употребляли за последние 3 дня?</Text>
                </View>
                           

                <View style={styles.checkboxes}>

                    <View style={styles.seperator}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/beer.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Алкоголь</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch1)=>this.setState({switch1})}
                                value={this.state.switch1}/>
                    </View>

                    <View style={styles.seperator2}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/peanut.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Орехи</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch2)=>this.setState({switch2})}
                                value={this.state.switch2}/>
                    </View>

                    <View style={styles.seperator2}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/sunflower.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Семечки</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch3)=>this.setState({switch3})}
                                value={this.state.switch3}/>
                    </View>

                    <View style={styles.seperator2}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/mayonnaise.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Майонез</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch4)=>this.setState({switch4})}
                                value={this.state.switch4}/>
                    </View>

                    <View style={styles.seperator2}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/butter.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Масло всех видов</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch5)=>this.setState({switch5})}
                                value={this.state.switch5}/>
                    </View> 

                    <View style={styles.seperator2}>
                        <View style={styles.svg}>     
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../assets/images/can.svg')}
                            />    
                        </View>
                        <Text style={styles.title}>Красительные напитки</Text>    
                        <Switch style={styles.switch}
                                onValueChange={(switch6)=>this.setState({switch6})}
                                value={this.state.switch6}/>
                    </View>        
                </View>

                <View style={styles.submitView}>
                    <TouchableOpacity 
                        style={styles.submit}
                        onPress={()=> this.writeBloodData()}
                        >
                        <Text style={styles.buttonText}>Сдать кровь</Text>        
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
        paddingLeft: 20
    },
    placeholderColor: 'white',
    icon:{
        color: 'white'
    }
} ;

import React from 'react';
import { 
    View, 
    StyleSheet,
    StatusBar, 
    ScrollView,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from './Style'
import firebase from '../FireBase/FireBase'

export default class EachHistoryScreen extends React.Component {
    static navigationOptions = {
        title: '',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
    };

     recipe = this.props.navigation.getParam("element")

    deleteHandler = () => {
        const recipe = this.props.navigation.getParam("element")
        let user = firebase.auth().currentUser.uid;

        let ref = firebase.database().ref('donation');
        ref
            .orderByChild("userId")
            .equalTo(user)
            .once('value', snap => {
                if(snap.val()) {
                    let userHistory = Object.keys(snap.val()).map(i => snap.val()[i])
                    let correctIndex = 0
                    let findIndex = userHistory.forEach((el, index) => {
                        if(el.bdate === recipe.bdate) {
                            if(el.component === recipe.component){
                                correctIndex = index
                            }
                        }
                    })
                    ref.child(Object.keys(snap.val())[correctIndex]).remove()
                    this.props.navigation.navigate('History', {show: false})
                }
            });
    }

    render() {
        return (
            <View style={styles.containerHistory}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="light-content"
                />
                {/* <Text>{list}</Text> */}
                <View style={styles.historyList}>
                    <View style={styles.userData}>
                        <View style={styles.seperator}>
                            <Text style={styles.leftDateHistory}>Дата донации: </Text>
                            <Text style={styles.rightDateHistory}>{this.recipe.bdate}</Text>
                        </View>
                        <View style={styles.seperator2}>
                            <Text style={styles.leftDateHistory}>Компонент: </Text>
                            <Text style={styles.rightDateHistory}>{this.recipe.component}</Text>
                        </View>
                        <View style={styles.seperator2}>
                            <Text style={styles.leftDateHistory}>Объем, мл: </Text>
                            <Text style={styles.rightDateHistory}>{this.recipe.value}</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.submitView}>
                    <TouchableOpacity 
                        style={styles.delete}
                        onPress={() => this.deleteHandler()}
                        >
                        <Text style={styles.buttonText}>Удалить историю</Text>        
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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

// const list = readBloodData = () => {
//     let dateRef = firebase.database().ref('donation');
//     dateRef.on("child_added", (snapshot) => {
//         <Text>{snapshot.val().bdate}</Text>;
//     });
// }

export default class HistoryScreen extends React.Component {
    static navigationOptions = {
        title: 'История',
        headerStyle: {
        backgroundColor: '#40E0D0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: '500'
        },
    };

    state = {
        show: false,
        userHistory: []
    }



    getDataHandler = () => {
        let user = firebase.auth().currentUser.uid;
        let userHistory = null
        firebase
            .database()
            .ref('donation')
            .orderByChild('userId')
            .equalTo(user)
            .once('value', snap => {
                if(snap.val()) {

                    userHistory = Object.keys(snap.val()).map(i => snap.val()[i])
                    this.setState({
                        userHistory: userHistory,
                        show: true
                    })
                }
            });
    }

    componentDidMount = () => {
        this.getDataHandler()
    }

    componentWillReceiveProps = () => {

        this.setState({
            show: this.props.navigation.getParam("show")
        })

        this.getDataHandler()
    }

    render() {
        const res  = this.state.userHistory.map(el => {
            return (
                <View style={styles.historyList} key={el.bdate + el.component}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('EachHistory', {element: el})}>
                        <View style={styles.seperator}>
                            <Text style={styles.leftDateHistory}>{el.component}</Text>
                            <Text style={styles.rightDateHistory}>{el.bdate}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })


        return (
            <ScrollView contentContainerStyle={styles.containerHistory}>
                {this.state.show  === true  ?
                    <View style={styles.containerHistory}>
                        <StatusBar
                            backgroundColor="white"
                            barStyle="light-content"
                        />
                        {/* <Text>{list}</Text> */}
                        {res}

                    </View>

                    : null

                }
            </ScrollView>
        );
    }
}

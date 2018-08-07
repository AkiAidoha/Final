import { StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputRectangle:{ 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row',
        marginTop: 5,
        width: '85%',
    },
    rectangleOne:{
       width:'25%',
       height:50,
       backgroundColor: '#40E0D0',
       alignItems: 'center',
       justifyContent:'center',
       borderBottomLeftRadius: 20,
       borderTopLeftRadius: 20       
    },
    whiteText: {
        color: '#ffffff',
    },
    textinput:{
        paddingLeft: 20,
        color: '#fff',
       width: '100%',
    },
    rectangleTwo:{
        backgroundColor:'#2CC7B8',
        width:'75%',
        height:50,
        alignItems: 'flex-start',
        justifyContent:'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    modal: {
        width: '100%'
    },
    buttonView:{
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 50,
    },
    button:{
        backgroundColor:'#2CC7B8',
        borderRadius: 20,
        width: '100%',
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize: 20
    },
    noAccount:{
        textAlign: 'right',
        alignSelf:'stretch',
        marginRight: 25,
        marginTop: 10,
        color: '#ffffff',
    },
    forgotPassword:{
        textAlign: 'right',
        alignSelf:'stretch',
        marginRight: 25,
        marginTop: 10,
        color: '#ffffff',
    },
    inputs: {
        marginTop: 100
    },
    logoView:{
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
    checkboxes:{
        marginTop: 30
    },
});

export default Style;

import { StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container2:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    inputRectangle:{ 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row',
        marginTop: 5,
        width: '95%',
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
    submitView:{
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 50,
        width: '85%',
        marginBottom: 20 
    },
    submit:{
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
        marginTop: 30,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    seperator:{
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 70,
        width: '97%',
        borderColor: '#ccc'
    },
    seperator2:{
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row',
        borderBottomWidth: 1,
        height: 70,
        width: '97%',
        borderColor: '#ccc'
    },
    title:{
        marginRight: 'auto',
        fontSize: 16
    },
    svg:{
        width: '20%'
    },
    question:{
        fontSize: 16,
    },
    questionView:{
        justifyContent: 'center', 
        alignItems: 'center',
        width: '90%',
        marginTop: 20
    },
    personData: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle:{
        fontSize: 30,
        paddingBottom: 20
    },
    headerRight:{
        paddingRight: 10
    },
    userData:{
        justifyContent: 'center', 
        alignItems: 'center',
    },
    leftSide:{
        fontSize: 15,
        fontWeight: '700'
    },
    rightSide:{
        marginRight:'auto',
        fontSize: 15
    },
    historyList:{
        alignItems: 'center',
        width:'100%',
        marginTop: 20,
        backgroundColor:'#fff'
    },
    leftDateHistory:{
        width: '50%'
    },
    rightDateHistory:{
        marginLeft:'auto'
    },
    containerHistory:{
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    delete:{
        backgroundColor:'#ff0c0c',
        borderRadius: 20,
        width: '100%',
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    userIcon:{
        width: '10%'
    },
});

export default Style;

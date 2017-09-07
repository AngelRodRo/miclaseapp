import React from 'react';
import { View, Image, TextInput,Button, ToastAndroid, Dimensions} from 'react-native';

import CButton from 'apsl-react-native-button'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import Spinner from 'react-native-loading-spinner-overlay';
import {StyleSheet} from 'react-native';
import ImageInput from '../input/ImageInput.js';


import User from '../../api/User';

let {width,height} = Dimensions.get('window');

var loginStyles = StyleSheet.create({
    backgroundImg:{
        flex: 1,
        width:null,
        height:null,
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'cover',
    },
    input: {
        width:width-40,
        color:'white',
        borderRadius:5,
        margin:5,
        backgroundColor:'transparent',
        borderColor:'white'
    },
    inputContainer:{ 
        flexDirection:'row',
        borderColor:'white', 
        height:50,
        margin:10,
        width:width-40,
        borderRadius:5,
        borderWidth:1 
    },
    socialButtons:{
        width:(width/2)-20, 
        backgroundColor: 'white'
    }

})  

class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            visible: false
        }
        this.user = new User();

        this.login = this.login.bind(this);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    login(){
       
        let email = this.state.email,
            password = this.state.password;

        if(!email) return ToastAndroid.show('Por favor indique un correo antes de continuar', ToastAndroid.SHORT)
        if(!password) return ToastAndroid.show('Por favor indique una contraseña antes de continuar', ToastAndroid.SHORT);

        this.setState({
            visible:true
        });
        
        const { navigate } = this.props.navigation;
        this.user.login(email,password)
            .then((res)=> {
                this.setState({
                    visible: false
                }); 

                navigate('Map');
            })
            .catch(()=>{
                this.setState({
                    visible:false
                }); 
            });
    }

    onChangeEmail(email){
        this.setState({email})
    }

    onChangePassword(password){
        this.setState({password})
    }

    render(){
        return (
            <Image source={require('./img/background.png')} style={loginStyles.backgroundImg} >
                <Spinner visible={this.state.visible} textContent={"Cargando..."} textStyle={{color: '#FFF'}} />
                <Image style={{width:170,height:160,marginBottom:20}} source={require('./img/logo.png')} />

                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={require('./img/user-icon.png')}
                    placeholder={"Email"}
                    onChange={this.onChangeEmail}
                />
                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={require('./img/key-icon.png')}
                    placeholder={"Password"}
                    secureTextEntry ={true}
                    onChange={this.onChangePassword}
                />
                
               
                
                <View style={{width:width,paddingLeft:20,
                    marginBottom:10,
                    paddingRight:20}}>
                    <Button
                        title={"INICIAR SESION"}
                        color={"#ebbf14"}
                        
                        onPress={this.login}
                        />
                </View>
                <View style={{ flexDirection:'row'}}>
                    <CButton style={loginStyles.socialButtons} >
                        <Image style={{width:10,height:17}} source={require('./img/fb-icon.png')} />
                    </CButton>
                    <CButton style={loginStyles.socialButtons}>
                        <Image style={{width:25,height:17}} source={require('./img/google-icon.png')} />
                    </CButton>
                </View>
                <View style={{width:width,paddingLeft:20,
                    paddingRight:20}}>
                    <Button
                        title={"REGISTRATE"}
                        color={"#ebbf14"}
                        onPress={()=>alert('adsa')}
                    />
                </View>
            </Image>
        );
    }
}

export default Login;
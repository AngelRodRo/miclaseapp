import React from 'react';
import { View, Image, TextInput,Button, Text, ToastAndroid, Dimensions} from 'react-native';

import CButton from 'apsl-react-native-button'
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import Spinner from 'react-native-loading-spinner-overlay';
import {StyleSheet} from 'react-native';
import ImageInput from '../input/ImageInput.js';

import User from '../../network/User';

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

class Register extends React.Component{

    constructor(){
        super();
        this.state={
            name:"",
            lastname:"",
            phone:"",
            email:"",
            password:"",
            visible: false
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    register(){
       
        let email = this.state.email,
            password = this.state.password;
            
        if(!email) return ToastAndroid.show('Por favor indique un correo antes de continuar', ToastAndroid.SHORT)
        if(!password) return ToastAndroid.show('Por favor indique una contraseña antes de continuar', ToastAndroid.SHORT);

        this.setState({
            visible:true
        });
        
        const { navigate } = this.props.navigation;
            
        // User.login(email,password)
        //     .then((res)=>{
        //         navigate('Map');
        //     })
        //     .catch(()=>{
                
        //     })
    }

    onChangeName(name){
        this.setState({name})
    }

    onChangeLastname(lastname){
        this.setState({lastname})
    }

    onChangePhone(phone){
        this.setState({phone})
    }

    onChangeEmail(email){
        this.setState({email})
    }

    onChangePassword(password){
        this.setState({password})
    }

    render(){
        return (
            <Image source={require('../../resources/img/background.png')} 
            style={loginStyles.backgroundImg} >
                <Spinner visible={this.state.visible} textContent={"Cargando..."} textStyle={{color: '#FFF'}} />
                <Text
                    style={{color:'white',fontSize:20}}
                >
                    REGISTRO
                </Text>
                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={''}
                    placeholder={"Name"}
                    onChange={this.onChangeName}
                />
                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={''}
                    placeholder={"Lastname"}
                    onChange={this.onChangeLastname}
                />

                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={''}
                    placeholder={"Phone"}
                    onChange={this.onChangePhone}
                />

                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={''}
                    placeholder={"Email"}
                    onChange={this.onChangeEmail}
                />
                
                <ImageInput 
                    selectionColor={"white"}
                    placeholderTextColor={"white"}
                    image={''}
                    placeholder={"Password"}
                    onChange={this.onChangePassword}
                />
                
                
                
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

export default Register;
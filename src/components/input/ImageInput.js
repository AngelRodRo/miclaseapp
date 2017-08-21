import React from 'react';
import { View, Image, TextInput, StyleSheet, Dimensions} from 'react-native';
let {width,height} = Dimensions.get('window');
import FitImage from 'react-native-fit-image';

var loginStyles = StyleSheet.create({

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
    }

})  


class ImageInput extends React.Component{

    constructor(){
        super();
        this.state ={
            value:""
        }

        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(value){
        this.setState({ value });
        this.props.onChange(value);
    }

    render(){
        

        return (
            <View style={loginStyles.inputContainer}>
                <Image style={{width:17,height:17,marginTop:15,marginLeft:15}} source={this.props.image} />

                <TextInput
                        style={loginStyles.input}
                        placeholder={this.props.placeholder}
                        selectionColor={this.props.selectionColor}
                        placeholderTextColor={this.props.placeholderTextColor}
                        underlineColorAndroid = {'transparent'}
                        tintColor={"white"}
                        secureTextEntry ={this.props.secureTextEntry}
                        onChangeText={this.onChangeValue}
                        value={this.state.value}
                    />
            </View>
        )
    }
}

export default ImageInput;
import React from 'react';
import {
    Text,
    Image
} from 'react-native';
import CButton from 'apsl-react-native-button'

class ImageButton extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <CButton onPress={()=>this.props.onPress} style={{ borderWidth:0, width:180,height:40, flexDirection:'row',margin:0}} >
                <Text style={{textAlign:'left'}}>{this.props.text}</Text>
            </CButton>
        )
    }
}

export default ImageButton;
import React from 'react';
import { Image, Text, View, Button} from 'react-native';

import slidesStyle from './styles/slides.js';
import mainStyle from './styles/main.js';

class Slide1 extends React.Component{

    render(){
        return (
            <View style={slidesStyle.slide1}>
                <View style={slidesStyle.content}>
                    <Image style={{width:150,height:150}} source={require('./img/img-time.png')} />
                    <Text style={mainStyle.text}>En cualquier momento</Text>
                    <Text style={mainStyle.paragraph}>Tenemos profesores disponibles en cualquier horario!
                        (Excepto cuando duermen claro ;) ) Con nuestro sistema de agendado podras encontrar 
                        un profesor adecuado a la hora que dispongas!</Text>
                </View>
            </View>
        );
    }
}

export default Slide1;
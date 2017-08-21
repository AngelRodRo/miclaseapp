import React from 'react';
import { Image, Text, View, Button} from 'react-native';

import slidesStyle from './styles/slides.js';
import mainStyle from './styles/main.js';


class Slide2 extends React.Component{
    render(){
        return (
            <View style={slidesStyle.slide2}>
                <View style={slidesStyle.content}>
                    <Image style={{width:150,height:150}} source={require('./img/img-teacher.png')} />
                    <Text style={mainStyle.text}>Profesores especializados</Text>
                    <Text style={mainStyle.paragraph}>Encontraras a los mejores profesores cerca de ti, que te enseñaran diveras materias de tu interes</Text>
                </View>
            </View>
        )
    }
}

export default Slide2;
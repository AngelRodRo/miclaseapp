import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import slidesStyle from './styles/slides.js';
import mainStyle from './styles/main.js';
import Slide1 from './Slide1';
import Slide2 from './Slide2';


class Home extends React.Component {

  constructor(props){
    super(props);

    this.state={
      isLastPage:false
    }

    this.nextPage = this.nextPage.bind(this);
    this.onIndexChanged = this.onIndexChanged.bind(this);
  }

  nextPage(){
    this.refs.swiper.scrollBy(1,true);
  }

  onIndexChanged(index){

    if(index==0){
      const { navigate } = this.props.navigation;
      navigate('Login');
    }

    this.setState({
      isLastPage : index == 1
    })
  }

  static navigationOptions = {
    header: { visible: false } // !!! Hide Header
  }

  render() {

    let dot = <View style={slidesStyle.dot} />
    let activeDot = <View style={slidesStyle.activeDot} />

    return (
      <View style={{flex:1}} >
        <StatusBar
          backgroundColor="#373e8d"
          barStyle="light-content"
        />
        <Swiper ref="swiper" style={slidesStyle.wrapper} 
            autoplayTimeout={5}
            showsButtons={false} 
            dot={dot}
            onIndexChanged={this.onIndexChanged}
            activeDot={activeDot}
            >
          <Slide1/>
          <Slide2/>
        </Swiper>
        <View >
            <Button 
              title={this.state.isLastPage? "LISTO": "SIGUIENTE"  }
              onPress={this.nextPage}
              color="#ebbf14"/>
        </View>        
      </View>
    );
  }
}


export default Home;
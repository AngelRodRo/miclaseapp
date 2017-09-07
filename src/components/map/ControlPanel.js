import React,{PropTypes} from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
  } from 'react-native'

  import ImageButton from '../input/ImageButton';
  
  class ControlPanel extends React.Component {
      constructor(props){
          super(props);
      }
    static propTypes = {
      closeDrawer: PropTypes.func.isRequired
    };

    onPaids(){

    }
    
    onNotifications(){

    }
  
    render() {
      let {closeDrawer} = this.props
      return (
        <ScrollView style={styles.container}>
          <View style={{marginBottom:30}}>
            <Image style={styles.image} source={require('./img/placeholder-user.jpg')} />
            <Text style={{ fontSize:22,fontWeight:'bold',alignContent:'center',textAlign:'center' }}>
                    ANGEL RODRIGUEZ
            </Text>
          </View>
          <ImageButton 
                onPress={this.onPaids}
                text="Pagos"
           />
           <View style={{ borderWidth:0.5,borderColor:'#b9b9b9'}} />
           <ImageButton
                onPress = {this.onNotifications}
                text="Notificaciones"
           />
           <View style={{borderWidth:0.5,borderColor:'#b9b9b9'}} />
           <ImageButton 
            text="Cursos"
           />
           <View style={{borderWidth:0.5,borderColor:'#b9b9b9'}} />
           <ImageButton 
            text="Titulos"
           />
           <View style={{borderWidth:0.5,borderColor:'#b9b9b9'}} />

        </ScrollView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    controlText: {
      color: 'white',
    },
    button: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
    },
    image: {
        height: 140,
        margin:20,
        borderRadius: 110,
        width: 140
      }
  })


  export default ControlPanel;
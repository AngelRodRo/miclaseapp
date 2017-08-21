import {StyleSheet} from 'react-native';

let slides = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#363d8c',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#363d8c',
    },
    content:{ 
      flex:1, 
      flexDirection:'column',
      marginTop:50,
      alignItems: 'center', 
      padding:20
    },
    dot:{
      backgroundColor:'#FFF', 
      width: 10, 
      height: 10,
      borderRadius: 6, 
      marginLeft: 3, 
      marginRight: 3, 
      marginTop: 3,
      marginBottom: 3
    },
    activeDot:{
      backgroundColor: '#ebbf14', 
      width: 10, 
      height: 10,
      borderRadius: 6, 
      marginLeft: 3, 
      marginRight: 3, 
      marginTop: 3, 
      marginBottom: 3
    }
})  

export default slides;
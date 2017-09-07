import React from 'react';
import {Text,Image,View} from 'react-native';
import StarRating from 'react-native-star-rating';
import ImageSlider from 'react-native-image-slider';
import Calendar from './Calendar.js';
class Profile extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <View>
                <Image
                    style={{width:150,height:150}}
                    source={require('./img/placeholder-user.jpg')}/>
                <View>
                    <Text>
                        Efrain
                    </Text>
                    <Text>
                        Lorem adadasdads
                    </Text>
                </View>
                <View>
                    <View>
                        <View>
                            <Text>
                            </Text>
                            <Text>
                            </Text>                        
                        </View>
                        <View>
                            <Text>
                            </Text>
                            <Text>
                            </Text>                        
                        </View>
                        <View>
                            <Text>
                            </Text>
                            <StarRating style={{width:100,height:30}}/>
                            <Text>
                            </Text>                        
                        </View>
                    </View>
                    <View>
                        <Text>4 star</Text>
                        
                    </View>
                </View>
                
                <Calendar/>
            </View>
        )
    }

}

export default Profile;
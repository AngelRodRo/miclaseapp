import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import NavigationBar from 'react-native-navbar';

import { Container, Navbar } from 'navbar-native';

import Drawer from 'react-native-drawer'
import ControlPanel from './ControlPanel';
import ImageInput from '../input/ImageInput';
import Icon from 'react-native-vector-icons/FontAwesome';

import User from "../../api/User";

const styles = StyleSheet.create({

    map: {
        marginTop:0,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height - 80
    }
});


class Map extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            drawerOpen: false,
            drawerDisabled: false,
            latitude:-18.0058624,
            longitude:-70.2586905,
            markers : []
        }

        this.user = new User();
    }
    
    closeDrawer = () => {
        this._drawer.close()
    };

    getMarkers = () => {
        
        this.user.positions()
            .then((positions) => {
                this.setState({
                    markers: positions
                });
            });
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let {latitude,longitude} = position.coords;

                this.setState({
                    latitude,longitude
                });
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 100000, maximumAge: 1000}
        );

        this.getMarkers();
    }
    openDrawer = () => {
        this._drawer.open()
    };

    onChangeQuery(){
    
    }
    render(){

        let navStyle = { 
            flexDirection: 'row', 
            width: Dimensions.get('window').width,
            height: 60, 
            backgroundColor:"#363d8c"
        };
        
        const containerStyles = {
            flexDirection: "column",
            flex: 1
        };

        return (
            <Drawer
                type="static"
                ref={(ref) => this._drawer = ref}
                content={
                    <ControlPanel closeDrawer={this.closeDrawer} />
                }
                acceptDoubleTap
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
                onOpen={() => {
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    this.setState({drawerOpen: false})
                }}
                captureGestures={false}
                tweenDuration={100}
                panThreshold={0.08}
                disabled={this.state.drawerDisabled}
                openDrawerOffset={(viewport) => {
                    return 100
                }}
                closedDrawerOffset={() => 0}
                panOpenMask={0.2}
                negotiatePan
                >
                <Container style={containerStyles}>

                    <View style={navStyle} >
                        <Icon onClick={()=>alert('adda')} style={{marginTop:15,marginLeft:10}} name="align-justify" size={30} color="white" />
                        <ImageInput onChange={this.onChangeQuery} width={ Dimensions.get('window').width - 110 } height={40} />
                        <Image source={ require('./img/placeholder-user.jpg')} style={{marginTop:10, width:40,height:40,borderRadius:40}} />
                    </View>                    

                    <MapView
                        style={styles.map}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                        {
                            this.state.markers.map(marker => (
                                <MapView.Marker
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                />
                            ))
                        }
                    </MapView>
                </Container>
            </Drawer>
            
      )
    }
}

export default Map;
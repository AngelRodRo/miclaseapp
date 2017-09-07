import React from 'react';
import {View,Dimensions,Text} from 'react-native';


class Calendar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            schedule: this.genSchedule()
        };

        //checkSchedule(this.props.date)
    }


    checkSchedule(date){

        let hour = date.getHours();
        let day = date.getDay();

        let schedule = this.state.schedule;
        let fDate = ("0"+hour+":00").slice(-5);
        schedule[fDate][day] = false;

        this.setState({schedule});
    }

    generateHours(){
        let hours = []
        for (var i = 6; i <= 22; i++) {
            hours.push(("0"+i+":00").slice(-5))
        }     
        return hours;
    }

    genSchedule(){
        let schedule = {};
        let days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
        let hours = this.generateHours();
        for (var j = 0; j < hours.length; j++) {
            schedule[hours[j]] = {};
            for (var i = 0; i < days.length; i++) {
                schedule[hours[j]][days[i]] = true;
            }                
        }

        return schedule;
    }

    render(){
        let widthCalendar = Dimensions.get('window').width-130;
        let widthCell = widthCalendar/5;
        
        let cellsStyle = {
            width:widthCell,
            height:20,
            borderWidth:0.5,
            borderColor:'black'
        }
        let cellsColoredStyle = {
            width:widthCell,
            height:20,
            backgroundColor:'blue',
            borderWidth:0.5,
            borderColor:'black'
        }

        let schedules = this.state.schedule;
        let $rows = [];
        let firstRow = true;

        for (var key in schedules) {
            if (schedules.hasOwnProperty(key)) {
                var days = schedules[key];

                let $cells = [];
                $cells.push(<View style={cellsStyle}></View>)

                if(firstRow){
                    for (var key in days) {
                        if (days.hasOwnProperty(key)) {
                            $cells.push(<View style={cellsColoredStyle}>
                                <Text style={{color:'white',textAlign:'center', fontSize:8}}>
                                    {key}
                                </Text>
                            </View>);
                        }
                    }
                    $rows.push(<View></View>);
                    firstRow=false;
                }

                for (var key in days) {
                    if (days.hasOwnProperty(key)) {
                        var schedule = days[key];
                        $cells.push(<View style={schedule? cellsStyle:cellsColoredStyle}></View>);
                    }
                }
                
                $rows.push(<View style={ {flexDirection:'row' }}>{ $cells }</View>);
            }
        }
        
        return(

            <View style={{ width:widthCalendar,height:200 }}>
                {
                    $rows
                }
            </View>


        );


    }
}

export default Calendar;
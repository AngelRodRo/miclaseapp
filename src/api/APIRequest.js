import {AsyncStorage} from 'react-native';
import config from '../config/config';

class APIRequest{
    constructor(){
        this.token = AsyncStorage.getItem('token');
        this.host = config.host;
    }

    get(url,data){
        return fetch(this.host + url,{
            headers:{
                "Authorization": this.token,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then( res => res.json());
    }

    post(url,data){
        return fetch(this.host + url,{
            headers:{
                "Authorization": this.token,
                'Content-Type': 'application/json'
            },
            method: "POST",            
            body: JSON.stringify(data)
        }).then( res => {
            if(res.ok){
                return res.json();
            }
            throw new Error('Network response was not ok.');
        });
        
    }
}

export default APIRequest;
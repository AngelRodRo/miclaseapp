import {AsyncStorage} from 'react-native';

class APIRequest{
    constructor(){
        this.token = AsyncStorage.getItem('token');
        this.host = "http://localhost:8000/"
    }

    request(url,data){
        return fetch(this.host + url,{
            headers:{
                "Authorization":token,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        
    }
}

export default APIRequest;
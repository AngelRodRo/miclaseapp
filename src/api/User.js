import APIRequest from './APIRequest';
import {AsyncStorage} from 'react-native';

class User extends APIRequest{

    constructor(){
        super();

        this.routes = {
            "login": "login",
            "register": "register",
            "profile": "profile",
            "positions": "users/positions"
        };
    }

    login(email, password){
        let data = { email, password };
        return this.post(this.routes.login,data)
                .then((res)=> {
                    return res;
                });
    }
    
    positions(){
        return this.get(this.routes.positions);
    }

    register(data){
        return this.request(this.routes.register,data)
                .then((res)=>{
                    AsyncStorage.setItem('token', res.token);
                    return res;
                });
    }

    profile(){
        return this.request(this.routes.profile);
    }
}

export default User;
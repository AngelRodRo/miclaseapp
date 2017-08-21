import APIRequest from './APIRequest';
import {AsyncStorage} from 'react-native';

class User extends APIRequest{

    constructor(){
        super();

        this.routes = {
            "login":"login",
            "register":"register"
        };
    }

    login(email,password){
        let data = {email,password};
        return this.request(this.routes.login,data)
                .then((res)=>{
                    AsyncStorage.setItem('token', res.token);
                    return res;
                });
    }

    register(data){
        return this.request(this.routes.register,data)
                .then((res)=>{
                    AsyncStorage.setItem('token', res.token);
                    return res;
                });
    }
}

export default User;
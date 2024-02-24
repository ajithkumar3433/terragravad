import axios from 'axios';
import Config  from '../config'
const api = axios.create({
    baseURL: Config.baseURL
})

const apis = {
    async signup(name:string, email:string, password:string, userType:string){
        let response = await api.post('/user', {
            name:name,
            email:email,
            password:password,
            priority:userType,
            current:1,
            pages:5
        })
        return response.data
    },
    async signin(email:string, password:string){
        let response = await api.post('/user/signin',{
            email:email,
            password:password
        })
        return response.data
    }
}

export default apis;
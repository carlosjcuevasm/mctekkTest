import axios from 'axios'

const api = axios.create({
    baseURL: 'https://apidev.kanvas.dev/v1/'
})
        
export  async function  loginUser(mail,pass) {
        try{
            let res = await api.post('/auth',{
                email: mail,
                password: pass})
            this.setState({token: res.data.token})
            // console.log(this.state.token)
            this.setState(({redirect:true}))
            return res.data.token
        } catch (err){
            console.log(err)
            alert("Error en el inicio de sesion")
            return false
        }
    }


    export function myChangeHandler (event)  {
        switch(event.target.name){

            case "name":
                this.setState({name: event.target.value}); 
                break;
            case "lname":
                this.setState({lname: event.target.value}); 
                break;
            case "email":
                this.setState({email: event.target.value}); 
                break;
            case "password":
                this.setState({password: event.target.value}); 
                break;
            case "vpassword":
                this.setState({vpassword: event.target.value}); 
                break;
            case "company":
                this.setState({company: event.target.value}); 
                break;


            default:
            

        }
    }
export function  onSubmitHandler (event) 
    {   
        let mail = this.state.email
        let pass = this.state.password
        event.preventDefault();
        this.loginUser(mail, pass)
        
    }
export function onSubmitRegister(event){
    let name = this.state.name
    let lname = this.state.lname
    let mail = this.state.email
    let pass = this.state.password
    let vpass = this.state.vpassword
    let comp = this.state.company
    event.preventDefault();
    
    this.createUser(name,lname,mail,pass,vpass,comp)
}
    
export async function  getAllUsers() {
        try{
            let res = await api.get('/users',{
                
                headers:{
                    'Authorization': this.state.token
                }
            }
            )
            this.setState({users: res.data[0].email})
            return res
        }
        catch(err){
            console.log(err)
            alert("Inicia Sesion")
            this.setState({redirect: true})
        }
    }

export async function createUser (first,last,mail,pass,vpass,company){
    try{
        let res = await api.post('/users',{
            firstname: first,
            lastname: last,
            email: mail,
            password: pass,
            verify_password: vpass,
            default_company: company}
            )            
        this.setState({token:res.data.session.token})
        this.setState({redirect:true})
        return res.data.session.token
        
    } catch (err){
        console.log(err)
        alert("Error en creacion de usuario")
    }
}
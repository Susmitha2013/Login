import React,{Component} from'react';
class ClassBasedLoginForm extends Component {
    state = { 
        username:"",
        password:"",
        errors:{}
     } 
     onChange = (e)=>{
         this.setState({[e.target.name] : e.target.value});
        }

     formValidation = ()=>{
         const {username,password}=this.state;
         let isValid =true;
         const errors ={};

      
        errors.username = this.validateUserName(username);
        errors.password = this.validatePassword(password);
                this.setState({errors});
                return isValid;
     }
     
     validateUserName = (username) => 
     !username 
     ? "Username must be entered"
     :!username.match(/^[a-zA-Z\s]+$/) ? "Special Characters are not allowed" 
     : username.length < 6 ? "Username must be of length of 6 or higher" : "";

     validatePassword = (password)=>
     !password
     ? "Password must be enterred"
     :!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
      ? "Must contain at least one number and one uppercase and lowercase letter"
    :password.length < 8 ? "Password must be of length of 8 or higher":"";

     onSubmit =(e) =>{
         e.preventDefault();
         const isValid = this.formValidation();
         if(isValid){
             this.setState({username:"",password:""})
         }
     }
    
    render() { 
        const{username,password,errors} = this.state;
        return (
        <form onSubmit={this.onSubmit}>
            <label>Username:</label>
            <input
             type="text" 
             name="username"
             value={username}
             onChange={this.onChange}/>
             <br/>

             <label>Password:</label>
            <input
             type="text" 
             name="password"
             value={password}
             onChange={this.onChange}/>
             <br/>
             <button type="submit">Login</button>
             {Object.keys(errors).map((key)=>{
               return <div style={{color:"red"}} key={key}>{errors[key]}

               </div>
             })}
        </form>
        );
    }
}

export default ClassBasedLoginForm;
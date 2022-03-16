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

         if (username.trim().length < 6){
         errors.usernameLength="Username must be of length of 6 or higher";
         isValid = false;
         }
         if (!username.match(/^[a-zA-Z\s]+$/)){
            errors.usernamePattern="Special Characters are not allowed";
            isValid = false;
            }
            if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
                errors.passwordPattern="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
                isValid = false;
            }
                this.setState({errors});
                return isValid;
     }
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
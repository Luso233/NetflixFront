import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
const MUTATION_LOGIN = gql`
            mutation login($email:String!,$password:String!){
            login(
            email:$email
            password:$password
            ){
            token
            user{
                name
            }
            }
        }
`
class Login extends Component {
   
    constructor(props){
        super(props);
        this.state= {
            email:"",
            password:""
        }
    }
    onInputChange = (event) => {
        let {id,value} = event.target
        this.setState({
            [id]:value       
         })
    }
    onFormSubmit = (event,submit) => {
        event.preventDefault()
        Login({
            variables:{
email:this.state.email,
password:this.state.password
            }
        }).then(response => {
            console.log(response.data.login.token);
            localStorage.setItem('token,response.data.login.token')
            alert('Todo chido')
        }).catch(err => {
            console.log(err);
            alert('Todo dlv :(')
        })
        
    }
    render() { 
        return ( 
            <Mutation mutation={MUTATION_LOGIN}>
                {(login,{data}) =>(
                    <div>
               <form onSubmit={(event)=>this.onFormSubmit(event,login)}>
            <div class="row">
            <div class="input-field col s6">
              <input  id="email" type="email" className="validate"
                  onChange={this.onInputChange}
                  value={this.state.email}
              />
              <label class="active" for="first_name2">Correo</label>
            </div>
          </div>
          <div class="row">
          <div class="input-field col s6">
            <input  id="password" type="password" className="validate"
                onChange={this.onInputChange}
                value={this.state.password}
            />
            <label class="active" for="first_name2">Contraseña</label>
        </div>
        <button type="submit"></button>
        </div>
        </form>
        </div> )} 
                </Mutation> );
    }
}
 
export default Login;
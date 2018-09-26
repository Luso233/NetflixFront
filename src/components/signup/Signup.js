import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
const CREATE_USER = gql`
        mutation signup($name:String!,$lastname:String!,$email:String!,$password:String!,$birth_date:String!){
            signup(
            name:$name,
            lastname:$lastname,
            email:$email,
            password:$password,
            birth_date:$birth_date
            ){
            user{
                id,
                email
            }
            token
            }
        }
`

class Signup extends Component {
    constructor(props){
        super(props);
            this.state = {
name:'',
email:'',
lastname:'',
password:'',
birth_date:''
            }
    }
    onInputChange = (event) => {
        let {id,value} = event.target
        this.setState({
            [id]:value       
         })
    }
    onFormSubmit = (event, signup) => {
        event.preventDefault();
        console.log(this.state);
        signup({
            variables:{
                name:this.state.name,
                email:this.state.email,
                lastname:this.state.lastname,
                password:this.state.password,
                birth_date:this.state.birth_date
            }
        }).then(response => {
            console.log(response);
            alert('Todo chido')
        }).catch(err => {
            console.log(err);
            alert('Todo dlv :(')
        })
    
    }
    render(){ 
        return (
            <Mutation mutation={CREATE_USER}>
            {(signup,{data}) =>(<div>
           <form onSubmit={(event)=>this.onFormSubmit(event,signup)}>
            <div class="row">
        <div class="input-field col s6">
          <input  id="name" type="text" className="validate"
              onChange={this.onInputChange}
              value={this.state.name}
          />
          <label class="active" for="first_name2">Nombre</label>
        </div>
      </div>
    
            <div class="row">
            <div class="input-field col s6">
              <input  id="lastname" type="text" className="validate"
                  onChange={this.onInputChange}
                  value={this.state.lastname}
              />
              <label class="active" for="first_name2">Apellido</label>
            </div>
          </div>
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
    </div>
      <div class="row">
      <div class="input-field col s6">
        <input  id="birth_date" type="text" className="validate"
            onChange={this.onInputChange}
            value={this.state.birth_date}
        />
        <label class="active" for="first_name2">Fecha de nacimiento</label>
      </div>
    </div>
    <button type="submit"></button>
    </form>
    </div> )} 
            

            </Mutation>
           
             );
    }
}
 
export default Signup;
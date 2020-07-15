import React, {Component} from 'react';
import './style.css'
import { fetchUser } from '../../redux/user/userAction';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    componentDidMount() {
      this.history.push("/")
      console.log('Inside componentmount',this.state.user)
    }

    render() {
        return (
            <div className="loginForm">
              {/*<div className="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
              </div>*/}
              <div className="container">
                <input type="text" 
                    placeholder="Enter Username" 
                    id="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                    required/>
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    id="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    required/>
                 <button type="submit" onClick={() => this.props.login(this.state.username)}>Login</button>
              </div>
            </div>  
        );
    }
}
const mapStateToProps = state => {
  return {
    user: state,
  }
}

const mapDispachToProps = dispatch => {
  return {
    login: (state) => dispatch(fetchUser(state))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Login)

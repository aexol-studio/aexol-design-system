import * as React from "react";
//import * as classnames from "classnames";
import * as styles from "../styles/LoginFormStyle";
import { TextInput } from "../TextInput/TextInput";
import { Button } from "../Button/Button"

export interface LoginFormProps {
  onSubmit?: ({...e}) => void,
}

interface LoginFormState {
  password: string;
  email: string;
}

export default class StatefulCounter extends React.Component<LoginFormProps, LoginFormState> {
  state:LoginFormState = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    this.props.onSubmit({'email': this.state.email, 'password': this.state.password})
  }

  handleEmailOnChange = (e) =>{
    this.setState({
      email: e
    })
  }

  handlePasswordOnChange = (e) =>{
    this.setState({
      password: e
    })
  }

  render(){
    return (
      <form className={styles.LoginForm}
        onSubmit={e => this.handleSubmit(e)}
      >
        <TextInput placeholder="email" required={true} onChange={e => this.handleEmailOnChange(e)}></TextInput>
        <TextInput placeholder="password" required={true} onChange={e => this.handlePasswordOnChange(e)}></TextInput>
        <Button type="submit">Log in</Button>
      </form>
    )
  }
};


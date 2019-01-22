import * as React from 'react';
// import * as classnames from 'classnames';
import * as styles from './styles/LoginFormStyle';
import { TextInput, Button } from '../components';

export interface ILoginFormProps {
  onSubmit?: (email: string, password: string) => void,
}

interface LoginFormState {
  password: string;
  email: string;
}

export class LoginForm extends React.PureComponent<ILoginFormProps, LoginFormState> {
  state: LoginFormState = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(
      this.state.email,
      this.state.password
    )
  }

  handleEmailOnChange = (e: string) => {
    this.setState({
      email: e
    })
  }

  handlePasswordOnChange = (e: string) => {
    this.setState({
      password: e
    })
  }

  render() {
    return (
      <form
        className={styles.LoginForm}
        onSubmit={e => this.handleSubmit(e)}
      >
        <TextInput
          placeholder="email"
          required={true}
          onChange={e => this.handleEmailOnChange(e)}
        />
        <TextInput
          placeholder="password"
          required={true}
          onChange={e => this.handlePasswordOnChange(e)}
        />
        <Button
          type="submit"
        >
          Log in
        </Button>
      </form>
    )
  }
}

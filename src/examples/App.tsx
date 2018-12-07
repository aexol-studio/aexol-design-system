import * as React from "react";
import { Heading, Paragraph, Button } from "../lib";
import { LoginForm } from "../lib"

const onclickHandler = (e) => {
  console.log("learn more")
} 

const onsubmitHandler = (e) => {
  console.log(e)
} 

const App = () => (
  <div style={{width: '800px', margin: '0 auto'}}>
    <Heading type="h1" width={276}>Technology and Nature</Heading>
    <Paragraph type="medium" align="left" width={478}>How to take adventage of both at the same time</Paragraph>
    <Button onClick={onclickHandler}>Learn More...</Button>
    <LoginForm onSubmit={onsubmitHandler}></LoginForm>
  </div>
);

export default App;

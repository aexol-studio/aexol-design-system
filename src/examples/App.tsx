import * as React from 'react';
import { Heading, Paragraph, Button, LoginForm } from '../lib/components';

const onclickHandler = (e: HTMLButtonElement) => {
  console.log("learn more")
} 

const onsubmitHandler = (email: string, password: string) => {
  console.log(email, password)
} 

const App = () => (
  <div style={{width: '800px', margin: '0 auto'}}>
    <Heading 
      type="h1" 
      width={276}
    >
      Technology and Nature
    </Heading>
    <Paragraph 
      type="medium" 
      align="left" 
      width={478}
    >
      How to take adventage of both at the same time
    </Paragraph>
    <Button 
      onClick={onclickHandler}
    >
      Learn More...
    </Button>
    <LoginForm 
      onSubmit={onsubmitHandler}
    />
  </div>
);

export default App;

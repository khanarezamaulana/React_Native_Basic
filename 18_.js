import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Content, Footer, Button } from 'native-base';

class App extends Component {
  render(){
    return(
      <Container>
        <Header style={{backgroundColor: "yellowgreen"}}>
          <Left>
            <Button style={{backgroundColor: "yellowgreen"}}>
              <Icon style={{color: 'white'}} name="menu"/>
            </Button>
          </Left>
          <Body>
            <Title>My App</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;
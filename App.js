import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Icon, Content, Footer, Button, Item, Input, Text } from 'native-base';

class App extends Component {
  render(){
    return(
      <Container>
        <Header searchBar rounded style={{backgroundColor: "yellowgreen"}}>
          <Item>
            <Icon name="search"/>
            <Input placeholder="Search" />
            <Icon name="contacts" />
          </Item>
        </Header>
        <Content>
          <Body style={{marginTop: 250}}>
          <Button iconLeft rounded info>
            <Icon name="logo-facebook"/>
            <Text>Klik sini</Text>
          </Button>
          </Body>
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;
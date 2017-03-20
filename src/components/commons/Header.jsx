import React, {PropTypes} from 'react'
import {Navbar, Nav , NavItem, Button} from 'react-bootstrap/lib'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { browserHistory } from 'react-router'

const Header = ({type}) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Jsonplaceholde</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="about">
          <NavItem>About</NavItem>
        </LinkContainer>
        <LinkContainer to="posts">
          <NavItem>Posts</NavItem>
        </LinkContainer>
      </Nav>
      { type &&
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            { type === 'post' && <Button bsStyle="primary" bsSize="sm" onClick={() => {browserHistory.push('/post')}}>New Post</Button>}
            { type === 'about' && <Button bsStyle="warning" bsSize="sm">About</Button>}
          </Navbar.Form>
        </Navbar.Collapse>
      }
    </Navbar>
  )
}

Header.propTypes = {
  type: PropTypes.string
}

export default Header

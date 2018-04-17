import React, {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';



export default class NavBar extends Component {
  constructor(props) {
          super(props);
          this.state = {
              collapse: false,
              isWideEnough: false,
              dropdownOpen: false
          };
      this.onClick = this.onClick.bind(this);
      this.toggle = this.toggle.bind(this);
      }

      onClick(){
          this.setState({
              collapse: !this.state.collapse,
          });
      }

      toggle() {
          this.setState({
              dropdownOpen: !this.state.dropdownOpen
          });
      }

  render() {
    return (
      <Router>
                <Navbar color="primary-color" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>MapleField</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Profile</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Info</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Create an Event</DropdownItem>
                                  <DropdownItem href="#">List of Events</DropdownItem>
                                  <DropdownItem href="#">Friends</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
    );
  }
}

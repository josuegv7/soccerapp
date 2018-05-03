import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa,
  Container,
  Mask,
  View,
  MRow,
  Col
} from "mdbreact";
import "./navbar.css";

class NavBar extends Component {
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
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavbarNav right>
            <NavItem>
              <NavLink to="/auth/google">Google Login</NavLink>
            </NavItem>
          </NavbarNav>
        );
      default:
        return (
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    Info
                  </DropdownToggle>
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
                <NavLink to="/soccerapp/logout">Log Out</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        );
    }
  }
  render() {
    return (
      <div>
        <header>
          <Router>
            <Navbar color="unique-color" dark expand="md" scrolling>
              <NavbarBrand>
                <Link to={this.props.auth ? "/profile" : "/"}>
                  <strong>MapleField</strong>
                </Link>
              </NavbarBrand>
              {!this.state.isWideEnough && (
                <NavbarToggler onClick={this.onClick} />
              )}
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>{this.renderContent()}</NavbarNav>
              </Collapse>
            </Navbar>
          </Router>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(NavBar);

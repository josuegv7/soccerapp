import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem} from "mdbreact";
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
              <li><a href="/auth/google">Google Login</a></li>
            </NavItem>
          </NavbarNav>
        );
      default:
        return (
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <li><a href="/soccerapp/logout"> Log Out</a></li>
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
            <Navbar color="red" dark expand="md" scrolling>
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

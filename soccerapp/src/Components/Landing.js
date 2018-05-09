import React, {Component} from "react";
import { View, Mask, Button } from 'mdbreact';
import pic2 from '../assets/pic2.jpg';

export default class Landing extends Component {
  render(){
    const view = {
      backgroundImage: `url(${pic2})`,
      backgroundSize: 'cover',
      height: '100vh'
    }
    return(
        <div>
          <View style={view}>
            <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
                <h2> The only social network for Futbol </h2>
                <Button color="warning">Sign In</Button>
            </Mask>
          </View>
      </div>
    )
  }
}

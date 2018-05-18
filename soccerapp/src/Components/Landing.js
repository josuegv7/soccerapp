import React, {Component} from "react";
import { View, Mask } from 'mdbreact';
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
                <h1> A social network for Futbol Pickup Games </h1>
            </Mask>
          </View>
      </div>
    )
  }
}

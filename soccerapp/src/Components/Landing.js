import React, {Component} from "react";
import { View, Mask, Button } from 'mdbreact';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';

export default class Landing extends Component {
  render(){
    const view = {
      backgroundImage: `url(${pic2})`,
      // background: 'url("https://calvin.edu/publication/spark/2017/09/01/under-the-lights(40).jpg")no-repeat center center',
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

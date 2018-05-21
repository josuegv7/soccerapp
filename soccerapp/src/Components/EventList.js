import React, {Component} from 'react';
import {connect} from 'react-redux';
import { exportGames } from '../actions/index';
import {Card,CardBody,CardTitle,CardText} from 'mdbreact';


class EventList extends Component {
    componentDidMount(){
        this.props.exportGames()
    }
    eventGames(){
        return this.props.games.reverse().map(game => {
            return (
            <Card cascade key={game._id}>
            <CardBody >
                <CardTitle> {game.subject} </CardTitle>
                <CardText>
                    {game.body}<br/>
                    {game.date}<br/>
                    {game.time}
                </CardText> 
                    <div className="row">
                        <div className="col-6"> Yes: {game.yes} </div> 
                        < div className = "col-6"> No: {game.no} </div>
                    </div>
            </CardBody> 
            </Card>
            )
        })
    }
    render() {
        return(
            <div>
                <h3> <i className = "fa fa-calendar fa-2x d-inline" aria-hidden = "true"></i>
                    GAMES CREATED
                </h3 >
                {this.eventGames()}
            </div>
        )
    }
}


function mapStateToProps({games}) {
    return {games}
}

export default connect(mapStateToProps, 
    {exportGames})(EventList)
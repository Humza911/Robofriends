import React, {Component} from "react";
//import { robots } from './robots';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import Scrollbar from "./Scrollbar";
import './App.css'


class App extends Component {
    constructor()
    {
        super();
        this.state = 
        {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then (users => this.setState({robots:users}))
}

onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render()
    {
        const filteredRobots = this.state.robots.filter (robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length===0)
        {
            return <h1 className="f1"> loading, please wait</h1>
        }
        else {
            return (
                <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scrollbar>
                <CardsList robots={filteredRobots}/>
                </Scrollbar>
                </div>
            )
        }        
    }    
}

export default App;


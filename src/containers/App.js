import React, {Component} from "react";
//import { robots } from './robots';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scrollbar from "../components/Scrollbar";
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary";


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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter (robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return (!robots.length)?
            <h1 className="f1 tc"> loading, please wait</h1>:
            (
                <div className="tc">
                <h1 className="f1"> RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scrollbar>
                <ErrorBoundary>
                <CardsList robots={filteredRobots}/>
                </ErrorBoundary>
                </Scrollbar>
                </div>
            )                
    }    
}

export default App;


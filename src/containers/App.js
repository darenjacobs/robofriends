import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'; 

class App extends Component {  // Declaring a class
    constructor() {
        super();
        // App passes these two states as props to SearchBox and CardList components
        this.state = {
            // Create empty array and grab the robots
            robots: [],
            searchfield: ''
        }
    }

    // Lifecycle method that runs after the component mounts
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    // get the text typed into the search and pass it to the SearchBox on line 31
    onSearchChange = (event) => {
        // Update the state of the searchfield to what is typed in.
        this.setState({ searchfield: event.target.value });
    }


    render() {
        // filter the robots based on the search input and pass it to CardList on line 32
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
          // this compares the robots to what's typed into the search field and returns matches
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // Address an issue with slow or no fetch() above in componentDidMount
        // changing from (robots.length === 0) to below; which basically says the same thing
        return (!robots.length) ? 
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange } />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots } />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    } 
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


// const Header = () => <h2>Header</h2>
import Header from './Header';
import { render } from 'react-dom';
const Dashboard = () => <h2>Dashboard</h2>
const surveyNew = () => <h2>surveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
        
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={surveyNew} />
                    </div>
                </BrowserRouter>
            </div >
        );
    }
}

export default connect(null, actions)(App);

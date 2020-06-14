import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


// const Header = () => <h2>Header</h2>
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const surveyNew = () => <h2>surveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {

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
export default App;

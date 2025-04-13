import React from "react";
import './Home.css';
import {ContentView} from './ContentView/ContentView.js'
import {Search} from '../Search/Search.js'


export const Home = () => {
    return(
        <div className="HomeContainer">
            <Search />
            <ContentView />
        </div>
    )
}
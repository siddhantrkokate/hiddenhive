import React from "react";
import './Header.css'
import {Logo} from './Logo/Logo.js'
import {SearchButton} from './SearchButton/SearchButton.js'
import {AddNewButton} from './AddNewButton/AddNewButton.js'


export const Header = () =>{
    return(
        <div className="HeaderContainer">
            <Logo />
            {/* <SearchButton /> */}
            <AddNewButton />
        </div>
    )
}
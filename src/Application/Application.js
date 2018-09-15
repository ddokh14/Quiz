import React from 'react'
import './Application.css'
import Input from '../Input/Input'
import List from '../List/List'
import Footer from '../Footer/Footer'


const list = [
    {id:1, name:'შრომა'},
    {id:2, name:'შრომა'},
    {id:3, name:'შრომა'}    
];


const Application = () => {
    return (
        <div>
            <p>სატესტო აპლიკაცია</p>
            <Input/>
            <List list={list}/>
            <Footer/>
        </div>
    );
}

export default Application;
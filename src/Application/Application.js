import React from 'react'
import './Application.css'
import Input from '../Input/Input'
import List from '../List/List'
import Footer from '../Footer/Footer'




class Application extends React.Component {

    state = {
        list : []
    }


    onAddItem = (event) => {
        event.preventDefault();
        this.setState({
            list: [...this.state.list, event.target[0].value]
        });
    }

    render() {
        return (
            <div>
                <Input onAddItem = {this.onAddItem}/>
                <List list={this.state.list}/>
                <Footer/>
            </div>
        );  
    }
}

export default Application;
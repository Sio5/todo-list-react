import React, {Component} from 'react'
import {Container,Row,} from 'reactstrap';
import TodoItem from './components/Input'
import List from './components/List'
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import uuid from 'uuid'
//use of uuid for unique ids for each item

export default class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false
    }
    handleChange = (e) => {
        this.setState({item: e.target.value})
    };
    handleSubmit = (e) => {
    e.preventDefault();
    
    // getting the initials id and item
    const newItem = {
        id:this.state.id,
        item:this.state.item
    }
    console.log('object', newItem)
    // split Array into Items and adding newItem
    const updatedItems = [...this.state.items,newItem];

    this.setState({
        items:updatedItems,
        item: '',
        id:uuid(), //uuid generate a custom id for each item
        editItem:false

    })
    };
    // clear the todo list, by cleaning the array
    clearList = () =>{
        this.setState({
            items: []
        })
    }

    // filter all items and return only the one whitch doesnt match the id
    handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id)
    this.setState({
        items:filteredItems
    })
    }
    handleEdit = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id)
        const selectedItem = this.state.items.find(item => item.id)
        this.setState({
            items: filteredItems,
            item: selectedItem.item,
            editItem: true,
            id: id
        })
    }
    render() {
        return (
            <Container>
                <Row className="text-capitalize title mt-3"><h3>Todo Input</h3></Row>
                <TodoItem 
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                edit={this.state.editItem}
                />
                <Row className="text-capitalize title mt-3"><h3>Todo List</h3></Row>
                <List items={this.state.items} edit={this.state.editItem} onClick={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </Container>
        )
    }
}
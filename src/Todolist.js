import React, { Component } from "react";
import GIPHY from "./API_call";
import TodoItems from "./TodoItems";
//import { connect } from 'react-redux';

import "./TodoList.css";




class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [] 
    };

    this.addItem.bind(GIPHY)
    this.addItem = this.addItem.bind(this);
    this.deleteItem= this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState)=> {
        return {
          items: prevState.items.concat(newItem) //new arrays made here, avoids state issue workarouands
        };
      });
    }
    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

    deleteItem(key){
      var filteredItems = this.state.items.filter(function (item){
        return(item.key !== key)
      });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    //console.log("HI");
    return(
      <div className = "todoListMain">
        <div className = "header">
        <form onSubmit={this.addItem}>
            <input ref = {(a) => this._inputElement = a}
            placeholder= "Enter task">
            </input>
            <button type= "Submit">add</button>
          </form>
        </div>
        <GIPHY />
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
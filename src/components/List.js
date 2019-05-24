import React from 'react'
import {Row,ListGroup, Button} from 'reactstrap'
import ListItem from './ListItem'

export default function List(props) {
    return (
        <Row>
        <ListGroup className="w-100 mt-2 mb-2">
        {props.items.map(item =>{
            return <ListItem 
            key={item.id} 
            title={item.item} 
            handleDelete={()=> props.handleDelete(item.id)}
            handleEdit={()=> props.handleEdit(item.id)}
            // Passing handleDelete method with item ID
            // !Implicit return.Whithout arrow function it would not work.
            // Also need to use props to pass it, if not you need to define handleDelete
            />;
            
        })}
      </ListGroup>
      <Button color="danger btn-block" onClick={props.onClick}>Clear all Tasks</Button>
      </Row>

    )
}

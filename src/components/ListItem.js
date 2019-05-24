import React from 'react'
import {ListGroupItem} from 'reactstrap'

export default function ListItem(props) {
    return (
        <ListGroupItem>{props.title}
            <div className="todoIcons">
                <span className="text-success" onClick={props.handleEdit}>
                    <i className="fa fa-pencil"/>
                </span>
                <span className="text-danger" onClick={props.handleDelete}>
                    <i className="fa fa-window-close"/>
                </span>
            </div>
        </ListGroupItem>

    )
}

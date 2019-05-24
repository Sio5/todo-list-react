import React from 'react'
import {Form, Row, Input, InputGroup, Button} from 'reactstrap'

export default function TodoItem(props) {
    return (

        <Form onSubmit={props.handleSubmit}>
            <Row>
                <InputGroup>
                    <div className="input-group-text bg-primary text-white">
                        <i className="fa fa-book"/></div>
                    <Input
                        placeholder="Add a new Task"
                        value={props.item}
                        onChange={props.handleChange}/>
                </InputGroup>
                <Button
                    type="submit"
                    color={props.edit
                    ? 'success'
                    : 'primary'} // if the state of editItems is true the color will be primary and if not success.
                    className="todoAddButton btn-block mt-2">{props.edit
                        ? 'Edit Item'
                        : 'Add a new Task'}</Button>
            </Row>
        </Form>

    )
}

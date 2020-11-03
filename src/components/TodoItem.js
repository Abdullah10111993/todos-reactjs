import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <h2>{ this.props.todo.title }</h2>    
            </div>
        );
    }
}


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = { 
//     backgroundColor: '#f4f4f4' 
// }

export default TodoItem

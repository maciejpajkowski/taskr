import React, { useState } from 'react';
import StyledFrame from '../styles/StyledFrame'
import StyledForm from '../styles/StyledForm';
import { connect } from 'react-redux';

const CreateTask = (props) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.createTask({
            name,
            description
        });
    }

    return (
        <StyledFrame>
            <h1>Create a new task</h1>
            <StyledForm onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Task name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <textarea 
                    type="text" 
                    placeholder="Task description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div>
                    <button>Create task!</button>
                </div>
                
            </StyledForm>
        </StyledFrame>
    )
}

const mapDispatchToProps = (dispatch) => ({
    createTask: (task) => dispatch(createTask(task))
});

export default connect(undefined, mapDispatchToProps)(CreateTask);
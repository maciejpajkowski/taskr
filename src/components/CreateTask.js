import React, { useState } from 'react';
import StyledFrame from '../styles/StyledFrame'
import StyledForm from '../styles/StyledForm';
import { connect } from 'react-redux';
import { createTask } from '../actions/tasksActions';
import { useRouter } from 'next/router';

const CreateTask = (props) => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const router = useRouter();
    
    const assignId = () => {
        if (props.tasks.length === 0) 
        {
            return 1;
        }
        else
        {
            const ids = [];
            props.tasks.map((task) => {
                ids.push(task.id);
            });
            return Math.max(...ids) + 1;
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.createTask({
            id: assignId(),
            name,
            description
        });
        router.push("/");
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

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    createTask: (task) => dispatch(createTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
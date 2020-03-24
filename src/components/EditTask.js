import React, { useState } from 'react';
import StyledFrame from '../styles/StyledFrame';
import StyledForm from '../styles/StyledForm';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { editTask } from '../actions/tasksActions';

const EditTask = (props) => {
    let propName = '';
    let propDescription = '';

    props.tasks.map((task) => {
        if (task.id === props.id)
        {
            propName = task.name;
            propDescription = task.description;
        }
    });

    const [ name, setName ] = useState(propName);
    const [ description, setDescription ] = useState(propDescription);
    const [ error, setError ] = useState('');
    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length !== 0)
        {
            props.editTask(props.id, { name, description });
            router.push("/");
        }
        else
        {
            setError('Task name must not be empty!');
        }
    }
    
    return (
        <StyledFrame>
            <h1>Editing task: {name}</h1>
            <StyledForm onSubmit={onSubmit}>
                {!!error && <span>{error}</span>}
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
                    <button>Confirm edits</button>
                </div>
            </StyledForm>
        </StyledFrame>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({
    editTask: (id, updates) => dispatch(editTask(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
import React, { useState } from 'react';

function TaskForm({ onAdd }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
        placeholder="Nova tarefa: "
        value={input}
        onChange={(e) => setInput(e. target.value)}
        />
        <button type="submit">Adicionar</button>
        </form>
        );
    }

export default TaskForm;

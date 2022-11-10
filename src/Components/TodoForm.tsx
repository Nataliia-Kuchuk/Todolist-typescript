import React, { useRef, useState } from 'react';

interface TodoFormProps{
    onAdd: (title:string) => void
}

const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  setTitle(event.target.value)
    //}
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
    //         setTitle('')
    }
    }
    return (
        <div className='input-field mt2'>
            <input ref={ref}  onKeyPress={keyPressHandler} type="text" name="" id="title" placeholder='Enter task'/>
            <label htmlFor="title" className='active'>Enter task</label>
        </div>
    );
};

export default TodoForm;
import { useState } from "react";


const InputTodo = ({ onAdd }) => {
    const [text, setText] = useState('');
  
    const handleInputChange = (e) => {
      setText(e.target.value);
    };
  
    const handleAdd = () => {
      if (text.trim() !== '') {
        onAdd(text);
        setText('');
      }
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={handleInputChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  };

  export default InputTodo;
import { useState } from 'react';
import { TodoTitle } from "../types";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}


export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('');

const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
  event.preventDefault();
  saveTodo({ title: inputValue });
  setInputValue('');
};

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="new-todo"
      value={inputValue}
      onChange={(event) => { setInputValue(event.target.value) }}
      placeholder='What do you want to do?'
      autoFocus
      />
    </form>
  );
};
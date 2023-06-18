import TodoItem from "./TodoItem"


const TodosList = ({ todos, onEdit, onDelete }) => {
    return (
      <>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </>
    );
  };

  export default TodosList;
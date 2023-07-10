/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const { user } = useAuthContext();
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className="row" style={viewMode}>
        <div className="col-1">
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
        </div>
        <div className="col-7">
          {itemProp.title}
        </div>
        <div className="col-4">
          {user && (
          <button type="button" className="btn btn-success mx-1" onClick={handleEditing}>
            <AiFillEdit className="mx-1" size="21px" />
          </button>
          )}
          {!user && (
            <>
              <span className="mx-2 text-danger">
                <NavLink to="/login" className=" text-sucess">Login to Edit</NavLink>
              </span>
              <button type="button" className="btn btn-success mx-1" disabled>
                <AiFillEdit className="mx-1" size="21px" />
              </button>

            </>

          )}

          <button type="button" className="btn btn-danger mx-1" onClick={() => delTodo(itemProp.id)}>
            <FaTrash className="mx-1" />
          </button>
        </div>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;

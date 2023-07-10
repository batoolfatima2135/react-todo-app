// other imports here
import TodosLogic from '../components/TodosLogic';
import Header from '../components/Header';

const TodoApp = () => (

  <div className="row m-5 justify-content-center">
    <div className="col-8">
      <Header />
      <TodosLogic />
    </div>

  </div>

);
export default TodoApp;

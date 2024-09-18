import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";

function Tasks() {
  return (
    <>
      <h2>Tasks</h2>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default Tasks;

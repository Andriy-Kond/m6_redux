import { Task } from "components/Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";

import { statusFilters } from "reduxItems/filters/constants";
import { getTasks } from "reduxItems/tasks/selectors";
import { getFilter } from "reduxItems/filters/selectors";

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // const tasks = useSelector(state => state.tasks);
  // const statusFilter = useSelector(state => state.filter.status);
  const tasks = useSelector(getTasks);

  const statusFilter = useSelector(getFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

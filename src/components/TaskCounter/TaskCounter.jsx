import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";

import { getTasks } from "reduxItems/tasks/selectors";

export const TaskCounter = () => {
  // const tasks = useSelector(state => getTasks(state));
  const tasks = useSelector(getTasks); // те саме

  const tasksCount = tasks.reduce(
    (acc, task) => {
      // opt1
      // switch (task) {
      //   case !task.completed:
      //     return (acc.active += 1);
      //   case task.completed:
      //     return (acc.completed += 1);
      //   default:
      //     return acc;
      // }

      // opt2
      // if (task.completed) {
      //   acc.completed += 1;
      // } else {
      //   acc.active += 1;
      // }
      // return acc;

      // opt3
      task.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },
    { active: 0, completed: 0 },
  );

  return (
    <div>
      <p className={css.text}>Active: {tasksCount.active}</p>
      <p className={css.text}>Completed: {tasksCount.completed}</p>
    </div>
  );
};

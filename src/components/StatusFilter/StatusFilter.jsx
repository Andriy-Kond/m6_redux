import { useSelector } from "react-redux";

import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

import { statusFilters } from "reduxItems/filters/constants";

import { getFilter } from "reduxItems/filters/selectors";

export const StatusFilter = () => {
  // const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};

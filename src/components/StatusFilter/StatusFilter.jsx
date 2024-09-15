import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { Button } from "components/Button/Button";
import { statusFilters } from "reduxItems/filters/constants";
import { getFilter } from "reduxItems/filters/selectors";
import { setStatusFilter } from "reduxItems/filters/actions";

export const StatusFilter = () => {
  // const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const setFilter = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => setFilter(statusFilters.all)}>
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => setFilter(statusFilters.active)}>
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => setFilter(statusFilters.completed)}>
        Completed
      </Button>
    </div>
  );
};

import Svg from "../Svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filterSlice";
import styles from "./FilterOptions.module.css";
import clsx from "clsx"; // İsteğe bağlı: classları kolayca birleştirmek için

function FilterOptions({ iconName, text, filterName, filterValue }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter[filterName]);
  const selected = filter === filterValue;

  function handleClick() {
    dispatch(updateFilters({ [filterName]: selected ? "" : filterValue }));
  }

  return (
    <li
      className={clsx(styles.filterOption, selected && styles.selected)}
      onClick={handleClick}
    >
      <Svg cssClass={styles.icon} iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FilterOptions;

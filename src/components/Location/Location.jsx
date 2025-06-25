import { useState } from "react";
import Svg from "../Svg/Svg";
import { useDispatch } from "react-redux";
import { updateFilters } from "../../redux/filterSlice";
import styles from "./Location.module.css";

function Location() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(updateFilters({ location: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <div className={styles.inputWrapper}>
        <Svg cssClass={styles.icon} iconName="map" />
        <input
          value={value}
          onChange={handleChange}
          type="text"
          name="location"
          id="location"
          className={styles.input}
          placeholder="Enter a location"
        />
      </div>
    </div>
  );
}

export default Location;

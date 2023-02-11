import classes from "./BaseSpinner.module.css";

function BaseSpinner() {
  return (
    <div className={classes.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BaseSpinner;

//accepts label name active as the prop
//component is resuabele
//based on the value of active we toggle class
import "./custom-checkbox.css";

export default function CustomChecKBox({
  label,
  name,
  handleChange,
  id,
  active,
}) {
  return (
    <div>
      <label className="container">
        <div style={{ fontSize: "17px" }}>{label}</div>

        <span
          id={id}
          name={name}
          onClick={(e) => {
            //write integration test to cover that
            handleChange(e);
          }}
          className="checkmark"
        >
          {active === "true" ? (
            <div className="show-checkmark"></div>
          ) : (
            <div></div>
          )}
        </span>
      </label>
    </div>
  );
}

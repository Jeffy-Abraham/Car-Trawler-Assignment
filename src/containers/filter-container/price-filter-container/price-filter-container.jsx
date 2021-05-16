import { useState, useEffect } from "react";
import CustomChecKBox from "../../../components/custom-checkbox/custom-checkbox";
import Toggle from "../../toggle-display/toggle-display";
import { CheckBoxPrice } from "./price-filter-data";
import {
  setPriceFilter,
  applyMultiFilter,
} from "../../../redux/car-reducer/car-action";
import { connect } from "react-redux";

function FilterContainer({ setPriceFilter, applyMultiFilter }) {
  //save the id of the current checkbox
  const [active, setCurrent] = useState(0);

  const handleChange = function (e) {
    setCurrent(parseInt(e.target.id));
  };
  useEffect(() => {
    setPriceFilter(active);

    applyMultiFilter();
  }, [active]);
  return (
    <div>
      <Toggle title="Price">
        {CheckBoxPrice.map((checkbox) => {
          
          if (active === checkbox.id) {
            return (
              <CustomChecKBox key={checkbox.id}
                active="true"
                handleChange={handleChange}
                {...checkbox}
              />
            );
          } else {
            return (
              <CustomChecKBox key={checkbox.id}
                active="false"
                handleChange={handleChange}
                {...checkbox}
              />
            );
          }
        })}
      </Toggle>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setPriceFilter: (id) => dispatch(setPriceFilter(id)),
  applyMultiFilter: () => dispatch(applyMultiFilter()),
});

export default connect(null, mapDispatchToProps)(FilterContainer);

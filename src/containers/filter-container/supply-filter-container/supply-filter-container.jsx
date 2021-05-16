import { useState, useEffect } from "react";
import CustomChecKBox from "../../../components/custom-checkbox/custom-checkbox";
import Toggle from "../../toggle-display/toggle-display";
import { CheckBoxSuppliers} from "./supply-filter-data";
import {
  setSupplyFilter,
  applyMultiFilter,
} from "../../../redux/car-reducer/car-action";
import { connect } from "react-redux";

function SupplyFilterContainer({ setSupplyFilter, applyMultiFilter }) {
  //save the id of the current checkbox
  const [active, setCurrent] = useState(0);

  const handleChange = function (e) {
    console.log(e.target.id);

    setCurrent(parseInt(e.target.id));
  };
  useEffect(() => {
    setSupplyFilter(active);

    applyMultiFilter();
  }, [active]);
  return (
    <div>
      <Toggle title="Suppliers">
        {CheckBoxSuppliers.map((checkbox) => {
       
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
  setSupplyFilter: (id) => dispatch(setSupplyFilter(id)),
  applyMultiFilter: () => dispatch(applyMultiFilter()),
});

export default connect(null, mapDispatchToProps)(SupplyFilterContainer);

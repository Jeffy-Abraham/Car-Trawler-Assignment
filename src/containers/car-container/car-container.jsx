import "./car-container.style.css";
import PassengerIcon from "../../assests/man-user.png";
import DoorIcon from "../../assests/car-door.png";
import BreifCase from "../../assests/briefcase.png";
import Snowflake from "../../assests/snowflake.png";
import Avis from "../../assests/avis.png";
import Alamo from "../../assests/alamo.png";
import Hertz from "./../../assests/Hertz.png";
import Legend from "../../components/icon-legend/icon-legend.component";
import { useHistory } from "react-router-dom";
export default function CarContainer({ ...otherProps }) {
  const { Vehicle, TotalCharge, _id, Name } = otherProps;
  const { VehMakeModel } = Vehicle;
  let history = useHistory();
  //use integration test
  const handleClick = function handleClick(id) {
    history.push(`/cars/${_id}`);
  };
  return (
    <div className="car-cotainer-flex" onClick={() => handleClick(_id)}>
      <div style={{ padding: "20px" }}>
        <img src={Vehicle["PictureURL"]} alt="pics" width="200px" />
      </div>
      <div>
        <div className="car-title">
          {VehMakeModel["@Name"].replace("or similar", "")}
        </div>
        <div className="car-attr">
          <div className="attr-flex">
            <Legend
              title={Vehicle["@PassengerQuantity"]}
              icon={PassengerIcon}
            />
            <Legend title={Vehicle["@DoorCount"]} icon={DoorIcon} />
          </div>
          <div className="attr-flex">
            <Legend title={Vehicle["@BaggageQuantity"]} icon={BreifCase} />
            {Vehicle["@AirConditionInd"] ? (
              <Legend title="Aircon" icon={Snowflake} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="footer-container">
          <div className="price-tag">
            {TotalCharge["@RateTotalAmount"]}
            <span> €</span>
          </div>
          <div className="supply-brand">
            {Name === "HERTZ" ? (
              <div>
                <img width="64px" src={Hertz} alt='h' />
              </div>
            ) : Name === "ALAMO" ? (
              <div>
                <img width="64px" src={Alamo} alt='h'/>
              </div>
            ) : (
              <div>
                <img width="64px" src={Avis}alt='h' />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

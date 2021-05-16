import CarList from "../../containers/car-container-list/car-container-list";
import { useEffect } from "react";
import { apiReq } from "../../redux/car-reducer/car-action";
import { connect } from "react-redux";
import AutoComplete from "../../components/google-autocomplete/autocomplete.component";
import "./home.css";
import PriceFilterContainer from "../../containers/filter-container/price-filter-container/price-filter-container";
import SupplyFilterContainer from "../../containers/filter-container/supply-filter-container/supply-filter-container";
import PropTypes from "prop-types";
export function Home({ apiReq, filteredVersionCarDetails, isFetching, vehRental }) {

  useEffect(() => {
    apiReq();
  }, []);

  return (
    <div className="container">
      <div>
        <AutoComplete title="Pick up location" label="Pickup" />
        <div id='show-location'>{vehRental.Pickup}</div>
      </div>
      <div>
        <AutoComplete title="Drop Location" label="Drop" />
        <div id='show-location'>{vehRental.Drop}</div>
      </div>
      <div className="location-container"></div>
      <div className="flex-gallery">
        <div>
          <PriceFilterContainer />
          <SupplyFilterContainer />
        </div>
        <div style={{ marginTop: "-500px", marginLeft: "100px" }}>
          <div style={{ marginLeft: "-30px" }}>
            <CarList carDetails={filteredVersionCarDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  apiReq: () => dispatch(apiReq()),
});
const mapStateToProps = ({
  cars: { filteredVersionCarDetails, isFetching, vehRental },
}) => ({
  filteredVersionCarDetails,
  isFetching,
  vehRental,
});
Home.PropType = {
  apiReq: PropTypes.func,
  isFetching: PropTypes.bool,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

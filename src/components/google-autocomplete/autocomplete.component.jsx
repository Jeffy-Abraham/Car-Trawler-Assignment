//google auto complete
import GoogleAutoComplete from "react-google-autocomplete";
import { getLocation } from "./../../redux/car-reducer/car-action";
import { connect } from "react-redux";
function LocationForm({ label, getLocation, title }) {
  return (
    <div style={{ marginTop: "50px", fontSize: "20px", fontWeight: "600" }}>
      <div>{title}</div>
      <GoogleAutoComplete
        style={{
          width: "250px",
          height: "50px",
          marginTop: "20px",
          fontSize: "17px",
        }}
        apiKey="AIzaSyA5PhlSej1NIDdnHTJ2I_JGRJmzFU-FwrQ"
        onPlaceSelected={(place) =>
        
          getLocation({ data: place.formatted_address, label: label })
        }
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getLocation: (data) => dispatch(getLocation(data)),
});

export default connect(null, mapDispatchToProps)(LocationForm);

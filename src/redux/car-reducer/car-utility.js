//deform the array
import { v4 as uuidv4 } from "uuid";
export const constructArrayByPrice = function (VehVendorAvailss) {
  var newArr = [];
  const { VehVendorAvails } = VehVendorAvailss;
  VehVendorAvails.map(({ Vendor, VehAvails }) => {
    return VehAvails.map((carDetails) => {
      carDetails["_id"] = uuidv4();
      carDetails["Name"] = Vendor["@Name"];

      return newArr.push(carDetails);
    });
  });
  var x = newArr.sort((a, b) => {
    return (
      a.TotalCharge["@RateTotalAmount"] - b.TotalCharge["@RateTotalAmount"]
    );
  });
  return x;
};

export const setLocation = function (vehRental, data) {
  if (data.label === "Drop") {
    var result = { ...vehRental, Drop: data.data };
    return result;
  }
  if (data.label === "Pickup") {
    var result = { ...vehRental, Pickup: data.data };
    return result;
  }
};
export const getRentalLocation = function (data) {
  console.log(data)
  var Pickup = data["VehRentalCore"]["PickUpLocation"]["@Name"];
  var Drop = data["VehRentalCore"]["ReturnLocation"]["@Name"];
  var rentals = {
    Pickup,
    Drop,
  };

  return rentals;
};

export const multiFilter = function (
  carDetails,
  priceFilterId,
  supplyFilterId
) {
  var filterPrice = filterPriceById(priceFilterId, carDetails);
  if (supplyIdtoName[supplyFilterId] !== undefined) {
    return filterPrice.filter((carDetails) => {
      return carDetails["Name"] === supplyIdtoName[supplyFilterId];
    });
  }
  return filterPrice;
};

//Use the id to filter by suppliers(better option would be to use object mapping to prevent redundency)

var supplyIdtoName = {
  1: "HERTZ",
  2: "AVIS",
  3: "ALAMO",
};

//Use the id to filter the price
const filterPriceById = function (id, originalArray) {
  switch (parseInt(id)) {
    case 1:
      return originalArray.filter((carDetails) => {
        return carDetails["TotalCharge"]["@RateTotalAmount"] < 800;
      });
    case 2:
      return originalArray.filter((carDetails) => {
        return (
          carDetails["TotalCharge"]["@RateTotalAmount"] > 800 &&
          carDetails["TotalCharge"]["@RateTotalAmount"] < 900
        );
      });

    case 3:
      return originalArray.filter((carDetails) => {
        return carDetails["TotalCharge"]["@RateTotalAmount"] > 900;
      });
    case 0:
      return originalArray;
    default:
      return originalArray;
  }
};

export const findById = function (id, originalState) {
  var found = originalState.find((cars) => {
    return cars["_id"] === id;
  });
  return found;
};

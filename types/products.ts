export interface Product {
  _id: string;
  name: string;
  _type: "car";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  pricePerDay: number;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
}

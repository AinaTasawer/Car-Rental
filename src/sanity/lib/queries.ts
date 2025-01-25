import { groq } from "next-sanity";

// export const allProducts=groq`*[_type == "car"]`;
 export const allProducts = `
  *[_type == "car"]{
    _id,
    name,
    slug,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    image,
  }
`;

// export const four = groq`*[_type == "car"][0..3]`;


"use client";

import PropertiesListItem from "./PropertiesListItem";
import { useEffect, useState } from "react";

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
};

const PropertiesList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    const url = "http://localhost:8000/api/properties";
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setProperties(json.data);
      })
      .then((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getProperties();
    console.log("testing..");
  }, []);
  return (
    <>
      {properties.map((property) => {
        return <PropertiesListItem key={property.id} property={property} />;
      })}
    </>
  );
};

export default PropertiesList;

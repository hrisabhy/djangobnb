"use client";

import apiService from "@/app/services/apiService";
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
    const url = "api/properties";
    const tempProperties = await apiService.get(url);
    setProperties(tempProperties.data);
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

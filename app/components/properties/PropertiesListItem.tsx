import Image from "next/image";
import { PropertyType } from "./PropertiesList";

interface PropertyProps {
  property: PropertyType;
}
const PropertiesListItem: React.FC<PropertyProps> = ({ property }) => {
  return (
    <div className="cursor-pointer p-2">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src={property.image_url}
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="Beach house"
        />
      </div>

      <div className="mt-5">
        <p className="text-lg font-bold">{property.title}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>${property.price_per_night}</strong> per person
        </p>
      </div>
    </div>
  );
};

export default PropertiesListItem;

import ContactButton from "@/app/components/ContactButton";
import PropertiesList from "@/app/components/properties/PropertiesList";
import Image from "next/image";
import React from "react";

const PropertyDetailPage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-500 shadow-xl">
            <Image
              src="/profile_pic_1.jpg"
              width={200}
              height={200}
              alt="Landlrod name"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">Franklin</h1>
            <ContactButton />
          </div>
        </aside>
        <div className="col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertiesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;

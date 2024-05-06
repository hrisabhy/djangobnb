import Image from "next/image";
import React from "react";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="pt-6 pb-2">
        <h1 className="my-6 text-2xl">My reservations</h1>
        <div className="space-y-4">
          <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square transition h-full w-full rounded-xl">
                <Image
                  fill
                  src="/beach_1.jpg"
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt="beach house"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h2 className="mb-4 text-xl">Property name</h2>
              <p className="mb-2">
                <strong>Check in date:</strong> 06.05.2024
              </p>
              <p className="mb-2">
                <strong>Check out date:</strong> 06.05.2024
              </p>
              <p className="mb-2">
                <strong>Number of nights:</strong> 06
              </p>
              <p className="mb-2">
                <strong>Total price:</strong> 604$
              </p>
              <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                Go to property
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;

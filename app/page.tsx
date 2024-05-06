import Image from "next/image";
import Categories from "./components/Categories";
import PropertiesList from "./components/properties/PropertiesList";

export default function Home() {
  return (
    <main className="">
      <Categories />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <PropertiesList />
      </div>
    </main>
  );
}

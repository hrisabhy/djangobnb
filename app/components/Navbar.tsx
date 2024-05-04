import Image from "next/image";
import Link from "next/link";
import SearchFilter from "./SearchFilter";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] px-6 mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={180} height={38}></Image>
          </Link>
          <div className="flex space-x-6">
            <SearchFilter />
          </div>
          <div className="flex items-center space-x-6">Add property</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

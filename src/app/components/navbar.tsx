import Link from "next/link";
import { links } from "@/lib/data";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";

export const Navbar = () => {
  return (
    <header className="px-8 py-2 bg-[#7600bc] text-white">
      <nav className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Top Left Logo */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Joseph Bryan </h1>
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline />
            <p>jdoe@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <MdCall />
            <p>+13456764598</p>
          </div>
        </div>
        {/* Links */}
        <div className="flex items-center justify-center gap-4 font-medium">
          {links.map((item) => (
            <Link className="hover:font-bold hover:underline" href={item.hash}>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

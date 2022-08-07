import Link from "next/link";
import { Props, ScriptProps } from "next/script";

const Navbar = (props: any) => {
  return (
    <div className="container mx-auto">
      <nav className="flex flex-row space-x-12 items-center py-4">
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-300">Home</a>
        </Link>
        <Link href="#!">
          <a className="text-blue-600 hover:text-blue-300">About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

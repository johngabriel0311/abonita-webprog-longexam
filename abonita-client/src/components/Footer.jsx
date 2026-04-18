import { Link } from "react-router-dom";
import nulogo from "../assets/img/nulogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#35408e] text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <img src={nulogo} alt="NU Logo" className="h-16 w-auto" />
          <p className="mt-2 text-xs uppercase tracking-widest text-zinc-50">
            NU Bulldogs Exchange
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
          <Link to="/products" className="hover:text-zinc-500 transition">
            Products
          </Link>
          <span>|</span>
          <Link to="/auth/signin" className="hover:text-zinc-500 transition">
            Sign In
          </Link>
          <span>|</span>
          <Link to="/auth/signup" className="hover:text-zinc-500 transition">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-50 mx-auto max-w-6xl" />

      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="text-xs text-zinc-50 text-center">
          © 2026 BulldogEx and all related logos, merchandise, names, and
          distinctive likenesses thereof are exclusive property of BulldogEx.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

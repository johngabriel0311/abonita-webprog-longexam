import { Outlet } from "react-router-dom";
import nu from "../assets/img/nu.jpg";
import nulogo from "../assets/img/nulogo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative hidden h-screen w-full lg:block">
          <img
            src={nu}
            alt="NationalU"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="relative aspect-square w-full max-w-[18rem]">
              <img src={nulogo} alt="NationalULogo" />
            </div>
          </div>
        </div>

        <main className="flex items-center bg-[#35408e] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;

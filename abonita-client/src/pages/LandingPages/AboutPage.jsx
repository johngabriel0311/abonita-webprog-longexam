import Button from "../../components/Button";
import logo from "../../assets/img/nubdexchange_logo.png";
import be from "../../assets/img/bulldogexchange.png";
import stickers from "../../assets/img/sticker.png";
import scarf from "../../assets/img/scarf1.png";
import hoodie from "../../assets/img/hoodie.png";
import lanyard from "../../assets/img/lanyard.png";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
              <img
                src={be}
                alt="BulldogExchange"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />

              <img
                src={logo}
                alt="BulldogEx"
                className="relative z-10 h-32 w-32"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A streamlined campus marketplace built for speed, clarity, and
              convenience.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop delivers a structured, low-friction shopping
              experience designed for students. With simplified navigation,
              organized product groupings, and responsive actions, users can
              quickly browse, select, and secure items without unnecessary
              steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#273357]  p-5">
            <p className="text-2xl font-bold text-zinc-50">15</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
            <p className="text-2xl font-bold text-zinc-50">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
            <p className="text-2xl font-bold text-zinc-50">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
            <p className="text-2xl font-bold text-zinc-50">27</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Entice with a clear, efficient shopping experience
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Smart Catalog
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-50">
                  Items are logically categorized to minimize search time and
                  improve product discovery efficiency.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Rapid Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-50">
                  Key product data and actions are prioritized, enabling users
                  to complete transactions with minimal interaction cost.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
                <h3 className="text-lg font-semibold text-zinc-50">
                  Pickup Coordination
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-50">
                  Order status and pickup scheduling are clearly presented to
                  ensure smooth and predictable fulfillment.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-[#273357] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-50">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { img: stickers, label: "Stickers" },
                { img: scarf, label: "Merchandise" },
                { img: hoodie, label: "Apparel" },
                { img: lanyard, label: "Accessories" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-zinc-200"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

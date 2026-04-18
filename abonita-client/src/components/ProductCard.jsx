import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-zinc-900 bg-[#273357]  p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#ffd41c]">
        {product.title}
      </h3>
      <p className="mt-2 text-base font-bold text-zinc-50">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-[#ffd41c]">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;

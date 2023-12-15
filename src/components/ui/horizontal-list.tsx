import ProductCard from "./product-card";

export default function HorizontalList() {
  return (
    <div className="flex w-full gap-4 overflow-x-auto md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg md:[&::-webkit-scrollbar-thumb]:bg-accent [&::-webkit-scrollbar]:invisible ">
      {[...Array(6)].map((_, i) => (
        <div className="w-[170px] lg:w-[264px] min-w-[170px] lg:min-w-[264px] md:mb-5" key={i}>
          <ProductCard />
        </div>
      ))}
    </div>
  );
}
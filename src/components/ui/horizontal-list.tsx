
interface HorizontalListProps {
  products: [];
}

export default function HorizontalList({
  products,
}: HorizontalListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto md:overflow-x-scroll md:[&::-webkit-scrollbar-thumb]:rounded-lg md:[&::-webkit-scrollbar-thumb]:bg-accent [&::-webkit-scrollbar]:invisible ">
      {products.map(() => (
        <div className="w-[170px] lg:w-[264px] min-w-[170px] lg:min-w-[264px] md:mb-5" >
          {/* <ProductCard /> */}
        </div>
      ))}
    </div>
  );
}
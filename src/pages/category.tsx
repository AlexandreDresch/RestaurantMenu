import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ui/product-card";
import { CupSodaIcon, SearchIcon, UtensilsIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  const categoryIcon = {
    bebidas: <CupSodaIcon size={16} />,
    pratos: <UtensilsIcon size={16} />,
  };
  return (
    <div className="flex flex-col gap-5 p-5 lg:px-24">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-1 text-center uppercase"
        variant="default"
      >
        {categoryIcon[category as keyof typeof categoryIcon]}
        <span className="uppercase">{category}</span>
      </Badge>

      <div className="flex gap-2">
      <Input
        placeholder={`Pesquise por ${
          category === "pratos" ? "um prato" : "uma bebida"
        }`}
      />
      
      <Button className="bg-orange-500">
        <SearchIcon />
      </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
        {[...Array(12)].map((_, i) => (
          <div
            className="w-[170px] lg:w-[264px] min-w-[170px] lg:min-w-[264px] md:mb-5"
            key={i}
          >
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
}

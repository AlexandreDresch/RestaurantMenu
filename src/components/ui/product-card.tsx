import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "./button";

export default function ProductCard() {
  return (
    <a href={`/detalhes/torre-de-batatas`}>
      <div className="flex flex-col gap-2">
        <div className="relative flex h-[170px] lg:h-[300px] w-full items-center justify-center rounded-lg bg-accent">
          <img
            src="https://www.sabornamesa.com.br/media/k2/items/cache/fbd810dbe9eba310a4db4eed080d5185_XL.jpg"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-lg"
            alt="torre"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm lg:text-base">
            Torre de Batatas
          </p>
          <div className="flex items-center gap-2">
            <p className="font-semibold">R$ 35.00</p>
          </div>

          <div className="flex justify-between">
            <Button variant="outline">
                Detalhes
            </Button>
            <Button onClick={() => {}} className="bg-orange-500">
                <ShoppingBasketIcon />
            </Button>
          </div>
        </div>
      </div>
    </a>
  );
}

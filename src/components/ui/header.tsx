import {
  AlignLeftIcon,
  HomeIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

export default function Header() {
  return (
    <Card className="p-4 flex font-Sen justify-between">
      <div className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <Button
              size="icon"
              variant="ghost"
              className="bg-gray-200 rounded-2xl"
            >
              <AlignLeftIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <div className="mt-2 flex flex-col gap-2">
              <SheetClose asChild>
                <a href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} /> Home
                  </Button>
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="/offers">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} /> Offers
                  </Button>
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href={"/catalog"}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    Catalog
                  </Button>
                </a>
              </SheetClose>

              <SheetClose asChild>
                <a href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} /> Orders
                  </Button>
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-col">
          <h3 className="text-justify text-base font-semibold text-orange-500 uppercase">
            Você está na
          </h3>
          <span className="text-sm font-light text-gray-500">Mesa 04</span>
        </div>
      </div>

      <div className="flex">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="relative bg-black rounded-2xl"
            >
              {true && (
                <span className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500 text-sm text-white font-bold">
                  10
                </span>
              )}
              <ShoppingBagIcon color="#FFFFFF" />
            </Button>
          </SheetTrigger>

          <SheetContent>Cart here</SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}

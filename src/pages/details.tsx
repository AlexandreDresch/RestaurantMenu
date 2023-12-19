import SectionTitle from "@/components/ui/section-title";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Clock4Icon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { dish } = useParams();
  return (
    <div>
      <img
        src="https://www.sabornamesa.com.br/media/k2/items/cache/fbd810dbe9eba310a4db4eed080d5185_XL.jpg"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full h-full object-cover"
        alt={dish}
      />

      <div className="flex flex-col p-4">
        <div className="flex w-full justify-between">
          <SectionTitle className="text-xl font-semibold">
            Torre de Batatas
          </SectionTitle>
          <div className="flex gap-1">
            <Clock4Icon />
            <span>20min</span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          cupiditate error commodi exercitationem voluptates ipsum, minima sint
          ducimus voluptate impedit rem laboriosam, dolore cum quasi velit modi
          ea laudantium! Quaerat!
        </p>

        <div className="flex items-center">
          <span className="">Tamanho:</span>
          <ToggleGroup type="single">
            <ToggleGroupItem value="pequeno">Pequeno(a)</ToggleGroupItem>
            <ToggleGroupItem value="medio">Medio(a)</ToggleGroupItem>
            <ToggleGroupItem value="grande">Grande</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}

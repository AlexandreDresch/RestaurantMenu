import { ChevronRight } from "lucide-react";

export default function Link({ target }: { target: string }) {
  return (
    <a href={target} className="flex gap-1 justify-center items-center">
      <span>Ver Mais</span>
      <ChevronRight color="#A0A5BA"/>
    </a>
  );
}

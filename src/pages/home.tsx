import HorizontalList from "@/components/ui/horizontal-list";
import { Input } from "@/components/ui/input";
import Link from "@/components/ui/link";
import SectionTitle from "@/components/ui/section-title";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <Input placeholder="Procure por um prato" />

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <SectionTitle>Pratos</SectionTitle>
          <Link target="/pratos" />
        </div>
        <HorizontalList />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <SectionTitle>Bebidas</SectionTitle>
          <Link target="/bebidas" />
        </div>
        <HorizontalList />
      </div>
    </div>
  );
}

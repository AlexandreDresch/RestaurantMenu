import HorizontalList from "@/components/ui/horizontal-list";
import Link from "@/components/ui/link";
import SectionTitle from "@/components/ui/section-title";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-5">
      <div className="flex flex-col gap-1 mt-5">
        <div className="flex justify-between mb-2">
          <SectionTitle>Pratos</SectionTitle>
          <Link target="categoria/pratos" />
        </div>
        <HorizontalList />
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between mb-2">
          <SectionTitle>Bebidas</SectionTitle>
          <Link target="categoria/bebidas" />
        </div>
        <HorizontalList />
      </div>
    </div>
  );
}

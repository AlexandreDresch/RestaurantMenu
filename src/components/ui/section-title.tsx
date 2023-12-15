import { ComponentProps } from "react";

export default function SectionTitle({
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className="font-normal text-lg" {...props}>
      {children}
    </p>
  );
}
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TitleProps = {
  title?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"h3">;

function Title({ title, children, ...props }: TitleProps) {
  return (
    <h3
      className="text-2xl text-black/80 font-bold text-center capitalize"
      {...props}
    >
      <span>{title}</span>
      {children}
    </h3>
  );
}

export default Title;

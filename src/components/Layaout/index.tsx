import React from "react";
import { Header } from "../Header";
type LayaoutProps = {
  children: React.ReactNode;
};

function Layaout({ children }: LayaoutProps) {
  return (
    <section className="">
      <Header />
      {children}
    </section>
  );
}

export { Layaout };

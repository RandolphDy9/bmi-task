import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 h-screen bg-gray-100">{children}</div>
  );
};

export default BaseLayout;

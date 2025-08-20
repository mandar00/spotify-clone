import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <aside>Left sidebar</aside>
      <div>{children}</div>
      <aside>Right Sidebar</aside>
    </div>
  );
};
export default RootLayout;

import React from "react";

type ContentsProps = {
  children?: React.ReactNode;
};

const Contents: React.FC<ContentsProps> = ({ children }) => {
  return (
    <main className="px-6 pt-30 pb-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </main>
  );
};

export default Contents;

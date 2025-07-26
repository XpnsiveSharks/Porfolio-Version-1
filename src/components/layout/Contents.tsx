import React from "react";

type ContentsProps = {
  children?: React.ReactNode;
};

const Contents: React.FC<ContentsProps> = ({ children }) => {
  return (
    <main className="p-4 grid grid-cols-3 bg-amber-400 dark:bg-slate-400">
      {children}
    </main>
  );
};

export default Contents;
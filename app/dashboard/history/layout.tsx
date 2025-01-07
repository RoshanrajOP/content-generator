// /pages/dashboard/history/layout.tsx

import React from "react";

const HistoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="bg-white shadow-lg p-6 rounded-lg">{children}</div>
    </div>
  );
};

export default HistoryLayout;

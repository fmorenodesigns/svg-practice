import "./styles.scss";

import React from "react";

interface Props {
  className?: string;
}

const PageLayout: React.FC<Props> = ({ className = "", children }) => (
  <div className={`page-layout ${className}`}>{children}</div>
);

export default PageLayout;

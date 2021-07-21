import "./styles.scss";

import React from "react";

interface Props {
  content: React.ReactNode;
  textAlign?: "center" | "left" | "right";
}

export default function Instruction({ content, textAlign = "center" }: Props) {
  return (
    <div className="instruction" style={{ textAlign }}>
      {content}
    </div>
  );
}

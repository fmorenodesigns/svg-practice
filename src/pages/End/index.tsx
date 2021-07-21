import "./styles.scss";

import Instruction from "../../components/Instruction";
import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { useState } from "react";

export default function End() {
  const [showingTroll, setShowingTroll] = useState(true);

  return (
    <PageLayout className="end-layout">
      <div className="poem">
        <p className="line-1">As rosas são red,</p>
        <p className="line-2">As hortênsias são blue.</p>
        <div
          className={`troll-lines ${showingTroll ? "pulsing" : ""}`}
          onClick={() => setShowingTroll((cur) => !cur)}
        >
          {showingTroll ? (
            <>
              <p className="line-3">Tomem lá uns trocados,</p>
              <p className="line-4">Dá para um jantar.</p>
            </>
          ) : (
            <>
              <p className="line-3">Til tross for avstanden,</p>
              <p className="line-4">I still love you.</p>
            </>
          )}
        </div>
      </div>
      <p className="not-rhyme">Não rima.</p>
      <Instruction content={<Link to="/">voltar ao início</Link>} />
    </PageLayout>
  );
}

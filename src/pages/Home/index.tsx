import "./styles.scss";

import Instruction from "../../components/Instruction";
import Logo from "../../components/Logo";
import PageLayout from "../../components/PageLayout";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const onClick = () => {
    history.push("./chapter-one");
  };

  return (
    <PageLayout className="home">
      <div onClick={onClick}>
        <Logo height={240} width={240} />
      </div>
      <div className="main-text">
        <p className="first-line">Feliz</p>
        <p className="second-line">aniversário!</p>
      </div>
      <Instruction content="sigam o círculo do amor..."></Instruction>
    </PageLayout>
  );
}

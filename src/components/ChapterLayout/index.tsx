import "./styles.scss";

import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons";

import ChapterImageContainer from "../ChapterImageContainer";
import PageLayout from "../PageLayout";
import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  imageComponent: React.ReactNode;
  imageWidth?: number;
  chapterNumber: number;
  isLastChapter?: boolean;
}

export default function ChapterLayout({
  imageComponent,
  imageWidth,
  chapterNumber,
  isLastChapter = false,
}: Props) {
  const history = useHistory();
  const goToPage = (path: string) => {
    history.push(path);
  };

  const navigateBackwards = () => {
    const targetPath = chapterNumber === 1 ? "./" : `./${chapterNumber - 1}`;

    goToPage(targetPath);
  };

  const navigateForwards = () => {
    const targetPath = isLastChapter ? "./end" : `./${chapterNumber + 1}`;

    goToPage(targetPath);
  };

  return (
    <PageLayout className="chapter-layout">
      <div className="chapter-container">
        <p className="chapter-text">capítulo</p>
        <p className="chapter-number">{chapterNumber}</p>
      </div>
      <ChapterImageContainer
        imageComponent={imageComponent}
        width={imageWidth}
      />
      <div className="buttons-container">
        <button className="change-page-button" onClick={navigateBackwards}>
          <IconArrowNarrowLeft size={25} stroke={1} />
        </button>
        <button className="change-page-button" onClick={navigateForwards}>
          <IconArrowNarrowRight size={25} stroke={1} />
        </button>
      </div>
    </PageLayout>
  );
}

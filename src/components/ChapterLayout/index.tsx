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
  forwardPath?: string;
  backwardPath?: string;
}

export default function ChapterLayout({
  imageComponent,
  imageWidth,
  chapterNumber,
  forwardPath,
  backwardPath,
}: Props) {
  const history = useHistory();
  const goToPage = (path: string) => {
    history.push(path);
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
        {!!backwardPath && (
          <button
            className="change-page-button"
            onClick={() => goToPage(backwardPath)}
          >
            <IconArrowNarrowLeft size={25} stroke={1} />
          </button>
        )}
        {!!forwardPath && (
          <button
            className="change-page-button"
            onClick={() => goToPage(forwardPath)}
          >
            <IconArrowNarrowRight size={25} stroke={1} />
          </button>
        )}
      </div>
    </PageLayout>
  );
}

import ChapterImageThree from "../../components/ChapterImages/ChapterImageThree";
import ChapterLayout from "../../components/ChapterLayout";

export default function ChapterThree() {
  return (
    <ChapterLayout
      imageComponent={<ChapterImageThree />}
      imageWidth={220}
      chapterNumber={3}
      forwardPath="./chapter-four"
      backwardPath="./chapter-two"
    />
  );
}

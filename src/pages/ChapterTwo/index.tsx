import ChapterImageTwo from "../../components/ChapterImages/ChapterImageTwo";
import ChapterLayout from "../../components/ChapterLayout";

export default function ChapterTwo() {
  return (
    <ChapterLayout
      imageComponent={<ChapterImageTwo />}
      imageWidth={240}
      chapterNumber={2}
      forwardPath="./chapter-three"
      backwardPath="./chapter-one"
    />
  );
}

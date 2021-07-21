import ChapterImageFive from "../../components/ChapterImages/ChapterImageFive";
import ChapterLayout from "../../components/ChapterLayout";

export default function ChapterFive() {
  return (
    <ChapterLayout
      imageComponent={<ChapterImageFive />}
      chapterNumber={5}
      forwardPath="./end"
      backwardPath="./chapter-four"
    />
  );
}

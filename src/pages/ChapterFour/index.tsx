import ChapterImageFour from "../../components/ChapterImages/ChapterImageFour";
import ChapterLayout from "../../components/ChapterLayout";

export default function ChapterFour() {
  return (
    <ChapterLayout
      imageComponent={<ChapterImageFour />}
      chapterNumber={4}
      forwardPath="./chapter-five"
      backwardPath="./chapter-three"
    />
  );
}

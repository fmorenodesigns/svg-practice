import ChapterImageOne from "../../components/ChapterImages/ChapterImageOne";
import ChapterLayout from "../../components/ChapterLayout";

export default function ChapterOne() {
  return (
    <ChapterLayout imageComponent={<ChapterImageOne />} chapterNumber={1} />
  );
}

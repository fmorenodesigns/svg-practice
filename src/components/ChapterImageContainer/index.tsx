import "./styles.scss";

interface Props {
  imageComponent: React.ReactNode;
  width?: number;
  height?: number;
}

export default function ChapterImageContainer({
  imageComponent,
  width = 280,
  height = 280,
}: Props) {
  return (
    <div className="image-container" style={{ maxWidth: width, height }}>
      {imageComponent}
    </div>
  );
}

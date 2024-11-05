import { Marmelad } from "next/font/google";

const marmelad = Marmelad({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

interface ContentHeadingProps {
  title: string;
  editable?: boolean;
}

const ContentHeading: React.FC<ContentHeadingProps> = ({
  title,
  editable = false,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2 className={`text-3xl font-extrabold mb-4 ${marmelad.className}`}>
            {title}
          </h2>
          {editable && <p>Volume</p>}
        </div>
        {editable && (
          <div className="flex gap-2 items-center">
            <button>Написать инструкцию</button>
            <button>Record voice</button>
          </div>
        )}
      </div>
      <hr className="p-3" />
    </>
  );
};

export default ContentHeading;

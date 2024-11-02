import React from "react";

interface SubQuestion {
  label: string;
  name: string;
}

interface MainQuestionProps {
  questionNumber: number;
  questionText: string;
  subQuestions: SubQuestion[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SlideQuestion: React.FC<MainQuestionProps> = ({
  questionNumber,
  questionText,
  subQuestions,
  handleInputChange,
}) => {
  return (
    <div className="my-8">
      <p className="text-xl font-semibold tracking-wide mt-14">
        {questionNumber}. {questionText}
      </p>
      <div className="flex flex-col gap-4 mt-10">
        {subQuestions.map((sub, index) => (
          <div key={index} className="flex gap-4 ml-7 w-full py-2">
            <p className="w-[150px]">{sub.label}</p>
            <div className="w-full max-w-[500px]">
              <input
                type="range"
                min={1}
                max={5}
                defaultValue={1}
                className="range [--range-shdw:#FF8D50]"
                step="1"
                name={sub.name}
                onChange={handleInputChange}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideQuestion;

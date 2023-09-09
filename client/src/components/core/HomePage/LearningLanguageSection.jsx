import React from "react";
import HighLightText from "../HomePage/HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className="mt-[120px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighLightText text={"learning any language"} />
        </div>
        <div className="text-center text-richblue-600 mx-auto text-base font-medium w-[60%]">
          Using spin making learning multiple language easy. with 20+ languages
          realstic voice-over, progress tracking custom shedule and more
        </div>

        <div className="flex -flex-row items-center justify-center mt-5">
          <img
            src={know_your_progress}
            alt="Know Your Progress"
            className="object-contain -mr-32"
          />
          <img
            src={compare_with_others}
            alt="Know Your Progress"
            className="object-contain"
          />
          <img
            src={plan_your_lesson}
            alt="Know Your Progress"
            className="object-contain -ml-36"
          />
        </div>
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;

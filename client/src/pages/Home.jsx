import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto max-w-maxContent flex flex-col w-11/12 items-center text-white justify-between">

        <Link to={"/signup"}>
          <div className="mx-auto group mt-16 p-1 rounded-full bg-richblue-800 font-bold text-richblue-200 transition-all duration-200 hover:scale-95 w-full">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblue-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"}/>
        </div>

        <div className="mt-4 w-[80%] text-center text-md font-bold text-richblack-300">
          with our online coding course, with our online coding course with our online coding course with our online coding course with our online coding course
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div>

        </div>

      </div>

      {/* Section 2 */}

      {/* Section 3 */}

      {/* Footer */}
    </div>
  );
};

export default Home;

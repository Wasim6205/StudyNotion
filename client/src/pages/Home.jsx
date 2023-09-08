import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

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

        <div className="shadow-blue-200 mx-3 my-12">
          <video
          muted
          loop
          autoPlay
          >
            <source src={Banner} type="video/mp4"/>
          </video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential "}/>
                with our online courses
              </div>
            }
            subheading={"with our online coding course, with our online coding course with our online coding course with our online coding course with our online coding course"}
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active:true,
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active:false,
              }
            }
            codeblock={`<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<link rel="icon" type="image/svg+xml" href="/vite.svg" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>StudyNotion</title>\n</head\n<body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>
            `}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential "}/>
                with our online courses
              </div>
            }
            subheading={"with our online coding course, with our online coding course with our online coding course with our online coding course with our online coding course"}
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active:true,
              }
            }
            ctabtn2={
              {
                btnText: "learn more",
                linkto: "/login",
                active:false,
              }
            }
            codeblock={`<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<link rel="icon" type="image/svg+xml" href="/vite.svg" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>StudyNotion</title>\n</head\n<body>\n<div id="root"></div>\n<script type="module" src="/src/main.jsx"></script>\n</body>\n</html>
            `}
            codeColor={"text-yellow-25"}
          />
        </div>

      </div>

      {/* Section 2 */}

      {/* Section 3 */}

      {/* Footer */}
    </div>
  );
};

export default Home;

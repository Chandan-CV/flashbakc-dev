import VideoStoryTile from "./VideoStoryTile";
import downarrow from "../assets/images/downarrow.svg";
import { NavLink } from "react-router-dom";

function Videos() {
  return (
    <div className=" pt-10 bg-texture bg-fixed h-full bg-cover ">
      <div className="flex  w-full ">
        <div className="flex flex-row ml-[20%] ">
          <span className="Actonia text-white mb-auto   text-4xl">through</span>
          <span className="text-[#ffca00] ml-2 Boldy text-5xl">Videos</span>
          <img src={downarrow} alt="" className="w-[4vh] ml-1 mt-5" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-3 sm:p-20 Boldy">
        {[1, 2, 3].map((item, index) => (
          <div>
            <VideoStoryTile name="MELANIE + ELROY ," location="Goa" />
          </div>
        ))}
      </div>
      {/* <div className="flex flex-row-reverse h-30 items-center justify-center"/> */}
      <div className="text-lg p-3 border-yellow-400 Boldy cursor-pointer pb-20 ml-3 rounded-lg font-bold uppercase text-white w-full justify-end flex">
        <NavLink to="/videostories" className="mr-[20%]">
          see more videos
        </NavLink>
      </div>
    </div>
  );
}
export default Videos;

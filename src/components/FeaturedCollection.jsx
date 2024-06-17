import { NavLink } from "react-router-dom";
import "../App.css";

function FeaturedCollection() {
  return (
    <div  className="bg-texture h-full bg-fixed" id="top">
      <div className="min-h-[70vh] bg-aboutus sm:grid sm:grid-cols-2 sm: gap-1 flex flex-col  text-white text-6xl Boldy pt-[13vh] pb-20  p-5 sm:pl-20">
        <div className=" h-[60vh]  flex flex-col sm:flex-row flex-nowrap">
          <img
            className="ml-auto"
            src="https://cdn.sanity.io/images/u8qx4arf/production/6c1d7502c2d96b086051b64cbe9f7e165a6cae7f-636x809.png"
            alt="hello"
          />
        </div>
        <div className="lg:text-5xl text-3xlBoldy  flex-col flex gap-1 pl-10 ">
          Behind
          <br />
          <div className=" flex-row flex ">
            <p className="Actonia lg:text-5xl text-3xlmb-auto lowercase ml-6 ">
              the
            </p>
            <p className="text-[#FFCA00] ml-2"> brand</p>
          </div>
          <div className="text-lg flex-col flex gap-10 pt-10 max-w-[80%]    ">
            <div className="Courier">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Justo laoreet sit amet cursus.Consequat interdum varius sit amet
                mattis vulputate enim nulla aliquet.
              </h1>{" "}
            </div>
            <div className="Courier">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
              laoreet sit amet cursus.Consequat interdum varius sit amet mattis
              vulputate enim nulla aliquet.
            </div>
          </div>
          <div className="text-lg   cursor-pointer w-fit">
            <NavLink to="/aboutus"> <button type="button" className ="border-yellow-300 border-2 h-8 w-[150px]  rounded-sm   hover:text-black hover:bg-yellow-300 hover:border-black transition-all ease-in duration-300">more about us</button></NavLink>
          </div>
        </div>
      </div>
      <div className="h-[80vh] mt-20 bg-newCollection flex flex-col justify-center items-center lg:text-5xl text-3xl Boldy bg-center bg-cover text-white" />
    </div>
  );
}
export default FeaturedCollection;

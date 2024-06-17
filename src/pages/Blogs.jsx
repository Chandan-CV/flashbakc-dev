import Header from "../components/Header";
import BlogTile from "../components/BlogTile";

function Blogs() {
  return (
    <div>
      <div
        className="h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/u8qx4arf/production/8b41a4ab1b603507b4a8e98a6b189ec8bd571575-2560x886.png')`,
        }}
      >
        <Header />
      </div>

      <div className="min-h-screen bg-[#322E2B] justify-center flex ">
        <div className="sm:w-2/3 mt-20 mb-20">
          <div className="flex sm:flex-row flex-col">
            <div className="flex-1 flex-col m-5">
              <div className="flex flex-row">
                <p className="text-white font-extrabold uppercase text-5xl">
                  Rahul
                </p>{" "}
                <p className="text-yellow-400 Actonia font-extrabold uppercase text-5xl">
                  &
                </p>
              </div>
              <p className="text-white font-extrabold uppercase text-5xl">
                Fabians
              </p>
              <div className="w-full flex justify-end">
                <p className="Actonia text-yellow-400 text-5xl">experiences</p>
              </div>
            </div>
            <div className="flex-1 m-5">
              <p className=" Courier text-[#D8CAB1]">
                <p className=" text-white">Rahul DSouza and Fabian Franco,</p>{" "}
                both seasoned photographers with a shared passion for capturing
                love stories, eagerly anticipate sharing their diverse
                experiences in photographing weddings of all kinds.
              </p>
            </div>
            <div className="flex-1 m-5">
              <p className=" Courier text-[#D8CAB1]">
                From the tears of joy exchanged in intimate backyard ceremonies
                to the exhilarating dance floors of grand destination
                extravaganzas, theyve experienced the full gamut of wedding
                celebrations.
              </p>
            </div>
          </div>
          <div className="p-5">
            <BlogTile
              imageUrl="https://images.unsplash.com/photo-1714733708319-67d8371be5b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              date="March 21, 2024"
              length="2 min read"
              location="Goa"
              tags="Wedding, Photography"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

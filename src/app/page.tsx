import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-screen bg-gradient-to-tr from-teal-400 to-blue-500 grid items-center content-center justify-items-center">
        <section className="flex flex-col rounded-xl content-center items-center bg-black w-[45%] gap-5 lg:flex-row">
          <img className="-mt-10 bg-cover w-48 h-48 transition-all duration-1000 ease-in-out rounded-full md:w-48 md:rounded-lg md:transition-all lg:-ml-10" src="/image.jpg"></img>
          <section className="justify-items-center content-center pt-5 pb-10 pl-2 pr-2 lg:pt-20 lg:pb-20 lg:justify-items-start">
            <h1 className="text-white font-bold text-lg">Jess Wilson</h1>
            <p className="text-gray-300 text-base">UX Engineer</p>
            <p className=" text-gray-500 text-sm md:justify-self-center">Empowering users through captivating interfaces, turning ideas into pixel-perfect realities</p>
            <section className="flex flex-row gap-2 pt-5">
              <button className="pl-5 pr-5 rounded-lg bg-black border-2 border-white text-white">Profile</button>
              <button className="pl-5 pr-5 rounded-lg bg-white border-2 border-white text-black">Follow</button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}

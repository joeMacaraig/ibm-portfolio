"use client";
import { recommendations as defaultRecommendations } from "@/lib/data";
import { ChangeEvent, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

/*

Add new reccommendation: 

Collaborating with Joseph Bryan has been a rewarding experience. 
He possesses extensive knowledge and consistently goes above and beyond to ensure project success. 
I would eagerly seek his expertise for any future endeavors requiring web development skills.

*/

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState(
    defaultRecommendations
  );
  const [newRec, setRec] = useState({ name: "", message: "" });
  const [pop, setPop] = useState(false);

  const handleNewRec = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.name === "name") {
      setRec((prev) => ({ ...prev, name: event.target.value }));
    } else if (event.target.name === "message") {
      setRec((prev) => ({ ...prev, message: event.target.value }));
    }
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newRec.message && newRec.name) {
      setRecommendations((prev) => [...prev, newRec]);
      setRec({ name: "", message: "" });
    }
    setPop(true);
  };

  const toppy = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section id="recom" className="flex flex-col p-8 relative">
      <div className="my-8">
        <h1 className="text-5xl text-[#7600bc] font-medium my-8">
          Recommendations
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recommendations.map((item) => (
            <div className="p-8 border border-black rounded-xl">
              <h1 className="italic text-justify">" {item.message} "</h1>
              {item.name && <p className="text-right"> ~ {item.name}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl">Leave a Recommendations</h1>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            className="p-4 border rounded"
            name="name"
            placeholder="Name (Optional)"
            onChange={handleNewRec}
          />
          <textarea
            className="p-4 border rounded"
            placeholder="Message"
            name="message"
            rows={8}
            onChange={handleNewRec}
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="border rounded bg-[#7600bc] text-white px-8 py-2 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={toppy}
        className="absolute bottom-5 right-5 p-4 bg-[#7600bc] rounded-full text-white z-20"
      >
        <MdOutlineArrowUpward size={30} />
      </button>
      {pop && (
        <div className="absolute bg-white/25 m-auto left-0 right-0 z-10 h-full w-full flex items-center justify-center">
          <div className="w-[300px] h-[300px] border border-[#7600bc] bg-purple-300 rounded-lg flex flex-col justify-center items-center gap-4 p-4">
            <h1 className="text-4xl">😊</h1>
            <p className="text-center font-medium">
              Thanks for leaving a reccomendation!
            </p>
            <button
              className="border border-[#7600bc] px-6 py-2 rounded-lg hover:bg-[#7600bc]/50 duration-300 hover:text-white"
              onClick={() => setPop(!pop)}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-4">
        {/* Image */}
        <div className="w-3/4 h-3/4 p-4 relative">
          <Image
            src="/skyrim.png"
            width={100}
            height={100}
            layout="responsive"
            alt="jane-doe-gif"
            className="rounded-xl"
          />
        </div>
        {/* Text */}
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-5xl mb-8 text-[#7600bc]">
              Hi, I'm Joseph Bryan! 👋🏽
            </h1>
            <p className="text-xl text-justify">
              {" "}
              I am a full stack developer. I graduated college with a bachelor's
              degree in computer science. I am currently working towards
              certificates like IBM full stack development certificate and AWS
              Cloud Practitioner. I have worked with applications and
              microservices depoloyed on Vercel and AWS Cloud. Fun Fact, my
              favorite video game is Skyrim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { skills } from "@/lib/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl text-[#7600bc] font-medium my-8">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {skills.map((item) => (
            <div className="border grid  place-items-center shadow-xl w-[250px] h-[250px] p-4">
              <div className="relative w-[80px] object-contain">
                <Image
                  src={item.image}
                  alt={`${item.title} photo`}
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <div className="font-medium">{item.title}</div>
              <div className="font-medium text-lg">{item.exp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

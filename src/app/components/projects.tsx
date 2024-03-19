import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projectss" className="p-8">
      <div>
        <h1 className="text-5xl text-[#7600bc] font-medium">Projects</h1>
        <div className="divide-y-2 p-10">
          {projects.map((item) => (
            <div>
              <div className="text-2xl font-bold py-4">{item.title}</div>
              <div className="p-4"> • {item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const links = [
  { name: "About Me", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Recommendations", hash: "#recom" },
] as const;

export const skills = [
  { image: "/html.png", title: "HTML", exp: "2 years" },
  { image: "/js.jpeg", title: "Javascript", exp: "1.5 years" },
  { image: "/react.png", title: "React", exp: "1 year" },
  { image: "/node.png", title: "Node.JS", exp: "1 year" },
  { image: "/css.png", title: "CSS", exp: "2 year" },
] as const;

export const projects = [
  {
    title: "Chatbot",
    description:
      "Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, Javascript, and IBM Watson Assistant",
  },
  {
    title: "Sentiment Analyzer",
    description:
      "Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU",
  },
  {
    title: "Fashion Website",
    description:
      "Created a styled mutli-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway",
  },
] as const;

export const recommendations = [
  {
    name: "",
    message:
      "Joseph Bryan is a very quick learner and quickly grasps key concepts of Web development. He got a great attitude & he is an excellent team player. He has a curious mind and asks the right question. He takes initiative within a team and has potentials to lead the team.",
  },
  {
    name: "",
    message:
      "Working with Joseph Bryan has been an awesome experience. He is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need him expertise I would definitely want to work with him again.",
  },
  {
    name: "",
    message:
      "I had worked along with Joseph Bryan during the initial phase of our venture which needed Web development. He is a committed resource who has in depth knowledge about the domain. He will be an asset for any organization! ",
  },
];

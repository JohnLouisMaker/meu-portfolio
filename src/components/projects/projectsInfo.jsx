import TaskZenBanner from "../../assets/taskzen.png";
import EyeOnTheSky from "../../assets/eots.png";
import CinezaBanner from "../../assets/cineza.png";

export const projects = [
  {
    id: "taskzen",
    img: TaskZenBanner,
    title: "TaskZen",
    description: "ToDo List com login, feita com React e JSON Server.",
    navigate: "/taskZen",
  },
  {
    id: "eye-on-the-sky",
    img: EyeOnTheSky,
    title: "Eye on the Sky",
    description: "Usa API da NASA para exibir foto e info diária.",
    navigate: "/eye-on-the-sky",
  },
  {
    id: "cineza",
    img: CinezaBanner,
    title: "Cineza",
    description: "Site de filmes/séries com API do TMDB.",
    navigate: "/cineza",
  },
];

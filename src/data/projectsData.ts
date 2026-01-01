import Avatar01 from "@/assets/avatars/Avatar01.jpg";
import Avatar02 from "@/assets/avatars/Avatar02.jpg";
import Avatar03 from "@/assets/avatars/Avatar03.jpg";
import Avatar04 from "@/assets/avatars/Avatar04.jpg";
import Avatar05 from "@/assets/avatars/Avatar05.jpg";
import Picture02 from "@/assets/image/Picture02.png";
import Picture03 from "@/assets/image/Picture03.png";
import Picture04 from "@/assets/image/Picture04.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  avatars: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    image: Picture02,
    avatars: [Avatar01, Avatar02, Avatar03, Avatar04],
  },
  {
    id: 2,
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    image: Picture03,
    avatars: [Avatar02, Avatar03, Avatar04, Avatar05],
  },
  {
    id: 3,
    title: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    image: Picture04,
    avatars: [Avatar05, Avatar04, Avatar03, Avatar02],
  },
];

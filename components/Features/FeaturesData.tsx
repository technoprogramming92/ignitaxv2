import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src="/images/tax.png" height={70} width={71} alt="taxation"/>
    ),
    title: "Taxation Consulting",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 2,
    icon: (
      <Image src="/images/web.png" height={80} width={80} alt="taxation"/>
    ),
    title: "Web Development",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 3,
    icon: (
      <Image src="/images/IT.png" height={80} width={80} alt="taxation"/>
    ),
    title: "IT Services",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 4,
    icon: (
      <Image src="/images/graphic.png" height={80} width={80} alt="taxation"/>
    ),
    title: "Graphics Designing",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 5,
    icon: (
      <Image src="/images/content.png" height={80} width={80} alt="taxation"/>
    ),
    title: "Content Writing",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 6,
    icon: (
      <Image src="/images/camera.png" height={80} width={80} alt="taxation"/>
    ),
    title: "Photography",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;

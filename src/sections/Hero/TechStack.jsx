import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
} from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-5 text-4xl text-slate-400">
      <FaHtml5 />
      <FaCss3Alt />
      <FaJs />
      <FaReact />
      <FaLaravel />
    </div>
  );
};

export default TechStack;
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si"

const skills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
]

export default function TechMarquee() {
  const repeatedSkills = [...skills, ...skills]

  return (
    <div className="tech-marquee">
      <div className="tech-marquee-track">
        {repeatedSkills.map((skill, index) => (
          <div className="tech-pill" key={`${skill.name}-${index}`}>
            <span className="tech-icon" >
                
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
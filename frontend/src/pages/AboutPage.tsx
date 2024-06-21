import { Link } from "react-router-dom";
import profileImg from "../assets/profilePic.jpg";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { PiNoteFill } from "react-icons/pi";

export default function AboutPage() {
  return (
    <div className="mx-auto h-full max-w-xl space-y-5">
      <img
        src={profileImg}
        alt="profile"
        className="mx-auto aspect-square max-w-32 rounded-full"
      />
      <p className="leading-7">
        I'm a student currently pursuing a degree in Computer Science, with a
        strong passion for web development. Over the past few years, I've
        focused my studies and projects on mastering front-end technologies,
        particularly React.js.
      </p>
      <p className="leading-7">
        In addition to my academic work, I have had the opportunity to work on
        several projects as a React Developer, and also as a Full Stack
        Developer. These projects have given me hands-on experience with both
        front-end and back-end technologies. As a Full Stack Developer, I've
        worked with Node.js, Nest.js, and Java to create robust and scalable
        applications. These experiences have not only improved my coding skills
        but also enhanced my ability to manage and deliver complete projects.
      </p>
      <p className="leading-7">
        I'm now eager to take the next step in my career by finding a job as a
        React or Full Stack Developer. I'm particularly interested in positions
        that offer opportunities for continuous learning and growth, where I can
        contribute to innovative projects and work alongside experienced
        professionals. My goal is to apply my knowledge, improve my skills, and
        become an integral part of a dynamic development team.
      </p>
      <p className="mx-auto w-fit text-xl">My socials</p>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <Link
          to={"https://github.com/Pasichnichenkoilya"}
          className="flex size-16 items-center justify-center rounded-full text-5xl hover:bg-slate-700"
        >
          <FaGithub />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/illia-pasichnichenko-5b3b91282/"}
          className="flex size-16 items-center justify-center rounded-full text-5xl hover:bg-slate-700"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.work.ua/resumes/10715826/"}
          className="flex size-16 items-center justify-center rounded-full text-5xl hover:bg-slate-700"
        >
          <PiNoteFill />
        </Link>
        <Link
          to={"https://t.me/pasichnichenko_ilya"}
          className="flex size-16 items-center justify-center rounded-full text-5xl hover:bg-slate-700"
        >
          <FaTelegram />
        </Link>
      </div>
    </div>
  );
}

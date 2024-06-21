import React from "react";
import { ProjectCard } from "./ProjectCard";
import WordPullUp from "./ui/WordPullUp";
import { project1Icons, project2Icons, project3Icons } from "@/lib";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center w-full"
    >
      <div>
        <WordPullUp
          className="text-4xl  font-bold tracking-[-0.02em] md:text-5xl md:leading-[5rem] text-blue-500 dark:text-blue-500 capitalize p-2"
          words="Discover  My  Projects"
        />
      </div>

      <div
        className="flex flex-wrap w-full justify-center gap-x-[10rem]
      relative"
      >
        <ProjectCard
          Description="Developed a full-stack clone of Thread, replicating key features of the popular social media platform"
          GithubLink="https://github.com/Karansenpai/Thread_clone"
          LiveLink="https://karansenpai-app.onrender.com/auth"
          Photo="/SocialMedia.png"
          Title="Social Media Platform"
          projectIcons={project1Icons}
        />
        <ProjectCard
          Description="Designed and developed a comprehensive web application to cater to the
diverse needs of college students, faculty, and staﬀ"
          GithubLink="https://github.com/Karansenpai/One4all"
          Photo="/One4all.png"
          Title="College Erp System One 4 All"
          projectIcons={project2Icons}
        />
        <ProjectCard
          Description="To Streamline operations for restaurants by providing a management website "
          GithubLink="https://github.com/Karansenpai/VenuVista.git"
          LiveLink="https://hackout-team-void-frontend.onrender.com/"
          Photo="/VenueVista.png"
          Title="Venue Vista"
          projectIcons={project3Icons}
        />
      </div>
    </div>
  );
};

export default Projects;

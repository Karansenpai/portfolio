import React from "react";
import { ProjectCard } from "./ProjectCard";
import WordPullUp from "./ui/WordPullUp";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-[4rem]">
      <div>
        <WordPullUp
          className="text-4xl  font-bold tracking-[-0.02em] md:text-5xl md:leading-[5rem] text-blue-500 dark:text-blue-500 capitalize p-2"
          words="Discover  My  Projects"
        />
      </div>

      <div className="flex flex-wrap w-full justify-center gap-x-[20rem]">
        <ProjectCard
          Description="Developed a full-stack clone of Thread, replicating key features of the popular social media platform"
          GithubLink="https://github.com/Karansenpai/Thread_clone"
          LiveLink="https://karansenpai-app.onrender.com/auth"
          Photo="/SocialMedia.png"
          Title="Social Media Platform"
        />
        <ProjectCard
          Description="Designed and developed a comprehensive web application to cater to the
diverse needs of college students, faculty, and staﬀ"
          GithubLink="https://github.com/Karansenpai/One4all"
          //   LiveLink="https://karansenpai-app.onrender.com/auth"
          Photo="/One4all.png"
          Title="College Erp System One 4 All"
        />
        <ProjectCard
          Description="To Streamline operations for restaurants by providing a management website "
          GithubLink="https://github.com/Karansenpai/VenuVista.git"
          LiveLink="https://hackout-team-void-frontend.onrender.com/"
          Photo="/VenueVista.png"
          Title="Venue Vista"
        />
       
      </div>
    </div>
  );
};

export default Projects;

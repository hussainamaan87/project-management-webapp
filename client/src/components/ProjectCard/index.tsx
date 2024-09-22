import { Project } from "@/state/api";
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for images

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="mb-4 rounded-md bg-white shadow dark:bg-dark-secondary">
      {/* Display image if available */}
      {project.image && (
        <Image
          src={`https://pm-s3-images-x.s3.ap-south-1.amazonaws.com/${project.image}`}
          alt={project.name}
          width={400}
          height={200}
          className="h-auto w-full rounded-t-md"
        />
      )}
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            {/* Tags if available */}
            {project.tags && project.tags.length > 0 && (
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          </div>
        </div>

        {/* Project Title and Date Info */}
        <div className="my-3 flex justify-between">
          <h4 className="text-md font-bold dark:text-white">{project.name}</h4>
          {project.priority && (
            <div className="text-xs font-semibold dark:text-white">
              {project.priority} Priority
            </div>
          )}
        </div>

        {/* Dates */}
        <div className="text-xs text-gray-500 dark:text-neutral-500">
          {project.startDate && <span>{project.startDate} - </span>}
          {project.endDate && <span>{project.endDate}</span>}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-neutral-500">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

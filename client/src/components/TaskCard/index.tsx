import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const PriorityTag = ({ priority }: { priority: string }) => (
  <div
    className={`rounded-full px-2 py-1 text-xs font-semibold ${
      priority === "Urgent"
        ? "bg-red-200 text-red-700"
        : priority === "High"
        ? "bg-yellow-200 text-yellow-700"
        : priority === "Medium"
        ? "bg-green-200 text-green-700"
        : priority === "Low"
        ? "bg-blue-200 text-blue-700"
        : "bg-gray-200 text-gray-700"
    }`}
  >
    {priority}
  </div>
);

const TaskCard = ({ task }: Props) => {
  const taskTagsSplit = task.tags ? task.tags.split(",") : [];
  const formattedStartDate = task.startDate
    ? format(new Date(task.startDate), "P")
    : "";
  const formattedDueDate = task.dueDate
    ? format(new Date(task.dueDate), "P")
    : "";
  const numberOfComments = (task.comments && task.comments.length) || 0;

  return (
    <div className="mb-4 rounded-md bg-white shadow dark:bg-dark-secondary p-4">
      {/* Attachments */}
      {task.attachments && task.attachments.length > 0 && (
        <div className="mb-4">
          <strong className="text-lg">Attachments</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {task.attachments.map((attachment, index) => (
              <Image
                key={index}
                src={`/${attachment.fileURL}`}
                alt={attachment.fileName}
                width={200}
                height={100}
                className="rounded-md"
              />
            ))}
          </div>
        </div>
      )}

      {/* Priority and Tags */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {task.priority && <PriorityTag priority={task.priority} />}
          {taskTagsSplit.map((tag) => (
            <div key={tag} className="rounded-full bg-blue-100 px-2 py-1 text-xs">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center text-gray-500 dark:text-neutral-500">
          <span className="text-sm dark:text-neutral-400">{numberOfComments} Comments</span>
        </div>
      </div>

      {/* Title and Points */}
      <div className="mb-4">
        <h4 className="text-lg font-bold dark:text-white">{task.title}</h4>
        {typeof task.points === "number" && (
          <div className="text-sm font-semibold dark:text-white">{task.points} pts</div>
        )}
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-500 dark:text-neutral-500 mb-4">
        {formattedStartDate && <span>{formattedStartDate} - </span>}
        {formattedDueDate && <span>{formattedDueDate}</span>}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-neutral-500 mb-4">
        {task.description || "No description provided"}
      </p>

      {/* Separator */}
      <div className="border-t border-gray-200 dark:border-stroke-dark mb-4" />

      {/* Assignee and Author */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-[6px] overflow-hidden">
          {task.assignee && (
            <Image
              key={task.assignee.userId}
              src={`/${task.assignee.profilePictureUrl!}`}
              alt={task.assignee.username}
              width={30}
              height={30}
              className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
            />
          )}
          {task.author && (
            <Image
              key={task.author.userId}
              src={`/${task.author.profilePictureUrl!}`}
              alt={task.author.username}
              width={30}
              height={30}
              className="h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
            />
          )}
        </div>
        <div className="flex items-center text-gray-500 dark:text-neutral-500">
          <span className="text-sm dark:text-neutral-400">{numberOfComments} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

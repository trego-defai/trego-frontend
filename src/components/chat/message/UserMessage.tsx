"use client";

import { MessageMarkdown } from "./MessageMarkdown";

interface UserMessageProps {
  content: string;
}

const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <div className="flex justify-end mb-4 px-4">
      <div className=" max-w-[60%] bg-muted/50 rounded-2xl rounded-br-md py-3 px-4">
        <MessageMarkdown>{content}</MessageMarkdown>
      </div>
    </div>
  );
};

export default UserMessage;

"use client";

import { TypewriterText } from "./TypewriterText";

interface BotMessageProps {
  content: string;
  isLatest?: boolean;
}

function BotMessage({ content, isLatest = false }: BotMessageProps) {
  return (
    <div className="flex flex-col gap-2 mb-4 px-4 ">
      <div className="rounded-2xl rounded-tl-md py-3 px-4 max-w-[80%]">
        <TypewriterText isActive={isLatest}>{content}</TypewriterText>
      </div>
    </div>
  );
}

export default BotMessage;

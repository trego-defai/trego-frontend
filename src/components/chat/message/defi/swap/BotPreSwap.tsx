"use client";

import { IMessage } from "@/types/chat";
import { SwapEstimateItem } from "@/types/swap";
import { MessageMarkdown } from "../../MessageMarkdown";
import { PreSwap } from "./PreSwap";

export interface BotPreSwapProps {
  message: IMessage;
  isLoading?: boolean;
  isLatestMessage?: boolean;
}

const BotPreSwap = ({ message, isLoading }: BotPreSwapProps) => (
  <div className="flex flex-col gap-2 mb-4 px-4">
    <div className="rounded-2xl rounded-tl-md py-3 px-4 max-w-[80%]">
      <MessageMarkdown>{message.content}</MessageMarkdown>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {message?.data?.map((item: SwapEstimateItem, index: number) => (
        <div key={`estimate-${index}`}>
          <PreSwap item={item} isLoading={isLoading} isBestOption={index === 0} />
        </div>
      ))}
    </div>
  </div>
);

export default BotPreSwap;

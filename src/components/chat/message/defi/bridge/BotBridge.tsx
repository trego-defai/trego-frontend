"use client";

import { IMessage } from "@/types/chat";
import { BridgeQuoteData } from "@/types/bridge";
import { MessageMarkdown } from "../../MessageMarkdown";
import { BridgeConfirmation } from "./BridgeConfirmation";

export interface BotBridgeProps {
  message: IMessage;
  isLoading?: boolean;
  isLatestMessage?: boolean;
}

const BotBridge = ({ message, isLoading }: BotBridgeProps) => (
  <div className="flex flex-col gap-2 mb-4 px-4">
    <div className="rounded-2xl rounded-tl-md py-3 px-4 max-w-[80%]">
      <MessageMarkdown>{message.content}</MessageMarkdown>
    </div>
    {message?.data && (
      <div className="flex justify-start">
        <BridgeConfirmation bridgeData={message.data as BridgeQuoteData} isLoading={isLoading} />
      </div>
    )}
  </div>
);

export default BotBridge;

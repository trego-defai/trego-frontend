import { ACTION_TYPE, IMessage } from "@/types/chat";
import BotMessage from "./BotMessage";
import BotPreSwap from "./BotPreSwap";
import UserMessage from "./UserMessage";

interface MessageTypeProps {
  message: IMessage;
  isLoading?: boolean;
  isLatestMessage?: boolean;
}

export function MessageType({ message, isLoading, isLatestMessage }: MessageTypeProps) {
  const messageComponents = {
    [ACTION_TYPE.UNKNOWN]: <BotMessage content={message.content} />,
    [ACTION_TYPE.USER]: <UserMessage content={message.content} />,
    [ACTION_TYPE.STAKING]: <BotMessage content={message.content} />,
    [ACTION_TYPE.UNSTAKING]: <BotMessage content={message.content} />,
    [ACTION_TYPE.PRE_SWAP]: <BotPreSwap message={message} isLatestMessage={isLatestMessage} />,

    // [ACTION_TYPE.BRIDGE]: (
    //   <BotBridge message={message} isLoading={isLoading} isLatestMessage={isLatestMessage} />
    // ),
    // [ACTION_TYPE.LIQUIDITY]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.BORROW]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.SUPPLY]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.REPAY]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.WITHDRAW]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.CLAIM_REWARD]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.PLACE_LIMIT_ORDER]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.PLACE_MARKET_ORDER]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.REMOVE_LIQUIDITY]: <BotMessage message={message} isLoading={isLoading} />,
    // [ACTION_TYPE.HELP]: <BotMessage message={message} isLoading={isLoading} />,
  };

  return messageComponents[(message.type as keyof typeof messageComponents) || ACTION_TYPE.UNKNOWN];
}

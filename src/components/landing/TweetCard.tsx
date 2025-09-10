import { Tweet } from "@/types/x.type";
import { HeartIcon, RetweetIcon, XIcon } from "../ui/icons";

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <div className="mx-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 p-6 w-96 flex-shrink-0 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-start space-x-4">
        <Avatar handle={tweet.handle} />
        <div className="flex-1 min-w-0">
          <TweetHeader tweet={tweet} />
          <TweetContent content={tweet.content} />
          <TweetStats tweet={tweet} />
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ handle }: { handle: string }) => (
  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/60 rounded-full flex items-center justify-center shadow-lg ring-2 ring-primary/20">
    <span className="text-primary-foreground font-bold text-base">{handle.charAt(0)}</span>
  </div>
);

const TweetHeader = ({ tweet }: { tweet: Tweet }) => (
  <div>
    <div className="flex items-center space-x-2 mb-1">
      <h4 className="font-bold text-card-foreground text-base truncate">{tweet.handle}</h4>
      <VerifiedBadge />
      <span className="text-muted-foreground text-sm font-medium">{tweet.username}</span>
    </div>
    <p className="text-muted-foreground text-xs mb-3">{tweet.timestamp}</p>
  </div>
);

const VerifiedBadge = () => (
  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TweetContent = ({ content }: { content: string }) => (
  <p className="text-card-foreground leading-relaxed text-sm mb-4 line-clamp-3">{content}</p>
);

const TweetStats = ({ tweet }: { tweet: Tweet }) => (
  <div className="flex items-center justify-between pt-3 border-t border-border/30">
    <div className="flex items-center space-x-6">
      <StatButton icon={<HeartIcon />} count={tweet.likes} hoverColor="red" />
      <StatButton icon={<RetweetIcon />} count={tweet.retweets} hoverColor="green" />
    </div>
    <div className="text-muted-foreground/50">
      <XIcon className="w-4 h-4" />
    </div>
  </div>
);

const StatButton = ({
  icon,
  count,
  hoverColor,
}: {
  icon: React.ReactNode;
  count: number;
  hoverColor: "red" | "green";
}) => (
  <div
    className={`flex items-center space-x-2 text-muted-foreground hover:text-${hoverColor}-500 transition-colors cursor-pointer group/stat`}
  >
    <div
      className={`p-1.5 rounded-full group-hover/stat:bg-${hoverColor}-50 group-hover/stat:dark:bg-${hoverColor}-950/20 transition-colors`}
    >
      {icon}
    </div>
    <span className="text-sm font-medium">{count.toLocaleString()}</span>
  </div>
);

export default TweetCard;

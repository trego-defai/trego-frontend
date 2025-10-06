interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
  disabled?: boolean;
}

const SUGGESTIONS = ["Stake 0.001 APT", "Unstake 0.001 APT", "Swap 0.01 APT to USDT"];

function ChatSuggestions({ onSuggestionClick, disabled }: ChatSuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6 max-w-2xl">
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
          className="px-4 py-2 rounded-full cursor-pointer bg-muted hover:bg-muted/80 text-sm text-foreground transition-colors border border-border"
          disabled={disabled}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}

export default ChatSuggestions;

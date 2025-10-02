'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Navigation03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface ChatInputProps {
  onSend: (message: string) => void;
  value: string;
  setValue: (value: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

function ChatInput({
  onSend,
  value,
  setValue,
  isLoading,
  disabled,
}: ChatInputProps) {
  function handleSubmit(event?: React.FormEvent | React.KeyboardEvent) {
    if (event) event.preventDefault?.();
    const message = value.trim();
    if (!message || isLoading || disabled) return;
    onSend(message);
    setValue('');
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.shiftKey && !disabled) {
      handleSubmit(event);
    }
  }

  return (
    <form
      className={cn('p-4 max-md:p-3 w-full')}
      onSubmit={handleSubmit}
      autoComplete="off"
      role="search"
    >
      <div className="relative w-full">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type your message..."
          className="w-full p-[16px] pr-[56px] h-[44px] max-md:h-[40px] max-md:p-[12px] max-md:pr-[48px] rounded-full bg-field-00 focus:border-blue-base"
          disabled={isLoading || disabled}
        />

        <div className="absolute right-4 max-md:right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {/* <Button
            type="button"
            size="icon"
            variant="ghost"
            className="flex items-center gap-2 text-text-secondary"
            onClick={handleAttachmentClick}
            aria-label="Attach file"
            tabIndex={-1}
          >
            <HugeiconsIcon icon={AttachmentIcon} className="w-4 h-4" />
          </Button> */}
          <Button
            type="submit"
            color="neutral"
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md size-6 max-md:size-5"
            disabled={disabled}
            aria-label="Send message"
          >
            <HugeiconsIcon icon={Navigation03Icon} className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ChatInput;

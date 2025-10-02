"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AVAILABLE_ASSISTANTS } from "@/lib/constants/assistants";
import { cn } from "@/lib/utils";
import type { AssistantInfo, AvailableAssistant } from "@/types/chat";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

interface AIAssistantModalProps {
  currentAssistant: AssistantInfo;
  onAssistantSelect: (assistant: AssistantInfo) => void;
  children: React.ReactNode;
}

export function AIAssistantModal({
  currentAssistant,
  onAssistantSelect,
  children,
}: AIAssistantModalProps) {
  const [selectedAssistant, setSelectedAssistant] = useState<AvailableAssistant>(
    AVAILABLE_ASSISTANTS.find((a) => a.id === currentAssistant.id) || AVAILABLE_ASSISTANTS[0]
  );

  function handleSelectAssistant(assistant: AvailableAssistant) {
    setSelectedAssistant(assistant);
  }

  function handleConfirmSelection() {
    if (!selectedAssistant) return;
    onAssistantSelect({
      id: selectedAssistant.id,
      name: selectedAssistant.name,
      logo: selectedAssistant.icon,
      description: selectedAssistant.description,
      capabilities: selectedAssistant.capabilities,
      color: selectedAssistant.color,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Select AI Assistant</DialogTitle>
          <DialogDescription>
            Choose the AI assistant that best fits your DeFi needs.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-3">
            {AVAILABLE_ASSISTANTS.map((assistant) => (
              <div
                key={assistant.id}
                className={cn(
                  "relative flex items-start space-x-4 p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-muted/50",
                  selectedAssistant?.id === assistant.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
                onClick={() => handleSelectAssistant(assistant)}
                tabIndex={0}
                role="button"
                aria-pressed={selectedAssistant?.id === assistant.id}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl",
                    assistant.color
                  )}
                  aria-label={`${assistant.name} icon`}
                >
                  {assistant.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">{assistant.name}</h3>
                    {selectedAssistant?.id === assistant.id && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{assistant.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {assistant.capabilities.map((capability, idx) => (
                      <span
                        key={capability}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-2 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleConfirmSelection}
            disabled={!selectedAssistant}
            className="min-w-[120px]"
          >
            Select Assistant
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface AssistantSelectorProps {
  currentAssistant: AssistantInfo;
  onAssistantSelect: (assistant: AssistantInfo) => void;
}

export function AssistantSelector({ currentAssistant, onAssistantSelect }: AssistantSelectorProps) {
  return (
    <AIAssistantModal currentAssistant={currentAssistant} onAssistantSelect={onAssistantSelect}>
      <Button variant="ghost" size="sm" className="h-auto p-2 hover:bg-muted/50">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs",
              currentAssistant.color || "bg-primary"
            )}
            aria-label={`${currentAssistant.name} icon`}
          >
            {currentAssistant.logo || currentAssistant.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-foreground">{currentAssistant.name}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </Button>
    </AIAssistantModal>
  );
}

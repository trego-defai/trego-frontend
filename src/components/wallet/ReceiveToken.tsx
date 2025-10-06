"use client";

import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface ReceiveTokenProps {
  address: string;
}

export function ReceiveToken({ address }: ReceiveTokenProps) {
  return (
    <Card className="p-6 flex-shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <Download className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Receive</h3>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-muted/30 rounded-lg flex items-center justify-center">
          <QRCodeSVG value={address} size={140} />
        </div>
        <p className="text-xs text-center text-muted-foreground">Scan to receive tokens</p>
      </div>
    </Card>
  );
}

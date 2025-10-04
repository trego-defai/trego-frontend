"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownCircle, ArrowUpCircle, Clock, XCircle } from "lucide-react";
import { useState } from "react";

interface OrdersTabProps {
  className?: string;
}

type OrderStatus = "open" | "waiting" | "cancel" | "close long" | "close short";

interface Order {
  id: string;
  pair: string;
  side: "buy" | "sell";
  type: "limit" | "market";
  size: number;
  price: number;
  status: OrderStatus;
  pnl?: number; // P&L in USD, optional for open orders
}

const STATUS_ICON_MAP: Record<OrderStatus, React.ReactNode> = {
  open: <Clock className="w-4 h-4 mr-1" />,
  waiting: <Clock className="w-4 h-4 mr-1 animate-pulse" />,
  cancel: <XCircle className="w-4 h-4 mr-1" />,
  "close long": <ArrowUpCircle className="w-4 h-4 mr-1 text-green-400" />,
  "close short": <ArrowDownCircle className="w-4 h-4 mr-1 text-red-400" />,
};

const STATUS_LABEL_MAP: Record<OrderStatus, string> = {
  open: "Open",
  waiting: "Waiting",
  cancel: "Cancelled",
  "close long": "Close Long",
  "close short": "Close Short",
};

const STATUS_CLASS_MAP: Record<OrderStatus, string> = {
  open: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  waiting: "bg-yellow-600/20 text-yellow-400 border-yellow-500/30",
  cancel: "bg-gray-600/20 text-gray-400 border-gray-500/30",
  "close long": "bg-green-700/20 text-green-300 border-green-500/30",
  "close short": "bg-red-700/20 text-red-300 border-red-500/30",
};

const SIDE_CLASS_MAP: Record<Order["side"], string> = {
  buy: "bg-green-600/20 text-green-400 border-green-500/30",
  sell: "bg-red-600/20 text-red-400 border-red-500/30",
};

function formatPrice(price: number) {
  return `$${price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatPnl(pnl: number | undefined) {
  if (typeof pnl !== "number") return "--";
  const sign = pnl > 0 ? "+" : "";
  return `${sign}$${Math.abs(pnl).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

interface OrderItemProps {
  order: Order;
  onCancel: (id: string) => void;
}

function OrderItem({ order, onCancel }: OrderItemProps) {
  const isCancellable = order.status === "open" || order.status === "waiting";
  const isBuy = order.side === "buy";
  const hasPnl = order.status === "close long" || order.status === "close short" || typeof order.pnl === "number";

  return (
    <div
      className={cn(
        "bg-gradient-to-br m-1 from-gray-900/80 to-gray-800/60 border border-gray-800 rounded-2xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-500/40 group",
        order.status === "cancel" && "opacity-60",
      )}
      tabIndex={0}
      aria-label={`Order ${order.pair} ${order.side} ${order.type} ${STATUS_LABEL_MAP[order.status]}`}
    >
      <div>
        <div className="flex items-center gap-2 ">
          <span className="text-white font-bold text-base tracking-tight">{order.pair}</span>
          <Badge
            variant="outline"
            className={cn(
              "px-2 py-0.5 rounded text-xs font-semibold border uppercase tracking-wide",
              SIDE_CLASS_MAP[order.side],
            )}
          >
            {order.side}
          </Badge>
          <Badge
            variant="secondary"
            className="ml-1 px-2 py-0.5 rounded text-xs font-medium border bg-gray-900/40 text-gray-300 border-gray-700/40 capitalize"
          >
            {order.type}
          </Badge>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border",
              STATUS_CLASS_MAP[order.status],
            )}
          >
            {STATUS_ICON_MAP[order.status]}
            {STATUS_LABEL_MAP[order.status]}
          </span>
          <Button
            onClick={() => onCancel(order.id)}
            variant="ghost"
            size="sm"
            className={cn(
              "text-red-400 hover:text-red-300 hover:bg-red-600/10 text-xs px-2 py-1 font-semibold transition-colors",
              !isCancellable && "opacity-50 pointer-events-none",
            )}
            disabled={!isCancellable}
            aria-disabled={!isCancellable}
            tabIndex={isCancellable ? 0 : -1}
          >
            Cancel
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-gray-400 text-xs mb-0.5">Size</p>
          <p className="text-white font-semibold flex items-center gap-1">
            {order.size}
            <span
              className={cn(
                "text-[10px] px-1 py-0.5 rounded bg-gray-700/40 text-gray-300 font-medium",
                isBuy ? "bg-green-700/20 text-green-300" : "bg-red-700/20 text-red-300",
              )}
            >
              {isBuy ? "Buy" : "Sell"}
            </span>
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-0.5">Price</p>
          <p className="text-white font-semibold">{formatPrice(order.price)}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-0.5">P&amp;L</p>
          <p
            className={cn(
              "font-semibold",
              typeof order.pnl === "number"
                ? order.pnl > 0
                  ? "text-green-400"
                  : order.pnl < 0
                    ? "text-red-400"
                    : "text-gray-300"
                : "text-gray-400",
            )}
          >
            {hasPnl ? formatPnl(order.pnl) : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}

export function OrdersTab({ className }: OrdersTabProps) {
  // Mock data
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      pair: "BTC/USDT",
      side: "buy",
      type: "limit",
      size: 0.1,
      price: 42000,
      status: "open",
      pnl: undefined,
    },
    {
      id: "2",
      pair: "ETH/USDT",
      side: "sell",
      type: "limit",
      size: 0.5,
      price: 2200,
      status: "waiting",
      pnl: undefined,
    },
    {
      id: "3",
      pair: "BTC/USDT",
      side: "buy",
      type: "market",
      size: 0.05,
      price: 42100,
      status: "cancel",
      pnl: undefined,
    },
    {
      id: "4",
      pair: "BTC/USDT",
      side: "buy",
      type: "limit",
      size: 0.2,
      price: 42500,
      status: "close long",
      pnl: 120.5,
    },
    {
      id: "5",
      pair: "ETH/USDT",
      side: "sell",
      type: "market",
      size: 1.0,
      price: 2100,
      status: "close short",
      pnl: -45.2,
    },
  ]);
  const [isCancelling, setIsCancelling] = useState<string | null>(null);

  function handleCancelOrder(orderId: string) {
    setIsCancelling(orderId);
    setTimeout(() => {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId && (order.status === "open" || order.status === "waiting")
            ? { ...order, status: "cancel" }
            : order,
        ),
      );
      setIsCancelling(null);
    }, 800);
  }

  return (
    <section className={cn("w-full", className)} aria-label="Open Orders">
      <div className="flex flex-col gap-2 max-h-[calc(100vh-180px)] overflow-y-auto custom-scrollbar">
        {orders.length > 0 ? (
          [...orders, ...orders, ...orders]?.map((order, index) => (
            <OrderItem
              key={order.id + index}
              order={order}
              onCancel={isCancelling === order.id ? () => {} : handleCancelOrder}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-sm">No open orders</p>
          </div>
        )}
        {isCancelling && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-gray-900 border border-gray-700 rounded-lg px-6 py-4 flex items-center gap-3 shadow-xl animate-fade-in">
              <Clock className="w-5 h-5 text-blue-400 animate-spin" />
              <span className="text-white font-medium text-sm">Cancelling order...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

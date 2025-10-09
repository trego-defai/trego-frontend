# Trego Web - AI-Powered DeFi Frontend

## 🌟 Current Features

### 🤖 DeFi Agent Page

- **AI Chat Interface**: Interactive chat-bot UI with streaming responses
- **DeFi Actions**: Swap and bridge operations with confirmation UI
- **Message Rendering**: Bot messages with markdown support, typewriter effect, and thinking indicators
- **Chat History**: Conversation history panel with saved interactions
- **Smart Suggestions**: Context-aware chat suggestions

### 📊 Trading Dashboard

- **Lightweight Charts**: Real-time price charts with candlestick visualization
- **Assets Panel**: Portfolio overview with token balances
- **Order Management**: Active orders tracking and history
- **Trade History**: Comprehensive transaction history with filtering
- **Balance Analytics**: Historical balance tracking and P&L analysis

### 💼 Wallet Management

- **Integrated Wallet**: Built-in crypto wallet with token management
- **Token Operations**: Send and receive tokens with QR code support
- **Balance Tracking**: Real-time balance updates across multiple tokens
- **Transaction History**: Complete transaction log with status tracking
- **Wallet Sync**: Automatic synchronization with backend services

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx                   # Root layout with providers
│   ├── globals.css                  # Global Tailwind styles
│   ├── error.tsx                    # Error boundary page
│   ├── loading.tsx                  # Global loading state
│   ├── not-found.tsx                # 404 page
│   ├── (landing-page)/
│   │   └── page.tsx                 # Landing page
│   ├── (protect)/                   # Protected routes (auth required)
│   │   ├── layout.tsx               # Protected layout with sidebar
│   │   ├── agent/
│   │   │   ├── page.tsx             # AI chat agent page
│   │   │   └── layout.tsx           # Agent layout
│   │   ├── trading/
│   │   │   ├── page.tsx             # Trading dashboard
│   │   │   └── layout.tsx           # Trading layout
│   │   ├── wallet/
│   │   │   ├── page.tsx             # Wallet management page
│   │   │   └── layout.tsx           # Wallet layout
│   │   └── welcome/                 # Onboarding page
│   └── api/
│       └── [...all]/
│           └── route.ts             # API gateway proxy (all HTTP methods)
├── components/
│   ├── agent/
│   │   ├── index.tsx                # Main agent component
│   │   └── PanelHistory.tsx         # Chat history panel
│   ├── auth/                        # Authentication components
│   ├── chat/
│   │   ├── index.tsx                # Main chat interface
│   │   ├── ChatInput.tsx            # Message input field
│   │   ├── ChatSuggestions.tsx      # Suggestion chips
│   │   └── message/
│   │       ├── BotMessage.tsx       # Bot message bubble
│   │       ├── UserMessage.tsx      # User message bubble
│   │       ├── BotThinking.tsx      # Thinking indicator
│   │       ├── ChatContainer.tsx    # Messages container
│   │       ├── ChatMessageSkeleton.tsx
│   │       ├── MessageMarkdown.tsx  # Markdown renderer
│   │       ├── MessageType.tsx      # Message type handler
│   │       ├── TypewriterText.tsx   # Typewriter effect
│   │       └── defi/
│   │           ├── swap/
│   │           │   ├── BotPreSwap.tsx
│   │           │   ├── PreSwap.tsx
│   │           │   └── TokenDisplay.tsx
│   │           └── bridge/
│   │               ├── BotBridge.tsx
│   │               └── BridgeConfirmation.tsx
│   ├── dashboard/
│   │   ├── Sidebar.tsx              # Main navigation sidebar
│   │   ├── Header.tsx               # Dashboard header
│   │   ├── BalanceCards.tsx         # Balance overview cards
│   │   ├── BalanceHistorySection.tsx # Balance chart
│   │   └── AlgosOneTradesTable.tsx  # Algo trades table
│   ├── landing/
│   │   ├── Navbar.tsx               # Landing navbar with auth
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Features.tsx             # Features showcase
│   │   ├── BentoSection.tsx         # Bento grid layout
│   │   ├── Background.tsx           # Animated background
│   │   └── Footer.tsx               # Landing footer
│   ├── trade/
│   │   ├── Chart.tsx                # Price chart component
│   │   ├── ChartSkeleton.tsx        # Chart loading state
│   │   ├── TradingView.tsx          # Trading view container
│   │   ├── AssetsPanel.tsx          # Portfolio assets
│   │   ├── OrdersTab.tsx            # Active orders
│   │   └── HistoryTab.tsx           # Trade history
│   ├── wallet/
│   │   ├── index.ts                 # Wallet exports
│   │   ├── TregoWallet.tsx          # Main wallet component
│   │   ├── AuthContent.tsx          # Wallet auth wrapper
│   │   ├── WalletBalance.tsx        # Balance display
│   │   ├── TokensList.tsx           # Token list view
│   │   ├── SendToken.tsx            # Send token form
│   │   ├── ReceiveToken.tsx         # Receive with QR code
│   │   ├── TransactionHistory.tsx   # Transaction log
│   │   ├── WalletLoading.tsx        # Loading state
│   │   ├── NoWallet.tsx             # Empty state
│   │   └── types.ts                 # Wallet type definitions
│   ├── shared/
│   │   ├── Logo.tsx                 # Trego logo component
│   │   └── Navbar.tsx               # Shared navbar
│   └── ui/                          # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── bento-grid.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── icons.tsx
│       ├── input.tsx
│       ├── marquee.tsx
│       ├── skeleton.tsx
│       └── tabs.tsx
├── hooks/
│   ├── index.ts                     # Hooks exports
│   ├── useBodyScrollLock.ts         # Prevent scroll hook
│   ├── useClickOutside.ts           # Outside click detection
│   ├── useDebounce.ts               # Debounce hook
│   ├── useHotKey.ts                 # Keyboard shortcuts
│   ├── useResponsive.ts             # Responsive breakpoints
│   └── useWalletSync.ts             # Wallet synchronization
├── lib/
│   ├── utils.ts                     # Common utility functions
│   ├── constants.ts                 # App-wide constants
│   ├── constants/
│   │   └── token.ts                 # Token definitions
│   └── gateway/
│       ├── proxy.ts                 # API proxy handler
│       ├── response.ts              # Response formatting
│       └── utils.ts                 # Gateway utilities
├── providers/
│   ├── index.tsx                    # Providers composition
│   ├── ClerkAuthProvider.tsx        # Clerk authentication
│   └── ReactQueryProvider.tsx       # TanStack Query provider
├── service/
│   ├── baseService.ts               # Base API service
│   ├── chatService.ts               # Chat API methods
│   ├── defiService.ts               # DeFi operations API
│   ├── walletService.ts             # Wallet API methods
│   └── bridgeService.ts             # Bridge operations API
├── store/
│   └── useWalletStore.ts            # Zustand wallet state
└── types/                           # TypeScript type definitions
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

BASE_API_URL=https://defai-server-aah6.onrender.com
```

## 🔌 API Architecture

### API Gateway Pattern

The frontend uses a centralized API gateway proxy pattern for backend communication:

```typescript
// Single entry point for all API requests
/api/[...all] → proxyRequest() → Backend API

// All HTTP methods supported:
// GET, POST, PUT, DELETE, PATCH, OPTIONS
```

### Service Layer

The application uses a service-based architecture for API calls:

```typescript
// service/baseService.ts - Base HTTP client with axios
// service/chatService.ts - Chat & agent endpoints
// service/defiService.ts - DeFi operations (swap, liquidity)
// service/walletService.ts - Wallet management
// service/bridgeService.ts - Cross-chain bridge operations
```

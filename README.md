# Trego Web - AI-Powered DeFi Frontend

Next.js 15 frontend application for Trego DeFi platform with AI chatbot interface and trading dashboard.

## 🌟 Current Features

### 🤖 DeFi Agent Page
- **AI Chat Interface**: Chat-bot UI with message components that render different action types from backend
- **Backend Integration**: API connections to interact with AI backend services

### 📊 Trading Dashboard
- **TradingView Integration**: Trading-view UI for chart analysis
- **Trade History**: Transaction history display
- **P&L Tracking**: Profit/loss monitoring interface
- **Token Pair Selection**: Select trading pairs interface

### 🏠 Landing Page
- **Navigation**: Navbar component
- **Features**: Feature showcase sections
- **Social Integration**: X (Twitter) integration for user engagement

## 🏗️ Detailed Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Landing page (navbar, features, X integration)
│   ├── globals.css              # Global Tailwind styles
│   ├── agent/
│   │   ├── page.tsx             # Agent chat page
│   │   └── layout.tsx           # Agent layout
│   ├── dashboard/
│   │   ├── page.tsx             # Trading dashboard page
│   │   └── layout.tsx           # Dashboard layout
│   └── api/
│       ├── chat/
│       │   └── route.ts         # Chat API endpoint with SSE streaming
│       ├── trading/
│       │   ├── pairs/route.ts   # Trading pairs API gateway
│       │   ├── history/route.ts # Trade history API gateway
│       │   └── pnl/route.ts     # P&L data API gateway
│       ├── gateway/
│       │   ├── route.ts         # Main API gateway router
│       │   └── middleware.ts    # Gateway middleware (auth, rate limiting)
│       └── health/route.ts      # Health check endpoint
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx           # Navigation with auth buttons
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Features.tsx         # Features showcase
│   │   ├── TwitterSection.tsx   # X (Twitter) integration
│   │   └── Footer.tsx           # Landing footer
│   ├── agent/
│   │   ├── ChatInterface.tsx    # Main chat UI container
│   │   ├── MessageList.tsx      # Chat messages display
│   │   ├── MessageItem.tsx      # Individual message component
│   │   ├── ActionRenderer.tsx   # Renders different action types from backend
│   │   ├── ChatInput.tsx        # Message input field
│   │   └── TypingIndicator.tsx  # Loading/typing indicator
│   ├── dashboard/
│   │   ├── TradingView.tsx      # TradingView chart integration
│   │   ├── PairSelector.tsx     # Token pair selection dropdown
│   │   ├── TradeHistory.tsx     # Transaction history table
│   │   ├── PnlCards.tsx         # P&L summary cards
│   │   ├── PnlTable.tsx         # Detailed P&L breakdown
│   │   ├── OrderBook.tsx        # Market order book display
│   │   └── TradingPanel.tsx     # Main trading controls
│   ├── shared/
│   │   ├── Layout.tsx           # Common layout wrapper
│   │   ├── LoadingSpinner.tsx   # Loading component
│   │   ├── ErrorBoundary.tsx    # Error handling
│   │   └── AuthGuard.tsx        # Route protection
│   └── ui/
│       ├── button.tsx           # Custom button component
│       ├── card.tsx             # Card container
│       ├── input.tsx            # Input field
│       ├── select.tsx           # Dropdown select
│       ├── table.tsx            # Data table
│       ├── modal.tsx            # Modal dialog
│       └── toast.tsx            # Notification toast
├── lib/
│   ├── utils.ts                 # Common utility functions
│   ├── api/
│   │   ├── client.ts            # API client configuration
│   │   ├── gateway.ts           # API gateway utilities
│   │   ├── endpoints.ts         # API endpoint definitions
│   │   └── types.ts             # API request/response types
│   ├── constants.ts             # App constants
│   └── types.ts                 # TypeScript type definitions
├── hooks/
│   ├── useChat.ts               # Chat functionality hook
│   ├── useTradingData.ts        # Trading data management
│   ├── usePairSelection.ts      # Pair selector hook
│   └── useSSE.ts                # Server-Sent Events connection hook
└── middleware                     
└── providers/
    ├── ApiProvider.tsx          # API context provider
    ├── ChatProvider.tsx         # Chat state management
    └── TradingProvider.tsx      # Trading data context
```

## 📱 Current Pages

### Landing Page (`/`)
- **Navbar**: Navigation component
- **Features**: Feature showcase sections  
- **X Integration**: Social integration components

### Agent Page (`/agent`)
- **Chat Interface**: Chat-bot UI with message components
- **Action Rendering**: Components that render different action types from backend

### Dashboard Page (`/dashboard`)
- **TradingView**: Trading-view UI integration
- **History**: Trade history display
- **P&L**: Profit/loss tracking interface
- **Pair Selection**: Token pair selector

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Build Tool**: Turbopack

### Backend Integration
- **API Gateway**: Centralized API gateway for backend communication with middleware
- **API Routes**: Next.js API routes acting as proxy to backend services
- **Chat Interface**: Components for AI chat interaction with SSE streaming responses
- **Real-time Data**: Server-Sent Events (SSE) for streaming data integration
- **Authentication**: API gateway handles auth tokens and request validation
- **Rate Limiting**: Built-in rate limiting and request throttling

## 🚀 Development

### Available Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack  
- `pnpm start` - Start production server

### Environment Variables
```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000/api
API_SECRET_KEY=your_backend_api_secret

RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000

# SSE Configuration
SSE_ENDPOINT=/api/chat/stream
SSE_HEARTBEAT_INTERVAL=30000
```

## 🔌 API Structure

### API Gateway Architecture
The frontend uses a centralized API gateway pattern for backend communication:

```typescript
// API Gateway Routes
/api/gateway          # Main gateway router with middleware
├── /chat             # Chat endpoints with SSE streaming
├── /trading          # Trading data endpoints
│   ├── /pairs        # Trading pairs data
│   ├── /history      # Transaction history
│   └── /pnl          # P&L calculations
└── /health           # System health checks

// Gateway Middleware Stack
1. Authentication validation
2. Rate limiting & throttling
3. Request/response logging
4. Error handling & formatting
5. CORS configuration
```

### API Client Structure
```typescript
// lib/api/client.ts - Main API client
// lib/api/gateway.ts - Gateway utilities & middleware
// lib/api/endpoints.ts - Endpoint definitions & URLs
// lib/api/types.ts - Request/response type definitions
```

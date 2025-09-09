# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Available Commands (from package.json):**
- **Development server**: `pnpm dev` (uses Turbopack for faster builds)
- **Production build**: `pnpm build` (uses Turbopack)  
- **Start production server**: `pnpm start`

**Note**: This project uses pnpm as the package manager (evidenced by pnpm-lock.yaml).

**Currently Missing Commands** (will need to be added as the project develops):
- Database operations: `pnpm db:generate`, `pnpm db:push`, `pnpm db:studio`
- Testing: `pnpm test`, `pnpm test:e2e`
- Code quality: `pnpm lint`, `pnpm type-check`

## Current State vs Target Architecture

**IMPORTANT**: The README.md contains detailed documentation for a Trego DeFi AI Assistant application. The current codebase is a basic Next.js 15 starter project that needs to be built to match the documented architecture.

### Current Stack (Actual)
- **Framework**: Next.js 15.5.2 with App Router
- **Build tool**: Turbopack (enabled in dev and build scripts)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from next/font/google
- **TypeScript**: Full TypeScript setup with strict mode enabled
- **Package Manager**: pnpm

### Target Stack (Per README.md)
- **Frontend**: Next.js 15 with App Router, Tailwind CSS v4, Turbopack
- **Backend Integration**: Next.js API routes for backend communication
- **Chat Interface**: AI chat components with action rendering
- **Trading**: TradingView integration, real-time market data
- **Social**: X (Twitter) integration for user engagement

## Project Structure

### Current Structure (Actual)
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Geist fonts
│   ├── page.tsx            # Homepage component  
│   ├── globals.css         # Global styles with Tailwind CSS v4
│   └── favicon.ico         # Site icon
├── public/                 # Static assets (basic Next.js structure)
└── package.json            # Dependencies and scripts
```

### Target Structure (Per README.md)
The README.md describes the following detailed structure to implement:

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
├── middleware                   
└── providers/
    ├── ApiProvider.tsx          # API context provider
    ├── ChatProvider.tsx         # Chat state management
    └── TradingProvider.tsx      # Trading data context
```

## Key Configuration

### Current Configuration
- **Path mapping**: `@/*` maps to `./src/*` for absolute imports (tsconfig.json)
- **Font system**: Geist fonts are loaded and configured as CSS variables in layout.tsx
- **TypeScript**: Configured with Next.js plugin and bundler module resolution
- **Styling**: Tailwind CSS v4 with PostCSS integration
- **Build**: Turbopack enabled for dev and build commands

### Target Configuration (To Be Implemented)
- **Environment variables**: Backend API URL, API gateway configuration, SSE settings
- **Styling system**: Tailwind CSS v4 with custom components
- **API Gateway**: Centralized API gateway with middleware for auth and rate limiting
- **Real-time data**: Server-Sent Events (SSE) for streaming chat and market data

## Implementation Roadmap

Based on the README.md, the following pages and features need to be implemented:

### Phase 1: Core Pages Structure
1. **Landing Page** (`/`): Navbar, Hero, Features, X Integration, Footer
2. **Agent Page** (`/agent`): Chat interface with AI backend integration
3. **Dashboard Page** (`/dashboard`): TradingView, history, P&L, pair selection
4. **API Routes**: Chat with SSE streaming, trading pairs, history, P&L, health, gateway middleware

### Phase 2: Component Implementation
1. **Landing Components**: Navbar, Hero, Features, TwitterSection, Footer
2. **Agent Components**: ChatInterface, MessageList, MessageItem, ActionRenderer, ChatInput, TypingIndicator
3. **Dashboard Components**: TradingView, PairSelector, TradeHistory, PnlCards, PnlTable, OrderBook, TradingPanel
4. **Shared Components**: Layout, LoadingSpinner, ErrorBoundary, AuthGuard
5. **UI Components**: Custom button, card, input, select, table, modal, toast

### Phase 3: State Management & Hooks
1. **Providers**: ApiProvider, ChatProvider, TradingProvider
2. **Hooks**: useChat, useTradingData, usePairSelection, useSSE
3. **Backend Integration**: API gateway configuration, client setup, and error handling
4. **Real-time Features**: Server-Sent Events (SSE) connections for streaming data

### Phase 4: Advanced Features
1. **Streaming Chat**: Real-time AI responses with progressive rendering
2. **Trading Integration**: Live market data and trading functionality
3. **Social Features**: X (Twitter) API integration
4. **Performance**: Optimization and error boundaries

## Development Guidelines (For Future Implementation)

### AI Chatbot Development
- Use LangChain chains and agents for complex DeFi reasoning
- Implement conversation memory with LangChain's memory components
- Support natural language commands like "swap 100 APT for USDC"
- Include proper validation and confirmation flows for transactions

#### Streaming Chat Interface (ChatGPT-like)
**Key Requirements for Streaming Chat:**
- **Real-time streaming**: Implement Server-Sent Events (SSE) or streaming responses using Next.js App Router
- **Progressive message rendering**: Display messages as they're generated token by token
- **Message state management**: Track loading, streaming, and complete states for each message
- **Optimistic updates**: Show user messages immediately while waiting for AI responses
- **Error handling**: Graceful fallbacks when streaming fails or connection drops

**Technical Implementation:**
- **API Route**: Use `app/api/chat/route.ts` with streaming response using `ReadableStream`
- **Frontend hook**: Create `useStreamingChat` hook to manage Server-Sent Events (SSE)
- **Message types**: Support text, code blocks, and DeFi action cards in streaming format
- **UI Components**: Animated typing indicators, message bubbles, and progressive rendering
- **Persistence**: Save chat history to database with message timestamps and streaming metadata

**Dependencies to Add:**
- `ai` package (Vercel AI SDK) for streaming chat utilities
- `@tanstack/react-query` for data fetching and caching
- `eventsource-polyfill` for cross-browser SSE support if needed

**Chat Features:**
- **Auto-scroll**: Automatically scroll to bottom during streaming
- **Stop generation**: Allow users to stop mid-stream generation
- **Retry failed**: Retry failed or incomplete messages
- **Copy messages**: Easy copy functionality for code and text responses
- **Message reactions**: Like/dislike for AI responses to improve training

### Backend Integration
- **API Gateway**: Centralized API gateway pattern for backend communication with middleware
- **API Communication**: RESTful APIs for chat, trading data, and user actions
- **Real-time Updates**: Server-Sent Events (SSE) for streaming chat responses and live market data
- **Authentication**: API gateway handles auth tokens and request validation
- **Rate Limiting**: Built-in rate limiting and request throttling
- **Error Handling**: Proper error boundaries and fallback mechanisms with SSE reconnection
- **Data Caching**: Efficient caching strategies for trading pairs and historical data

### Security Considerations
- **API Security**: Secure API key management and request validation
- **Input Validation**: Sanitize all user inputs before processing
- **Error Handling**: Never expose sensitive information in error messages
- **CORS Configuration**: Proper cross-origin resource sharing setup

### Testing Strategy (To Be Implemented)
- **Component Testing**: Test React components with @testing-library/react
- **API Testing**: Test API routes and backend integration
- **E2E Testing**: Critical user flows (chat interactions, trading interface)
- **Mock Strategy**: Mock external APIs and Server-Sent Events in tests

## Environment Variables

Based on README.md, the following environment variables are needed:

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

## Key Components to Implement

### Priority 1: Core Pages
- Landing page with navbar and features
- Agent chat page with streaming interface
- Trading dashboard with TradingView integration

### Priority 2: Essential Components
- Chat interface with message rendering and action components
- Trading components (pair selector, history, P&L, order book, trading panel)
- Shared UI components (buttons, cards, modals, tables)

### Priority 3: Advanced Features  
- API Gateway with middleware (authentication, rate limiting)
- Server-Sent Events (SSE) for real-time streaming
- Progressive chat response rendering
- Social media integration (X/Twitter)

## API Gateway Architecture

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
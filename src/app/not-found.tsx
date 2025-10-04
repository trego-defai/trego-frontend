import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300">Page Not Found</h2>
        </div>

        <p className="text-gray-400 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>

        <div className="space-y-4">
          <Button asChild variant="secondary" size="lg">
            <Link href={PATH.login} target="_blank" rel="noopener noreferrer">
              Return Home
            </Link>
          </Button>

          <div className="text-sm text-gray-500">Or try navigating to:</div>

          <div className="flex justify-center space-x-4 text-sm">
            <Link
              href={PATH.agent}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              AI Agent
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href={PATH.trade}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

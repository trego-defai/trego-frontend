import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PATH } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
        </div>

        <p className="text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="space-y-4">
          <Button asChild variant="secondary" size="lg">
            <Link href={PATH.landing} className="">
              Return Home
            </Link>
          </Button>

          <div className="text-sm text-muted-foreground">Or try navigating to:</div>

          <div className="flex justify-center space-x-4 text-sm">
            <Link href={PATH.agent} className="text-primary hover:underline hover:text-primary/80 transition-colors">
              AI Agent
            </Link>
            <span className="text-border">•</span>
            <Link href={PATH.wallet} className="text-primary hover:underline hover:text-primary/80 transition-colors">
              Wallet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

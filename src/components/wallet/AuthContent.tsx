import { AuthButton } from "@/components/auth/AuthButton";

export function AuthContent() {
  return (
    <main className=" bg-gradient-to-br from-bg-primary to-bg-muted px-4">
      <section className="w-full max-w-md rounded-xl bg-bg-card/90 shadow-lg p-8 flex flex-col items-center gap-8">
        <header className="w-full flex flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold text-center text-fg-primary">Welcome to Trego</h1>
          <p className="text-center text-fg-muted text-base">Connect your account to continue</p>
        </header>
        <div className="w-full flex flex-col gap-4">
          <AuthButton variant="default" className="w-full flex items-center justify-center" title="Connect" />
        </div>
        <footer className="w-full flex flex-col items-center gap-1 mt-4">
          <span className="text-xs text-fg-muted">Secure authentication powered by Trego Wallet</span>
        </footer>
      </section>
    </main>
  );
}

export default AuthContent;

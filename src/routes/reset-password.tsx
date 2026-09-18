import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, KeyRound, LoaderCircle, ShieldAlert } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Definir senha | Bruno Masini" },
      { name: "description", content: "Definição segura da senha administrativa do portfólio." },
      { property: "og:title", content: "Definir senha | Bruno Masini" },
      { property: "og:description", content: "Área segura para definição da senha administrativa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    let recoveryConfirmed = false;

    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const queryParams = new URLSearchParams(window.location.search);
    const recoveryInUrl = hashParams.get("type") === "recovery" || queryParams.get("type") === "recovery";

    function acceptRecoverySession(session: Parameters<Parameters<typeof supabase.auth.onAuthStateChange>[0]>[1]) {
      if (!active || !session) return;
      recoveryConfirmed = true;
      setHasSession(true);
      setError("");
      setIsChecking(false);
    }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") acceptRecoverySession(session);
    });

    async function checkSession() {
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (!active) return;
      if (data.session && recoveryInUrl) {
        acceptRecoverySession(data.session);
        return;
      }
      if (!recoveryConfirmed) {
        setHasSession(false);
        setError("Este link é inválido ou expirou. Solicite um novo link na área administrativa.");
        setIsChecking(false);
      }
    }

    void checkSession();

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }
    if (password !== confirmation) {
      setError("As senhas informadas não são iguais.");
      return;
    }

    setIsSaving(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });

      if (updateError) {
        setError("Não foi possível definir a senha. Solicite um novo link e tente novamente.");
        return;
      }

      setIsComplete(true);
      setPassword("");
      setConfirmation("");

      // A sessão do link é temporária. O encerramento não deve impedir a
      // confirmação visual caso o navegador já a tenha invalidado.
      try {
        await supabase.auth.signOut({ scope: "local" });
      } catch {
        // A senha já foi salva; o administrador pode seguir para o login.
      }
    } catch {
      setError("Não foi possível concluir a definição da senha. Solicite um novo link e tente novamente.");
    } finally {
      setIsSaving(false);
    }
  }

  if (isChecking) {
    return (
      <main className="grid min-h-screen place-items-center bg-background">
        <LoaderCircle className="size-7 animate-spin text-primary" aria-label="Verificando link" />
      </main>
    );
  }

  if (isComplete) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5 py-12">
        <section className="w-full max-w-md border border-border bg-card p-7 shadow-sm sm:p-9">
          <CheckCircle2 className="size-11 text-primary" aria-hidden="true" />
          <h1 className="mt-5 font-display text-4xl text-foreground">Senha definida</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Seu acesso administrativo está pronto. Entre com seu e-mail e a nova senha.
          </p>
          <Button asChild className="mt-7 h-11 w-full">
            <Link to="/admin">Ir para o login</Link>
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 py-12">
      <section className="w-full max-w-md border border-border bg-card p-7 shadow-sm sm:p-9">
        <div className="mb-8 flex size-11 items-center justify-center bg-primary text-primary-foreground">
          {hasSession ? <KeyRound className="size-5" /> : <ShieldAlert className="size-5" />}
        </div>
        <p className="text-xs font-semibold uppercase text-primary">Área restrita</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">Definir nova senha</h1>

        {hasSession ? (
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-foreground">
              Nova senha
              <Input
                className="mt-2 h-11"
                type="password"
                autoComplete="new-password"
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Confirmar nova senha
              <Input
                className="mt-2 h-11"
                type="password"
                autoComplete="new-password"
                minLength={8}
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                required
              />
            </label>
            {error ? <p className="text-sm text-destructive" role="alert">{error}</p> : null}
            <Button className="h-11 w-full" type="submit" disabled={isSaving}>
              {isSaving ? <LoaderCircle className="size-4 animate-spin" /> : <KeyRound className="size-4" />}
              Salvar senha
            </Button>
          </form>
        ) : (
          <div className="mt-6">
            <p className="text-sm leading-6 text-destructive" role="alert">{error}</p>
            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/admin">Solicitar novo link</Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
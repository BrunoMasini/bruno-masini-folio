import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, LoaderCircle, LockKeyhole, LogOut } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { checkIsAdmin } from "@/lib/site-content.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Administração | Bruno Masini" },
      { name: "description", content: "Acesso restrito à administração do portfólio de Bruno Masini." },
      { property: "og:title", content: "Administração | Bruno Masini" },
      { property: "og:description", content: "Área restrita de administração do portfólio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const verifyAdmin = useServerFn(checkIsAdmin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function verifySession() {
      const { data } = await supabase.auth.getSession();
      if (!active) return;

      if (!data.session) {
        setIsLoading(false);
        return;
      }

      try {
        const result = await verifyAdmin();
        if (active) setIsAdmin(result.isAdmin);
      } catch {
        if (active) setError("Esta conta não possui acesso de administrador.");
      } finally {
        if (active) setIsLoading(false);
      }
    }

    void verifySession();
    return () => {
      active = false;
    };
  }, [verifyAdmin]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      setError("E-mail ou senha inválidos.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await verifyAdmin();
      if (!result.isAdmin) {
        await supabase.auth.signOut();
        setError("Esta conta não possui acesso de administrador.");
        return;
      }
      setIsAdmin(true);
    } catch {
      await supabase.auth.signOut();
      setError("Não foi possível confirmar o acesso de administrador.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setEmail("");
    setPassword("");
  }

  if (isLoading) {
    return (
      <main className="grid min-h-screen place-items-center bg-background">
        <LoaderCircle className="size-7 animate-spin text-primary" aria-label="Carregando" />
      </main>
    );
  }

  if (isAdmin) {
    return (
      <main className="min-h-screen bg-background px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">Área restrita</p>
              <h1 className="mt-2 font-display text-4xl text-foreground">Administração</h1>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="size-4" /> Sair
            </Button>
          </div>
          <p className="mt-10 max-w-xl text-muted-foreground">
            Acesso confirmado. Os controles de edição do portfólio serão exibidos aqui.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/"><ArrowLeft className="size-4" /> Voltar ao portfólio</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 py-12">
      <section className="w-full max-w-md border border-border bg-card p-7 shadow-sm sm:p-9">
        <div className="mb-8 flex size-11 items-center justify-center bg-primary text-primary-foreground">
          <LockKeyhole className="size-5" />
        </div>
        <p className="text-xs font-semibold uppercase text-primary">Área restrita</p>
        <h1 className="mt-2 font-display text-4xl text-foreground">Acesso administrativo</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Entre com a conta autorizada para administrar o portfólio.</p>

        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-foreground">
            E-mail
            <Input
              className="mt-2 h-11"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Senha
            <Input
              className="mt-2 h-11"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {error ? <p className="text-sm text-destructive" role="alert">{error}</p> : null}
          <Button className="h-11 w-full" type="submit" disabled={isLoading}>
            {isLoading ? <LoaderCircle className="size-4 animate-spin" /> : <LockKeyhole className="size-4" />}
            Entrar
          </Button>
        </form>

        <Button asChild variant="ghost" className="mt-4 w-full">
          <Link to="/"><ArrowLeft className="size-4" /> Voltar ao portfólio</Link>
        </Button>
      </section>
    </main>
  );
}
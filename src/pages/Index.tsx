import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSearch from "@/components/ProfileSearch";
import ProfileResult from "@/components/ProfileResult";
import type { VocationalProfile } from "@/data/profiles";

const Index = () => {
  const [profile, setProfile] = useState<VocationalProfile | null>(null);
  const [searched, setSearched] = useState(false);

  const handleResult = useCallback((p: VocationalProfile | null, didSearch: boolean) => {
    setProfile(p);
    setSearched(didSearch);
  }, []);

  const handleClear = useCallback(() => {
    setProfile(null);
    setSearched(false);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      {/* Header */}
      <header className="relative overflow-hidden bg-primary">
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary-foreground" />
          <div className="absolute top-4 right-20 h-24 w-24 rounded-full bg-primary-foreground" />
          <div className="absolute -bottom-6 right-1/3 h-32 w-32 rounded-full bg-primary-foreground" />
          <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-primary-foreground" />
        </div>
        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/5 to-primary-foreground/20" />

        <div className="relative container mx-auto px-4 py-6 sm:py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground tracking-tight">
              Orientación Vocacional
            </h1>
            <p className="mt-1 text-sm sm:text-base text-primary-foreground/80 font-body tracking-wide">
              Universidad Externado de Colombia
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-12 pb-8 sm:pt-20 sm:pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Descubre tu perfil vocacional
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Ingresa tu código de tres letras para conocer tu perfil, tus fortalezas y las disciplinas que más se ajustan a ti.
            </p>
          </motion.div>

          <ProfileSearch onResult={handleResult} />
        </section>

        {/* Results */}
        <section className="container mx-auto px-4 pb-16">
          <AnimatePresence mode="wait">
            {searched && profile && (
              <ProfileResult key={profile.code} profile={profile} onClear={handleClear} />
            )}

            {searched && !profile && (
              <motion.div
                key="not-found"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-md rounded-xl border bg-card p-8 text-center shadow-soft"
              >
                <p className="text-foreground font-medium mb-1">
                  El perfil ingresado no existe.
                </p>
                <p className="text-sm text-muted-foreground">
                  Por favor verifica el código e intenta de nuevo.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card py-6">
        <p className="text-center text-sm text-muted-foreground">
          © Todos los derechos reservados – Universidad Externado de Colombia
        </p>
      </footer>
    </div>
  );
};

export default Index;

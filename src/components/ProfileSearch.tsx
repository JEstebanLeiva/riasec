import { useState, useCallback } from "react";
import { Search, HelpCircle, X } from "lucide-react";
import { findProfile, type VocationalProfile } from "@/data/profiles";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileSearchProps {
  onResult: (profile: VocationalProfile | null, searched: boolean) => void;
}

export default function ProfileSearch({ onResult }: ProfileSearchProps) {
  const [query, setQuery] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSearch = useCallback(() => {
    if (!query.trim()) return;
    const profile = findProfile(query);
    onResult(profile, true);
  }, [query, onResult]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setQuery("");
    onResult(null, false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="flex items-center rounded-lg border-2 border-border bg-card shadow-soft transition-all duration-300 focus-within:border-primary focus-within:shadow-elevated">
          <Search className="ml-4 h-5 w-5 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu código de perfil..."
            className="flex-1 bg-transparent px-3 py-4 text-base font-body text-foreground placeholder:text-muted-foreground outline-none"
          />
          {query && (
            <button onClick={handleClear} className="mr-2 p-1 rounded-full hover:bg-muted transition-colors">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
          <button
            onClick={handleSearch}
            className="mr-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-95"
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-1">
        <p className="text-sm text-muted-foreground">
          Ejemplo: <span className="font-medium text-foreground">S-E-C</span>
        </p>
        <div className="relative">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>¿Qué es un perfil vocacional?</span>
          </button>
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute right-0 top-8 z-10 w-72 rounded-lg border bg-card p-4 shadow-card text-sm text-foreground"
              >
                Un perfil vocacional es una combinación de tres tipos de intereses (representados por letras) que describe tus fortalezas, preferencias y áreas profesionales afines.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

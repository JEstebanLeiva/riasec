import { motion } from "framer-motion";
import { User, BookOpen, Download, RotateCcw } from "lucide-react";
import type { VocationalProfile } from "@/data/profiles";
import { downloadProfilePDF } from "@/lib/pdfExport";

interface ProfileResultProps {
  profile: VocationalProfile;
  onClear: () => void;
}

export default function ProfileResult({ profile, onClear }: ProfileResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-xl border bg-card shadow-card overflow-hidden">
        {/* Green top bar */}
        <div className="h-1.5 bg-primary" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-tight">
                {profile.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">
                Código del perfil: {profile.code}
              </p>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Descripción
            </h3>
            <p className="text-foreground leading-relaxed">
              {profile.description}
            </p>
          </motion.div>

          {/* Disciplines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Disciplinas sugeridas
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.disciplines
                .replace(/\.$/, "")
                .split(",")
                .map((d) => d.trim())
                .map((discipline) => (
                  <span
                    key={discipline}
                    className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {discipline}
                  </span>
                ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => downloadProfilePDF(profile)}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Descargar perfil en PDF
            </button>
            <button
              onClick={onClear}
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-[0.98]"
            >
              <RotateCcw className="h-4 w-4" />
              Limpiar búsqueda
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

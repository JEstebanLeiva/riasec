import jsPDF from "jspdf";
import type { VocationalProfile } from "@/data/profiles";

export function downloadProfilePDF(profile: VocationalProfile) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 25;
  const contentWidth = pageWidth - margin * 2;
  let y = 30;

  // Header line
  doc.setDrawColor(0, 153, 41);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 12;

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(0, 153, 41);
  doc.text("Orientación Vocacional", margin, y);
  y += 8;

  doc.setFontSize(11);
  doc.setTextColor(100, 100, 100);
  doc.setFont("helvetica", "normal");
  doc.text("Universidad Externado de Colombia", margin, y);
  y += 16;

  // Profile name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text(profile.name, margin, y);
  y += 9;

  // Code
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(0, 153, 41);
  doc.text(`Código del perfil: ${profile.code}`, margin, y);
  y += 14;

  // Description header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(30, 30, 30);
  doc.text("Descripción", margin, y);
  y += 8;

  // Description body
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  const descLines = doc.splitTextToSize(profile.description, contentWidth);
  doc.text(descLines, margin, y);
  y += descLines.length * 6 + 10;

  // Disciplines header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(30, 30, 30);
  doc.text("Disciplinas sugeridas", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  const discLines = doc.splitTextToSize(profile.disciplines, contentWidth);
  doc.text(discLines, margin, y);
  y += discLines.length * 6 + 20;

  // Footer line
  doc.setDrawColor(0, 153, 41);
  doc.setLineWidth(0.5);
  doc.line(margin, 275, pageWidth - margin, 275);

  doc.setFontSize(9);
  doc.setTextColor(130, 130, 130);
  doc.text(
    "© Todos los derechos reservados – Universidad Externado de Colombia",
    pageWidth / 2,
    281,
    { align: "center" }
  );

  doc.save(`Perfil_${profile.code.replace(/-/g, "")}.pdf`);
}

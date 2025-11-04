export const metadata = {
  title: "Inovasity — MediMorphAI",
  description: "AI-assisted wound measurement, monitoring, and documentation—built for clinicians.",
};
import "./styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

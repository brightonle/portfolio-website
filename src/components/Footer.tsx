import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-white/20">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-sm text-white/20">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

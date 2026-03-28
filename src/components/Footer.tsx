import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-[var(--subtle)]">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-sm text-[var(--subtle)]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with Next.js &amp; React · Karachi</span>
      </div>
    </footer>
  );
}

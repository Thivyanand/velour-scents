import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>

        <p className="text-center text-zinc-500 mt-8">
          © 2026 Velour Scents. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
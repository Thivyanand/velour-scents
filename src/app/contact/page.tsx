export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>

        <p className="text-lg text-gray-300">
          We'd love to hear from you.
        </p>

        <div className="mt-8 space-y-4 text-lg text-gray-300">
          <p>WhatsApp: +91 82206 80198</p>
          <p>Instagram: @velourscents</p>
          <p>Email: thivyanand90@email.com</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Business Hours</h2>
          <p className="text-gray-300">Monday - Sunday</p>
          <p className="text-gray-300">9:00 AM - 9:00 PM</p>
        </div>
      </div>
    </main>
  );
}
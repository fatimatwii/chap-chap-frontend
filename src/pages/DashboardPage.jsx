import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <p className="font-semibold text-emerald-700">Chap Chap Moanda</p>

        <h1 className="mt-3 text-3xl font-bold">
          Customer dashboard preview
        </h1>

        <p className="mt-3 text-slate-600">
          This is a frontend placeholder. It does not represent a real login.
        </p>

        <Link
          to="/login"
          className="mt-6 inline-block rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Return to login
        </Link>
      </section>
    </main>
  );
}
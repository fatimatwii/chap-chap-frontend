import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>

      

        <Link
          to="/login"
          className="mt-6 inline-block font-semibold text-emerald-700 hover:underline"
        >
          Back to sign in
        </Link>
      </section>
    </main>
  );
}
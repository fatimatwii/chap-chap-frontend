
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Phone } from "lucide-react";

import AuthInput from "../components/AuthInput";
import SocialButton from "../components/SocialButton";

export default function AuthPage() {
    const [mode, setMode] = useState("login");
    const [method, setMethod] = useState("email");

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const isSignup = mode === "signup";

    function handleSubmit(event) {
        event.preventDefault();

        if (method === "phone") {
            setMessage(
                "Phone verification will be connected later. This is a frontend demo."
            );
            return;
        }

        setMessage(
            isSignup
                ? "Your sign-up form is valid. Account creation is not connected yet."
                : "Your login form is valid. Login is not connected yet."
        );
    }

    function handleProvider(provider) {
        setMessage(
            `${provider} integration will be configured later. This is a frontend demo.`
        );
    }

    return (
        <main className="login-page-background flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
            <section className="login-form-card w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
                <Link to="/login" className="mb-4 inline-flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl font-black text-white">
                        C
                    </span>

                    <span className="text-xl font-extrabold tracking-tight">
                        Chap Chap
                    </span>
                </Link>


                <p className="mt-1 text-sm leading-6 text-slate-500">
                    {isSignup
                        ? "Join Chap Chap Moanda and get started."
                        : "Sign in to continue to your account."}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
                    <button
                        type="button"
                        onClick={() => {
                            setMode("login");
                            setMessage("");
                        }}
                        className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${!isSignup
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500"
                            }`}
                    >
                        Sign in
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setMode("signup");
                            setMessage("");
                        }}
                        className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${isSignup
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500"
                            }`}
                    >
                        Sign up
                    </button>
                </div>

                <div className="mt-5 flex gap-5 border-b border-slate-100">
                    <button
                        type="button"
                        onClick={() => {
                            setMethod("email");
                            setMessage("");
                        }}
                        className={`flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold ${method === "email"
                                ? "border-emerald-700 text-emerald-800"
                                : "border-transparent text-slate-500"
                            }`}
                    >
                        <Mail size={17} />
                        Email
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setMethod("phone");
                            setMessage("");
                        }}
                        className={`flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold ${method === "phone"
                                ? "border-emerald-700 text-emerald-800"
                                : "border-transparent text-slate-500"
                            }`}
                    >
                        <Phone size={17} />
                        Phone number
                    </button>
                </div>

                {message && (
                    <div
                        role="status"
                        className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-800"
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {isSignup && (
                        <AuthInput
                            label="Full name"
                            name="fullName"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            required
                            minLength={2}
                        />
                    )}

                    {method === "email" ? (
                        <>
                            <AuthInput
                                label="Email address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />

                            <div>
                                <AuthInput
                                    label="Password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete={isSignup ? "new-password" : "current-password"}
                                    placeholder={
                                        isSignup ? "At least 8 characters" : "Enter your password"
                                    }
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    minLength={8}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="mt-2 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    {showPassword ? "Hide password" : "Show password"}
                                </button>
                            </div>

                            {!isSignup && (
                                <div className="text-right">
                                    <Link
                                        to="/forgot-password"
                                        className="text-sm font-semibold text-emerald-700 hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <AuthInput
                                label="Phone number"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="+237 6XX XXX XXX"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                required
                            />

                        </>
                    )}

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-3.5 font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        {method === "phone"
                            ? "Continue with phone"
                            : isSignup
                                ? "Create account"
                                : "Sign in"}
                    </button>
                </form>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Or continue with
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>


                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <SocialButton
                        provider="google"
                        onClick={() => handleProvider("Google")}
                    />

                    <SocialButton
                        provider="facebook"
                        onClick={() => handleProvider("Facebook")}
                    />

                    <SocialButton
                        provider="whatsapp"
                        onClick={() => handleProvider("WhatsApp")}
                    />
                </div>


                <p className="mt-7 text-center text-sm text-slate-500">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setMode(isSignup ? "login" : "signup");
                            setMessage("");
                        }}
                        className="font-bold text-emerald-700 hover:underline"
                    >
                        {isSignup ? "Sign in" : "Sign up"}
                    </button>
                </p>

                <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </section>
        </main>
    );
}

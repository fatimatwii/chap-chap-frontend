const providers = {
  google: {
    label: "Google",
    color: "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
    icon: (
      <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.8 6.1C12.3 13.1 17.6 9.5 24 9.5Z" />
        <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.6 2.9-2.3 5.4-4.8 7.1l7.7 6C43.8 38 46.1 31.8 46.1 24.5Z" />
        <path fill="#FBBC05" d="M10.4 28.6c-.6-1.4-.9-3-.9-4.6s.3-3.2.9-4.6l-7.8-6.1C.9 16.7 0 20.2 0 24s.9 7.3 2.6 10.7l7.8-6.1Z" />
        <path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.3-5.9l-7.7-6c-2.1 1.4-4.6 2.3-7.6 2.3-6.4 0-11.7-3.6-13.6-9l-7.8 6.1C6.5 43.6 14.6 48 24 48Z" />
      </svg>
    ),
  },
  facebook: {
    label: "Facebook",
    color: "border-[#1877F2] bg-[#1877F2] text-white hover:bg-[#1668D8]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.513c-1.49 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.38A12.002 12.002 0 0 0 24 12Z" />
      </svg>
    ),
  },
  whatsapp: {
    label: "WhatsApp",
    color: "border-[#25D366] bg-[#25D366] text-white hover:bg-[#20BD5A]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.98L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.92 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
};

export default function SocialButton({ provider, onClick }) {
  const item = providers[provider];

  if (!item) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-emerald-100 ${item.color}`}
    >
      {item.icon}
      {item.label}
    </button>
  );
}
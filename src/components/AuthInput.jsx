export default function AuthInput({
  label,
  error,
  id,
  className = "",
  ...props
}) {
  const inputId = id || props.name;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={inputId}
        className={`w-full rounded-xl border bg-white px-4 py-3
          text-sm text-slate-900 outline-none transition
          placeholder:text-slate-400
          focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100
          ${error ? "border-red-500" : "border-slate-200"}
          ${className}`}
        aria-invalid={Boolean(error)}
        {...props}
      />

      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
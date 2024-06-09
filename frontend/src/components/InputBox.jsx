export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm text-left py-2 font-medium">{label}</div>
      <input
        placeholder={placeholder}
        className="px-2 py-1 w-full border border-slate-200 rounded"
        onChange={onChange}
      />
    </div>
  );
}

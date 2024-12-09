export default function Tooltip({ children }) {
  return (
    <div className="absolute bg-gray-500 text-white p-2 rounded-sm -bottom-11 opacity-0 group-hover:opacity-100 pointer-events-none text-sm transition-opacity z-20 max-w-full white-space: nowrap">
      {children}
    </div>
  );
}

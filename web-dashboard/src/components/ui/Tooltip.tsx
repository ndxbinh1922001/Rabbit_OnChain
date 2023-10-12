export default function Tooltip({ message, children }) {
    return (
        <div className="inline-flex group relative flex">
            {children}
            <div className="absolute top-10 scale-0 transition-all rounded bg-gray-300 p-2  group-hover:scale-100 z-50">{message}</div>
        </div>
    )
}

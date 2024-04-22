
export default function Button({children}:{children:React.ReactNode}) {
  return (
    <button className="p-3 bg-purple-800 text-white rounded-md">{children}</button>
  )
}

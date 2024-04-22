
export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">{children}</div>
  )
}

import { Link } from "react-router"

export const Navbar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-900 p-4 text-amber-50">
      <div className="flex flex-col justify-start items-start gap-2">
        <Link className="text-left" to='/'>Home</Link>
        <Link className="text-left" to='/testimonialCard'>Testimonial Card</Link>
        <Link className="text-left" to='/inputText'>Input Text</Link>
      </div>
    </nav>
  )
}
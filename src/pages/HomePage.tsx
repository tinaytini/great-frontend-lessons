
export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page header */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Component Library
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          A collection of custom, reusable UI elements built with React and Tailwind CSS.
        </p>
      </div>

      {/* Info card */}
      <div className="w-lg m-auto border border-blue-200 rounded-xl p-4">
        <h2 className="text-xl font-semibold text-gray-800">Getting Started</h2>
        <p className="text-sm  leading-relaxed">
          Explore the sidebar to view different components, copy their source code, and see how they look in production.
        </p>
      </div>
    </div>
  )
}

export const BlogCard = () => {
    return (

        <article className="w-[340px] flex flex-col bg-white rounded-lg overflow-hidden">
            <img className="self-stretch h-72 object-cover" src="/Image.png" alt="living room" />
            <div className="flex flex-col items-start self-stretch px-4 py-6 ">
                <span className="font-normal text-sm text-center text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 mb-2">Interior</span>
                <h3 className="font-semibold text-md text-neutral-900 mb-3">Top 5 Living Room Inspirations</h3>
                <p className="font-medium text-sm text-neutral-600">Curated vibrants colors for your living, make it pop & calm in the same time.</p>
                <a href="/" className="flex justify-center items-center text-indigo-700 px-0.5 mt-6">Read More </a>
            </div>

        </article>

    )
}
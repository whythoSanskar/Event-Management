export const Footer = () => {
    return (
        <footer className="bg-gray-800 bg-cover bg-center text-white flex justify-center w-full h-32 content-center">
        <div className="top-0 flex flex-col items-center justify-center w-3/4">
            <div className="block ">
            <h1 className="uppercase font-bold text-4xl mt-2">Planning your next event?</h1>
            </div>
            <div className="absolute right-8 mt-2">
            <a className="bg-yellow-700 w-10 rounded-md px-7 py-5 text-sm font-medium hover:bg-yellow-600" href="/form">Apply</a>
            </div>
        </div>
        </footer>
    )
}
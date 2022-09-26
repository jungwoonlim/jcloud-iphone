import logoUrl from '../assets/jCloud.png'

function Home ({ model, updateModel }) {
  return (
    <>
      <div className="absolute w-screen top-0 px-5 text-white z-10 fade-in">
        <div className="flex justify-between items-center">
          <div className="name">
            { model }
          </div>
          <div className="Logo w-32">
            <img src={ logoUrl } alt="logo" />
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-5">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={ () => updateModel('iPhone') }
          >
            iPhone 14
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={ () => updateModel('iPhone Pro') }
          >
            iPhone 14 Pro
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

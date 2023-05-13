import Link from "next/link";

function ErrorPage() {
  return (
    <div>
      <div className="lg:text-4xl text-xl flex flex-col text-center h-screen  items-center justify-center space-y-3">
        <h2 className="font-semibold font-serif">Error Page</h2>
        <Link
          href="/"
          class="relative inline-flex items-center justify-start xl:px-4 px-3 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
        >
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-14 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left font-serif text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Home page
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;

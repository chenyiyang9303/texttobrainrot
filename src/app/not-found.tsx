import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">404</h2>
        <p className="mt-4 text-lg text-gray-600">Page not found</p>
        <div className="mt-10">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

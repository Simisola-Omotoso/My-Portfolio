import Link from 'next/link'

export default function Sidebar() {
    return (
        <nav className="bg-black shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Head>
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&family=Georgia:wght@400;700&display=swap"
                        rel="stylesheet"
                    </Head>
                    <Link href="/" className="text-2xl font-bold text-gray-800">
                        Simisola Omotoso
                    </Link>
                    <div className="space-x-6">
                        <Link href="/" className="text-white-600 hover:text-gray-800">
                            Home
                        </Link>
                        <Link href="/about" className="text-white-600 hover:text-gray-800">
                            About
                        </Link>
                        <Link href="/projects" className="text-white-600 hover:text-gray-800">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-white-600 hover:text-gray-800">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </nav>
    )
}
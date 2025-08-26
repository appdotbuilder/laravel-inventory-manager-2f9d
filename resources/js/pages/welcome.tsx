import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Sistem Manajemen Inventaris">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-gray-900 lg:justify-center lg:p-8 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                📊 Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-lg border border-transparent px-5 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:shadow-sm dark:text-gray-300 dark:hover:bg-gray-800"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Daftar Gratis
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-6xl lg:flex-row lg:gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="mb-8">
                                <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
                                    📦 Sistem Manajemen
                                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        {' '}Inventaris
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-600 lg:text-xl dark:text-gray-300">
                                    Kelola stok gudang Anda dengan mudah dan efisien. 
                                    Pantau inventaris, lacak barang, dan optimalkan penyimpanan dalam satu platform.
                                </p>
                            </div>

                            <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">📋</div>
                                    <h3 className="mb-2 font-semibold">Manajemen CRUD</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Tambah, edit, lihat, dan hapus item inventaris dengan mudah
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">🔍</div>
                                    <h3 className="mb-2 font-semibold">Pencarian Cerdas</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Cari berdasarkan nama atau kode barang dengan cepat
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">🏢</div>
                                    <h3 className="mb-2 font-semibold">Filter Lokasi</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Filter barang berdasarkan lokasi penyimpanan
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">💰</div>
                                    <h3 className="mb-2 font-semibold">Harga & Stok</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Lacak harga satuan dan jumlah stok secara real-time
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">📅</div>
                                    <h3 className="mb-2 font-semibold">Tanggal Masuk</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Catat kapan barang masuk untuk tracking yang akurat
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                    <div className="mb-4 text-3xl">🔒</div>
                                    <h3 className="mb-2 font-semibold">Aman & Terpercaya</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Sistem autentikasi yang aman untuk melindungi data
                                    </p>
                                </div>
                            </div>

                            {!auth.user && (
                                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        🚀 Mulai Gratis Sekarang
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                    >
                                        🔑 Sudah Punya Akun? Masuk
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="flex-1 mt-8 lg:mt-0">
                            <div className="rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800">
                                <h2 className="mb-6 text-2xl font-bold text-center">
                                    💡 Preview Dashboard
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-blue-500"></div>
                                            <div>
                                                <div className="font-medium">Laptop ASUS</div>
                                                <div className="text-sm text-gray-500">LTP-001 • Gudang A</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-semibold">15 unit</div>
                                            <div className="text-sm text-green-600">Rp 8.500.000</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-green-500"></div>
                                            <div>
                                                <div className="font-medium">Printer Canon</div>
                                                <div className="text-sm text-gray-500">PRT-002 • Rak 1</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-semibold">8 unit</div>
                                            <div className="text-sm text-green-600">Rp 2.750.000</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-purple-500"></div>
                                            <div>
                                                <div className="font-medium">Mouse Logitech</div>
                                                <div className="text-sm text-gray-500">MSE-003 • Lantai 2</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-semibold">25 unit</div>
                                            <div className="text-sm text-green-600">Rp 450.000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Dan masih banyak fitur lainnya...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        Dibangun dengan ❤️ menggunakan Laravel & React. 
                        Sistem inventaris yang mudah dan powerful untuk bisnis Anda.
                    </p>
                </footer>
            </div>
        </>
    );
}
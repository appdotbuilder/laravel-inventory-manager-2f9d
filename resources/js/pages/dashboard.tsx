import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">
                        📦 Selamat Datang di Sistem Inventaris
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Kelola stok gudang Anda dengan mudah dan efisien
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link
                        href={route('inventory.index')}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                📋
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Lihat Inventaris
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Daftar semua item
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></div>
                    </Link>

                    <Link
                        href={route('inventory.create')}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-green-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-600"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                ➕
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Tambah Item
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Item baru
                                </p>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-600 to-green-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></div>
                    </Link>

                    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center space-x-4">
                            <div className="rounded-lg bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
                                🔍
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Pencarian
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Cari item cepat
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center space-x-4">
                            <div className="rounded-lg bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                                📊
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Laporan
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Statistik stok
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Total Item
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    -
                                </p>
                            </div>
                            <div className="rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                📦
                            </div>
                        </div>
                    </div>



                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Nilai Total
                                </p>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    -
                                </p>
                            </div>
                            <div className="rounded-lg bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                💰
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            🕒 Aktivitas Terbaru
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Perubahan inventaris terbaru
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="text-center py-8">
                            <div className="text-6xl mb-4">📊</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                Siap Mengelola Inventaris
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">
                                Mulai dengan menambahkan item pertama Anda atau lihat daftar inventaris yang sudah ada
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Link
                                    href={route('inventory.create')}
                                    className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    ➕ Tambah Item Pertama
                                </Link>
                                <Link
                                    href={route('inventory.index')}
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    📋 Lihat Inventaris
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
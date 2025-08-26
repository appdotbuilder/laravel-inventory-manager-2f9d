import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface InventoryItem {
    id: number;
    name: string;
    code: string;
    description: string | null;
    quantity: number;
    unit_price: number;
    storage_location: string;
    entry_date: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    item: InventoryItem;
    [key: string]: unknown;
}

export default function ShowInventoryItem({ item }: Props) {
    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus ${item.name}?`)) {
            router.delete(route('inventory.destroy', item.id));
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatDateTime = (dateString: string) => {
        return new Date(dateString).toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStockStatus = (quantity: number) => {
        if (quantity > 10) {
            return { color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300', label: 'Stok Aman' };
        } else if (quantity > 0) {
            return { color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300', label: 'Stok Terbatas' };
        } else {
            return { color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300', label: 'Stok Habis' };
        }
    };

    const stockStatus = getStockStatus(item.quantity);
    const totalValue = item.quantity * item.unit_price;

    return (
        <AppShell>
            <Head title={`Detail - ${item.name}`} />
            
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            📦 Detail Item Inventaris
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Informasi lengkap untuk item {item.name}
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Link
                            href={route('inventory.index')}
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            ← Kembali
                        </Link>
                        <Link
                            href={route('inventory.edit', item.id)}
                            className="inline-flex items-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        >
                            ✏️ Edit
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            🗑️ Hapus
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Main Information */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                            <div className="mb-6 flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {item.name}
                                    </h2>
                                    <div className="mt-2 flex items-center space-x-4">
                                        <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                                            {item.code}
                                        </code>
                                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${stockStatus.color}`}>
                                            {stockStatus.label}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {item.description && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        📝 Deskripsi
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                                        {item.description}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">📊</div>
                                        <div>
                                            <dt className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                                Jumlah Stok
                                            </dt>
                                            <dd className="mt-1 text-2xl font-semibold text-blue-900 dark:text-blue-100">
                                                {item.quantity} unit
                                            </dd>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">💰</div>
                                        <div>
                                            <dt className="text-sm font-medium text-green-600 dark:text-green-400">
                                                Harga Satuan
                                            </dt>
                                            <dd className="mt-1 text-2xl font-semibold text-green-900 dark:text-green-100">
                                                {formatCurrency(item.unit_price)}
                                            </dd>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">📍</div>
                                        <div>
                                            <dt className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                                Lokasi Penyimpanan
                                            </dt>
                                            <dd className="mt-1 text-lg font-semibold text-purple-900 dark:text-purple-100">
                                                {item.storage_location}
                                            </dd>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">📅</div>
                                        <div>
                                            <dt className="text-sm font-medium text-orange-600 dark:text-orange-400">
                                                Tanggal Masuk
                                            </dt>
                                            <dd className="mt-1 text-lg font-semibold text-orange-900 dark:text-orange-100">
                                                {formatDate(item.entry_date)}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary & Stats */}
                    <div className="space-y-6">
                        {/* Value Summary */}
                        <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                            <h3 className="text-lg font-semibold mb-4">💎 Nilai Total Stok</h3>
                            <div className="text-3xl font-bold mb-2">
                                {formatCurrency(totalValue)}
                            </div>
                            <p className="text-indigo-100">
                                {item.quantity} unit × {formatCurrency(item.unit_price)}
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                ⚡ Aksi Cepat
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    href={route('inventory.edit', item.id)}
                                    className="block w-full rounded-lg bg-yellow-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                                >
                                    ✏️ Edit Item
                                </Link>
                                <Link
                                    href={route('inventory.create')}
                                    className="block w-full rounded-lg border border-indigo-600 px-4 py-3 text-center text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20"
                                >
                                    ➕ Tambah Item Baru
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    className="block w-full rounded-lg border border-red-600 px-4 py-3 text-center text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20"
                                >
                                    🗑️ Hapus Item
                                </button>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                📋 Informasi Sistem
                            </h3>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">ID Item</dt>
                                    <dd className="text-sm text-gray-900 dark:text-white">#{item.id}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Dibuat</dt>
                                    <dd className="text-sm text-gray-900 dark:text-white">{formatDateTime(item.created_at)}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Terakhir Diperbarui</dt>
                                    <dd className="text-sm text-gray-900 dark:text-white">{formatDateTime(item.updated_at)}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

export default function CreateInventoryItem() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        code: '',
        description: '',
        quantity: 0,
        unit_price: 0,
        storage_location: '',
        entry_date: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('inventory.store'));
    };

    return (
        <AppShell>
            <Head title="Tambah Item Inventaris" />
            
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            ➕ Tambah Item Inventaris
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Tambahkan item baru ke dalam inventaris gudang
                        </p>
                    </div>
                    <Link
                        href={route('inventory.index')}
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                        ← Kembali
                    </Link>
                </div>

                <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    📦 Nama Barang *
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Masukkan nama barang"
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    🏷️ Kode Barang *
                                </label>
                                <input
                                    type="text"
                                    value={data.code}
                                    onChange={(e) => setData('code', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="ITM-001"
                                    required
                                />
                                {errors.code && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.code}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    📅 Tanggal Masuk *
                                </label>
                                <input
                                    type="date"
                                    value={data.entry_date}
                                    onChange={(e) => setData('entry_date', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    required
                                />
                                {errors.entry_date && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.entry_date}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    📊 Jumlah Stok *
                                </label>
                                <input
                                    type="number"
                                    value={data.quantity}
                                    onChange={(e) => setData('quantity', parseInt(e.target.value) || 0)}
                                    min="0"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="0"
                                    required
                                />
                                {errors.quantity && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.quantity}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    💰 Harga Satuan *
                                </label>
                                <input
                                    type="number"
                                    value={data.unit_price}
                                    onChange={(e) => setData('unit_price', parseFloat(e.target.value) || 0)}
                                    min="0"
                                    step="0.01"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="0.00"
                                    required
                                />
                                {errors.unit_price && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.unit_price}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    📍 Lokasi Penyimpanan *
                                </label>
                                <input
                                    type="text"
                                    value={data.storage_location}
                                    onChange={(e) => setData('storage_location', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Gudang A, Rak 1, dll"
                                    required
                                />
                                {errors.storage_location && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.storage_location}</p>
                                )}
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    📝 Deskripsi
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    placeholder="Deskripsi detail barang (opsional)"
                                />
                                {errors.description && (
                                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-4">
                            <Link
                                href={route('inventory.index')}
                                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                                ❌ Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className={`inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                                    processing
                                        ? 'cursor-not-allowed bg-gray-400'
                                        : 'bg-indigo-600 hover:bg-indigo-700'
                                }`}
                            >
                                {processing ? '⏳ Menyimpan...' : '💾 Simpan Item'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppShell>
    );
}
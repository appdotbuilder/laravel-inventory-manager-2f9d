<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInventoryItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:255|unique:inventory_items,code',
            'description' => 'nullable|string',
            'quantity' => 'required|integer|min:0',
            'unit_price' => 'required|numeric|min:0',
            'storage_location' => 'required|string|max:255',
            'entry_date' => 'required|date',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Nama barang wajib diisi.',
            'code.required' => 'Kode barang wajib diisi.',
            'code.unique' => 'Kode barang sudah digunakan.',
            'quantity.required' => 'Jumlah wajib diisi.',
            'quantity.integer' => 'Jumlah harus berupa angka.',
            'quantity.min' => 'Jumlah tidak boleh negatif.',
            'unit_price.required' => 'Harga satuan wajib diisi.',
            'unit_price.numeric' => 'Harga satuan harus berupa angka.',
            'unit_price.min' => 'Harga satuan tidak boleh negatif.',
            'storage_location.required' => 'Lokasi penyimpanan wajib diisi.',
            'entry_date.required' => 'Tanggal masuk wajib diisi.',
            'entry_date.date' => 'Tanggal masuk harus berformat tanggal yang valid.',
        ];
    }
}
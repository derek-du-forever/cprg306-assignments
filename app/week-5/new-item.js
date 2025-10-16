'use client';

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const increment = () => {
        if (quantity >= 20) return;
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity <= 1) return;
        setQuantity(quantity - 1);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const message = `Item Added: ${name}, Quantity: ${quantity}, Category: ${category}`;
        console.log(message);
        alert(message);
        // Reset form
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form
            className="mx-auto my-4 gap-3 flex flex-col justify-content text-black bg-white w-100 p-4 "
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Item Name"
                className="border border-gray-600 rounded p-2"
                required=""
                value={name}
                onChange={e => setName(e.target.value)}
            ></input>
            <div className="flex space-x-24">
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                        onClick={() => decrement()}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <input
                        readOnly
                        type="text"
                        value={quantity}
                        className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"
                    />
                    <button
                        type="button"
                        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity >= 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                        onClick={() => increment()}
                        disabled={quantity >= 20}
                    >
                        +
                    </button>
                </div>
                <select
                    className="border text-black border-gray-300 rounded p-2"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="produce"> Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Foods</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg"
            >
                Add Item
            </button>
        </form>
    );
}

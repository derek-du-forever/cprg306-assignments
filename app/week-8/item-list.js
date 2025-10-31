'use client';

import Item from '../week-8/item';
import { useState } from 'react';

const STRATEGY_BY_NAME = 'name';
const STRATEGY_BY_CATEGORY = 'category';

export default function ItemList({ items: items, onItemSelect }) {
    const localItems = [...items];
    const [sortBy, setSortBy] = useState(STRATEGY_BY_NAME);
    if (sortBy === STRATEGY_BY_NAME) {
        localItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === STRATEGY_BY_CATEGORY) {
        localItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <button
                    onClick={() => setSortBy(STRATEGY_BY_NAME)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_BY_NAME ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy(STRATEGY_BY_CATEGORY)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_BY_CATEGORY ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Sort by Category
                </button>
                {/* <button
                    onClick={() => setSortBy(STRATEGY_GROUP_BY_CATEGORY)}
                    className={`p-2 my-4 rounded font-bold ${sortBy === STRATEGY_GROUP_BY_CATEGORY ? 'bg-yellow-500' : 'bg-gray-400'}`}
                >
                    Group by Category
                </button> */}
            </div>
            <div className="space-y-2">
                {localItems.map(item => (
                    <Item
                        onSelect={() => onItemSelect(item)}
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}

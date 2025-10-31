'use client';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas';

function removeEmoji(str) {
    return str.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '');
}

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = item => {
        let name = item.name.split(' ')[0];
        name = removeEmoji(name);
        setSelectedItemName(name);
    };
    const handleAddItem = newItem => {
        setItems([...items, newItem]);
    };
    return (
        <main className="p-4 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}

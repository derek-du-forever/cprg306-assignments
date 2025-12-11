'use client';
import ItemList from './item-list';
import NewItem from './new-item';
import { use, useEffect, useState } from 'react';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

function removeEmoji(str) {
    return str.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '');
}

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = item => {
        let name = item.name.split(',')[0];
        name = removeEmoji(name);
        setSelectedItemName(name);
    };

    // Update the handleAddItem function to call the addItem function to add the item to the
    // shopping list. Use user.uid as the userId parameter. Use the id returned from addItem to set
    // the id of the new item. Use setItems to set the state of items to include the new item.
    const handleAddItem = async newItem => {
        if (!user) return;
        const itemId = await addItem(user.uid, newItem);
        setItems(prevItems => [...prevItems, { ...newItem, id: itemId }]);
    };

    const loadItems = async user => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    };

    useEffect(() => {
        if (user) {
            loadItems(user);
        }
    }, [user]);

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

// Author: YUANDONG YANG
// File: item-list.js
// Description: Renders a list of shopping items using the Item component.

import Item from './item.js';

export default function ItemList() {
    // Define an array of shopping items
    // Each object contains name, quantity, and category properties
    const items = [
        { name: 'milk, 4 L 🥛', quantity: 1, category: 'dairy' },
        { name: 'bread 🍞', quantity: 2, category: 'bakery' },
        { name: 'eggs, dozen 🥚', quantity: 2, category: 'dairy' },
        { name: 'bananas 🍌', quantity: 6, category: 'produce' },
        { name: 'broccoli 🥦', quantity: 3, category: 'produce' },
        { name: 'chicken breasts, 1 kg 🍗', quantity: 1, category: 'meat' },
        { name: 'pasta sauce 🍝', quantity: 3, category: 'canned goods' },
        { name: 'spaghetti, 454 g 🍝', quantity: 2, category: 'dry goods' },
        { name: 'toilet paper, 12 pack 🧻', quantity: 1, category: 'household' },
        { name: 'paper towels, 6 pack', quantity: 1, category: 'household' },
        { name: 'dish soap 🍽️', quantity: 1, category: 'household' },
        { name: 'hand soap 🧼', quantity: 4, category: 'household' },
    ];

    return (
        <div>
            {items.map((item, index) => (
                <Item
                    key={index} // Unique key required by React for rendering lists
                    name={item.name} // Pass item name as a prop
                    quantity={item.quantity} // Pass item quantity as a prop
                    category={item.category} // Pass item category as a prop
                />
            ))}
        </div>
    );
}

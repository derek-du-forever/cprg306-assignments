"use client"

import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prev) => {
            if (prev < 20) {
                return prev + 1;
            }
            return prev;
        });
    };

    const decrement = () => {
        setQuantity((prev) => {
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    };

    const btnClass = (disabled) => {
        return `px-3 py-1 rounded font-extrabold text-lg text-white ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`;
    }

    return (
        <main className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 ">
            <button type="button" className={btnClass(quantity <= 1)} onClick={() => decrement()}
                    disabled={quantity <= 1}>-
            </button>
            <input readOnly type="text" value={quantity}
                   className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"/>
            <button type="button" className={btnClass(quantity >= 20)} onClick={() => increment()}
                    disabled={quantity >= 20}>+
            </button>
        </main>
    );
}
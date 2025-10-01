"use client"
import {useState} from "react";

export default function NewItem() {
    // Create a state variable 'quantity' using useState Hook with initial value of 1
    const [quantity, setQuantity] = useState(1);
    
    // Function to increment the quantity
    const increment = () => {
        setQuantity((prev) => {
            // If current quantity is less than 20, increment by 1
            if (prev < 20) {
                return prev + 1;
            }
            // Otherwise, keep it unchanged (maximum value is 20)
            return prev;
        });
    };
    
    // Function to decrement the quantity
    const decrement = () => {
        setQuantity((prev) => {
            // If current quantity is greater than 1, decrement by 1
            if (prev > 1) {
                return prev - 1;
            }
            // Otherwise, keep it unchanged (minimum value is 1)
            return prev;
        });
    };
    
    // Function to return appropriate CSS classes based on whether the button is disabled
    const btnClass = (disabled) => {
        // If disabled, return gray background and disabled cursor style
        // If not disabled, return blue background with hover effect
        return `px-3 py-1 rounded font-extrabold text-lg text-white ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`;
    }
    
    return (
        // Main container: centered with white background and padding
        <main className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 ">
            {/* Decrement button: disabled when quantity <= 1 */}
            <button type="button" className={btnClass(quantity <= 1)} onClick={() => decrement()}
                    disabled={quantity <= 1}>-
            </button>
            
            {/* Read-only input field: displays the current quantity */}
            <input readOnly type="text" value={quantity}
                   className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"/>
            
            {/* Increment button: disabled when quantity >= 20 */}
            <button type="button" className={btnClass(quantity >= 20)} onClick={() => increment()}
                    disabled={quantity >= 20}>+
            </button>
        </main>
    );
}

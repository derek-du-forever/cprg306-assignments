import PropTypes from 'prop-types';

export default function Item({name, quantity, category}) {
    return (
        <ul className="bg-slate-800 p-2 my-4 w-96">
            <li className="font-bold text-2xl">{name}</li>
            <li className="text-lg">Buy {quantity} in {category}</li>
        </ul>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};
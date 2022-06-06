import React, {useState, useEffect, useContext} from 'react'
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
    let lastCategory = null;
    let tuoteTaulu = [];
    props.products.forEach((product) => {
        if (product.category !== lastCategory)
            tuoteTaulu.push(<CategoryRow />)
        tuoteTaulu.push((props.searchText && product.name.search(props.searchText) < 0)
            || (props.showAll || product.stocked) &&
            <ProductRow product={product} key={product.name} />
        )
        lastCategory = product.category;
    });
    return (
        <div className='laatikko'>
            <table className='tuotetaulu'><tbody>
                <tr><th>Name</th><th>Price {props.searchText}</th></tr>
                {tuoteTaulu}
            </tbody></table>
        </div>
    )
}

export default ProductTable
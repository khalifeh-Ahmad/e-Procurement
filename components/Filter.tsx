import { useState } from 'react';

import data from '../products.json';
import ProductList from './ProductList';


function Filter() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <input type="text" placeholder="Search among 12000 products"
                onChange={
                    event => { setSearchTerm(event.target.value) }
                } />
            {
                data.filter((val) => {
                    if (searchTerm == '') {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div key={key}>
                            {/* <p>{val.category}</p> */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Filter





//import React, { useState } from "react";
// import data from '../products.json';


// const Filter = () => {
//     const [item, setItem] = useState(data);

//     const menuItems = [...new Set(data.map((Val) => Val.category))];

//     const filterItem = (curcat) => {
//         const newItem = data.filter((newVal) => {
//             return newVal.category === curcat;
//         });
//         setItem(newItem);
//     };
//     return (
//         <>
//             <div className="container-fluid">
//                 <div className="row">
//                     <h1 className="col-12 text-center my-3 fw-bold">Product Filtering</h1>
//                     <Buttons
//                         filterItem={filterItem}
//                         setItem={setItem}
//                         menuItems={menuItems}
//                     />

//                 </div>
//             </div>
//         </>
//     );
// };

// export default Filter;
import React, {  } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
render() {
    return /*#__PURE__*/(
    <div>
        <SearchBar></SearchBar>
        <ProductTable products={this.props.products}/>
    </div>
    
    );


}}

export default FilterableProductTable;
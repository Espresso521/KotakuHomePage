import React, {  } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
render() {
    return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(SearchBar, null), /*#__PURE__*/
    React.createElement(ProductTable, { products: this.props.products })));


}}

export default FilterableProductTable;
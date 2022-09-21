import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
    if (product.category !== lastCategory) {
        rows.push( /*#__PURE__*/
        React.createElement(ProductCategoryRow, {
        category: product.category,
        key: product.category }));

    }
    rows.push( /*#__PURE__*/
    React.createElement(ProductRow, {
        product: product,
        key: product.name }));

    lastCategory = product.category;
    });

    return /*#__PURE__*/(
    React.createElement("table", null, /*#__PURE__*/
    React.createElement("thead", null, /*#__PURE__*/
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("th", null, "Name"), /*#__PURE__*/
    React.createElement("th", null, "Price"))), /*#__PURE__*/

    React.createElement("tbody", null, rows)));


}}

export default ProductTable;
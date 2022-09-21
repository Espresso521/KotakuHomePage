import React from 'react'

class ProductRow extends React.Component {
render() {
    const product = this.props.product;
    const name = product.stocked ?
    product.name : /*#__PURE__*/
    React.createElement("span", { style: { color: 'red' } },
    product.name);


    return /*#__PURE__*/(
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("td", null, name), /*#__PURE__*/
    React.createElement("td", null, product.price)));


}}

export default ProductRow;
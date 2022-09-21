import React, { Component } from 'react'

class ProductCategoryRow extends Component {
render() {
    const category = this.props.category;
    return /*#__PURE__*/(
    React.createElement("tr", null, /*#__PURE__*/
    React.createElement("th", { colSpan: "2" },
    category)));


}}

export default ProductCategoryRow;
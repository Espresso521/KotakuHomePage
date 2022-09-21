import React, {  } from 'react'

class SearchBar extends React.Component {
render() {
    return /*#__PURE__*/(
    React.createElement("form", null, /*#__PURE__*/
    React.createElement("input", { type: "text", placeholder: "Search..." }), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("input", { type: "checkbox" }),
    ' ', "Only show products in stock")));

}}

export default SearchBar;
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

const StyledSpan = styled.span`
  color: red;
`

const CheckboxTableCell = styled(TableCell)`
  width: 20px !important;
` 
class ProductRow extends React.Component {
  render() {
    const { product, selected, onSelect, onUnSelect } = this.props
    const name = product.stocked ?
      product.name :
      <StyledSpan >
        {product.name}
      </StyledSpan>;

    return (
      <TableRow>
        <CheckboxTableCell padding="checkbox">
          <Checkbox
            checked={selected}
            color="primary"
            disabled={!product.stocked}
            onChange={() => selected ? onUnSelect(product) : onSelect(product)} />
        </CheckboxTableCell>
        <TableCell component="td" scope="row">
          {name}
        </TableCell>
        <TableCell numeric>{product.price}</TableCell>
      </TableRow>
    );
  }
}

export default ProductRow
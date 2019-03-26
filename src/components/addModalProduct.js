import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import _ from "lodash";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { closeAddProductModal, addProduct } from "../redux/ActionCreators";
import { Checkbox } from "@material-ui/core";

class AddModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: "", category: "", inStock: false };
  }

  handleClose = () => {
    this.props.closeAddProductModal();
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleCheckedChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleAdd = () => {
    let pro = {
      category: this.state.category,
      price: this.state.price,
      stocked: this.state.inStock,
      name: this.state.name
    };

    this.props.addProduct(pro);
    this.props.closeAddProductModal();
  };

  render() {
    const { addProductModal } = this.props;
    return (
      <React.Fragment>
        <Dialog
          open={addProductModal}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Product</DialogTitle>
          <DialogContent>
            <DialogContentText>Add product modal</DialogContentText>
          </DialogContent>
          <TextField
            id="product-name-input"
            label="Product Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
            fullWidth
          />
          <TextField
            id="category-name-input"
            label="Category"
            value={this.state.category}
            onChange={this.handleChange("category")}
            margin="normal"
            fullWidth
          />
          <TextField
            id="price-input"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange("price")}
            margin="normal"
            fullWidth
          />
          <label>
            In Stock:
            <Checkbox
              checked={this.state.inStock}
              onChange={this.handleCheckedChange("inStock")}
              value="inStock"
              color="primary"
            />
          </label>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              CANCEL
            </Button>
            <Button onClick={this.handleAdd} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  addProductModal: state.products.addProductModal
});

const mapDispatchToProps = dispatch => ({
  closeAddProductModal: () => dispatch(closeAddProductModal()),
  addProduct: product => dispatch(addProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddModalProduct);

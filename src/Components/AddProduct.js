import React from "react";
import { Segment, Container, Input, Button, Table } from "semantic-ui-react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: "",
      productlist: [],
    };
  }

  /*funcion que asigna el nuevo valor ingresado por el input al producto*/
  ChangeProduct = (Newproduct) => {
    this.setState({ product: Newproduct });
  };
  /*rastreo del contenido del input y envio a la funcion de asignacion de nuevo valor*/
  AsignProduct = (event) => {
    console.log(event.target.value);
    this.ChangeProduct(event.target.value);
  };

  /*obtencion y actualizacion del valor de producto obtenido en funcion enviada por props a InputProduct*/
  AddNewProduct(product) {
    let newlist = this.state.productlist;
    newlist.push(product);
    this.setState({
      productlist: newlist,
      product: "",
    });
  }

  render() {
    return (
      <div>
        <Container text textAlign="center">
          <Segment>
            <form
              onSubmit={(event) =>
                this.AddNewProduct(this.state.product, event.preventDefault())
              }
            >
              <Input
                type="text"
                name="product"
                placeholder="Please, write the product..."
                value={
                  this.state.product
                } /*asignacion del nuevo valor que cambiara por la entrada del teclado*/
                onChange={this.AsignProduct}
              >
                <input />
              </Input>
              <Button type="submit" color="green">
                ADD PRODUCT
              </Button>
            </form>
          </Segment>
        </Container>

        <Container text textAlign="center">
          <Segment>
            <Table color="grey" inverted textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>LIST OF PRODUCTS:</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {this.state.productlist.map((addedproduct) => (
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>{addedproduct}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default AddProduct;

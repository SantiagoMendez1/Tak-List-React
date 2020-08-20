import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

class Head extends React.Component {
  render() {
    return (
      <div>
        <Segment padded="very" textAlign="center" inverted basic color="teal">
          <Image size="tiny" src={this.props.image} circular spaced />

          <Header as="h1">{this.props.PrincipalText}</Header>
          <Header as="h4">{this.props.SecondText}</Header>
        </Segment>
      </div>
    );
  }
}

export default Head;

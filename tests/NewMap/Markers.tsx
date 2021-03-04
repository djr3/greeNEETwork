import React, { PureComponent } from "react";
import { Pin } from "./Pin";

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export class Markers extends PureComponent<{ data: any; onClick?: any }> {
  render() {
    const { data, onClick } = this.props;

    return data.map((place, index) => {
      return <Pin key={`p-${index}`} place={place} onClick={onClick} />;
    });
  }
}

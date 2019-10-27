import React, { Component } from 'react'
import tile from './tile'

class Tiles extends Component {
    render() {
        return this.props.tileList.map((tileitem) => (
            <tile
                name={tileitem.name}
                location={tileitem.location}
                price={tileitem.price}
            />
        ));
    }
}
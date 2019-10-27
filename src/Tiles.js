import React, { Component } from 'react'
import tile from './tile'

class Tiles extends Component {
    render() {
        console.log(this.state.tileList);
        return "hi"
        // this.props.tileList.map((tileitem) => (
        //     <tile
        //         name={tileitem.name}
        //         location={tileitem.location}
        //         price={tileitem.price}
        //     />
        // ));
    }
}

export default Tiles
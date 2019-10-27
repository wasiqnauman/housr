import React from 'react'


class tile extends React.Component {
    render() {
        return (
            <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.location}</li>
                    <li className="list-group-item">{this.props.price}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Yes</a>
                        <a href="#" className="card-link">No</a>
                    </div>
                </div>
        );
    }
}
export default tile;
import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class RenderAlbum extends Component {
    constructor(props) {
        super(props)
    
    }
    
    render() {
        const message = this.props.errorMessage;
        const data = Array.from(this.props.albums);
        const new_data = data.map((album,index) => {
            return (
             <div className="col-3 col-sm-2" key={index}>
                 <a><img src={album.thumbnailUrl}></img></a>
                 <p>{album.title}</p>
             </div>
             
            );
        });
        return (
            <div className="row mt-3 ml-3">
               {
                   message? message.message : new_data
               } 
            </div>
        )
    }
}

export default RenderAlbum

import React, { Component } from 'react'
import  {Form, FormGroup, Label, Input} from 'reactstrap';
import RenderAlbum from './RenderAlbum';

export class Album extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             album: '',
             albumdata: '',
             errorMessage: ''
        };
        
    // binding object
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    }
        
      HandleChange  = (event) => {
          this.setState({
              album: event.target.value
          });
     }
        
      HandleSubmit = (event) => {
          event.preventDefault();
          fetch(`https://jsonplaceholder.typicode.com/albums/${this.state.album}/photos`)
                .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw response
                })
                .then(data  =>this.setState({
                    albumdata: data,
                    errorMessage: ''
                }))
                .catch(error => this.setState({
                    albumdata: '',
                    errorMessage: error
                }))

       // clear form data after submittion
       
     }
     HandleFocus = () =>{
         this.setState({
             album: ''
         });
     }

    render() {
        return (

<div class="topnav">


<div class="search-container">
<br></br>
<h2>ALBUMS</h2>

<p>On this web page, you can get album photos by their ID by inputing the album Id in the search box below.</p>
<form class="example" action="/action_page.php">
<Input type="text" name="album_id" id="albumId" placeholder="Enter the Album ID" value={this.state.album} onChange={this.HandleChange} onFocus={this.HandleFocus} />
  <button type="button"  onClick = {this.HandleSubmit}><i class="fa fa-search"></i></button>
</form>






  <RenderAlbum albums ={this.state.albumdata} errorMessage = {this.state.errorMessage}></RenderAlbum>

</div>  
</div>
 
                


        )
    }
}

export default Album

import React, { Component } from 'react';
import axios from 'axios';


export default class TenderDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }

        });
    }

  render() {

    const {tenderId,tName,tValue,email,number} = this.state.post;

    return (
      <div style={{marginTop:'20px'}}>
        <h4>{tName}</h4>
        <hr/>

        <d1 className="row">
            
            <dt className="col-sm-3">Tender ID</dt>
            <dd className="col-sm-9">{tenderId}</dd>

            <dt className="col-sm-3">Tender Name</dt>
            <dd className="col-sm-9">{tName}</dd>

            <dt className="col-sm-3">Tender Value</dt>
            <dd className="col-sm-9">{tValue}</dd>

            <dt className="col-sm-3">Email Address</dt>
            <dd className="col-sm-9">{email}</dd>

            <dt className="col-sm-3">Contact Number</dt>
            <dd className="col-sm-9">{number}</dd>




        </d1>

        
        </div>
    )
  }
}

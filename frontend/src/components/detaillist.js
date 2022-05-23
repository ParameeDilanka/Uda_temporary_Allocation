import React, { Component} from 'react';
import axios from 'axios';

const Detail = props => (
  <tr>
    <td>{props.detail.reciptno}</td>
    <td>{props.detail.interrestrate}</td>
    <td>{props.detail.approved}</td>
    <td>{props.detail.period}</td>
    <td>{props.detail.amount}</td>
    <td>{props.detail.officeincharge}</td>
    <td>{props.detail.allocatedvalue}</td>
    <td>{props.detail.first}</td>
    <td>{props.detail.second}</td>
    <td>{props.detail.third}</td>
    <td>{props.detail.fourth}</td>
    <td>{props.detail.fifth}</td>
    <td>{props.detail.sixth}</td>
    <td>{props.detail.seventh}</td>
    <td>{props.detail.eightth}</td>
    <td>{props.detail.nineth}</td>
    <td>{props.detail.tenth}</td>
    <td>
    <a href={"/editd/"+props.detail._id}
   class="btn btn-warning" id="delete">
      <i class="fas fa-edit">&nbsp;Edit</i></a>
      &nbsp;
  
    <a href="#" onClick={() => { props.deleteDetail(props.detail._id) }}
   class="btn btn-danger" id="delete">
      <i class="fas fa-trash-alt">&nbsp;Delete</i></a>
</td>
  </tr>
);


export default class DetailList extends Component {
  constructor(props) {
    super(props);
    
    this.deleteDetail = this.deleteDetail.bind(this)

    this.state = {details: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/details/')
      .then(response => {
        this.setState({ details: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDetail(id) {
    axios.delete('http://localhost:5000/details/'+id)
    .then(() => {
      alert("Detail Deleted")
    }).catch((err)=>{
      alert("Failed to delete detail")
    })

    this.setState({
      details: this.state.details.filter(el => el._id !== id)
    })
  }

  detailList() {
    return this.state.details.map(currentdetail => {
      return <Detail detail={currentdetail} deleteDetail={this.deleteDetail} key={currentdetail._id}/>;
    })
  }
  render() {
    return (
      <div className ="container">
        <center>
        <h3>Detail List</h3><br></br></center>
      <div>
        <table className="container">
        <table className="table">
        <table bgcolor="#ddddff" width="100%">
          <thead  className="text-gold">
            <tr>
            <th scope="col">Security Deposit and Recipt No</th>
              <th scope="col">Rate Of Interrest</th>
              <th scope="col">Approved By</th>
              <th scope="col"> Due Period</th>
              <th scope="col">Due Amount</th>
              <th scope="col">Office in Charge</th>
              <th scope="col">Allocated Value</th>
              <th scope="col">First Renewed Value and Period</th>
              <th scope="col">Second Renewed Value and Period</th>
              <th scope="col">Third Renewed Value and Period</th>
              <th scope="col">Fourth Renewed Value and Period</th>
              <th scope="col">Fifth Renewed Value and Period</th>
              <th scope="col">Sixth Renewed Value and Period</th>
              <th scope="col">Seventh Renewed Value and Period</th>
              <th scope="col">Eightth Renewed Value and Period</th>
              <th scope="col">Nineth Renewed Value and Period</th>
              <th scope="col">Tenth Renewed Value and Period</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.detailList() }
            </tbody>
            </table> 
        </table>
        </table>
      </div>
      </div>
    )
  }
}











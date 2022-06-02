import React, { Component} from 'react';
import axios from 'axios';

const Temp = props => (
  <tr>
    <td>{props.temp.refno}</td>
    <td>{props.temp.fileno}</td>
    <td>{props.temp.projcode}</td>
    <td>{props.temp.cuscode}</td>
    <td>{props.temp.name}</td>
    <td>{props.temp.priverteaddr}</td>
    <td>{props.temp.premisesaddr}</td>
    <td>{props.temp.extent}</td>
    <td>{props.temp.planno}</td>
    <td>{props.temp.lotno}</td>
    <td>{props.temp.dateofallocation}</td>
    <td>{props.temp.handedoverdate}</td>
    <td>{props.temp.periodofallocation}</td>
    <td>{props.temp.expdate}</td>
    <td>{props.temp.rent}</td>
    <td>{props.temp.taxes}</td>
    <td>
    <a href={"/edit/"+props.temp._id}
   class="btn btn-warning" id="delete">
      <i class="fas fa-edit">&nbsp;Edit</i></a>
      &nbsp;
  
    <a href="#" onClick={() => { props.deleteTemp(props.temp._id) }}
   class="btn btn-danger" id="delete">
      <i class="fas fa-trash-alt">&nbsp;Delete</i></a>
</td>
  </tr>
);

export default class TempList extends Component {
  constructor(props) {
    super(props);
    
    this.deleteTemp = this.deleteTemp.bind(this)

    this.state = {temps: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/temps/')
      .then(response => {
        this.setState({ temps: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTemp(id) {
    axios.delete('http://localhost:5000/temps/'+id)
    .then(() => {
      alert("Temporary Allocation Deleted")
    }).catch((err)=>{
      alert("Failed to delete temporary allocation")
    })

    this.setState({
      temps: this.state.temps.filter(el => el._id !== id)
    })
  }

  tempList() {
    return this.state.temps.map(currenttemp => {
      return <Temp temp={currenttemp} deleteTemp={this.deleteTemp} key={currenttemp._id}/>;
    })
  }
    
  filterContent(temps, searchTerm){
    const result=temps.filter((temp) =>
    temp.firstname.includes(searchTerm));
  
  this.setState({temps: result});
  }



  handleTextSearch =(e)=>{
    const searchTerm=e.currentTarget.value;
    axios.get('http://localhost:5000/temps/')
    .then((res) =>{
 if(res.data.success){
   this.filterContent(res.data.temp, searchTerm)
 }
   });
  };

  render() {
    return (
      <div className ="container">
        <center>
        <h3>Temporary Allocation List</h3><br></br></center>
      <div>
        <table className="container">
        <table className="table">
        <table bgcolor="#ddddff" align="center" width="100%">
          <thead  className="text-gold">
            <tr>
              <th scope="col">Agreement Reference No</th>
              <th scope="col">File No</th>
              <th scope="col">Project Code</th>
              <th scope="col">Customer Code</th>
              <th scope="col">Name of the Customer</th>
              <th scope="col">Priverte Address</th>
              <th scope="col">Premises Address</th>
              <th scope="col">Extent</th>
              <th scope="col">Plan No</th>
              <th scope="col">Lot No</th>
              <th scope="col">Date Of Allocation</th>
              <th scope="col">Physical Posession Handed Over Date</th>
              <th scope="col">Period Of Allocation</th>
              <th scope="col">Date of Expring</th>
              <th scope="col">Current Monthly Rent Rs</th>
              <th scope="col">Taxes</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.tempList() }
            </tbody>
            </table> 
        </table>
        </table>
      </div>
      </div>
    )
  }
}











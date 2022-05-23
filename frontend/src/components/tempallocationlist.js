import React, { Component} from 'react';
import axios from 'axios';

const Appointment = props => (
  <tr>

    <td>{props.appointment.refno}</td>
    <td>{props.appointment.fileno}</td>
    <td>{props.appointment.projcode}</td>
    <td>{props.appointment.cuscode}</td>
    <td>{props.appointment.name}</td>
    <td>{props.appointment.priverteaddr}</td>
    <td>{props.appointment.premisesaddr}</td>
    <td>{props.appointment.extent}</td>
    <td>{props.appointment.planno}</td>
    <td>{props.appointment.lotno}</td>
    <td>{props.appointment.dateofallocation}</td>
    <td>{props.appointment.handedoverdate}</td>
    <td>{props.appointment.periodofallocation}</td>
    <td>{props.appointment.expdate}</td>
    <td>{props.appointment.rent}</td>
    <td>{props.appointment.taxes}</td>
    <td>
    <a href={"/edit/"+props.appointment._id}
   class="btn btn-warning" id="delete">
      <i class="fas fa-edit">&nbsp;Edit</i></a>
      &nbsp;
  
    <a href="#" onClick={() => { props.deleteAppointment(props.appointment._id) }}
   class="btn btn-danger" id="delete">
      <i class="fas fa-trash-alt">&nbsp;Delete</i></a>
</td>
  </tr>
);

export default class AppointmentsList extends Component {
  constructor(props) {
    super(props);
    
    this.deleteAppointment = this.deleteAppointment.bind(this)

    this.state = {appointments: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/appointments/')
      .then(response => {
        this.setState({ appointments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAppointment(id) {
    axios.delete('http://localhost:5000/appointments/'+id)
    .then(() => {
      alert("Temporary Allocation Deleted")
    }).catch((err)=>{
      alert("Failed to delete temporary allocation")
    })

    this.setState({
        appointments: this.state.appointments.filter(el => el._id !== id)
    })
  }

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment} deleteAppointment={this.deleteAppointment} key={currentappointment._id}/>;
    })
  }
    
  filterContent(appointments, searchTerm){
    const result=appointments.filter((appointment) =>
    appointment.firstname.includes(searchTerm));
  
  this.setState({appointments: result});
  }



  handleTextSearch =(e)=>{
    const searchTerm=e.currentTarget.value;
    axios.get('http://localhost:5000/appointments/')
    .then((res) =>{
 if(res.data.success){
   this.filterContent(res.data.appointment, searchTerm)
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
            { this.appointmentList() }
            </tbody>
            </table> 
        </table>
        </table>
      </div>
      </div>
    )
  }
}











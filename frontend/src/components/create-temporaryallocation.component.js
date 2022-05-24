import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTemp extends Component {
  constructor(props) {
    super(props);
    this.onChangeRefno = this.onChangeRefno.bind(this);
    this.onChangeFileno = this.onChangeFileno.bind(this);
    this.onChangeProjcode = this.onChangeProjcode.bind(this);
    this.onChangeCuscode = this.onChangeCuscode.bind(this);
    this.onChangeName= this.onChangeName.bind(this);
    this.onChangePriverteaddr = this.onChangePriverteaddr.bind(this);
    this.onChangePremisesaddr = this.onChangePremisesaddr.bind(this);
    this.onChangeExtent = this.onChangeExtent.bind(this);
    this.onChangePlanno = this.onChangePlanno.bind(this);
    this.onChangeLotno = this.onChangeLotno.bind(this);
    this.onChangeDateofallocation = this.onChangeDateofallocation.bind(this);
    this.onChangeHandedoverdate= this.onChangeHandedoverdate.bind(this);
    this.onChangePeriodofallocation = this.onChangePeriodofallocation.bind(this);
    this.onChangeExpdate = this.onChangeExpdate.bind(this);
    this.onChangeRent = this.onChangeRent.bind(this);
    this.onChangeTaxes = this.onChangeTaxes.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      refno:'',
      fileno:'',
      projcode: '',
      cuscode: '',
      name: '',
      priverteaddr:'',
      premisesaddr:'',
      extent:'',
      planno:'',
      lotno: '',
      dateofallocation: '',
      handedoverdate: '',
      periodofallocation:'',
      expdate:'',
      rent:'',
      taxes:'',
      users: []
    }
  }
  onChangeRefno(e) {
    this.setState({
      refno: e.target.value
    })
  }
 
  onChangeFileno(e) {
    this.setState({
      fileno: e.target.value
    })
  }


  onChangeProjcode(e) {
    this.setState({
      projcode: e.target.value
    })
  }

  onChangeCuscode(e) {
    this.setState({
      cuscode: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangePriverteaddr(e) {
    this.setState({
      priverteaddr: e.target.value
    })
  } 
  onChangePremisesaddr(e) {
    this.setState({
      premisesaddr: e.target.value
    })
  }
  

  onChangeExtent(e) {
    this.setState({
      extent: e.target.value
    })
  }
 
  onChangePlanno(e) {
    this.setState({
      planno: e.target.value
    })
  }


  onChangeLotno(e) {
    this.setState({
      lotno: e.target.value
    })
  }

  onChangeDateofallocation(e) {
    this.setState({
      dateofallocation: e.target.value
    })
  }

  
  onChangeHandedoverdate(e) {
    this.setState({
      handedoverdate: e.target.value
    })
  }

  onChangePeriodofallocation(e) {
    this.setState({
      periodofallocation: e.target.value
    })
  } 
  onChangeExpdate(e) {
    this.setState({
      expdate: e.target.value
    })
  }
  onChangeRent(e) {
    this.setState({
      rent: e.target.value
    })
  } 
  onChangeTaxes(e) {
    this.setState({
      taxes: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const temp = {
      refno: this.state.refno,
      fileno: this.state.fileno,
      projcode: this.state.projcode,
      cuscode: this.state.cuscode,
     name: this.state.name,
      priverteaddr: this.state.priverteaddr,
      premisesaddr: this.state.premisesaddr,
      extent: this.state.extent,
      planno: this.state.planno,
      lotno: this.state.lotno,
      dateofallocation: this.state.dateofallocation,
      handedoverdate: this.state.handedoverdate,
      periodofallocation: this.state.periodofallocation,
      expdate: this.state.expdate,
      rent: this.state.rent,
      taxes: this.state.taxes
      
    }

    console.log(temp);

    axios.post('http://localhost:5000/temps/add',temp)
    .then(() => {
      alert("Temporary Allocation Added")
    }).catch((err)=>{
      alert("Failed to add temporary allocation")
    })
  //  window.location = '/';
  }

  render() {
    return (
    <div>
      <center>
      <h3>Create Temporary Allocation</h3><br></br>
      </center>
      <center>
      <form  className="form1"onSubmit={this.onSubmit} >
      <div>
      <div className="form-group"   style={{float:"left"}}> 
          <label>Agreement Reference No: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.refno}
              onChange={this.onChangeRefno}
              />
        </div> 
        <div className="form-group"   style={{float:"right"}}> 
          <label>Project Code: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.projcode}
              onChange={this.onChangeProjcode}
              />
        </div> 
        <div className="form-group"   style={{float:"left"}}> 
          <label>File No: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.fileno}
              onChange={this.onChangeFileno}
              />
        </div>       
      
        <div className="form-group"   style={{float:"right"}}> 
          <label>Customer Code: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.cuscode}
              onChange={this.onChangeCuscode}
              />
        </div>

        <div className="form-group"   style={{float:"left"}}> 
          <label>Name of the Customer: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
       
        <div className="form-group"   style={{float:"right"}}> 
          <label>Priverte Address: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.priverteaddr}
              onChange={this.onChangePriverteaddr}
              />
        </div>

        <div className="form-group"   style={{float:"left"}}> 
          <label>Premises Address: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.premisesaddr}
              onChange={this.onChangePremisesaddr}
              />
        </div>
        <div className="form-group"  style={{float:"right"}}> 
          <label>Extent: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.extent}
              onChange={this.onChangeExtent}
              />
        </div> 
        <div className="form-group" style={{float:"left"}}> 
          <label>Plan No: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.planno}
              onChange={this.onChangePlanno}
              />
        </div> 
        <div className="form-group"  style={{float:"right"}}> 
          <label>Lot No: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.lotno}
              onChange={this.onChangeLotno}
              />
        </div>       
      
        <div className="form-group"  style={{float:"left"}}> 
          <label>Date Of Allocation: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.dateofallocation}
              onChange={this.onChangeDateofallocation}
              />
        </div>

        <div className="form-group"  style={{float:"right"}}> 
          <label>Physical Posession Handed Over Date: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.handedoverdate}
              onChange={this.onChangeHandedoverdate}
              />
        </div>
       
        <div className="form-group"  style={{float:"left"}}> 
          <label>Period Of Allocation: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.periodofallocation}
              onChange={this.onChangePeriodofallocation}
              />
        </div>

        <div className="form-group"  style={{float:"right"}}> 
          <label>Date of Expering: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.expdate}
              onChange={this.onChangeExpdate}
              />
        </div>

        <div className="form-group"  style={{float:"left"}}> 
          <label>Current Monthly Rent Rs: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.rent}
              onChange={this.onChangeRent}
              />
        </div>
        
        <div className="form-group"  style={{float:"right"}}> 
          <label>Taxes: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.taxes}
              onChange={this.onChangeTaxes}
              />
        </div>
        </div>
        <div className="form-group">
        <input type ='submit' value='Create' name='Create' className="form-control btn btn-primary" style = {{marginTop:"30px"}}/>
        </div>
     </form>
     </center>
    </div>
    )
  }
}
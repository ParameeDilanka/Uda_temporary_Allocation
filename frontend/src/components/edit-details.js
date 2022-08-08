import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
export default class EditDetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeReciptno = this.onChangeReciptno.bind(this);
    this.onChangeInterrestrate = this.onChangeInterrestrate.bind(this);
    this.onChangeApproved = this.onChangeApproved.bind(this);
    this.onChangePeriod = this.onChangePeriod.bind(this);
    this.onChangeAmount= this.onChangeAmount.bind(this);
    this.onChangeOfficeincharge = this.onChangeOfficeincharge.bind(this);
    this.onChangeAllocatedvalue = this.onChangeAllocatedvalue.bind(this);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeSecond = this.onChangeSecond.bind(this);
    this.onChangeThird = this.onChangeThird.bind(this);
    this.onChangeFourth = this.onChangeFourth.bind(this);
    this.onChangeFifth= this.onChangeFifth.bind(this);
    this.onChangeSixth= this.onChangeSixth.bind(this);
    this.onChangeSeventh = this.onChangeSeventh.bind(this);
    this.onChangeEightth = this.onChangeEightth.bind(this);
    this.onChangeNineth = this.onChangeNineth.bind(this);
    this.onChangeTenth = this.onChangeTenth.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      reciptno:'',
      interrestrate:'',
      approved:'',
      period: '',
      amount: '',
      officeincharge: '',
      allocatedvalue:'',
      first:'',
      second:'',
      third:'',
      fourth: '',
      fifth: '',
      sixth: '',
      seventh:'',
      eightth:'',
      nineth:'',
      tenth:'',
      users: []
    }
  }
    
  componentDidMount() {
    axios.get('http://localhost:5000/details/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          reciptno: response.data.reciptno,
          interrestrate: response.data.interrestrate,
          approved: response.data.approved,
          period: response.data.period,
          amount: response.data.amount,
          officeincharge: response.data.officeincharge,
          allocatedvalue: response.data.allocatedvalue,
          first: response.data.first,
          second: response.data.second,
          third: response.data.third,
          fourth: response.data.fourth,
          fifth: response.data.fifth,
          sixth: response.data.sixth,
          seventh: response.data.seventh,
          eightth: response.data.eightth,
          nineth: response.data.nineth,
          tenth: response.data.tenth  
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    onChangeReciptno(e) {
      this.setState({
        reciptno: e.target.value
      })
    }
    onChangeInterrestrate(e) {
      this.setState({
          interrestrate: e.target.value
      })
    }
   
    onChangeApproved(e) {
      this.setState({
          approved: e.target.value
      })
    }
  
    onChangePeriod(e) {
      this.setState({
          period: e.target.value
      })
    }
  
    onChangeAmount(e) {
      this.setState({
        amount: e.target.value
      })
    }
  
    onChangeOfficeincharge(e) {
      this.setState({
        officeincharge: e.target.value
      })
    } 
    onChangeAllocatedvalue(e) {
      this.setState({
        allocatedvalue: e.target.value
      })
    }
    
  
    onChangeFirst(e) {
      this.setState({
        first: e.target.value
      })
    }
   
    onChangeSecond(e) {
      this.setState({
        second: e.target.value
      })
    }
  
  
    onChangeThird(e) {
      this.setState({
        third: e.target.value
      })
    }
  
    onChangeFourth(e) {
      this.setState({
        fourth: e.target.value
      })
    }
  
    
    onChangeFifth(e) {
      this.setState({
        fifth: e.target.value
      })
    }
  
    onChangeSixth(e) {
      this.setState({
        sixth: e.target.value
      })
    } 
    onChangeSeventh(e) {
      this.setState({
        seventh: e.target.value
      })
    }
    onChangeEightth(e) {
      this.setState({
        eightth: e.target.value
      })
    } 
    onChangeNineth(e) {
      this.setState({
        nineth: e.target.value
      })
    }
    onChangeTenth(e) {
      this.setState({
        tenth: e.target.value
      })
    }
  
    onSubmit(e) {
      e.preventDefault();
  

    const detail = {
      reciptno: this.state.reciptno,
      interrestrate: this.state.interrestrate,
      approved: this.state.approved,
      period: this.state.period,
      amount: this.state.amount,
      officeincharge: this.state.officeincharge,
      allocatedvalue: this.state.allocatedvalue,
      first: this.state.first,
      second: this.state.second,
      third: this.state.third,
      fourth: this.state.fourth,
      fifth: this.state.fifth,
      sixth: this.state.sixth,
      seventh: this.state.seventh,
      eightth: this.state.eightth,
      nineth: this.state.nineth,
      tenth: this.state.tenth
      
    }
    console.log(detail);

    axios.post('http://localhost:5000/details/update/' + this.props.match.params.id, detail)
    .then(() => {
      alert("Detail Edited")
    }).catch((err)=>{
      alert("Failed to edit Detail")
    })
window.location = '/detaillist';
  }
  render() {
    return (
    <div>
      <center>
      <h3>Edit Details</h3><br></br>
      </center>
      <center>
      <form  className="form1"onSubmit={this.onSubmit} >
      <div>
      <div className="form-group"   style={{float:"left"}}> 
          <label>Security Deposit and Recipt No: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.reciptno}
              onChange={this.onChangeReciptno}
              />
        </div> 
        <div className="form-group"   style={{float:"right"}}> 
          <label>Rate of Interrest: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.interrestrate}
              onChange={this.onChangeInterrestrate}
              />
        </div> 
        <div className="form-group"   style={{float:"left"}}> 
          <label>Approved By: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.approved}
              onChange={this.onChangeApproved}
              />
        </div>       
      
        <div className="form-group"   style={{float:"right"}}> 
          <label>Due Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.period}
              onChange={this.onChangePeriod}
              />
        </div>

        <div className="form-group"   style={{float:"left"}}> 
          <label>Due Amount: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
              />
        </div>
       
        <div className="form-group"   style={{float:"right"}}> 
          <label>Offic In Charge: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.officeincharge}
              onChange={this.onChangeOfficeincharge}
              />
        </div>

        <div className="form-group"   style={{float:"left"}}> 
          <label>Allocated Value: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.allocatedvalue}
              onChange={this.onChangeAllocatedvalue}
              />
        </div>
        <div className="form-group"  style={{float:"right"}}> 
          <label>First Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.first}
              onChange={this.onChangeFirst}
              />
        </div> 
        <div className="form-group" style={{float:"left"}}> 
          <label>Second Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.second}
              onChange={this.onChangeSecond}
              />
        </div> 
        <div className="form-group"  style={{float:"right"}}> 
          <label>Third Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.third}
              onChange={this.onChangeThird}
              />
        </div>       
      
        <div className="form-group"  style={{float:"left"}}> 
          <label>Fourth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.fourth}
              onChange={this.onChangeFourth}
              />
        </div>

        <div className="form-group"  style={{float:"right"}}> 
          <label>Fifth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.fifth}
              onChange={this.onChangeFifth}
              />
        </div>
       
        <div className="form-group"  style={{float:"left"}}> 
          <label>Sixth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.sixth}
              onChange={this.onChangeSixth}
              />
        </div>

        <div className="form-group"  style={{float:"right"}}> 
          <label>Seventh Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.seventh}
              onChange={this.onChangeSeventh}
              />
        </div>

        <div className="form-group"  style={{float:"left"}}> 
          <label>Eightth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"left"}}
              required
              className="form-control"
              value={this.state.eightth}
              onChange={this.onChangeEightth}
              />
        </div>
        
        <div className="form-group"  style={{float:"right"}}> 
          <label>Nineth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.nineth}
              onChange={this.onChangeNineth}
              />
        </div>

        <div className="form-group"  style={{float:"right"}}> 
          <label>Tenth Renewed Value and Period: </label>
          <input  type="text"
            style={{float:"right"}}
              required
              className="form-control"
              value={this.state.tenth}
              onChange={this.onChangeTenth}
              />
        </div>
        </div>
        <div className="form-group">
        <input type ='submit' value='Edit' name='Edit' className="form-control btn btn-primary" style = {{marginTop:"30px"}}/>
        </div>
     </form>
     </center>
    </div>
    )
  }
}
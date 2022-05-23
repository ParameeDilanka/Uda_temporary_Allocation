const router = require('express').Router();
let Appointment = require('../models/tempallocation');

router.route('/').get((req, res) => {
  Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
 
  const refno = req.body.refno;
  const fileno = req.body.fileno;
  const projcode = req.body.projcode;
  const cuscode = req.body.cuscode;
  const name = req.body.name;
  const priverteaddr = req.body.priverteaddr;
  const premisesaddr = req.body.premisesaddr;
  const extent = req.body.extent;
  const planno = req.body.planno;
  const lotno = req.body.lotno;
  const dateofallocation = req.body.dateofallocation;
  const handedoverdate = req.body.handedoverdate;
  const periodofallocation = req.body.periodofallocation;
  const expdate = req.body.expdate;
  const rent = req.body.rent;
  const taxes = req.body.taxes;
  

  const newAppointment = new Appointment({
    refno,
    fileno,
    projcode,
    cuscode,
    name,
    priverteaddr,
    premisesaddr,
    extent,
    planno,
    lotno,
    dateofallocation,
    handedoverdate,
    periodofallocation,
    expdate,
    rent,
    taxes,

  });

  newAppointment.save()
  .then(() => res.json('Appointment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Appointment.findById(req.params.id)
  .then(appointment => res.json(appointment))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appointment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Appointment.findById(req.params.id)
    .then(appointment => {
  
    appointment.refno = req.body.refno;
    appointment.fileno = req.body.fileno;
    appointment.projcode = req.body.projcode;
    appointment.cuscode = req.body.cuscode;
    appointment.name = req.body.name;
    appointment.priverteaddr = req.body.priverteaddr;
    appointment.premisesaddr = req.body.premisesaddr;
    
    appointment.extent = req.body.extent;
    appointment.planno = req.body.planno;
    appointment.lotno = req.body.lotno;
    appointment.dateofallocation = req.body.dateofallocation;
    appointment.handedoverdate = req.body.handedoverdate;
    appointment.periodofallocation = req.body.periodofallocation;
    appointment.expdate = req.body.expdate;
    appointment.rent = req.body.rent;
    appointment.taxes = req.body.taxes;
   
    appointment.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
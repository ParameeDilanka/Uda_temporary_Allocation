const router = require('express').Router();
let Detail = require('../models/detail.model');

router.route('/').get((req, res) => {
    Detail.find()
    .then(details => res.json(details))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
 
  const reciptno = req.body.reciptno;
  const interrestrate = req.body.interrestrate;
  const approved = req.body.approved;
  const period = req.body.period;
  const amount = req.body.amount;
  const officeincharge = req.body.officeincharge;
  const allocatedvalue = req.body.allocatedvalue;
  const first = req.body.first;
  const second = req.body.second;
  const third = req.body.third;
  const fourth = req.body.fourth;
  const fifth = req.body.fifth;
  const sixth = req.body.sixth;
  const seventh = req.body.seventh;
  const eightth = req.body.eightth;
  const nineth = req.body.nineth;
  const tenth = req.body.tenth;

  const newDetail= new Detail({
    reciptno,
    interrestrate,
    approved,
    period,
    amount,
    officeincharge,
    allocatedvalue,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eightth,
    nineth,
    tenth,

  });

  newDetail.save()
  .then(() => res.json('Appointment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Detail.findById(req.params.id)
  .then(detail => res.json(detail))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Detail.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appointment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Detail.findById(req.params.id)
    .then(detail => {
  
      detail.reciptno = req.body.reciptno;
      detail.interrestrate = req.body.interrestrate;
      detail.approved = req.body.approved;
      detail.period = req.body.period;
      detail.amount = req.body.amount;
      detail.officeincharge = req.body.officeincharge;
      detail.allocatedvalue = req.body.allocatedvalue;  
      detail.first = req.body.first;
      detail.second = req.body.second;
      detail.third = req.body.third;
      detail.fourth = req.body.fourth;
      detail.fifth = req.body.fifth;
      detail.sixth = req.body.sixth;
    detail.seventh = req.body.seventh;
    detail.eightth = req.body.eightth;
    detail.nineth = req.body.nineth;
    detail.tenth = req.body.tenth;

    detail.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
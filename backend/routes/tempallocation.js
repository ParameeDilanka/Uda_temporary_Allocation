const router = require('express').Router();
let Temp = require('../models/tempallocation');

router.route('/').get((req, res) => {
  Temp.find()
    .then(temps => res.json(temps))
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
  

  const newTemp = new Temp({
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

  newTemp.save()
  .then(() => res.json('Temporaray Allocation Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Temp.findById(req.params.id)
  .then(temp => res.json(temp))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Temp.findByIdAndDelete(req.params.id)
    .then(() => res.json('Temporary Allocation Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Temp.findById(req.params.id)
    .then(temp => {
  
      temp.refno = req.body.refno;
      temp.fileno = req.body.fileno;
      temp.projcode = req.body.projcode;
      temp.cuscode = req.body.cuscode;
      temp.name = req.body.name;
      temp.priverteaddr = req.body.priverteaddr;
      temp.premisesaddr = req.body.premisesaddr;
      temp.extent = req.body.extent;
      temp.planno = req.body.planno;
      temp.lotno = req.body.lotno;
      temp.dateofallocation = req.body.dateofallocation;
    temp.handedoverdate = req.body.handedoverdate;
    temp.periodofallocation = req.body.periodofallocation;
    temp.expdate = req.body.expdate;
    temp.rent = req.body.rent;
    temp.taxes = req.body.taxes;
   
    temp.save()
        .then(() => res.json('Temporary Allocation Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
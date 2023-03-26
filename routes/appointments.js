const router = require('express').Router();
let Appointment = require('../models/appointment.model');

router.route('/').get((req, res) => {
  Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { name, email, phone, date } = req.body;
  const newAppointment = new Appointment({ name, email, phone, date });

  newAppointment.save()
    .then(() => res.json('Appointment added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

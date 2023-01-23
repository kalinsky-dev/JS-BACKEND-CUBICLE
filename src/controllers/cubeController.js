const router = require('express').Router();
// const cubes = require('../db.json');
// const fs = require('fs/promises');
// const path = require('path');
const cubeService = require('../services/cubeService');

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', async (req, res) => {
  const cube = req.body;

  if (cube.name.length < 2) {
    return res.status(400).send('Invalid request');
  }

  try {
    await cubeService.save(cube);
    res.redirect('/');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/details/:id', (req, res) => {
  res.render('details');
});

//   console.log(path.resolve('src', 'db.json'));
//   cubes.push(cube);
//   fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {
//     encoding: 'utf-8',
//   })
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

module.exports = router;

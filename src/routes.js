const express = require('express')
var router = express.Router();

//const router = Router();

let items = [];

// Create an item
router.post('/items', (req, res) => {
  const item = { id: items.length + 1, name: req.body.name };
  items.push(item);
  res.status(201).send(item);
});

// Read all items
router.get('/items', (req, res) => {
  res.send(items);
});

// Read a single item
router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.send(item);
});

// Update an item
router.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.send(item);
});

// Delete an item
router.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.send(deletedItem);
});


module.exports = router;
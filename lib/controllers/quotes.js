const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const quote = await Quote.insert(req.body);
    // if (req.body.quoteIds) {
    //   await Promise.all(req.body.quoteIds.map((id) => quote.addQuoteById(id)));
    // }
    res.json(quote);
  } catch (e) {
    next(e);
  }
});

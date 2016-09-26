var reload = require('require-reload')(require);

module.exports = {
  email: 'arvindsatya@cs.stanford.edu',
  handle: 'arvindsatya1',
  cv: '/files/cv.pdf',

  coauthors: reload('./coauthors'),
  venues: reload('./venues'),
  news: reload('./news'),
  papers: reload('./papers'),
  projects: reload('./projects'),
  travel: reload('./travel')
};
var reload = require('require-reload')(require);

module.exports = {
  email: 'arvindsatya@cs.stanford.edu',
  handle: 'arvindsatya1',
  cv: '/files/cv.pdf',
  research_statement: '/files/research-statement.pdf',
  teaching_statement: '/files/teaching-statement.pdf',

  coauthors: reload('./coauthors'),
  venues: reload('./venues'),
  news: reload('./news'),
  papers: reload('./papers'),
  projects: reload('./projects'),
  travel: reload('./travel')
};
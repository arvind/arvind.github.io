var reload = require('require-reload')(require);

module.exports = {
  email: "arvindsatya@cs.stanford.edu",
  handle: "arvindsatya1",
  cv: "http://arvindsatya.com/cv.pdf",

  coauthors: reload('./coauthors'),
  venues: reload('./venues'),
  news: reload('./news'),
  papers: reload('./papers'),
  projects: reload('./projects'),
  travel: reload('./travel')
};
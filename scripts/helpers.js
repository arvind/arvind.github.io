var hb = require('handlebars'),
    timeF = require('d3-time-format').timeFormat;

hb.registerHelper('authorList', function(authors, data, options) {
  return authors.map((a) => options.fn(data.coauthors[a]).trim()).join(', ');
});

hb.registerHelper('paperList', function(papers, data, options) {
  var delim = arguments.length === 4 ? arguments[2] : '\n';
  options = arguments[arguments.length-1];
  return papers.map((p) => options.fn(data.papers.find((x) => x.slug === p)))
    .join(delim || '\n');
});

hb.registerHelper('venueName', function(slug, name, data) {
  return data.venues[slug][name];
});

hb.registerHelper('timeF', function(fmt, str) {
  return timeF(fmt)(new Date(str + ' 00:00:00'));
});

hb.registerHelper('pastTravel', function(travel) {
  return new Date((travel.end || travel.start) + ' 00:00:00') < new Date() ?
    'class="past"' : '';
});
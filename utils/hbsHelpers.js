const hbs = require('handlebars');
const moment = require("moment");

const hbsHelpers = (handlebars) => {
  // date formatter
  handlebars.registerHelper("formatDate", function (dateString) {
    return new handlebars.SafeString(
      moment(dateString).format("DD-MM-YYYY, HH:MM").toUpperCase()
    );
  });

  // if value1 == value2
  hbs.registerHelper('if_eq', function(a, b, options) {
    if (a == b) {
        return options.fn(this);
    }
    return options.inverse(this);
  });
};

module.exports = hbsHelpers;

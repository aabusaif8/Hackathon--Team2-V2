const Stock_Data = `
7/27/17,23.029,23.819,23.029,23.574,9558,0,iba.us,IBA,0.558614357,Moderate,54.02514138,78.02514138,Up
7/28/18,23.133,23.556,22.993,23.142,4211,0,iba.us,IBA,0.398101118,Moderate,54.1788585,67.1788585,Up
7/29/19,23.01,23.38,22.844,23.337,9558,0,iba.us,IBA,0.379009235,Moderate,54.33257563,61.33257563,Up
8/1/16,23.468,23.996,23.468,23.89,50173,0,iba.us,IBA,0.37335238,Moderate,53.8739442,65.8739442,Up
8/2/17,23.942,23.942,23.731,23.819,4436,0,iba.us,IBA,0.149199531,Moderate,54.02766133,39.02766133,Down
8/3/20,23.741,23.951,23.688,23.951,4211,0,iba.us,IBA,0.185969083,Moderate,54.48839272,46.48839272,Down
8/4/15,23.942,24.074,23.741,24.074,7510,0,iba.us,IBA,0.235466558,Moderate,53.72148705,47.72148705,Down
8/5/18,23.907,24.26,23.741,24.119,16041,0,iba.us,IBA,0.366988419,Moderate,54.18221844,68.18221844,Up
8/8/20,24.26,24.698,24.26,24.619,5006,0,iba.us,IBA,0.30971277,Moderate,54.49049268,36.49049268,Down
8/9/18,24.611,25.014,24.532,25.014,27420,0,iba.us,IBA,0.340825469,Moderate,54.18389841,43.18389841,Down
8/10/20,25.147,25.253,25.103,25.183,9100,0,iba.us,IBA,0.106066017,Moderate,54.49133267,65.49133267,Up
8/11/17,25.225,25.253,24.742,24.972,14704,0,iba.us,IBA,0.361331565,Moderate,54.03144126,53.03144126,Down
8/12/16,25.093,25.762,25.093,25.402,30037,0,iba.us,IBA,0.473054437,Moderate,53.87856412,35.87856412,Down
8/15/17,25.262,25.27,25.138,25.209,6144,0,iba.us,IBA,0.093338095,Moderate,54.03312123,67.03312123,Up
8/16/17,25.209,25.596,25.209,25.596,7394,0,iba.us,IBA,0.273650324,Moderate,54.03354122,34.03354122,Down
8/17/19,26.764,27.203,26.237,27.028,101598,0,iba.us,IBA,0.683065151,High,54.34055548,33.34055548,Down
8/18/17,27.054,27.248,26.404,26.404,46649,0,iba.us,IBA,0.596798123,Moderate,54.0343812,43.0343812,Down
8/19/16,26.625,26.72,26.36,26.36,9215,0,iba.us,IBA,0.254558441,Moderate,53.88150406,55.88150406,Up


`;
const headers = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume', 'OpenInt'];

const stockData = Stock_Data.trim().split('\n').map(row => {
    const values = row.split(',');
    const obj = headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
    }, {});
    return obj;
});

exports.seed = function(knex) {
  console.log("Starting to seed Stocks...");
  return knex('Stocks').del() 
    .then(function () {
      console.log("Inserting new data...");
      return knex('Stocks').insert(stockData); 
    })
    .catch(function(error) {
      console.error('Error seeding Stocks:', error);
    });
};
const ETF_Data = `

6/6/15,21.827,21.836,21.492,21.501,82625,0,sche.us,SCHE,0.243244733,Moderate,65.94939423,75.94939423,Up
6/7/18,21.699,21.706,21.448,21.56,120437,0,sche.us,SCHE,0.18243355,Moderate,66.17317476,41.17317476,Down
6/8/19,21.207,21.207,20.673,20.742,156501,0,sche.us,SCHE,0.377595021,Moderate,66.24783626,68.24783626,Up
6/9/16,20.45,20.638,20.183,20.406,166586,0,sche.us,SCHE,0.321733585,Moderate,66.02466772,82.02466772,Up
6/10/16,20.157,20.379,18.528,19.562,190727,0,sche.us,SCHE,1.308854652,High,66.02487171,53.02487171,Down
6/13/20,20.191,20.191,19.217,19.553,1258585,0,sche.us,SCHE,0.688722005,High,66.32351773,65.32351773,Down
6/14/15,20.416,20.949,20.416,20.776,241432,0,sche.us,SCHE,0.376887914,Moderate,65.95102618,80.95102618,Up
6/15/16,20.441,20.717,20.32,20.416,192631,0,sche.us,SCHE,0.280721392,Moderate,66.02589168,67.02589168,Up
6/16/19,20.733,20.768,20.561,20.698,285379,0,sche.us,SCHE,0.146371104,Moderate,66.24946821,42.24946821,Down
6/17/18,20.768,20.846,20.509,20.518,112679,0,sche.us,SCHE,0.238294985,Moderate,66.17521469,86.17521469,Up
6/20/16,20.337,20.416,19.924,20.131,112148,0,sche.us,SCHE,0.347896536,Moderate,66.02691164,43.02691164,Down
6/21/20,20.157,20.217,19.657,20.053,123497,0,sche.us,SCHE,0.395979797,Moderate,66.32514968,91.32514968,Up
6/22/20,20.423,20.423,19.638,19.7,114838,0,sche.us,SCHE,0.555078823,Moderate,66.32535367,91.32535367,Up
6/23/18,19.433,19.588,19.088,19.39,111556,0,sche.us,SCHE,0.353553391,Moderate,66.17643865,80.17643865,Up
6/24/19,18.649,18.907,18.39,18.476,274116,0,sche.us,SCHE,0.365574206,Moderate,66.25110015,57.25110015,Down
`;


const headers = ['Date', 'Open', 'High', 'Low', 'Close', 'Volume', 'OpenInt','Category','Stock','Standard Dev','Risk Level','Current Trend','Future Trend','Overall Trend'];

const ETFsData = ETF_Data.trim().split('\n').map(row => {
    const values = row.split(',');
    const obj = headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
    }, {});
    return obj;
});

exports.seed = function(knex) {
  return knex('ETFs').del()
    .then(function () {
      return knex('ETFs').insert(ETFsData);
    });
};
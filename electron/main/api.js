const _ = require('lodash');

exports.getrealtimedata= (callback)=>{
  const datax = {"type":"x","data":[-508,-509,-507,-510,-511,-512,-512,-511,-512,-510,-512,-510,-506,-497,-485,-475,-466,-458,-446,-434,-424,-409,-396,-385,-375,-362,-348,-335,-321,-303,-294,-280,-267,-252,-240,-223,-206,-193,-179,-164,-148,-130,-114,-95,-80,-66,-54,-37,-21,-8,1,16,31,45,60,78,93,108,123,140,153,172,184,199,213,225,239,254,266,280,293,304,318,331,345,358,376,386,396,405,416,427,433,436,440,448,455,462,467,473,478,482,485,495,495,499,500,500,502,505,506,503,508,507,508,507,512,511,510,510,508,508,501,493,483,473,464,453,440,427,418,405,390,377,365,353,338,325,312,298,284,271,256,244,230,212,196,182,168,150,134,118,102,84,68,55,40,24,9,0,0,0,-43,-58,-71,-85,-103,-118,-134,-146,-162,-175,-192,-208,-221,-235,-248,-259,-271,-287,-299,-311,-323,-336,-350,-363,-379,-390,-400,-410,-419,-428,-434,-440,-442,-453,-458,-464,-468,-476,-481,-485,-492,-493,-497,-501,-503,-504,-506,-507]};
  const datay = {"type":"y","data":[0,0,0,33,41,37,25,19,28,39,40,33,32,47,72,96,109,107,102,103,113,125,127,227,712,882,673,725,778,695,755,794,756,784,810,814,840,857,864,872,873,902,949,970,968,928,876,861,873,877,855,864,900,956,1011,1036,1015,990,990,944,906,893,891,891,853,809,789,775,766,749,727,723,726,729,744,775,817,826,755,632,525,469,465,389,252,199,287,347,291,203,184,188,168,136,109,106,118,131,132,126,119,117,117,122,124,124,123,121,120,120,123,121,119,115,108,93,27,-125,-338,-346,-498,-528,-568,-633,-630,-633,-645,-663,-691,-698,-716,-719,-724,-722,-748,-787,-796,-819,-836,-828,-829,-861,-899,-913,-910,-876,-813,-794,-814,-803,-801,-826,-880,-948,-959,-930,-874,-852,-860,-842,-834,-811,-820,-805,-765,-741,-705,-699,-689,-667,-660,-651,-653,-650,-661,-688,-722,-714,-636,-524,-410,-380,-382,-275,-152,-135,-169,-159,-127,-98,-72,-48,-37,-34,-32,-32,-33,-11,0,0]};
console.log(`datax===>${JSON.stringify(datax)}\n`);
console.log(`datay===>${JSON.stringify(datay)}\n`);
  const sumx = _.sum(datax.data);
  const sumy = _.sum(datay.data);
  let targetx = [];
  _.map(datay.data,(item)=>{
    let data = item*200/sumy;
    targetx.push(data);
  });
  console.log(`targetx===>${JSON.stringify(targetx)}\n`);

  let data = [];
  let total = 0;
  _.map(datax.data,(v,index)=>{
    total = total+datay.data[index];
    data.push( { uv:v, pv: datay.data[index], amt: index});
  });
  const payload = {chartdata:data};
  console.log(`getrealtimedata===>${JSON.stringify(payload)}\n`);
  callback({
    cmd:'getrealtimedata_result',
    payload
  });

}

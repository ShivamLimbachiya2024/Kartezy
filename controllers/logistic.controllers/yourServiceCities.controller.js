const logger = require('../../configs/pino.config')
const logisticServices = require('../../services/logistics.services/logistics.services')
exports.renderServiceCities = (req, res) => {
  res.render('pages/logistics/yourServiceCities.ejs')
}
exports.fetchServiceCities = (req, res) => {
  try {
    const cityObj = [
      {
        "PostOfficeName": "City",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Collectorate",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharmendra Sinhji College",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jairaj Plot",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Junction Plot",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalavad Road",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi Chowk",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mochi Bazar",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mu Co Chowk",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "New Jagnath",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Parsi Agiyari Chwok",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Popatpara",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Race Course Road",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajputpara",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ramnathpara",
        "Pincode": "360001",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manhar Plot",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Millpara",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot Bhaktinagar",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sorathiawadi",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udyognagar",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Viveknandnagar",
        "Pincode": "360002",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aji Industrial Estate",
        "Pincode": "360003",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Marketing Yard",
        "Pincode": "360003",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot Bedipura",
        "Pincode": "360003",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malaviyanagar",
        "Pincode": "360004",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot S N Gurukul",
        "Pincode": "360004",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot Saurastra",
        "Pincode": "360004",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "University Campus",
        "Pincode": "360005",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkot Bhomeshwar Plot",
        "Pincode": "360006",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kasturbadham",
        "Pincode": "360020",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanosra Raj",
        "Pincode": "360022",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ziana",
        "Pincode": "360023",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardhar",
        "Pincode": "360025",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lodhika",
        "Pincode": "360035",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Atkot",
        "Pincode": "360040",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jasdan",
        "Pincode": "360050",
        "City": "Jasdan",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vinchhia",
        "Pincode": "360050",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virnagar",
        "Pincode": "360060",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mengani",
        "Pincode": "360070",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadla",
        "Pincode": "360080",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Paddhari",
        "Pincode": "360110",
        "City": "Paddhari",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhojraj Para",
        "Pincode": "360311",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhuvneshwari Pith",
        "Pincode": "360311",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "College Chowk",
        "Pincode": "360311",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gondal",
        "Pincode": "360311",
        "City": "Gondal",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "360311",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gomta",
        "Pincode": "360320",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moviya",
        "Pincode": "360320",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shivarajgadh",
        "Pincode": "360335",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetalsar Jn",
        "Pincode": "360360",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fulwadi",
        "Pincode": "360370",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetpur",
        "Pincode": "360370",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kapad Bazar",
        "Pincode": "360370",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navagadh",
        "Pincode": "360375",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virpur",
        "Pincode": "360380",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Kandorna",
        "Pincode": "360405",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Darbargadh",
        "Pincode": "360410",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharoji",
        "Pincode": "360410",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gim Plot",
        "Pincode": "360410",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "360410",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhoraji Sugar Factory",
        "Pincode": "360411",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Murad",
        "Pincode": "360421",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patanvav",
        "Pincode": "360430",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Supedi",
        "Pincode": "360440",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar Chowk",
        "Pincode": "360450",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhayavadar",
        "Pincode": "360450",
        "City": "Bhayavadar",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chitravad",
        "Pincode": "360452",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhank",
        "Pincode": "360460",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kolki",
        "Pincode": "360470",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Paneli",
        "Pincode": "360480",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lathi Plot",
        "Pincode": "360490",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panch Hatdi",
        "Pincode": "360490",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Upleta",
        "Pincode": "360490",
        "City": "Upleta",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhanvad",
        "Pincode": "360510",
        "City": "Bhanvad",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranjitpura",
        "Pincode": "360510",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Verad",
        "Pincode": "360515",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhrapha",
        "Pincode": "360520",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samana",
        "Pincode": "360521",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Darbargadh",
        "Pincode": "360530",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Jodhpur",
        "Pincode": "360530",
        "City": "Jam Jodhpur",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vansjalia",
        "Pincode": "360531",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kharedi",
        "Pincode": "360540",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adityana",
        "Pincode": "360545",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranavav",
        "Pincode": "360550",
        "City": "Ranavav",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranavav",
        "Pincode": "360550",
        "City": "Porbandar",
        "District": "Porbandar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranava RS",
        "Pincode": "360560",
        "City": "Porbandar",
        "District": "Porbandar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranavav R S",
        "Pincode": "360560",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranakandorna",
        "Pincode": "360570",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mokal",
        "Pincode": "360571",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaddla Rana",
        "Pincode": "360572",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhojeshwar Plot",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhaya Plot",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hanumangufa",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "M G Road",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manek Chowk",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Milpara",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Porbandar",
        "Pincode": "360575",
        "City": "Porbandar",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Porbandhar HO",
        "Pincode": "360575",
        "City": "Porbandar",
        "District": "Porbandar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Port Area",
        "Pincode": "360575",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Porbandar Birlasagar",
        "Pincode": "360576",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Porbandar G Id C",
        "Pincode": "360577",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhaya",
        "Pincode": "360578",
        "City": "Chhaya",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bokhira",
        "Pincode": "360579",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bakharla",
        "Pincode": "360583",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navibundar",
        "Pincode": "360585",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bagvadar",
        "Pincode": "360590",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fatana",
        "Pincode": "360592",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sodhana",
        "Pincode": "360595",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Grain Market",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khambhalia Gate",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lal Bunglow",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi Chowk",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "New Super Market",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pancheshwar Chowk",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Subhas Market",
        "Pincode": "361001",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Bedeshwar",
        "Pincode": "361002",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Aerodrome",
        "Pincode": "361003",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Digvijay",
        "Pincode": "361004",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nagar Estate",
        "Pincode": "361004",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khojanaka Road",
        "Pincode": "361005",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pavan Chakli",
        "Pincode": "361005",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Plot",
        "Pincode": "361005",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranjitnagar",
        "Pincode": "361005",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Khodiyar Colony",
        "Pincode": "361006",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Gulabnagar",
        "Pincode": "361007",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Patel Colony",
        "Pincode": "361008",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Medical Campus",
        "Pincode": "361008",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Bedi",
        "Pincode": "361009",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamnagar Udyog",
        "Pincode": "361009",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadinar",
        "Pincode": "361010",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hadiana",
        "Pincode": "361011",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chela",
        "Pincode": "361012",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khandhera",
        "Pincode": "361013",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aliabada",
        "Pincode": "361110",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhuvav",
        "Pincode": "361120",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Venthli",
        "Pincode": "361130",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Digvijaygram",
        "Pincode": "361140",
        "City": "Digvijaygram",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valsura",
        "Pincode": "361150",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Grain Market",
        "Pincode": "361160",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalavad",
        "Pincode": "361160",
        "City": "Kalavad",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nikava",
        "Pincode": "361162",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lalpur",
        "Pincode": "361170",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhrol",
        "Pincode": "361210",
        "City": "Dhrol",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Latipur",
        "Pincode": "361220",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balachadi",
        "Pincode": "361230",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balambha",
        "Pincode": "361240",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jodiya",
        "Pincode": "361250",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanalus",
        "Pincode": "361280",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kenedi",
        "Pincode": "361285",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhogat",
        "Pincode": "361290",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Gadhka",
        "Pincode": "361295",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nadana",
        "Pincode": "361301",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalyan Raiji Mandir",
        "Pincode": "361305",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khambhalia",
        "Pincode": "361305",
        "City": "Khambhalia",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadthar",
        "Pincode": "361306",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Salaya",
        "Pincode": "361310",
        "City": "Salaya",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhatia",
        "Pincode": "361315",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ran",
        "Pincode": "361316",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Kalyanpur",
        "Pincode": "361320",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Devalia",
        "Pincode": "361321",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lamba",
        "Pincode": "361322",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raval",
        "Pincode": "361325",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bet",
        "Pincode": "361330",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dwarka",
        "Pincode": "361335",
        "City": "Dwarka",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Town",
        "Pincode": "361335",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dwarka Cement Factory",
        "Pincode": "361336",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mithapur",
        "Pincode": "361345",
        "City": "Mithapur",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Suraj Karadi",
        "Pincode": "361347",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "361350",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Okha",
        "Pincode": "361350",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agri Campus",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bahauddin College Road",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Diwan Chowk",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Girnar Road",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jagmal Road",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhalarapa",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Junagadh",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalva Chowk",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mangnath Road",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "P T C",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ramnivas",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarbaug",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "362001",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Junagadh Joshipura",
        "Pincode": "362002",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Junagadh Udyognagar",
        "Pincode": "362003",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Junagadh Bhavnath",
        "Pincode": "362004",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Majevadi",
        "Pincode": "362011",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chora",
        "Pincode": "362012",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhandhuka Khand",
        "Pincode": "362012",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhandhusar",
        "Pincode": "362012",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khadia",
        "Pincode": "362013",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Makhiala",
        "Pincode": "362014",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Timbavadi",
        "Pincode": "362015",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhesan",
        "Pincode": "362020",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chuda",
        "Pincode": "362021",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranpur Sorath",
        "Pincode": "362030",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhodvadi",
        "Pincode": "362036",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dolatpura",
        "Pincode": "362037",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bilkha",
        "Pincode": "362110",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mangnath Pipli",
        "Pincode": "362111",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarsai",
        "Pincode": "362120",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Visavadar",
        "Pincode": "362130",
        "City": "Visavadar",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalsari",
        "Pincode": "362132",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Monpuri",
        "Pincode": "362133",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sasangir",
        "Pincode": "362135",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Borvav",
        "Pincode": "362136",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Akolwadi",
        "Pincode": "362140",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pavthi",
        "Pincode": "362142",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Talala",
        "Pincode": "362150",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghunsia",
        "Pincode": "362151",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amblas",
        "Pincode": "362152",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chitravad",
        "Pincode": "362155",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Power House",
        "Pincode": "362205",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shahpur Sorath",
        "Pincode": "362205",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lushala",
        "Pincode": "362215",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thana Pipli",
        "Pincode": "362216",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aerodramme Road",
        "Pincode": "362220",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Keshod",
        "Pincode": "362220",
        "City": "Keshod",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limda Chowk",
        "Pincode": "362220",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balagam",
        "Pincode": "362221",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agatrai",
        "Pincode": "362222",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Meshvan",
        "Pincode": "362223",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khirasraghed",
        "Pincode": "362224",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "362225",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mangrol",
        "Pincode": "362225",
        "City": "Mangrol",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Loej",
        "Pincode": "362226",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kevadra",
        "Pincode": "362227",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ajab",
        "Pincode": "362228",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madhavpur Ghed",
        "Pincode": "362230",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mander",
        "Pincode": "362231",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardagram",
        "Pincode": "362235",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shardagram",
        "Pincode": "362235",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shil",
        "Pincode": "362240",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mekhadi",
        "Pincode": "362242",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maliya Hatina",
        "Pincode": "362245",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amrapur Gir",
        "Pincode": "362246",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Juthal",
        "Pincode": "362247",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhanduri",
        "Pincode": "362248",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shergadh",
        "Pincode": "362249",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chorvad",
        "Pincode": "362250",
        "City": "Chorvad",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sherbaug",
        "Pincode": "362255",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Dodia",
        "Pincode": "362256",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adri",
        "Pincode": "362257",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khorasa Gir",
        "Pincode": "362258",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dari",
        "Pincode": "362259",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Keshod Akshyagadh",
        "Pincode": "362259",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Medarda",
        "Pincode": "362260",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Veraval Udyognagar",
        "Pincode": "362260",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bagdu",
        "Pincode": "362263",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "362265",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bundar",
        "Pincode": "362265",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Krishnagar",
        "Pincode": "362265",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kutiyan",
        "Pincode": "362265",
        "City": "Porbandar",
        "District": "Porbandar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kutiyana",
        "Pincode": "362265",
        "City": "Kutiyana",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Veraval",
        "Pincode": "362265",
        "City": "Veraval",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Verable Rayon Factory",
        "Pincode": "362266",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Veraval Bhidiya Plot",
        "Pincode": "362267",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Prabhas Patan",
        "Pincode": "362268",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lodhava",
        "Pincode": "362271",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sutrapada",
        "Pincode": "362275",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhamlej",
        "Pincode": "362276",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Prasnavada",
        "Pincode": "362278",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadal",
        "Pincode": "362310",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Choki",
        "Pincode": "362315",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Delvada",
        "Pincode": "362510",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navabunder",
        "Pincode": "362515",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Diu",
        "Pincode": "362520",
        "City": "Diu",
        "District": "Daman",
        "State": "Daman & Diu"
      },
      {
        "PostOfficeName": "Div",
        "Pincode": "362520",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zampu",
        "Pincode": "362520",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gir Gadhda",
        "Pincode": "362530",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saiyad Rajpura",
        "Pincode": "362530",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghoghla",
        "Pincode": "362540",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanakhada",
        "Pincode": "362550",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Simar",
        "Pincode": "362551",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sayad Rajpara",
        "Pincode": "362552",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "362560",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Una Sorath",
        "Pincode": "362560",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar Dhokadava",
        "Pincode": "362565",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vanakbara",
        "Pincode": "362570",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhucharvada",
        "Pincode": "362571",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "362610",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vanthali Sorath",
        "Pincode": "362610",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanjha",
        "Pincode": "362615",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bantwa",
        "Pincode": "362620",
        "City": "Bantwa",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Subhas Road",
        "Pincode": "362620",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limbuda",
        "Pincode": "362621",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahiari",
        "Pincode": "362623",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pajod",
        "Pincode": "362624",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nanadia",
        "Pincode": "362625",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bamansa",
        "Pincode": "362626",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghed Bamnasa",
        "Pincode": "362626",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Matiyana",
        "Pincode": "362627",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manavadar",
        "Pincode": "362630",
        "City": "Manavadar",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Plot",
        "Pincode": "362630",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghed Koylana",
        "Pincode": "362633",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Koylana",
        "Pincode": "362633",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanosra",
        "Pincode": "362634",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardargadh",
        "Pincode": "362640",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Devda",
        "Pincode": "362652",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khageshri",
        "Pincode": "362653",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghantvad",
        "Pincode": "362710",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sindhaj",
        "Pincode": "362715",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kodinar",
        "Pincode": "362720",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Harmadia",
        "Pincode": "362721",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valan",
        "Pincode": "362722",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Velan",
        "Pincode": "362722",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kodinar K U",
        "Pincode": "362725",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Arnej",
        "Pincode": "362726",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadnagar Kodinar",
        "Pincode": "362727",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Timbi",
        "Pincode": "362730",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhara",
        "Pincode": "362733",
        "City": "Junagadh",
        "District": "Junagadh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gate",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "M P Shah College",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surendranagar",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udyognagar",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadipura",
        "Pincode": "363001",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surendra Nagar Stn Road",
        "Pincode": "363002",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Joravarnagar",
        "Pincode": "363020",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kherali",
        "Pincode": "363023",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "363030",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "I E",
        "Pincode": "363030",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wadhwan City",
        "Pincode": "363030",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wadwan City Ie",
        "Pincode": "363035",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dudhrej",
        "Pincode": "363040",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khodu",
        "Pincode": "363041",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gujarwadi",
        "Pincode": "363045",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vana",
        "Pincode": "363110",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhanki",
        "Pincode": "363115",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhrangadhra",
        "Pincode": "363310",
        "City": "Dhrangadhra",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Satta Bazar",
        "Pincode": "363310",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kondh",
        "Pincode": "363312",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhrangadhra C W",
        "Pincode": "363315",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajsitapur",
        "Pincode": "363320",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Halvad Bazar",
        "Pincode": "363330",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Charadava",
        "Pincode": "363331",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Devalia",
        "Pincode": "363332",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tikar Rana",
        "Pincode": "363333",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sara",
        "Pincode": "363334",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chuda",
        "Pincode": "363410",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mojidad",
        "Pincode": "363411",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chokdi",
        "Pincode": "363412",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhrughupur",
        "Pincode": "363415",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nagnesh",
        "Pincode": "363416",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bahlapura",
        "Pincode": "363421",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "D B Chowk",
        "Pincode": "363421",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limbdi",
        "Pincode": "363421",
        "City": "Limbdi",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pansina",
        "Pincode": "363423",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jambu",
        "Pincode": "363424",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hadala Bhal",
        "Pincode": "363425",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhoika",
        "Pincode": "363426",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shiyani",
        "Pincode": "363427",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sayla",
        "Pincode": "363430",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rampura",
        "Pincode": "363435",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sudamada",
        "Pincode": "363440",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Muli",
        "Pincode": "363510",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chotila",
        "Pincode": "363520",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thangadh",
        "Pincode": "363530",
        "City": "Thangadh",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lunsar",
        "Pincode": "363535",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranpur",
        "Pincode": "363610",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Green Chowk",
        "Pincode": "363621",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wankaner",
        "Pincode": "363621",
        "City": "Wankaner",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wankaner Amarpura",
        "Pincode": "363622",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Daldi",
        "Pincode": "363626",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetpur Morbi",
        "Pincode": "363630",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shri Sardanagar",
        "Pincode": "363636",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Green Chowk",
        "Pincode": "363641",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Morbi",
        "Pincode": "363641",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nani Bazar",
        "Pincode": "363641",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sakti Plot",
        "Pincode": "363641",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Morbi P P Works",
        "Pincode": "363642",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tankara",
        "Pincode": "363650",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amran",
        "Pincode": "363655",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahisara",
        "Pincode": "363660",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sakatsanala",
        "Pincode": "363665",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kuntasi",
        "Pincode": "363666",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nani Bazar",
        "Pincode": "363667",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vavania",
        "Pincode": "363668",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panchasar",
        "Pincode": "363669",
        "City": "Jamnagar",
        "District": "Jamnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maliya Miyana",
        "Pincode": "363670",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhavnagar",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chavdigate",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Collectorate",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gogha Circle",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kavikant Road",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khargate",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Krishnagar",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mamakotha Road",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nirmalnagar",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vora Bazar",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wadava",
        "Pincode": "364001",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "B P T E",
        "Pincode": "364002",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhavnagar Takhteswar",
        "Pincode": "364002",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhavnagar Para",
        "Pincode": "364003",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhavnagar Chitra",
        "Pincode": "364004",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhav Anand Nagar",
        "Pincode": "364005",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhav Station Rd",
        "Pincode": "364006",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kumbharvada",
        "Pincode": "364006",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valukad G",
        "Pincode": "364021",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Budhel",
        "Pincode": "364022",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhandaria",
        "Pincode": "364050",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nari",
        "Pincode": "364055",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vartej",
        "Pincode": "364060",
        "City": "Vartej",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kardej",
        "Pincode": "364061",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Koliyak",
        "Pincode": "364070",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hathab",
        "Pincode": "364071",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gogha",
        "Pincode": "364110",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tansa",
        "Pincode": "364120",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Datha",
        "Pincode": "364130",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalsar Bhav",
        "Pincode": "364131",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pithalpur",
        "Pincode": "364135",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Talaja",
        "Pincode": "364140",
        "City": "Talaja",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thaliya",
        "Pincode": "364145",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bagdana",
        "Pincode": "364146",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Trapaj",
        "Pincode": "364150",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dihor",
        "Pincode": "364151",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amargadh",
        "Pincode": "364210",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambala",
        "Pincode": "364215",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Damnagar",
        "Pincode": "364220",
        "City": "Damnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ansodar",
        "Pincode": "364225",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanosra",
        "Pincode": "364230",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranghola",
        "Pincode": "364231",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Chowk",
        "Pincode": "364240",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sihor",
        "Pincode": "364240",
        "City": "Sihor",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghanghli",
        "Pincode": "364241",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madhada",
        "Pincode": "364245",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Songadh",
        "Pincode": "364250",
        "City": "Songadh",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valukad S",
        "Pincode": "364251",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tana",
        "Pincode": "364260",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Varal",
        "Pincode": "364261",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Devgana",
        "Pincode": "364262",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gheti",
        "Pincode": "364265",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "D B Chowk",
        "Pincode": "364270",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Vavdi",
        "Pincode": "364270",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palitana",
        "Pincode": "364270",
        "City": "Palitana",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "364270",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Parvadi",
        "Pincode": "364275",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vavdimoti",
        "Pincode": "364276",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Khuntavada",
        "Pincode": "364280",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "364290",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Baug",
        "Pincode": "364290",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahuva",
        "Pincode": "364290",
        "City": "Mahuva",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasitalav",
        "Pincode": "364290",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Katpur",
        "Pincode": "364292",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nana Jadra",
        "Pincode": "364292",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Talgajarda",
        "Pincode": "364293",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadrod",
        "Pincode": "364295",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghundarana",
        "Pincode": "364296",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gundarna",
        "Pincode": "364296",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaghnagar",
        "Pincode": "364297",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kumbhan",
        "Pincode": "364298",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vallabhipur",
        "Pincode": "364310",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patna Bhal",
        "Pincode": "364311",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pachhegam",
        "Pincode": "364312",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ratanpur Bhal",
        "Pincode": "364313",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chamardi",
        "Pincode": "364315",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhola",
        "Pincode": "364320",
        "City": "Dhola",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umrala",
        "Pincode": "364330",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chogath",
        "Pincode": "364335",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dolvan",
        "Pincode": "364365",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chamardi",
        "Pincode": "364410",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Babra",
        "Pincode": "364421",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lathi",
        "Pincode": "364430",
        "City": "Lathi",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Akala",
        "Pincode": "364431",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shedubhar",
        "Pincode": "364432",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chavand",
        "Pincode": "364435",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shekh Pipalia",
        "Pincode": "364436",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "364440",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hamapur",
        "Pincode": "364445",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kunkavav",
        "Pincode": "364450",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Ankadia",
        "Pincode": "364455",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaghania",
        "Pincode": "364456",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amrapur",
        "Pincode": "364457",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mavjinjva",
        "Pincode": "364458",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lunidhar",
        "Pincode": "364460",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Derdikumbhaji",
        "Pincode": "364465",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sultanpur",
        "Pincode": "364470",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadia",
        "Pincode": "364480",
        "City": "Vadia",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tori",
        "Pincode": "364481",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amar Nagar",
        "Pincode": "364485",
        "City": "Rajkot",
        "District": "Rajkot",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasavad",
        "Pincode": "364490",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gariyadhar",
        "Pincode": "364505",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Velavadar",
        "Pincode": "364506",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nonghanvadar",
        "Pincode": "364507",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Charodia",
        "Pincode": "364508",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jesar",
        "Pincode": "364510",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Savar City",
        "Pincode": "364515",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Savarkundla",
        "Pincode": "364515",
        "City": "Savarkundla",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Bhamodra",
        "Pincode": "364517",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nesdi",
        "Pincode": "364518",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Motazinjhuvada",
        "Pincode": "364519",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jira",
        "Pincode": "364521",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Badhada",
        "Pincode": "364522",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bagasra",
        "Pincode": "364522",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pithawadi",
        "Pincode": "364523",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambardi",
        "Pincode": "364524",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vanda",
        "Pincode": "364525",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piava",
        "Pincode": "364526",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vijpadi",
        "Pincode": "364530",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Liliya",
        "Pincode": "364535",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saldi",
        "Pincode": "364536",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amba",
        "Pincode": "364537",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jafrabad",
        "Pincode": "364540",
        "City": "Jafrabad",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nageshri",
        "Pincode": "364545",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dedan",
        "Pincode": "364550",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dungar",
        "Pincode": "364555",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajula",
        "Pincode": "364560",
        "City": "Rajula",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bherai",
        "Pincode": "364561",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Krankach",
        "Pincode": "364565",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vavera",
        "Pincode": "364570",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amreli",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baharpura",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jesingpura",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manekpura",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tower Road",
        "Pincode": "364601",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Babapur",
        "Pincode": "364610",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vankia",
        "Pincode": "364615",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jalia Amreli",
        "Pincode": "364616",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chital",
        "Pincode": "364620",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Monpur",
        "Pincode": "364622",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chalala",
        "Pincode": "364630",
        "City": "Chalala",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gopalgram",
        "Pincode": "364632",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarambhada",
        "Pincode": "364633",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Samadhiala",
        "Pincode": "364635",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhari",
        "Pincode": "364640",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "364640",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dalkhania",
        "Pincode": "364641",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhader",
        "Pincode": "364645",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khambha",
        "Pincode": "364650",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarasia",
        "Pincode": "364660",
        "City": "Amreli",
        "District": "Amreli",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Botad",
        "Pincode": "364710",
        "City": "Botad",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "364710",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Town",
        "Pincode": "364710",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lathidad",
        "Pincode": "364712",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhimdad",
        "Pincode": "364713",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Turkha",
        "Pincode": "364714",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Paliyad",
        "Pincode": "364720",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhasagam",
        "Pincode": "364730",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhasa Jn",
        "Pincode": "364740",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jalalpur",
        "Pincode": "364741",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadhda S N",
        "Pincode": "364750",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ningala",
        "Pincode": "364760",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ugamedi",
        "Pincode": "364765",
        "City": "Bhavnagar",
        "District": "Bhavnagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhid Bazar",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhuj",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "City",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "College Road",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Darbargadh Chowk",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khatri Chakla",
        "Pincode": "370001",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sumrasar",
        "Pincode": "370006",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Loria",
        "Pincode": "370007",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "B S F Bhuj",
        "Pincode": "370015",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madhavpur Kachchh",
        "Pincode": "370020",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mankuva",
        "Pincode": "370030",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sukhpar",
        "Pincode": "370040",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nirona",
        "Pincode": "370061",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kukma",
        "Pincode": "370105",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anjar",
        "Pincode": "370110",
        "City": "Anjar",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ganga Bazar",
        "Pincode": "370110",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khedoi",
        "Pincode": "370130",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nagalpur K",
        "Pincode": "370132",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adhoi",
        "Pincode": "370135",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhachau",
        "Pincode": "370140",
        "City": "Bhachau",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chobari",
        "Pincode": "370141",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lakadia",
        "Pincode": "370145",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gagodar",
        "Pincode": "370146",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kidianagar",
        "Pincode": "370147",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samakhiali",
        "Pincode": "370150",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adesar",
        "Pincode": "370155",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fatehgadh",
        "Pincode": "370156",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palansva",
        "Pincode": "370157",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhimasar B",
        "Pincode": "370160",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R Bazar",
        "Pincode": "370165",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rahpar",
        "Pincode": "370165",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rav",
        "Pincode": "370168",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gedi",
        "Pincode": "370169",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadhda Khadir",
        "Pincode": "370170",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udayanagar",
        "Pincode": "370203",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adipur",
        "Pincode": "370205",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kandla Port Harbour",
        "Pincode": "370210",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kandla F T Z",
        "Pincode": "370230",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gopalpuri",
        "Pincode": "370240",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhujpur",
        "Pincode": "370405",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zarpara",
        "Pincode": "370406",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gundala",
        "Pincode": "370410",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadreswar",
        "Pincode": "370411",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kapaya",
        "Pincode": "370415",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mundra",
        "Pincode": "370421",
        "City": "Mundra",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patri",
        "Pincode": "370425",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baladia",
        "Pincode": "370427",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naranpur",
        "Pincode": "370429",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kera Kachchh",
        "Pincode": "370430",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bidada",
        "Pincode": "370435",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Durgapur",
        "Pincode": "370440",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadhsisa",
        "Pincode": "370445",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Godhra Kachchh",
        "Pincode": "370450",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gundiali",
        "Pincode": "370455",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Koday",
        "Pincode": "370460",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi",
        "Pincode": "370465",
        "City": "Mandvi",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navapura",
        "Pincode": "370465",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanjipadi",
        "Pincode": "370465",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maska",
        "Pincode": "370471",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kandagara",
        "Pincode": "370472",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Laija",
        "Pincode": "370475",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahisara",
        "Pincode": "370485",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dumra",
        "Pincode": "370490",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khavda",
        "Pincode": "370510",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khavda B S F",
        "Pincode": "370515",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kotda N",
        "Pincode": "370605",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manjal",
        "Pincode": "370610",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nakhtrana",
        "Pincode": "370615",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Netra",
        "Pincode": "370620",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ravapar",
        "Pincode": "370625",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gaduli",
        "Pincode": "370627",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lakhpat",
        "Pincode": "370630",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bitta",
        "Pincode": "370635",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jakhau",
        "Pincode": "370640",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kothara",
        "Pincode": "370645",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mothara",
        "Pincode": "370650",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naliya",
        "Pincode": "370655",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tera",
        "Pincode": "370660",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virani",
        "Pincode": "370665",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khombhadi",
        "Pincode": "370670",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vithon",
        "Pincode": "370675",
        "City": "Bhuj",
        "District": "Kuchchh",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad G P O",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dariapur",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Delhi Gala",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Distrcit Court",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Road",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gheekanta Road",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamalpur",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamalpur Chakla",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalupur Chakla",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khadia",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khanpur",
        "Pincode": "388001",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lal Darwaja",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manek Chowk",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Municipal Corporation",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raikhad",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raipur",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shahpur",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sub Foreign",
        "Pincode": "380001",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "N C Market",
        "Pincode": "380002",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Railwaypura",
        "Pincode": "380002",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Revdi Bazar",
        "Pincode": "380002",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Cantonment",
        "Pincode": "380003",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Civil",
        "Pincode": "380003",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Circle Stamp Depot",
        "Pincode": "380003",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Sahibag",
        "Pincode": "380004",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Shah",
        "Pincode": "380004",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dudheswar",
        "Pincode": "380004",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madhupura Market",
        "Pincode": "380004",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tavdipura",
        "Pincode": "380004",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kabirchowk",
        "Pincode": "380005",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "O N G C",
        "Pincode": "380005",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sabarmati",
        "Pincode": "380005",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambawadi",
        "Pincode": "380006",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ellisbridge",
        "Pincode": "380006",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gujarat College Ahmedabad",
        "Pincode": "380006",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Paldi",
        "Pincode": "380007",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anand Nagar",
        "Pincode": "380007",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Narayannagar",
        "Pincode": "380007",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarkhej Road",
        "Pincode": "380007",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shardanagar",
        "Pincode": "380007",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Daxini Society",
        "Pincode": "380008",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maninagar",
        "Pincode": "380008",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ashram Road",
        "Pincode": "380009",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gujarat High Court",
        "Pincode": "380009",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gujarat University",
        "Pincode": "380009",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navrangpura",
        "Pincode": "380009",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Asarwa",
        "Pincode": "380010",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Girdharnagar",
        "Pincode": "380010",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rly Crossing Ahmedabad",
        "Pincode": "380010",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Air Port",
        "Pincode": "380012",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naranpura",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naranpura Vistar",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navavadaj",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shastrinagar",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Stadium Marg",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadaj Ahmedabad",
        "Pincode": "380013",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gujarat Vidhyapith Ahmeda",
        "Pincode": "380014",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navjivan",
        "Pincode": "380014",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Azad Society",
        "Pincode": "380015",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Indian Institute Of Management",
        "Pincode": "380015",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Polytechnic",
        "Pincode": "380015",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Asarwa Chakla",
        "Pincode": "380016",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hospital",
        "Pincode": "380016",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "New Chamanpura",
        "Pincode": "380016",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Public Offices Ahmedabad",
        "Pincode": "380016",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Saraspur",
        "Pincode": "380018",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Railway Colony",
        "Pincode": "380019",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Rajpur Gomtipur",
        "Pincode": "380021",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gomtipur",
        "Pincode": "380021",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rakhial",
        "Pincode": "380021",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sonaria Block",
        "Pincode": "380021",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Behrampura",
        "Pincode": "380022",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Calico Mills",
        "Pincode": "380022",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gita Mandir Road",
        "Pincode": "380022",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kankaria Road",
        "Pincode": "380022",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Rakhialudyog Vi",
        "Pincode": "380023",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sukhrampura Ahmedabad",
        "Pincode": "380023",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Asarwa Ex South Ahmedabad",
        "Pincode": "380024",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bapu Nagar",
        "Pincode": "380024",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bapu Nagar I E",
        "Pincode": "380024",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad",
        "Pincode": "380025",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anil Marg",
        "Pincode": "380025",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "N C Mills",
        "Pincode": "380025",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naroda Road",
        "Pincode": "380025",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Amraiwadi",
        "Pincode": "380026",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Ashram Ahmedabad",
        "Pincode": "380027",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Space",
        "Pincode": "380028",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alam Roza",
        "Pincode": "380028",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhairavnath Road",
        "Pincode": "380028",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghodasar",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jawahar Chowk",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khokhra",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "L G Hospital Road",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mehmadabad",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "S A Mills",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sant Punit Marg",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasisthanagar Ahmedabad",
        "Pincode": "380050",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Jivrajpark",
        "Pincode": "380051",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Memnagar Ahmedabad",
        "Pincode": "380052",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Application Centre",
        "Pincode": "380053",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Thaltej Road",
        "Pincode": "380054",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahmedabad Juhapura",
        "Pincode": "380055",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghatlodia Ahmedabad",
        "Pincode": "380061",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 9",
        "Pincode": "382009",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar",
        "Pincode": "382010",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Vidhansabha",
        "Pincode": "382010",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghandhinagar Sector 16",
        "Pincode": "382016",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 17",
        "Pincode": "382017",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 19",
        "Pincode": "382019",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 20",
        "Pincode": "382020",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 21",
        "Pincode": "382021",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 22",
        "Pincode": "382022",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 23",
        "Pincode": "382023",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 24",
        "Pincode": "382023",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 28",
        "Pincode": "382028",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 29",
        "Pincode": "382029",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar Sector 30",
        "Pincode": "382030",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar T P S",
        "Pincode": "382041",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar C R P F Camp",
        "Pincode": "382042",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Nagar G M S",
        "Pincode": "382043",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Industrial Estate",
        "Pincode": "382043",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "K P T",
        "Pincode": "382043",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kolavada",
        "Pincode": "382051",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanand",
        "Pincode": "382110",
        "City": "Sanand",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanand Society Area",
        "Pincode": "382110",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Godhavi",
        "Pincode": "382115",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Detroj",
        "Pincode": "382120",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandal",
        "Pincode": "382130",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rampura Bhankoda",
        "Pincode": "382140",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Katosan Road",
        "Pincode": "382145",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Viramgam",
        "Pincode": "382150",
        "City": "Viramgam",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Viramgam Choksi Bazar",
        "Pincode": "382150",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhojva",
        "Pincode": "382155",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jholapur",
        "Pincode": "382160",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalyanpura",
        "Pincode": "382165",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agol",
        "Pincode": "382166",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virochannagar",
        "Pincode": "382170",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarkhej",
        "Pincode": "382213",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bavla",
        "Pincode": "382220",
        "City": "Bavla",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bavla Market Yard",
        "Pincode": "382220",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lothal Bhurkhi R S",
        "Pincode": "382230",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Koth Gangad",
        "Pincode": "382240",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Polarpur",
        "Pincode": "382250",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jalila",
        "Pincode": "382255",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chaloda",
        "Pincode": "382260",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kauka",
        "Pincode": "382265",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Badarkha",
        "Pincode": "382270",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahegam",
        "Pincode": "382305",
        "City": "Dahegam",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahegam Jawahar",
        "Pincode": "382305",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market",
        "Pincode": "382305",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bahiyal",
        "Pincode": "382308",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nandol",
        "Pincode": "382310",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rakhial R S",
        "Pincode": "382315",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ujedia",
        "Pincode": "382316",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sadra",
        "Pincode": "382320",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhala",
        "Pincode": "382321",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Area",
        "Pincode": "382325",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naroda",
        "Pincode": "382325",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naroda Society",
        "Pincode": "382325",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kharna",
        "Pincode": "382327",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naroda I E",
        "Pincode": "382330",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarnagar",
        "Pincode": "382340",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarnagar Kubernagar",
        "Pincode": "382340",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saijpur Bogha",
        "Pincode": "382345",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Krishnanagar",
        "Pincode": "382346",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thakkar Bapanagar",
        "Pincode": "382350",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khodiyarnagar",
        "Pincode": "382352",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhoda",
        "Pincode": "382355",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valad",
        "Pincode": "382360",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Narol",
        "Pincode": "382405",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Odhav",
        "Pincode": "382410",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Odhav G V M M Nd",
        "Pincode": "382410",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Odhav I E",
        "Pincode": "382415",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vastral",
        "Pincode": "382418",
        "City": "Vastral",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vastrel",
        "Pincode": "382418",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adalaj",
        "Pincode": "382421",
        "City": "Adalaj",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Uvarsad",
        "Pincode": "382422",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kasturinagar Sertha",
        "Pincode": "382423",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Area",
        "Pincode": "382424",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chand Kheda",
        "Pincode": "382424",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bareja",
        "Pincode": "382425",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetalpur",
        "Pincode": "382426",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kathwada M P",
        "Pincode": "382430",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kuha",
        "Pincode": "382433",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nandej",
        "Pincode": "382435",
        "City": "Nandej",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vatva",
        "Pincode": "382440",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Isanpur",
        "Pincode": "382443",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vatva I E",
        "Pincode": "382445",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vatva Jasodanagar",
        "Pincode": "382445",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Janta Nagar",
        "Pincode": "382449",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Barwala Ghelasa",
        "Pincode": "382450",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Salangpur Hanuman",
        "Pincode": "382451",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dholera",
        "Pincode": "382455",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhandhuka",
        "Pincode": "382460",
        "City": "Dhandhuka",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadiad",
        "Pincode": "382463",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fedra Fertilizemagar",
        "Pincode": "382465",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Digvijagar",
        "Pincode": "382470",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sindhi Ambawadi",
        "Pincode": "382475",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sindhi Colony",
        "Pincode": "382475",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranip",
        "Pincode": "382480",
        "City": "Ranip",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chandlodia",
        "Pincode": "382481",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pethapur",
        "Pincode": "382610",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Randheja",
        "Pincode": "382620",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rupal",
        "Pincode": "382630",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardhev",
        "Pincode": "382640",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Unava Balva",
        "Pincode": "382650",
        "City": "Gandhinagar",
        "District": "Gandhi Nagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balva",
        "Pincode": "382655",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Charadu",
        "Pincode": "382704",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dangarva",
        "Pincode": "382705",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Meu",
        "Pincode": "382706",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nandasan",
        "Pincode": "382706",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karjisan",
        "Pincode": "382707",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadasma",
        "Pincode": "382708",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadu Mahesana",
        "Pincode": "382709",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jagidan",
        "Pincode": "382710",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kherva Jagudam",
        "Pincode": "382711",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Boriavi",
        "Pincode": "382712",
        "City": "Boriavi",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Akhaj",
        "Pincode": "382713",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadi",
        "Pincode": "382715",
        "City": "Kadi",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "382715",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Serisa",
        "Pincode": "382716",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Suraj",
        "Pincode": "382717",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghumansan",
        "Pincode": "382718",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jornaj",
        "Pincode": "382719",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Desaiwada",
        "Pincode": "382721",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dr Ambedkar Road",
        "Pincode": "382721",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Road",
        "Pincode": "382721",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Industrial Estate",
        "Pincode": "382721",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalol",
        "Pincode": "382721",
        "City": "Kalol",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pamol",
        "Pincode": "382721",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Society Area",
        "Pincode": "382721",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kaloli E",
        "Pincode": "382725",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adraj Merda",
        "Pincode": "382726",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karannagar",
        "Pincode": "382727",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thol",
        "Pincode": "382728",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhatral",
        "Pincode": "382729",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Cimatral",
        "Pincode": "382729",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Langhnej",
        "Pincode": "382730",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Veda Paliad",
        "Pincode": "382731",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambaliayasan",
        "Pincode": "382732",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saij",
        "Pincode": "382733",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vamaj",
        "Pincode": "382734",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wamaj",
        "Pincode": "382734",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nardipur",
        "Pincode": "382735",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jamla",
        "Pincode": "382736",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Paliad Veda",
        "Pincode": "382737",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limbodara",
        "Pincode": "382739",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pansar",
        "Pincode": "382740",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhulasan",
        "Pincode": "382741",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dingucha",
        "Pincode": "382742",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Isand",
        "Pincode": "382743",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bajana",
        "Pincode": "382745",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dasada",
        "Pincode": "382750",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zinzuwada",
        "Pincode": "382755",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kharaghoda",
        "Pincode": "382760",
        "City": "Kharaghoda",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "382760",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patdi",
        "Pincode": "382765",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vanod",
        "Pincode": "382770",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lakhtar",
        "Pincode": "382775",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adariyana",
        "Pincode": "382780",
        "City": "Surendranagar",
        "District": "Surendranagar",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aglod",
        "Pincode": "382805",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Falu",
        "Pincode": "382806",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Charada",
        "Pincode": "382810",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Delvada",
        "Pincode": "382812",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gavada",
        "Pincode": "382815",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malosan",
        "Pincode": "382816",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gerita Kolvada R S",
        "Pincode": "382820",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samau",
        "Pincode": "382823",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gozaria",
        "Pincode": "382825",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Boru",
        "Pincode": "382826",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bilodara",
        "Pincode": "382831",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kukarvada",
        "Pincode": "382831",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vihar",
        "Pincode": "382832",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadasan",
        "Pincode": "382833",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lodra",
        "Pincode": "382835",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rindrol",
        "Pincode": "382836",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ladol",
        "Pincode": "382840",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mansa Bazar",
        "Pincode": "382845",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pilval",
        "Pincode": "382850",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Veda Pilwai",
        "Pincode": "382851",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pundhra",
        "Pincode": "382855",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anodia",
        "Pincode": "382856",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahudi",
        "Pincode": "382857",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarpur",
        "Pincode": "382860",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jantral",
        "Pincode": "382861",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sundarpur",
        "Pincode": "382862",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fudeda",
        "Pincode": "382863",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasai Dabhla",
        "Pincode": "382865",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhla",
        "Pincode": "382867",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tintodan",
        "Pincode": "382868",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "382870",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vijapur",
        "Pincode": "382870",
        "City": "Vijapur",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghantu Dhanpura",
        "Pincode": "382871",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nava Sangpur",
        "Pincode": "382875",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranasan",
        "Pincode": "382880",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hajipura",
        "Pincode": "383001",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Himatnagar",
        "Pincode": "383001",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahavirnagar",
        "Pincode": "383001",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "383001",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gidc Ankleshwar",
        "Pincode": "383002",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaktapur",
        "Pincode": "383010",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gambhoi",
        "Pincode": "383030",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jadar",
        "Pincode": "383110",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Salal",
        "Pincode": "383120",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nani Bhaghol",
        "Pincode": "383205",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Prantij",
        "Pincode": "383205",
        "City": "Prantij",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "383205",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sonasan",
        "Pincode": "383210",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "383215",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Takhatgadh",
        "Pincode": "383215",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Talod",
        "Pincode": "383215",
        "City": "Talod",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Illol",
        "Pincode": "383220",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Davad",
        "Pincode": "383225",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umedgadh",
        "Pincode": "383230",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "383235",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadali",
        "Pincode": "383235",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bamna",
        "Pincode": "383240",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "383245",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhiloda",
        "Pincode": "383245",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Takatuka",
        "Pincode": "383246",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tintoi",
        "Pincode": "383250",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lusadia",
        "Pincode": "383251",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khedbrahma",
        "Pincode": "383255",
        "City": "Khedbrahma",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "383255",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Akrund",
        "Pincode": "383260",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Radhivad",
        "Pincode": "383270",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Laxmipura",
        "Pincode": "383275",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raigadh",
        "Pincode": "383276",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Harsol",
        "Pincode": "383305",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadagam Sk",
        "Pincode": "383307",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhansura",
        "Pincode": "383310",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "383315",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "College Area",
        "Pincode": "383315",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Modasa",
        "Pincode": "383315",
        "City": "Modasa",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Society Area",
        "Pincode": "383315",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardoi",
        "Pincode": "383320",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bayad",
        "Pincode": "383325",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vantda Bayad",
        "Pincode": "383326",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Choila",
        "Pincode": "383327",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Demai",
        "Pincode": "383330",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amodara",
        "Pincode": "383331",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Deroli",
        "Pincode": "383332",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gabat",
        "Pincode": "383335",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sathamba",
        "Pincode": "383340",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malpur",
        "Pincode": "383345",
        "City": "Malpur",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Meghraj",
        "Pincode": "383350",
        "City": "Meghraj",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shamlaji",
        "Pincode": "383355",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Badoli",
        "Pincode": "383410",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chithoda",
        "Pincode": "383421",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Poshina",
        "Pincode": "383422",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Idar",
        "Pincode": "383430",
        "City": "Idar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "383430",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shrinagar",
        "Pincode": "383430",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Verabar",
        "Pincode": "383434",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadiadra",
        "Pincode": "383440",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasai",
        "Pincode": "383450",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vijaynagar",
        "Pincode": "383460",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadiawada",
        "Pincode": "383462",
        "City": "Himatnagar",
        "District": "Sabarkantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fatepur",
        "Pincode": "383781",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Collectorate",
        "Pincode": "384001",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Janatha Super Market",
        "Pincode": "384001",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahesana",
        "Pincode": "384001",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Talavgate Road",
        "Pincode": "384001",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mehesana Ind Estate",
        "Pincode": "384002",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Railway Colony",
        "Pincode": "384002",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gambhu",
        "Pincode": "384011",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balisana",
        "Pincode": "384110",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambasan",
        "Pincode": "384111",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Der",
        "Pincode": "384112",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhandu",
        "Pincode": "384120",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Daumoti",
        "Pincode": "384121",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetalvasna",
        "Pincode": "384122",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kahoda",
        "Pincode": "384130",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhunav",
        "Pincode": "384131",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lunva",
        "Pincode": "384132",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandali",
        "Pincode": "384133",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamli",
        "Pincode": "384140",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bindu Sarovar Road",
        "Pincode": "384151",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jam Chakla",
        "Pincode": "384151",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "384151",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sidhpur",
        "Pincode": "384151",
        "City": "Sidhpur",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zampli Pole",
        "Pincode": "384151",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dethli",
        "Pincode": "384152",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Meloj",
        "Pincode": "384153",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bilia",
        "Pincode": "384154",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Unava",
        "Pincode": "384160",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tundav",
        "Pincode": "384165",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kotkuva",
        "Pincode": "384170",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pharmacy",
        "Pincode": "384170",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umiyamataji",
        "Pincode": "384170",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Unjha",
        "Pincode": "384170",
        "City": "Unjha",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karli",
        "Pincode": "384171",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dasaj",
        "Pincode": "384172",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhankher",
        "Pincode": "384174",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aithor",
        "Pincode": "384175",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sihi",
        "Pincode": "384176",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Upera",
        "Pincode": "384177",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maktupur",
        "Pincode": "384178",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panchot",
        "Pincode": "384205",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palodar",
        "Pincode": "384206",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhatiarda",
        "Pincode": "384207",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bechraji",
        "Pincode": "384210",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sankhalpur",
        "Pincode": "384211",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Modhera",
        "Pincode": "384212",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalri",
        "Pincode": "384213",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Brahmanwada",
        "Pincode": "384215",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chanasma",
        "Pincode": "384220",
        "City": "Chanasma",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadavli",
        "Pincode": "384221",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Brahmanwada",
        "Pincode": "384222",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhinoj",
        "Pincode": "384225",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pindharpura",
        "Pincode": "384226",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sunsar",
        "Pincode": "384227",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gorad",
        "Pincode": "384228",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lanva",
        "Pincode": "384229",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamboi",
        "Pincode": "384230",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalyana",
        "Pincode": "384231",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palasar",
        "Pincode": "384235",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Harij",
        "Pincode": "384240",
        "City": "Harij",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mujpur Harji",
        "Pincode": "384241",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lolada",
        "Pincode": "384242",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sami",
        "Pincode": "384245",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sankheswar",
        "Pincode": "384246",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dudkha",
        "Pincode": "384247",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kansa",
        "Pincode": "384250",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kungher",
        "Pincode": "384255",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chandrumana",
        "Pincode": "384256",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adia",
        "Pincode": "384257",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manund",
        "Pincode": "384260",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Muderda",
        "Pincode": "384261",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "City",
        "Pincode": "384265",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Marketyard",
        "Pincode": "384265",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patan",
        "Pincode": "384265",
        "City": "Patan",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajkawada",
        "Pincode": "384265",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sidhraj Road",
        "Pincode": "384265",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Three Gate",
        "Pincode": "384265",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kuvara",
        "Pincode": "384270",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aghar",
        "Pincode": "384271",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sariad",
        "Pincode": "384272",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mesar",
        "Pincode": "384273",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wamaiya",
        "Pincode": "384274",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranuj",
        "Pincode": "384275",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sander",
        "Pincode": "384276",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sankhari",
        "Pincode": "384277",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nayta",
        "Pincode": "384278",
        "City": "Patan",
        "District": "Patan",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kantharavi",
        "Pincode": "384280",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wagrod",
        "Pincode": "384285",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kakoshi",
        "Pincode": "384290",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dindroi",
        "Pincode": "384291",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Methan",
        "Pincode": "384292",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kada",
        "Pincode": "384305",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valam",
        "Pincode": "384310",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khandosan",
        "Pincode": "384311",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tarabh",
        "Pincode": "384312",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "384315",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "384315",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Visnagar",
        "Pincode": "384315",
        "City": "Visnagar",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gothva",
        "Pincode": "384318",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhalak",
        "Pincode": "384319",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umta",
        "Pincode": "384320",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jaska",
        "Pincode": "384321",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Denap",
        "Pincode": "384323",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kheralu",
        "Pincode": "384325",
        "City": "Kheralu",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhad",
        "Pincode": "384327",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhoda",
        "Pincode": "384328",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhoi",
        "Pincode": "384328",
        "City": "Dabhoi",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "No Delivery",
        "Pincode": "384328",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kodram",
        "Pincode": "384329",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Satlasana",
        "Pincode": "384330",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sipor",
        "Pincode": "384335",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sudasana",
        "Pincode": "384340",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sundhia",
        "Pincode": "384345",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Taranga Hill R S",
        "Pincode": "384350",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vagnagar Bazar",
        "Pincode": "384355",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharoi D S C",
        "Pincode": "384360",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhablia",
        "Pincode": "384365",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kahipur",
        "Pincode": "384370",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamana",
        "Pincode": "384375",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piludra",
        "Pincode": "384380",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gunja",
        "Pincode": "384385",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Balol",
        "Pincode": "384410",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maguna",
        "Pincode": "384411",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhotana",
        "Pincode": "384421",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Santhal",
        "Pincode": "384430",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Linch",
        "Pincode": "384435",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lakhvad",
        "Pincode": "384440",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhi",
        "Pincode": "384513",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Delhigate",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamalpura",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kirtistambh",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palanpur",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palanpur Joravar",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajgadhi",
        "Pincode": "385001",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palace",
        "Pincode": "385002",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chitrasani",
        "Pincode": "385010",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jagana",
        "Pincode": "385011",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virampur",
        "Pincode": "385012",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambaji",
        "Pincode": "385110",
        "City": "Ambaji",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chadotar",
        "Pincode": "385111",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malan",
        "Pincode": "385112",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Danta Bhavangadh",
        "Pincode": "385120",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shri Amirgadh",
        "Pincode": "385130",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Iqbalgadh",
        "Pincode": "385135",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhapi",
        "Pincode": "385210",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Majadar",
        "Pincode": "385215",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhanera",
        "Pincode": "385310",
        "City": "Dhanera",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ramsan",
        "Pincode": "385315",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhabhar",
        "Pincode": "385320",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tervada",
        "Pincode": "385325",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Morvada",
        "Pincode": "385326",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Diyodar",
        "Pincode": "385330",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Radhanpur",
        "Pincode": "385340",
        "City": "Radhanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rangadhi",
        "Pincode": "385340",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Santalpur",
        "Pincode": "385350",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Varahi",
        "Pincode": "385360",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadgam",
        "Pincode": "385410",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mamadpur",
        "Pincode": "385421",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dantiwada Colony",
        "Pincode": "385505",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardar Krishinagar",
        "Pincode": "385506",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chandisar",
        "Pincode": "385510",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadh",
        "Pincode": "385515",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samdhi Ranajivas",
        "Pincode": "385516",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sasam",
        "Pincode": "385517",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kumbhasan",
        "Pincode": "385518",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madana",
        "Pincode": "385519",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanodar",
        "Pincode": "385520",
        "City": "Kanodar",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vedancha",
        "Pincode": "385521",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raner",
        "Pincode": "385522",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Meta",
        "Pincode": "385525",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Basu",
        "Pincode": "385526",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhildi",
        "Pincode": "385530",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madetha",
        "Pincode": "385531",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Muletha",
        "Pincode": "385531",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamboi Bk",
        "Pincode": "385533",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "385535",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Disa",
        "Pincode": "385535",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Juna Disa",
        "Pincode": "385540",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lakhani",
        "Pincode": "385541",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhuva",
        "Pincode": "385542",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadath",
        "Pincode": "385543",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khimat",
        "Pincode": "385545",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panthavada",
        "Pincode": "385546",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sihori",
        "Pincode": "385550",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umbari",
        "Pincode": "385551",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khimana",
        "Pincode": "385554",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thara",
        "Pincode": "385555",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Un",
        "Pincode": "385560",
        "City": "Un",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tharad",
        "Pincode": "385565",
        "City": "Tharad",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhima",
        "Pincode": "385566",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surgam",
        "Pincode": "385570",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Benap",
        "Pincode": "385571",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vav",
        "Pincode": "385575",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jherda",
        "Pincode": "385580",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malgadh",
        "Pincode": "385585",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agathala",
        "Pincode": "385586",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vada",
        "Pincode": "385590",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chekhla",
        "Pincode": "385595",
        "City": "Palanpur",
        "District": "Banaskantha",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ashram Road",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "College Road",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Desaivago",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dumrul Bazar",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Industrial Estate",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Methodist Hospital",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nadiad",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Srp Group Area",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "387001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Patel Society Area",
        "Pincode": "387002",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghodasar",
        "Pincode": "387110",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jaravat",
        "Pincode": "387111",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kailash Hindu Lodge",
        "Pincode": "387113",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alindra",
        "Pincode": "387115",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanij",
        "Pincode": "387120",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khatrajgate",
        "Pincode": "387130",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Marketyard",
        "Pincode": "387130",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mehmedabad",
        "Pincode": "387130",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Modaj",
        "Pincode": "387135",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Haldarwas",
        "Pincode": "387140",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhow",
        "Pincode": "387210",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malataj",
        "Pincode": "387220",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pij",
        "Pincode": "387230",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Bazar",
        "Pincode": "387240",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sojitra",
        "Pincode": "387240",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alina",
        "Pincode": "387305",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Boriavi",
        "Pincode": "387310",
        "City": "Boriavi",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chaklasi",
        "Pincode": "387315",
        "City": "Chaklasi",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhan",
        "Pincode": "387320",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanjri",
        "Pincode": "387325",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mohlel",
        "Pincode": "387330",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sodpur",
        "Pincode": "387331",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahudha",
        "Pincode": "387335",
        "City": "Mahudha",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahisa",
        "Pincode": "387340",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Narsanda",
        "Pincode": "387345",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palana",
        "Pincode": "387350",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piplag",
        "Pincode": "387355",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Salun",
        "Pincode": "387360",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Torna",
        "Pincode": "387365",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Antroli",
        "Pincode": "387366",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Uttarsanda",
        "Pincode": "387370",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadtal",
        "Pincode": "387375",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaso",
        "Pincode": "387380",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Deva",
        "Pincode": "387382",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rudan",
        "Pincode": "387385",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kheda",
        "Pincode": "387411",
        "City": "Kheda",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kheda Camp",
        "Pincode": "387421",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sinhuj",
        "Pincode": "387430",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vanthvali",
        "Pincode": "387435",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alindra",
        "Pincode": "387510",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vansol",
        "Pincode": "387515",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limbasi",
        "Pincode": "387520",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Matar",
        "Pincode": "387530",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Traj",
        "Pincode": "387531",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navagam",
        "Pincode": "387540",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nayka",
        "Pincode": "387550",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Radhu",
        "Pincode": "387560",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ratanpur",
        "Pincode": "387570",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Attarsumba",
        "Pincode": "387610",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Antisargate",
        "Pincode": "387620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Chowk",
        "Pincode": "387620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kapadwanj",
        "Pincode": "387620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kathlal",
        "Pincode": "387630",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhipadi",
        "Pincode": "387635",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lasundra",
        "Pincode": "387640",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nirmali",
        "Pincode": "387650",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jher",
        "Pincode": "387651",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Antisar",
        "Pincode": "387655",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Betwada",
        "Pincode": "387660",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ramol",
        "Pincode": "387710",
        "City": "Ramol",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dholka",
        "Pincode": "387810",
        "City": "Dholka",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dholka Kharakuva",
        "Pincode": "387810",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khokhar Chakla",
        "Pincode": "387810",
        "City": "Ahmedabad",
        "District": "Ahmedabad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amul Dairy",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anand",
        "Pincode": "388001",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anand R S",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Loteswar Bhagol",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarganj",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Town",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "V T College",
        "Pincode": "388001",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Porda",
        "Pincode": "388105",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agri Inst Anand",
        "Pincode": "388110",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "V V Nagar",
        "Pincode": "388120",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vithal Udyognagar",
        "Pincode": "388121",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gamdi",
        "Pincode": "388122",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Boria",
        "Pincode": "388130",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhundakuva",
        "Pincode": "388131",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sandesar",
        "Pincode": "388132",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bochasan R S",
        "Pincode": "388140",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nar",
        "Pincode": "388150",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pandoli",
        "Pincode": "388160",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sayma",
        "Pincode": "388170",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tarapur",
        "Pincode": "388180",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhalej",
        "Pincode": "388205",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ode",
        "Pincode": "388210",
        "City": "Ode",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bharoda",
        "Pincode": "388211",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sundalpura",
        "Pincode": "388212",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shili",
        "Pincode": "388213",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thamna",
        "Pincode": "388215",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khankuva",
        "Pincode": "388216",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Padal",
        "Pincode": "388217",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panchvati",
        "Pincode": "388220",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umreth",
        "Pincode": "388220",
        "City": "Umreth",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dakor",
        "Pincode": "388225",
        "City": "Dakor",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Town",
        "Pincode": "388225",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valasan",
        "Pincode": "388226",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalsar",
        "Pincode": "388230",
        "City": "Mahesana",
        "District": "Mahesana",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Menpura",
        "Pincode": "388235",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wanakbori",
        "Pincode": "388236",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Wanghroli",
        "Pincode": "388238",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "T P S",
        "Pincode": "388239",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Savalia C W",
        "Pincode": "388240",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sevalia R S",
        "Pincode": "388245",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thasra",
        "Pincode": "388250",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tower Road",
        "Pincode": "388250",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nepalpura",
        "Pincode": "388254",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Town",
        "Pincode": "388255",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadasinor",
        "Pincode": "388255",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saliawadi",
        "Pincode": "388256",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Othwad",
        "Pincode": "388257",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaddla Vadasinor",
        "Pincode": "388258",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhanthla",
        "Pincode": "388259",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Birpur",
        "Pincode": "388260",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Debhari",
        "Pincode": "388261",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saradia",
        "Pincode": "388262",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pandva",
        "Pincode": "388265",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jetholi",
        "Pincode": "388266",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bar",
        "Pincode": "388267",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vardhari",
        "Pincode": "388270",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adas",
        "Pincode": "388305",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vasad",
        "Pincode": "388306",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kantharia",
        "Pincode": "388307",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ratanpur Anand",
        "Pincode": "388307",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Asodar",
        "Pincode": "388308",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ajarpura",
        "Pincode": "388310",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bakrol",
        "Pincode": "388315",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chikhodra",
        "Pincode": "388320",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karamsad",
        "Pincode": "388325",
        "City": "Karamsad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khambholaj",
        "Pincode": "388330",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kunjeav",
        "Pincode": "388335",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rasnol",
        "Pincode": "388336",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mogar",
        "Pincode": "388340",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Napad",
        "Pincode": "388350",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navli",
        "Pincode": "388355",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samarkha",
        "Pincode": "388360",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarsa",
        "Pincode": "388365",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadod",
        "Pincode": "388370",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jharola",
        "Pincode": "388390",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bandhani",
        "Pincode": "388410",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Changa",
        "Pincode": "388421",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gambhira",
        "Pincode": "388425",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharmaji",
        "Pincode": "388430",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadadla",
        "Pincode": "388435",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mehlav",
        "Pincode": "388440",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mogri",
        "Pincode": "388445",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Petlad",
        "Pincode": "388450",
        "City": "Petlad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "388450",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zanda Bazar",
        "Pincode": "388450",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piplav",
        "Pincode": "388460",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kasor",
        "Pincode": "388461",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palaj",
        "Pincode": "388465",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Charotar",
        "Pincode": "388466",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sunav",
        "Pincode": "388470",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sundarna",
        "Pincode": "388480",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Simarda",
        "Pincode": "388485",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anklave",
        "Pincode": "388510",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umeta",
        "Pincode": "388515",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bamangam",
        "Pincode": "388520",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadran",
        "Pincode": "388530",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarol",
        "Pincode": "388531",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Borsad",
        "Pincode": "388540",
        "City": "Borsad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandhi Ganj",
        "Pincode": "388540",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kashipura",
        "Pincode": "388540",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Market Yard",
        "Pincode": "388540",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alarsa",
        "Pincode": "388543",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Davol",
        "Pincode": "388544",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kavitha",
        "Pincode": "388545",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kathana R S",
        "Pincode": "388550",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalamsar",
        "Pincode": "388555",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dehvan",
        "Pincode": "388556",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Napa",
        "Pincode": "388560",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ras",
        "Pincode": "388570",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Virsad",
        "Pincode": "388580",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vatadra",
        "Pincode": "388585",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhuvaran R S",
        "Pincode": "388610",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chitari Bazar",
        "Pincode": "388620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "College Area",
        "Pincode": "388620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghasgawara",
        "Pincode": "388620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khambhat",
        "Pincode": "388620",
        "City": "Khambhat",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pith Bazar",
        "Pincode": "388620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tran Darwaja",
        "Pincode": "388620",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gudel",
        "Pincode": "388625",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kansari",
        "Pincode": "388630",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Undel",
        "Pincode": "388640",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanisa",
        "Pincode": "388641",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Timba Road",
        "Pincode": "388710",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Timba",
        "Pincode": "388711",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nadisar",
        "Pincode": "388712",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kakanpur",
        "Pincode": "388713",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Morva Rena",
        "Pincode": "388714",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ratanpur Kantdi",
        "Pincode": "388715",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Kantdi",
        "Pincode": "388716",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "City Civil Lines",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Godhra",
        "Pincode": "389001",
        "City": "Godhra",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Industrial Estate",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Power House",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shroff Bazar",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vorvad",
        "Pincode": "389001",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mora",
        "Pincode": "389110",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limdi Doli",
        "Pincode": "389111",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sant Road",
        "Pincode": "389120",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Natapur",
        "Pincode": "389121",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Orvada",
        "Pincode": "389122",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mojri",
        "Pincode": "389123",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piplod",
        "Pincode": "389130",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Zari",
        "Pincode": "389135",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limkheda",
        "Pincode": "389140",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadwal",
        "Pincode": "389145",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chakalia Road",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahod",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Godhra Road",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Padav Bazar",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pani Gate",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "389151",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Garbada",
        "Pincode": "389155",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Abhlod",
        "Pincode": "389156",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bavka",
        "Pincode": "389157",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Kharaj",
        "Pincode": "389158",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Freeland Ganj Dahod",
        "Pincode": "389160",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhalod",
        "Pincode": "389170",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fatepura",
        "Pincode": "389172",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sanjeli",
        "Pincode": "389175",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Limdi Pm",
        "Pincode": "389180",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sukhsar",
        "Pincode": "389190",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shehera",
        "Pincode": "389210",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kothamba",
        "Pincode": "389220",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lunawada",
        "Pincode": "389230",
        "City": "Lunawada",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi",
        "Pincode": "389230",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vorwad",
        "Pincode": "389230",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bakor",
        "Pincode": "389232",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadana",
        "Pincode": "389240",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Diwada Colony",
        "Pincode": "389250",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Santrampur",
        "Pincode": "389260",
        "City": "Santrampur",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Deiol",
        "Pincode": "389310",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Derol R S",
        "Pincode": "389320",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Derol",
        "Pincode": "389322",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jantral Pm",
        "Pincode": "389325",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Industrial Estate",
        "Pincode": "389330",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalol P M",
        "Pincode": "389330",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahalaxmi Road",
        "Pincode": "389330",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vejalpur",
        "Pincode": "389340",
        "City": "Vejalpur",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Adadra",
        "Pincode": "389341",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Eral",
        "Pincode": "389342",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mehlol",
        "Pincode": "389343",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karoli",
        "Pincode": "389344",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Boru Bakrol",
        "Pincode": "389345",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vyasda",
        "Pincode": "389346",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sureli Vejalpur",
        "Pincode": "389347",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambali",
        "Pincode": "389348",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "389350",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Halol",
        "Pincode": "389350",
        "City": "Halol",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanjri Pm",
        "Pincode": "389351",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baska",
        "Pincode": "389352",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranjitnagar",
        "Pincode": "389355",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pavagadh",
        "Pincode": "389360",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghogamba",
        "Pincode": "389365",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shivrajpur Mines",
        "Pincode": "389370",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bazar",
        "Pincode": "389380",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Devgadh Bariya",
        "Pincode": "389380",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dhanpur",
        "Pincode": "389382",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jambughoda",
        "Pincode": "389390",
        "City": "Godhara",
        "District": "Panchmahal",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baranpura",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dandia Bazar",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jubilee Garden",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khanderao Market",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madanzampa",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nagarwada",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Padmavati Chaugan",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara",
        "Pincode": "390001",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhani Road",
        "Pincode": "390002",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fateganj",
        "Pincode": "390002",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pratapganj",
        "Pincode": "390002",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardarnagar Society",
        "Pincode": "390002",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Chemical Industr",
        "Pincode": "390003",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pratapnagar R S",
        "Pincode": "390004",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Pratapnagar",
        "Pincode": "390004",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Akota",
        "Pincode": "390005",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alkapuri",
        "Pincode": "390005",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Sayajiganj",
        "Pincode": "390005",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Harni Aerodrame",
        "Pincode": "390006",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Santkanvar Colony",
        "Pincode": "390006",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Fetepura",
        "Pincode": "390006",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Subhanpura",
        "Pincode": "390007",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Race Course",
        "Pincode": "390007",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara E M E School",
        "Pincode": "390008",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sharadnagar",
        "Pincode": "390009",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara O N G C Colony",
        "Pincode": "390009",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Makarpura I E",
        "Pincode": "390010",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Manjalpur",
        "Pincode": "390011",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Atlardra",
        "Pincode": "390012",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Maneja",
        "Pincode": "390013",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Makarpura",
        "Pincode": "390014",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Vidyutnagar Colo",
        "Pincode": "390015",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gorva",
        "Pincode": "390016",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Ind Estate",
        "Pincode": "390016",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gendigate",
        "Pincode": "390017",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panigate",
        "Pincode": "390017",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "S N Road",
        "Pincode": "390017",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Wadi",
        "Pincode": "390017",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "I D Hospital Road",
        "Pincode": "390018",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Kareli Bag",
        "Pincode": "390018",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodara Ajwa Road",
        "Pincode": "390019",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaghodia Road",
        "Pincode": "390019",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sewasi",
        "Pincode": "391101",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chandkheda Society",
        "Pincode": "391105",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chandod",
        "Pincode": "391105",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Thuvavi",
        "Pincode": "391107",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Furtikui",
        "Pincode": "391108",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhoi R S",
        "Pincode": "391110",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kaumudi Society",
        "Pincode": "391110",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadodari Bhaghol",
        "Pincode": "391110",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sathod",
        "Pincode": "391111",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sinor",
        "Pincode": "391115",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sisodra",
        "Pincode": "391116",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tilakwada",
        "Pincode": "391120",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadarpur",
        "Pincode": "391125",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mankni",
        "Pincode": "391126",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhatpur",
        "Pincode": "391130",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bodeli",
        "Pincode": "391135",
        "City": "Bodeli",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karali",
        "Pincode": "391136",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nana Amodra",
        "Pincode": "391137",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kosindra",
        "Pincode": "391140",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chalamali",
        "Pincode": "391141",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadachhala",
        "Pincode": "391142",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sankheda",
        "Pincode": "391145",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Parvata",
        "Pincode": "391146",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naswadi",
        "Pincode": "391150",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tanakhala",
        "Pincode": "391151",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gad Boriad",
        "Pincode": "391152",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jabugam",
        "Pincode": "391155",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tejgadh",
        "Pincode": "391156",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Amroli",
        "Pincode": "391157",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pavijetpur",
        "Pincode": "391160",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhota Udepur",
        "Pincode": "391165",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "391165",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panvad",
        "Pincode": "391168",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rangpur Z",
        "Pincode": "391169",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kawant",
        "Pincode": "391170",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadipani",
        "Pincode": "391175",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kandari",
        "Pincode": "391210",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kayavarohan",
        "Pincode": "391220",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandala",
        "Pincode": "391230",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Miyagam Karjan",
        "Pincode": "391240",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarar",
        "Pincode": "391241",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Varnama",
        "Pincode": "391242",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Por",
        "Pincode": "391243",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Choranda",
        "Pincode": "391244",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Miyagam",
        "Pincode": "391245",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sadhli",
        "Pincode": "391250",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bajwa",
        "Pincode": "391310",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jawahar Nagar",
        "Pincode": "391320",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Southern Township",
        "Pincode": "391320",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Koyli",
        "Pincode": "391330",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nandesari I E",
        "Pincode": "391340",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Township",
        "Pincode": "391345",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Petrochemical",
        "Pincode": "391346",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Petrofils",
        "Pincode": "391347",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranoli",
        "Pincode": "391350",
        "City": "Ranoli",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhaili",
        "Pincode": "391410",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Masar Road",
        "Pincode": "391421",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mobhu Road",
        "Pincode": "391430",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Padra",
        "Pincode": "391440",
        "City": "Padra",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabka",
        "Pincode": "391441",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mujpur Padra",
        "Pincode": "391442",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chokari",
        "Pincode": "391443",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ranu",
        "Pincode": "391445",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karakhadi",
        "Pincode": "391450",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadu",
        "Pincode": "391460",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jarod",
        "Pincode": "391510",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samlaya R S",
        "Pincode": "391520",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sandasal",
        "Pincode": "391530",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vejpur",
        "Pincode": "391535",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhani",
        "Pincode": "391740",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sokhada",
        "Pincode": "391745",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Colony",
        "Pincode": "391750",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vagholia",
        "Pincode": "391760",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Savli Town",
        "Pincode": "391770",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gothda",
        "Pincode": "391773",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Desar",
        "Pincode": "391774",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tundav Savli",
        "Pincode": "391775",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadarwa",
        "Pincode": "391780",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gajera",
        "Pincode": "391810",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kahanva",
        "Pincode": "391815",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Piludra Gajera",
        "Pincode": "391816",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadach",
        "Pincode": "391817",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kareli",
        "Pincode": "391818",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bharuch",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "City",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Civil Lines",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gayatri Nagar",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hajikhana Bazar",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Katopore Bazar",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lallubhai Chakla",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mohmadpura",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panch Fanas",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sindhvai",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Super Market",
        "Pincode": "392001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bharuch Society Area",
        "Pincode": "392002",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhadeshvar",
        "Pincode": "392011",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zadeshwar",
        "Pincode": "392011",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Muktampur",
        "Pincode": "392012",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tavra",
        "Pincode": "392013",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhanor",
        "Pincode": "392014",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Narmadanagar",
        "Pincode": "392015",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dayadra",
        "Pincode": "392020",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pariej",
        "Pincode": "392021",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Samni",
        "Pincode": "392025",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Buva",
        "Pincode": "392026",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Shukaltirth",
        "Pincode": "392030",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nikora",
        "Pincode": "392031",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarbhan",
        "Pincode": "392035",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tankan",
        "Pincode": "392040",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amod",
        "Pincode": "392110",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Achhod",
        "Pincode": "392111",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mia Matar",
        "Pincode": "392115",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dahej",
        "Pincode": "392130",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vagra",
        "Pincode": "392140",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jambusar Bazar",
        "Pincode": "392150",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Uber",
        "Pincode": "392153",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kora",
        "Pincode": "392155",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karmad",
        "Pincode": "392160",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manubar",
        "Pincode": "392161",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kantharia Bharuch",
        "Pincode": "392162",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tham",
        "Pincode": "392163",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pakhajan",
        "Pincode": "392165",
        "City": "Nadiad",
        "District": "Kheda",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kavi",
        "Pincode": "392170",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarod",
        "Pincode": "392180",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nabipur",
        "Pincode": "392210",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palej",
        "Pincode": "392220",
        "City": "Palej",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ikhar",
        "Pincode": "392230",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tankaria",
        "Pincode": "392240",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valan",
        "Pincode": "392310",
        "City": "Vadodara",
        "District": "Vadodara",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ankleshwar R S",
        "Pincode": "393001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Goya Bazar",
        "Pincode": "393001",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ankleshwar I E",
        "Pincode": "393002",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "O N G C Ankleshwar",
        "Pincode": "393010",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Andada",
        "Pincode": "393016",
        "City": "Andada",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Avidha",
        "Pincode": "393017",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Diva",
        "Pincode": "393018",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sajod",
        "Pincode": "393020",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Matied",
        "Pincode": "393021",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Selamba",
        "Pincode": "393025",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hansot",
        "Pincode": "393030",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dediapada",
        "Pincode": "393040",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sagbara",
        "Pincode": "393050",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhalod",
        "Pincode": "393105",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sayar",
        "Pincode": "393107",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhagadia",
        "Pincode": "393110",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharoli",
        "Pincode": "393111",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajpardi",
        "Pincode": "393115",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umalla",
        "Pincode": "393120",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Deheli",
        "Pincode": "393125",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Netrang",
        "Pincode": "393130",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valia",
        "Pincode": "393135",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pratapnagar Nandod",
        "Pincode": "393140",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palace Road",
        "Pincode": "393145",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rajpipla",
        "Pincode": "393145",
        "City": "Rajpipla",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Station Road",
        "Pincode": "393145",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vadia Colony",
        "Pincode": "393145",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lachhras",
        "Pincode": "393150",
        "City": "Rajpipla",
        "District": "Narmada",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kevadia Colony",
        "Pincode": "393151",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gora Colony",
        "Pincode": "393155",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Varachchha",
        "Pincode": "394101",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Utran P H C",
        "Pincode": "394105",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kim",
        "Pincode": "394110",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nani Naroli",
        "Pincode": "394114",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panol",
        "Pincode": "394115",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kosamba R S Bazar",
        "Pincode": "394120",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tarsadi",
        "Pincode": "394120",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hathuran",
        "Pincode": "394125",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sayan",
        "Pincode": "394130",
        "City": "Sayan",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bodhan",
        "Pincode": "394140",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kathor",
        "Pincode": "394150",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sonifalia",
        "Pincode": "394150",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ghala",
        "Pincode": "394155",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mandvi Surat",
        "Pincode": "394160",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Godsamba",
        "Pincode": "394163",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tadkeshwar",
        "Pincode": "394170",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamrej",
        "Pincode": "394180",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kamrej Char Rasta",
        "Pincode": "394185",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kholvad",
        "Pincode": "394190",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udhna",
        "Pincode": "394210",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udhnagam",
        "Pincode": "394210",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baroda Rayon",
        "Pincode": "394220",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pandesara I E",
        "Pincode": "394221",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sachin",
        "Pincode": "394230",
        "City": "Sachin",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Lajpor",
        "Pincode": "394235",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karchelia",
        "Pincode": "394240",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naldhara",
        "Pincode": "394241",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vaheval",
        "Pincode": "394242",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umra",
        "Pincode": "394243",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahuvaria",
        "Pincode": "394244",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zervavra",
        "Pincode": "394245",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahuva N",
        "Pincode": "394250",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hajira",
        "Pincode": "394270",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chalthan",
        "Pincode": "394305",
        "City": "Chalthan",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gangadhra R S",
        "Pincode": "394310",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Palsana",
        "Pincode": "394315",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Baleshwar",
        "Pincode": "394317",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sevni",
        "Pincode": "394320",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umbhel",
        "Pincode": "394325",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vav Kathodra",
        "Pincode": "394326",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadodara",
        "Pincode": "394327",
        "City": "Kadodara",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Orna",
        "Pincode": "394330",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kadod",
        "Pincode": "394335",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Madhi",
        "Pincode": "394340",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota",
        "Pincode": "394345",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarbhon",
        "Pincode": "394350",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Puni",
        "Pincode": "394352",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Varad",
        "Pincode": "394355",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kakrapar",
        "Pincode": "394360",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bedkuvadoor",
        "Pincode": "394363",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Unchamala",
        "Pincode": "394364",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Raniamba",
        "Pincode": "394365",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nijhar",
        "Pincode": "394370",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Uchhal",
        "Pincode": "394375",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadbhuja",
        "Pincode": "394378",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kukarmunda",
        "Pincode": "394380",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Velachha",
        "Pincode": "394405",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Miya Mangrol",
        "Pincode": "394410",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mosali",
        "Pincode": "394421",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vankal",
        "Pincode": "394430",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zankhavav",
        "Pincode": "394440",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umarpada",
        "Pincode": "394445",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhatha",
        "Pincode": "394510",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fertilizernagar Tribhco S",
        "Pincode": "394515",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Variav",
        "Pincode": "394520",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mor",
        "Pincode": "394530",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Olpad",
        "Pincode": "394540",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dumas",
        "Pincode": "394550",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bardoli H Q",
        "Pincode": "394601",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sardar Bag",
        "Pincode": "394601",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sugar Factory",
        "Pincode": "394601",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vankaner Bardoli",
        "Pincode": "394620",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Buhari",
        "Pincode": "394630",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadat",
        "Pincode": "394631",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pati",
        "Pincode": "394632",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valod",
        "Pincode": "394640",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vedachhi",
        "Pincode": "394641",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kanpura",
        "Pincode": "394650",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "394650",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vyara",
        "Pincode": "394650",
        "City": "Vyara",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kapura",
        "Pincode": "394655",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Central Pulp Mills",
        "Pincode": "394660",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fort Songadh",
        "Pincode": "394670",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Cenral Colony",
        "Pincode": "394680",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ukaidam",
        "Pincode": "394680",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "W C Colony",
        "Pincode": "394680",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bajipura",
        "Pincode": "394690",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kos",
        "Pincode": "394690",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ahwa Dangs",
        "Pincode": "394710",
        "City": "The Dangs",
        "District": "The Dangs",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Subir",
        "Pincode": "394716",
        "City": "The Dangs",
        "District": "The Dangs",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saputara",
        "Pincode": "394720",
        "City": "The Dangs",
        "District": "The Dangs",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Waghai",
        "Pincode": "394730",
        "City": "The Dangs",
        "District": "The Dangs",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Illav",
        "Pincode": "394810",
        "City": "Bharuch",
        "District": "Bharuch",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Athwalines",
        "Pincode": "395001",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gopipura",
        "Pincode": "395001",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Govt Medical College",
        "Pincode": "395001",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Nanpura",
        "Pincode": "395001",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Sagrampura",
        "Pincode": "395001",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Inderpura",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khatodra",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Putli",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rustompura",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sagrampura",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Textiles Market",
        "Pincode": "395002",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Agnovad",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhagal",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhavanivad",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bombay Market",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "City",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jhampa",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mahidharpura",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Muglisara",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navabwada",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pegampura",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Saiyedpura",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Salabatpura",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Variavi Bhaghol",
        "Pincode": "395003",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Katargam",
        "Pincode": "395004",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ramnagar",
        "Pincode": "395005",
        "City": "Anand",
        "District": "Anand",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Rander",
        "Pincode": "395005",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Varachha Road",
        "Pincode": "395006",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Athwa",
        "Pincode": "395007",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Goddod",
        "Pincode": "395007",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat S V R College",
        "Pincode": "395007",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat A K Road",
        "Pincode": "395008",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vastadevdi",
        "Pincode": "395008",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Surat Navyug College",
        "Pincode": "395009",
        "City": "Surat",
        "District": "Surat",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Azad Chowk",
        "Pincode": "396001",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chhipwad",
        "Pincode": "396001",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Bazar",
        "Pincode": "396001",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Railway Station",
        "Pincode": "396001",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valsad",
        "Pincode": "396001",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tithal",
        "Pincode": "396006",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valsad Sugar Factory",
        "Pincode": "396007",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Atul",
        "Pincode": "396020",
        "City": "Atul",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bamti",
        "Pincode": "396020",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tiskari",
        "Pincode": "396025",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Hanuman Bhagda",
        "Pincode": "396030",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhadeli Jagalala",
        "Pincode": "396031",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Valsad I E",
        "Pincode": "396035",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khergam",
        "Pincode": "396040",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Achhavani",
        "Pincode": "396041",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vad",
        "Pincode": "396042",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Atgam",
        "Pincode": "396045",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dharampur",
        "Pincode": "396050",
        "City": "Dharampur",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambatalat",
        "Pincode": "396051",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ronvel",
        "Pincode": "396055",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rumla",
        "Pincode": "396060",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nani Vahial",
        "Pincode": "396065",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bilpudi",
        "Pincode": "396068",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bhilad",
        "Pincode": "396105",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bigri",
        "Pincode": "396110",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Zaroli",
        "Pincode": "396112",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kolak",
        "Pincode": "396115",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khatalwada",
        "Pincode": "396120",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Damnizumpa",
        "Pincode": "396125",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Killapardi",
        "Pincode": "396125",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nana Pondha",
        "Pincode": "396126",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mroli Sanjan",
        "Pincode": "396130",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Nargol",
        "Pincode": "396135",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Phansa",
        "Pincode": "396140",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kalgam",
        "Pincode": "396142",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Pardi Paria",
        "Pincode": "396145",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Snjan",
        "Pincode": "396150",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sarigam",
        "Pincode": "396155",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Manda",
        "Pincode": "396156",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Solsumba",
        "Pincode": "396165",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umargam",
        "Pincode": "396170",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umargam I E",
        "Pincode": "396171",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Umarsadi",
        "Pincode": "396175",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udvada",
        "Pincode": "396180",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udvada R S",
        "Pincode": "396185",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vapi",
        "Pincode": "396191",
        "City": "Vapi",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vapi I E",
        "Pincode": "396195",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Mota Pondha",
        "Pincode": "396201",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ambheti",
        "Pincode": "396202",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Daman",
        "Pincode": "396210",
        "City": "Daman",
        "District": "Daman",
        "State": "Daman & Diu"
      },
      {
        "PostOfficeName": "Daman",
        "Pincode": "396210",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Varkund",
        "Pincode": "396217",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Moti Daman",
        "Pincode": "396220",
        "City": "Daman",
        "District": "Daman",
        "State": "Daman & Diu"
      },
      {
        "PostOfficeName": "Moti Daman",
        "Pincode": "396220",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Magarwada",
        "Pincode": "396223",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Silvasa",
        "Pincode": "396230",
        "City": "Silvasa",
        "District": "Dadra & Nagar Haveli",
        "State": "Dadra & Nagar Haveli"
      },
      {
        "PostOfficeName": "Silvassa",
        "Pincode": "396230",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Naroli",
        "Pincode": "396235",
        "City": "Silvasa",
        "District": "Dadra & Nagar Haveli",
        "State": "Dadra & Nagar Haveli"
      },
      {
        "PostOfficeName": "Naroli",
        "Pincode": "396235",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anklas",
        "Pincode": "396236",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karad",
        "Pincode": "396240",
        "City": "Silvasa",
        "District": "Dadra & Nagar Haveli",
        "State": "Dadra & Nagar Haveli"
      },
      {
        "PostOfficeName": "Karad D G P",
        "Pincode": "396240",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amli",
        "Pincode": "396245",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Amalsad",
        "Pincode": "396310",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Bilmora",
        "Pincode": "396321",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Desra",
        "Pincode": "396321",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "R S",
        "Pincode": "396321",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Antalia",
        "Pincode": "396325",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Endhal",
        "Pincode": "396340",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gadat",
        "Pincode": "396350",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gandevi",
        "Pincode": "396360",
        "City": "Gandevi",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kachchha",
        "Pincode": "396370",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kachholi",
        "Pincode": "396370",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dungri",
        "Pincode": "396375",
        "City": "Dohad",
        "District": "Dohad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Devsar",
        "Pincode": "396380",
        "City": "Devsar",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Untdi",
        "Pincode": "396385",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Aat",
        "Pincode": "396403",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Abrama",
        "Pincode": "396406",
        "City": "Abrama",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Alipur",
        "Pincode": "396409",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Borifalia",
        "Pincode": "396412",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Dabhel",
        "Pincode": "396415",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Gurukulsupa",
        "Pincode": "396418",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Jalalpore",
        "Pincode": "396421",
        "City": "Jalalpore",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kabilpore",
        "Pincode": "396424",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navsari Ih",
        "Pincode": "396424",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kaliavadi",
        "Pincode": "396427",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Kharee",
        "Pincode": "396430",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Maroli Bazar",
        "Pincode": "396436",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Matwad",
        "Pincode": "396439",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Karadi",
        "Pincode": "396440",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Khadsupa Boarding",
        "Pincode": "396443",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Malesar Navsari",
        "Pincode": "396445",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navasari",
        "Pincode": "396445",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Navsari Junathan",
        "Pincode": "396445",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Tarota Bazar R S",
        "Pincode": "396445",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Udyognagar",
        "Pincode": "396445",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Eru Agri College",
        "Pincode": "396450",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sadadvel",
        "Pincode": "396452",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Panar",
        "Pincode": "396460",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Sisodra Navsari",
        "Pincode": "396463",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Satem",
        "Pincode": "396466",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Ugat",
        "Pincode": "396469",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vedachha",
        "Pincode": "396472",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vesma",
        "Pincode": "396475",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Anaval",
        "Pincode": "396510",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Chikhli",
        "Pincode": "396521",
        "City": "Chikhli",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Degam",
        "Pincode": "396530",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Fadvel",
        "Pincode": "396540",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Rankuva",
        "Pincode": "396560",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Digendra Nagar",
        "Pincode": "396570",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vansada",
        "Pincode": "396580",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Vansola",
        "Pincode": "396580",
        "City": "Valsad",
        "District": "Valsad",
        "State": "Gujarat"
      },
      {
        "PostOfficeName": "Unai",
        "Pincode": "396590",
        "City": "Navsari",
        "District": "Navsari",
        "State": "Gujarat"
      },
    ]
    const cities = cityObj.reduce((accu, obj) => {
      if (!accu.includes(obj.City + '/' + obj.Pincode)) {
        accu.push(obj.City + '/' + obj.Pincode)
      }
      return accu
    }, [])
    res.status(200).send(cities)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
exports.getServiceCities = async (req, res) => {
  const logisticId = req.user.id
  try {
    const result = await logisticServices.selectedCitiesFetch(logisticId)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
exports.submitServiceCities = async (req, res) => {
  try {
    const cityPincode = req.body.selectedCityService.split('/');
    const jsonRsp = {
      logistic_id: req.user.id,
      city: cityPincode[0],
      pincode: cityPincode[1]
    }
    const pincodes = await logisticServices.pincodeFetch(req.user.id);
    if (pincodes.includes(cityPincode[1])) {
      return res.status(500).send({
        status: "Internal Server Error", msg: "City is already present in your service!"
      })
    }
    const result = await logisticServices.insertServiceCity(jsonRsp)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
exports.deleteServiceCities = async (req, res) => {
  try {
    const result = await logisticServices.softDelServiceCity({ is_delete: 1 }, req.body)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}
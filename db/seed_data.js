const moment = require('moment');



const User =
  [{
    id: 1, email: 'bobo@bobo.com', password: '1234', first_name: 'Bobo', last_name: 'Kins', weight: [142, 139, 145, 174, 136]
  },
  {
    id: 2, email: 'bproudman1@w3.org', password: 'lXWkd5', first_name: 'Torbjörn', last_name: 'Proudman', weight: [143, 165, 168, 139, 168]
  },
  {
    id: 3, email: 'cbosenworth2@nytimes.com', password: 'XMMXfZxb2', first_name: 'Dorothée', last_name: 'Bosenworth', weight: [168, 142, 137, 174, 151]
  },
  {
    id: 4, email: 'mmeads3@smh.com.au', password: 'thTlXO', first_name: 'Publicité', last_name: 'Meads', weight: [177, 167, 166, 144, 172]
  },
  {
    id: 5, email: 'gjopke4@stumbleupon.com', password: '2ThYN1aGQ', first_name: 'Estée', last_name: 'Jopke', weight: [176, 173, 130, 144, 164]
  },
  {
    id: 6, email: 'asiflet5@parallels.com', password: 'mp5N0Fl', first_name: 'Pål', last_name: 'Siflet', weight: [163, 144, 178, 155, 153]
  },
  {
    id: 7, email: 'kmunks6@youku.com', password: 'ecaSIh', first_name: 'Naéva', last_name: 'Munks', weight: [139, 138, 170, 164, 163]
  },
  {
    id: 8, email: 'imatzkaitis7@cnbc.com', password: 'LaGWAH8Y3G', first_name: 'Börje', last_name: 'Matzkaitis', weight: [163, 149, 141, 163, 144]
  },
  {
    id: 9, email: 'ckyd8@nsw.gov.au', password: '5K9rLx', first_name: 'Aí', last_name: 'Kyd', weight: [159, 139, 152, 136, 152]
  },
  {
    id: 10, email: 'ghowels9@booking.com', password: 'ymGEVVorhxx', first_name: 'Loïca', last_name: 'Howels', weight: [159, 179, 179, 168, 150]
  },
  {
    id: 11, email: 'edurransa@myspace.com', password: 'gcEQwf', first_name: 'Ráo', last_name: 'Durrans', weight: [166, 171, 135, 131, 152]
  },
  {
    id: 12, email: 'bellenb@purevolume.com', password: '735nIunrJdv', first_name: 'Edmée', last_name: 'Ellen', weight: [166, 141, 165, 141, 151]
  },
  {
    id: 13, email: 'trebouletc@360.cn', password: 'FbIvlL', first_name: 'Léa', last_name: 'Reboulet', weight: [176, 159, 131, 169, 139]
  },
  {
    id: 14, email: 'ujacobowiczd@baidu.com', password: 'nDTdO2alpMt', first_name: 'Eléonore', last_name: 'Jacobowicz', weight: [153, 154, 157, 138, 143]
  },
  {
    id: 15, email: 'hwetheralde@java.com', password: 'GcsxTDv', first_name: 'Rébecca', last_name: 'Wetherald', weight: [168, 177, 166, 178, 136]
  },
  {
    id: 16, email: 'vaddicottf@altervista.org', password: 'VSkVAEv6E', first_name: 'Maëline', last_name: 'Addicott', weight: [134, 143, 134, 157, 154]
  },
  {
    id: 17, email: 'jfennyg@mlb.com', password: 'i9SyrBi', first_name: 'Loïc', last_name: 'Fenny', weight: [161, 146, 179, 133, 143]
  },
  {
    id: 18, email: 'bboutwellh@yahoo.com', password: 'LnHCiQIrfLSl', first_name: 'Célestine', last_name: 'Boutwell', weight: [168, 136, 142, 145, 142]
  },
  {
    id: 19, email: 'sgrishanovi@wisc.edu', password: '4UnK2TeDq', first_name: 'Ophélie', last_name: 'Grishanov', weight: [169, 152, 157, 146, 140]
  },
  {
    id: 20, email: 'lgreastyj@mapy.cz', password: 'NRfJBQ5I', first_name: 'Renée', last_name: 'Greasty', weight: [171, 143, 154, 168, 167]
  },
  {
    id: 21, email: 'aspenslyk@ehow.com', password: 'qW7JADpwvcU', first_name: 'Björn', last_name: 'Spensly', weight: [132, 144, 134, 165, 169]
  },
  {
    id: 22, email: 'ptyasl@infoseek.co.jp', password: 'd2E8bR38', first_name: 'Erwéi', last_name: 'Tyas', weight: [149, 157, 175, 137, 165]
  },
  {
    id: 23, email: 'bferneyhoughm@amazon.co.uk', password: 'eEvtdsv9jy', first_name: 'Eléonore', last_name: 'Ferneyhough', weight: [159, 153, 176, 131, 154]
  },
  {
    id: 24, email: 'lsheathern@cdbaby.com', password: 'dFYLwnDfqvJK', first_name: 'Loïca', last_name: 'Sheather', weight: [136, 158, 150, 172, 170]
  },
  {
    id: 25, email: 'jmummeryo@shinystat.com', password: 'Wrt7yUEek4m', first_name: 'Styrbjörn', last_name: 'Mummery', weight: [159, 130, 148, 178, 163]
  },
  {
    id: 26, email: 'brembaudp@zimbio.com', password: 's6fRDH', first_name: 'Laurélie', last_name: 'Rembaud', weight: [144, 172, 143, 161, 132]
  },
  {
    id: 27, email: 'sberkaq@gov.uk', password: 'YLhQ3iC3', first_name: 'Marie-françoise', last_name: 'Berka', weight: [154, 164, 133, 139, 144]
  },
  {
    id: 28, email: 'ssnuggr@hexun.com', password: '3v59a9lqvt', first_name: 'Mylène', last_name: 'Snugg', weight: [176, 156, 160, 143, 154]
  },
  {
    id: 29, email: 'bnoseworthys@craigslist.org', password: 'eNbR5R5SEXA', first_name: 'Anaël', last_name: 'Noseworthy', weight: [134, 148, 149, 172, 178]
  },
  {
    id: 30, email: 'rmaceyt@skyrock.com', password: 'laeYLpfM', first_name: 'Maëlys', last_name: 'Macey', weight: [173, 132, 144, 147, 144]
  },
  {
    id: 31, email: 'solinu@oracle.com', password: 'p5Wmjwzrp', first_name: 'Tán', last_name: 'Olin', weight: [138, 159, 150, 176, 134]
  },
  {
    id: 32, email: 'apaulatv@cnet.com', password: 'RFYmraM7', first_name: 'Cléa', last_name: 'Paulat', weight: [173, 151, 162, 174, 155]
  },
  {
    id: 33, email: 'hhaseldinew@ihg.com', password: 'E8kjrym5Rq', first_name: 'Marie-ève', last_name: 'Haseldine', weight: [175, 147, 162, 136, 149]
  },
  {
    id: 34, email: 'aallinx@youtube.com', password: 'ns8TrVlLJ', first_name: 'Desirée', last_name: 'Allin', weight: [130, 152, 170, 136, 160]
  },
  {
    id: 35, email: 'mteazy@prweb.com', password: 'qahYPLGcYdc', first_name: 'Béatrice', last_name: 'Teaz', weight: [149, 156, 168, 138, 172]
  },
  {
    id: 36, email: 'aburburoughz@cargocollective.com', password: 'F4Amg3m', first_name: 'Mahélie', last_name: 'Burburough', weight: [138, 152, 149, 165, 169]
  },
  {
    id: 37, email: 'draiment10@pbs.org', password: '0BOqJRAXV', first_name: 'Esbjörn', last_name: 'Raiment', weight: [130, 160, 144, 145, 142]
  },
  {
    id: 38, email: 'cbiesinger11@nasa.gov', password: 'ipBCyEDOhQ', first_name: 'Marie-noël', last_name: 'Biesinger', weight: [164, 174, 136, 177, 148]
  },
  {
    id: 39, email: 'mrosenschein12@google.com.hk', password: 'gi9Q5n6', first_name: 'Andréanne', last_name: 'Rosenschein', weight: [137, 140, 161, 136, 147]
  },
  {
    id: 40, email: 'dcatlin13@google.de', password: 'F7GfBR', first_name: 'Vénus', last_name: 'Catlin', weight: [157, 162, 151, 140, 131]
  },
  {
    id: 41, email: 'lbiaggelli14@yale.edu', password: 'AwlF9O', first_name: 'Séréna', last_name: 'Biaggelli', weight: [152, 137, 140, 156, 159]
  },
  {
    id: 42, email: 'apeople15@home.pl', password: 'Vehnrczk', first_name: 'Rébecca', last_name: 'People', weight: [167, 138, 138, 173, 146]
  },
  {
    id: 43, email: 'meddins16@opensource.org', password: '0iBlpnVsEkUn', first_name: 'Marlène', last_name: 'Eddins', weight: [152, 135, 134, 160, 133]
  },
  {
    id: 44, email: 'tlawty17@goo.ne.jp', password: 'NL3fA0GdSl', first_name: 'Måns', last_name: 'Lawty', weight: [175, 135, 144, 132, 167]
  },
  {
    id: 45, email: 'lbelderson18@seesaa.net', password: 'NusagYVvli', first_name: 'Magdalène', last_name: 'Belderson', weight: [160, 144, 158, 168, 131]
  },
  {
    id: 46, email: 'kdroghan19@constantcontact.com', password: '88mZLNq', first_name: 'Lóng', last_name: 'Droghan', weight: [157, 178, 134, 156, 178]
  },
  {
    id: 47, email: 'rmarre1a@list-manage.com', password: 'oQHiFCGH', first_name: 'Tán', last_name: 'Marre', weight: [130, 148, 147, 167, 145]
  },
  {
    id: 48, email: 'lenbury1b@diigo.com', password: 'lYRaRufglX', first_name: 'Camélia', last_name: 'Enbury', weight: [160, 157, 139, 169, 148]
  },
  {
    id: 49, email: 'jtrotman1c@cnn.com', password: 'qumKxl65', first_name: 'Annotés', last_name: 'Trotman', weight: [145, 148, 163, 155, 171]
  },
  {
    id: 50, email: 'bhymer1d@adobe.com', password: 'sROIG8fWLg', first_name: 'Mahélie', last_name: 'Hymer', weight: [135, 178, 164, 158, 158]
  }];

const Dates = [];

for (let i = 0; i < 300; i++) {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let dayOfWeek = moment().add(i, 'day').isoWeekday();
  let formattedDayOfWeek = days[dayOfWeek - 1];
  let formattedDate = moment().add(i, 'day').format('YYYY-MM-DD');
  Dates.push({ id: i + 1, day: formattedDate, dow: formattedDayOfWeek });

}

console.log(Dates);

const Goal =
  [{
    id: 1, calorie: 1953, weight: 136, carbs: 79, protein: 130, fat: 41, user_id: 1
  },
  {
    id: 2, calorie: 1421, weight: 149, carbs: 135, protein: 136, fat: 74, user_id: 2
  },
  {
    id: 3, calorie: 1258, weight: 166, carbs: 50, protein: 123, fat: 76, user_id: 3
  },
  {
    id: 4, calorie: 1469, weight: 164, carbs: 63, protein: 117, fat: 130, user_id: 4
  },
  {
    id: 5, calorie: 1211, weight: 180, carbs: 148, protein: 140, fat: 43, user_id: 5
  },
  {
    id: 6, calorie: 2372, weight: 145, carbs: 102, protein: 67, fat: 60, user_id: 6
  },
  {
    id: 7, calorie: 2623, weight: 171, carbs: 128, protein: 82, fat: 63, user_id: 7
  },
  {
    id: 8, calorie: 1806, weight: 151, carbs: 98, protein: 101, fat: 59, user_id: 8
  },
  {
    id: 9, calorie: 2934, weight: 147, carbs: 40, protein: 92, fat: 141, user_id: 9
  },
  {
    id: 10, calorie: 1622, weight: 143, carbs: 107, protein: 119, fat: 103, user_id: 10
  },
  {
    id: 11, calorie: 1981, weight: 173, carbs: 119, protein: 97, fat: 76, user_id: 11
  },
  {
    id: 12, calorie: 1541, weight: 141, carbs: 121, protein: 123, fat: 77, user_id: 12
  },
  {
    id: 13, calorie: 2803, weight: 180, carbs: 122, protein: 142, fat: 111, user_id: 13
  },
  {
    id: 14, calorie: 2968, weight: 146, carbs: 115, protein: 55, fat: 137, user_id: 14
  },
  {
    id: 15, calorie: 2724, weight: 176, carbs: 126, protein: 148, fat: 146, user_id: 15
  },
  {
    id: 16, calorie: 1317, weight: 136, carbs: 122, protein: 149, fat: 69, user_id: 16
  },
  {
    id: 17, calorie: 2345, weight: 144, carbs: 59, protein: 98, fat: 78, user_id: 17
  },
  {
    id: 18, calorie: 2035, weight: 173, carbs: 61, protein: 121, fat: 62, user_id: 18
  },
  {
    id: 19, calorie: 2178, weight: 179, carbs: 103, protein: 130, fat: 135, user_id: 19
  },
  {
    id: 20, calorie: 1784, weight: 140, carbs: 43, protein: 105, fat: 54, user_id: 20
  },
  {
    id: 21, calorie: 2759, weight: 167, carbs: 82, protein: 143, fat: 71, user_id: 21
  },
  {
    id: 22, calorie: 1269, weight: 170, carbs: 117, protein: 63, fat: 52, user_id: 22
  },
  {
    id: 23, calorie: 2169, weight: 176, carbs: 98, protein: 62, fat: 98, user_id: 23
  },
  {
    id: 24, calorie: 1340, weight: 151, carbs: 78, protein: 136, fat: 119, user_id: 24
  },
  {
    id: 25, calorie: 1313, weight: 166, carbs: 42, protein: 52, fat: 108, user_id: 25
  },
  {
    id: 26, calorie: 2189, weight: 133, carbs: 96, protein: 82, fat: 135, user_id: 26
  },
  {
    id: 27, calorie: 2397, weight: 175, carbs: 112, protein: 83, fat: 118, user_id: 27
  },
  {
    id: 28, calorie: 1573, weight: 157, carbs: 108, protein: 77, fat: 71, user_id: 28
  },
  {
    id: 29, calorie: 1655, weight: 160, carbs: 136, protein: 101, fat: 84, user_id: 29
  },
  {
    id: 30, calorie: 2354, weight: 132, carbs: 42, protein: 137, fat: 56, user_id: 30
  },
  {
    id: 31, calorie: 2041, weight: 137, carbs: 57, protein: 72, fat: 56, user_id: 31
  },
  {
    id: 32, calorie: 2323, weight: 174, carbs: 48, protein: 117, fat: 97, user_id: 32
  },
  {
    id: 33, calorie: 1830, weight: 147, carbs: 146, protein: 68, fat: 115, user_id: 33
  },
  {
    id: 34, calorie: 1468, weight: 179, carbs: 90, protein: 135, fat: 99, user_id: 34
  },
  {
    id: 35, calorie: 2153, weight: 141, carbs: 71, protein: 121, fat: 58, user_id: 35
  },
  {
    id: 36, calorie: 2824, weight: 141, carbs: 140, protein: 71, fat: 113, user_id: 36
  },
  {
    id: 37, calorie: 2543, weight: 174, carbs: 119, protein: 138, fat: 88, user_id: 37
  },
  {
    id: 38, calorie: 2277, weight: 176, carbs: 60, protein: 113, fat: 52, user_id: 38
  },
  {
    id: 39, calorie: 2373, weight: 131, carbs: 150, protein: 73, fat: 117, user_id: 39
  },
  {
    id: 40, calorie: 2067, weight: 132, carbs: 149, protein: 135, fat: 80, user_id: 40
  },
  {
    id: 41, calorie: 1801, weight: 176, carbs: 122, protein: 131, fat: 119, user_id: 41
  },
  {
    id: 42, calorie: 2794, weight: 131, carbs: 57, protein: 47, fat: 85, user_id: 42
  },
  {
    id: 43, calorie: 2852, weight: 157, carbs: 88, protein: 127, fat: 53, user_id: 43
  },
  {
    id: 44, calorie: 2269, weight: 155, carbs: 72, protein: 46, fat: 47, user_id: 44
  },
  {
    id: 45, calorie: 2872, weight: 133, carbs: 131, protein: 121, fat: 57, user_id: 45
  },
  {
    id: 46, calorie: 2283, weight: 161, carbs: 147, protein: 115, fat: 147, user_id: 46
  },
  {
    id: 47, calorie: 2601, weight: 150, carbs: 64, protein: 124, fat: 71, user_id: 47
  },
  {
    id: 48, calorie: 2591, weight: 173, carbs: 143, protein: 113, fat: 140, user_id: 48
  },
  {
    id: 49, calorie: 1928, weight: 178, carbs: 65, protein: 52, fat: 121, user_id: 49
  },
  {
    id: 50, calorie: 1957, weight: 178, carbs: 74, protein: 106, fat: 103, user_id: 50
  }];

const Food = [{
  id: 1, name: 'Galah', calories: 265, carbs: 74, protein: 60, fat: 138, user_id: 1
},
{
  id: 2, name: 'Jaeger, long-tailed', calories: 568, carbs: 42, protein: 146, fat: 142, user_id: 1
},
{
  id: 3, name: 'Fringe-eared oryx', calories: 235, carbs: 69, protein: 124, fat: 140, user_id: 1
},
{
  id: 4, name: 'Sea birds', calories: 318, carbs: 111, protein: 42, fat: 108, user_id: 1
},
{
  id: 5, name: 'Red-necked phalarope', calories: 276, carbs: 80, protein: 96, fat: 63, user_id: 1
},
{
  id: 6, name: 'Blackish oystercatcher', calories: 201, carbs: 112, protein: 124, fat: 54, user_id: 1
},
{
  id: 7, name: 'Gull, kelp', calories: 345, carbs: 52, protein: 132, fat: 147, user_id: 1
},
{
  id: 8, name: 'Squirrel, palm', calories: 264, carbs: 119, protein: 52, fat: 80, user_id: 1
},
{
  id: 9, name: 'Squirrel, uinta ground', calories: 205, carbs: 72, protein: 70, fat: 110, user_id: 1
},
{
  id: 10, name: 'Otter, canadian river', calories: 228, carbs: 51, protein: 116, fat: 50, user_id: 1
},
{
  id: 11, name: 'Horned puffin', calories: 581, carbs: 121, protein: 99, fat: 133, user_id: 1
},
{
  id: 12, name: 'Thirteen-lined squirrel', calories: 517, carbs: 148, protein: 141, fat: 87, user_id: 1
},
{
  id: 13, name: 'Black-tailed deer', calories: 553, carbs: 64, protein: 92, fat: 51, user_id: 1
},
{
  id: 14, name: 'Devil, tasmanian', calories: 559, carbs: 123, protein: 78, fat: 109, user_id: 14
},
{
  id: 15, name: 'Lizard, desert spiny', calories: 262, carbs: 108, protein: 96, fat: 112, user_id: 15
},
{
  id: 16, name: 'Greater adjutant stork', calories: 173, carbs: 78, protein: 129, fat: 115, user_id: 16
},
{
  id: 17, name: 'Swallow-tail gull', calories: 372, carbs: 67, protein: 139, fat: 53, user_id: 17
},
{
  id: 18, name: 'Flamingo, lesser', calories: 577, carbs: 73, protein: 104, fat: 125, user_id: 18
},
{
  id: 19, name: 'Australian brush turkey', calories: 445, carbs: 101, protein: 60, fat: 145, user_id: 19
},
{
  id: 20, name: 'Badger, european', calories: 219, carbs: 143, protein: 43, fat: 145, user_id: 20
},
{
  id: 21, name: 'Southern right whale', calories: 391, carbs: 109, protein: 148, fat: 57, user_id: 21
},
{
  id: 22, name: 'Emerald green tree boa', calories: 397, carbs: 147, protein: 126, fat: 100, user_id: 22
},
{
  id: 23, name: 'Mandras tree shrew', calories: 266, carbs: 53, protein: 143, fat: 79, user_id: 23
},
{
  id: 24, name: 'Puna ibis', calories: 236, carbs: 70, protein: 57, fat: 108, user_id: 24
},
{
  id: 25, name: 'Cat, cape wild', calories: 263, carbs: 76, protein: 68, fat: 121, user_id: 25
},
{
  id: 26, name: 'Bleu, blue-breasted cordon', calories: 265, carbs: 64, protein: 97, fat: 102, user_id: 26
},
{
  id: 27, name: 'Tortoise, burmese brown mountain', calories: 373, carbs: 56, protein: 119, fat: 61, user_id: 27
},
{
  id: 28, name: 'Macaque, japanese', calories: 474, carbs: 105, protein: 79, fat: 136, user_id: 28
},
{
  id: 29, name: 'Chilean flamingo', calories: 172, carbs: 67, protein: 109, fat: 109, user_id: 29
},
{
  id: 30, name: 'Goose, egyptian', calories: 454, carbs: 82, protein: 71, fat: 67, user_id: 30
},
{
  id: 31, name: 'Rhea, gray', calories: 354, carbs: 88, protein: 123, fat: 139, user_id: 31
},
{
  id: 32, name: 'Wallaby, river', calories: 326, carbs: 128, protein: 72, fat: 61, user_id: 32
},
{
  id: 33, name: 'Crane, sandhill', calories: 451, carbs: 92, protein: 95, fat: 92, user_id: 33
},
{
  id: 34, name: 'Prairie falcon', calories: 222, carbs: 71, protein: 66, fat: 135, user_id: 34
},
{
  id: 35, name: 'Giant armadillo', calories: 249, carbs: 75, protein: 44, fat: 100, user_id: 35
},
{
  id: 36, name: 'Galapagos sea lion', calories: 343, carbs: 42, protein: 100, fat: 41, user_id: 36
},
{
  id: 37, name: 'Scarlet macaw', calories: 276, carbs: 128, protein: 104, fat: 100, user_id: 37
},
{
  id: 38, name: 'Otter, north american river', calories: 196, carbs: 147, protein: 141, fat: 96, user_id: 38
},
{
  id: 39, name: 'Chimpanzee', calories: 229, carbs: 94, protein: 103, fat: 149, user_id: 39
},
{
  id: 40, name: 'Common wolf', calories: 207, carbs: 96, protein: 63, fat: 136, user_id: 40
},
{
  id: 41, name: 'Western spotted skunk', calories: 320, carbs: 144, protein: 119, fat: 94, user_id: 41
},
{
  id: 42, name: "Gambel's quail", calories: 312, carbs: 77, protein: 74, fat: 61, user_id: 42
},
{
  id: 43, name: 'Red-breasted cockatoo', calories: 214, carbs: 139, protein: 98, fat: 140, user_id: 43
},
{
  id: 44, name: 'Egyptian viper', calories: 450, carbs: 140, protein: 139, fat: 121, user_id: 44
},
{
  id: 45, name: 'Nelson ground squirrel', calories: 184, carbs: 102, protein: 67, fat: 78, user_id: 45
},
{
  id: 46, name: 'Australian masked owl', calories: 196, carbs: 64, protein: 128, fat: 107, user_id: 46
},
{
  id: 47, name: 'Heron, black-crowned night', calories: 293, carbs: 48, protein: 75, fat: 65, user_id: 47
},
{
  id: 48, name: 'Seven-banded armadillo', calories: 281, carbs: 88, protein: 93, fat: 74, user_id: 48
},
{
  id: 49, name: 'Hawk, red-tailed', calories: 219, carbs: 123, protein: 108, fat: 96, user_id: 49
},
{
  id: 50, name: 'Horned lark', calories: 235, carbs: 111, protein: 139, fat: 88, user_id: 50
}];

module.exports = {
  User, Dates, Food, Goal
};


const moment = require('moment');

const User =
  [{
    email: 'bobo@bobo.com', password: '1234', first_name: 'Bobo', last_name: 'Kins', weight: [151, 153, 175, 173, 151]
  },
  {
    email: 'medie1@ebay.co.uk', password: 'QPUJAR1OwQ2i', first_name: 'Marlo', last_name: 'Edie', weight: [159, 162, 164, 158, 174]
  },
  {
    email: 'psimony2@rambler.ru', password: 'Qped6xY', first_name: 'Perla', last_name: 'Simony', weight: [169, 179, 162, 169, 156]
  },
  {
    email: 'cforrestor3@foxnews.com', password: '1NouRgEFKi8', first_name: 'Catlaina', last_name: 'Forrestor', weight: [177, 166, 171, 180, 162]
  },
  {
    email: 'jfifoot4@arizona.edu', password: 'zm6Fhj4', first_name: 'Joana', last_name: 'Fifoot', weight: [170, 167, 150, 165, 154]
  },
  {
    email: 'csandle5@zdnet.com', password: 'UWGcjEU8r', first_name: 'Coleen', last_name: 'Sandle', weight: [155, 151, 163, 171, 167]
  },
  {
    email: 'dtreker6@washingtonpost.com', password: 'xyPY3xJKj', first_name: 'Dianemarie', last_name: 'Treker', weight: [173, 172, 154, 168, 173]
  },
  {
    email: 'bbrakewell7@com.com', password: 'I1vCMIgUfcv', first_name: 'Bessie', last_name: 'Brakewell', weight: [169, 166, 168, 173, 152]
  },
  {
    email: 'mvoff8@nps.gov', password: 'CsBUxSQ8', first_name: 'Milt', last_name: 'Voff', weight: [159, 161, 164, 162, 162]
  },
  {
    email: 'mhickinbottom9@columbia.edu', password: 'GsYLUtGBUKT', first_name: 'Madlin', last_name: 'Hickinbottom', weight: [171, 174, 157, 178, 167]
  },
  {
    email: 'vfurneauxa@ovh.net', password: 'Zga5fQZY88', first_name: 'Vale', last_name: 'Furneaux', weight: [173, 165, 150, 168, 151]
  },
  {
    email: 'einsullb@slideshare.net', password: 'YlKHRPlcQ8KG', first_name: 'Evita', last_name: 'Insull', weight: [154, 154, 159, 158, 159]
  },
  {
    email: 'trichingsc@vimeo.com', password: 'WfmF6BTJK', first_name: 'Thia', last_name: 'Richings', weight: [175, 179, 175, 167, 174]
  },
  {
    email: 'hgetleyd@chronoengine.com', password: 'VFLf1M00Big', first_name: 'Harvey', last_name: 'Getley', weight: [170, 154, 162, 166, 152]
  },
  {
    email: 'srobertshawe@acquirethisname.com', password: '2z8q141', first_name: 'Stanly', last_name: 'Robertshaw', weight: [180, 162, 152, 164, 162]
  },
  {
    email: 'cabberleyf@buzzfeed.com', password: 'eqAO0IbEyu', first_name: 'Corina', last_name: 'Abberley', weight: [175, 180, 151, 156, 178]
  },
  {
    email: 'vrowng@washingtonpost.com', password: 'jl50apIa', first_name: 'Vernen', last_name: 'Rown', weight: [170, 170, 169, 151, 160]
  },
  {
    email: 'sepeletth@guardian.co.uk', password: 'LJdyC7d0u', first_name: 'Sayer', last_name: 'Epelett', weight: [150, 165, 153, 164, 153]
  },
  {
    email: 'ngouti@php.net', password: 'z15T8EJN', first_name: 'Neilla', last_name: 'Gout', weight: [175, 158, 166, 151, 167]
  },
  {
    email: 'aasliej@auda.org.au', password: 'YMfpDuGLG1', first_name: 'Amalie', last_name: 'Aslie', weight: [169, 179, 156, 151, 178]
  },
  {
    email: 'riacobettok@sitemeter.com', password: '9KrrHj', first_name: 'Randall', last_name: 'Iacobetto', weight: [179, 173, 152, 160, 152]
  },
  {
    email: 'cmaberl@msn.com', password: 'pK77blaBGeN', first_name: 'Cammy', last_name: 'Maber', weight: [166, 175, 155, 154, 168]
  },
  {
    email: 'etointonm@issuu.com', password: 'CDdx2gmDJ', first_name: 'Ermengarde', last_name: 'Tointon', weight: [152, 152, 168, 156, 158]
  },
  {
    email: 'hhandlingn@rambler.ru', password: 'vY3zYNPT', first_name: 'Hakeem', last_name: 'Handling', weight: [171, 164, 155, 161, 159]
  },
  {
    email: 'atrimbleo@bloglines.com', password: 'TYXvQjh', first_name: 'Archibold', last_name: 'Trimble', weight: [154, 163, 166, 169, 160]
  },
  {
    email: 'pjoreaup@dropbox.com', password: 'VdSl1L0a70', first_name: 'Philipa', last_name: 'Joreau', weight: [150, 152, 179, 151, 151]
  },
  {
    email: 'glambournq@etsy.com', password: 'kllbegERVlt', first_name: 'Gabey', last_name: 'Lambourn', weight: [179, 156, 156, 161, 161]
  },
  {
    email: 'gsimmankr@nifty.com', password: 'e5OD2AJdE', first_name: 'Gwenore', last_name: 'Simmank', weight: [163, 152, 155, 167, 177]
  },
  {
    email: 'ddunaways@rediff.com', password: 'EtWq3d6mox', first_name: 'Daryn', last_name: 'Dunaway', weight: [162, 168, 177, 167, 155]
  },
  {
    email: 'brentoult@is.gd', password: '0AhVjWQjeH', first_name: 'Braden', last_name: 'Rentoul', weight: [179, 180, 169, 163, 171]
  },
  {
    email: 'dhazeldeneu@seesaa.net', password: 'TFSB3NiGb', first_name: 'Dame', last_name: 'Hazeldene', weight: [177, 163, 168, 153, 175]
  },
  {
    email: 'ecamackev@hatena.ne.jp', password: 'cTkhFiGtbg', first_name: 'Elbertina', last_name: 'Camacke', weight: [155, 165, 156, 177, 154]
  },
  {
    email: 'ewilgarw@bing.com', password: 'rJafAWNVx3', first_name: 'Eba', last_name: 'Wilgar', weight: [175, 173, 164, 160, 151]
  },
  {
    email: 'bteodorix@angelfire.com', password: 'VxMpU8', first_name: 'Bamby', last_name: 'Teodori', weight: [158, 152, 165, 156, 177]
  },
  {
    email: 'nfattoriniy@cnet.com', password: 'DZD3NIme2324', first_name: 'Ninette', last_name: 'Fattorini', weight: [178, 163, 180, 170, 161]
  },
  {
    email: 'timmz@cocolog-nifty.com', password: 'xRssKVv4p', first_name: 'Tammy', last_name: 'Imm', weight: [156, 152, 177, 166, 167]
  },
  {
    email: 'kpiscopiello10@istockphoto.com', password: 'ZIpRKPjn', first_name: 'Kinny', last_name: 'Piscopiello', weight: [161, 161, 156, 167, 152]
  },
  {
    email: 'tcurrao11@tumblr.com', password: 'VFUa1O0R', first_name: 'Trudey', last_name: 'Currao', weight: [168, 171, 164, 175, 160]
  },
  {
    email: 'cklulik12@multiply.com', password: 'nejh13ueK', first_name: 'Carlin', last_name: 'Klulik', weight: [171, 178, 157, 165, 151]
  },
  {
    email: 'bburgher13@issuu.com', password: 'pGM6gPLya', first_name: 'Beaufort', last_name: 'Burgher', weight: [154, 168, 150, 164, 156]
  },
  {
    email: 'ujuorio14@t-online.de', password: 'IhpUZ31', first_name: 'Ursola', last_name: 'Juorio', weight: [179, 168, 164, 178, 160]
  },
  {
    email: 'hjirousek15@blogger.com', password: '2uya1dWubc', first_name: 'Haroun', last_name: 'Jirousek', weight: [179, 180, 160, 152, 151]
  },
  {
    email: 'kphiller16@myspace.com', password: 'YtfViQZH', first_name: 'Kerrill', last_name: 'Philler', weight: [153, 151, 156, 167, 151]
  },
  {
    email: 'aadamolli17@barnesandnoble.com', password: 'VtiksnVMvqe', first_name: 'Amargo', last_name: 'Adamolli', weight: [178, 173, 177, 155, 172]
  },
  {
    email: 'mcollimore18@google.com.hk', password: 'Vz3vn66ubp', first_name: 'Magdalen', last_name: 'Collimore', weight: [152, 158, 152, 162, 174]
  },
  {
    email: 'ihamlington19@deviantart.com', password: 'ihPxV4jPLi', first_name: 'Ivett', last_name: 'Hamlington', weight: [157, 165, 168, 156, 170]
  },
  {
    email: 'lcloney1a@scribd.com', password: 'bU9wyYVk', first_name: 'Luciano', last_name: 'Cloney', weight: [180, 159, 174, 176, 156]
  },
  {
    email: 'mpondjones1b@deliciousdays.com', password: 'wER5TsH', first_name: 'Mollee', last_name: 'Pond-Jones', weight: [150, 168, 156, 160, 164]
  },
  {
    email: 'mmattheus1c@nyu.edu', password: 'i8oPeiL1', first_name: 'Millisent', last_name: 'Mattheus', weight: [161, 178, 157, 180, 152]
  },
  {
    email: 'gcleminson1d@mlb.com', password: 'LK2C54a9Eux', first_name: 'Ginelle', last_name: 'Cleminson', weight: [167, 161, 167, 158, 159]
  }];

const Dates = [];

for (let i = 0; i < 1000; i += 1) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayOfWeek = moment('2018-01-01', 'YYYY-MM-DD').add(i, 'day').isoWeekday();
  const formattedDayOfWeek = days[dayOfWeek - 1];
  const formattedDate = moment('2018-01-01', 'YYYY-MM-DD').add(i, 'day').format('YYYY-MM-DD');
  Dates.push({ id: i + 1, day: formattedDate, dow: formattedDayOfWeek });
}

const Goal =
  [{
    calorie: 1555, weight: 144, carbs: 92, protein: 131, fat: 60, user_id: 1
  },
  {
    calorie: 2950, weight: 155, carbs: 118, protein: 109, fat: 43, user_id: 2
  },
  {
    calorie: 1238, weight: 138, carbs: 93, protein: 122, fat: 141, user_id: 3
  },
  {
    calorie: 2799, weight: 180, carbs: 69, protein: 81, fat: 64, user_id: 4
  },
  {
    calorie: 1587, weight: 157, carbs: 60, protein: 132, fat: 43, user_id: 5
  },
  {
    calorie: 1512, weight: 178, carbs: 122, protein: 83, fat: 76, user_id: 6
  },
  {
    calorie: 2540, weight: 170, carbs: 46, protein: 117, fat: 47, user_id: 7
  },
  {
    calorie: 2139, weight: 161, carbs: 85, protein: 115, fat: 131, user_id: 8
  },
  {
    calorie: 2897, weight: 174, carbs: 126, protein: 93, fat: 69, user_id: 9
  },
  {
    calorie: 2593, weight: 145, carbs: 140, protein: 99, fat: 110, user_id: 10
  },
  {
    calorie: 2700, weight: 168, carbs: 80, protein: 90, fat: 101, user_id: 11
  },
  {
    calorie: 1255, weight: 146, carbs: 134, protein: 99, fat: 112, user_id: 12
  },
  {
    calorie: 1604, weight: 162, carbs: 69, protein: 75, fat: 46, user_id: 13
  },
  {
    calorie: 2220, weight: 164, carbs: 54, protein: 122, fat: 117, user_id: 14
  },
  {
    calorie: 1346, weight: 171, carbs: 101, protein: 111, fat: 129, user_id: 15
  },
  {
    calorie: 2451, weight: 136, carbs: 81, protein: 71, fat: 148, user_id: 16
  },
  {
    calorie: 1462, weight: 162, carbs: 80, protein: 75, fat: 43, user_id: 17
  },
  {
    calorie: 2009, weight: 134, carbs: 133, protein: 132, fat: 108, user_id: 18
  },
  {
    calorie: 2133, weight: 171, carbs: 140, protein: 94, fat: 80, user_id: 19
  },
  {
    calorie: 2420, weight: 167, carbs: 56, protein: 100, fat: 48, user_id: 20
  },
  {
    calorie: 1715, weight: 169, carbs: 78, protein: 108, fat: 42, user_id: 21
  },
  {
    calorie: 1968, weight: 146, carbs: 142, protein: 53, fat: 89, user_id: 22
  },
  {
    calorie: 2477, weight: 137, carbs: 111, protein: 87, fat: 56, user_id: 23
  },
  {
    calorie: 1721, weight: 137, carbs: 79, protein: 136, fat: 69, user_id: 24
  },
  {
    calorie: 1427, weight: 146, carbs: 53, protein: 132, fat: 122, user_id: 25
  },
  {
    calorie: 2391, weight: 133, carbs: 53, protein: 143, fat: 90, user_id: 26
  },
  {
    calorie: 2635, weight: 169, carbs: 122, protein: 90, fat: 52, user_id: 27
  },
  {
    calorie: 2277, weight: 158, carbs: 46, protein: 98, fat: 60, user_id: 28
  },
  {
    calorie: 2095, weight: 176, carbs: 80, protein: 50, fat: 51, user_id: 29
  },
  {
    calorie: 2506, weight: 151, carbs: 71, protein: 64, fat: 124, user_id: 30
  },
  {
    calorie: 1652, weight: 180, carbs: 68, protein: 61, fat: 124, user_id: 31
  },
  {
    calorie: 2526, weight: 173, carbs: 47, protein: 94, fat: 101, user_id: 32
  },
  {
    calorie: 1295, weight: 152, carbs: 142, protein: 139, fat: 106, user_id: 33
  },
  {
    calorie: 2303, weight: 178, carbs: 110, protein: 90, fat: 71, user_id: 34
  },
  {
    calorie: 2816, weight: 155, carbs: 84, protein: 61, fat: 138, user_id: 35
  },
  {
    calorie: 1580, weight: 137, carbs: 96, protein: 51, fat: 51, user_id: 36
  },
  {
    calorie: 2081, weight: 152, carbs: 147, protein: 85, fat: 104, user_id: 37
  },
  {
    calorie: 2876, weight: 145, carbs: 123, protein: 82, fat: 108, user_id: 38
  },
  {
    calorie: 1690, weight: 137, carbs: 121, protein: 47, fat: 91, user_id: 39
  },
  {
    calorie: 2704, weight: 157, carbs: 64, protein: 124, fat: 133, user_id: 40
  },
  {
    calorie: 1303, weight: 176, carbs: 64, protein: 94, fat: 43, user_id: 41
  },
  {
    calorie: 1759, weight: 156, carbs: 106, protein: 73, fat: 136, user_id: 42
  },
  {
    calorie: 2891, weight: 154, carbs: 135, protein: 46, fat: 122, user_id: 43
  },
  {
    calorie: 1805, weight: 152, carbs: 58, protein: 143, fat: 88, user_id: 44
  },
  {
    calorie: 1300, weight: 161, carbs: 143, protein: 121, fat: 115, user_id: 45
  },
  {
    calorie: 1725, weight: 161, carbs: 48, protein: 145, fat: 67, user_id: 46
  },
  {
    calorie: 2155, weight: 131, carbs: 110, protein: 123, fat: 139, user_id: 47
  },
  {
    calorie: 1401, weight: 174, carbs: 62, protein: 97, fat: 134, user_id: 48
  },
  {
    calorie: 2159, weight: 170, carbs: 55, protein: 79, fat: 65, user_id: 49
  },
  {
    calorie: 2346, weight: 133, carbs: 82, protein: 67, fat: 74, user_id: 50
  }];

const Food = [{
  name: 'Sloth, two-toed', calories: 520, carbs: 73, protein: 108, fat: 137, user_id: 1
},
{
  name: 'Black kite', calories: 325, carbs: 45, protein: 127, fat: 147, user_id: 1
},
{
  name: 'White-mantled colobus', calories: 251, carbs: 141, protein: 115, fat: 107, user_id: 3
},
{
  name: 'Squirrel, eastern fox', calories: 395, carbs: 61, protein: 100, fat: 93, user_id: 4
},
{
  name: 'Whale, southern right', calories: 280, carbs: 68, protein: 133, fat: 100, user_id: 2
},
{
  name: 'Peccary, white-lipped', calories: 350, carbs: 62, protein: 145, fat: 107, user_id: 4
},
{
  name: 'Red-breasted cockatoo', calories: 269, carbs: 83, protein: 50, fat: 92, user_id: 4
},
{
  name: 'Vulture, black', calories: 578, carbs: 53, protein: 129, fat: 143, user_id: 4
},
{
  name: 'Blackish oystercatcher', calories: 556, carbs: 52, protein: 124, fat: 127, user_id: 4
},
{
  name: 'Loris, slender', calories: 559, carbs: 107, protein: 103, fat: 76, user_id: 3
},
{
  name: 'Siskin, pine', calories: 291, carbs: 119, protein: 93, fat: 94, user_id: 2
},
{
  name: 'Spotted deer', calories: 245, carbs: 107, protein: 60, fat: 74, user_id: 1
},
{
  name: 'Monkey, black spider', calories: 369, carbs: 114, protein: 133, fat: 54, user_id: 2
},
{
  name: 'Red hartebeest', calories: 212, carbs: 63, protein: 133, fat: 75, user_id: 1
},
{
  name: 'Magpie, black-backed', calories: 345, carbs: 87, protein: 97, fat: 53, user_id: 3
},
{
  name: 'Brown antechinus', calories: 174, carbs: 55, protein: 82, fat: 71, user_id: 1
},
{
  name: 'Quoll, eastern', calories: 271, carbs: 147, protein: 146, fat: 96, user_id: 2
},
{
  name: 'Colobus, magistrate black', calories: 207, carbs: 45, protein: 92, fat: 141, user_id: 4
},
{
  name: 'Sloth, two-toed tree', calories: 273, carbs: 125, protein: 124, fat: 140, user_id: 3
},
{
  name: 'Bee-eater (unidentified)', calories: 260, carbs: 128, protein: 63, fat: 68, user_id: 3
},
{
  name: 'Gaur', calories: 286, carbs: 150, protein: 109, fat: 69, user_id: 2
},
{
  name: 'Bohor reedbuck', calories: 420, carbs: 83, protein: 71, fat: 142, user_id: 3
},
{
  name: 'Common turkey', 'calories': 279, carbs: 130, protein: 84, fat: 66, user_id: 1
},
{
  name: 'Civet cat', calories: 316, carbs: 138, protein: 79, fat: 135, user_id: 4
},
{
  name: 'Monkey, red howler', calories: 268, carbs: 130, protein: 72, fat: 81, user_id: 2
},
{
  name: 'Flycatcher, tyrant', calories: 185, carbs: 107, protein: 41, fat: 65, user_id: 3
},
{
  name: 'Mouflon', calories: 286, carbs: 95, protein: 120, fat: 80, user_id: 1
},
{
  name: 'Chuckwalla', calories: 251, carbs: 84, protein: 99, fat: 99, user_id: 4
},
{
  name: 'Dark-winged trumpeter', calories: 521, carbs: 148, protein: 51, fat: 122, user_id: 2
},
{
  name: 'Indian peacock', calories: 209, carbs: 106, protein: 133, fat: 82, user_id: 1
},
{
  name: 'Puku', calories: 233, carbs: 63, protein: 120, fat: 107, user_id: 3
},
{
  name: 'Bahama pintail', calories: 213, carbs: 99, protein: 146, fat: 134, user_id: 2
},
{
  name: "Hartebeest, coke's", calories: 585, carbs: 76, protein: 43, fat: 128, user_id: 3
},
{
  name: 'Least chipmunk', calories: 462, carbs: 145, protein: 53, fat: 82, user_id: 3
},
{
  name: 'Bent-toed gecko', calories: 448, carbs: 64, protein: 135, fat: 122, user_id: 1
},
{
  name: "Kirk's dik dik", calories: 235, carbs: 114, protein: 120, fat: 97, user_id: 1
},
{
  name: 'Deer, savannah', calories: 258, carbs: 143, protein: 91, fat: 114, user_id: 3
},
{
  name: 'Macaque, bonnet', calories: 195, carbs: 131, protein: 131, fat: 106, user_id: 4
},
{
  name: 'Royal tern', calories: 297, carbs: 143, protein: 134, fat: 95, user_id: 2
},
{
  name: 'Western grey kangaroo', calories: 348, carbs: 126, protein: 43, fat: 144, user_id: 4
},
{
  name: 'Kiskadee, great', calories: 208, carbs: 82, protein: 110, fat: 142, user_id: 4
},
{
  name: 'Red-tailed wambenger', calories: 488, carbs: 123, protein: 147, fat: 93, user_id: 3
},
{
  name: 'Sugar glider', calories: 344, carbs: 46, protein: 113, fat: 118, user_id: 1
},
{
  name: 'Coatimundi, ring-tailed', calories: 359, carbs: 107, protein: 92, fat: 74, user_id: 2
},
{
  name: 'Sun gazer', calories: 437, carbs: 150, protein: 130, fat: 101, user_id: 2
},
{
  name: 'Lion, galapagos sea', calories: 483, carbs: 77, protein: 94, fat: 81, user_id: 4
},
{
  name: 'Defassa waterbuck', calories: 200, carbs: 130, protein: 69, fat: 92, user_id: 2
},
{
  name: 'Dove, white-winged', calories: 540, carbs: 94, protein: 44, fat: 98, user_id: 3
},
{
  name: 'Owl, snowy', calories: 523, carbs: 102, protein: 148, fat: 64, user_id: 1
},
{
  name: 'Partridge, coqui', calories: 536, carbs: 48, protein: 41, fat: 58, user_id: 4
}];

module.exports = {
  User, Dates, Food, Goal
};


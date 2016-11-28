// THIS JS FILE MANAGES STUDENTS FOR THE GAME,
// who are randomly "volunteered for tribute" to battle

/* STUDENT OBJECT TEMPLATE

var  = {
  volunteeredForTribute:false,
  firstName:"",
  lastName:"",
  classNumber:"UXDi 11",
  firstAttack:"",
  firstDamage:2,
  secondAttack:"",
  secondDamage:5,
  thirdAttack:"",
  thirdDamage:7,
  photoPath:"img/student_photos/.jpg",
  linkedIn:""
}

*/

// LIST OF STUDENT OBJECTS

var abbaslouSaba = {
  volunteeredForTribute:false,
  firstName:"Saba",
  lastName:"Abbaslou",
  classNumber:"FEWD 25",
  firstAttack:"Coding Slash",
  firstDamage:2,
  secondAttack:"Shredding Code",
  secondDamage:5,
  thirdAttack:"Debuggery",
  thirdDamage:7,
  photoPath:"img/student_photos/abbaslou_saba.jpg",
  linkedIn:"https://au.linkedin.com/in/saba-abbaslou-1435bb41"
}

var abignanoBiagio = {
  volunteeredForTribute:false,
  firstName:"Biagio",
  lastName:"Abignano",
  classNumber:"GA Staff",
  firstAttack:"Maccas Dinner Run",
  firstDamage:2,
  secondAttack:"Milestone Mania",
  secondDamage:5,
  thirdAttack:"Indentation Insistancy",
  thirdDamage:7,
  photoPath:"img/student_photos/abignano_biagio.jpg",
  linkedIn:"https://au.linkedin.com/in/babignano"
}

var abrogarMaxine = {
  volunteeredForTribute:false,
  firstName:"Maxine",
  lastName:"Abrogar",
  classNumber:"UXDi 11",
  firstAttack:"MAXIMMMMS",
  firstDamage:2,
  secondAttack:"Nice!",
  secondDamage:5,
  thirdAttack:"'Storming'",
  thirdDamage:7,
  photoPath:"img/student_photos/abrogar_maxine.jpg",
  linkedIn:"https://au.linkedin.com/in/maxineabrogar"
}

var agdaAly = {
  volunteeredForTribute:false,
  firstName:"Aly",
  lastName:"Agda",
  classNumber:"UXDi 11",
  firstAttack:"Disgust",
  firstDamage:2,
  secondAttack:"Disdain",
  secondDamage:5,
  thirdAttack:"Pun Pains",
  thirdDamage:7,
  photoPath:"img/student_photos/agda_aly.jpg",
  linkedIn:"https://au.linkedin.com/in/alyagda"
}

var algateTristan = {
  volunteeredForTribute:false,
  firstName:"Tristan",
  lastName:"Algate",
  classNumber:"UXDi 11",
  firstAttack:"Illustratrious Teaching",
  firstDamage:2,
  secondAttack:"Fantasy Insight",
  secondDamage:5,
  thirdAttack:"READY TO ROCK!!",
  thirdDamage:7,
  photoPath:"img/student_photos/algate_tristan.jpg",
  linkedIn:"https://au.linkedin.com/in/tristan-algate"
}

var aljawadShennah = {
  volunteeredForTribute:false,
  firstName:"Shennah",
  lastName:"Al-Jawad",
  classNumber:"UXDi 10",
  firstAttack:"Phone Renewal",
  firstDamage:2,
  secondAttack:"Karaoke Dark Horse",
  secondDamage:5,
  thirdAttack:"Immersive Double Down",
  thirdDamage:7,
  photoPath:"img/student_photos/aljawad_shennah.jpg",
  linkedIn:"https://au.linkedin.com/in/shennah"
}

var archerRohanna = {
  volunteeredForTribute:false,
  firstName:"Rohanna",
  lastName:"Archer",
  classNumber:"FEWD 25",
  firstAttack:"CSS Awesomeness",
  firstDamage:2,
  secondAttack:"HTML Amazingness",
  secondDamage:5,
  thirdAttack:"Responsive Divinity",
  thirdDamage:7,
  photoPath:"img/student_photos/archer_rohanna.jpg",
  linkedIn:"https://au.linkedin.com/in/rohana-archer-308119105"
}

var blevinsSunnyGrace = {
  volunteeredForTribute:false,
  firstName:"Sunny",
  lastName:"Grace Blevins",
  classNumber:"FEWD 25",
  firstAttack:"2 McNuggets",
  firstDamage:2,
  secondAttack:"5 McNuggets",
  secondDamage:5,
  thirdAttack:"7 McNuggets",
  thirdDamage:7,
  photoPath:"img/student_photos/blevins_sunnygrace.jpg",
  linkedIn:""
}

var boehringerCobain = {
  volunteeredForTribute:false,
  firstName:"Cobain",
  lastName:"Boehringer",
  classNumber:"FEWD 25",
  firstAttack:"Leaf Attack",
  firstDamage:2,
  secondAttack:"Tree Trunk",
  secondDamage:5,
  thirdAttack:"Body Slam",
  thirdDamage:7,
  photoPath:"img/student_photos/boehringer_cobain.jpg",
  linkedIn:"https://au.linkedin.com/in/cobain-boehringer-2a831926"
}

var burnessAlli = {
  volunteeredForTribute:false,
  firstName:"Alli",
  lastName:"Burness",
  classNumber:"UXDi 11",
  firstAttack:"Conpelling Content",
  firstDamage:2,
  secondAttack:"Museum Musings",
  secondDamage:5,
  thirdAttack:"Birthday Blush",
  thirdDamage:7,
  photoPath:"img/student_photos/burness_alli.jpg",
  linkedIn:"https://au.linkedin.com/in/alliburness"
}

var burvillToby = {
  volunteeredForTribute:false,
  firstName:"Toby",
  lastName:"Burvill",
  classNumber:"UXDi 10",
  firstAttack:"Victory Pose",
  firstDamage:2,
  secondAttack:"DJ Voice",
  secondDamage:5,
  thirdAttack:"Ronja",
  thirdDamage:7,
  photoPath:"img/student_photos/burvill_toby.jpg",
  linkedIn:"https://au.linkedin.com/in/tobyburvill"
}

var  chahalSandeep = {
  volunteeredForTribute:false,
  firstName:"Sandeep",
  lastName:"Chahal",
  classNumber:"UXDi 13",
  firstAttack:"Japanese Chat",
  firstDamage:2,
  secondAttack:"Composure",
  secondDamage:5,
  thirdAttack:"Hot Toddy",
  thirdDamage:7,
  photoPath:"img/student_photos/chahal_sandeep.jpg",
  linkedIn:"https://www.linkedin.com/in/rick-astley-36464a1b"
}

var chanMingWei = {
  volunteeredForTribute:false,
  firstName:"Ming",
  lastName:"Wei Chan",
  classNumber:"UXDi 10",
  firstAttack:"Beats by Dre",
  firstDamage:2,
  secondAttack:"Sleep Crash",
  secondDamage:5,
  thirdAttack:"Grape Retaliation",
  thirdDamage:7,
  photoPath:"img/student_photos/chan_mingwei.jpg",
  linkedIn:"https://au.linkedin.com/in/mingweichan"
}

var chauChiAn = {
  volunteeredForTribute:false,
  firstName:"Chi",
  lastName:"An Chau",
  classNumber:"FEWD 25",
  firstAttack:"Media Medium",
  firstDamage:2,
  secondAttack:"Business Executioner",
  secondDamage:5,
  thirdAttack:"Thunderbolt",
  thirdDamage:7,
  photoPath:"img/student_photos/chau_chian.jpg",
  linkedIn:"https://au.linkedin.com/in/chianchau"
}


var chengIan = {
  volunteeredForTribute:false,
  firstName:"Ian",
  lastName:"Cheng",
  classNumber:"UXDi 11",
  firstAttack:"Gamer Gaze",
  firstDamage:2,
  secondAttack:"Developer Dance",
  secondDamage:5,
  thirdAttack:"'Effective Attack'",
  thirdDamage:7,
  photoPath:"img/student_photos/cheng_ian.jpg",
  linkedIn:"https://au.linkedin.com/in/ian-chiping-cheng"
}

var condonZeke = {
  volunteeredForTribute:false,
  firstName:"Zeke",
  lastName:"Condon",
  classNumber:"FEWD 25",
  firstAttack:"Baby Delivery",
  firstDamage:2,
  secondAttack:"Holiday Absence",
  secondDamage:5,
  thirdAttack:"Gift Registry Romance",
  thirdDamage:7,
  photoPath:"img/student_photos/condon_zeke.jpg",
  linkedIn:"https://au.linkedin.com/in/zeke-condon-55531230"
}

var corbyJaimie = {
  volunteeredForTribute:false,
  firstName:"Jaimie",
  lastName:"Corby",
  classNumber:"UXDi 13",
  firstAttack:"Comic Imposter",
  firstDamage:2,
  secondAttack:"Country Dance",
  secondDamage:5,
  thirdAttack:"Nailed it",
  thirdDamage:7,
  photoPath:"img/student_photos/corby_jaimie.jpg",
  linkedIn:"https://au.linkedin.com/in/jaimie-corby-b8798554"
}

var darmodyKate = {
  volunteeredForTribute:false,
  firstName:"Kate",
  lastName:"Darmody",
  classNumber:"UXDi 11",
  firstAttack:"Fancy Stylus",
  firstDamage:2,
  secondAttack:"Creative Canvas",
  secondDamage:5,
  thirdAttack:"Chicago Migration",
  thirdDamage:7,
  photoPath:"img/student_photos/darmody_kate.jpg",
  linkedIn:"https://www.linkedin.com/in/kate-darmody"
}

var deshayesMichael = {
  volunteeredForTribute:false,
  firstName:"Michael",
  lastName:"Deshayes",
  classNumber:"UXDi 11",
  firstAttack:"Simple Stylez",
  firstDamage:2,
  secondAttack:"Stitch Sting",
  secondDamage:5,
  thirdAttack:"Sketch Stealth",
  thirdDamage:7,
  photoPath:"img/student_photos/deshayes_michael.jpg",
  linkedIn:"https://au.linkedin.com/in/michaeldeshayes"
}

var deutschAdrian = {
  volunteeredForTribute:false,
  firstName:"Adrian",
  lastName:"Deutsch",
  classNumber:"UXDi 08",
  firstAttack:"Post-It Whisper",
  firstDamage:1 ,
  secondAttack:"MAXIIMMMS",
  secondDamage:9,
  thirdAttack:"IMPROV",
  thirdDamage:9,
  photoPath:"img/student_photos/deutsch_adrian.jpg",
  linkedIn:"https://au.linkedin.com/in/adriandeutsch"
}

var gradydukSergio = {
  volunteeredForTribute:false,
  firstName:"Sergio",
  lastName:"Gradyuk",
  classNumber:"UXDi 11",
  firstAttack:"Bronade Bump",
  firstDamage:2,
  secondAttack:"being Dope",
  secondDamage:5,
  thirdAttack:"#blessedeveryday",
  thirdDamage:7,
  photoPath:"img/student_photos/gradyuk_sergio.jpg",
  linkedIn:"https://au.linkedin.com/in/sergiogradyuk"
}

var hiewMikaela = {
  volunteeredForTribute:false,
  firstName:"Mikachu",
  lastName:"",
  classNumber:"UXDi 10",
  firstAttack:"Quick Design",
  firstDamage:2,
  secondAttack:"User Thunderbolt",
  secondDamage:5,
  thirdAttack:"Head Butt",
  thirdDamage:7,
  photoPath:"img/student_photos/hiew_mikaela.jpg",
  linkedIn:"https://au.linkedin.com/in/mikaelahiew"
}

var hoKim = {
  volunteeredForTribute:false,
  firstName:"Kim",
  lastName:"Ho",
  classNumber:"UXDi 10",
  firstAttack:"Sailormoon Salem",
  firstDamage:2,
  secondAttack:"Cheeseburger",
  secondDamage:5,
  thirdAttack:"Karaoke Faceoff",
  thirdDamage:7,
  photoPath:"img/student_photos/ho_kim.jpg",
  linkedIn:"https://au.linkedin.com/in/kimanhho"
}

var jenPauline = {
  volunteeredForTribute:false,
  firstName:"Pauline",
  lastName:"Jen",
  classNumber:"UXDi 10",
  firstAttack:"<3 Sketch",
  firstDamage:3,
  secondAttack:"<3 Invision",
  secondDamage:3,
  thirdAttack:"All the things!",
  thirdDamage:7,
  photoPath:"img/student_photos/jen_pauline.jpg",
  linkedIn:"https://au.linkedin.com/in/pauline-jen-797a407b"
}

var kleinYessie = {
  volunteeredForTribute:false,
  firstName:"Yessie",
  lastName:"Klein",
  classNumber:"UXDi 10",
  firstAttack:"Motorcycling Stunts",
  firstDamage:2,
  secondAttack:"Photography Shots",
  secondDamage:5,
  thirdAttack:"Globe Trotting",
  thirdDamage:7,
  photoPath:"img/student_photos/klein_yessie.jpg",
  linkedIn:"https://au.linkedin.com/in/yessieklein/en"
}

var lauJon = {
  volunteeredForTribute:false,
  firstName:"Jon",
  lastName:"Lau",
  classNumber:"UXDi 10",
  firstAttack:"Ugly Sweater",
  firstDamage:2,
  secondAttack:"Subtle Sarcasm",
  secondDamage:5,
  thirdAttack:"Forever Grinning",
  thirdDamage:7,
  photoPath:"img/student_photos/lau_jon.jpg",
  linkedIn:"https://au.linkedin.com/in/laujonathon"
}

var liKexin = {
  volunteeredForTribute:false,
  firstName:"Kexin",
  lastName:"Li",
  classNumber:"UXDi 13",
  firstAttack:"Victory Pose",
  firstDamage:2,
  secondAttack:"Sneaky Photo",
  secondDamage:5,
  thirdAttack:"Divine Prototyping",
  thirdDamage:7,
  photoPath:"img/student_photos/li_kexin.jpg",
  linkedIn:"https://au.linkedin.com/in/kexin-li-b394b553"
}

var loughmanSean = {
  volunteeredForTribute:false,
  firstName:"Sean",
  lastName:"Loughman",
  classNumber:"UXDi 10",
  firstAttack:"Bicycling",
  firstDamage:2,
  secondAttack:"Gourmet Lunchbox",
  secondDamage:5,
  thirdAttack:"Japanese Archery",
  thirdDamage:7,
  photoPath:"img/student_photos/loughman_sean.jpg",
  linkedIn:""
}

var macdougallHelen = {
  volunteeredForTribute:false,
  firstName:"Helen",
  lastName:"Macdougall",
  classNumber:"FEWD 25",
  firstAttack:"Half Hour Cycle",
  firstDamage:2,
  secondAttack:"Powerpoint Presos",
  secondDamage:5,
  thirdAttack:"Laptop Slab Slam",
  thirdDamage:7,
  photoPath:"img/student_photos/macdougall_helen.jpg",
  linkedIn:"https://au.linkedin.com/in/helen-macdougall-97772b56"
}

var marasNikki = {
  volunteeredForTribute:false,
  firstName:"Nikki",
  lastName:"Maras",
  classNumber:"FEWD 25",
  firstAttack:"Movie Buff",
  firstDamage:2,
  secondAttack:"Movie Buff",
  secondDamage:5,
  thirdAttack:"Jasmine Tea",
  thirdDamage:7,
  photoPath:"img/student_photos/maras_nikki.jpg",
  linkedIn:"https://au.linkedin.com/in/nikkimaras"
}

var minawaJuliana = {
  volunteeredForTribute:false,
  firstName:"Juliana",
  lastName:"Minawa",
  classNumber:"UXDi 13",
  firstAttack:"Snow Board Flow",
  firstDamage:2,
  secondAttack:"Silverware Underwear",
  secondDamage:5,
  thirdAttack:"Chocolate Hoarding",
  thirdDamage:7,
  photoPath:"img/student_photos/minawa_juliana.jpg",
  linkedIn:"https://au.linkedin.com/in/juliana-minawa"
}

var minikusCarmen = {
  volunteeredForTribute:false,
  firstName:"Carmen",
  lastName:"Minikus",
  classNumber:"WDi 13",
  firstAttack:"TA Telepathy",
  firstDamage:2,
  secondAttack:"Doge Dodge",
  secondDamage:5,
  thirdAttack:"Engagement Surpise",
  thirdDamage:7,
  photoPath:"img/student_photos/minikus_carmen.jpg",
  linkedIn:"https://au.linkedin.com/in/minikus"
}

var minzShalom = {
  volunteeredForTribute:false,
  firstName:"Shalom",
  lastName:"Minz",
  classNumber:"UXDi 10",
  firstAttack:"Testing Analysis",
  firstDamage:2,
  secondAttack:"Business Enlightenment",
  secondDamage:5,
  thirdAttack:"Flying V Model",
  thirdDamage:7,
  photoPath:"img/student_photos/minz_shalom.jpg",
  linkedIn:"https://au.linkedin.com/in/shalomminz"
}

var moynihanSean = {
  volunteeredForTribute:false,
  firstName:"Sean",
  lastName:"Moynihan",
  classNumber:"UXDi 13",
  firstAttack:"Tooth Bling",
  firstDamage:2,
  secondAttack:"Disco Bass Beats",
  secondDamage:5,
  thirdAttack:"BAM",
  thirdDamage:7,
  photoPath:"img/student_photos/moynihan_sean.jpg",
  linkedIn:"https://au.linkedin.com/in/sean-moynihan-988bbba2"
}

var murdochPenelope = {
  volunteeredForTribute:false,
  firstName:"Penny",
  lastName:"Murdoch",
  classNumber:"UXDi 11",
  firstAttack:"Pun Radar",
  firstDamage:2,
  secondAttack:"Bondi Basement",
  secondDamage:5,
  thirdAttack:"Personable Personality",
  thirdDamage:7,
  photoPath:"img/student_photos/murdoch_penelope.jpg",
  linkedIn:"https://au.linkedin.com/in/penelopemurdoch"
}

var ngaiDoug = {
  volunteeredForTribute:false,
  firstName:"Doug",
  lastName:"Ngai",
  classNumber:"UXDi 10",
  firstAttack:"SQUIRREL!",
  firstDamage:2,
  secondAttack:"a Bronade",
  secondDamage:5,
  thirdAttack:"Dozing Doug",
  thirdDamage:7,
  photoPath:"img/student_photos/ngai_doug.jpg",
  linkedIn:"https://au.linkedin.com/in/douglas-ngai-134b3420"
}

var nikroHassan = {
  volunteeredForTribute:false,
  firstName:"Hassan",
  lastName:"Nikro",
  classNumber:"UXDi 10",
  firstAttack:"Nike Apparel",
  firstDamage:2,
  secondAttack:"Booooo...",
  secondDamage:5,
  thirdAttack:"Wow.. just.. Wow",
  thirdDamage:7,
  photoPath:"img/student_photos/nikro_hassan.jpg",
  linkedIn:"https://au.linkedin.com/in/hnikro"
}

var panditharatneHasith = {
  volunteeredForTribute:false,
  firstName:"Hasith",
  lastName:"Panditharatne",
  classNumber:"UXDi 11",
  firstAttack:"Social Instigator",
  firstDamage:2,
  secondAttack:"Testing Tarantula",
  secondDamage:5,
  thirdAttack:"4:30 Vanish",
  thirdDamage:7,
  photoPath:"img/student_photos/panditharatne_hasith.jpg",
  linkedIn:"https://au.linkedin.com/in/hasithp"
}

var patrabanshShivendra = {
  volunteeredForTribute:false,
  firstName:"Shiv",
  lastName:"Patrabansh",
  classNumber:"UXDi 10",
  firstAttack:"Trendy Jackets",
  firstDamage:2,
  secondAttack:"Tranquility",
  secondDamage:5,
  thirdAttack:"Demonic Laugh",
  thirdDamage:7,
  photoPath:"img/student_photos/patrabansh_shivendra.jpg",
  linkedIn:"https://au.linkedin.com/in/cvendra"
}

var ramiresKatia = {
  volunteeredForTribute:false,
  firstName:"Katia",
  lastName:"Ramires",
  classNumber:"UXDi 11",
  firstAttack:"Investor Relationings",
  firstDamage:2,
  secondAttack:"Dream Team Beam",
  secondDamage:5,
  thirdAttack:"Palm Tree Palm",
  thirdDamage:7,
  photoPath:"img/student_photos/ramires_katia.jpg",
  linkedIn:"https://au.linkedin.com/in/katia-ramires-46402722/en"
}

var ryallMathilda = {
  volunteeredForTribute:false,
  firstName:"Mathilda",
  lastName:"Ryall",
  classNumber:"UXDi 10",
  firstAttack:"Bubble Tea",
  firstDamage:2,
  secondAttack:"Japanese Chat",
  secondDamage:5,
  thirdAttack:"Meow Meow Meow",
  thirdDamage:7,
  photoPath:"img/student_photos/ryall_mathilda.jpg",
  linkedIn:"https://au.linkedin.com/in/mathildar"
}

var saneipourMarzi = {
  volunteeredForTribute:false,
  firstName:"Marzi",
  lastName:"Saneipour",
  classNumber:"FEWD 25",
  firstAttack:"Coding Speed",
  firstDamage:2,
  secondAttack:"Coding Genius",
  secondDamage:5,
  thirdAttack:"Baby Surprse",
  thirdDamage:7,
  photoPath:"img/student_photos/saneipour_marzi.jpg",
  linkedIn:""
}

var shankarJanani = {
  volunteeredForTribute:false,
  firstName:"Janani",
  lastName:"Shankar",
  classNumber:"UXDi 11",
  firstAttack:"House Flood",
  firstDamage:2,
  secondAttack:"Gyoza Galaxy",
  secondDamage:5,
  thirdAttack:"Dance Off!",
  thirdDamage:7,
  photoPath:"img/student_photos/shankar_janani.jpg",
  linkedIn:"https://au.linkedin.com/in/jananishankar"
}

var smithSharon = {
  volunteeredForTribute:false,
  firstName:"Sharon",
  lastName:"Smith",
  classNumber:"UXDi 10",
  firstAttack:"Idea Firestorm",
  firstDamage:2,
  secondAttack:"Shazza Mattazza",
  secondDamage:5,
  thirdAttack:"Karaoke Diva",
  thirdDamage:7,
  photoPath:"img/student_photos/smith_sharon.jpg",
  linkedIn:"https://au.linkedin.com/in/realsharonsmith"
}

var tanRichard = {
  volunteeredForTribute:false,
  firstName:"Richard",
  lastName:"Tan",
  classNumber:"UXDi 13",
  firstAttack:"Photo Shot",
  firstDamage:2,
  secondAttack:"Coffee",
  secondDamage:5,
  thirdAttack:"Maxim Masterpiece",
  thirdDamage:7,
  photoPath:"img/student_photos/tan_richard.jpg",
  linkedIn:"https://au.linkedin.com/in/richard-tan-b4242a5"
}

var thomasAsh = {
  volunteeredForTribute:false,
  firstName:"Ash",
  lastName:"Thoams",
  classNumber:"FEWD 25",
  firstAttack:"Code Speed",
  firstDamage:2,
  secondAttack:"Code Smash",
  secondDamage:5,
  thirdAttack:"Code Cram",
  thirdDamage:7,
  photoPath:"img/student_photos/thomas_ash.jpg",
  linkedIn:"https://au.linkedin.com/in/ashleighkthomas"
}

var wangGloria = {
  volunteeredForTribute:false,
  firstName:"Gloria",
  lastName:"'The Grapist' Wang",
  classNumber:"UXDi 10",
  firstAttack:"Grape when you're awake",
  firstDamage:2,
  secondAttack:"Grape when you're asleep",
  secondDamage:5,
  thirdAttack:"Grape you forever",
  thirdDamage:7,
  photoPath:"img/student_photos/wang_gloria.jpg",
  linkedIn:"https://www.linkedin.com/in/gloriajwang?authType=NAME_SEARCH&authToken=szjw&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A72828773%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1473081272175%2Ctas%3Agloria%20wan"
}

var wolfUta = {
  volunteeredForTribute:false,
  firstName:"Uta",
  lastName:"Wolf",
  classNumber:"UXDi 11",
  firstAttack:"Baby Bounce Back",
  firstDamage:2,
  secondAttack:"Architectural Axe",
  secondDamage:5,
  thirdAttack:"Design Detail Dash!",
  thirdDamage:7,
  photoPath:"img/student_photos/wolf_uta.jpg",
  linkedIn:"https://au.linkedin.com/in/uxdesignwolf"
}

var  visinkoShiraz = {
  volunteeredForTribute:false,
  firstName:"Shiraz",
  lastName:"Visinko",
  classNumber:"UXDi 10",
  firstAttack:"Uni Paper Marking",
  firstDamage:2,
  secondAttack:"Meetup Presentation",
  secondDamage:5,
  thirdAttack:"Anthropological Survey",
  thirdDamage:7,
  photoPath:"img/student_photos/visinko_shiraz.jpg",
  linkedIn:"https://au.linkedin.com/in/shirazvisinko"
}

// ARRAYS FOR STUDENTS OF STAFF FOR RANDOM GENERATOR
// Each array needs at least 3 people objects, as 3 rounds of battle may occur, with 2x 3 people required to be called into battle!

var gaStaff = [];

var studentsUXDi11 = [abrogarMaxine, agdaAly, algateTristan, burnessAlli, chengIan, darmodyKate, deshayesMichael, deutschAdrian, murdochPenelope, panditharatneHasith, ramiresKatia, shankarJanani, wolfUta];

var studentsUXDi10 = [aljawadShennah, burvillToby, chanMingWei, gradydukSergio, hiewMikaela, hoKim, jenPauline, kleinYessie, lauJon, loughmanSean, minzShalom, ngaiDoug, nikroHassan, patrabanshShivendra, ryallMathilda, smithSharon, wangGloria, visinkoShiraz];

var studentsUXDi13 = [deutschAdrian, chahalSandeep, corbyJaimie, liKexin, minawaJuliana, moynihanSean, tanRichard];

var studentsFEWD25 = [abbaslouSaba, abignanoBiagio, archerRohanna, blevinsSunnyGrace, boehringerCobain, chauChiAn, condonZeke, macdougallHelen, marasNikki, minikusCarmen, saneipourMarzi, thomasAsh];

// OBSOLETED METHODS FOR OBJECT CREATION
// to create a local Student database.

// Write an object constructor for Students (volunteersForTribute)
// function volunteerForTribute (first, last, pLink) {
//   this.firstName = name;
//   this.lastName = last;
//   this.photoLink = pLink;
// }
//
// var student {
//   age: 13,
//   height: '123cm'
// }

// Biagio's suggestion based on jQuery - but rather complex
// var student1 = $.extend(true, {}, student, {
//   age: 14
// });

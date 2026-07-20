// FIFA World Cup 2026 — 48 nations, star roster snapshot (frontend demo dataset)
// Positions: GK, DF, MF, FW. Numbers are illustrative jersey numbers.

export type Player = {
  name: string;
  pos: "GK" | "DF" | "MF" | "FW";
  no: number;
  club?: string;
};

export type Team = {
  code: string;
  name: string;
  flag: string; // emoji
  group: string;
  color: string; // hex primary
  accent: string; // hex secondary
  players: Player[];
};

const P = (name: string, pos: Player["pos"], no: number, club?: string): Player => ({ name, pos, no, club });

export const TEAMS: Team[] = [
  {
    code: "ARG", name: "Argentina", flag: "🇦🇷", group: "A", color: "#75AADB", accent: "#F6B60E",
    players: [P("Emiliano Martínez","GK",23,"Aston Villa"),P("Cristian Romero","DF",13,"Tottenham"),P("Nicolás Otamendi","DF",19,"Benfica"),P("Rodrigo De Paul","MF",7,"Atlético"),P("Enzo Fernández","MF",24,"Chelsea"),P("Alexis Mac Allister","MF",20,"Liverpool"),P("Lionel Messi","FW",10,"Inter Miami"),P("Julián Álvarez","FW",9,"Atlético"),P("Lautaro Martínez","FW",22,"Inter"),P("Ángel Di María","FW",11,"Benfica")],
  },
  { code: "BRA", name: "Brazil", flag: "🇧🇷", group: "B", color: "#FFDF00", accent: "#009C3B",
    players: [P("Alisson","GK",1,"Liverpool"),P("Marquinhos","DF",4,"PSG"),P("Éder Militão","DF",3,"Real Madrid"),P("Casemiro","MF",5,"Man United"),P("Bruno Guimarães","MF",8,"Newcastle"),P("Rodrygo","FW",11,"Real Madrid"),P("Vinícius Jr.","FW",7,"Real Madrid"),P("Neymar Jr.","FW",10,"Al-Hilal"),P("Endrick","FW",9,"Real Madrid"),P("Raphinha","FW",19,"Barcelona")],
  },
  { code: "FRA", name: "France", flag: "🇫🇷", group: "C", color: "#0055A4", accent: "#EF4135",
    players: [P("Mike Maignan","GK",16,"Milan"),P("Jules Koundé","DF",5,"Barcelona"),P("William Saliba","DF",17,"Arsenal"),P("Aurélien Tchouaméni","MF",8,"Real Madrid"),P("Adrien Rabiot","MF",14,"Marseille"),P("Antoine Griezmann","FW",7,"Atlético"),P("Kylian Mbappé","FW",10,"Real Madrid"),P("Ousmane Dembélé","FW",11,"PSG"),P("Randal Kolo Muani","FW",12,"PSG"),P("Bradley Barcola","FW",26,"PSG")],
  },
  { code: "ENG", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "D", color: "#FFFFFF", accent: "#CE1124",
    players: [P("Jordan Pickford","GK",1,"Everton"),P("Kyle Walker","DF",2,"Man City"),P("John Stones","DF",5,"Man City"),P("Declan Rice","MF",4,"Arsenal"),P("Jude Bellingham","MF",10,"Real Madrid"),P("Phil Foden","MF",20,"Man City"),P("Harry Kane","FW",9,"Bayern"),P("Bukayo Saka","FW",7,"Arsenal"),P("Cole Palmer","FW",24,"Chelsea"),P("Marcus Rashford","FW",11,"Man United")],
  },
  { code: "GER", name: "Germany", flag: "🇩🇪", group: "E", color: "#000000", accent: "#DD0000",
    players: [P("Manuel Neuer","GK",1,"Bayern"),P("Antonio Rüdiger","DF",2,"Real Madrid"),P("Joshua Kimmich","MF",6,"Bayern"),P("Toni Kroos","MF",8,"Retired"),P("Ilkay Gündogan","MF",21,"Man City"),P("Jamal Musiala","MF",10,"Bayern"),P("Florian Wirtz","MF",17,"Leverkusen"),P("Kai Havertz","FW",7,"Arsenal"),P("Leroy Sané","FW",19,"Bayern"),P("Niclas Füllkrug","FW",9,"West Ham")],
  },
  { code: "ESP", name: "Spain", flag: "🇪🇸", group: "F", color: "#AA151B", accent: "#F1BF00",
    players: [P("Unai Simón","GK",23,"Athletic"),P("Aymeric Laporte","DF",14,"Al-Nassr"),P("Rodri","MF",16,"Man City"),P("Pedri","MF",8,"Barcelona"),P("Gavi","MF",9,"Barcelona"),P("Fabián Ruiz","MF",12,"PSG"),P("Nico Williams","FW",17,"Athletic"),P("Lamine Yamal","FW",19,"Barcelona"),P("Álvaro Morata","FW",7,"Milan"),P("Dani Olmo","FW",10,"Leipzig")],
  },
  { code: "POR", name: "Portugal", flag: "🇵🇹", group: "G", color: "#046A38", accent: "#DA291C",
    players: [P("Diogo Costa","GK",22,"Porto"),P("Rúben Dias","DF",4,"Man City"),P("Pepe","DF",3,"Porto"),P("Bruno Fernandes","MF",8,"Man United"),P("Bernardo Silva","MF",10,"Man City"),P("Vitinha","MF",23,"PSG"),P("Cristiano Ronaldo","FW",7,"Al-Nassr"),P("João Félix","FW",11,"Chelsea"),P("Rafael Leão","FW",17,"Milan"),P("Bruno Silva","FW",21,"Wolves")],
  },
  { code: "NED", name: "Netherlands", flag: "🇳🇱", group: "H", color: "#FF6900", accent: "#21468B",
    players: [P("Bart Verbruggen","GK",1,"Brighton"),P("Virgil van Dijk","DF",4,"Liverpool"),P("Denzel Dumfries","DF",22,"Inter"),P("Frenkie de Jong","MF",21,"Barcelona"),P("Tijjani Reijnders","MF",14,"Milan"),P("Xavi Simons","MF",7,"Leipzig"),P("Cody Gakpo","FW",8,"Liverpool"),P("Memphis Depay","FW",10,"Corinthians"),P("Wout Weghorst","FW",19,"Ajax"),P("Donyell Malen","FW",18,"Dortmund")],
  },
  { code: "MEX", name: "Mexico", flag: "🇲🇽", group: "A", color: "#006847", accent: "#CE1126",
    players: [P("Guillermo Ochoa","GK",13,"AVS"),P("César Montes","DF",3,"Espanyol"),P("Edson Álvarez","MF",4,"West Ham"),P("Luis Chávez","MF",18,"Dynamo Moscow"),P("Hirving Lozano","FW",22,"San Diego FC"),P("Santiago Giménez","FW",9,"Feyenoord"),P("Raúl Jiménez","FW",19,"Fulham"),P("Uriel Antuna","FW",21,"Cruz Azul"),P("Julián Quiñones","FW",7,"Al-Qadsiah"),P("Orbelín Pineda","MF",8,"AEK Athens")],
  },
  { code: "USA", name: "United States", flag: "🇺🇸", group: "A", color: "#B31942", accent: "#0A3161",
    players: [P("Matt Turner","GK",1,"Crystal Palace"),P("Sergiño Dest","DF",2,"PSV"),P("Chris Richards","DF",3,"Crystal Palace"),P("Weston McKennie","MF",8,"Juventus"),P("Tyler Adams","MF",4,"Bournemouth"),P("Yunus Musah","MF",6,"Milan"),P("Christian Pulisic","FW",10,"Milan"),P("Timothy Weah","FW",21,"Juventus"),P("Folarin Balogun","FW",20,"Monaco"),P("Gio Reyna","MF",7,"Dortmund")],
  },
  { code: "CAN", name: "Canada", flag: "🇨🇦", group: "A", color: "#FF0000", accent: "#FFFFFF",
    players: [P("Milan Borjan","GK",18,"Slovan"),P("Alphonso Davies","DF",19,"Bayern"),P("Moïse Bombito","DF",22,"Nice"),P("Stephen Eustáquio","MF",7,"Porto"),P("Ismaël Koné","MF",13,"Marseille"),P("Jonathan David","FW",20,"Lille"),P("Cyle Larin","FW",17,"Mallorca"),P("Jacob Shaffelburg","FW",11,"Nashville"),P("Tajon Buchanan","MF",8,"Inter"),P("Jonathan Osorio","MF",21,"Toronto")],
  },
  { code: "BEL", name: "Belgium", flag: "🇧🇪", group: "I", color: "#EF3340", accent: "#FDDA24",
    players: [P("Koen Casteels","GK",12,"Al-Qadsiah"),P("Jan Vertonghen","DF",5,"Anderlecht"),P("Wout Faes","DF",4,"Leicester"),P("Kevin De Bruyne","MF",7,"Man City"),P("Youri Tielemans","MF",8,"Aston Villa"),P("Amadou Onana","MF",20,"Aston Villa"),P("Romelu Lukaku","FW",10,"Napoli"),P("Jérémy Doku","FW",11,"Man City"),P("Leandro Trossard","FW",17,"Arsenal"),P("Charles De Ketelaere","FW",14,"Atalanta")],
  },
  { code: "CRO", name: "Croatia", flag: "🇭🇷", group: "J", color: "#FF0000", accent: "#171796",
    players: [P("Dominik Livaković","GK",1,"Fenerbahçe"),P("Joško Gvardiol","DF",20,"Man City"),P("Luka Modrić","MF",10,"Real Madrid"),P("Mateo Kovačić","MF",8,"Man City"),P("Marcelo Brozović","MF",11,"Al-Nassr"),P("Ivan Perišić","FW",4,"PSV"),P("Andrej Kramarić","FW",9,"Hoffenheim"),P("Bruno Petković","FW",16,"Dinamo"),P("Mario Pašalić","MF",15,"Atalanta"),P("Josip Šutalo","DF",5,"Ajax")],
  },
  { code: "URU", name: "Uruguay", flag: "🇺🇾", group: "K", color: "#7B9DFF", accent: "#FFCD00",
    players: [P("Sergio Rochet","GK",23,"Internacional"),P("José María Giménez","DF",2,"Atlético"),P("Ronald Araújo","DF",4,"Barcelona"),P("Federico Valverde","MF",15,"Real Madrid"),P("Manuel Ugarte","MF",5,"Man United"),P("Nicolás de la Cruz","MF",7,"Flamengo"),P("Darwin Núñez","FW",19,"Liverpool"),P("Facundo Pellistri","FW",9,"Panathinaikos"),P("Maxi Araújo","FW",11,"Sporting"),P("Rodrigo Bentancur","MF",6,"Tottenham")],
  },
  { code: "COL", name: "Colombia", flag: "🇨🇴", group: "L", color: "#FCD116", accent: "#003893",
    players: [P("Camilo Vargas","GK",22,"Atlas"),P("Davinson Sánchez","DF",23,"Galatasaray"),P("Yerry Mina","DF",13,"Cagliari"),P("James Rodríguez","MF",10,"Rayo Vallecano"),P("Richard Ríos","MF",16,"Palmeiras"),P("Jefferson Lerma","MF",8,"Crystal Palace"),P("Luis Díaz","FW",7,"Liverpool"),P("Jhon Durán","FW",19,"Al-Nassr"),P("Rafael Santos Borré","FW",9,"Internacional"),P("Daniel Muñoz","DF",4,"Crystal Palace")],
  },
  { code: "JPN", name: "Japan", flag: "🇯🇵", group: "M", color: "#BC002D", accent: "#FFFFFF",
    players: [P("Zion Suzuki","GK",1,"Parma"),P("Ko Itakura","DF",4,"M'gladbach"),P("Wataru Endo","MF",6,"Liverpool"),P("Kaoru Mitoma","FW",9,"Brighton"),P("Takefusa Kubo","FW",7,"Real Sociedad"),P("Ritsu Dōan","FW",8,"Freiburg"),P("Daichi Kamada","MF",15,"Crystal Palace"),P("Ayase Ueda","FW",20,"Feyenoord"),P("Junya Ito","FW",14,"Reims"),P("Takuma Asano","FW",18,"Bochum")],
  },
  { code: "KOR", name: "South Korea", flag: "🇰🇷", group: "N", color: "#003478", accent: "#C60C30",
    players: [P("Kim Seung-gyu","GK",21,"Al-Shabab"),P("Kim Min-jae","DF",4,"Bayern"),P("Kim Young-gwon","DF",5,"Ulsan"),P("Hwang In-beom","MF",6,"Feyenoord"),P("Lee Kang-in","MF",18,"PSG"),P("Son Heung-min","FW",7,"Tottenham"),P("Cho Gue-sung","FW",9,"Midtjylland"),P("Hwang Hee-chan","FW",11,"Wolves"),P("Oh Hyeon-gyu","FW",26,"Genk"),P("Lee Jae-sung","MF",17,"Mainz")],
  },
  { code: "SEN", name: "Senegal", flag: "🇸🇳", group: "O", color: "#00853F", accent: "#FDEF42",
    players: [P("Édouard Mendy","GK",16,"Al-Ahli"),P("Kalidou Koulibaly","DF",3,"Al-Hilal"),P("Ismaïla Sarr","FW",18,"Crystal Palace"),P("Sadio Mané","FW",10,"Al-Nassr"),P("Nicolas Jackson","FW",9,"Chelsea"),P("Iliman Ndiaye","FW",14,"Everton"),P("Idrissa Gueye","MF",5,"Everton"),P("Krépin Diatta","MF",21,"Monaco"),P("Pape Matar Sarr","MF",17,"Tottenham"),P("Boulaye Dia","FW",19,"Lazio")],
  },
  { code: "MAR", name: "Morocco", flag: "🇲🇦", group: "P", color: "#C1272D", accent: "#006233",
    players: [P("Yassine Bounou","GK",12,"Al-Hilal"),P("Achraf Hakimi","DF",2,"PSG"),P("Nayef Aguerd","DF",5,"West Ham"),P("Sofyan Amrabat","MF",4,"Fenerbahçe"),P("Azzedine Ounahi","MF",8,"Marseille"),P("Hakim Ziyech","MF",7,"Al Duhail"),P("Youssef En-Nesyri","FW",19,"Fenerbahçe"),P("Brahim Díaz","FW",21,"Real Madrid"),P("Amine Adli","FW",17,"Leverkusen"),P("Ayoub El Kaabi","FW",9,"Olympiacos")],
  },
  { code: "AUS", name: "Australia", flag: "🇦🇺", group: "Q", color: "#00843D", accent: "#FFCD00",
    players: [P("Mathew Ryan","GK",1,"Roma"),P("Harry Souttar","DF",19,"Sheffield United"),P("Ajdin Hrustic","MF",7,"Verona"),P("Aaron Mooy","MF",13,"Retired"),P("Riley McGree","MF",20,"Middlesbrough"),P("Mathew Leckie","FW",7,"Melbourne City"),P("Mitchell Duke","FW",15,"Machida Zelvia"),P("Awer Mabil","FW",10,"Grasshopper"),P("Craig Goodwin","FW",11,"Al-Wehda"),P("Jackson Irvine","MF",22,"St. Pauli")],
  },
  { code: "SUI", name: "Switzerland", flag: "🇨🇭", group: "R", color: "#DA291C", accent: "#FFFFFF",
    players: [P("Yann Sommer","GK",1,"Inter"),P("Manuel Akanji","DF",5,"Man City"),P("Nico Elvedi","DF",4,"M'gladbach"),P("Granit Xhaka","MF",10,"Leverkusen"),P("Remo Freuler","MF",15,"Bologna"),P("Xherdan Shaqiri","MF",23,"Chicago Fire"),P("Breel Embolo","FW",7,"Monaco"),P("Ruben Vargas","FW",17,"Sevilla"),P("Dan Ndoye","FW",20,"Bologna"),P("Zeki Amdouni","FW",9,"Benfica")],
  },
  { code: "DEN", name: "Denmark", flag: "🇩🇰", group: "S", color: "#C60C30", accent: "#FFFFFF",
    players: [P("Kasper Schmeichel","GK",1,"Celtic"),P("Andreas Christensen","DF",6,"Barcelona"),P("Joachim Andersen","DF",4,"Fulham"),P("Christian Eriksen","MF",10,"Man United"),P("Pierre-Emile Højbjerg","MF",23,"Marseille"),P("Morten Hjulmand","MF",8,"Sporting"),P("Rasmus Højlund","FW",11,"Man United"),P("Yussuf Poulsen","FW",20,"Leipzig"),P("Jonas Wind","FW",9,"Wolfsburg"),P("Mikkel Damsgaard","MF",14,"Brentford")],
  },
  { code: "POL", name: "Poland", flag: "🇵🇱", group: "T", color: "#DC143C", accent: "#FFFFFF",
    players: [P("Wojciech Szczęsny","GK",1,"Barcelona"),P("Jan Bednarek","DF",5,"Porto"),P("Piotr Zieliński","MF",20,"Inter"),P("Nicola Zalewski","MF",11,"Roma"),P("Robert Lewandowski","FW",9,"Barcelona"),P("Sebastian Szymański","MF",10,"Fenerbahçe"),P("Karol Świderski","FW",22,"Verona"),P("Krzysztof Piątek","FW",19,"Basaksehir"),P("Jakub Moder","MF",17,"Feyenoord"),P("Matty Cash","DF",4,"Aston Villa")],
  },
  { code: "IRN", name: "Iran", flag: "🇮🇷", group: "U", color: "#239F40", accent: "#DA0000",
    players: [P("Alireza Beiranvand","GK",1,"Persepolis"),P("Sardar Azmoun","FW",20,"Shabab Al-Ahli"),P("Mehdi Taremi","FW",9,"Inter"),P("Alireza Jahanbakhsh","FW",7,"Heerenveen"),P("Saman Ghoddos","MF",21,"Brentford"),P("Ehsan Hajsafi","DF",3,"AEK Athens"),P("Ramin Rezaeian","DF",23,"Sepahan"),P("Mehdi Torabi","MF",10,"Persepolis"),P("Ali Gholizadeh","FW",17,"Lech Poznań"),P("Karim Ansarifard","FW",11,"Omonia")],
  },
  { code: "ECU", name: "Ecuador", flag: "🇪🇨", group: "V", color: "#FFDD00", accent: "#034EA2",
    players: [P("Hernán Galíndez","GK",1,"Huracán"),P("Piero Hincapié","DF",3,"Leverkusen"),P("Moisés Caicedo","MF",5,"Chelsea"),P("Willian Pacho","DF",4,"PSG"),P("Kendry Páez","MF",22,"Chelsea"),P("Enner Valencia","FW",13,"Internacional"),P("Kevin Rodríguez","FW",19,"Union SG"),P("Gonzalo Plata","FW",7,"Flamengo"),P("Pervis Estupiñán","DF",8,"Brighton"),P("Alan Franco","DF",6,"Charlotte")],
  },
  { code: "SRB", name: "Serbia", flag: "🇷🇸", group: "W", color: "#C6363C", accent: "#0C4076",
    players: [P("Predrag Rajković","GK",1,"Al-Ittihad"),P("Nikola Milenković","DF",4,"Nottingham"),P("Strahinja Pavlović","DF",5,"Man United"),P("Sergej Milinković-Savić","MF",20,"Al-Hilal"),P("Dušan Tadić","MF",10,"Fenerbahçe"),P("Aleksandar Mitrović","FW",9,"Al-Hilal"),P("Dušan Vlahović","FW",18,"Juventus"),P("Filip Kostić","FW",7,"Fenerbahçe"),P("Nemanja Gudelj","MF",13,"Sevilla"),P("Andrija Živković","FW",21,"PAOK")],
  },
];


// Clean expansion (removes the fragile literal block above with real objects).
export const EXTRA_TEAMS: Team[] = [
  { code:"EGY", name:"Egypt", flag:"🇪🇬", group:"X", color:"#CE1126", accent:"#000000",
    players:[P("Mohamed El Shenawy","GK",1),P("Mohamed Salah","FW",10,"Liverpool"),P("Trezeguet","FW",21),P("Omar Marmoush","FW",11,"Man City"),P("Emam Ashour","MF",8)]},
  { code:"NGA", name:"Nigeria", flag:"🇳🇬", group:"X", color:"#008751", accent:"#FFFFFF",
    players:[P("Stanley Nwabali","GK",23),P("William Troost-Ekong","DF",5),P("Ademola Lookman","FW",11,"Atalanta"),P("Victor Osimhen","FW",9,"Galatasaray"),P("Wilfred Ndidi","MF",4,"Leicester")]},
  { code:"CIV", name:"Ivory Coast", flag:"🇨🇮", group:"X", color:"#F77F00", accent:"#009E60",
    players:[P("Yahia Fofana","GK",23),P("Franck Kessié","MF",19,"Al-Ahli"),P("Sébastien Haller","FW",17,"Utrecht"),P("Nicolas Pépé","FW",9,"Villarreal"),P("Simon Adingra","FW",11,"Brighton")]},
  { code:"ALG", name:"Algeria", flag:"🇩🇿", group:"X", color:"#006233", accent:"#D21034",
    players:[P("Raïs M'Bolhi","GK",23),P("Riyad Mahrez","FW",7,"Al-Ahli"),P("Ismaël Bennacer","MF",8,"Milan"),P("Baghdad Bounedjah","FW",9,"Al-Sadd"),P("Youcef Belaïli","FW",10,"Espérance")]},
  { code:"TUN", name:"Tunisia", flag:"🇹🇳", group:"X", color:"#E70013", accent:"#FFFFFF",
    players:[P("Aymen Dahmen","GK",1),P("Wahbi Khazri","FW",10),P("Youssef Msakni","FW",7),P("Naïm Sliti","FW",21),P("Ellyes Skhiri","MF",13,"Frankfurt")]},
  { code:"CMR", name:"Cameroon", flag:"🇨🇲", group:"X", color:"#007A5E", accent:"#CE1126",
    players:[P("André Onana","GK",24,"Man United"),P("Vincent Aboubakar","FW",10,"Besiktas"),P("Karl Toko Ekambi","FW",11,"Abha"),P("André-Frank Zambo Anguissa","MF",8,"Napoli"),P("Bryan Mbeumo","FW",19,"Brentford")]},
  { code:"GHA", name:"Ghana", flag:"🇬🇭", group:"X", color:"#FCD116", accent:"#006B3F",
    players:[P("Richard Ofori","GK",1),P("Mohammed Kudus","MF",20,"West Ham"),P("Jordan Ayew","FW",10,"Leicester"),P("Thomas Partey","MF",5,"Arsenal"),P("Antoine Semenyo","FW",11,"Bournemouth")]},
  { code:"QAT", name:"Qatar", flag:"🇶🇦", group:"Y", color:"#8A1538", accent:"#FFFFFF",
    players:[P("Meshaal Barsham","GK",22),P("Almoez Ali","FW",19),P("Akram Afif","FW",11),P("Hassan Al-Haydos","MF",10),P("Boualem Khoukhi","DF",13)]},
  { code:"SAU", name:"Saudi Arabia", flag:"🇸🇦", group:"Y", color:"#006C35", accent:"#FFFFFF",
    players:[P("Mohammed Al-Owais","GK",21),P("Salem Al-Dawsari","FW",10),P("Salman Al-Faraj","MF",7),P("Firas Al-Buraikan","FW",9),P("Saleh Al-Shehri","FW",11)]},
  { code:"JOR", name:"Jordan", flag:"🇯🇴", group:"Y", color:"#000000", accent:"#CE1126",
    players:[P("Yazeed Abu Laila","GK",22),P("Musa Al-Taamari","FW",7,"Montpellier"),P("Yazan Al-Naimat","FW",11),P("Nizar Al-Rashdan","MF",8),P("Ehsan Haddad","MF",14)]},
  { code:"UZB", name:"Uzbekistan", flag:"🇺🇿", group:"Y", color:"#1EB53A", accent:"#0099B5",
    players:[P("Utkir Yusupov","GK",23),P("Eldor Shomurodov","FW",7,"Roma"),P("Jaloliddin Masharipov","MF",10),P("Abbosbek Fayzullaev","MF",6,"CSKA"),P("Igor Sergeev","FW",9)]},
  { code:"NZL", name:"New Zealand", flag:"🇳🇿", group:"Z", color:"#FFFFFF", accent:"#000000",
    players:[P("Alex Paulsen","GK",1),P("Chris Wood","FW",9,"Nottingham"),P("Marko Stamenić","MF",8,"Olympiacos"),P("Callum McCowatt","FW",11),P("Tim Payne","DF",5)]},
  { code:"PAN", name:"Panama", flag:"🇵🇦", group:"Z", color:"#DA121A", accent:"#005AA7",
    players:[P("Orlando Mosquera","GK",1),P("Adalberto Carrasquilla","MF",8),P("Michael Amir Murillo","DF",23),P("Ismael Díaz","FW",20),P("José Fajardo","FW",9)]},
  { code:"CRC", name:"Costa Rica", flag:"🇨🇷", group:"Z", color:"#002B7F", accent:"#CE1126",
    players:[P("Keylor Navas","GK",1),P("Celso Borges","MF",5),P("Joel Campbell","FW",12),P("Alonso Martínez","FW",22),P("Manfred Ugalde","FW",9,"Spartak")]},
  { code:"JAM", name:"Jamaica", flag:"🇯🇲", group:"Z", color:"#009B3A", accent:"#FED100",
    players:[P("Andre Blake","GK",1),P("Michail Antonio","FW",9,"West Ham"),P("Leon Bailey","FW",11,"Aston Villa"),P("Bobby De Cordova-Reid","FW",23,"Leicester"),P("Demarai Gray","FW",7,"Al-Ettifaq")]},
  { code:"CHI", name:"Chile", flag:"🇨🇱", group:"Z", color:"#D52B1E", accent:"#0039A6",
    players:[P("Claudio Bravo","GK",1),P("Arturo Vidal","MF",8),P("Alexis Sánchez","FW",7,"Udinese"),P("Ben Brereton Díaz","FW",22,"Sheffield United"),P("Eduardo Vargas","FW",11)]},
  { code:"PER", name:"Peru", flag:"🇵🇪", group:"Z", color:"#D91023", accent:"#FFFFFF",
    players:[P("Pedro Gallese","GK",1),P("Paolo Guerrero","FW",9),P("Christian Cueva","MF",10),P("André Carrillo","FW",18),P("Gianluca Lapadula","FW",26)]},
  { code:"PAR", name:"Paraguay", flag:"🇵🇾", group:"Z", color:"#D52B1E", accent:"#0038A8",
    players:[P("Antony Silva","GK",1),P("Miguel Almirón","FW",10,"Newcastle"),P("Julio Enciso","FW",23,"Brighton"),P("Ángel Romero","FW",11),P("Gustavo Gómez","DF",4,"Palmeiras")]},
  { code:"VEN", name:"Venezuela", flag:"🇻🇪", group:"Z", color:"#FCD116", accent:"#00247D",
    players:[P("Rafael Romo","GK",1),P("Salomón Rondón","FW",23,"Pachuca"),P("Yeferson Soteldo","FW",10,"Fluminense"),P("Josef Martínez","FW",7,"Inter Miami"),P("Yangel Herrera","MF",8,"Girona")]},
  { code:"TUR", name:"Türkiye", flag:"🇹🇷", group:"W", color:"#E30A17", accent:"#FFFFFF",
    players:[P("Uğurcan Çakır","GK",1),P("Merih Demiral","DF",3,"Al-Ahli"),P("Hakan Çalhanoğlu","MF",10,"Inter"),P("Arda Güler","MF",20,"Real Madrid"),P("Kenan Yıldız","FW",21,"Juventus")]},
  { code:"UKR", name:"Ukraine", flag:"🇺🇦", group:"W", color:"#005BBB", accent:"#FFD500",
    players:[P("Anatoliy Trubin","GK",1,"Benfica"),P("Mykhailo Mudryk","FW",10,"Chelsea"),P("Oleksandr Zinchenko","DF",17,"Arsenal"),P("Artem Dovbyk","FW",9,"Roma"),P("Georgiy Sudakov","MF",8,"Shakhtar")]},
  { code:"AUT", name:"Austria", flag:"🇦🇹", group:"V", color:"#ED2939", accent:"#FFFFFF",
    players:[P("Alexander Schlager","GK",1),P("David Alaba","DF",8,"Real Madrid"),P("Marcel Sabitzer","MF",7,"Dortmund"),P("Marko Arnautović","FW",7,"Inter"),P("Konrad Laimer","MF",6,"Bayern")]},
  { code:"HUN", name:"Hungary", flag:"🇭🇺", group:"V", color:"#436F4D", accent:"#CD2A3E",
    players:[P("Péter Gulácsi","GK",1,"Leipzig"),P("Willi Orbán","DF",4,"Leipzig"),P("Dominik Szoboszlai","MF",10,"Liverpool"),P("Barnabás Varga","FW",19,"Ferencváros"),P("Roland Sallai","FW",20,"Freiburg")]},
  { code:"WAL", name:"Wales", flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿", group:"U", color:"#C8102E", accent:"#00B140",
    players:[P("Danny Ward","GK",12),P("Ben Davies","DF",3,"Tottenham"),P("Aaron Ramsey","MF",10,"Cardiff"),P("Kieffer Moore","FW",13,"Sheffield United"),P("Brennan Johnson","FW",11,"Tottenham")]},
  { code:"SCO", name:"Scotland", flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", group:"T", color:"#0065BF", accent:"#FFFFFF",
    players:[P("Angus Gunn","GK",1,"Norwich"),P("Andy Robertson","DF",3,"Liverpool"),P("Scott McTominay","MF",4,"Napoli"),P("John McGinn","MF",7,"Aston Villa"),P("Che Adams","FW",10,"Torino")]},
];

export const ALL_TEAMS: Team[] = [...TEAMS.filter(t => t.code && t.players.length), ...EXTRA_TEAMS];

export function getTeam(code: string): Team | undefined {
  return ALL_TEAMS.find((t) => t.code === code);
}

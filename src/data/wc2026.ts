// FIFA World Cup 2026 (Canada/Mexico/USA) — official team + squad dataset.
// Sourced from FIFA.com team pages (api.fifa.com squad feeds): 48 nations,
// full squads with jersey numbers, positions, bios and official portraits.

export type Player = {
  id: string;
  name: string;
  pos: "GK" | "DF" | "MF" | "FW";
  no: number;
  photo: string | null;   // official FIFA portrait
  birth: string | null;
  height: number | null;  // cm
  weight: number | null;  // kg
  club?: string;
};

export type Team = {
  id: string;
  code: string;
  name: string;
  flag: string;      // emoji
  flagUrl: string;   // official FIFA flag image
  group: string;
  confederation: string;
  color: string;
  accent: string;
  host: boolean;
  finalPosition: string | null;
  topScorers: string[];
  players: Player[];
};

export const ALL_TEAMS: Team[] = [
 {
  "id": "43843",
  "code": "ALG",
  "name": "Algeria",
  "flag": "🇩🇿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/ALG",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#00A067",
  "accent": "#E40000",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Riyad Mahrez"
  ],
  "players": [
   {
    "id": "520070",
    "name": "Melvin Mastil",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/6d85724d-c5a6-400d-acb9-df73451a4bf4/MASTIL-Melvin_520070?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-19",
    "height": 194.0,
    "weight": 90.0
   },
   {
    "id": "376285",
    "name": "Aissa Mandi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/dc4250ac-0a37-44da-9ae0-c858225ad8a1/MANDI-Aissa_376285?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-10-22",
    "height": 184.0,
    "weight": 81.0
   },
   {
    "id": "512127",
    "name": "Achref Abada",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/8b3d3f92-a378-40d7-92d2-85eed4a732d3/ABADA-Achraf_512127?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-15",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "433600",
    "name": "Mohamed Amine Tougai",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/08ab7f46-1067-4c5a-9a23-64bda657aca0/TOUGAI-Mohamed-Amine_433600?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-22",
    "height": 186.0,
    "weight": 84.0
   },
   {
    "id": "480983",
    "name": "Zineddine Belaid",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/f638bd61-6020-4634-bb13-4c19e3b209de/BELAID-Zineddine_480983?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-20",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "433679",
    "name": "Ramiz Zerrouki",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/48a3b28e-cee7-4c5b-87b9-6344b3977983/ZERROUKI-Ramiz_433679?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-26",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "379942",
    "name": "Riyad Mahrez",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/172fb59c-24f2-4bc0-82a2-cdc869badf53/MAHREZ-Riyad_379942?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-02-21",
    "height": 179.0,
    "weight": 73.0
   },
   {
    "id": "430698",
    "name": "Houssem Aouar",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/ac743888-d671-4971-9df9-594b591f2425/AOUAR-Houssem_430698?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-30",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "405877",
    "name": "Amine Gouiri",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/4818d176-036a-4494-b53e-ada08bba749c/GOUIRI-Amine_405877?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-16",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "477795",
    "name": "Fares Chaibi",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/81f29a61-d5a0-466a-86dd-d52b61f29462/CHAIBI-Fares_477795?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-28",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "482874",
    "name": "Anis Hadj Moussa",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/7446a4bb-0884-461c-8fd7-7ce4c93a0a46/HADJ-MOUSSA-Anis_482874?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-11",
    "height": 176.0,
    "weight": 75.0
   },
   {
    "id": "520071",
    "name": "Nadhir Benbouali",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/9e9811da-2a8a-48cd-9088-1a45b6f90e0a/BENBOUALI-Nadhir_520071?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-17",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "482869",
    "name": "Jaouen Hadjam",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/c24e6b93-736c-41a7-be57-2e165509ce5c/HADJAM-Jaouen_482869?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-26",
    "height": 185.0,
    "weight": 83.0
   },
   {
    "id": "441350",
    "name": "Hicham Boudaoui",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/76a28e94-3869-40e2-a82e-9fb973181eb6/BOUDAOUI-Hicham_441350?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-23",
    "height": 175.0,
    "weight": 75.0
   },
   {
    "id": "431858",
    "name": "Rayan Ait-nouri",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/7d7c26f5-81ee-4c6b-97b5-a8c6f67f0772/ZIZO_431858?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-06",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "477817",
    "name": "Oussama Benbot",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/884914ab-5fde-4b43-a31a-99b35849afc8/BENBOT-Oussama_477817?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-11",
    "height": 188.0,
    "weight": 90.0
   },
   {
    "id": "511009",
    "name": "Rafik Belghali",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/0007b754-4911-4f39-8c81-df2c156f7aa5/BELGHALI-Rafik_511009?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-07",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "477790",
    "name": "Mohamed Amoura",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/5aa32614-1ae5-49be-aed3-f9636a556385/AMOURA-Mohamed_477790?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-09",
    "height": 170.0,
    "weight": 68.0
   },
   {
    "id": "379939",
    "name": "Nabil Bentaleb",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/02fbf423-afa1-4863-8ddc-af2136fb5685/BENTALEB-Nabil_379939?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-11-24",
    "height": 189.0,
    "weight": 76.0
   },
   {
    "id": "512132",
    "name": "Adil Boulbina",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/167d2400-d78c-4931-8a84-7b27284bd386/BOULBINA-Adil_512132?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-02",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "395113",
    "name": "Ramy Bensebaini",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/329752fa-e310-4124-8fb2-be7cc478b929/BENSEBAINI-Ramy_395113?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-04-16",
    "height": 187.0,
    "weight": 84.0
   },
   {
    "id": "494291",
    "name": "Ibrahim Maza",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/d1a9f2e9-3dda-4bdb-b2a1-f026bb97d9ce/MAZA-Ibrahim_494291?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-11-24",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "389879",
    "name": "Luca Zidane",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/9a389290-d443-4b83-8e3a-70e481bca3f1/ZIDANE-Luca_389879?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-13",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "433631",
    "name": "Yassine Titraoui",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/d5bf01cd-ba36-4a99-80c8-9287c6df0069/TITRAOUI-Yassine_433631?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-26",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "520072",
    "name": "Fares Ghedjemis",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/39118134-164a-4baa-9884-de4f4821a0b7/GHEDJEMIS-Fares_520072?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-06",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "511010",
    "name": "Samir Chergui",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/5a1d62d5-a732-4036-b925-d011389a66fb/CHERGUI-Samir_511010?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-06",
    "height": 185.0,
    "weight": 85.0
   }
  ]
 },
 {
  "id": "43922",
  "code": "ARG",
  "name": "Argentina",
  "flag": "🇦🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/ARG",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#9CC9F2",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Second",
  "topScorers": [
   "Lionel MESSI"
  ],
  "players": [
   {
    "id": "430624",
    "name": "Juan Musso",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c4a2b6b7-378f-422d-b2d1-42a04e5b1dfb/MUSSO-Juan_430624?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-06",
    "height": 193.0,
    "weight": 94.0
   },
   {
    "id": "402934",
    "name": "Marcos Senesi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/6e675b37-0a1a-4b1e-8ec8-34425ac08d86/MARCOS-SENESI_402934?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-10",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "308322",
    "name": "Nicolas Tagliafico",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/dd4d5f75-b3d4-4ff2-81bf-c16bf0b0a061/TAGLIAFICO-Nicolas_308322?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-31",
    "height": 172.0,
    "weight": 65.0
   },
   {
    "id": "402926",
    "name": "Gonzalo Montiel",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/b8cd278f-c843-4b99-9fb3-c8f081fbb2a8/MONTIEL-Gonzalo_402926?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-01",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "332847",
    "name": "Leandro Paredes",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/76c073ae-2d3c-47b6-8fb5-698893f91a6f/PAREDES-Leandro_332847?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-29",
    "height": 182.0,
    "weight": 74.0
   },
   {
    "id": "402921",
    "name": "Lisandro Martinez",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/1b4390f3-e94f-4851-a36b-595356b3d414/MARTINEZ-Lisandro_402921?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-18",
    "height": 175.0,
    "weight": 78.0
   },
   {
    "id": "428882",
    "name": "Rodrigo De Paul",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/314bcb4c-8c81-4bce-9750-85827a209c1b/DE-PAUL-Rodrigo_428882?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-24",
    "height": 178.0,
    "weight": 73.0
   },
   {
    "id": "463661",
    "name": "Valentin Barco",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/b3a01b61-2e37-439e-b277-5d37c89923ab/BARCO-Valentin_463661?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-07-23",
    "height": 172.0,
    "weight": 67.0
   },
   {
    "id": "416081",
    "name": "Julian Alvarez",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/c7715f12-adb9-4504-9be2-e2899bdbd172/ALVAREZ-Julian_416081?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-31",
    "height": 170.0,
    "weight": 73.0
   },
   {
    "id": "229397",
    "name": "Lionel Messi",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/19823774-fac0-485a-8a8f-572e7324c6c2/MESSI-Lionel_229397?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-06-24",
    "height": 170.0,
    "weight": 68.0
   },
   {
    "id": "395414",
    "name": "Giovani Lo Celso",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/ddda0414-89fe-4118-9830-8ef417990db4/LO-CELSO-Giovani_395414?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-09",
    "height": 177.0,
    "weight": 75.0
   },
   {
    "id": "394824",
    "name": "Geronimo Rulli",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/db91883b-99ec-4aa2-bf1a-cc7912040c7b/RULLI-Geronimo_394824?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-05-20",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "431196",
    "name": "Cristian Romero",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/61d5d60a-7e5a-4a29-919d-c52bd80b9a5a/ROMERO-Cristian_431196?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-27",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "389485",
    "name": "Exequiel Palacios",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/0c3725a4-a529-412d-867b-2ca0929a7a85/PALACIOS-Exequiel_389485?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-05",
    "height": 177.0,
    "weight": 72.0
   },
   {
    "id": "430631",
    "name": "Nico Gonzalez",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/7c86f0b3-0e7b-46e4-adb5-eafcd09d5cd0/GONZALEZ-Nico_430631?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-06",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "418975",
    "name": "Thiago Almada",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/2bcc1c2f-7d0e-46c9-bcd9-1c02ed4d408a/ALMADA-Thiago_418975?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-26",
    "height": 171.0,
    "weight": 63.0
   },
   {
    "id": "485595",
    "name": "Giuliano Simeone",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/5d379193-ed78-498b-81c0-0e1a50f2f7c9/SIMEONE-Giuliano_485595?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-12-18",
    "height": 174.0,
    "weight": 71.0
   },
   {
    "id": "441422",
    "name": "Nico Paz",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/db59cb7d-9b9e-4cdc-be14-07e16631dbd8/PAZ-Nico_441422?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-09-08",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "310116",
    "name": "Nicolas Otamendi",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/4aedbffa-a35c-4aa5-a7ce-8a29c2af3e72/OTAMENDI-Nicolas_310116?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-02-12",
    "height": 182.0,
    "weight": 84.0
   },
   {
    "id": "430628",
    "name": "Alexis Mac Allister",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/78b6a9e4-f2b9-4e19-b414-79b18858caaf/MAC-ALLISTER-Alexis_430628?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-24",
    "height": 176.0,
    "weight": 75.0
   },
   {
    "id": "495054",
    "name": "Jose Manuel Lopez",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/fe5c273f-95e7-49c7-b9a5-a332e4da801b/LOPEZ-Jose-Manuel_495054?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-06",
    "height": 190.0,
    "weight": 77.0
   },
   {
    "id": "402920",
    "name": "Lautaro Martinez",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/2368bf53-1f73-427b-929e-557187d53ac7/MARTINEZ-Lautaro_402920?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-22",
    "height": 175.0,
    "weight": 80.0
   },
   {
    "id": "308300",
    "name": "Emiliano Martinez",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/f5f477fe-a519-4c69-bb68-f6f5b97c1399/MARTINEZ_Emiliano_308300?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-09-02",
    "height": 195.0,
    "weight": 98.0
   },
   {
    "id": "448252",
    "name": "Enzo Fernandez",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b88c6da2-28db-4d61-a668-ac8e84114063/FERNANDEZ-Enzo_448252?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-17",
    "height": 178.0,
    "weight": 83.0
   },
   {
    "id": "418963",
    "name": "Facundo Medina",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/6d4b9a27-2cd5-4372-8426-51876990ba1b/MEDINA-Facundo_418963?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-28",
    "height": 184.0,
    "weight": 80.0
   },
   {
    "id": "402925",
    "name": "Nahuel Molina",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/7aef8344-2a5b-42f0-b1a0-565d5220aa76/MOLINA-Nahuel_402925?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-06",
    "height": 179.0,
    "weight": 74.0
   }
  ]
 },
 {
  "id": "43976",
  "code": "AUS",
  "name": "Australia",
  "flag": "🇦🇺",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/AUS",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#FFC100",
  "accent": "#00784D",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Nestory IRANKUNDA"
  ],
  "players": [
   {
    "id": "339117",
    "name": "Mathew Ryan",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/7c98d5eb-1514-4e8f-a6c6-60f4017b2175/RYAN-Mathew_339117?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-08",
    "height": 184.0,
    "weight": 82.0
   },
   {
    "id": "331149",
    "name": "Milos Degenek",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/93c60eb1-755d-4019-aedb-4da099ceb670/DEGENEK-Milos_331149?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-28",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "448014",
    "name": "Alessandro Circati",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/0bbf6585-1c6b-4416-8a3f-31a1d8d1625b/CIRCATI-Alessandro_448014?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-10",
    "height": 191.0,
    "weight": 85.0
   },
   {
    "id": "430450",
    "name": "Jacob Italiano",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/58be20f9-ed45-4c69-9c3d-d148271e8e92/ITALIANO-Jacob_430450?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-30",
    "height": 177.0,
    "weight": 72.0
   },
   {
    "id": "423522",
    "name": "Jordan Bos",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/4b537554-d211-4b77-aa31-0935973fdd50/BOS-Jordan_423522?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-29",
    "height": 180.0,
    "weight": 83.0
   },
   {
    "id": "339112",
    "name": "Jason Geria",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/33a991a9-eb66-43b2-ad39-2718a8147c51/GERIA-Jason_339112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-05-10",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "321697",
    "name": "Mathew Leckie",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/bc1b0683-9839-4c4e-acf1-2256bc2e58a3/LECKIE-Mathew_321697?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-02-04",
    "height": 181.0,
    "weight": 79.0
   },
   {
    "id": "430452",
    "name": "Connor Metcalfe",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/a539f793-3d95-46b8-805e-67156152ac8b/METCALFE-Connor_430452?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-05",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "498806",
    "name": "Mohamed Toure",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/069af350-e4d8-4b30-af2d-6938b9a379fa/TOURE-Mohamed_498806?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-26",
    "height": 186.0,
    "weight": 78.0
   },
   {
    "id": "404319",
    "name": "Ajdin Hrustic",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/c63012a5-37f8-4317-8a69-60f861fb03a7/HRUSTIC-Ajdin_404319?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-05",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "406606",
    "name": "Awer Mabil",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/9beaa464-b945-4d89-b310-025eea682693/MABIL-Awer_406606?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-09-15",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "331135",
    "name": "Paul Izzo",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/b64e66f2-6c65-4a90-8f28-6fc699fcf5ce/IZZO-Paul_331135?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-06",
    "height": 184.0,
    "weight": 82.0
   },
   {
    "id": "430440",
    "name": "Aiden Oneill",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/a7dc9d98-0215-4756-995a-09b61830ab8b/ONEILL-Aiden_430440?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-04",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "430437",
    "name": "Cameron Devlin",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/1c095f2b-8169-4023-a676-48c6fb3e6897/DEVLIN-Cameron_430437?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-07",
    "height": 170.0,
    "weight": 67.0
   },
   {
    "id": "494411",
    "name": "Kai Trewin",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/5753796c-c01e-444e-8896-5c6c79dcd9fb/TREWIN-Kai_494411?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-18",
    "height": 183.0,
    "weight": 73.0
   },
   {
    "id": "349342",
    "name": "Aziz Behich",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7b166229-d82d-4323-9c79-eb973e996408/BEHICH-Aziz_349342?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-12-16",
    "height": 170.0,
    "weight": 65.0
   },
   {
    "id": "486306",
    "name": "Nestory Irankunda",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/ebc599f9-d929-4c6c-a60e-7f081cfb7bd6/IRANKUNDA-Nestory_486306?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-02-09",
    "height": 165.0,
    "weight": 75.0
   },
   {
    "id": "494557",
    "name": "Patrick Beach",
    "pos": "GK",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/0ea3c68c-c425-41c4-b973-c60e2d5b4685/BEACH-Patrick_494557?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-08-06",
    "height": 189.0,
    "weight": 76.0
   },
   {
    "id": "430442",
    "name": "Harry Souttar",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/6777563e-5036-4252-9809-a0cc21d96147/SOUTTAR-Harry_430442?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-22",
    "height": 198.0,
    "weight": 100.0
   },
   {
    "id": "448015",
    "name": "Cristian Volpato",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/e455ae41-95f0-454b-bd12-abdaffa68b7d/VOLPATO-Cristian_448015?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-11-15",
    "height": 187.0,
    "weight": 76.0
   },
   {
    "id": "382312",
    "name": "Cameron Burgess",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/75870c29-917d-4ad0-984c-c7ba4e85953c/BURGESS-Cameron_382312?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-10-21",
    "height": 194.0,
    "weight": 93.0
   },
   {
    "id": "355775",
    "name": "Jackson Irvine",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/7726492b-0996-47a2-aafd-bd362844d9df/IRVINE-Jackson_355775?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-07",
    "height": 189.0,
    "weight": 79.0
   },
   {
    "id": "491166",
    "name": "Nishan Velupillay",
    "pos": "FW",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/27f30c93-f04b-4195-b105-4504c81abf6e/VELUPILLAY-Nishan_491166?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-07",
    "height": 181.0,
    "weight": 77.0
   },
   {
    "id": "498421",
    "name": "Paul Okon-engstler",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/c010f6a9-53af-4d79-b16d-f25b96670225/OKON-ENGSTLER-Paul_498421?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-01-24",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "504931",
    "name": "Lucas Herrington",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/b0e45418-ff7e-4fdf-a7ac-8e7bf2d63624/HERRINGTON-Lucas_504931?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-09-05",
    "height": 193.0,
    "weight": 82.0
   },
   {
    "id": "518200",
    "name": "Tete Yengi",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/e581f23a-032d-448c-b389-d49738c8e9c1/YENGI-Tete_518200?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-28",
    "height": 197.0,
    "weight": 87.0
   }
  ]
 },
 {
  "id": "43934",
  "code": "AUT",
  "name": "Austria",
  "flag": "🇦🇹",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/AUT",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#ED3D32",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Marko ARNAUTOVIC"
  ],
  "players": [
   {
    "id": "371739",
    "name": "Alexander Schlager",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/9612130f-7351-47d4-b346-dcd331a62cbe/SCHLAGER-Alexander_371739?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-01",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "520035",
    "name": "David Affengruber",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/cc8957b4-30b2-4559-9ae1-c8d14a3260a5/AFFENGRUBER-David_520035?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-19",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "405263",
    "name": "Kevin Danso",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/ff76ce8c-bd4a-436b-87d8-f62532d898b7/DANSO-Kevin_405263?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-19",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "385531",
    "name": "Xaver Schlager",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/f00dad89-01ad-4a76-9b69-9da9b0cccceb/SCHLAGER-Xaver_385531?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-28",
    "height": 174.0,
    "weight": 72.0
   },
   {
    "id": "441067",
    "name": "Stefan Posch",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/c888b84b-0ddd-496f-b621-f281e4e54911/POSCH-Stefan_441067?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-14",
    "height": 188.0,
    "weight": 76.0
   },
   {
    "id": "441088",
    "name": "Nicolas Seiwald",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/fe3dce4a-3a64-48bd-bfd9-63614aa55336/SEIWALD-Nicolas_441088?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-04",
    "height": 179.0,
    "weight": 79.0
   },
   {
    "id": "299200",
    "name": "Marko Arnautovic",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/8bc6e66f-1f5a-4f1d-813d-41c4ab04c6ac/ARNAUTOVIC-Marko_299200?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-04-19",
    "height": 192.0,
    "weight": 88.0
   },
   {
    "id": "316002",
    "name": "David Alaba",
    "pos": "DF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/3ef36338-4967-43c2-8698-1fb504ce30fd/ALABA-David_316002?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-24",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "358241",
    "name": "Marcel Sabitzer",
    "pos": "MF",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/aa016ba2-828d-4d40-8e48-8f07a8d275d9/SABITZER-Marcel_358241?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-17",
    "height": 178.0,
    "weight": 77.0
   },
   {
    "id": "385248",
    "name": "Florian Grillitsch",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/255e18de-7d1d-4a99-a05c-8047149ec1bc/GRILLITSCH-Florian_385248?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-08-07",
    "height": 186.0,
    "weight": 74.0
   },
   {
    "id": "401131",
    "name": "Michael Gregoritsch",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/d33de7b2-c69b-4669-aaac-155c5657be16/GREGORITSCH-Michael_401131?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-18",
    "height": 193.0,
    "weight": 91.0
   },
   {
    "id": "520034",
    "name": "Florian Wiegele",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/7feedee9-3390-40e2-a9aa-8867abd8b89e/WIEGELE-Florian_520034?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-21",
    "height": 205.0,
    "weight": 98.0
   },
   {
    "id": "441065",
    "name": "Patrick Pentz",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/fee95866-9f5e-4663-b49f-3db6a86f0e80/PENTZ-Patrick_441065?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-02",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "430100",
    "name": "Sasa Kalajdzic",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5d061c8b-6223-45c9-b1fa-c02624542eee/KALAJDZIC-Sasa_430100?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-07-07",
    "height": 200.0,
    "weight": 90.0
   },
   {
    "id": "372243",
    "name": "Philipp Lienhart",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/b2217b87-df88-4228-8235-a7ec752aef31/LIENHART-Philipp_372243?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-11",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "463288",
    "name": "Phillip Mwene",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c7b91eab-9cfc-4f0f-be61-71d31d1c4db8/MWENE-Phillip_463288?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-01-29",
    "height": 170.0,
    "weight": 66.0
   },
   {
    "id": "463800",
    "name": "Carney Chukwuemeka",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/469aeffb-5ff1-4782-87c4-b3791f045384/CHUKWUEMEKA-Carney_463800?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-20",
    "height": 187.0,
    "weight": 78.0
   },
   {
    "id": "463283",
    "name": "Romano Schmid",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/558d5b09-0c44-4c7e-bccb-1bf9ac31ca72/SCHMID-Romano_463283?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-27",
    "height": 168.0,
    "weight": 69.0
   },
   {
    "id": "441068",
    "name": "Dejan Ljubicic",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/a9966145-1cd8-429d-99a2-ccb9cda89e87/LJUBICIC-Dejan_441068?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-08",
    "height": 187.0,
    "weight": 74.0
   },
   {
    "id": "385259",
    "name": "Konrad Laimer",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/e5140daf-dd57-4b76-9777-85aec86e6c22/LAIMER-Konrad_385259?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-27",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "463286",
    "name": "Patrick Wimmer",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/30760937-4e34-4c1b-b5a3-8b1375d79728/WIMMER-Patrick_463286?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-30",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "463282",
    "name": "Alexander Prass",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/be716fd1-7641-4a96-a618-5f2c2214c84f/PRASS-Alexander_463282?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-26",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "463287",
    "name": "Marco Friedl",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/dfc45944-180c-4df6-96b2-ef69faee7ee7/FRIEDL-Marco_463287?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-16",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "520036",
    "name": "Paul Wanner",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b0954793-5e15-4708-9ed0-ea59e3501b8c/WANNER-Paul_520036?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-12-23",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "491269",
    "name": "Michael Svoboda",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/f096e299-95db-4ab3-bcb4-ef15da6cda71/SVOBODA-Michael_491269?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-15",
    "height": 195.0,
    "weight": 90.0
   },
   {
    "id": "375600",
    "name": "Alessandro Schoepf",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/712811cf-a3ff-4043-91f0-5044f8028dee/SCHOEPF-Alessandro_375600?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-07",
    "height": 178.0,
    "weight": 74.0
   }
  ]
 },
 {
  "id": "43935",
  "code": "BEL",
  "name": "Belgium",
  "flag": "🇧🇪",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/BEL",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#880029",
  "accent": "#DFA000",
  "host": false,
  "finalPosition": "Quarter-final",
  "topScorers": [
   "Romelu LUKAKU"
  ],
  "players": [
   {
    "id": "358106",
    "name": "Thibaut Courtois",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/b630bdbe-3615-43b0-b715-8da37b1ecfa6/COURTOIS-Thibaut_358106?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-05-11",
    "height": 199.0,
    "weight": 96.0
   },
   {
    "id": "448369",
    "name": "Zeno Debast",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/f6f8a277-eb22-4353-9ce1-a8abe7749d1d/DEBAST-Zeno_448369?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-24",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "448346",
    "name": "Arthur Theate",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/34da124d-c474-4154-90e9-aa132a5df818/THEATE-Arthur_448346?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-25",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "448360",
    "name": "Brandon Mechele",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/dda9e35d-eedf-403b-8953-a5dc213fbf67/MECHELE-Brandon_448360?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-28",
    "height": 190.0,
    "weight": 78.0
   },
   {
    "id": "448373",
    "name": "Maxim De Cuyper",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/1c22dfc4-3eb2-4778-b310-ef4b62aef0c6/DE-CUYPER-Maxim_448373?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-22",
    "height": 182.0,
    "weight": 71.0
   },
   {
    "id": "290821",
    "name": "Axel Witsel",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/ff0110d3-0721-4983-bc62-018a993d8486/WITSEL-Axel_290821?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-01-12",
    "height": 186.0,
    "weight": 82.0
   },
   {
    "id": "358120",
    "name": "Kevin De Bruyne",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/41fb7de3-9f9e-44f1-b63f-0551f5d33b2b/DE-BRUYNE-Kevin_358120?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-06-28",
    "height": 181.0,
    "weight": 79.0
   },
   {
    "id": "401444",
    "name": "Youri Tielemans",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/158822ad-a0e9-406c-a84d-e79b0392409f/TIELEMANS-Youri_401444?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-07",
    "height": 176.0,
    "weight": 72.0
   },
   {
    "id": "358112",
    "name": "Romelu Lukaku",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/302b7fb7-6964-4a52-8db4-9c12778b80fa/LUKAKU-Romelu_358112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-05-13",
    "height": 190.0,
    "weight": 103.0
   },
   {
    "id": "448355",
    "name": "Leandro Trossard",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/78476568-5abb-4047-b6c0-fd9651e0f39d/TROSSARD-Leandro_448355?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-12-04",
    "height": 172.0,
    "weight": 65.0
   },
   {
    "id": "448341",
    "name": "Jeremy Doku",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/df41be47-900d-41fe-90eb-b493f7609869/DOKU-Jeremy_448341?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-27",
    "height": 173.0,
    "weight": 82.0
   },
   {
    "id": "495348",
    "name": "Senne Lammens",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/9e407610-b85c-45d8-847a-2bae1d24e699/LAMMENS-Senne_495348?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-07",
    "height": 193.0,
    "weight": 88.0
   },
   {
    "id": "499803",
    "name": "Mike Penders",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/88da8ae8-d4af-47b1-8f4c-e3ac46fbc226/PENDERS-Mike_499803?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-07-31",
    "height": 200.0,
    "weight": 104.0
   },
   {
    "id": "448377",
    "name": "Dodi Lukebakio",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5672576a-616d-45a3-8f06-95aa772bb821/LUKEBAKIO-Dodi_448377?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-24",
    "height": 184.0,
    "weight": 77.0
   },
   {
    "id": "358122",
    "name": "Thomas Meunier",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/13d6695b-4220-48cb-91b1-16a60dff2aa6/MEUNIER-Thomas_358122?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-09-12",
    "height": 190.0,
    "weight": 88.0
   },
   {
    "id": "448366",
    "name": "Koni De Winter",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/a19702c3-a309-4e23-9957-dfbe0d9d5d43/DE-WINTER-Koni_448366?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-12",
    "height": 191.0,
    "weight": 84.0
   },
   {
    "id": "448362",
    "name": "Charles De Ketelaere",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/2ce231c2-05f7-4353-921c-242c863a8d54/DE-KETELAERE-Charles_448362?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-10",
    "height": 192.0,
    "weight": 83.0
   },
   {
    "id": "506088",
    "name": "Joaquin Seys",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/33c2b9de-5ae7-4fa1-8db8-6cff8e2b02f0/SEYS-Joaquin_506088?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-28",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "497902",
    "name": "Diego Moreira",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/dfe97726-1409-4cc2-8463-39184fab3a04/MOREIRA-Diego_497902?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-08-06",
    "height": 179.0,
    "weight": 72.0
   },
   {
    "id": "448343",
    "name": "Hans Vanaken",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/9018ca03-c5c1-4dc1-8d4f-7ee07308dc55/VANAKEN-Hans_448343?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-24",
    "height": 195.0,
    "weight": 86.0
   },
   {
    "id": "411443",
    "name": "Timothy Castagne",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/58f1cc7c-04f4-43ba-bc82-85c1226fb7a2/CASTAGNE-Timothy_411443?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-05",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "433092",
    "name": "Alexis Saelemaekers",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/f4764c32-f702-4695-9658-28479916fa99/SAELEMAEKERS-Alexis_433092?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-27",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "495349",
    "name": "Nicolas Raskin",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/2a366682-88f4-4d6f-ae54-e474030615cc/RASKIN-Nicolas_495349?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-23",
    "height": 178.0,
    "weight": 76.0
   },
   {
    "id": "448364",
    "name": "Amadou Onana",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/697ee4f8-3df1-4ce5-a8b9-c9dae1ed6aba/ONANA-Amadou_448364?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-16",
    "height": 192.0,
    "weight": 76.0
   },
   {
    "id": "514166",
    "name": "Nathan Ngoy",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/77bea513-328c-4af6-a1b6-89efdfeb03ae/NGOY-Nathan_514166?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-10",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "494025",
    "name": "Matias Fernandez-pardo",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/568ca230-b521-4f9c-9601-fb0cb6841fde/FERNANDEZ-PARDO-Matias_494025?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-02-03",
    "height": 188.0,
    "weight": 86.0
   }
  ]
 },
 {
  "id": "44037",
  "code": "BIH",
  "name": "Bosnia and Herzegovina",
  "flag": "🇧🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/BIH",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#2739D7",
  "accent": "#FFD600",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Ermin MAHMIC"
  ],
  "players": [
   {
    "id": "482978",
    "name": "Nikola Vasilj",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/be1c5819-9bc1-4bf3-b677-9172d1be6bea/VASILJ-Nikola_482978?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-02",
    "height": 193.0,
    "weight": 86.0
   },
   {
    "id": "482969",
    "name": "Nihad Mujakic",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/2722d62f-602e-4c37-8513-f74b7d11efe4/MUJAKIC-Nihad_482969?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-15",
    "height": 189.0,
    "weight": 79.0
   },
   {
    "id": "430194",
    "name": "Dennis Hadzikadunic",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/6cacbe9a-89b9-4eee-8d20-4e68fc0ef7ad/HADZIKADUNIC-Dennis_430194?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-09",
    "height": 191.0,
    "weight": 81.0
   },
   {
    "id": "484022",
    "name": "Tarik Muharemovic",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/a230cb00-997c-4a8c-9983-b03fa2dbe2ad/MUHAREMOVIC-Tarik_484022?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-02-28",
    "height": 192.0,
    "weight": 84.0
   },
   {
    "id": "376230",
    "name": "Sead Kolasinac",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/bed62578-6b40-402e-8c63-94159988fe95/KOLASINAC-Sead_376230?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-06-20",
    "height": 183.0,
    "weight": 84.0
   },
   {
    "id": "483966",
    "name": "Benjamin Tahirovic",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/998f85b6-06db-4822-99de-68010b6cdc61/TAHIROVIC-Benjamin_483966?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-03",
    "height": 191.0,
    "weight": 84.0
   },
   {
    "id": "482976",
    "name": "Amar Dedic",
    "pos": "DF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/87dcec5a-fbf4-45d7-8f1e-26e00140cce7/DEDIC-Amar_482976?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-18",
    "height": 180.0,
    "weight": 74.0
   },
   {
    "id": "489523",
    "name": "Armin Gigovic",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/41529cf6-4725-4885-abc1-00dc358ca8b9/GIGOVIC-Armin_489523?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-04-06",
    "height": 187.0,
    "weight": 77.0
   },
   {
    "id": "485063",
    "name": "Samed Bazdar",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/5bd9c46f-fb55-4097-ae91-9c7e4f6bb308/BAZDAR-Samed_485063?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-31",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "436743",
    "name": "Ermedin Demirovic",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/b9e9f187-0936-4aba-9c70-2a4bcf2281e0/DEMIROVIC-Ermedin_436743?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-25",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "300409",
    "name": "Edin Dzeko",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/b5fa7216-27c0-4652-b7df-b099e97a5604/DZEKO-Edin_300409?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1986-03-17",
    "height": 192.0,
    "weight": 80.0
   },
   {
    "id": "522842",
    "name": "Mladen Jurkas",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/d568a177-8466-4ef0-89d6-990d70cac911/JURKAS-Mladen_522842?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-10-07",
    "height": 193.0,
    "weight": 90.0
   },
   {
    "id": "482974",
    "name": "Ivan Basic",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/7ab9c56e-39f0-4d4a-b5c4-e0583fd57319/BASIC-Ivan_482974?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-04-30",
    "height": 178.0,
    "weight": 76.0
   },
   {
    "id": "372436",
    "name": "Ivan Sunjic",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/ddc91c53-fc37-453c-b16e-50ef5e2dd2da/SUNJIC-Ivan_372436?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-09",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "494640",
    "name": "Amar Memic",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/c57e2c22-f510-4109-b3e7-72b5a6b862a9/MEMIC-Amar_494640?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-20",
    "height": 176.0,
    "weight": 72.0
   },
   {
    "id": "430196",
    "name": "Amir Hadziahmetovic",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/bbe9f175-c9cd-4a96-a655-cb2c4321d03b/HADZIAHMETOVIC-Amir_430196?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-08",
    "height": 179.0,
    "weight": 71.0
   },
   {
    "id": "389886",
    "name": "Dzenis Burnic",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/87cebb80-d20e-42c4-9030-8adcb1a3e1a8/BURNIC-Dzenis_389886?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-22",
    "height": 182.0,
    "weight": 73.0
   },
   {
    "id": "489520",
    "name": "Nikola Katic",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/71b1a703-25aa-4193-8bd7-daf0108e7009/KATIC-Nikola_489520?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-10",
    "height": 194.0,
    "weight": 90.0
   },
   {
    "id": "504990",
    "name": "Kerim Alajbegovic",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/9587bf1f-6c8f-4b8d-80c7-799edc4a7036/ALAJBEGOVIC-Kerim_504990?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-09-21",
    "height": 186.0,
    "weight": 74.0
   },
   {
    "id": "464566",
    "name": "Esmir Bajraktarevic",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/6a74409c-c030-405e-a042-1c01f408eeff/BAJRAKTAREVIC-Esmir_464566?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-10",
    "height": 175.0,
    "weight": 67.0
   },
   {
    "id": "489521",
    "name": "Stjepan Radeljic",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/d1b9ca91-fc68-44ee-8548-8f2fb4d10a46/RADELJIC-Stjepan_489521?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-05",
    "height": 201.0,
    "weight": 91.0
   },
   {
    "id": "491228",
    "name": "Martin Zlomislic",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/c2bf5ce5-0160-4561-a0e0-4508621e1820/ZLOMISLIC-Martin_491228?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-16",
    "height": 189.0,
    "weight": 85.0
   },
   {
    "id": "482984",
    "name": "Haris Tabakovic",
    "pos": "FW",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/b84ad80f-6b2b-455d-9c2e-f71195b5c2ba/TABAKOVIC-Haris_482984?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-20",
    "height": 196.0,
    "weight": 90.0
   },
   {
    "id": "494639",
    "name": "Arjan Malic",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/8b907cf5-e659-4584-acc5-5b0db0f85594/MALIC-Arjan_494639?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-08-28",
    "height": 188.0,
    "weight": 76.0
   },
   {
    "id": "519954",
    "name": "Jovo Lukic",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/8fc08945-7c3e-4e0f-95b4-0c94a72a718d/LUKIC-Jovo_519954?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-28",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "522846",
    "name": "Ermin Mahmic",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/ef292137-a5b1-44b8-b329-031d23320552/MAHMIC-Ermin_522846?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-14",
    "height": 182.0,
    "weight": 80.0
   }
  ]
 },
 {
  "id": "43924",
  "code": "BRA",
  "name": "Brazil",
  "flag": "🇧🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/BRA",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#FFCF25",
  "accent": "#004DE1",
  "host": false,
  "finalPosition": "Round of 16",
  "topScorers": [
   "VINICIUS JUNIOR"
  ],
  "players": [
   {
    "id": "308370",
    "name": "Alisson",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/6b051628-d407-41ce-8a60-dc354ac4ccb8/ALISSON_308370?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-10-02",
    "height": 193.0,
    "weight": 91.0
   },
   {
    "id": "485069",
    "name": "Ederson Silva",
    "pos": "MF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/5e5df9e4-86e2-4292-bc7a-8e95b4aa7e47/EDERSON-SILVA_485069?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-07",
    "height": 184.0,
    "weight": 87.0
   },
   {
    "id": "430601",
    "name": "Gabriel Magalhaes",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/b5870a76-5391-40b7-a348-e2b17995637b/GABRIEL-MAGALHAES_430601?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-19",
    "height": 190.0,
    "weight": 92.0
   },
   {
    "id": "332946",
    "name": "Marquinhos",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/30069661-f88d-4ff7-9c4e-071a5cf3c093/MARQUINHOS_332946?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-14",
    "height": 183.0,
    "weight": 79.0
   },
   {
    "id": "308386",
    "name": "Casemiro",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/49558d20-3d5d-4afb-bf2a-9dc1ab60a6e6/CASEMIRO_308386?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-02-23",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "335658",
    "name": "Alex Sandro",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/c9b49c28-0494-4261-bb60-c2848b4e1120/ALEX-SANDRO_335658?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-01-26",
    "height": 180.0,
    "weight": 82.0
   },
   {
    "id": "405742",
    "name": "Vinicius Junior",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/1c2722c3-a70b-49d8-bdb4-77109161f533/VINICIUS-JUNIOR_405742?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-12",
    "height": 176.0,
    "weight": 77.0
   },
   {
    "id": "430605",
    "name": "Bruno Guimaraes",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/0215cb23-c389-4c5a-9bb0-c7044ae7059a/BRUNO-GUIMARAES_430605?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-16",
    "height": 182.0,
    "weight": 78.0
   },
   {
    "id": "430609",
    "name": "Matheus Cunha",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/9189da72-e1b5-4e7b-800d-7eeca119f08c/MATHEUS-CUNHA_430609?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-27",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "314197",
    "name": "Neymar Jr",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/49424ad5-f8d5-485a-a55b-07c22b49bd07/NEYMAR_314197?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-02-05",
    "height": 175.0,
    "weight": 74.0
   },
   {
    "id": "433872",
    "name": "Raphinha",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/b4def0b2-7d6f-4f3a-bcde-600b292096d6/RAPHINHA_433872?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-14",
    "height": 176.0,
    "weight": 64.0
   },
   {
    "id": "396315",
    "name": "Weverton",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/c66a5712-81fa-4527-9e5a-8221f11b3274/WEVERTON_396315?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-12-13",
    "height": 189.0,
    "weight": 84.0
   },
   {
    "id": "335656",
    "name": "Danilo",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/364f443f-83df-4e8e-803c-765feae146a3/DANILO_335656?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-15",
    "height": 184.0,
    "weight": 84.0
   },
   {
    "id": "431889",
    "name": "Bremer",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/65ba7159-8278-4610-ac57-2cb9f2bbf11b/BREMER_431889?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-18",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "371956",
    "name": "Leo Pereira",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/9f0ecbc1-e1f8-4c5a-a39b-34902fd3cfe7/LEO-PEREIRA_371956?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-31",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "367981",
    "name": "Douglas Santos",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7cef9b58-da05-42ba-afe9-aebcd4d40a0e/DOUGLAS-SANTOS_367981?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-22",
    "height": 173.0,
    "weight": 69.0
   },
   {
    "id": "394456",
    "name": "Fabinho",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/f32cd105-d97b-4a7b-8eb0-258271640a72/FABINHO_394456?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-10-23",
    "height": 188.0,
    "weight": 79.0
   },
   {
    "id": "429392",
    "name": "Danilo Santos",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/e564b92f-7a69-49fe-b259-c5deebf6e451/DANILO-SANTOS_429392?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-29",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "463746",
    "name": "Endrick",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/a3eda53d-b792-4cbf-8924-159d1b6d75af/ENDRICK_463746?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-07-21",
    "height": 172.0,
    "weight": 67.0
   },
   {
    "id": "411726",
    "name": "Lucas Paqueta",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/7d7fce96-8d80-43c3-aa72-c45c44d370c5/LUCAS-PAQUETA_411726?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-27",
    "height": 183.0,
    "weight": 73.0
   },
   {
    "id": "448420",
    "name": "Luiz Henrique",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/a2b269b6-cc1d-4693-b72a-6359c41597b7/LUIZ-HENRIQUE_448420?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-02",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "430597",
    "name": "Gabriel Martinelli",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/4ef5dbd2-50dc-4def-8ae5-5c9f6fee72c2/GABRIEL-MARTINELLI_430597?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-18",
    "height": 178.0,
    "weight": 74.0
   },
   {
    "id": "395427",
    "name": "Ederson",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/2a1d5731-391b-4644-a926-1bc899b86c81/EDERSON_395427?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-08-17",
    "height": 188.0,
    "weight": 90.0
   },
   {
    "id": "430594",
    "name": "Roger Ibanez",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/0b88bb57-5b4b-448f-9af1-44869f36172a/ROGER-IBANEZ_430594?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-23",
    "height": 186.0,
    "weight": 80.0
   },
   {
    "id": "519836",
    "name": "Igor Thiago",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/d547cc13-69d0-4204-91bf-baf63bbb7328/IGOR-THIAGO_519836?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-26",
    "height": 190.0,
    "weight": 95.0
   },
   {
    "id": "475036",
    "name": "Rayan",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/c5de4283-2fbb-4691-8de4-39959ad7b755/RAYAN_475036?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-08-03",
    "height": 187.0,
    "weight": 88.0
   }
  ]
 },
 {
  "id": "43850",
  "code": "CPV",
  "name": "Cabo Verde",
  "flag": "🇨🇻",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CPV",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#222E77",
  "accent": "#EC301A",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "HELIO VARELA"
  ],
  "players": [
   {
    "id": "364752",
    "name": "Vozinha",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/b8286230-b161-484e-87a9-ce5a20e6f7d1/VOZINHA_364752?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1986-06-03",
    "height": 189.0,
    "weight": 74.0
   },
   {
    "id": "297266",
    "name": "Stopira",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/2cf947a1-aabe-4e69-84c7-4e22c24e01da/STOPIRA_297266?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-05-20",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "409241",
    "name": "Diney Borges",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/9bffceda-d572-41b1-917b-06196bbffb3c/DINEY-BORGES_409241?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-17",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "477770",
    "name": "Pico Lopes",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/aae92383-d5ce-4d00-8eb8-71891a619d11/PICO-LOPES_477770?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-17",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "477831",
    "name": "Logan Costa",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/248677f0-fc09-4244-a18f-7ef9afb98dcc/LOGAN-COSTA_477831?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-01",
    "height": 190.0,
    "weight": 91.0
   },
   {
    "id": "477852",
    "name": "Kevin Pina",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/40e5a4a5-c7f0-4b0e-8a6e-d8ffbaa12d29/KEVIN-PINA_477852?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-27",
    "height": 177.0,
    "weight": 81.0
   },
   {
    "id": "477856",
    "name": "Jovane Cabral",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/4bc8360c-8ddd-4449-9e5f-a100502763b7/JOVANE-CABRAL_477856?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-14",
    "height": 174.0,
    "weight": 72.0
   },
   {
    "id": "477855",
    "name": "Joao Paulo",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/18ee15aa-604d-4dea-964e-7b0a73f3f710/JOAO-PAULO_477855?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-26",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "477862",
    "name": "Gilson Benchimol",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/11269eaf-5399-423a-9e27-934a7058a71d/GILSON-BENCHIMOL_477862?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-12-29",
    "height": 187.0,
    "weight": 79.0
   },
   {
    "id": "401894",
    "name": "Jamiro Monteiro",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/04f8c613-3779-443b-8aa4-25ed1d3a60f1/JAMIRO-MONTEIRO_401894?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-23",
    "height": 175.0,
    "weight": 68.0
   },
   {
    "id": "373344",
    "name": "Garry Rodrigues",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/c8ad756c-e6dc-4458-ad13-d34d2b668c63/GARRY-RODRIGUES_373344?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-11-27",
    "height": 173.0,
    "weight": 65.0
   },
   {
    "id": "407114",
    "name": "Marcio Rosa",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/fcc402a3-4dbd-4c2e-9856-c8a3104ce221/MARCIO-ROSA_407114?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-23",
    "height": 186.0,
    "weight": 82.0
   },
   {
    "id": "477832",
    "name": "Sidny Lopes Cabral",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/4fd8eea9-a8fe-4571-8bbc-fe728f6160e7/SIDNY-LOPES-CABRAL_477832?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-18",
    "height": 176.0,
    "weight": 73.0
   },
   {
    "id": "477827",
    "name": "Deroy Duarte",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/c2a1dda5-24bd-4ef1-8ef4-cde9f3f3b644/DEROY-DUARTE_477827?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-04",
    "height": 177.0,
    "weight": 69.0
   },
   {
    "id": "480966",
    "name": "Laros Duarte",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/2650fbd7-f8a2-409e-8b2d-85042a719c52/LAROS-DUARTE_480966?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-28",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "494313",
    "name": "Yannick Semedo",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7d0c9c98-3bbe-4379-a6e4-df45573f6e90/YANNICK-SEMEDO_494313?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-29",
    "height": 176.0,
    "weight": 60.0
   },
   {
    "id": "433724",
    "name": "Willy Semedo",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/37b3a4c5-6899-487c-892a-1d9791945ba3/WILLY-SEMEDO_433724?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-27",
    "height": 185.0,
    "weight": 69.0
   },
   {
    "id": "494314",
    "name": "Telmo Arcanjo",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/16e60922-64b4-40df-ae20-f53a44891fe9/TELMO-ARCANJO_494314?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-21",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "482782",
    "name": "Dailon Livramento",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/cded048a-5237-4aac-83d6-cbdbc3fec36f/DAILON-LIVRAMENTO_482782?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-04",
    "height": 185.0,
    "weight": 73.0
   },
   {
    "id": "355642",
    "name": "Ryan Mendes",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/69224c23-3cb2-4d08-967c-0c318328366a/RYAN-MENDES_355642?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-01-08",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "401893",
    "name": "Nuno Da Costa",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/a9555196-ece6-4f39-8c07-103e12f4c900/NUNO-DA-COSTA_401893?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-02-10",
    "height": 182.0,
    "weight": 69.0
   },
   {
    "id": "477847",
    "name": "Steven Moreira",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/79a2bdd5-b9a9-41d1-8fdd-3dff50346705/STEVEN-MOREIRA_477847?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-13",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "406281",
    "name": "Cj Dos Santos",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/ecf9ed76-fe11-4089-96d4-8126286db543/CJ-DOS-SANTOS_406281?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-24",
    "height": 189.0,
    "weight": 79.0
   },
   {
    "id": "482783",
    "name": "Wagner Pina",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b0ebca3f-fcb5-4872-a5ce-a17d0d39a88c/WAGNER-PINA_482783?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-03",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "482780",
    "name": "Kelvin Pires",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/612ea8e3-613d-4c06-a13b-d7a1de98a43d/KELVIN-PIRES_482780?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-05",
    "height": 193.0,
    "weight": 85.0
   },
   {
    "id": "477849",
    "name": "Helio Varela",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/8c4d8ef4-54e9-4144-84c4-d4933b752442/HELIO-VARELA_477849?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-03",
    "height": 176.0,
    "weight": 72.0
   }
  ]
 },
 {
  "id": "43899",
  "code": "CAN",
  "name": "Canada",
  "flag": "🇨🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CAN",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#D52B1E",
  "accent": "#FFFFFF",
  "host": true,
  "finalPosition": "Round of 16",
  "topScorers": [
   "Jonathan DAVID"
  ],
  "players": [
   {
    "id": "441255",
    "name": "Dayne St. Clair",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/0583604e-3974-45f0-ac6c-cdf0deaabe5c/ST-CLAIR-Dayne_441255?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-09",
    "height": 191.0,
    "weight": 88.0
   },
   {
    "id": "441252",
    "name": "Alistair Johnston",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/bd760593-4ed3-405e-b497-f508dbc8bbdf/JOHNSTON-Alistair_441252?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-08",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "514070",
    "name": "Alfie Jones",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/59f64291-f9e7-4d71-82cd-e15eb9a91a1c/JONES-Alfie_514070?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-07",
    "height": 191.0,
    "weight": 89.0
   },
   {
    "id": "480322",
    "name": "Luc De Fougerolles",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/5a74297e-1aa4-41fa-a151-782f1211d1a0/DE-FOUGEROLLES-Luc_480322?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-10-12",
    "height": 183.0,
    "weight": 81.0
   },
   {
    "id": "448402",
    "name": "Joel Waterman",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/f5b31eb7-c506-4ad3-b857-06c22e1bb263/WATERMAN-Joel_448402?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-24",
    "height": 185.0,
    "weight": 73.0
   },
   {
    "id": "448390",
    "name": "Mathieu Choiniere",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/d74aed0f-7268-4a91-8dc2-13a76e2cdf28/CHOINIERE-Mathieu_448390?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-07",
    "height": 173.0,
    "weight": 68.0
   },
   {
    "id": "433635",
    "name": "Stephen Eustaquio",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/1c0650a1-bba7-4998-b6b6-ebddeed58058/EUSTAQUIO-Stephen_433635?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-21",
    "height": 175.0,
    "weight": 69.0
   },
   {
    "id": "441258",
    "name": "Ismael Kone",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/51344b42-77de-4109-a167-7723dc1d4dd2/KONE-Ismael_441258?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-16",
    "height": 188.0,
    "weight": 76.0
   },
   {
    "id": "390670",
    "name": "Cyle Larin",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/21086aea-3ec5-47b2-a81f-f7316489183a/LARIN-Cyle_390670?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-04-17",
    "height": 188.0,
    "weight": 92.0
   },
   {
    "id": "441257",
    "name": "Jonathan David",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/97ad628a-b97d-4657-ac41-f2a667c534e6/DAVID-Jonathan_441257?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-14",
    "height": 175.0,
    "weight": 80.0
   },
   {
    "id": "441259",
    "name": "Liam Millar",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/3f5479a0-7d7d-408f-b9c8-b0185e1d8ae4/MILLAR-Liam_441259?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-27",
    "height": 176.0,
    "weight": 74.0
   },
   {
    "id": "486929",
    "name": "Tani Oluwaseyi",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/c761fb38-4f2b-47a9-9ede-6bee5f09d6bd/OLUWASEYI-Tani_486929?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-15",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "371958",
    "name": "Derek Cornelius",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/efe78874-6cb4-4156-a6ce-af7c6374d11f/CORNELIUS-Derek_371958?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-25",
    "height": 186.0,
    "weight": 87.0
   },
   {
    "id": "448411",
    "name": "Jacob Shaffelburg",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/fd23f2a2-eb9d-4232-97ff-03c924d6b24e/SHAFFELBURG-Jacob_448411?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-26",
    "height": 181.0,
    "weight": 73.0
   },
   {
    "id": "466585",
    "name": "Moise Bombito",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/2d2bbffa-0dcf-47c1-b681-706566867489/BOMBITO-Moise_466585?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-30",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "331732",
    "name": "Maxime Crepeau",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c4570ca7-10a7-44ca-901d-fee1e11e4400/CREPEAU-Maxime_331732?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-11",
    "height": 185.0,
    "weight": 86.0
   },
   {
    "id": "430138",
    "name": "Tajon Buchanan",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/a607b6f5-fe42-4a89-9e88-cb9690e4bcd1/BUCHANAN-Tajon_430138?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-08",
    "height": 183.0,
    "weight": 74.0
   },
   {
    "id": "463817",
    "name": "Owen Goodman",
    "pos": "GK",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/a226584e-2566-49be-b8e7-b8e73d3aa127/GOODMAN-Owen_463817?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-11-27",
    "height": 193.0,
    "weight": 92.0
   },
   {
    "id": "412144",
    "name": "Alphonso Davies",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/4b0a6361-55a2-4bde-82a4-8275181091f5/DAVIES-Alphonso_412144?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-02",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "466687",
    "name": "Ali Ahmed",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/123bdaa9-e54b-4b1c-8fd4-5dac88de915e/AHMED-Ali_466687?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-10",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "370986",
    "name": "Jonathan Osorio",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/982a5ed2-0878-4733-b071-cd7cc532ee37/OSORIO-Jonathan_370986?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-12",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "431696",
    "name": "Richie Laryea",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/612f188f-bb60-45db-8932-fc7dd2ca13ec/LARYEA-Richie_431696?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-07",
    "height": 175.0,
    "weight": 71.0
   },
   {
    "id": "485064",
    "name": "Niko Sigur",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/e0c93e53-1609-4a5c-95be-b4eb0c044003/SIGUR-Niko_485064?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-09-09",
    "height": 178.0,
    "weight": 77.0
   },
   {
    "id": "493970",
    "name": "Promise David",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/5e47f75f-c26f-4a7b-81e5-7957cc1027eb/DAVID-Promise_493970?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-03",
    "height": 195.0,
    "weight": 90.0
   },
   {
    "id": "423941",
    "name": "Nathan Saliba",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/1da64224-0271-489f-bea3-2aaa2e4cdf14/SALIBA-Nathan_423941?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-02-07",
    "height": 174.0,
    "weight": 80.0
   },
   {
    "id": "423933",
    "name": "Jayden Nelson",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/11fd224d-e90c-41f4-8497-e387c702f00a/NELSON-Jayden_423933?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-26",
    "height": 170.0,
    "weight": 68.0
   }
  ]
 },
 {
  "id": "43926",
  "code": "COL",
  "name": "Colombia",
  "flag": "🇨🇴",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/COL",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#FFD600",
  "accent": "#00148E",
  "host": false,
  "finalPosition": "Round of 16",
  "topScorers": [
   "Daniel MUNOZ"
  ],
  "players": [
   {
    "id": "228686",
    "name": "David Ospina",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/bb1dfed7-fde5-4558-8bf0-fe299883d6fa/OSPINA-David_228686?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-08-31",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "431200",
    "name": "Daniel Munoz",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/597b88e8-d3ab-4f1f-9ba5-c031478769d3/MUNOZ-Daniel_431200?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-26",
    "height": 180.0,
    "weight": 74.0
   },
   {
    "id": "441622",
    "name": "Jhon Lucumi",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/73d7ea6f-ca50-4665-97cf-4c319351dce6/LUCUMI-Jhon_441622?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-26",
    "height": 187.0,
    "weight": 87.0
   },
   {
    "id": "315614",
    "name": "Santiago Arias",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/5617bc24-ff35-493b-95f2-22239373414a/ARIAS-Santiago_315614?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-01-13",
    "height": 177.0,
    "weight": 76.0
   },
   {
    "id": "470759",
    "name": "Kevin Castano",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/0ba9e182-1726-4513-ab33-e6224e61815a/CASTANO-Kevin_470759?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-29",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "473050",
    "name": "Richard Rios",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/3beeef45-2af9-4641-aa23-24aabb1ff865/RIOS-Richard_473050?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-02",
    "height": 185.0,
    "weight": 85.0
   },
   {
    "id": "428886",
    "name": "Luis Diaz",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/e1e5fb3a-67cb-4e0d-9a70-95b7cc6d5ebf/DIAZ-Luis_428886?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-13",
    "height": 179.0,
    "weight": 71.0
   },
   {
    "id": "425580",
    "name": "Jorge Carrascal",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/52a87992-08b2-4124-b02b-d25bd6e83c09/CARRASCAL-Jorge_425580?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-25",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "369530",
    "name": "Jhon Cordoba",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/549e0eab-ae8f-4f4b-8d9b-36cbeaae716c/CORDOBA-Jhon_369530?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-05-11",
    "height": 186.0,
    "weight": 84.0
   },
   {
    "id": "269058",
    "name": "James Rodriguez",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/800cc17f-8f64-4d16-90e9-c5ab79c4d302/RODRIGUEZ-James_269058?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-12",
    "height": 181.0,
    "weight": 79.0
   },
   {
    "id": "470760",
    "name": "Jhon Arias",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/1449efe8-a491-4d19-8c7d-c6fb0b6e8d0f/ARIAS-Jhon_470760?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-21",
    "height": 168.0,
    "weight": 83.0
   },
   {
    "id": "360642",
    "name": "Camilo Vargas",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/0a3646b6-8b61-4004-a460-0aad23a8ff36/VARGAS-Camilo_360642?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-03-09",
    "height": 183.0,
    "weight": 84.0
   },
   {
    "id": "395552",
    "name": "Yerry Mina",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/908d10ae-e26e-4937-82b2-6baa54784ac7/MINA-Yerry_395552?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-23",
    "height": 195.0,
    "weight": 95.0
   },
   {
    "id": "463902",
    "name": "Gustavo Puerta",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/818f768e-54da-4c5f-88ef-8f596240c2b5/PUERTA-Gustavo_463902?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-23",
    "height": 173.0,
    "weight": 73.0
   },
   {
    "id": "489849",
    "name": "Juan Portilla",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/80d3008e-fc71-4841-bedb-fbb9e0bfe3b8/PORTILLA-Juan_489849?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-12",
    "height": 181.0,
    "weight": 78.0
   },
   {
    "id": "395550",
    "name": "Jefferson Lerma",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/961b906c-13d4-4869-942a-5f5d2e3fab3e/LERMA-Jefferson_395550?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-25",
    "height": 180.0,
    "weight": 84.0
   },
   {
    "id": "394500",
    "name": "Johan Mojica",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/efd8e0c0-6d52-43f0-95ce-b9c258914603/MOJICA-Johan_394500?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-21",
    "height": 184.0,
    "weight": 76.0
   },
   {
    "id": "476345",
    "name": "Willer Ditta",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/bbf850f0-89dd-4ccc-979d-bb7b23e769b1/DITTA-Willer_476345?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-23",
    "height": 179.0,
    "weight": 83.0
   },
   {
    "id": "418881",
    "name": "Cucho Hernandez",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/a54cc361-8a38-4340-bbaa-1dab41b73626/HERNANDEZ-Cucho_418881?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-20",
    "height": 176.0,
    "weight": 79.0
   },
   {
    "id": "356704",
    "name": "Juan Quintero",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/ab12e549-2406-4bbb-a420-0f9ccef2c09e/QUINTERO-Juan_356704?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-18",
    "height": 167.0,
    "weight": 71.0
   },
   {
    "id": "405755",
    "name": "Jaminton Campaz",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/cd3d4afc-5780-444f-80ca-fc55b53a5329/CAMPAZ-Leandro_405755?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-24",
    "height": 166.0,
    "weight": 75.0
   },
   {
    "id": "394376",
    "name": "Deiver Machado",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/e3774306-ac78-44ee-954b-9f4328a035c1/MACHADO-Deiver_394376?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-09-02",
    "height": 173.0,
    "weight": 77.0
   },
   {
    "id": "386013",
    "name": "Davinson Sanchez",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/ce6f352e-52e7-4265-9bc9-d482292fe4fb/SANCHEZ-Davinson_386013?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-12",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "385998",
    "name": "Alvaro Montero",
    "pos": "GK",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b7af4c7c-edc7-483d-a804-068ea864840e/MONTERO-Alvaro_385998?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-03-29",
    "height": 201.0,
    "weight": 98.0
   },
   {
    "id": "428905",
    "name": "Luis Suarez",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/898b7742-30e2-4b72-8470-dbcdf5d5e058/SUAREZ-Luis_428905?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-02",
    "height": 179.0,
    "weight": 85.0
   },
   {
    "id": "492189",
    "name": "Andres Gomez",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/300b07da-6c9b-4607-a30d-11a11614e6d8/GOMEZ-Andres_492189?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-12",
    "height": 170.0,
    "weight": 71.0
   }
  ]
 },
 {
  "id": "20014",
  "code": "COD",
  "name": "Congo DR",
  "flag": "🇨🇩",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/COD",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#007FFF",
  "accent": "#FF0000",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Yoane WISSA"
  ],
  "players": [
   {
    "id": "441313",
    "name": "Lionel Mpasi",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/93a9ca9a-b0db-41bb-80e6-878eb46f0c84/MPASI-Lionel_441313?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-01",
    "height": 182.0,
    "weight": 73.0
   },
   {
    "id": "426357",
    "name": "Aaron Wan-bissaka",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/55753894-f81e-4e55-84a7-835ef46fc9bb/WAN-BISSAKA-Aaron_426357?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-26",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "504329",
    "name": "Steve Kapuadi",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/60a4ad81-dbaa-4276-b291-f002ec98ddfc/KAPUADI-Steve_504329?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-30",
    "height": 196.0,
    "weight": 88.0
   },
   {
    "id": "403063",
    "name": "Axel Tuanzebe",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/c918f48b-6fff-449f-ba1d-a8c84e6a6f00/TUANZEBE-Axel_403063?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-14",
    "height": 188.0,
    "weight": 79.0
   },
   {
    "id": "477829",
    "name": "Dylan Batubinsika",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/f5388f1a-825a-4a7d-9668-1f618b0686ea/BATUBINSIKA-Dylan_477829?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-15",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "494458",
    "name": "Ngalayel Mukau",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/72bed90f-aa3d-4f6f-8751-74689a06f326/MUKAU-Ngalayel_494458?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-11-03",
    "height": 186.0,
    "weight": 79.0
   },
   {
    "id": "424119",
    "name": "Nathanael Mbuku",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/5977f6d5-d50b-46c4-9e33-d8c4aef7202c/MBUKU-Nathanael_424119?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-16",
    "height": 170.0,
    "weight": 70.0
   },
   {
    "id": "433076",
    "name": "Samuel Moutoussamy",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/e22f732a-a001-4c41-96c8-138b79ed45b2/MOUTOUSSAMY-Samuel_433076?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-12",
    "height": 176.0,
    "weight": 72.0
   },
   {
    "id": "510989",
    "name": "Brian Cipenga",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/ebfc012f-56c2-4279-9eab-02219646f01e/CIPENGA-Brian_510989?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-11",
    "height": 172.0,
    "weight": 67.0
   },
   {
    "id": "441317",
    "name": "Theo Bongonda",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/33939502-486c-4dce-a21a-c5c86b0e08f0/BONGONDA-Theo_441317?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-11-20",
    "height": 176.0,
    "weight": 64.0
   },
   {
    "id": "336439",
    "name": "Gael Kakuta",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/201587e3-e8f9-4201-9ee5-23931fd0f016/KAKUTA-Gael_336439?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-06-21",
    "height": 174.0,
    "weight": 68.0
   },
   {
    "id": "477833",
    "name": "Joris Kayembe",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/1bb4fcb6-fbfd-4f37-a827-eee403ed2a4f/KAYEMBE-Joris_477833?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-08",
    "height": 180.0,
    "weight": 73.0
   },
   {
    "id": "426506",
    "name": "Meschack Elia",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/8ac2d949-e53e-4f4e-9196-d91ab9bc8f65/ELIA-Meschack_426506?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-06",
    "height": 173.0,
    "weight": 67.0
   },
   {
    "id": "486147",
    "name": "Noah Sadiki",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/3c5307a2-8894-44fc-a2d0-95c4500a6740/SADIKI-Noah_486147?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-12-17",
    "height": 165.0,
    "weight": 58.0
   },
   {
    "id": "477864",
    "name": "Aaron Tshibola",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/2a9cce05-2dd6-4f24-add3-7f4ad4232790/TSHIBOLA-Aaron_477864?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-02",
    "height": 184.0,
    "weight": 78.0
   },
   {
    "id": "486196",
    "name": "Timothy Fayulu",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/deee3a8c-2aea-43fd-80d4-18dfdf1fad94/FAYULU-Timothy_486196?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-24",
    "height": 192.0,
    "weight": 84.0
   },
   {
    "id": "336425",
    "name": "Cedric Bakambu",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/25e27fcf-479e-42fe-bd09-63dc8b8fa202/BAKAMBU-Cedric_336425?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-04-11",
    "height": 182.0,
    "weight": 74.0
   },
   {
    "id": "448128",
    "name": "Charles Pickel",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/1a0ecb32-cde2-4987-a0e0-2bf8ee4376c5/PICKEL-Charles_448128?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-15",
    "height": 187.0,
    "weight": 78.0
   },
   {
    "id": "477859",
    "name": "Fiston Mayele",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/cfecc0dd-e887-4645-b9dc-b9d90296f314/MAYELE-Fiston_477859?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-24",
    "height": 185.0,
    "weight": 85.0
   },
   {
    "id": "441316",
    "name": "Yoane Wissa",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/df278077-1306-4bc3-99d3-0842d69fdec3/WISSA-Yoane_441316?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-03",
    "height": 176.0,
    "weight": 75.0
   },
   {
    "id": "514171",
    "name": "Matthieu Epolo",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/5b3aa99c-c19f-4087-9230-fcc1023e6baa/EPOLO-Matthieu_514171?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-01-15",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "356532",
    "name": "Chancel Mbemba",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/30bebca0-cc33-4a32-ad33-8a6141647128/MBEMBA-Chancel_356532?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-08",
    "height": 182.0,
    "weight": 81.0
   },
   {
    "id": "477835",
    "name": "Simon Banza",
    "pos": "FW",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/bea02c15-ba1f-4592-a3dd-80b301e94226/BANZA-Simon_477835?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-13",
    "height": 189.0,
    "weight": 77.0
   },
   {
    "id": "477853",
    "name": "Gedeon Kalulu",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/842e89cb-5c6f-4484-bbc2-b9e6d50c2de5/KALULU-Gedeon_477853?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-29",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "433161",
    "name": "Edo Kayembe",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/45763ec1-2979-4fe6-97f9-5e3f90b9c1ee/KAYEMBE-Edo_433161?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-03",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "436572",
    "name": "Arthur Masuaku",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/7c521f94-2538-45a0-a77e-4a529b9dfc8f/MASUAKU-Arthur_436572?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-07",
    "height": 179.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "43938",
  "code": "CRO",
  "name": "Croatia",
  "flag": "🇭🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CRO",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#F30A0A",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Petar SUCIC"
  ],
  "players": [
   {
    "id": "369029",
    "name": "Dominik Livakovic",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/6f54cf31-4fd8-4dff-aaa7-9db6bf2fa2ec/LIVAKOVIC-Dominik_369029?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-09",
    "height": 188.0,
    "weight": 79.0
   },
   {
    "id": "433667",
    "name": "Josip Stanisic",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/c1f59cf4-db22-4b38-af85-ab5692105f95/STANISIC-Josip_433667?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-02",
    "height": 186.0,
    "weight": 77.0
   },
   {
    "id": "448174",
    "name": "Marin Pongracic",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/002f5150-852a-45f5-9a9b-46cd3dcaface/PONGRACIC-Marin_448174?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-11",
    "height": 193.0,
    "weight": 95.0
   },
   {
    "id": "448180",
    "name": "Josko Gvardiol",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/18cba70e-f4ed-4f57-8e6a-5d4bfd3df8b0/GVARDIOL-Josko_448180?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-23",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "372424",
    "name": "Duje Caleta-car",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/d8171170-8b91-49e5-b32a-7b3494bf5809/CALETA-CAR-Duje_372424?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-17",
    "height": 193.0,
    "weight": 89.0
   },
   {
    "id": "448171",
    "name": "Josip Sutalo",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/5b23d028-3bf8-4355-8364-7838975c264f/SUTALO-Josip_448171?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-28",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "389753",
    "name": "Nikola Moro",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/f0845e44-1c38-4bff-a4d4-3e238907d961/MORO-Nikola_389753?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-12",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "339987",
    "name": "Mateo Kovacic",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/5d230f74-1e00-4b42-a880-844fe2aee964/KOVACIC-Mateo_339987?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-06",
    "height": 178.0,
    "weight": 81.0
   },
   {
    "id": "336472",
    "name": "Andrej Kramaric",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/a1ea2a12-4fba-4dbb-9a75-25c88685d90c/KRAMARIC-Andrej_336472?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-06-19",
    "height": 177.0,
    "weight": 73.0
   },
   {
    "id": "241559",
    "name": "Luka Modric",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/cbff6a19-cce4-45ee-9869-84cf30ce5676/MODRIC-Luka_241559?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1985-09-09",
    "height": 172.0,
    "weight": 66.0
   },
   {
    "id": "430070",
    "name": "Ante Budimir",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/135f8f1c-6e03-43b8-a18a-8914b4a4bd7a/BUDIMIR-Ante_430070?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-22",
    "height": 190.0,
    "weight": 75.0
   },
   {
    "id": "514526",
    "name": "Ivor Pandur",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/5a32b76f-ee60-4eb1-a2e0-b12bc86e41e0/PANDUR-Ivor_514526?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-25",
    "height": 187.0,
    "weight": 81.0
   },
   {
    "id": "409191",
    "name": "Nikola Vlasic",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/59a64db7-c267-432d-9172-cf012b37c0b5/VLASIC-Nikola_409191?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-04",
    "height": 179.0,
    "weight": 79.0
   },
   {
    "id": "359381",
    "name": "Ivan Perisic",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/ba7ea3ab-0ef6-4cdd-834c-79a94739fe26/PERISIC-Ivan_359381?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-02-02",
    "height": 186.0,
    "weight": 77.0
   },
   {
    "id": "380005",
    "name": "Mario Pasalic",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/f3c0fd5e-6814-4acc-822a-2152e1cf79de/PASALIC-Mario_380005?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-09",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "482774",
    "name": "Martin Baturina",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/b9125a74-a920-4ffc-922b-68d57c524f4e/BATURINA-Martin_482774?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-02-16",
    "height": 172.0,
    "weight": 68.0
   },
   {
    "id": "485066",
    "name": "Petar Sucic",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/89c383c2-39ba-413d-b945-e42dd2d47c6d/SUCIC-Petar_485066?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-25",
    "height": 183.0,
    "weight": 68.0
   },
   {
    "id": "448164",
    "name": "Kristijan Jakic",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/8fdebc61-0e5a-4d33-bf9f-3dcb4b413f21/JAKIC-Kristijan_448164?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-14",
    "height": 181.0,
    "weight": 76.0
   },
   {
    "id": "485065",
    "name": "Toni Fruk",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/f71b54fc-4cf8-463c-b8cc-7837e3d9eca8/FRUK-Toni_390197?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-09",
    "height": 177.0,
    "weight": 74.0
   },
   {
    "id": "485068",
    "name": "Igor Matanovic",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/72c82c16-da76-4f5a-a849-5b84343228eb/MATANOVIC-Igor_485068?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-31",
    "height": 194.0,
    "weight": 90.0
   },
   {
    "id": "448160",
    "name": "Luka Sucic",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/4f4c5521-6b60-46e0-b93b-4aaae66f28f7/SUCIC-Luka_448160?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-08",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "499290",
    "name": "Luka Vuskovic",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/c905e324-dc60-4e79-a2a1-c06412f27aed/VUSKOVIC-Luka_499290?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-02-24",
    "height": 193.0,
    "weight": 86.0
   },
   {
    "id": "448179",
    "name": "Dominik Kotarski",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/4fb248c2-8d15-4415-ab5f-19bf997447ae/KOTARSKI-Dominik_448179?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-10",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "482931",
    "name": "Marco Pasalic",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/ea070001-3892-4086-89c9-fe982a729f5d/PASALIC-Marco_482931?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-14",
    "height": 177.0,
    "weight": 74.0
   },
   {
    "id": "389740",
    "name": "Martin Erlic",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/6353056f-aabd-49e1-9931-9b28010746a6/ERLIC-Martin_389740?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-24",
    "height": 192.0,
    "weight": 78.0
   },
   {
    "id": "389754",
    "name": "Petar Musa",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/5c33a6f7-32cc-4821-949d-42fa33de6f74/MUSA-Petar_389754?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-04",
    "height": 190.0,
    "weight": 81.0
   }
  ]
 },
 {
  "id": "1895293",
  "code": "CUW",
  "name": "Curaçao",
  "flag": "🇨🇼",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CUW",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#236CDA",
  "accent": "#FFCE1F",
  "host": false,
  "finalPosition": "Group E",
  "topScorers": [
   "Livano COMENENCIA"
  ],
  "players": [
   {
    "id": "390650",
    "name": "Eloy Room",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/5bd9ff87-6801-46d2-8f10-ca9eb3ea2ea4/ROOM-Eloy_390650?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-02-06",
    "height": 190.0,
    "weight": 81.0
   },
   {
    "id": "485379",
    "name": "Shurandy Sambo",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/4d41ae09-f81a-44fc-a53b-6e1b3e46521b/SAMBO-Shurandy_485379?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-19",
    "height": 174.0,
    "weight": 67.0
   },
   {
    "id": "431698",
    "name": "Jurien Gaari",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/4744d27b-6a5c-48be-a849-48facb6f6d6e/GAARI-Jurien_431698?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-12-23",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "466361",
    "name": "Roshon Van Eijma",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/f03c40c7-6eef-405c-a287-a1f7f1860a30/VAN-EIJMA-Roshon_466361?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-09",
    "height": 186.0,
    "weight": 80.0
   },
   {
    "id": "466350",
    "name": "Sherel Floranus",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/8baacb6b-39cd-4a37-8999-58dd5a1d9fec/FLORANUS-Sherel_466350?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-23",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "466359",
    "name": "Godfried Roemeratoe",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/6ed36808-8d19-481f-acce-2a905fbc364c/ROEMERATOE-Godfried_466359?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-19",
    "height": 178.0,
    "weight": 74.0
   },
   {
    "id": "466317",
    "name": "Juninho Bacuna",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/804768d8-badb-4492-9aef-1e523440aed4/BACUNA-Juninho_466317?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-07",
    "height": 178.0,
    "weight": 74.0
   },
   {
    "id": "494989",
    "name": "Livano Comenencia",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/860cc6e0-a995-485f-ae21-56b451017adf/COMENENCIA-Livano_494989?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-02-03",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "407680",
    "name": "Juergen Locadia",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/95d67c13-c534-48f4-a2de-e831079a0d42/LOCADIA-Juergen_407680?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-07",
    "height": 193.0,
    "weight": 79.0
   },
   {
    "id": "466340",
    "name": "Leandro Bacuna",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/ae48f357-6b53-4d49-b62f-fbfb4a041b62/BACUNA-Leandro_466340?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-08-21",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "424047",
    "name": "Jeremy Antonisse",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/cd0b7ee9-50b8-4043-a957-44df5860e935/ANTONISSE-Jeremy_424047?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-29",
    "height": 164.0,
    "weight": 70.0
   },
   {
    "id": "424056",
    "name": "Sontje Hansen",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/35e4773d-8580-4100-a87a-239c2e03e179/HANSEN-Sontje_424056?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-18",
    "height": 176.0,
    "weight": 68.0
   },
   {
    "id": "506473",
    "name": "Tyrese Noslin",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/5a1d79e4-2beb-4cc4-aa5d-adea0d32896c/NOSLIN-Tyrese_506473?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-11",
    "height": 182.0,
    "weight": 76.0
   },
   {
    "id": "466352",
    "name": "Kenji Gorre",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/115a2099-2406-4ca6-8905-91cc71efc98d/GORRE-Kenji_466352?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-29",
    "height": 174.0,
    "weight": 71.0
   },
   {
    "id": "485324",
    "name": "Arjany Martha",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/d909c1d1-c54d-4dfa-a951-979ae80e7b8a/MARTHA-Arjany_485324?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-09-04",
    "height": 180.0,
    "weight": 67.0
   },
   {
    "id": "466363",
    "name": "Jearl Margaritha",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c0d47ad2-fcb1-4d7f-b854-99b99cc0cadf/MARGARITHA-Jearl_466363?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-10",
    "height": 181.0,
    "weight": 73.0
   },
   {
    "id": "466346",
    "name": "Brandley Kuwas",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e68cdb21-7918-4de8-8a37-8d3f1127184b/KUWAS-Brandley_466346?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-09-19",
    "height": 181.0,
    "weight": 70.0
   },
   {
    "id": "511141",
    "name": "Armando Obispo",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/c2384459-9ca9-4dce-b232-5bbfbcd07316/OBISPO-Armando_511141?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-05",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "466372",
    "name": "Gervane Kastaneer",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/18bea3a9-68ef-4e35-ae04-2d494b39971e/KASTANEER-Gervane_466372?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-09",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "401023",
    "name": "Joshua Brenet",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/2069bb09-aaf0-41dc-81e4-a8f4df33b4e5/BRENET-Joshua_401023?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-20",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "485347",
    "name": "Tahith Chong",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/402300d2-89f5-4c17-97be-494664b73565/CHONG-Tahith_485347?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-04",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "466365",
    "name": "Kevin Felida",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/f9ebf1d2-90fe-4748-8788-19259714fc40/FELIDA-Kevin_466365?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-11",
    "height": 174.0,
    "weight": 69.0
   },
   {
    "id": "398569",
    "name": "Riechedly Bazoer",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/93fcbe0f-13ca-41f6-b453-447b45aea6ef/BAZOER-Riechedly_398569?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-12",
    "height": 184.0,
    "weight": 74.0
   },
   {
    "id": "506471",
    "name": "Deveron Fonville",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/29abb3b9-0b95-4101-ae19-0aa95d77e362/FONVILLE-Deveron_506471?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-16",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "466370",
    "name": "Tyrick Bodak",
    "pos": "GK",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/c806d05b-ee7a-482f-beb5-b9a6b5871a11/BODAK-Tyrick_466370?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-15",
    "height": 190.0,
    "weight": 75.0
   },
   {
    "id": "466382",
    "name": "Trevor Doornbusch",
    "pos": "GK",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/f6d2d4d6-a63d-4278-a520-5edb0dc24e69/DOORNBUSCH-Trevor_466382?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-06",
    "height": 188.0,
    "weight": 80.0
   }
  ]
 },
 {
  "id": "43995",
  "code": "CZE",
  "name": "Czechia",
  "flag": "🇨🇿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CZE",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FF2727",
  "accent": "#0035BC",
  "host": false,
  "finalPosition": "Group A",
  "topScorers": [
   "Michal SADILEK"
  ],
  "players": [
   {
    "id": "484012",
    "name": "Matej Kovar",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/06f2bdbf-6411-4f1c-885b-3c745e37363e/KOVAR-Matej_484012?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-17",
    "height": 196.0,
    "weight": 83.0
   },
   {
    "id": "433755",
    "name": "David Zima",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/945f505c-6f7b-4a43-acc1-5e3fa1bb52b3/ZIMA-David_433755?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-08",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "441167",
    "name": "Tomas Holes",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/25d4147e-8cc2-4262-bba5-3e47680a3f23/HOLES-Tomas_441167?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-31",
    "height": 180.0,
    "weight": 73.0
   },
   {
    "id": "486080",
    "name": "Robin Hranac",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/9550c125-89e2-497f-a098-bcdceb0243e7/HRANAC-Robin_486080?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-29",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "472908",
    "name": "Vladimir Coufal",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/e013f16f-8ada-4532-b3c4-b674b0e08cc9/COUFAL-Vladimir_472908?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-22",
    "height": 175.0,
    "weight": 76.0
   },
   {
    "id": "514334",
    "name": "Stepan Chaloupek",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/35d513e7-429b-44eb-b1bd-671a6a22bc83/CHALOUPEK-Stepan_514334?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-08",
    "height": 188.0,
    "weight": 68.0
   },
   {
    "id": "441170",
    "name": "Ladislav Krejci",
    "pos": "DF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/04ca9e4e-8ab3-458e-a689-2ac49094fb23/KREJCI-Ladislav_441170?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-20",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "358003",
    "name": "Vladimir Darida",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/201b5e1b-25b8-4cd6-a8fa-2678977172fe/DARIDA-Vladimir_358003?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-08-08",
    "height": 172.0,
    "weight": 67.0
   },
   {
    "id": "433754",
    "name": "Adam Hlozek",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/530c1ea8-c013-4858-bb7d-0b71a763a1a1/HLOZEK-Adam_433754?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-25",
    "height": 188.0,
    "weight": 84.0
   },
   {
    "id": "401481",
    "name": "Patrik Schick",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/725e8c7e-c712-45be-9e0a-ec5b121e84ad/SCHICK-Patrik_401481?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-24",
    "height": 191.0,
    "weight": 87.0
   },
   {
    "id": "441171",
    "name": "Jan Kuchta",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/e5ab58c0-de70-4e60-afdd-0cacec12decb/KUCHTA-Jan_441171?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-08",
    "height": 185.0,
    "weight": 86.0
   },
   {
    "id": "486081",
    "name": "Lukas Cerv",
    "pos": "MF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/87ce4b61-fd6d-4ca3-901d-6dfe039dd809/CERV-Lukas_486081?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-10",
    "height": 182.0,
    "weight": 72.0
   },
   {
    "id": "484003",
    "name": "Mojmir Chytil",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/8b7fe7be-c13f-4245-9a48-470a88d95aa9/CHYTIL-Mojmir_484003?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-29",
    "height": 187.0,
    "weight": 83.0
   },
   {
    "id": "483990",
    "name": "David Jurasek",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/4e32c53e-28e4-4757-ab4e-c7b18cee9bbf/JURASEK-David_483990?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-07",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "486082",
    "name": "Pavel Sulc",
    "pos": "FW",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/a45ca4c8-04d9-4321-a100-1e57b2d7bbda/SULC-Pavel_486082?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-29",
    "height": 177.0,
    "weight": 75.0
   },
   {
    "id": "441162",
    "name": "Jindrich Stanek",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/9351d9a7-4be7-4c59-8e0e-3f5fbca8ac7d/STANEK-Jindrich_441162?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-27",
    "height": 192.0,
    "weight": 90.0
   },
   {
    "id": "484011",
    "name": "Lukas Provod",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e5e6a265-9886-4e25-97c0-c4f2f230277d/PROVOD-Lukas_484011?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-23",
    "height": 191.0,
    "weight": 85.0
   },
   {
    "id": "433668",
    "name": "Michal Sadilek",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/00599f60-d24b-4377-b1c2-03bda4f835be/SADILEK-Michal_433668?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-31",
    "height": 169.0,
    "weight": 65.0
   },
   {
    "id": "483961",
    "name": "Tomas Chory",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/566b2c11-0ed7-4ad0-8e39-2e8a6fb4ba94/CHORY-Tomas_483961?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-26",
    "height": 199.0,
    "weight": 100.0
   },
   {
    "id": "441166",
    "name": "Jaroslav Zeleny",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/33dbf631-0d45-4f04-9feb-bf0c76ad9f8e/ZELENY-Jaroslav_441166?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-20",
    "height": 190.0,
    "weight": 81.0
   },
   {
    "id": "483936",
    "name": "David Doudera",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/04fa0573-e1fa-4158-a14d-7129641cc700/DOUDERA-David_483936?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-31",
    "height": 175.0,
    "weight": 66.0
   },
   {
    "id": "404885",
    "name": "Tomas Soucek",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/eb34bfe6-5b60-4771-a303-40f68231bbd2/SOUCEK-Tomas_404885?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-27",
    "height": 192.0,
    "weight": 82.0
   },
   {
    "id": "511118",
    "name": "Lukas Hornicek",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/d76a995c-dcd7-4219-a555-3336ac87b052/HORNICEK-Lukas_511118?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-13",
    "height": 198.0,
    "weight": 90.0
   },
   {
    "id": "523097",
    "name": "Alexandr Sojka",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/f8e5df75-7de8-4950-bb53-b1d950621d33/SOJKA-Alexandr_523097?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-04-02",
    "height": 188.0,
    "weight": 77.0
   },
   {
    "id": "506775",
    "name": "Hugo Sochurek",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/72b960f8-5b10-4a9d-8726-6525e2ee6796/SOCHUREK-Hugo_506775?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2008-06-07",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "519985",
    "name": "Denis Visinsky",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/60b4e376-f163-4918-8742-a2f6ada5fc84/VISINSKY-Denis_519985?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-21",
    "height": 178.0,
    "weight": 75.0
   }
  ]
 },
 {
  "id": "43854",
  "code": "CIV",
  "name": "Côte d'Ivoire",
  "flag": "🇨🇮",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/CIV",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#FF8A00",
  "accent": "#137A36",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Nicolas PEPE"
  ],
  "players": [
   {
    "id": "405873",
    "name": "Yahia Fofana",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c5bc8a38-479f-4c33-b8f6-9ab95bb45b57/FOFANA-Yahia_405873?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-21",
    "height": 194.0,
    "weight": 89.0
   },
   {
    "id": "477802",
    "name": "Ousmane Diomande",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/45b55597-6503-4470-a778-af125afb698a/DIOMANDE-Ousmane_477802?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-12-04",
    "height": 190.0,
    "weight": 94.0
   },
   {
    "id": "407343",
    "name": "Ghislain Konan",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/8b0c92b7-4756-42a3-8cc8-b997693ff4aa/KONAN-Ghislain_407343?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-27",
    "height": 176.0,
    "weight": 79.0
   },
   {
    "id": "335807",
    "name": "Jean Michael Seri",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/115c99fd-ddc4-4f97-bc20-2cb7dae80735/SERI-Jean-Michael_335807?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-19",
    "height": 168.0,
    "weight": 72.0
   },
   {
    "id": "430854",
    "name": "Wilfried Singo",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/3b02f719-a68a-46ae-a249-e7b6538a5714/SINGO-Wilfried_430854?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-25",
    "height": 182.0,
    "weight": 80.0
   },
   {
    "id": "405175",
    "name": "Seko Fofana",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/08197d78-88b8-458f-9ad9-de192f25313c/FOFANA-Seko_405175?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-05-07",
    "height": 185.0,
    "weight": 83.0
   },
   {
    "id": "477825",
    "name": "Odilon Kossounou",
    "pos": "DF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/c3d01f63-7112-4a0d-a50b-0d85927676e9/KOSSOUNOU-Odilon_477825?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-04",
    "height": 191.0,
    "weight": 83.0
   },
   {
    "id": "371609",
    "name": "Franck Kessie",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/2e649ed1-5e23-4de2-aafc-79fac130f5f0/KESSIE-Franck_371609?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-19",
    "height": 183.0,
    "weight": 90.0
   },
   {
    "id": "464103",
    "name": "Ange-Yoan Bonny",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/c2bd7f75-2634-437d-9b8e-45d23380a755/BONNY-Ange-Yoan_464103?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-25",
    "height": 189.0,
    "weight": 83.0
   },
   {
    "id": "477778",
    "name": "Simon Adingra",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/ba7341af-8a89-4260-9711-37bec1618ff2/ADINGRA-Simon_477778?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-01",
    "height": 175.0,
    "weight": 68.0
   },
   {
    "id": "510922",
    "name": "Yan Diomande",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/4218dafb-b39b-4640-ac2f-e1d9f104aa6a/DIOMANDE-Yan_510922?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-11-14",
    "height": 180.0,
    "weight": 76.0
   },
   {
    "id": "464133",
    "name": "Elye Wahi",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/088ceea5-0bdc-4615-9fc2-a99fe888fe44/WAHI-Elye_464133?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-01-02",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "486260",
    "name": "Christopher Operi",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/7ed2ec22-290b-40bb-a4a9-4c3374aa3e91/OPERI-Christopher_486260?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-04-29",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "477777",
    "name": "Oumar Diakite",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/1c9072f7-1c82-483b-9f41-a749332fff71/DIAKITE-Oumar_477777?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-12-20",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "430822",
    "name": "Amad Diallo",
    "pos": "FW",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/92354f59-681a-4409-b1eb-0e0744a78da8/DIALLO-Amad_430822?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-11",
    "height": 173.0,
    "weight": 72.0
   },
   {
    "id": "486259",
    "name": "Mohamed Kone",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/937ed103-c12b-4931-83f1-ee615a67858e/HASSAN-ALTAMBAKTI_403335?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-07",
    "height": 186.0,
    "weight": 78.0
   },
   {
    "id": "486317",
    "name": "Guela Doue",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/9c597f58-ad63-4248-ac8b-b36e71f7b811/DOUE-Guela_486317?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-17",
    "height": 187.0,
    "weight": 88.0
   },
   {
    "id": "430831",
    "name": "Ibrahim Sangare",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/daeaedd3-2c74-4fef-a968-2247f5ac962e/SANGARE-Ibrahim_430831?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-02",
    "height": 191.0,
    "weight": 77.0
   },
   {
    "id": "402261",
    "name": "Nicolas Pepe",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/1c7519d2-960c-4d19-83e7-40a155f1a8eb/PEPE-Nicolas_402261?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-05-29",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "486268",
    "name": "Emmanuel Agbadou",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/d092f8c9-f80e-40e0-ad73-bfa861784408/AGBADOU-Emmanuel_486268?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-17",
    "height": 185.0,
    "weight": 95.0
   },
   {
    "id": "419172",
    "name": "Evan Ndicka",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/e308dd93-4706-4ed9-80a2-1db8e4a52d6c/PAUGAIN-Wilguens_419172?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-20",
    "height": 192.0,
    "weight": 85.0
   },
   {
    "id": "485675",
    "name": "Evann Guessand",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/a5543d71-798f-42a0-aef9-201b86bc75c1/GUESSAND-Evann_485675?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-01",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "403090",
    "name": "Alban Lafont",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/4387ca2a-2c1e-4bee-baad-95e9485a4ba0/LAFONT-Alban_403090?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-23",
    "height": 196.0,
    "weight": 85.0
   },
   {
    "id": "506202",
    "name": "Bazoumana Toure",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/fa213cf7-928a-49ab-acc9-b6f5059b188c/TOURE-Bazoumana_506202?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-03-02",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "430834",
    "name": "Parfait Guiagon",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/675938a7-c82b-4d9f-8cf8-6e7a42146489/GUIAGON-Parfait_430834?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-22",
    "height": 165.0,
    "weight": 70.0
   },
   {
    "id": "514208",
    "name": "Christ Inao Oulai",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/a1bae10b-b280-4234-81c1-063fa931cd02/OULAI-Christ-Inao_514208?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-04-06",
    "height": 173.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "43927",
  "code": "ECU",
  "name": "Ecuador",
  "flag": "🇪🇨",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/ECU",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#FFD600",
  "accent": "#0032E3",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Nilson ANGULO"
  ],
  "players": [
   {
    "id": "441236",
    "name": "Hernan Galindez",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/679fc90e-2f98-4494-a4dd-f26442fae6d3/GALINDEZ-Hernan_441236?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-03-30",
    "height": 189.0,
    "weight": 94.0
   },
   {
    "id": "402979",
    "name": "Felix Torres",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/755ac13c-2122-42ff-b40a-4582be61e59e/TORRES-Felix_402979?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-11",
    "height": 187.0,
    "weight": 77.0
   },
   {
    "id": "424031",
    "name": "Piero Hincapie",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/b8f68e80-3057-4fbf-be1e-8cf885a713e1/HINCAPIE-Piero_424031?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-09",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "463465",
    "name": "Joel Ordonez",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/54a42d16-279a-4566-8c46-ac75d8ea095a/ORDONEZ-Joel_463465?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-04-21",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "419005",
    "name": "Jordy Alcivar",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/7f7492dc-4cdc-41c2-8acc-91ccad4d9664/ALCIVAR-Jordy_419005?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-05",
    "height": 168.0,
    "weight": 59.0
   },
   {
    "id": "448290",
    "name": "Willian Pacho",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/cda5e4c5-69a6-46ee-b6d1-230be57c4847/PACHO-Willian_448290?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-16",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "389782",
    "name": "Pervis Estupinan",
    "pos": "DF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/85df33e2-083f-4cef-9fa2-3a8fc7d29466/ESTUPINAN-Pervis_389782?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-21",
    "height": 175.0,
    "weight": 77.0
   },
   {
    "id": "448299",
    "name": "Anthony Valencia",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/b21d23fa-c045-4f5d-9721-59740e4006b2/VALENCIA-Anthony_448299?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-21",
    "height": 173.0,
    "weight": 66.0
   },
   {
    "id": "405920",
    "name": "John Yeboah",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/1fc64d7c-4383-4c61-bd76-f22f22b91a8f/YEBOAH-John_405920?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-23",
    "height": 170.0,
    "weight": 72.0
   },
   {
    "id": "463495",
    "name": "Kendry Paez",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/ee18ba2f-5e31-4e33-8739-f0d59033c409/PAEZ-Kendry_463495?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-05-04",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "448310",
    "name": "Kevin Rodriguez",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/c35d8b13-4ad6-45d8-853e-8d7f6bd98214/RODRIGUEZ-Kevin_448310?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-04",
    "height": 190.0,
    "weight": 82.0
   },
   {
    "id": "419002",
    "name": "Moises Ramirez",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/3a641146-b759-48d0-983f-b85bb1232cc4/RAMIREZ-Moises_419002?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-09",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "373400",
    "name": "Enner Valencia",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/4688cb2a-6446-4439-ba5f-e4db7b5a18c5/VALENCIA-Enner_373400?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-11-04",
    "height": 177.0,
    "weight": 75.0
   },
   {
    "id": "463468",
    "name": "Alan Minda",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/b43c46a0-9e62-4202-b9e4-c625b36afc16/MINDA-Alan_463468?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-14",
    "height": 174.0,
    "weight": 61.0
   },
   {
    "id": "424036",
    "name": "Pedro Vite",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/0eceba19-8ceb-4cbc-ba7c-81b158e277bd/VITE-Pedro_424036?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-09",
    "height": 172.0,
    "weight": 69.0
   },
   {
    "id": "402985",
    "name": "Jordy Caicedo",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/d4d93e2b-74aa-4bbf-89b2-22ebff655348/CAICEDO-Jordy_402985?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-18",
    "height": 186.0,
    "weight": 87.0
   },
   {
    "id": "402974",
    "name": "Angelo Preciado",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/2e9be79f-76b7-4f12-8ba0-c4c21ec8b39d/PRECIADO-Angelo_402974?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-18",
    "height": 174.0,
    "weight": 74.0
   },
   {
    "id": "463476",
    "name": "Denil Castillo",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/60f9a338-e7cb-45a0-a0ae-926740080bec/CASTILLO-Denil_463476?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-24",
    "height": 189.0,
    "weight": 76.0
   },
   {
    "id": "419020",
    "name": "Gonzalo Plata",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/743cc231-ab9e-45b7-8d59-ce8655280ae1/PLATA-Gonzalo_419020?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-01",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "448312",
    "name": "Nilson Angulo",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/b90df9f2-8054-4d40-b375-f7728a31a069/ANGULO-Nilson_448312?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-19",
    "height": 184.0,
    "weight": 70.0
   },
   {
    "id": "389784",
    "name": "Alan Franco",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/59ffe3d1-0963-44f5-861e-9eb6590d8fce/FRANCO-Alan_389784?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-21",
    "height": 175.0,
    "weight": 77.0
   },
   {
    "id": "448295",
    "name": "Gonzalo Valle",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/d67ebe06-be17-4735-a8a7-9659eb37cf37/VALLE-Gonzalo_448295?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-28",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "428885",
    "name": "Moises Caicedo",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/ae32bbc5-09f0-4743-ae0a-5b80461bdc79/CAICEDO-Moises_428885?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-11-02",
    "height": 178.0,
    "weight": 80.0
   },
   {
    "id": "514326",
    "name": "Jeremy Arevalo",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/9c839f83-e77a-4938-a764-95685591b367/AREVALO-Jeremy_514326?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-19",
    "height": 182.0,
    "weight": 90.0
   },
   {
    "id": "419003",
    "name": "Jackson Porozo",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/17ccf39c-5480-439a-be5f-90045606ca37/POROZO-Jackson_419003?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-04",
    "height": 192.0,
    "weight": 89.0
   },
   {
    "id": "463489",
    "name": "Yaimar Medina",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/84400276-88b5-4054-b0fb-f8206f384291/MEDINA-Yaimar_463489?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-11-05",
    "height": 173.0,
    "weight": 60.0
   }
  ]
 },
 {
  "id": "43855",
  "code": "EGY",
  "name": "Egypt",
  "flag": "🇪🇬",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/EGY",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#F1051F",
  "accent": "#242424",
  "host": false,
  "finalPosition": "Round of 16",
  "topScorers": [
   "MOSTAFA ZICO"
  ],
  "players": [
   {
    "id": "408948",
    "name": "Mohamed Elshenawy",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-12-18",
    "height": 191.0,
    "weight": 90.0
   },
   {
    "id": "369267",
    "name": "Yasser Ibrahim",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/028afc10-053b-443f-819c-d95ae0d46a55/YASSER-IBRAHIM_369267?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-02-10",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "408950",
    "name": "Mohamed Hany",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/04f8ef57-e16f-49de-b7d4-ad430c4c430c/MOHAMED-HANY_408950?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-02",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "483182",
    "name": "Hossam Abdelmaguid",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/406ef52d-c003-4108-b9c2-126b4ad8354b/HOSSAM-ABDELMAGUID_483182?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-30",
    "height": 193.0,
    "weight": 85.0
   },
   {
    "id": "344661",
    "name": "Ramy Rabia",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/403c9e6d-efe6-4917-86ea-c7eddc442208/RABIA-Ramy_344661?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-05-20",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "416902",
    "name": "Mohamed Abdelmoneim",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/5e36f80b-9432-444f-ac25-10cf792c341f/MOHAMED-ABDELMONEIM_416902?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-01",
    "height": 184.0,
    "weight": 75.0
   },
   {
    "id": "363863",
    "name": "Trezeguet",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/fd2622c8-9bd4-40f0-bb16-6b3311bb1811/TREZEGUET_363863?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-01",
    "height": 181.0,
    "weight": 77.0
   },
   {
    "id": "430482",
    "name": "Emam Ashour",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/6d203b10-285b-4800-b448-e34d2b3a3e09/EMAM-ASHOUR_430482?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-20",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "495488",
    "name": "Hamza Abdelkarim",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/e8c1e0e0-66da-4bfb-ace2-e040710da50c/HAMZA-ABDELKARIM_495488?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2008-01-01",
    "height": 182.0,
    "weight": 76.0
   },
   {
    "id": "344654",
    "name": "Mohamed Salah",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/8d5236b8-acac-4946-af8e-5b007bcfa284/MOHAMED-SALAH_344654?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-15",
    "height": 175.0,
    "weight": 79.0
   },
   {
    "id": "483161",
    "name": "Mostafa Zico",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/f417b544-6a3c-46a9-af78-d43d6cedcad1/MOSTAFA-ZICO_483161?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-04-27",
    "height": 179.0,
    "weight": 73.0
   },
   {
    "id": "424106",
    "name": "Haissem Hassan",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/88bef92d-4236-4445-9d6f-c2674e218a60/HAISSEM-HASSAN_424106?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-08",
    "height": 175.0,
    "weight": 80.0
   },
   {
    "id": "430477",
    "name": "Ahmed Fatouh",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/c22759e9-6346-4cb7-8611-74074421be7f/AHMED-FATOUH_430477?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-22",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "429095",
    "name": "Hamdy Fathy",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/2de277f5-cea7-47f9-9635-f9fb3a205c2a/HAMDY-FATHY_429095?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-29",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "407022",
    "name": "Karim Hafez",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/2cd7ce59-aa56-4018-8d9c-5628a27e13c4/KARIM-HAFEZ_407022?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-12",
    "height": 174.0,
    "weight": 74.0
   },
   {
    "id": "395860",
    "name": "Mahdy Soliman",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/90b92e39-b717-40c5-a2ab-05616ca017c8/MAHDY-SOLIMAN_395860?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-06-08",
    "height": 189.0,
    "weight": 90.0
   },
   {
    "id": "433469",
    "name": "Mohanad Lashin",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/55be7619-52f3-481a-8542-9832ba7c8e7d/MOHANAD-LASHIN_433469?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-29",
    "height": 186.0,
    "weight": 85.0
   },
   {
    "id": "433466",
    "name": "Nabil Donga",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/01dc0ada-6dcb-4f73-b81e-4103640705a8/NABIL-DONGA_433466?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-06",
    "height": 179.0,
    "weight": 74.0
   },
   {
    "id": "461788",
    "name": "Marawan Attia",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/cf051f82-c8a8-4328-9439-2ab64f616b83/MARAWAN-ATTIA_461788?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-01",
    "height": 176.0,
    "weight": 80.0
   },
   {
    "id": "430465",
    "name": "Ibrahim Adel",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/7486073a-56eb-4963-9bca-1036e8b187f0/IBRAHIM-ADEL_430465?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-23",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "483183",
    "name": "Mahmoud Saber",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/f1c9f887-0fab-447c-9c91-33aba2c2dbe1/MAHMOUD-SABER_483183?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-30",
    "height": 170.0,
    "weight": 75.0
   },
   {
    "id": "430476",
    "name": "Omar Marmoush",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/a3f5a36a-57b4-407b-a07e-7b5f6d19af5b/OMAR-MARMOUSH_430476?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-07",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "416906",
    "name": "Mostafa Shoubir",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/0fa52c2d-3a6c-49cf-ac83-ddc4a08d57e3/MOSTAFA-SHOUBIR_416906?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-15",
    "height": 195.0,
    "weight": 92.0
   },
   {
    "id": "506124",
    "name": "Tarek Alaa",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/9bbd4a65-1d5e-4383-b5d5-cf60bbdcec1d/TAREK-ALAA_506124?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-05",
    "height": 178.0,
    "weight": 65.0
   },
   {
    "id": "433461",
    "name": "Zizo",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/93b944be-7bd7-4c1d-807e-7b8e2cbc2a12/ZIZO_433461?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-10",
    "height": 175.0,
    "weight": 76.0
   },
   {
    "id": "512079",
    "name": "Mohamed Alaa",
    "pos": "GK",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/6a209a18-784b-401d-af68-4c768a814a36/MOHAMED-ALAA_512079?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-01",
    "height": 188.0,
    "weight": 76.0
   }
  ]
 },
 {
  "id": "43942",
  "code": "ENG",
  "name": "England",
  "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/ENG",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FFFFFF",
  "accent": "#CE1124",
  "host": false,
  "finalPosition": "Third",
  "topScorers": [
   "Jude BELLINGHAM"
  ],
  "players": [
   {
    "id": "336022",
    "name": "Jordan Pickford",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/5f9b3bbf-edb5-4956-bce7-2d0a8e77f6ab/PICKFORD-Jordan_336022?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-07",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "403049",
    "name": "Ezri Konsa",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/54b28723-92e1-42e8-97b5-162f5099cf60/KONSA-Ezri_403049?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-23",
    "height": 180.0,
    "weight": 76.0
   },
   {
    "id": "463780",
    "name": "Nico Oreilly",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/6a6be1c6-3496-49ba-81ca-354bdb2f404c/OREILLY-Nico_390761?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-21",
    "height": 177.0,
    "weight": 74.0
   },
   {
    "id": "433097",
    "name": "Declan Rice",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/acb98657-fa9b-4202-bc38-075a97b5bf78/RICE-Declan_433097?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-14",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "369434",
    "name": "John Stones",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/bb455f6a-d793-44ef-92b8-bd1aff6d14d6/STONES-John_369434?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-28",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "405841",
    "name": "Marc Guehi",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/c9686f87-8abd-45fb-a1e0-321ee8470dd6/GUEHI-Marc_405841?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-13",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "448196",
    "name": "Bukayo Saka",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/b1182d25-62ad-4ad8-8bae-2b7577569484/MUMIN-Abdul_441336?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-09-05",
    "height": 178.0,
    "weight": 65.0
   },
   {
    "id": "481610",
    "name": "Elliot Anderson",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/8da5855f-c957-4151-94a0-731e9714249f/ANDERSON-Elliot_481610?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-06",
    "height": 179.0,
    "weight": 69.0
   },
   {
    "id": "369419",
    "name": "Harry Kane",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/5ad83fe6-1139-4f92-a97c-669052eb1755/KANE-Harry_369419?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-07-28",
    "height": 190.0,
    "weight": 91.0
   },
   {
    "id": "448202",
    "name": "Jude Bellingham",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/d711b37f-ec06-4ea7-bb52-50ba0a42ef67/BELLINGHAM-Jude_448202?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-29",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "401470",
    "name": "Marcus Rashford",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/1c89a3e5-8d8f-474f-a0fe-8c39faa3dc8d/RASHFORD-Marcus_401470?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-31",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "439691",
    "name": "Trevoh Chalobah",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/7fa89d9b-c648-4789-ab66-f00a2fbf56df/CHALOBAH-Trevoh_439691?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-05",
    "height": 192.0,
    "weight": 86.0
   },
   {
    "id": "403046",
    "name": "Dean Henderson",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/acb3f8de-1176-40ef-99c2-e671120fbde0/HENDERSON-Dean_403046?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-12",
    "height": 188.0,
    "weight": 85.0
   },
   {
    "id": "356189",
    "name": "Jordan Henderson",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/95e802dd-2731-42ff-97ce-b92c47954fa1/HENDERSON-Jordan_356189?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-06-17",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "494345",
    "name": "Dan Burn",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/ac44e40e-162d-4459-94b6-8971a032e371/BURN-Dan_494345?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-05-09",
    "height": 201.0,
    "weight": 87.0
   },
   {
    "id": "482621",
    "name": "Kobbie Mainoo",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/add399f5-3af6-4ce6-b078-8595e805f1be/MAINOO-Kobbie_482621?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-04-19",
    "height": 183.0,
    "weight": 71.0
   },
   {
    "id": "492716",
    "name": "Morgan Rogers",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/426bfdb9-3999-4826-81b8-dd33691a45a2/ROGERS-Morgan_492716?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-26",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "448189",
    "name": "Anthony Gordon",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/bb7bbfe0-791d-408e-a2c2-f33156fce3e8/GORDON-Anthony_448189?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-24",
    "height": 182.0,
    "weight": 68.0
   },
   {
    "id": "448203",
    "name": "Ollie Watkins",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/876d6c91-be07-4b54-a86d-d73e2ef52d8f/WATKINS-Ollie_448203?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-30",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "489732",
    "name": "Noni Madueke",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/115733f4-8e52-477a-867f-063f1e2c7752/MADUEKE-Noni_489732?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-10",
    "height": 182.0,
    "weight": 83.0
   },
   {
    "id": "473113",
    "name": "Eberechi Eze",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/c08bf1d9-1dce-4862-b810-2f9e198a4950/EZE-Eberechi_473113?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-29",
    "height": 178.0,
    "weight": 73.0
   },
   {
    "id": "448198",
    "name": "Ivan Toney",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/720c0b56-6b1c-49aa-8c9d-5aec2c23c673/TONEY-Ivan_448198?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-16",
    "height": 185.0,
    "weight": 85.0
   },
   {
    "id": "485080",
    "name": "James Trafford",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/f923135f-5d11-46cb-90a3-517f74cb4c76/TRAFFORD-James_485080?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-10",
    "height": 197.0,
    "weight": 83.0
   },
   {
    "id": "439641",
    "name": "Reece James",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/1ffcc3c3-fdf3-4b61-9ac5-299213771a62/JAMES-Reece_439641?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-08",
    "height": 180.0,
    "weight": 92.0
   },
   {
    "id": "506329",
    "name": "Djed Spence",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/03356baa-b368-4192-bf86-ad3033e57ad2/SPENCE-Djed_506329?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-09",
    "height": 184.0,
    "weight": 71.0
   },
   {
    "id": "463809",
    "name": "Jarell Quansah",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/60c5fb68-c640-45dc-a493-75e1d9f3450c/QUANSAH-Jarell_463809?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-01-29",
    "height": 190.0,
    "weight": 79.0
   }
  ]
 },
 {
  "id": "43946",
  "code": "FRA",
  "name": "France",
  "flag": "🇫🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/FRA",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#00418F",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Fourth",
  "topScorers": [
   "Kylian MBAPPE"
  ],
  "players": [
   {
    "id": "483471",
    "name": "Brice Samba",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/99fa69d0-8c6e-4c11-a78c-98a70aa322f8/SAMBA-Brice_483471?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-25",
    "height": 187.0,
    "weight": 85.0
   },
   {
    "id": "464055",
    "name": "Malo Gusto",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/a747375e-cd17-4ef2-8241-fa7b9a7dab2b/GUSTO-Malo_464055?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-19",
    "height": 179.0,
    "weight": 77.0
   },
   {
    "id": "368860",
    "name": "Lucas Digne",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/70e09388-6736-4f6c-85cf-0aa2017a6b18/DIGNE-Lucas_368860?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-07-20",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "389876",
    "name": "Dayot Upamecano",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/daae69ae-72e0-4e42-812f-d19d74d12478/UPAMECANO-Dayot_389876?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-27",
    "height": 186.0,
    "weight": 87.0
   },
   {
    "id": "430707",
    "name": "Jules Kounde",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/31b384b6-20b7-4629-ab33-aa67cf403fc3/KOUNDE-Jules_430707?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-12",
    "height": 178.0,
    "weight": 82.0
   },
   {
    "id": "485677",
    "name": "Manu Kone",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/fab8dcfa-7c16-4c88-adeb-51cf932e3abc/KONE-Manu_485677?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-17",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "398680",
    "name": "Ousmane Dembele",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/e6eee717-fd8c-4f8f-a7e0-c4f978fe327f/DEMBELE-Ousmane_398680?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-15",
    "height": 179.0,
    "weight": 71.0
   },
   {
    "id": "405893",
    "name": "Aurelien Tchouameni",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/8575fee6-68ae-4be0-9529-7e5c392e06e6/TCHOUAMENI-Aurelien_405893?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-27",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "403109",
    "name": "Marcus Thuram",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/6d9fa458-dba9-47da-87d9-83749fdfce9d/THURAM-Marcus_403109?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-06",
    "height": 192.0,
    "weight": 88.0
   },
   {
    "id": "389867",
    "name": "Kylian Mbappe",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/66f6087d-9563-4644-8f10-5614ef6e1e51/MBAPPE-Kylian_389867?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-20",
    "height": 180.0,
    "weight": 81.0
   },
   {
    "id": "485655",
    "name": "Michael Olise",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/979cc206-e23b-4b21-8d40-843607ba8964/OLISE-Michael_485655?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-12-12",
    "height": 184.0,
    "weight": 76.0
   },
   {
    "id": "484860",
    "name": "Bradley Barcola",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/10e80ef7-3aa9-4c07-9639-e8bc04828d31/BARCOLA-Bradley_484860?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-02",
    "height": 187.0,
    "weight": 72.0
   },
   {
    "id": "398681",
    "name": "Ngolo Kante",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/355040a8-6b40-452b-92af-7c22f91cb87c/KANTE-Ngolo_398681?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-03-29",
    "height": 171.0,
    "weight": 70.0
   },
   {
    "id": "402047",
    "name": "Adrien Rabiot",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/2daab6cd-9fc6-4a46-acd6-82974aab8415/RABIOT-Adrien_402047?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-04-03",
    "height": 191.0,
    "weight": 80.0
   },
   {
    "id": "419166",
    "name": "Ibrahima Konate",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/de7e635e-41b2-4383-9fbf-d38e6c737d51/KONATE-Ibrahima_419166?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-25",
    "height": 194.0,
    "weight": 95.0
   },
   {
    "id": "448332",
    "name": "Mike Maignan",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/3f92a933-a22d-4f58-8f4f-b51370aeacf4/MAIGNAN-Mike_448332?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-07-03",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "419177",
    "name": "William Saliba",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/242125e7-67c3-4fcd-b0cc-6c5984c319f4/SALIBA-William_419177?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-24",
    "height": 192.0,
    "weight": 85.0
   },
   {
    "id": "483549",
    "name": "Warren Zaire-emery",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/c4237ad3-cb10-4854-b9de-54126267d251/ZAIRE-EMERY-Warren_483549?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-03-08",
    "height": 176.0,
    "weight": 74.0
   },
   {
    "id": "408042",
    "name": "Theo Hernandez",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/6f76533f-feca-4811-a010-e6e296b29db8/HERNANDEZ-Theo_408042?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-06",
    "height": 184.0,
    "weight": 87.0
   },
   {
    "id": "464114",
    "name": "Desire Doue",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/ca4e60df-4c45-48e9-89e4-70ce6ac3b3b1/DOUE-Desire_464114?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-06-03",
    "height": 182.0,
    "weight": 81.0
   },
   {
    "id": "411470",
    "name": "Lucas Hernandez",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/6ce8ced5-3b91-4a38-80ca-730e4a2ceb57/HERNANDEZ-Lucas_411470?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-14",
    "height": 184.0,
    "weight": 80.0
   },
   {
    "id": "403094",
    "name": "Jean-Philippe Mateta",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/91ab0f40-08d4-44bc-8b5b-dddb63b440bf/MATETA-Jean-Philippe_403094?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-28",
    "height": 192.0,
    "weight": 80.0
   },
   {
    "id": "464127",
    "name": "Robin Risser",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/834e2e38-78ec-4e02-98a8-dbc085a9637c/RISSER-Robin_464127?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-12-02",
    "height": 193.0,
    "weight": 81.0
   },
   {
    "id": "431861",
    "name": "Rayan Cherki",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/e1fe82ba-026b-4f05-87ba-c1fb49f670e5/CHERKI-Rayan_431861?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-08-17",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "485666",
    "name": "Maghnes Akliouche",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/86a154a1-3ed6-46b8-977c-3a04925c39bc/AKLIOUCHE-Maghnes_485666?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-25",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "405881",
    "name": "Maxence Lacroix",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/a250ee2e-c181-46bb-b565-27d12a7b1878/LACROIX-Maxence_405881?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-06",
    "height": 192.0,
    "weight": 83.0
   }
  ]
 },
 {
  "id": "43948",
  "code": "GER",
  "name": "Germany",
  "flag": "🇩🇪",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/GER",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#1F1F1F",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Deniz UNDAV"
  ],
  "players": [
   {
    "id": "228912",
    "name": "Manuel Neuer",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/e3701d06-66b5-4728-8bad-fea05319b6b8/NEUER-Manuel_228912?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1986-03-27",
    "height": 193.0,
    "weight": 92.0
   },
   {
    "id": "379955",
    "name": "Antonio Ruediger",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/88c43fe2-0c78-437c-a2bf-388c3673c58c/RUEDIGER-Antonio_379955?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-03",
    "height": 190.0,
    "weight": 86.0
   },
   {
    "id": "430658",
    "name": "Waldemar Anton",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/2bdd66d9-f9dc-44ab-8c6e-ededdb004f77/ANTON-Waldemar_430658?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-20",
    "height": 189.0,
    "weight": 82.0
   },
   {
    "id": "401378",
    "name": "Jonathan Tah",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/34f74ca0-1102-446c-b098-02decdf58b8d/TAH-Jonathan_401378?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-11",
    "height": 195.0,
    "weight": 94.0
   },
   {
    "id": "484849",
    "name": "Aleksandar Pavlovic",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/7cfb5f20-6f8a-4329-97a2-be3cb66fea0f/PAVLOVIC-Aleksandar_484849?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-05-03",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "386413",
    "name": "Joshua Kimmich",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/ada33dfd-5b01-4792-88f4-14c06641509e/KIMMICH-Joshua_386413?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-08",
    "height": 177.0,
    "weight": 74.0
   },
   {
    "id": "411367",
    "name": "Kai Havertz",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/1fdd4d11-97d1-4392-b345-5a5eecc54839/HAVERTZ-Kai_411367?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-11",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "379953",
    "name": "Leon Goretzka",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/a5e5e083-d89c-4be7-a367-8456e0f8cb35/GORETZKA-Leon_379953?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-06",
    "height": 189.0,
    "weight": 82.0
   },
   {
    "id": "491218",
    "name": "Jamie Leweling",
    "pos": "MF",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/a53f7aa4-eaba-4bb1-9654-e563adb10d2e/LEWELING-Jamie_491218?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-26",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "429642",
    "name": "Jamal Musiala",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/05f50027-268f-43ff-ba75-1b477b37ca60/MUSIALA-Jamal_429642?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-02-26",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "498416",
    "name": "Nick Woltemade",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/e93d4ee5-827d-47bc-b3d5-3f1c38e7293e/WOLTEMADE-Nick_498416?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-14",
    "height": 198.0,
    "weight": 84.0
   },
   {
    "id": "306538",
    "name": "Oliver Baumann",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/9da65f41-ea53-4209-b2f6-c59e69dbc193/BAUMANN-Oliver_306538?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-06-02",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "484848",
    "name": "Pascal Gross",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/c7eaa0cd-48e1-4349-a6d9-dd00553b7913/GROSS-Pascal_484848?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-06-15",
    "height": 181.0,
    "weight": 77.0
   },
   {
    "id": "484850",
    "name": "Maximilian Beier",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/34e90391-c4b4-4a96-9b57-71c45bb584c2/BEIER-Maximilian_484850?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-17",
    "height": 185.0,
    "weight": 73.0
   },
   {
    "id": "430667",
    "name": "Nico Schlotterbeck",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/3ece206c-50ae-4b63-ac21-a174f2fbb35a/SCHLOTTERBECK-Nico_430667?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-01",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "429640",
    "name": "Angelo Stiller",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/69c7b030-2ce8-479c-9cd4-a7d62e48d9a4/STILLER-Angelo_429640?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-04",
    "height": 183.0,
    "weight": 83.0
   },
   {
    "id": "430669",
    "name": "Florian Wirtz",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/3a120189-62cc-441f-b862-7fdd2a9abfa4/WIRTZ-Florian_430669?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-03",
    "height": 176.0,
    "weight": 73.0
   },
   {
    "id": "511015",
    "name": "Nathaniel Brown",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/68e13808-182e-46b6-a6ec-a54136a57c1b/BROWN-Nathaniel_511015?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-16",
    "height": 176.0,
    "weight": 67.0
   },
   {
    "id": "404353",
    "name": "Leroy Sane",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/097a6749-47b0-4285-a1f9-8aa0ac0e2c12/SANE-Leroy_404353?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-11",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "395471",
    "name": "Nadiem Amiri",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/3c1dcefe-5f38-479a-ac6a-091a86cb7663/AMIRI-Nadiem_395471?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-27",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "429639",
    "name": "Alexander Nuebel",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/9d30bb13-c082-4759-90e7-e0bde4305d1f/NUEBEL-Alexander_429639?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-30",
    "height": 193.0,
    "weight": 88.0
   },
   {
    "id": "430657",
    "name": "David Raum",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/ce3509c6-13ad-441a-8d05-9d42f8a4578c/RAUM-David_430657?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-22",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "492363",
    "name": "Felix Nmecha",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/9895941b-9be6-4900-a336-493f1237b0e6/NMECHA-Felix_492363?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-10",
    "height": 190.0,
    "weight": 89.0
   },
   {
    "id": "514188",
    "name": "Malick Thiaw",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/eaa37355-0eca-4954-845c-437aa602db42/THIAW-Malick_514188?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-08",
    "height": 194.0,
    "weight": 86.0
   },
   {
    "id": "475195",
    "name": "Assan Ouedraogo",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/3bdd0feb-2965-4dff-9aa1-22b6d769e90d/OUEDRAOGO-Assan_475195?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-05-09",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "484851",
    "name": "Deniz Undav",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/3ec30e08-a7eb-4781-aea8-0e9ff86ebef1/UNDAV-Deniz_484851?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-19",
    "height": 179.0,
    "weight": 84.0
   }
  ]
 },
 {
  "id": "43860",
  "code": "GHA",
  "name": "Ghana",
  "flag": "🇬🇭",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/GHA",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#FFC100",
  "accent": "#CE1126",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Derrick LUCKASSEN"
  ],
  "players": [
   {
    "id": "386473",
    "name": "Lawrence Ati Zigi",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/ff31f89d-7f19-4a3e-b213-6c943ec77fb4/ZIGI-Lawrence-Ati_386473?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-29",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "448522",
    "name": "Alidu Seidu",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/d37bf93a-6fc3-483d-be08-32032b5956bc/SEIDU-Alidu_448522?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-04",
    "height": 173.0,
    "weight": 68.0
   },
   {
    "id": "506279",
    "name": "Caleb Yirenkyi",
    "pos": "MF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/3c283bda-a2ed-4c1d-9115-aef0cc7dac97/YIRENKYI-Caleb_506279?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-01-15",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "494351",
    "name": "Jonas Adjetey",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/59b24298-f09f-4f11-afe4-805c459e6fa2/ADJETEY-Jonas_494351?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-12-13",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "369089",
    "name": "Thomas Partey",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/4973b241-e78b-4c13-b699-66c8c16f882a/PARTEY-Thomas_369089?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-06-13",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "441336",
    "name": "Abdul Mumin",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/394452a3-57aa-4ce7-b506-9ba8de7254eb/MUMIN-Abdul_441336?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-06",
    "height": 188.0,
    "weight": 60.0
   },
   {
    "id": "441342",
    "name": "Abdul Fatawu",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/c76bdca8-f959-4934-8ecf-47d38aac600c/ISSAHAKU-Fatawu_441342?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-08",
    "height": 177.0,
    "weight": 73.0
   },
   {
    "id": "507253",
    "name": "Kwasi Sibo",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/a61e2a7d-38de-46d5-888b-1ad713a329c4/SIBO-Kwasi_507253?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-24",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "353235",
    "name": "Jordan Ayew",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/527a870c-dad4-474a-91a3-3ccac43d3ce7/AYEW-Jordan_353235?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-09-11",
    "height": 182.0,
    "weight": 88.0
   },
   {
    "id": "486213",
    "name": "Brandon Thomas-asante",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/d80ceb13-447c-4de1-b0c2-09b570b3e6ef/THOMAS-ASANTE-Brandon_486213?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-29",
    "height": 182.0,
    "weight": 72.0
   },
   {
    "id": "448531",
    "name": "Antoine Semenyo",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/c0b6a316-ecf6-4944-b8fc-ccdd60b15a5a/SEMENYO-Antoine_448531?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-07",
    "height": 185.0,
    "weight": 74.0
   },
   {
    "id": "506277",
    "name": "Joseph Anang",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/ddb39257-eec9-4097-bc08-6f1dbe034dec/ANANG-Joseph_506277?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-08",
    "height": 190.0,
    "weight": 74.0
   },
   {
    "id": "494350",
    "name": "Christopher Bonsu Baah",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/a4046f4f-5e32-45b7-8ff0-1c42ba9466b7/BAAH-Christopher-Bonsu_494350?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-12-14",
    "height": 172.0,
    "weight": 76.0
   },
   {
    "id": "441333",
    "name": "Gideon Mensah",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/3aed0bc7-4974-4bc1-9cc9-bb764bb91d3e/MENSAH-Gideon_441333?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-18",
    "height": 178.0,
    "weight": 64.0
   },
   {
    "id": "441341",
    "name": "Elisha Owusu",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/7b2e13d2-e407-4c8a-8e7d-e465d933bef5/OWUSU-Elisha_441341?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-07",
    "height": 182.0,
    "weight": 76.0
   },
   {
    "id": "494349",
    "name": "Benjamin Asare",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/59f40ed7-650e-48ef-8f42-8a8a326b0504/ASARE-Benjamin_494349?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-07-13",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "367536",
    "name": "Baba Rahman",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/3aa4be07-45b8-4c6c-9c82-e1e7d801e531/RAHMAN-Baba_367536?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-07-02",
    "height": 179.0,
    "weight": 75.0
   },
   {
    "id": "486150",
    "name": "Jerome Opoku",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/03ddfb51-4c65-457f-b234-eb2a795b01d2/OPOKU-Jerome_486150?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-14",
    "height": 197.0,
    "weight": 75.0
   },
   {
    "id": "411376",
    "name": "Inaki Williams",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/2335d9cb-66fa-4e9a-a167-834ac3541e00/WILLIAMS-Inaki_411376?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-15",
    "height": 186.0,
    "weight": 76.0
   },
   {
    "id": "523173",
    "name": "Augustine Boakye",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/643463a2-4d0b-477a-889a-21eaf36cdf46/BOAKYE-Augustine_523173?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-03",
    "height": 178.0,
    "weight": 78.0
   },
   {
    "id": "511022",
    "name": "Kojo Peprah Oppong",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/d83d28af-b1f0-4b41-acec-6b3dfd760fb2/OPPONG-Kojo-Peprah_511022?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-06-04",
    "height": 185.0,
    "weight": 72.0
   },
   {
    "id": "448523",
    "name": "Kamaldeen Sulemana",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/ba6f9998-366d-4e8f-b7ca-e387f1aabdcd/SULEMANA-Kamaldeen_448523?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-15",
    "height": 174.0,
    "weight": 68.0
   },
   {
    "id": "520037",
    "name": "Derrick Luckassen",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/c70d2790-8764-47a0-8c27-a9e7f74563a0/LUCKASSEN-Derrick_520037?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-07-03",
    "height": 188.0,
    "weight": 75.0
   },
   {
    "id": "448525",
    "name": "Ernest Nuamah",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/1561f6b3-4537-41a1-8803-367ec4c80519/NUAMAH-Ernest_448525?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-11-01",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "514401",
    "name": "Prince Adu",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/fe89d2b1-ecd5-471d-a730-a1704b275019/ADU-Prince_514401?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-09-23",
    "height": 179.0,
    "weight": 74.0
   },
   {
    "id": "520039",
    "name": "Marvin Senaya",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/5b3249dc-6e9d-490b-be47-93a59fd3d069/SENAYA-Marvin_520039?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-28",
    "height": 181.0,
    "weight": 78.0
   }
  ]
 },
 {
  "id": "43908",
  "code": "HAI",
  "name": "Haiti",
  "flag": "🇭🇹",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/HAI",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#0013BA",
  "accent": "#D21034",
  "host": false,
  "finalPosition": "Group C",
  "topScorers": [
   "Wilson Isidor"
  ],
  "players": [
   {
    "id": "295922",
    "name": "Johny Placide",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/3b4c1123-62c6-4267-9d22-6d138e461a54/PLACIDE-Johny_295922?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-01-29",
    "height": 181.0,
    "weight": 76.0
   },
   {
    "id": "397775",
    "name": "Carlens Arcus",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/924dd9c4-2333-4662-be95-df5d3d551368/ARCUS-Carlens_397775?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-28",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "506481",
    "name": "Keeto Thermoncy",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/012553fc-773a-4fca-a30d-468777a287de/THERMONCY-Keeto_506481?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-03-29",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "275917",
    "name": "Ricardo Ade",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/188e1d63-5bfa-450a-b202-730221c18fe1/ADE-Ricardo_275917?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-05-21",
    "height": 190.0,
    "weight": 70.0
   },
   {
    "id": "448363",
    "name": "Hannes Delcroix",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/4b98bc6d-0a33-4ad0-b0fc-18ba00c15e1c/DELCROIX-Hannes_448363?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-28",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "424556",
    "name": "Carl Sainte",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/338f9a41-36d4-4f87-8425-9d5fdc30ac35/SAINTE-Carl_424556?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-09",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "466865",
    "name": "Derrick Etienne",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/1ddc26ef-11b7-4086-8386-49f6c6bf027c/ETIENNE-Derrick_466865?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-25",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "489300",
    "name": "Martin Experience",
    "pos": "DF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/d3101d94-a275-4ecc-9b0c-63688841159d/EXPERIENCE-Martin_489300?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-09",
    "height": 178.0,
    "weight": 79.0
   },
   {
    "id": "394993",
    "name": "Duckens Nazon",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/93e74f55-211b-4332-8b5c-d328eb02d026/NAZON-Duckens_394993?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-07",
    "height": 181.0,
    "weight": 79.0
   },
   {
    "id": "430697",
    "name": "Jean-Ricner Bellegarde",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/29f38f6c-fac7-4844-8656-c18527ebe792/BELLEGARDE-Jean-Ricner_430697?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-27",
    "height": 170.0,
    "weight": 66.0
   },
   {
    "id": "481027",
    "name": "Louicius Deedson",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/3838199f-c956-4b7c-a728-eef76a086a78/DEEDSON-Louicius_481027?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-11",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "466835",
    "name": "Alexandre Pierre",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/68889bed-7acd-4e67-a3bd-a18a300e70a0/PIERRE-Alexandre_466835?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-25",
    "height": 190.0,
    "weight": 79.0
   },
   {
    "id": "466844",
    "name": "Markhus Lacroix",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/d7492aa1-5f11-45df-9059-0075ef046a0a/LACROIX-Markhus_466844?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-10-14",
    "height": 175.0,
    "weight": 67.0
   },
   {
    "id": "466862",
    "name": "Garven Metusala",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/264fbdf9-369e-4794-b7b4-461fb346a6ab/GARVEN-METUSALA_466862?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-31",
    "height": 186.0,
    "weight": 76.0
   },
   {
    "id": "485664",
    "name": "Ruben Providence",
    "pos": "FW",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/c510536e-4614-459d-9780-060a5e3631ad/PROVIDENCE-Ruben_485664?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-07",
    "height": 178.0,
    "weight": 73.0
   },
   {
    "id": "485676",
    "name": "Lenny Joseph",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/ffcd4548-d3d0-42ca-a926-95fbda75d26a/JOSEPH-Lenny_485676?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-12",
    "height": 182.0,
    "weight": 70.0
   },
   {
    "id": "466838",
    "name": "Danley Jean Jacques",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/948f9361-348d-4c5d-a26f-83205cae2f6b/JEAN-JACQUES-Danley_466838?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-20",
    "height": 182.0,
    "weight": 72.0
   },
   {
    "id": "405879",
    "name": "Wilson Isidor",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/226c4315-372a-4dcf-8a1c-d4f8dc646419/ISIDOR-Wilson_405879?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-08-27",
    "height": 184.0,
    "weight": 72.0
   },
   {
    "id": "506483",
    "name": "Yassin Fortune",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/8c508739-1d44-49e5-8395-dbba0ff45072/FORTUNE-Yassin_506483?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-30",
    "height": 186.0,
    "weight": 73.0
   },
   {
    "id": "431693",
    "name": "Frantzdy Pierrot",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/0faa5cdb-4727-42be-b2b8-cedf04a37dd6/PIERROT-Frantzdy_431693?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-03-29",
    "height": 194.0,
    "weight": 78.0
   },
   {
    "id": "510757",
    "name": "Josue Casimir",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/4a02cdae-6685-4a04-a779-8472e1b0ee39/CASIMIR-Josue_510757?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-09-24",
    "height": 178.0,
    "weight": 69.0
   },
   {
    "id": "431781",
    "name": "Jean-Kevin Duverne",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/00dad9f5-0949-43df-a856-1ce364adf673/DUVERNE-Jean-Kevin_431781?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-07-12",
    "height": 184.0,
    "weight": 77.0
   },
   {
    "id": "466853",
    "name": "Josue Duverger",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/7f30e7f0-2c85-4fa5-aa66-09d5bd74f435/DUVERGER-Josue_466853?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-27",
    "height": 187.0,
    "weight": 76.0
   },
   {
    "id": "498439",
    "name": "Wilguens Paugain",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/7f7dae44-300a-405b-81be-f29cef6c0670/PAUGAIN-Wilguens_419172?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-24",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "523215",
    "name": "Dominique Simon",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/a6ab25e1-5ffa-478b-9a8b-e33411873483/SIMON-Dominique_523215?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-29",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "485409",
    "name": "Woodensky Pierre",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/72f8c310-2cf0-4329-a479-f2b2871201d7/PIERRE-Woodensky_485409?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-12-30",
    "height": 177.0,
    "weight": 76.0
   }
  ]
 },
 {
  "id": "43817",
  "code": "IRN",
  "name": "IR Iran",
  "flag": "🇮🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/IRN",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#DF1818",
  "accent": "#239F40",
  "host": false,
  "finalPosition": "Group G",
  "topScorers": [
   "Ramin REZAEIAN"
  ],
  "players": [
   {
    "id": "380007",
    "name": "Alireza Beiranvand",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c8cf4e84-2bd2-4e20-bb73-c7f14a935b73/BEIRANVAND-Alireza_380007?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-09-21",
    "height": 195.0,
    "weight": 88.0
   },
   {
    "id": "448505",
    "name": "Saleh Hardani",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/0357126d-f784-46a7-901d-33d54b66598b/HARDANI-Saleh_448505?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-26",
    "height": 176.0,
    "weight": 68.0
   },
   {
    "id": "288961",
    "name": "Ehsan Hajisafi",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/6567ec6b-b63d-4163-8729-6e9ad25e32f7/HAJISAFI-Ehsan_288961?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-02-25",
    "height": 178.0,
    "weight": 83.0
   },
   {
    "id": "346743",
    "name": "Shoja Khalilzadeh",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/509a4e4e-b242-4488-a334-84faac974457/KHALILZADEH-Shoja_346743?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-05-14",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "390537",
    "name": "Milad Mohammadi",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/ed36d5fa-f6ab-4e3c-8bdd-1c5cf555f225/MOHAMMADI-Milad_390537?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-09-29",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "371736",
    "name": "Saeid Ezatolahi",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/a2e8983e-9596-49b3-8c5c-e398d66e27c5/EZATOLAHI-Saeid_371736?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-01",
    "height": 189.0,
    "weight": 89.0
   },
   {
    "id": "379886",
    "name": "Alireza Jahanbakhsh",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/1bea8439-0136-4f96-ae79-7d165c648b4a/JAHANBAKHSH-Alireza_379886?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-08-11",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "448497",
    "name": "Mohammad Mohebbi",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/aef63530-cc2b-4b8e-b06b-6c0a9fb90ec0/MOHEBBI-Mohammad_448497?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-20",
    "height": 187.0,
    "weight": 83.0
   },
   {
    "id": "388475",
    "name": "Mehdi Taremi",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/0d942331-39fb-421e-8a8d-d1f875958559/TAREMI-Mehdi_388475?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-07-18",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "403236",
    "name": "Mehdi Ghayedi",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/df931c9f-862e-411a-bc23-35af4d0d1bd1/GHAYEDI-Mehdi_403236?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-05",
    "height": 166.0,
    "weight": 60.0
   },
   {
    "id": "416989",
    "name": "Ali Alipour",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/8d61af68-9b44-4ee7-8cc0-a8fd6707a019/ALIPOUR-Ali_416989?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-11-11",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "448507",
    "name": "Payam Niazmand",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/5a4d3867-6d31-4e40-8718-312350b29fb4/NIAZMAND-Payam_448507?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-04-06",
    "height": 193.0,
    "weight": 93.0
   },
   {
    "id": "390534",
    "name": "Hossein Kanani",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/20ec6667-ff1b-4fb3-8128-ecf2eb1c6e18/KANANI-Hossein_390534?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-23",
    "height": 188.0,
    "weight": 89.0
   },
   {
    "id": "411644",
    "name": "Saman Ghoddos",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/96d480ac-42c5-4dd6-a2f0-6220ea1a0f4b/GHODDOS-Saman_411644?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-09-06",
    "height": 176.0,
    "weight": 77.0
   },
   {
    "id": "406595",
    "name": "Roozbeh Cheshmi",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/ecf8d94c-609d-4a5c-8375-8c8e92629a59/CHESHMI-Roozbeh_406595?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-07-24",
    "height": 192.0,
    "weight": 82.0
   },
   {
    "id": "390535",
    "name": "Mehdi Torabi",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/f41b26d6-f1d1-47c2-ac56-dbce12a4baef/TORABI-Mehdi_390535?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-10",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "481181",
    "name": "Arya Yousefi",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/b648ca0d-4664-422c-af5f-da86c97e22b0/YOUSEFI-Arya_481181?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-04-22",
    "height": 181.0,
    "weight": 78.0
   },
   {
    "id": "405639",
    "name": "Amirhossein Hosseinzadeh",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/94c4de69-a055-4127-b21e-2071a84a4526/HOSSEINZADEH-Amirhossein_405639?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-30",
    "height": 178.0,
    "weight": 81.0
   },
   {
    "id": "489603",
    "name": "Ali Nemati",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/22c62fcc-736e-413e-a925-4bb643e3f007/NEMATI-Ali_489603?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-08",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "481180",
    "name": "Shahriyar Moghanloo",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/b0036654-fcd0-4f2c-b924-468f7f63828e/MOGHANLOO-Shahriyar_481180?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-12-21",
    "height": 189.0,
    "weight": 90.0
   },
   {
    "id": "482670",
    "name": "Mohammad Ghorbani",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/814c55cf-f0a4-4191-bb6d-81c14881ad72/GHORBANI-Mohammad_482670?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-07",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "314255",
    "name": "Hossein Hosseini",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/65922b90-e1f9-453b-aa7c-b436746fce3c/HOSSEINI-Hossein_314255?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-30",
    "height": 189.0,
    "weight": 83.0
   },
   {
    "id": "384797",
    "name": "Ramin Rezaeian",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/0aad53c3-8ade-4161-8605-09eed82b2c23/REZAEIAN-Ramin_384797?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-03-21",
    "height": 184.0,
    "weight": 75.0
   },
   {
    "id": "519837",
    "name": "Dennis Dargahi",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/11560f08-8fe3-4acb-b30f-cf1a0b2e83ad/DARGAHI-Dennis_519837?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-09",
    "height": 182.0,
    "weight": 82.0
   },
   {
    "id": "494429",
    "name": "Danial Iri",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/4a94990d-e4cd-4291-922c-b5bbb8a3254f/IRI-Danial_494429?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-26",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "475921",
    "name": "Amirmohammad Razaghinia",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/6526cdf8-5f63-4c78-b14d-9af4cdb862af/RAZAGHINIA-Amirmohammad_475921?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-04-11",
    "height": 187.0,
    "weight": 84.0
   }
  ]
 },
 {
  "id": "43818",
  "code": "IRQ",
  "name": "Iraq",
  "flag": "🇮🇶",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/IRQ",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#0D7053",
  "accent": "#1C1D24",
  "host": false,
  "finalPosition": "Group I",
  "topScorers": [
   "AYMEN HUSSEIN"
  ],
  "players": [
   {
    "id": "368744",
    "name": "Fahad Talib",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/70d6d7cd-dcf4-4952-bee5-0f0b869aead7/FAHAD-TALIB_368744?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-21",
    "height": 192.0,
    "weight": 86.0
   },
   {
    "id": "396158",
    "name": "Rebin Sulaka",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/0e08174c-879f-4de0-9709-8fdc59357236/REBIN-GHAREEB_396158?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-12",
    "height": 193.0,
    "weight": 84.0
   },
   {
    "id": "479553",
    "name": "Hussein Ali",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/9c065420-c134-4227-aef3-d6d07f0a9b8d/HUSSEIN-ALI_479553?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-01",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "434025",
    "name": "Zaid Tahseen",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/84a4d1c5-8fe9-4d23-bb47-5dddfdf566bf/ZAID-TAHSEEN_434025?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-29",
    "height": 187.0,
    "weight": 76.0
   },
   {
    "id": "481183",
    "name": "Akam Hashim",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/a0dea4f6-7d64-4613-bdd0-558480ddbc80/AKAM-HASHIM_481183_?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-16",
    "height": 184.0,
    "weight": 74.0
   },
   {
    "id": "434024",
    "name": "Munaf Younus",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/3e21999a-9c29-4610-a6e7-2798b41cf9fe/MUNAF-YOUNUS_434024?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-16",
    "height": 184.0,
    "weight": 78.0
   },
   {
    "id": "464458",
    "name": "Youssef Amyn",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/89fe671d-907a-47be-b4b0-4138dc878986/YOUSSEF-AMYN_464458?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-08-21",
    "height": 172.0,
    "weight": 67.0
   },
   {
    "id": "433585",
    "name": "Ibrahim Bayesh",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/390fdc3f-232a-445d-a80e-1c9cc8a67df7/IBRAHIM-BAYESH_433585?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-01",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "436628",
    "name": "Ali Alhamadi",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/00b5271a-9033-43ab-9073-7b2ec9e4426e/ALI-ALHAMADI_436628?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-03-01",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "422968",
    "name": "Mohanad Ali",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/b71272b5-a898-49b9-9de5-35b59168f050/MOHANAD-ALI_422968?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-20",
    "height": 183.0,
    "weight": 83.0
   },
   {
    "id": "523236",
    "name": "Ahmed Qasem",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/66155853-6cb6-47af-84e6-f8c492fd1b6a/AHMED-QASIM_523236?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-12",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "347085",
    "name": "Jalal Hassan",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/a7f7a32a-4968-462b-9c34-e8a0d0530b99/JALAL-HASSAN_347085?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-05-18",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "434029",
    "name": "Ali Yousif",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/e9b9b7b4-162e-40c5-91a3-f573cd6a5d39/ALI-YOUSIF_434029?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-19",
    "height": 180.0,
    "weight": 74.0
   },
   {
    "id": "434026",
    "name": "Zidane Iqbal",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/d76ebe64-2228-4d03-9c39-fa6332d4d40a/ZIDANE-IQBAL_434026?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-04-27",
    "height": 183.0,
    "weight": 74.0
   },
   {
    "id": "484276",
    "name": "Ahmed Maknazi",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/b19b8bfa-2aea-4d19-84a9-94cdf65b3445/AHMED-MAKNAZI_484276?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-09-24",
    "height": 183.0,
    "weight": 74.0
   },
   {
    "id": "433074",
    "name": "Amir Alammari",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/d80ff1d4-6bce-462b-bc11-6b4049fe9741/AMIR-ALAMMARI_433074?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-07-27",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "464457",
    "name": "Ali Jasim",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/75d61654-11c8-4646-8e47-7c4c977b29b6/ALI-JASIM_464457?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-20",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "395186",
    "name": "Aymen Hussein",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/388e5207-980c-407a-828c-270fbd4fdff6/AYMEN-HUSSEIN_395186?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-22",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "506069",
    "name": "Kevin Yakob",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/c9912381-f7e5-4059-a630-ccbee68ebb7f/KEVIN-YAKOB_506069?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-10",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "493983",
    "name": "Aimar Sher",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/254f7d31-32e2-472f-8c9a-97c37d2a41c8/AIMAR-SHER_493983?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-12-20",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "484262",
    "name": "Marko Farji",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/97055547-246e-4bc9-8130-5903cd33077d/MARKO-FARJI_484262?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-16",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "433571",
    "name": "Ahmed Basil",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/a9d30885-9966-457c-9a44-07e5cf8eee93/AHMED-BASIL_433571?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-19",
    "height": 184.0,
    "weight": 79.0
   },
   {
    "id": "479072",
    "name": "Merchas Doski",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/c2ac4751-fd73-4685-8bb6-de4c07266fda/MERCHAS-DOSKI_479072?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-07",
    "height": 173.0,
    "weight": 70.0
   },
   {
    "id": "484270",
    "name": "Zaid Ismael",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/062e505a-0067-4b87-963d-a0e7ad53decb/ZAID-ISMAEL_484270?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-03",
    "height": 185.0,
    "weight": 73.0
   },
   {
    "id": "479056",
    "name": "Mustafa Saadoon",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/0a9bb9d5-b94d-4978-9fee-6d6baf634c05/MUSTAFA-SAADOON_479056?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-25",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "436863",
    "name": "Frans Putros",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/e6406961-d495-4d2f-8851-539b32ab43a9/FRANS-PUTROS_436863?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-07-14",
    "height": 182.0,
    "weight": 77.0
   }
  ]
 },
 {
  "id": "43819",
  "code": "JPN",
  "name": "Japan",
  "flag": "🇯🇵",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/JPN",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#2830E7",
  "accent": "#07063C",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Ayase UEDA"
  ],
  "players": [
   {
    "id": "405530",
    "name": "Zion Suzuki",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/7a045252-7c97-4f14-9493-4977e3e3156e/SUZUKI-Zion_405530?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-21",
    "height": 190.0,
    "weight": 100.0
   },
   {
    "id": "405528",
    "name": "Yukinari Sugawara",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/09574b48-f59b-436b-b0db-ab4816a96ede/SUGAWARA-Yukinari_405528?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-28",
    "height": 179.0,
    "weight": 71.0
   },
   {
    "id": "390541",
    "name": "Shogo Taniguchi",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/339c7ce2-356d-4b5f-8aed-58e4040a6f62/TANIGUCHI-Shogo_390541?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-15",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "400511",
    "name": "Kou Itakura",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/5797a9db-f271-4f10-a480-1a0fdde80b7b/ITAKURA-Kou_400511?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-27",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "291372",
    "name": "Yuto Nagatomo",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/719252dc-c983-411f-875b-13a0f6acd967/NAGATOMO-Yuto_291372?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1986-09-12",
    "height": 170.0,
    "weight": 68.0
   },
   {
    "id": "448569",
    "name": "Shuto Machino",
    "pos": "FW",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/8d060ae7-d04d-4bc3-9b76-d4ad6b52a0c3/MACHINO-Shuto_448569?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-30",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "400514",
    "name": "Ao Tanaka",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/c041ee70-6920-4696-afe9-5a9982dc9a2b/TANAKA-Ao_400514?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-10",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "403304",
    "name": "Takefusa Kubo",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/7391febf-1e97-4ce1-89c8-0e3ae529ae81/KUBO-Takefusa_403304?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-04",
    "height": 173.0,
    "weight": 67.0
   },
   {
    "id": "464339",
    "name": "Keisuke Goto",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/389ec308-0914-4e7e-95e6-302c1d7bb0b0/GOTO-Keisuke_464339?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-06-03",
    "height": 191.0,
    "weight": 70.0
   },
   {
    "id": "391646",
    "name": "Ritsu Doan",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/e69df72a-0135-4989-802c-e2c85556cd00/DOAN-Ritsu_391646?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-16",
    "height": 172.0,
    "weight": 70.0
   },
   {
    "id": "430407",
    "name": "Daizen Maeda",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/42bcfad9-f62c-4238-a0e6-2f38b3757e2a/MAEDA-Daizen_430407?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-20",
    "height": 173.0,
    "weight": 67.0
   },
   {
    "id": "403305",
    "name": "Keisuke Osako",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/4304491f-2404-4e52-a9c3-948c95a01f5a/OSAKO-Keisuke_403305?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-28",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "405522",
    "name": "Keito Nakamura",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/fa77e0e6-716b-463e-b210-252bbd18e2d9/NAKAMURA-Keito_405522?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-28",
    "height": 180.0,
    "weight": 73.0
   },
   {
    "id": "395321",
    "name": "Junya Ito",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/87ce677a-e78d-474c-bfd7-b7dc77e89e62/ITO-Junya_395321?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-09",
    "height": 177.0,
    "weight": 68.0
   },
   {
    "id": "448557",
    "name": "Daichi Kamada",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/40432f8c-1b4a-444e-b3a4-709164e708d6/KAMADA-Daichi_448557?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-05",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "430401",
    "name": "Tsuyoshi Watanabe",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c7ca3373-d0e0-451d-963a-9e68025385e7/WATANABE-Tsuyoshi_430401?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-05",
    "height": 184.0,
    "weight": 76.0
   },
   {
    "id": "485503",
    "name": "Yuito Suzuki",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/820d40f4-df00-46d9-a36f-3f7eb523d099/SUZUKI-Yuito_485503?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-25",
    "height": 175.0,
    "weight": 71.0
   },
   {
    "id": "430413",
    "name": "Ayase Ueda",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/1b05e82f-94e8-470d-9c12-f9bdf1a0e080/UEDA-Ayase_430413?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-28",
    "height": 182.0,
    "weight": 76.0
   },
   {
    "id": "403293",
    "name": "Koki Ogawa",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/3b346456-0904-4429-ac8d-1acb2c2a1934/OGAWA-Koki_403293?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-08",
    "height": 186.0,
    "weight": 78.0
   },
   {
    "id": "405527",
    "name": "Ayumu Seko",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/2c33d7cc-d75e-427f-9aa9-2dac0872e561/SEKO-Ayumu_405527?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-07",
    "height": 186.0,
    "weight": 81.0
   },
   {
    "id": "403274",
    "name": "Hiroki Ito",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/68ebc735-7e69-4908-98b7-b6d691e9cbf7/ITO-Hiroki_403274?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-12",
    "height": 188.0,
    "weight": 84.0
   },
   {
    "id": "403289",
    "name": "Takehiro Tomiyasu",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/959b632f-531d-420a-85af-5d0fc3c83d5f/TOMIYASU-Takehiro_403289?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-05",
    "height": 187.0,
    "weight": 84.0
   },
   {
    "id": "511710",
    "name": "Tomoki Hayakawa",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/d81ad421-1126-4549-a89f-3fafd8db2a97/HAYAKAWA-Tomoki_511710?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-03",
    "height": 187.0,
    "weight": 81.0
   },
   {
    "id": "479294",
    "name": "Kaishu Sano",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/f5caca4b-2a48-4d7d-906e-1c2c39a6f15c/SANO-Kaishu_479294?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-30",
    "height": 176.0,
    "weight": 67.0
   },
   {
    "id": "498455",
    "name": "Junnosuke Suzuki",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/8c87dc57-4626-4945-a93a-b6f5a5620947/SUZUKI-Junnosuke_498455?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-12",
    "height": 180.0,
    "weight": 71.0
   },
   {
    "id": "520218",
    "name": "Kento Shiogai",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/86999b3c-aa5d-46d6-b42e-1601dd197182/SHIOGAI-Kento_520218?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-26",
    "height": 180.0,
    "weight": 77.0
   }
  ]
 },
 {
  "id": "43820",
  "code": "JOR",
  "name": "Jordan",
  "flag": "🇯🇴",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/JOR",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#FF1A1A",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group J",
  "topScorers": [
   "MOUSA ALTAMARI"
  ],
  "players": [
   {
    "id": "397894",
    "name": "Yazeed Abulaila",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/155d55d5-4b94-4b50-9ed1-b9a102a501a2/YAZEED-ABULAILA_397894?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-08",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "433526",
    "name": "Mohammad Abuhasheesh",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/8eb95381-e0eb-4965-8602-af3d79e14e66/MOHAMMAD-ABUHASHEESH_433526?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-05-09",
    "height": 179.0,
    "weight": 74.0
   },
   {
    "id": "433527",
    "name": "Abdallah Nasib",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/0f29b15d-1537-42c4-889b-ce58534b5b59/ABDALLAH-NASIB_433527?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-25",
    "height": 184.0,
    "weight": 78.0
   },
   {
    "id": "489550",
    "name": "Husam Abudahab",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/90bde687-8728-4d4d-aa72-524b2b251caa/HUSAM-ABUDAHAB_489550?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-13",
    "height": 186.0,
    "weight": 81.0
   },
   {
    "id": "431225",
    "name": "Yazan Alarab",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/f69b7b80-4362-431e-9e25-32c7d0a92c88/YAZAN-ALARAB_431225?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-31",
    "height": 185.0,
    "weight": 87.0
   },
   {
    "id": "491167",
    "name": "Amer Jamous",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/554abed3-9771-464a-a75d-ac4c1f550eca/AMER-JAMOUS_491167?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-03",
    "height": 177.0,
    "weight": 76.0
   },
   {
    "id": "431208",
    "name": "Mohammad Abuzraiq",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/14c04e8c-82ca-4feb-83ff-f89fa146d91f/MOHAMMAD-ABUZRAIQ_431208?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-30",
    "height": 170.0,
    "weight": 70.0
   },
   {
    "id": "431230",
    "name": "Noor Alrawabdeh",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/1d0f7594-2192-4227-9ad5-696e4212f0ee/NOOR-ALRAWABDEH_431230?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-24",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "431212",
    "name": "Ali Olwan",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/f9806f7c-f81f-4653-a81a-9bbcfcd587c9/ALI-OLWAN_431212?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-26",
    "height": 182.0,
    "weight": 81.0
   },
   {
    "id": "431211",
    "name": "Mousa Altamari",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/e999f9d2-7ca2-4d4d-b7ba-33c1ee96b375/MOUSA-ALTAMARI_431211?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-10",
    "height": 176.0,
    "weight": 70.0
   },
   {
    "id": "511875",
    "name": "Odeh Fakhoury",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/07e6d74d-1e09-4278-97e4-4b0bfcba2de8/ODEH-FAKHOURY_511875?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-11-22",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "483127",
    "name": "Nour Baniateyah",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/6c4042af-5cac-4b05-94b8-c57aa8f3083f/NOUR-BANIATEYAH_483127?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-25",
    "height": 179.0,
    "weight": 76.0
   },
   {
    "id": "396950",
    "name": "Mahmoud Almardi",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/1e7a3a2d-fca9-400e-8a5a-244eadc0fb92/MAHMOUD-ALMARDI_396950?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-10-06",
    "height": 173.0,
    "weight": 72.0
   },
   {
    "id": "384850",
    "name": "Rajaei Ayed",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/98cfccc5-8732-4a13-a4ec-127c4e886d90/RAJAEI-AYED_384850?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-07-25",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "431209",
    "name": "Ibrahim Sadeh",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/e6579a9e-8548-4bdb-bbef-36f3fb6c1b81/IBRAHIM-SADEH_431209?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-27",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "489551",
    "name": "Mohammad Abualnadi",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/e4e0ffbc-e1af-44f4-8c2e-50bd2dffc4c4/MOHAMMAD-ABUALNADI_489551?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-08",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "499102",
    "name": "Saleem Obaid",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/647ecc0e-11c2-4d0e-9b48-2d8137a00b85/SALEEM-OBAID_499102?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-01-17",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "520068",
    "name": "Mohammad Abughoush",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/5ee84ee8-8e6a-4a6d-aff9-42538c323659/MOHAMMAD-ABUGHOUSH_520068?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-07-13",
    "height": 182.0,
    "weight": 80.0
   },
   {
    "id": "431219",
    "name": "Saed Alrosan",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/432e3e68-f3d2-4bdf-bc69-1523ff9c2333/SAED-ALROSAN_431219?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-01",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "479389",
    "name": "Mohannad Abutaha",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/8ba117bd-6dd8-4fc7-aecd-47cf173c362c/MOHANNAD-ABUTAHA_386415?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-02-02",
    "height": 173.0,
    "weight": 76.0
   },
   {
    "id": "433534",
    "name": "Nizar Alrashdan",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/59b03f3e-6636-4277-bca1-698bde2070b9/NIZAR-ALRASHDAN_433534?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-23",
    "height": 183.0,
    "weight": 74.0
   },
   {
    "id": "431223",
    "name": "Abdallah Alfakhori",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/3f7678fc-eab6-4d7c-81a4-2341b7f3ab10/ABDALLAH-ALFAKHORI_431223?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-01-22",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "389437",
    "name": "Ehsan Haddad",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/59f676b5-4f37-4206-8c37-5c2aecdd3b9e/EHSAN-HADDAD_389437?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-05",
    "height": 174.0,
    "weight": 78.0
   },
   {
    "id": "498514",
    "name": "Ali Azaizeh",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/1097b48f-74a2-4506-97b3-2dd48364441a/ALI-AZAIZEH_498514?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-04-13",
    "height": 178.0,
    "weight": 77.0
   },
   {
    "id": "45191",
    "name": "Mohammad Aldaoud",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/479933f0-a2bb-4231-88ea-3bf2c826ed54/MOHAMMAD-ALDAOUD_45191?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-12",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "511889",
    "name": "Anas Badawi",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/c5fbd430-c7f3-4d67-9d16-e7f4e17a872a/ANAS-BADAWI_511889?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-13",
    "height": 174.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "43822",
  "code": "KOR",
  "name": "Korea Republic",
  "flag": "🇰🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/KOR",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#FF253A",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group A",
  "topScorers": [
   "HWANG Inbeom"
  ],
  "players": [
   {
    "id": "274281",
    "name": "Kim Seunggyu",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/d4c2a3d5-e369-4813-97eb-16669f83dd78/KIM-Seunggyu_274281?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-09-30",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "423874",
    "name": "Lee Hanbeom",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/5486bd22-b834-4885-acde-af11531a61ba/LEE-Hanbeom_423874?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-17",
    "height": 188.0,
    "weight": 72.0
   },
   {
    "id": "492315",
    "name": "Lee Gihyuk",
    "pos": "MF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/d52ff87a-7e84-497a-bb8e-3feb453ea7c6/LEE-Gihyuk_492315?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-07",
    "height": 184.0,
    "weight": 72.0
   },
   {
    "id": "395088",
    "name": "Kim Minjae",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/743f3b76-7c6e-484c-8f62-4f4e22c082ae/KIM-Minjae_395088?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-15",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "418485",
    "name": "Kim Taehyeon",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/34616f93-215c-4a2f-8fcc-4f22a8732d64/KIM-Taehyeon_418485?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-17",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "395084",
    "name": "Hwang Inbeom",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/70be8ce3-bc90-4585-8871-a951dabf811e/HWANG-Inbeom_395084?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-20",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "307849",
    "name": "Son Heungmin",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/f9694bf1-eb42-4d26-9503-e988bd32a435/SON-Heungmin_307849?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-07-08",
    "height": 183.0,
    "weight": 76.0
   },
   {
    "id": "402817",
    "name": "Paik Seungho",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/369d8cea-dbe3-48fb-8a8a-e55180bf1fca/PAIK-Seungho_402817?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-17",
    "height": 182.0,
    "weight": 72.0
   },
   {
    "id": "430387",
    "name": "Cho Guesung",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/6efa6506-c1f1-4659-8249-9bc800f32691/CHO-Guesung_430387?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-25",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "390525",
    "name": "Lee Jaesung",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/daa227b2-f837-4fc4-bdc3-b5436c92b2e6/LEE-Jaesung_390525?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-10",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "395083",
    "name": "Hwang Heechan",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/8460686d-d2c7-4d3e-98a5-f797400470ed/HWANG-Heechan_395083?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-26",
    "height": 177.0,
    "weight": 77.0
   },
   {
    "id": "402820",
    "name": "Song Bumkeun",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/a45e87b1-92c4-4d33-ac9b-1bca03075996/SONG-Bumkeun_402820?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-15",
    "height": 196.0,
    "weight": 90.0
   },
   {
    "id": "423880",
    "name": "Lee Taeseok",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/f2a9ce7b-5d5a-4ec7-9def-79407ccc338b/LEE-Taeseok_423880?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-28",
    "height": 174.0,
    "weight": 71.0
   },
   {
    "id": "522282",
    "name": "Cho Wije",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/11bf36a2-f7f4-4078-978f-70d1119d8f7f/CHO-Wije_522282?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-25",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "448580",
    "name": "Kim Moonhwan",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/352f1315-e0c8-46fd-b0f4-5f56cac5ff18/KIM-Moonhwan_448580?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-08-01",
    "height": 173.0,
    "weight": 64.0
   },
   {
    "id": "479316",
    "name": "Park Jinseob",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/a335e21c-19b8-4406-a3fb-e40bc056bd9f/PARK-Jinseob_479316?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-10-23",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "464374",
    "name": "Bae Junho",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/58d034cc-0ae7-4caf-b6d1-41d12d129dd2/BAE-Junho_464374?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-08-21",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "448586",
    "name": "Oh Hyeongyu",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/e273b84d-3432-4404-8c33-7ecaaa2bc214/OH-Hyeongyu_448586?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-12",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "418490",
    "name": "Lee Kangin",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/a54e995b-caa3-43c4-981f-b54ada7f678d/LEE-Kangin_418490?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-19",
    "height": 174.0,
    "weight": 72.0
   },
   {
    "id": "448585",
    "name": "Yang Hyunjun",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/537b866b-290c-4da9-a0bb-5984410d1509/YANG-Hyunjun_448585?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-25",
    "height": 179.0,
    "weight": 73.0
   },
   {
    "id": "397753",
    "name": "Jo Hyeonwoo",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/15bfe432-3e69-4900-b736-50ee6fd20cb5/JO-Hyeonwoo_397753?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-09-25",
    "height": 189.0,
    "weight": 75.0
   },
   {
    "id": "429608",
    "name": "Seol Youngwoo",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/db3b1a56-6cf2-42ad-9d02-139333d68f38/SEOL-Youngwoo_429608?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-05",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "511828",
    "name": "Castrop Jens",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/d758ee8c-58aa-4562-8b5c-96612458f567/CASTROP-Jens_511828?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-29",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "430385",
    "name": "Kim Jingyu",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b2fd3864-92cd-4846-8be2-880887b9c3ac/KIM-Jingyu_430385?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-24",
    "height": 177.0,
    "weight": 68.0
   },
   {
    "id": "423855",
    "name": "Eom Jisung",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/f45da0fb-c909-4517-81e8-9a69347ac43c/EOM-Jisung_423855?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-09",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "429600",
    "name": "Lee Donggyeong",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/5bef6cf8-e976-4ab2-89e1-6f8a886712f9/LEE-Donggyeong_429600?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-20",
    "height": 175.0,
    "weight": 68.0
   }
  ]
 },
 {
  "id": "43911",
  "code": "MEX",
  "name": "Mexico",
  "flag": "🇲🇽",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/MEX",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#27A550",
  "accent": "#EA0000",
  "host": true,
  "finalPosition": "Round of 16",
  "topScorers": [
   "Julian QUINONES"
  ],
  "players": [
   {
    "id": "485070",
    "name": "Raul Rangel",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/3ea092ae-841d-4dc6-9ca0-78eb4dfb97c7/RANGEL-Raul_485070?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-25",
    "height": 190.0,
    "weight": 87.0
   },
   {
    "id": "403596",
    "name": "Jorge Sanchez",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/8640d435-8aba-4b52-a864-9952d3a6db5c/SANCHEZ-Jorge_403596?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-10",
    "height": 176.0,
    "weight": 72.0
   },
   {
    "id": "395516",
    "name": "Cesar Montes",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/c8c3fa3a-9001-4221-ab3c-754158c0ad8a/MONTES-Cesar_395516?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-24",
    "height": 191.0,
    "weight": 70.0
   },
   {
    "id": "400634",
    "name": "Edson Alvarez",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/b1581870-6bef-4c29-9a06-f306bbf03ca8/ALVAREZ-Edson_400634?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-24",
    "height": 180.0,
    "weight": 76.0
   },
   {
    "id": "425701",
    "name": "Johan Vasquez",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/838cb65f-3d60-4acb-855d-35a364c25f1a/VASQUEZ-Johan_425701?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-22",
    "height": 182.0,
    "weight": 72.0
   },
   {
    "id": "419518",
    "name": "Erik Lira",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/83109586-542d-4950-83eb-f3388757ef90/LIRA-Erik_419518?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-08",
    "height": 172.0,
    "weight": 70.0
   },
   {
    "id": "430763",
    "name": "Luis Romo",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/bc7f864e-c553-4995-9eb3-62139e29a7d7/ROMO-Luis_430763?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-05",
    "height": 183.0,
    "weight": 81.0
   },
   {
    "id": "416576",
    "name": "Alvaro Fidalgo",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/fda68f1a-eceb-4219-8f1b-ed6b1f2e37ed/FIDALGO-Alvaro_416576?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-04-09",
    "height": 175.0,
    "weight": 66.0
   },
   {
    "id": "356731",
    "name": "Raul Jimenez",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/ec48d7a7-0cf7-4fc8-b999-e3c15fee5e98/JIMENEZ-Raul_356731?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-05-05",
    "height": 188.0,
    "weight": 79.0
   },
   {
    "id": "430766",
    "name": "Alexis Vega",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/eeeba73b-bc80-47f5-a1ff-f38f94ff2ee0/VEGA-Alexis_430766?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-25",
    "height": 175.0,
    "weight": 73.0
   },
   {
    "id": "430759",
    "name": "Santiago Gimenez",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/0e27d0c6-e057-4d0c-a603-3843fcd0c542/GIMENEZ-Santiago_430759?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-18",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "441260",
    "name": "Carlos Acevedo",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/b84beeec-be0c-493f-85fd-362bf0ead5c6/ACEVEDO-Carlos_441260?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-19",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "215285",
    "name": "Guillermo Ochoa",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/fedeac9f-968d-4d4c-b08a-5b2bf157c396/OCHOA-Guillermo_215285?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1985-07-13",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "514336",
    "name": "Armando Gonzalez",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/81ce3e70-d37d-4109-b423-8cc7732527a1/GONZALEZ-Armando_514336?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-04-20",
    "height": 182.0,
    "weight": 74.0
   },
   {
    "id": "441261",
    "name": "Israel Reyes",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/1e7c7c32-135c-46ba-9aff-429bfb1478aa/REYES-Israel_441261?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-23",
    "height": 181.0,
    "weight": 78.0
   },
   {
    "id": "429157",
    "name": "Julian Quinones",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/ea06becb-97b2-4f89-8464-5e0854cb7f81/QUINONES-Julian_429157?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-24",
    "height": 177.0,
    "weight": 78.0
   },
   {
    "id": "372090",
    "name": "Orbelin Pineda",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/ef0f99d9-6838-4b25-8a18-ecd9638bd51f/PINEDA-Orbelin_372090?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-24",
    "height": 169.0,
    "weight": 70.0
   },
   {
    "id": "461177",
    "name": "Obed Vargas",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/c0990d50-6120-459c-a66a-bd91ee7e46bc/VARGAS-Obed_461177?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-08-05",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "500037",
    "name": "Gilberto Mora",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/028c85e0-509a-43c4-904a-58ce2d4f6f24/MORA-Gilberto_500037?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2008-10-14",
    "height": 175.0,
    "weight": 75.0
   },
   {
    "id": "500038",
    "name": "Mateo Chavez",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/8e8884ee-8964-4fb7-82d8-8a5d341e79a6/CHAVEZ-Mateo_500038?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-05-12",
    "height": 178.0,
    "weight": 73.0
   },
   {
    "id": "406135",
    "name": "Cesar Huerta",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/c5a00320-abe6-4d97-9892-e4afaf601fed/HUERTA-Cesar_406135?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-03",
    "height": 171.0,
    "weight": 61.0
   },
   {
    "id": "386339",
    "name": "Guillermo Martinez",
    "pos": "FW",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/7f04e2d8-1f0b-491e-8551-5a856979bc97/MARTINEZ-Guillermo_386339?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-03-15",
    "height": 191.0,
    "weight": 87.0
   },
   {
    "id": "402772",
    "name": "Jesus Gallardo",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/f1417540-93cb-4b82-9cfe-223e877d5923/GALLARDO-Jesus_402772?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-15",
    "height": 174.0,
    "weight": 71.0
   },
   {
    "id": "448051",
    "name": "Luis Chavez",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/a09b97d9-6b02-45d4-aae8-b8ed274e5634/CHAVEZ-Luis_448051?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-15",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "403585",
    "name": "Roberto Alvarado",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/b1a8a14a-2a27-4524-a6ed-679aca39d35d/ALVARADO-Roberto_403585?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-07",
    "height": 176.0,
    "weight": 74.0
   },
   {
    "id": "464533",
    "name": "Brian Gutierrez",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/dbca9708-0922-4d1d-97cb-1aa53696d6bd/GUTIERREZ-Brian_464533?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-17",
    "height": 178.0,
    "weight": 68.0
   }
  ]
 },
 {
  "id": "43872",
  "code": "MAR",
  "name": "Morocco",
  "flag": "🇲🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/MAR",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#E40000",
  "accent": "#02853D",
  "host": false,
  "finalPosition": "Quarter-final",
  "topScorers": [
   "Ismael SAIBARI"
  ],
  "players": [
   {
    "id": "356956",
    "name": "Yassine Bounou",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/338ae8a7-8734-423e-ae54-2f783dba77ce/BOUNOU-Yassine_356956?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-04-05",
    "height": 192.0,
    "weight": 77.0
   },
   {
    "id": "400721",
    "name": "Achraf Hakimi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/22c6ca49-7262-4799-8a9f-530e427321ac/HAKIMI-Achraf_400721?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-04",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "411680",
    "name": "Noussair Mazraoui",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/000d2b43-36ff-4fe5-90d8-23c96e555c56/MAZRAOUI-Noussair_411680?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-14",
    "height": 183.0,
    "weight": 79.0
   },
   {
    "id": "372266",
    "name": "Sofyan Amrabat",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/cf6efacc-6c34-4679-b833-b2c5371b4ee6/AMRABAT-Sofyan_372266?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-21",
    "height": 185.0,
    "weight": 85.0
   },
   {
    "id": "395760",
    "name": "Marwane Saadane",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/d46e989c-a503-485f-b507-57705654cd55/MARWANE-SAADANE_395760?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-01-17",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "485760",
    "name": "Ayyoub Bouaddi",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/37fafcb6-10c1-4e8d-b2a7-898ae14fa1a3/BOUADDI-Ayyoub_485760?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-10-02",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "494293",
    "name": "Chemsdine Talbi",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/b6d54dcf-25e8-4e0f-a155-60e051b4a86e/TALBI-Chemsdine_494293?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-05-09",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "441307",
    "name": "Azzedine Ounahi",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/f823c3da-d540-436c-9b56-bfccdc4b51bc/OUNAHI-Azzedine_441307?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-19",
    "height": 182.0,
    "weight": 65.0
   },
   {
    "id": "433426",
    "name": "Soufiane Rahimi",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/7de765a2-f6c6-4d70-badd-a929c4cab547/RAHIMI-Soufiane_433426?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-02",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "430740",
    "name": "Brahim Diaz",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/b05c2233-cb0a-4abc-9413-e56ad25f0899/DIAZ-Brahim_430740?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-03",
    "height": 170.0,
    "weight": 68.0
   },
   {
    "id": "448598",
    "name": "Ismael Saibari",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/250526c6-26b5-4425-8a21-231c7952e34d/SAIBARI-Ismael_448598?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-28",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "395755",
    "name": "Munir El Kajoui",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/20f762ed-3248-4b2d-8a4c-5f1e3891291f/EL-KAJOUI-Munir_395755?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-05-10",
    "height": 190.0,
    "weight": 79.0
   },
   {
    "id": "485756",
    "name": "Zakaria El Ouahdi",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/beeb6801-c7ca-401a-b1ab-21db95f44198/EL-OUAHDI-Zakaria_485756?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-12-31",
    "height": 171.0,
    "weight": 69.0
   },
   {
    "id": "403083",
    "name": "Issa Diop",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/a89dc777-6262-4c1e-8b22-a9a9e5bf7300/DIOP-Issa_403083?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-09",
    "height": 194.0,
    "weight": 88.0
   },
   {
    "id": "505097",
    "name": "Samir El Mourabet",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/1c4672ea-a846-45f7-ae85-85ec7559a30c/EL-MOURABET-Samir_505097?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-10-06",
    "height": 187.0,
    "weight": 72.0
   },
   {
    "id": "505112",
    "name": "Gessime Yassine",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/dd763e4f-0cfe-44b1-8e18-ea842260c807/YASSINE-Gessime_505112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-11-22",
    "height": 172.0,
    "weight": 56.0
   },
   {
    "id": "524320",
    "name": "Amine Sbai",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/d75890bc-bbe6-46a2-ab20-5655effe3479/AMINE-SBAI_524320?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-05",
    "height": 175.0,
    "weight": 72.0
   },
   {
    "id": "448607",
    "name": "Chadi Riad",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/074f7da4-2459-4f56-b245-0b496782d067/RIAD-Chadi_448607?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-17",
    "height": 186.0,
    "weight": 78.0
   },
   {
    "id": "494742",
    "name": "Youssef Belammari",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/616a2660-9465-4f4f-a565-e354f3890a81/BELAMMARI-Youssef_494742?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-20",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "411678",
    "name": "Ayoub El Kaabi",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/207a8ba8-3f3f-4f86-9730-335f21c1924f/EL-KAABI-Ayoub_411678?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-06-25",
    "height": 182.0,
    "weight": 80.0
   },
   {
    "id": "523288",
    "name": "Ayoube Amaimouni",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/54730a6f-bb75-4909-b3c3-37441159d78e/AMAIMOUNI-Ayoub_523288?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-11-30",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "371553",
    "name": "Ahmed Reda Tagnaouti",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/3efabccf-6fc5-4192-b000-ea89f4b63c06/TAGNAOUTI-Ahmed-Reda_371553?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-05",
    "height": 194.0,
    "weight": 84.0
   },
   {
    "id": "448612",
    "name": "Bilal El Khannouss",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/8e73a0cb-8200-4870-b0bc-12901de8076f/EL-KHANNOUSS-Bilal_448612?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-05-10",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "485740",
    "name": "Neil El Aynaoui",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/3d04af2c-60a8-48c8-be3e-d13bf5373c0c/EL-AYNAOUI-Neil_485740?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-02",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "485767",
    "name": "Redouane Halhal",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/e515f777-c663-46b0-87e3-9f467c48184f/HALHAL-Redouane_485767?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-05",
    "height": 189.0,
    "weight": 82.0
   },
   {
    "id": "424071",
    "name": "Anass Salah Eddine",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/06a01d87-4cc8-4a19-b4c3-b4902454e44e/SALAH-EDDINE-Anass_424071?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-01-18",
    "height": 181.0,
    "weight": 66.0
   }
  ]
 },
 {
  "id": "43960",
  "code": "NED",
  "name": "Netherlands",
  "flag": "🇳🇱",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/NED",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FF7A00",
  "accent": "#21468B",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Cody GAKPO"
  ],
  "players": [
   {
    "id": "424081",
    "name": "Bart Verbruggen",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/44bfd693-27d5-4d36-823e-5ff0e6cd2524/VERBRUGGEN-Bart_424081?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-18",
    "height": 193.0,
    "weight": 89.0
   },
   {
    "id": "483553",
    "name": "Lutsharel Geertruida",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/1248c411-1f1f-436d-9731-3b1c3b6db0e6/GEERTRUIDA-Lutsharel_483553?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-18",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "402044",
    "name": "Marten De Roon",
    "pos": "MF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/bf755ec0-abe7-4790-ad87-a2dc6d709654/DE-ROON-Marten_402044?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-03-29",
    "height": 186.0,
    "weight": 76.0
   },
   {
    "id": "397786",
    "name": "Virgil Van Dijk",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/df0e21eb-c210-4ea6-ab2c-0ac13635a9f8/VAN-DIJK-Virgil_397786?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-08",
    "height": 195.0,
    "weight": 92.0
   },
   {
    "id": "336088",
    "name": "Nathan Ake",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/e44b0c79-cb0b-4ce8-bace-7530a516371f/AKE-Nathan_336088?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-18",
    "height": 180.0,
    "weight": 84.0
   },
   {
    "id": "489517",
    "name": "Jan Paul Van Hecke",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/eb113fdd-d066-44a9-a0dc-7bf075fdc57f/VAN-HECKE-Jan-Paul_489517?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-08",
    "height": 189.0,
    "weight": 79.0
   },
   {
    "id": "478364",
    "name": "Justin Kluivert",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/a80059a3-3430-4e4a-b6c6-fecc2edf4627/KLUIVERT-Justin_478364?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-05",
    "height": 173.0,
    "weight": 66.0
   },
   {
    "id": "430176",
    "name": "Ryan Gravenberch",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/ad5fe14f-b29c-4c20-8477-b00bf14c413f/GRAVENBERCH-Ryan_430176?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-16",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "448159",
    "name": "Wout Weghorst",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/3b0de826-85e3-4404-9dbc-6e6ac7675ae3/WEGHORST-Wout_448159?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-07",
    "height": 197.0,
    "weight": 90.0
   },
   {
    "id": "336098",
    "name": "Memphis Depay",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/6fe9f49e-5f45-4a44-9807-579be23fc0db/DEPAY-Memphis_336098?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-13",
    "height": 178.0,
    "weight": 78.0
   },
   {
    "id": "448152",
    "name": "Cody Gakpo",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/bbb5637f-0587-4ddd-8a82-604c0d921bb3/GAKPO-Cody_448152?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-05-07",
    "height": 193.0,
    "weight": 78.0
   },
   {
    "id": "483481",
    "name": "Mats Wieffer",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/df746a89-9b34-41d7-8d45-39dc4f010e12/WIEFFER-Mats_483481?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-16",
    "height": 189.0,
    "weight": 78.0
   },
   {
    "id": "506028",
    "name": "Robin Roefs",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/557e5592-2bf9-4d43-8d51-ee7e2881cb65/ROEFS-Robin_506028?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-01-17",
    "height": 193.0,
    "weight": 72.0
   },
   {
    "id": "483526",
    "name": "Tijjani Reijnders",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/3f7090ee-2e95-4b6c-a098-729b07484fb2/REIJNDERS-Tijjani_483526?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-29",
    "height": 178.0,
    "weight": 80.0
   },
   {
    "id": "448140",
    "name": "Micky Van De Ven",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/f9f50877-4cd1-4ab9-83d8-2908ad6fbc70/VAN-DE-VEN-Micky_448140?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-19",
    "height": 193.0,
    "weight": 81.0
   },
   {
    "id": "448157",
    "name": "Guus Til",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/79d54014-e674-49c2-8b01-94958f41743a/TIL-Guus_448157?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-22",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "448153",
    "name": "Noa Lang",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/683cef55-109a-4bc3-a41a-8bb4d64d556f/LANG-Noa_448153?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-17",
    "height": 176.0,
    "weight": 70.0
   },
   {
    "id": "433066",
    "name": "Donyell Malen",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/15ebb030-92ea-4165-aa63-5136719b5c7f/MALEN-Donyell_433066?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-19",
    "height": 178.0,
    "weight": 68.0
   },
   {
    "id": "424051",
    "name": "Brian Brobbey",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/15246275-ff97-404c-bac3-ce793d98c744/BROBBEY-Brian_424051?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-01",
    "height": 181.0,
    "weight": 80.0
   },
   {
    "id": "448149",
    "name": "Teun Koopmeiners",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/dd457729-e889-46e1-9845-f6e1b194893e/KOOPMEINERS-Teun_448149?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-28",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "422657",
    "name": "Frenkie De Jong",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/fe8176f7-bf45-49fc-bd5e-0bfd0c834992/DE-JONG-Frenkie_422657?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-12",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "436612",
    "name": "Denzel Dumfries",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/f2a2746b-7691-40c4-a052-60db3219a856/DUMFRIES-Denzel_436612?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-18",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "448151",
    "name": "Mark Flekken",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/c3d85e26-25ec-46df-957c-9e5feee3faf3/FLEKKEN-Mark_448151?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-06-13",
    "height": 195.0,
    "weight": 87.0
   },
   {
    "id": "489518",
    "name": "Crysencio Summerville",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/86e9f724-fc5f-4969-92e3-ac658dafacdd/SUMMERVILLE-Crysencio_489518?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-30",
    "height": 172.0,
    "weight": 63.0
   },
   {
    "id": "483512",
    "name": "Jorrel Hato",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/16b4bf89-fc63-492a-afd1-6f400e8eed92/HATO-Jorrel_483512?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-03-07",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "484859",
    "name": "Quinten Timber",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/ac98da17-3346-4d88-b52f-4ce34c82f587/TIMBER-Quinten_484859?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-17",
    "height": 176.0,
    "weight": 71.0
   }
  ]
 },
 {
  "id": "43978",
  "code": "NZL",
  "name": "New Zealand",
  "flag": "🇳🇿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/NZL",
  "group": "OFC",
  "confederation": "OFC",
  "color": "#000000",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group G",
  "topScorers": [
   "Elijah JUST"
  ],
  "players": [
   {
    "id": "368535",
    "name": "Max Crocombe",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/0d8fc4f9-7330-4eaa-bbf0-7dfccbec09db/CROCOMBE-Max_368535?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-08-12",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "331463",
    "name": "Tim Payne",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/2fd43bf7-76f0-4733-88d4-5d5ca820e91c/PAYNE-Tim_331463?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-01-10",
    "height": 179.0,
    "weight": 78.0
   },
   {
    "id": "440748",
    "name": "Francis De Vries",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/0f1a06e9-76d0-480c-950a-667f11d41171/DE-VRIES-Francis_440748?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-11-28",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "482775",
    "name": "Tyler Bindon",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/14976514-36f8-43b9-80c8-67fb73d13d6b/BINDON-Tyler_482775?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-01-27",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "261367",
    "name": "Michael Boxall",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/e4d41670-878d-4717-b07c-84d09a5f6938/BOXALL-Michael_261367?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-08-18",
    "height": 191.0,
    "weight": 95.0
   },
   {
    "id": "390181",
    "name": "Joe Bell",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/37f084e5-faf4-4447-bdf1-c7ac8b0fa6e8/BELL-Joe_390181?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-27",
    "height": 182.0,
    "weight": 82.0
   },
   {
    "id": "390205",
    "name": "Logan Rogerson",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/009066e3-bc4c-48e9-af6c-1a7065946bd5/LOGAN-ROGERSON_390205?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-28",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "423595",
    "name": "Marko Stamenic",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/b0e38724-034f-4d1e-a08a-def455a86569/STAMENIC-Marko_423595?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-19",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "274078",
    "name": "Chris Wood",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/431bf921-6e73-469f-87bd-3fb2c010966e/WOOD-Chris_274078?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-12-07",
    "height": 191.0,
    "weight": 94.0
   },
   {
    "id": "390209",
    "name": "Sarpreet Singh",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/3c43e6c2-50b4-4cb3-ba2e-e94f9a928edd/SINGH-Sarpreet_390209?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-20",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "405454",
    "name": "Elijah Just",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/fe32736f-5d5f-4870-8db3-5b4560835f53/JUST-Elijah_405454?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-01",
    "height": 176.0,
    "weight": 70.0
   },
   {
    "id": "423574",
    "name": "Alex Paulsen",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/10106faa-f53a-4898-b03a-6688ff48cf53/PAULSEN-Alex_423574?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-04",
    "height": 193.0,
    "weight": 76.0
   },
   {
    "id": "405469",
    "name": "Liberato Cacace",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/0954fe05-e301-4ec1-a8ad-2aaccc60d8a7/CACACE-Liberato_405469?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-27",
    "height": 182.0,
    "weight": 82.0
   },
   {
    "id": "371142",
    "name": "Alex Rufer",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/cc41974e-475a-4ba0-bb88-ec792a18c3ab/RUFER-Alex_371142?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-12",
    "height": 180.0,
    "weight": 73.0
   },
   {
    "id": "419572",
    "name": "Nando Pijnaker",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/73a44115-3c98-4cb3-b1d8-4e20cdc7ba23/PIJNAKER-Nando_419572?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-25",
    "height": 185.0,
    "weight": 90.0
   },
   {
    "id": "463580",
    "name": "Finn Surman",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/99c5d1bb-fd52-4ce3-a0e0-8f2e8b1083cf/SURMAN-Finn_463580?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-09-23",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "269592",
    "name": "Kosta Barbarouses",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/485b38ee-9a46-4494-b518-952574e944e6/BARBAROUSES-Kosta_269592?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-02-19",
    "height": 171.0,
    "weight": 74.0
   },
   {
    "id": "419577",
    "name": "Ben Waine",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/88f867f6-433a-4846-a145-fc06b8aac544/WAINE-Ben_419577?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-11",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "423575",
    "name": "Ben Old",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/40fc67b2-858c-4985-9db3-ef1e32b864e9/OLD-Ben_423575?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-13",
    "height": 173.0,
    "weight": 65.0
   },
   {
    "id": "390196",
    "name": "Callum McCOWATT",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/e2c1ff8e-bc45-46aa-b217-a6c2c588c497/McCOWATT-Callum_390196?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-30",
    "height": 180.0,
    "weight": 75.0
   },
   {
    "id": "416652",
    "name": "Jesse Randall",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/22bc60f6-3a5a-4df2-8493-b3193cf0cf22/RANDALL-Jesse_416652?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-19",
    "height": 176.0,
    "weight": 72.0
   },
   {
    "id": "390218",
    "name": "Michael Woud",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/a9766a27-9d3c-4856-8462-396d87ee2335/WOUD-Michael_390218?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-16",
    "height": 196.0,
    "weight": 89.0
   },
   {
    "id": "336641",
    "name": "Ryan Thomas",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/daf68d11-59d7-46f3-98ec-25a359c8a3a9/THOMAS-Ryan_336641?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-12-20",
    "height": 176.0,
    "weight": 70.0
   },
   {
    "id": "419567",
    "name": "Callan Elliot",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/0758a55c-7ba4-4988-bcd8-c2401d5fc9d1/ELLIOT-Callan_419567?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-07",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "484817",
    "name": "Lachlan Bayliss",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/d63e6762-f433-47f1-82b3-be3627b12941/BAYLISS-Lachlan_484817?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-24",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "274102",
    "name": "Tommy Smith",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/a0a2def6-be1c-4394-973e-25d82ed70792/SMITH-Tommy_274102?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-03-31",
    "height": 188.0,
    "weight": 84.0
   }
  ]
 },
 {
  "id": "43961",
  "code": "NOR",
  "name": "Norway",
  "flag": "🇳🇴",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/NOR",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#C70000",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Quarter-final",
  "topScorers": [
   "Erling HAALAND"
  ],
  "players": [
   {
    "id": "373235",
    "name": "Orjan Nyland",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/4abc883f-1368-46d6-8849-308d06b641e6/NYLAND-Orjan_373235?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-09-10",
    "height": 192.0,
    "weight": 91.0
   },
   {
    "id": "433067",
    "name": "Morten Thorsby",
    "pos": "MF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/b1ea3949-8267-4285-b1ed-200204779d50/THORSBY-Morten_433067?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-05",
    "height": 188.0,
    "weight": 76.0
   },
   {
    "id": "483516",
    "name": "Kristoffer Ajer",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/28de8091-50a6-4c54-9e7b-62788b087a3a/AJER-Kristoffer_483516?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-17",
    "height": 198.0,
    "weight": 87.0
   },
   {
    "id": "419672",
    "name": "Leo Ostigard",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/548ecd96-6fc9-40f2-b020-7b3a02391341/OSTIGARD-Leo_419672?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-28",
    "height": 183.0,
    "weight": 81.0
   },
   {
    "id": "483505",
    "name": "David Moller Wolfe",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/27678ee5-00fb-4d48-ac88-402cab97d566/MOLLER-WOLFE-David_483505?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-04-23",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "483442",
    "name": "Patrick Berg",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/aa692fb8-40c4-4273-a583-46ca3f57c34c/BERG-Patrick_483442?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-24",
    "height": 178.0,
    "weight": 74.0
   },
   {
    "id": "398588",
    "name": "Alexander Sorloth",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/23bcc976-2dbc-4fe2-b844-1878ff0cd354/SORLOTH-Alexander_398588?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-05",
    "height": 196.0,
    "weight": 96.0
   },
   {
    "id": "404645",
    "name": "Sander Berge",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/b7cf7654-f43e-4993-975e-5a2a0d5633f8/BERGE-Sander_404645?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-14",
    "height": 195.0,
    "weight": 96.0
   },
   {
    "id": "419652",
    "name": "Erling Haaland",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/ee269811-9f84-401f-99b8-e953a2704ebb/HAALAND-Erling_419652?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-21",
    "height": 195.0,
    "weight": 94.0
   },
   {
    "id": "400716",
    "name": "Martin Odegaard",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/2b895db6-7f67-4436-b8da-54bdf0dd2e2b/ODEGAARD-Martin_400716?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-17",
    "height": 178.0,
    "weight": 72.0
   },
   {
    "id": "419662",
    "name": "Jorgen Strand Larsen",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/116d01b5-9d0d-4456-a5a8-0e63a16b9862/STRAND-LARSEN-Jorgen_419662?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-06",
    "height": 193.0,
    "weight": 81.0
   },
   {
    "id": "514479",
    "name": "Sander Tangvik",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/c7cb7af6-fa0d-4795-bdba-c53bed58e3fa/TANGVIK-Sander_514479?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-29",
    "height": 193.0,
    "weight": 87.0
   },
   {
    "id": "483535",
    "name": "Egil Selvik",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/b6e7f73a-c70c-4f7c-b0a4-37c8961fb019/SELVIK-Egil_483535?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-07-30",
    "height": 187.0,
    "weight": 88.0
   },
   {
    "id": "483497",
    "name": "Fredrik Aursnes",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5bf9f1d6-b7ec-4c50-9337-059f6eb0c097/AURSNES-Fredrik_483497?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-10",
    "height": 181.0,
    "weight": 69.0
   },
   {
    "id": "483530",
    "name": "Fredrik Andre Bjorkan",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/d46985d1-90f0-4e2a-91f2-d00c0c98d796/BJORKAN-Fredrik-Andre_483530?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-21",
    "height": 180.0,
    "weight": 74.0
   },
   {
    "id": "494625",
    "name": "Marcus Holmgren Pedersen",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7c96cbed-5df4-46f9-b1f4-b9abbbe7e9d1/HOLMGREN-PEDERSEN-Marcus_494625?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-16",
    "height": 184.0,
    "weight": 77.0
   },
   {
    "id": "491244",
    "name": "Torbjorn Heggem",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e7b048fd-7217-470a-9820-eb8b6eab0286/HEGGEM-Torbjorn_491244?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-12",
    "height": 192.0,
    "weight": 80.0
   },
   {
    "id": "419681",
    "name": "Kristian Thorstvedt",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/4680df24-b4b3-46e5-9b38-01800898afa5/THORSTVEDT-Kristian_419681?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-13",
    "height": 189.0,
    "weight": 85.0
   },
   {
    "id": "494627",
    "name": "Thelo Aasgaard",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/46e2bce8-3733-457f-8307-9fd06eeda4ce/AASGAARD-Thelo_494627?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-02",
    "height": 188.0,
    "weight": 87.0
   },
   {
    "id": "483448",
    "name": "Antonio Nusa",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/8522d4db-c622-4f88-9b98-62753ca74eec/NUSA-Antonio_483448?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-04-17",
    "height": 183.0,
    "weight": 73.0
   },
   {
    "id": "494626",
    "name": "Andreas Schjelderup",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/22f44194-f9c4-46c1-8621-f9680f7d73bc/SCHJELDERUP-Andreas_494626?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-06-01",
    "height": 177.0,
    "weight": 72.0
   },
   {
    "id": "477470",
    "name": "Oscar Bobb",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/8cadf37e-ea31-43d7-bc0d-935e74adfe95/BOBB-Oscar_477470?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-12",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "419654",
    "name": "Jens Petter Hauge",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/6230b1c1-3c6f-4cfc-9afd-440e1cf3df09/HAUGE-Jens-Petter_419654?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-10-12",
    "height": 184.0,
    "weight": 75.0
   },
   {
    "id": "489696",
    "name": "Sondre Langas",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/31dda581-ef96-4ab5-a82d-9f5f59a3dd31/LANGAS-Sondre_489696?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-02-02",
    "height": 190.0,
    "weight": 86.0
   },
   {
    "id": "520112",
    "name": "Henrik Falchener",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/2990fade-76fd-431e-b7ec-6551ca61de8c/FALCHENER-Henrik_520112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-05-08",
    "height": 194.0,
    "weight": 86.0
   },
   {
    "id": "483496",
    "name": "Julian Ryerson",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/cf3ebe3b-012d-411b-af4e-ba0b59bb9e17/RYERSON-Julian_483496?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-17",
    "height": 186.0,
    "weight": 86.0
   }
  ]
 },
 {
  "id": "43914",
  "code": "PAN",
  "name": "Panama",
  "flag": "🇵🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/PAN",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#E41027",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group L",
  "topScorers": [
   "Adalberto CARRASQUILLA"
  ],
  "players": [
   {
    "id": "267702",
    "name": "Luis Mejia",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/2adff111-751a-46e3-b3c3-e3e37c8416cd/MEJIA-Luis_267702?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-03-16",
    "height": 193.0,
    "weight": 80.0
   },
   {
    "id": "441242",
    "name": "Cesar Blackman",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/b6125765-d10e-468b-a80a-be2118629de6/BLACKMAN-Cesar_441242?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-02",
    "height": 174.0,
    "weight": 77.0
   },
   {
    "id": "418715",
    "name": "Jose Cordoba",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/ba65e55e-dd66-4931-bae7-ca55b6f0c719/CORDOBA-Jose_418715?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-03",
    "height": 189.0,
    "weight": 88.0
   },
   {
    "id": "385030",
    "name": "Fidel Escobar",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/0163854c-2dc3-4f41-8994-af78cc54ad9f/ESCOBAR-Fidel_385030?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-09",
    "height": 184.0,
    "weight": 82.0
   },
   {
    "id": "480313",
    "name": "Edgardo Farina",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/9252feca-b71a-4c49-be3c-80a366e02c51/FARINA-Edgardo_480313?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-19",
    "height": 195.0,
    "weight": 86.0
   },
   {
    "id": "395581",
    "name": "Cristian Martinez",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/153e5b43-6e20-486d-bf4c-d0ff9615e9c6/MARTINEZ-Cristian_395581?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-06",
    "height": 170.0,
    "weight": 72.0
   },
   {
    "id": "411176",
    "name": "Jose Luis Rodriguez",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/61c1c941-31d5-456d-b55f-dc30700adba9/RODRIGUEZ-Jose-Luis_411176?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-19",
    "height": 180.0,
    "weight": 81.0
   },
   {
    "id": "385833",
    "name": "Adalberto Carrasquilla",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/e65ebda4-7a66-4117-98d1-f97c1bda19d5/CARRASQUILLA-Adalberto_385833?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-28",
    "height": 171.0,
    "weight": 78.0
   },
   {
    "id": "418747",
    "name": "Tomas Rodriguez",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/1f4bd86b-0e56-41f3-9f80-5e7388ff9848/RODRIGUEZ-Tomas_418747?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-09",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "372342",
    "name": "Ismael Diaz",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/5d8477c7-2f01-40fd-bc37-fbb35a936957/DIAZ-Ismael_372342?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-12",
    "height": 184.0,
    "weight": 81.0
   },
   {
    "id": "400416",
    "name": "Edgar Yoel Barcenas",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/c34b4b07-7452-4e8b-a429-ad73f1f9277d/BARCENAS-Edgar-Yoel_400416?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-10-23",
    "height": 175.0,
    "weight": 72.0
   },
   {
    "id": "441402",
    "name": "Cesar Samudio",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/7ad848a3-35dc-465c-b10b-e3ef9dcc7813/SAMUDIO-Cesar_441402?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-23",
    "height": 189.0,
    "weight": 91.0
   },
   {
    "id": "480310",
    "name": "Jiovany Ramos",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/eba19de2-1ee7-4c78-83c4-f273a6202f2e/RAMOS-Jiovany_480310?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-26",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "418729",
    "name": "Carlos Harvey",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/498810de-6369-469e-8df9-db21395d1ee0/HARVEY-Carlos_418729?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-03",
    "height": 184.0,
    "weight": 84.0
   },
   {
    "id": "337232",
    "name": "Eric Davis",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/15739adf-0945-4a5d-bafa-abfaa784cce9/DAVIS-Eric_337232?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-03-31",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "441240",
    "name": "Andres Andrade",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7cb0d726-e204-4173-830c-0384eb857207/ANDRADE-Andres_441240?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-16",
    "height": 187.0,
    "weight": 86.0
   },
   {
    "id": "411174",
    "name": "Jose Fajardo",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/b120b6ef-1340-49c3-9400-dbe883606d5e/FAJARDO-Jose_411174?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-08-18",
    "height": 184.0,
    "weight": 80.0
   },
   {
    "id": "337251",
    "name": "Cecilio Waterman",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/88587975-f375-48cb-bd3d-662e2095c8ca/WATERMAN-Cecilio_337251?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-04-13",
    "height": 180.0,
    "weight": 81.0
   },
   {
    "id": "271116",
    "name": "Alberto Quintero",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/98334cd9-f4b4-4f2f-9b57-5cc547a75ec8/QUINTERO-Alberto_271116?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-12-18",
    "height": 165.0,
    "weight": 62.0
   },
   {
    "id": "269514",
    "name": "Anibal Godoy",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/c0f17753-49b2-481c-8924-9f9f1b081bcf/GODOY-Anibal_269514?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-02-10",
    "height": 184.0,
    "weight": 82.0
   },
   {
    "id": "441243",
    "name": "Cesar Yanis",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/6a0310f0-a008-4d4e-adc9-d46fbf9ece31/YANIS-Cesar_441243?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-28",
    "height": 160.0,
    "weight": 57.0
   },
   {
    "id": "441241",
    "name": "Orlando Mosquera",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/050825b5-4cad-4874-8aa9-fdf8bda50819/MOSQUERA-Orlando_441241?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-12-25",
    "height": 191.0,
    "weight": 98.0
   },
   {
    "id": "385031",
    "name": "Amir Murillo",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/018c385a-4ec9-457e-8c6b-71ed2be9c0fd/MURILLO-Amir_385031?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-11",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "466669",
    "name": "Azarias Londono",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/cb7b28b7-dbcb-4240-a32d-c5e6cd289240/LONDONO-Azarias_466669?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-21",
    "height": 185.0,
    "weight": 87.0
   },
   {
    "id": "344582",
    "name": "Roderick Miller",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/c49e9539-7f3a-4566-bc73-0a1d80f69c85/MILLER-Roderick_344582?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-03",
    "height": 190.0,
    "weight": 86.0
   },
   {
    "id": "441239",
    "name": "Jorge Gutierrez",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/b324619d-d774-4bb5-876b-40845697efe8/GUTIERREZ-Jorge_441239?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-01",
    "height": 171.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "43928",
  "code": "PAR",
  "name": "Paraguay",
  "flag": "🇵🇾",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/PAR",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#DE0000",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Round of 16",
  "topScorers": [
   "Julio ENCISO"
  ],
  "players": [
   {
    "id": "318647",
    "name": "Gatito Fernandez",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/d606fc1a-1644-428f-ada8-69c93198e5b3/FERNANDEZ-Gatito_318647?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1988-03-29",
    "height": 191.0,
    "weight": 88.0
   },
   {
    "id": "486875",
    "name": "Gustavo Velazquez",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/3640b6b7-6993-46be-a35e-e6620579e3c7/VELAZQUEZ-Gustavo_486875?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-04-17",
    "height": 189.0,
    "weight": 79.0
   },
   {
    "id": "431202",
    "name": "Omar Alderete",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/2b408b3b-5027-445e-9b55-6139deed7bea/ALDERETE-Omar_431202?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-26",
    "height": 190.0,
    "weight": 87.0
   },
   {
    "id": "479601",
    "name": "Juan Jose Caceres",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/b465c59f-b480-4f3d-8f30-bb61a29aa6cb/CACERES-Juan-Jose_479601?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-01",
    "height": 187.0,
    "weight": 78.0
   },
   {
    "id": "394829",
    "name": "Fabian Balbuena",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/eac9ab63-eeed-412a-9ba7-4c5e6be05852/BALBUENA-Fabian_394829?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-08-23",
    "height": 188.0,
    "weight": 84.0
   },
   {
    "id": "369749",
    "name": "Junior Alonso",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/241fe8c3-a33e-411a-8eca-e81cc3fba926/ALONSO-Junior_369749?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-02-09",
    "height": 184.0,
    "weight": 81.0
   },
   {
    "id": "463125",
    "name": "Ramon Sosa",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/fb29327f-14b3-4b8f-af4e-3816404afaed/SOSA-Ramon_463125?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-31",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "463128",
    "name": "Diego Gomez",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/88e45d01-241d-4d9d-8b40-3f2cb2963d4d/GOMEZ-Diego_463128?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-03-27",
    "height": 183.0,
    "weight": 89.0
   },
   {
    "id": "369768",
    "name": "Antonio Sanabria",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/97bc175a-1e5c-417f-ab23-492237ddb3ab/SANABRIA-Antonio_369768?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-04",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "369761",
    "name": "Miguel Almiron",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/62600270-27f4-432a-8f1f-1014124829c1/ALMIRON-Miguel_369761?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-10",
    "height": 178.0,
    "weight": 65.0
   },
   {
    "id": "495046",
    "name": "Mauricio",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/20e6d2dd-4d4a-418b-ae0f-0cbcb299d61b/MAURICIO_495046?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-22",
    "height": 175.0,
    "weight": 77.0
   },
   {
    "id": "494531",
    "name": "Orlando Gill",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/29bae713-62ca-48da-8655-9c2caa0e728d/GILL-Orlando_494531?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-11",
    "height": 190.0,
    "weight": 83.0
   },
   {
    "id": "520066",
    "name": "Jose Canale",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/2039b54f-7036-444c-90d0-da1f89780077/CANALE-Jose_520066?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-20",
    "height": 192.0,
    "weight": 87.0
   },
   {
    "id": "385306",
    "name": "Andres Cubas",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5f115675-51fb-4e0c-ac8c-7226b762b4a1/CUBAS-Andres_385306?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-11",
    "height": 166.0,
    "weight": 63.0
   },
   {
    "id": "369744",
    "name": "Gustavo Gomez",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/d37c65ce-135e-4bd4-b870-2c2548b93e2d/GOMEZ-Gustavo_369744?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-05-06",
    "height": 179.0,
    "weight": 69.0
   },
   {
    "id": "476348",
    "name": "Damian Bobadilla",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/720524b9-bfc5-4139-a873-cba0a35bfa95/BOBADILLA-Damian_476348?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-11",
    "height": 180.0,
    "weight": 76.0
   },
   {
    "id": "386458",
    "name": "Alejandro Romero Gamarra",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/f1ba51b5-2593-413f-9d87-a464060e20ff/ROMERO-GAMARRA-Alejandro_386458?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-11",
    "height": 165.0,
    "weight": 74.0
   },
   {
    "id": "485802",
    "name": "Alex Arce",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/14209263-2bf9-442b-8d6b-485492f712dd/ARCE-Alex_485802?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-16",
    "height": 188.0,
    "weight": 83.0
   },
   {
    "id": "441234",
    "name": "Julio Enciso",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/aa8ef158-6636-46a9-a6fb-185a2f92ad95/ENCISO-Julio_441234?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-23",
    "height": 168.0,
    "weight": 64.0
   },
   {
    "id": "406205",
    "name": "Braian Ojeda",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/4075346b-2148-424c-b178-1a7cdd863bd2/OJEDA-Braian_406205?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-27",
    "height": 173.0,
    "weight": 67.0
   },
   {
    "id": "463127",
    "name": "Gabriel Avalos",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/58eb53dc-567a-489a-b2f9-3a905f5841b7/AVALOS-Gabriel_463127?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-07-09",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "447991",
    "name": "Gaston Olveira",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/732355e7-ab77-473e-b0eb-25ac3fcdaac2/OLVEIRA-Gaston_447991?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-04-21",
    "height": 191.0,
    "weight": 83.0
   },
   {
    "id": "424422",
    "name": "Matias Galarza",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/ce774da7-eea7-475e-8526-8227b5068dc3/GALARZA-Matias_424422?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-11",
    "height": 175.0,
    "weight": 67.0
   },
   {
    "id": "485804",
    "name": "Gustavo Caballero",
    "pos": "MF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/ccf6784f-8528-4d47-ba72-500d47ac51af/CABALLERO-Gustavo_485804?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-09-21",
    "height": 189.0,
    "weight": 75.0
   },
   {
    "id": "489417",
    "name": "Isidro Pitta",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/9b776bee-7e1b-47b0-b4ef-526ff72ac93f/PITTA-Isidro_489417?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-14",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "505495",
    "name": "Alexandro Maidana",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/e9ad29de-acf1-4cfd-b387-7edf7f480db4/MAIDANA-Alexandro_505495?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-07-26",
    "height": 173.0,
    "weight": 73.0
   }
  ]
 },
 {
  "id": "43963",
  "code": "POR",
  "name": "Portugal",
  "flag": "🇵🇹",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/POR",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FF0000",
  "accent": "#1B7F51",
  "host": false,
  "finalPosition": "Round of 16",
  "topScorers": [
   "CRISTIANO RONALDO"
  ],
  "players": [
   {
    "id": "403001",
    "name": "Diogo Costa",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/7c3541e5-a8cb-458c-b368-7f57c1b5ae03/DIOGO-COSTA_403001?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-19",
    "height": 188.0,
    "weight": 86.0
   },
   {
    "id": "395212",
    "name": "Nelson Semedo",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/7b97ea5c-f883-424a-9133-eead7e175b00/NELSON-SEMEDO_395212?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-16",
    "height": 179.0,
    "weight": 66.0
   },
   {
    "id": "384752",
    "name": "Ruben Dias",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/7eab2fa3-e7d1-4876-aaaa-a44a9e923750/RUBEN-DIAS_384752?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-14",
    "height": 187.0,
    "weight": 86.0
   },
   {
    "id": "492358",
    "name": "Tomas Araujo",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/e8840a7f-2bc5-44fb-a7bc-15d7a605691c/TOMAS-ARAUJO_492358?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-16",
    "height": 187.0,
    "weight": 85.0
   },
   {
    "id": "403002",
    "name": "Diogo Dalot",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/d9eaa8b4-91e3-4c4f-b501-4082718f5323/DIOGO-DALOT_403002?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-18",
    "height": 184.0,
    "weight": 82.0
   },
   {
    "id": "441148",
    "name": "Matheus Nunes",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/49ae9c75-e5f8-404a-8576-81e52d4c8338/MATHEUS-NUNES_441148?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-27",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "201200",
    "name": "Cristiano Ronaldo",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/7b63f223-fda2-4d56-b218-f143f0abd2d8/CRISTIANO-RONALDO_201200?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1985-02-05",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "395206",
    "name": "Bruno Fernandes",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/4a31c35d-c697-4c1a-ac51-a120b82a3d83/BRUNO-FERNANDES_395206?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-08",
    "height": 183.0,
    "weight": 64.0
   },
   {
    "id": "448081",
    "name": "Goncalo Ramos",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/040f6a55-0f54-430e-a03b-bb994ee40921/GONCALO-RAMOS_448081?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-20",
    "height": 185.0,
    "weight": 84.0
   },
   {
    "id": "395205",
    "name": "Bernardo Silva",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/97535989-5b6f-414b-a582-54a0c48df12a/BERNARDO-SILVA_395205?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-10",
    "height": 173.0,
    "weight": 63.0
   },
   {
    "id": "418535",
    "name": "Joao Felix",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/e1fd310b-cac5-47ef-95e9-9d0b8b41ba2f/JOAO-FELIX_418535?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-10",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "368689",
    "name": "Jose Sa",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/167fd8ff-0a3f-4c15-adc8-859e9d81caa3/JOSE-SA_368689?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-17",
    "height": 192.0,
    "weight": 80.0
   },
   {
    "id": "489704",
    "name": "Renato Veiga",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/556c6a9a-facb-4a04-8b68-15bee3974c9f/RENATO-VEIGA_489704?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-29",
    "height": 188.0,
    "weight": 74.0
   },
   {
    "id": "441146",
    "name": "Goncalo Inacio",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/636fe280-77cd-4db8-8c43-e499e1489e31/GONCALO-INACIO_441146?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-25",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "484141",
    "name": "Joao Neves",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/c79cf261-45b2-484b-860f-9adac3ed7d17/JOAO-NEVES_484141?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-09-27",
    "height": 171.0,
    "weight": 74.0
   },
   {
    "id": "418561",
    "name": "Francisco Trincao",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/3aaa45cd-d807-4825-9145-3b1865a009bb/FRANCISCO-TRINCAO_418561?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-29",
    "height": 184.0,
    "weight": 76.0
   },
   {
    "id": "418550",
    "name": "Rafael Leao",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/a5a760a7-7b47-42ed-8302-3ea75dbe9fc4/RAFAEL-LEAO_418550?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-10",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "418548",
    "name": "Pedro Neto",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/e4e58acb-f7af-402c-a7b8-e284583ce14f/PEDRO-NETO_418548?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-09",
    "height": 174.0,
    "weight": 78.0
   },
   {
    "id": "384751",
    "name": "Goncalo Guedes",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/ebae7760-2b89-4f53-bc2a-38b1b276f85b/GONCALO-GUEDES_384751?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-29",
    "height": 179.0,
    "weight": 72.0
   },
   {
    "id": "368649",
    "name": "Joao Cancelo",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/bb6c8016-d4b5-4434-9bba-1ec8cac37300/JOAO-CANCELO_368649?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-27",
    "height": 173.0,
    "weight": 65.0
   },
   {
    "id": "395216",
    "name": "Ruben Neves",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/884a330c-be4c-442d-becb-2d601c7574d1/RUBEN-NEVES_395216?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-13",
    "height": 183.0,
    "weight": 83.0
   },
   {
    "id": "448092",
    "name": "Rui Silva",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/11360803-25b9-4af9-b4a1-5916e0cd03cb/RUI-SILVA_448092?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-07",
    "height": 191.0,
    "weight": 78.0
   },
   {
    "id": "441149",
    "name": "Vitinha",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/8d21116d-608f-409b-932b-71c1ee1a043c/VITINHA_441149?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-13",
    "height": 170.0,
    "weight": 67.0
   },
   {
    "id": "491216",
    "name": "Samu Costa",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/38256f2e-7139-4848-b609-051bb4623b71/SAMU-COSTA_491216?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-27",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "433195",
    "name": "Nuno Mendes",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/f8d5d7b8-bb64-4427-80d1-911d68b2dd1a/NUNO-MENDES_433195?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-19",
    "height": 177.0,
    "weight": 81.0
   },
   {
    "id": "485081",
    "name": "Francisco Conceicao",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/1cb86e09-cf4e-4b60-8849-09d17dd1f8ad/FRANCISCO-CONCEICAO_485081?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-12-14",
    "height": 166.0,
    "weight": 67.0
   }
  ]
 },
 {
  "id": "43834",
  "code": "QAT",
  "name": "Qatar",
  "flag": "🇶🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/QAT",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#8D1B3D",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group B",
  "topScorers": [
   "HASSAN ALHAYDOS"
  ],
  "players": [
   {
    "id": "419459",
    "name": "Mahmoud Abunada",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/86cd9af3-c09a-4bcd-9830-fed9d7b19ab6/MAHMOUD-ABUNADA_419459?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-05",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "416051",
    "name": "Pedro Miguel",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/5bd982c9-0644-4fe3-836a-2b2d9b88db36/PEDRO-MIGUEL_416051?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-08-06",
    "height": 180.0,
    "weight": 85.0
   },
   {
    "id": "356673",
    "name": "Lucas Mendes",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/49a8906a-91a9-4527-b453-dbb1fe508c61/LUCAS-MENDES_356673?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-07-03",
    "height": 179.0,
    "weight": 65.0
   },
   {
    "id": "512791",
    "name": "Issa Laye",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/542d2f64-858e-4597-8f77-719b40da16dd/ISSA-LAYE_512791?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-22",
    "height": 178.0,
    "weight": 57.0
   },
   {
    "id": "419473",
    "name": "Jassem Gaber",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/14edcf5c-c52c-4a12-8078-40032f99dbd0/JASSEM-GABER_419473?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-20",
    "height": 181.0,
    "weight": 70.0
   },
   {
    "id": "345059",
    "name": "Abdulaziz Hatem",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/618c02bf-ef05-4651-bd3a-10ee566afcab/ABDULAZIZ-HATEM_345059?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-01-01",
    "height": 179.0,
    "weight": 68.0
   },
   {
    "id": "353251",
    "name": "Ahmed Alaaeldin",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/7a0a40ba-22fe-4585-8c3a-6bb981c6dfb4/AHMED-ALAAELDIN_353251?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-31",
    "height": 179.0,
    "weight": 66.0
   },
   {
    "id": "429063",
    "name": "Edmilson Junior",
    "pos": "FW",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/45fa6cc3-85e1-45eb-8881-3b31bcddc992/EDMILSON-JUNIOR_429063?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-08-19",
    "height": 180.0,
    "weight": 72.0
   },
   {
    "id": "385070",
    "name": "Mohammed Muntari",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/8a9260d2-027a-4716-af4b-7e5f2983e652/MOHAMMED-MUNTARI_385070?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-12-20",
    "height": 192.0,
    "weight": 82.0
   },
   {
    "id": "284190",
    "name": "Hassan Alhaydos",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/521889b3-16a2-48ef-92d4-6978a9e05cc6/HASSAN-ALHAYDOS_284190?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-12-11",
    "height": 174.0,
    "weight": 62.0
   },
   {
    "id": "386347",
    "name": "Akram Afif",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/b5995ed9-3969-48a1-abc7-abd8df77abda/AKRAM-AFIF_386347?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-18",
    "height": 176.0,
    "weight": 65.0
   },
   {
    "id": "354861",
    "name": "Karim Boudiaf",
    "pos": "MF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/d73feeea-8ce1-447c-a008-c9b71e1e6295/KARIM-BOUDIAF_354861?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-09-16",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "510991",
    "name": "Ayoub Aloui",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/bdeaddf2-602f-47d1-a3f0-a85abc80c3ff/AYOUB-ALOUI_510991?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-03-11",
    "height": 181.0,
    "weight": 65.0
   },
   {
    "id": "419441",
    "name": "Homam Ahmed",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5a182a95-d4c3-4618-838e-d374bbc576ba/HOMAM-AHMED_419441?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-25",
    "height": 188.0,
    "weight": 75.0
   },
   {
    "id": "419463",
    "name": "Yusuf Abdurisag",
    "pos": "FW",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/a114c943-718b-4345-b9da-54f1b8eb923c/YUSUF-ABDURISAG_419463?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-06",
    "height": 171.0,
    "weight": 63.0
   },
   {
    "id": "385067",
    "name": "Boualem Khoukhi",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c3e4cf4b-06b4-4c6b-9370-a64d8a4c8bfb/BOUALEM-KHOUKHI_385067?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1990-07-09",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "419436",
    "name": "Ahmed Alganehi",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e46c2cdd-7a8e-45c1-ab4f-9e09cb686245/AHMED-ALGANEHI_419436?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-22",
    "height": 175.0,
    "weight": 60.0
   },
   {
    "id": "386387",
    "name": "Sultan Albrake",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/333bc183-dd03-4b3a-8ee6-410a32c12e57/SULTAN-ALBRAKE_386387?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-07",
    "height": 178.0,
    "weight": 65.0
   },
   {
    "id": "386366",
    "name": "Almoez Ali",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/e49165f0-de52-4f7b-bb9a-689e7c4d4bd3/ALMOEZ-ALI_386366?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-19",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "433394",
    "name": "Ahmed Fathy",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/f465c1f2-aa85-4bc7-bf8d-4d5805b19cd9/AHMED-FATHY_433394?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-25",
    "height": 171.0,
    "weight": 67.0
   },
   {
    "id": "419461",
    "name": "Salah Zakaria",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/92c49982-ca93-4853-93ea-5f5a3d6a256d/SALAH-ZAKARIA_419461?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-24",
    "height": 186.0,
    "weight": 85.0
   },
   {
    "id": "416056",
    "name": "Meshaal Barsham",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/b5f22cd1-218d-478b-b4a3-f3b2fb832c39/MESHAAL-BARSHAM_416056?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-14",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "386348",
    "name": "Assim Madibo",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/2b2c6d70-e76e-41d8-baff-36ba0965fca3/ASSIM-MADIBO_386348?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-10-22",
    "height": 168.0,
    "weight": 72.0
   },
   {
    "id": "486639",
    "name": "Tahsin Mohammed",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/109e4fa0-f82a-4da0-8cf9-75d90a55b600/TAHSIN-JAMSHID_486639?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-06-16",
    "height": 166.0,
    "weight": 58.0
   },
   {
    "id": "486614",
    "name": "Alhashmi Alhussein",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/0565d28e-d1e2-4c0a-9f61-5992e3ed7202/ALHASHMI-ALHUSSEIN_486614?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-08-15",
    "height": 182.0,
    "weight": 67.0
   },
   {
    "id": "498458",
    "name": "Mohamed Manai",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/67e02103-4569-4a5c-a7a2-1f9b42cab1a5/MOHAMED-MANAI_498458?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-25",
    "height": 180.0,
    "weight": 68.0
   }
  ]
 },
 {
  "id": "43835",
  "code": "KSA",
  "name": "Saudi Arabia",
  "flag": "🇸🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/KSA",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#27A550",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group H",
  "topScorers": [
   "Abdulelah ALAMRI"
  ],
  "players": [
   {
    "id": "419287",
    "name": "Nawaf Alaqidi",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/6b95e954-e3fd-4ba9-a171-690c9626eced/NAWAF-ALAQIDI_419287?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-10",
    "height": 186.0,
    "weight": 88.0
   },
   {
    "id": "419326",
    "name": "Ali Majrashi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/3b436722-501d-4098-8daf-b298d010c530/ALI-MAJRASHI_419326?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-10-02",
    "height": 169.0,
    "weight": 68.0
   },
   {
    "id": "433439",
    "name": "Ali Lajami",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/27fa9b34-d37d-4416-a35f-fb6d234e9e8c/ALI-LAJAMI_433439?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-24",
    "height": 177.0,
    "weight": 71.0
   },
   {
    "id": "403312",
    "name": "Abdulelah Alamri",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/3ec8a8ea-beb5-4f8b-b8f6-66030bda5c4e/ABDULELAH-ALAMRI_403312?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-15",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "403335",
    "name": "Hassan Altambakti",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/e64a0c6b-4cc6-4ffb-bc98-b4af95bed8bf/ALTAMBAKTI-Hassan_403335?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-09",
    "height": 183.0,
    "weight": 83.0
   },
   {
    "id": "403319",
    "name": "Nasser Aldawsari",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/81e654c7-8273-4e1f-b909-62613fbf14ea/NASSER-ALDAWSARI_403319?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-12-19",
    "height": 178.0,
    "weight": 77.0
   },
   {
    "id": "436537",
    "name": "Musab Aljuwayr",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/c09997bc-1439-46be-a1f4-226d436e9eda/MUSAB-ALJUWAYR_436537?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-20",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "430512",
    "name": "Aiman Yahya",
    "pos": "FW",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/af0837e0-63e3-47e7-9b24-9676dcdf3c5c/AIMAN-YAHYA_430512?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-14",
    "height": 173.0,
    "weight": 72.0
   },
   {
    "id": "419291",
    "name": "Feras Albrikan",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/9d59c398-9c66-4dad-b20d-9694a0f74dd4/FERAS-ALBRIKAN_419291?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-14",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "339745",
    "name": "Salem Aldawsari",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/d167ee25-02d4-48c1-b6bf-ec1eea3a1633/SALEM-ALDAWSARI_339745?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-08-19",
    "height": 173.0,
    "weight": 71.0
   },
   {
    "id": "425804",
    "name": "Saleh Alshehri",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/a912d91a-f467-4d57-a2fc-7937f8cafb66/SALEH-ALSHEHRI_425804?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-01",
    "height": 184.0,
    "weight": 78.0
   },
   {
    "id": "419281",
    "name": "Saud Abdulhamid",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/66d9e01f-7f5e-4bef-b5bd-68d1ce4d9849/SAUD-ABDULHAMID_419281?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-07-18",
    "height": 172.0,
    "weight": 74.0
   },
   {
    "id": "430518",
    "name": "Nawaf Bu Washl",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/66433f37-d71a-4b14-ba06-da9d762320b4/NAWAF-BU-WASHL_430518?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-16",
    "height": 173.0,
    "weight": 63.0
   },
   {
    "id": "401924",
    "name": "Hassan Kadish",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/fc41abe4-036c-4c99-aa2a-b56ddece0c2d/HASSAN-KADISH_401924?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-09-26",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "411624",
    "name": "Abdullah Alkhaibari",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/16fa6436-2787-4e0c-b661-8fc766d029d6/ABDULLAH-ALKHAIBARI_411624?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-08-16",
    "height": 175.0,
    "weight": 66.0
   },
   {
    "id": "436538",
    "name": "Ziyad Aljohani",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/401feff3-37fd-40a9-90f6-d987eb3a8e40/ZIYAD-ALJOHANI_436538?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-11-11",
    "height": 180.0,
    "weight": 63.0
   },
   {
    "id": "419300",
    "name": "Khalid Alghannam",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/ab5b27fd-b17e-43a1-bd85-78119d057dab/KHALID-ALGHANNAM_419300?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-08",
    "height": 171.0,
    "weight": 68.0
   },
   {
    "id": "523333",
    "name": "Ala Alhajji",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/2fb42f50-394b-46d4-9038-9d9b09564b98/ALA-ALHAJJI_523333?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-03",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "419302",
    "name": "Abdullah Alhamddan",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/2bdfc07a-ee4d-46f1-bc76-a69bd5d9e9be/ABDULLAH-ALHAMDDAN_419302?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-13",
    "height": 186.0,
    "weight": 78.0
   },
   {
    "id": "494800",
    "name": "Sultan Mandash",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/f360115a-08e8-451c-9fb0-2af3944cd37a/SULTAN-MANDASH_494800?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-17",
    "height": 172.0,
    "weight": 68.0
   },
   {
    "id": "396885",
    "name": "Mohammed Alowais",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/be2d88f0-e368-49ef-9a33-c7585955c495/MOHAMMED-ALOWAIS_396885?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-10-10",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "339746",
    "name": "Ahmed Alkassar",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/1354d5cd-4cb5-4494-9033-efd38b3f1ac0/AHMED-ALKASSAR_339746?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-05-08",
    "height": 178.0,
    "weight": 78.0
   },
   {
    "id": "407993",
    "name": "Mohamed Kanno",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/c3eb4162-fd6d-41f1-aad4-1b632b266f19/MOHAMED-KANNO_407993?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-22",
    "height": 191.0,
    "weight": 67.0
   },
   {
    "id": "419303",
    "name": "Moteb Alharbi",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/0d671a6b-7632-46ee-91c7-39c01ee4b00c/MOTEB-ALHARBI_419303?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-20",
    "height": 177.0,
    "weight": 65.0
   },
   {
    "id": "494506",
    "name": "Jehad Thikri",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/0e99f4e8-6619-4e4c-8970-0443d31b83a0/JEHAD-THIKRI_494506?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-21",
    "height": 184.0,
    "weight": 75.0
   },
   {
    "id": "512183",
    "name": "Mohammed Abu Alshamat",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/8aee29b9-06b4-4b46-b529-3bb6adf5f9a6/MOHAMMED-ABU-ALSHAMAT_512183?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-08-11",
    "height": 170.0,
    "weight": 62.0
   }
  ]
 },
 {
  "id": "43967",
  "code": "SCO",
  "name": "Scotland",
  "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/SCO",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#1E1C71",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group C",
  "topScorers": [
   "John McGinn"
  ],
  "players": [
   {
    "id": "411301",
    "name": "Angus Gunn",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c13202b1-f3b1-4fe1-bc72-0ee5b3135bbc/GUNN-Angus_411301?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-22",
    "height": 196.0,
    "weight": 77.0
   },
   {
    "id": "442428",
    "name": "Aaron Hickey",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/36ab73b9-b07c-48d7-a2c2-da34b149b0d2/HICKEY-Aaron_442428?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-10",
    "height": 185.0,
    "weight": 72.0
   },
   {
    "id": "401339",
    "name": "Andy Robertson",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/ba94c3aa-e071-4add-b402-5d3f8df8acb9/ROBERTSON-Andy_401339?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-11",
    "height": 178.0,
    "weight": 64.0
   },
   {
    "id": "433787",
    "name": "Scott McTominay",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/483440e3-5bdc-46e2-9b80-77e880b5fd85/McTOMINAY-Scott_433787?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-08",
    "height": 193.0,
    "weight": 88.0
   },
   {
    "id": "359634",
    "name": "Grant Hanley",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/acc9b74c-859b-406f-add5-879c21150144/HANLEY-Grant_359634?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-11-20",
    "height": 188.0,
    "weight": 85.0
   },
   {
    "id": "401712",
    "name": "Kieran Tierney",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/d2b1d878-bbcc-4e16-bb77-7a90a01d0e37/TIERNEY-Kieran_401712?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-05",
    "height": 180.0,
    "weight": 73.0
   },
   {
    "id": "401334",
    "name": "John McGinn",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/af6ceadd-a14f-47c0-9f30-fd85d71a94cd/McGINN-John_401334?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-18",
    "height": 178.0,
    "weight": 68.0
   },
   {
    "id": "523007",
    "name": "Tyler Fletcher",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/eb1788f3-b3b1-41f9-b746-85ce1b077c14/FLETCHER-Tyler_523007?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-03-19",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "430098",
    "name": "Lyndon Dykes",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/e3a5c73f-1dd8-4e90-941a-f903ef96d7cc/DYKES-Lyndon_430098?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-10-07",
    "height": 188.0,
    "weight": 84.0
   },
   {
    "id": "433191",
    "name": "Che Adams",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/1a70c52f-9a4b-4dc1-813b-991877aa4758/ADAMS-Che_433191?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-13",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "430097",
    "name": "Ryan Christie",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/fce70106-25b4-4b34-b12b-10e4c6e90c18/CHRISTIE-Ryan_430097?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-02-22",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "442429",
    "name": "Liam Kelly",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/c1b8aa4f-e753-4748-915b-33661cc33845/KELLY-Liam_442429?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-23",
    "height": 184.0,
    "weight": 80.0
   },
   {
    "id": "430147",
    "name": "Jack Hendry",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/4c09cb0f-5174-41b5-a47e-dcfb5506b282/HENDRY-Jack_430147?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-05-07",
    "height": 192.0,
    "weight": 86.0
   },
   {
    "id": "442433",
    "name": "Ross Stewart",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/c0ef417d-f1aa-48e4-b9c4-ddb006ec53f5/STEWART-Ross_442433?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-11",
    "height": 188.0,
    "weight": 85.0
   },
   {
    "id": "442430",
    "name": "John Souttar",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/4b905694-87c7-4148-be4b-802e4dbcc7ba/SOUTTAR-John_442430?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-25",
    "height": 186.0,
    "weight": 75.0
   },
   {
    "id": "484073",
    "name": "Dominic Hyam",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/ab423ff9-7286-4242-8898-6d24bf8f1749/HYAM-Dominic_484073?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-20",
    "height": 188.0,
    "weight": 70.0
   },
   {
    "id": "485131",
    "name": "Ben Gannon-doak",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/7cf469cc-72f7-4c4b-9312-817920757af3/GANNON-DOAK-Ben_485131?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-11-11",
    "height": 173.0,
    "weight": 65.0
   },
   {
    "id": "495431",
    "name": "George Hirst",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/1c9c7ecc-b678-43e6-b8a3-8155776dd003/HIRST-George_495431?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-15",
    "height": 191.0,
    "weight": 81.0
   },
   {
    "id": "442434",
    "name": "Lewis Ferguson",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/d5d3101d-c2cb-4a29-bccf-914370459cfa/FERGUSON-Lewis_442434?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-24",
    "height": 181.0,
    "weight": 73.0
   },
   {
    "id": "484045",
    "name": "Lawrence Shankland",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/6a373a65-ca0e-4c4b-a61b-b98c73fdefdd/SHANKLAND-Lawrence_484045?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-08-10",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "215553",
    "name": "Craig Gordon",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/6bb645f8-c45e-4630-baf7-b7ddcd905a26/GORDON-Craig_215553?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1982-12-31",
    "height": 193.0,
    "weight": 83.0
   },
   {
    "id": "433694",
    "name": "Nathan Patterson",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/3fc20068-ff61-482e-ae76-b63e24985f42/PATTERSON-Nathan_433694?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-10-16",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "484051",
    "name": "Kenny McLEAN",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/e1f470ca-8805-4250-8c30-39aa30a16ac9/McLEAN-Kenny_484051?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-01-08",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "337389",
    "name": "Anthony Ralston",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/eef7a9cc-256c-4000-ae64-38407521d30b/RALSTON-Anthony_337389?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-16",
    "height": 178.0,
    "weight": 70.0
   },
   {
    "id": "520217",
    "name": "Findlay Curtis",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/a6c805c6-37f9-44e9-80a8-e43118e78762/CURTIS-Findlay_520217?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-06-09",
    "height": 180.0,
    "weight": 66.0
   },
   {
    "id": "442431",
    "name": "Scott Mckenna",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/073ebe12-5ba9-4de4-8729-2a0b0e942b43/McKENNA-Scott_442431?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-12",
    "height": 189.0,
    "weight": 74.0
   }
  ]
 },
 {
  "id": "43879",
  "code": "SEN",
  "name": "Senegal",
  "flag": "🇸🇳",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/SEN",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#FFDA17",
  "accent": "#F8E825",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Ismaila SARR"
  ],
  "players": [
   {
    "id": "494277",
    "name": "Yehvann Diouf",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/3b022d7d-d20e-42de-a08d-9e678dab3bc6/DIOUF-Yehvann_494277?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-11-16",
    "height": 188.0,
    "weight": 78.0
   },
   {
    "id": "499800",
    "name": "Mamadou Sarr",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/3abb3fa8-05e3-4973-adb7-ef4b941b8ec1/SARR-Mamadou_499800?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-08-29",
    "height": 194.0,
    "weight": 77.0
   },
   {
    "id": "339820",
    "name": "Kalidou Koulibaly",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/538bee26-1d47-4a95-a0f0-5d706f741e07/KOULIBALY-Kalidou_339820?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-06-20",
    "height": 186.0,
    "weight": 89.0
   },
   {
    "id": "370171",
    "name": "Abdoulaye Seck",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/d8107e3c-87b1-452f-9f6a-a704145d2d51/SECK-Abdoulaye_370171?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-06-04",
    "height": 192.0,
    "weight": 80.0
   },
   {
    "id": "332314",
    "name": "Idrissa Gana Gueye",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/4d275801-8b11-4fcc-bed0-ace70703da2d/IDRISSA-GANA-GUEYE_332314_1?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-09-26",
    "height": 174.0,
    "weight": 64.0
   },
   {
    "id": "448825",
    "name": "Pathe Ciss",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/fa3c3939-ed3d-46f5-9474-39fe481be534/CISS-Pathe_448825?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-16",
    "height": 186.0,
    "weight": 70.0
   },
   {
    "id": "484698",
    "name": "Assane Diao",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/2b8bf568-c645-4cbc-995a-5980c82e393b/DIAO-Assane_484698?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-09-07",
    "height": 185.0,
    "weight": 82.0
   },
   {
    "id": "464842",
    "name": "Lamine Camara",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/b8bad481-9270-4f53-92fd-ec70fbb7a06e/CAMARA-Lamine_464842?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-01",
    "height": 174.0,
    "weight": 70.0
   },
   {
    "id": "418781",
    "name": "Bamba Dieng",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/1c4c9caa-ee5b-49ef-afaf-159f1046f0eb/DIENG-Bamba_418781?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-23",
    "height": 178.0,
    "weight": 78.0
   },
   {
    "id": "353790",
    "name": "Sadio Mane",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/e0f75257-7c12-4777-a0d6-87b5d30f5548/MANE-Sadio_353790?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-10",
    "height": 175.0,
    "weight": 69.0
   },
   {
    "id": "418795",
    "name": "Nicolas Jackson",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/27569451-1271-4fb3-86ee-51e88e913ec7/JACKSON-Nicolas_418795?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-20",
    "height": 187.0,
    "weight": 83.0
   },
   {
    "id": "486168",
    "name": "Cherif Ndiaye",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/7839c6fe-1ef4-4201-84d7-4540216e1588/NDIAYE-Cherif_486168?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-01-23",
    "height": 190.0,
    "weight": 82.0
   },
   {
    "id": "448815",
    "name": "Iliman Ndiaye",
    "pos": "FW",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/6e228075-d552-4471-80b9-6beb5f574ac6/NDIAYE-Iliman_448815?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-06",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "430671",
    "name": "Ismail Jakobs",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/a24c412d-22cb-4d33-a341-e7f5e731756a/JAKOBS-Ismail_430671?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-17",
    "height": 184.0,
    "weight": 75.0
   },
   {
    "id": "403642",
    "name": "Krepin Diatta",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/29d66b6d-0e3d-4613-b399-d75741b2585d/DIATTA-Krepin_403642?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-25",
    "height": 173.0,
    "weight": 68.0
   },
   {
    "id": "433806",
    "name": "Edouard Mendy",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/9093beeb-51a2-4e1d-b700-73e094c6949c/MENDY-Edouard_433806?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-03-01",
    "height": 194.0,
    "weight": 97.0
   },
   {
    "id": "418798",
    "name": "Pape Matar Sarr",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/60281798-1792-4113-ba5c-fbfd3299270f/SARR-Pape-Matar_418798?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-09-14",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "401889",
    "name": "Ismaila Sarr",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/695226c6-92b8-4aa6-995e-dcdd2d08eb96/SARR-Ismaila_401889?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-25",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "430690",
    "name": "Moussa Niakhate",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/8f89704d-50da-430b-b9dd-1775cf3c0f29/NIAKHATE-Moussa_430690?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-03-08",
    "height": 190.0,
    "weight": 87.0
   },
   {
    "id": "496358",
    "name": "Ibrahim Mbaye",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/1583bcf3-3a11-4ebe-a9ef-18aba9e7f32b/MBAYE-Ibrahim_496358?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2008-01-24",
    "height": 175.0,
    "weight": 65.0
   },
   {
    "id": "486130",
    "name": "Habib Diarra",
    "pos": "MF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/87016310-d872-4f1d-b60a-2c9e702190d7/DIARRA-Habib_486130?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-03",
    "height": 178.0,
    "weight": 76.0
   },
   {
    "id": "523354",
    "name": "Bara Sapoko Ndiaye",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/957881a0-4f0a-4ff8-baf4-e0c73f844244/NDIAYE-Bara-Sapoko_523354?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-12-31",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "448821",
    "name": "Mory Diaw",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/79100f28-7542-4023-b782-e40ecd748f93/DIAW-Mory_448821?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-06-22",
    "height": 197.0,
    "weight": 84.0
   },
   {
    "id": "494279",
    "name": "Antoine Mendy",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/6e92b02c-cd04-4c63-a901-36d050c5f772/MENDY-Antoine_494279?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-05-27",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "464865",
    "name": "El Hadji Malick Diouf",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/39400519-512a-43ef-97f2-7760d679aea5/DIOUF-El-Hadji-Malick_464865?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-12-29",
    "height": 177.0,
    "weight": 69.0
   },
   {
    "id": "431788",
    "name": "Pape Gueye",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/ce2a3833-450c-413b-990f-7c76132e4913/GUEYE-Pape_431788?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-24",
    "height": 189.0,
    "weight": 76.0
   }
  ]
 },
 {
  "id": "43883",
  "code": "RSA",
  "name": "South Africa",
  "flag": "🇿🇦",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/RSA",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#FFD600",
  "accent": "#27A550",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Thapelo MASEKO"
  ],
  "players": [
   {
    "id": "395986",
    "name": "Ronwen Williams",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/b95f9142-251c-4943-911c-9c8d7ad8dd1c/WILLIAMS-Ronwen_395986?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-01-21",
    "height": 184.0,
    "weight": 84.0
   },
   {
    "id": "510850",
    "name": "Thabang Matuludi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/33d0c67e-6bf5-41cb-a8ab-ad1cb098d166/MATULUDI-Thabang_510850?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-14",
    "height": 189.0,
    "weight": 75.0
   },
   {
    "id": "504192",
    "name": "Khulumani Ndamane",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/a3360ef3-4418-4f0a-9f74-318bdfa4ffd8/NDAMANE-Khulumani_504192?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-02-05",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "403616",
    "name": "Teboho Mokoena",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/bf36679b-73eb-4813-a99d-b9673439dd05/MOKOENA-Teboho_403616?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-24",
    "height": 177.0,
    "weight": 76.0
   },
   {
    "id": "494248",
    "name": "Thalente Mbatha",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/5b2d0a1a-fe59-4136-90d3-4315c34b8500/MBATHA-Thalente_494248?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-06",
    "height": 179.0,
    "weight": 74.0
   },
   {
    "id": "395050",
    "name": "Aubrey Modiba",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/e5ddfbfb-b601-4ff8-83a5-f55162967798/MODIBA-Aubrey_395050?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-07-22",
    "height": 171.0,
    "weight": 73.0
   },
   {
    "id": "419223",
    "name": "Oswin Appollis",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/91646285-a63d-4aeb-8036-da1dd055d6b5/APPOLLIS-Oswin_419223?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-25",
    "height": 171.0,
    "weight": 70.0
   },
   {
    "id": "504193",
    "name": "Tshepang Moremi",
    "pos": "FW",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/5579f48c-4b61-4def-b314-75e873c36961/MOREMI-Tshepang_504193?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-02",
    "height": 169.0,
    "weight": 70.0
   },
   {
    "id": "419211",
    "name": "Lyle Foster",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/155c969c-63e1-438e-bd3d-ce587ac212c6/FOSTER-Lyle_419211?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-09-03",
    "height": 185.0,
    "weight": 79.0
   },
   {
    "id": "486161",
    "name": "Relebohile Mofokeng",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/4946f2f8-a809-451e-962b-7b7426bbd633/MOFOKENG-Relebohile_486161?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-10-23",
    "height": 168.0,
    "weight": 69.0
   },
   {
    "id": "395984",
    "name": "Themba Zwane",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/8d294899-e656-4484-91b7-99d646bc590c/ZWANE-Themba_395984?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-08-03",
    "height": 178.0,
    "weight": 71.0
   },
   {
    "id": "463234",
    "name": "Thapelo Maseko",
    "pos": "FW",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/a8c4c69e-b074-4a10-9bfc-38c85175560d/MASEKO-Thapelo_463234?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-11-11",
    "height": 178.0,
    "weight": 74.0
   },
   {
    "id": "390475",
    "name": "Sphephelo Sithole",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/200f1c50-a60a-4c33-ad94-b4dabd605f35/SITHOLE-Sphephelo_390475?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-03",
    "height": 197.0,
    "weight": 87.0
   },
   {
    "id": "504199",
    "name": "Mbekezeli Mbokazi",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/978b666d-f320-4d49-b717-a08fa7ae456f/MBOKAZI-Mbekezeli_504199?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-09-19",
    "height": 177.0,
    "weight": 64.0
   },
   {
    "id": "481242",
    "name": "Iqraam Rayners",
    "pos": "FW",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/f13ebf2a-3cac-4af7-bd73-2b70ed5ecc1a/RAYNERS-Iqraam_481242?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-19",
    "height": 174.0,
    "weight": 76.0
   },
   {
    "id": "494246",
    "name": "Sipho Chaine",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/c06e5903-d546-4bc6-a558-5ce40b336b64/CHAINE-Sipho_494246?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-14",
    "height": 186.0,
    "weight": 77.0
   },
   {
    "id": "430917",
    "name": "Evidence Makgopa",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/9c040766-d546-4007-9fa3-eb50206cd689/MAKGOPA-Evidence_430917?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-06-05",
    "height": 183.0,
    "weight": 74.0
   },
   {
    "id": "504200",
    "name": "Samukele Kabini",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/29044a18-4871-49d0-af81-0b0887b148dd/KABINI-Samukelo_504200?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-15",
    "height": 179.0,
    "weight": 78.0
   },
   {
    "id": "463221",
    "name": "Nkosinathi Sibisi",
    "pos": "DF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/1fb66990-444a-4e4b-9047-41c2542ea91a/SIBISI-Nkosinathi_463221?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-09-22",
    "height": 172.0,
    "weight": 79.0
   },
   {
    "id": "463218",
    "name": "Khuliso Mudau",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/29d0b36b-2727-4fc0-ab1e-4d21b5858f5a/MUDAU-Khuliso_463218?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-04-26",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "506039",
    "name": "Ime Okon",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/5f5d2eb3-3964-486f-9faa-800200078576/OKON-Ime_506039?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-02-20",
    "height": 187.0,
    "weight": 86.0
   },
   {
    "id": "395059",
    "name": "Ricardo Goss",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/2727bd1f-2d55-4a70-9bd5-58a96d4bf9bc/GOSS-Ricardo_395059?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-04-02",
    "height": 181.0,
    "weight": 80.0
   },
   {
    "id": "463236",
    "name": "Jayden Adams",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/d238f3d6-bc5d-44c6-b312-2989524bea12/ADAMS-Jayden_463236?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-05",
    "height": 177.0,
    "weight": 70.0
   },
   {
    "id": "502245",
    "name": "Olwethu Makhanya",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/97ff80ac-588e-4b15-8c20-5a3cbd7f30f8/MAKHANYA-Olwethu_502245?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-04-30",
    "height": 185.0,
    "weight": 72.0
   },
   {
    "id": "506038",
    "name": "Kamogelo Sebelebele",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/dcd49deb-cb7f-4620-8f79-98a802624026/SEBELEBELE-Kamogelo_506038?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-21",
    "height": 166.0,
    "weight": 55.0
   },
   {
    "id": "419225",
    "name": "Bradley Cross",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/6cee5a12-c935-4707-a3b8-2cad746fd5f5/CROSS-Bradley_419225?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-30",
    "height": 175.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "43969",
  "code": "ESP",
  "name": "Spain",
  "flag": "🇪🇸",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/ESP",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FF0000",
  "accent": "#FFC100",
  "host": false,
  "finalPosition": "Champions",
  "topScorers": [
   "Mikel OYARZABAL"
  ],
  "players": [
   {
    "id": "447853",
    "name": "David Raya",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/2a0b3279-e7c5-44c9-8f13-897d085e83bf/RAYA-David_447853?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-09-15",
    "height": 186.0,
    "weight": 82.0
   },
   {
    "id": "484728",
    "name": "Marc Pubill",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/fd21bf4f-bf7d-4917-8afd-3def8e7e5069/PUBILL-Marc_484728?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-20",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "391297",
    "name": "Alex Grimaldo",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/5517003d-ede4-43f5-a595-68e9bd17f6ca/GRIMALDO-Alex_391297?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-09-20",
    "height": 171.0,
    "weight": 67.0
   },
   {
    "id": "405562",
    "name": "Eric Garcia",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/96536fc5-7d12-442c-89ba-c7ccdae45d61/GARCIA-Eric_405562?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-01-09",
    "height": 183.0,
    "weight": 78.0
   },
   {
    "id": "382739",
    "name": "Marcos Llorente",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/ab948683-40c0-4af1-9038-b7f24da3ffc2/LLORENTE-Marcos_382739?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-30",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "430733",
    "name": "Mikel Merino",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/bcc810b0-5c45-4781-809e-beae8b68e1d8/MERINO-Mikel_430733?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-22",
    "height": 188.0,
    "weight": 85.0
   },
   {
    "id": "405545",
    "name": "Ferran Torres",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/aa65d133-f0fb-4379-9b1b-6c9dc2f40195/TORRES-Ferran_405545?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-29",
    "height": 183.0,
    "weight": 81.0
   },
   {
    "id": "430718",
    "name": "Fabian Ruiz",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/c40ded96-190d-41c8-90f2-6a253a63b33d/RUIZ-Fabian_430718?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-03",
    "height": 188.0,
    "weight": 82.0
   },
   {
    "id": "447866",
    "name": "Gavi",
    "pos": "MF",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/4a8278cb-43c6-4a1a-8aa8-896c67daf977/GAVI_447866?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-08-05",
    "height": 173.0,
    "weight": 70.0
   },
   {
    "id": "430750",
    "name": "Dani Olmo",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/c3f3e67a-90c1-469a-a4e1-263a470db989/OLMO-Dani_430750?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-07",
    "height": 179.0,
    "weight": 72.0
   },
   {
    "id": "423658",
    "name": "Yeremy Pino",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/40328b78-c5b4-4c63-a11e-e5d1491793ef/PINO-Yeremy_423658?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-10-20",
    "height": 174.0,
    "weight": 66.0
   },
   {
    "id": "430144",
    "name": "Pedro Porro",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/2c33b0c7-c399-4eac-98b2-66f35e77886a/PORRO-Pedro_430144?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-13",
    "height": 173.0,
    "weight": 73.0
   },
   {
    "id": "484691",
    "name": "Joan Garcia",
    "pos": "GK",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/08439f96-c835-4b28-9fc5-7e90d4e82738/GARCIA-Joan_484691?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-04",
    "height": 194.0,
    "weight": 86.0
   },
   {
    "id": "335999",
    "name": "Aymeric Laporte",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/e923ca38-381d-4187-9d40-9f5f72434530/LAPORTE-Aymeric_335999?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-05-27",
    "height": 191.0,
    "weight": 86.0
   },
   {
    "id": "447860",
    "name": "Alex Baena",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/19c2a085-e986-4c5b-8af7-aa98f7adc36e/BAENA-Alex_447860?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-20",
    "height": 172.0,
    "weight": 65.0
   },
   {
    "id": "411375",
    "name": "Rodri",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/295ab5b2-4dbf-42b9-918b-04fb4ae0ec0a/RODRI_411375?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-22",
    "height": 190.0,
    "weight": 90.0
   },
   {
    "id": "447855",
    "name": "Nico Williams",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/1792665e-37cb-421d-969b-e6a3edbd8d76/WILLIAMS-Nico_447855?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-12",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "430754",
    "name": "Martin Zubimendi",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/640def2c-056d-4b6d-8bcc-613b77f99160/ZUBIMENDI-Martin_430754?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-02",
    "height": 181.0,
    "weight": 78.0
   },
   {
    "id": "484320",
    "name": "Lamine Yamal",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/37b631d3-c340-4590-91a8-bb00bd5f1e89/YAMAL-Lamine_484320?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-07-13",
    "height": 183.0,
    "weight": 63.0
   },
   {
    "id": "423646",
    "name": "Pedri",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/75a5861e-008f-460c-81e4-8085fa2cc961/PEDRI_423646?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-25",
    "height": 174.0,
    "weight": 68.0
   },
   {
    "id": "430751",
    "name": "Mikel Oyarzabal",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/2f46ed20-b155-4201-8b97-badbc3619450/OYARZABAL-Mikel_430751?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-04-21",
    "height": 181.0,
    "weight": 80.0
   },
   {
    "id": "474973",
    "name": "Pau Cubarsi",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/02b8f052-fa36-41a9-807e-e8f7c6a96d61/CUBARSI-Pau_474973?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-01-22",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "430753",
    "name": "Unai Simon",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/41e0f920-bd7d-4bd6-882b-c83ed33e3f26/SIMON-Unai_430753?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-11",
    "height": 190.0,
    "weight": 88.0
   },
   {
    "id": "430735",
    "name": "Marc Cucurella",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/3bc6b871-a4b2-4201-8885-a77420f4c7c9/CUCURELLA-Marc_430735?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-22",
    "height": 173.0,
    "weight": 70.0
   },
   {
    "id": "492859",
    "name": "Victor Munoz",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/73c58323-50f9-463b-88f0-abce4d69067c/MUNOZ-Victor_492859?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-13",
    "height": 173.0,
    "weight": 70.0
   },
   {
    "id": "447864",
    "name": "Borja Iglesias",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/e90fda84-dae1-44e9-b030-9ce63b11b2d4/IGLESIAS-Borja_447864?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-01-17",
    "height": 187.0,
    "weight": 90.0
   }
  ]
 },
 {
  "id": "43970",
  "code": "SWE",
  "name": "Sweden",
  "flag": "🇸🇪",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/SWE",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#377E3F",
  "accent": "#005293",
  "host": false,
  "finalPosition": "Round of 32",
  "topScorers": [
   "Anthony ELANGA"
  ],
  "players": [
   {
    "id": "489685",
    "name": "Jacob Widell Zetterstrom",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c93a418b-3456-4b0f-b0e0-8cb27004aebb/WIDELL-ZETTERSTROM-Jacob_489685?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-11",
    "height": 197.0,
    "weight": 88.0
   },
   {
    "id": "483304",
    "name": "Gustaf Lagerbielke",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/12a80a14-c33d-480f-8742-315485c114c1/LAGERBIELKE-Gustaf_483304?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-10",
    "height": 193.0,
    "weight": 80.0
   },
   {
    "id": "395283",
    "name": "Victor Lindelof",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/88b96376-9f31-40fd-a0fc-ae12aab484c4/LINDELOF-Victor_395283?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-07-17",
    "height": 187.0,
    "weight": 82.0
   },
   {
    "id": "483312",
    "name": "Isak Hien",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/0daf43d1-2714-4cc3-ab8b-3cf2020bf150/HIEN-Isak_483312?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-13",
    "height": 191.0,
    "weight": 88.0
   },
   {
    "id": "483276",
    "name": "Gabriel Gudmundsson",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/43fd52e9-e3a9-46f6-8432-7bfbbb394678/GUDMUNDSSON-Gabriel_483276?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-29",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "514639",
    "name": "Herman Johansson",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/58eb2743-907e-4e6d-8020-28c8767e5cdc/JOHANSSON-Herman_514639?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-16",
    "height": 190.0,
    "weight": 84.0
   },
   {
    "id": "489689",
    "name": "Lucas Bergvall",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/bd927d6a-bb9d-4424-9e96-53c2ebc7220b/BERGVALL-Lucas_489689?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2006-02-02",
    "height": 187.0,
    "weight": 75.0
   },
   {
    "id": "491255",
    "name": "Daniel Svensson",
    "pos": "DF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/49dbfd16-1871-40c2-94d5-995f9e38cc04/SVENSSON-Daniel_491255?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-12",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "430150",
    "name": "Alexander Isak",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/c6ffe63b-aefd-43b8-bd9d-3c6e31a8f418/ISAK-Alexander_430150?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-09-21",
    "height": 190.0,
    "weight": 74.0
   },
   {
    "id": "502946",
    "name": "Benjamin Nygren",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/e464be99-48c1-41a9-b5aa-2c5760f1d302/NYGREN-Benjamin_502946?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-08",
    "height": 187.0,
    "weight": 76.0
   },
   {
    "id": "441137",
    "name": "Anthony Elanga",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/38e8d10e-aa56-4837-a589-35bc4dcc23a3/ELANGA-Anthony_441137?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-04-27",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "483264",
    "name": "Viktor Johansson",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/c311a4ac-f9ad-48d3-99dc-b9c53345d0f9/JOHANSSON-Viktor_483264?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-14",
    "height": 187.0,
    "weight": 80.0
   },
   {
    "id": "395286",
    "name": "Ken Sema",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/eb495b7c-f859-40c2-9327-9478faf03c24/SEMA-Ken_395286?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-09-30",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "483319",
    "name": "Hjalmar Ekdal",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/23439c93-9021-4c30-b8b1-45141ad89e8c/EKDAL-Hjalmar_483319?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-21",
    "height": 187.0,
    "weight": 76.0
   },
   {
    "id": "441132",
    "name": "Carl Starfelt",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/7c4b343c-446c-4d27-ab62-bb85ee559985/STARFELT-Carl_441132?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-01",
    "height": 185.0,
    "weight": 83.0
   },
   {
    "id": "441135",
    "name": "Jesper Karlstrom",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/0ed50024-cb6d-4fa5-bc7c-ba8a9afa7fd3/KARLSTROM-Jesper_441135?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-21",
    "height": 182.0,
    "weight": 81.0
   },
   {
    "id": "483327",
    "name": "Viktor Gyokeres",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/ca3d75bf-7e31-4269-9933-b296eb3f5bff/GYOKERES-Viktor_483327?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-04",
    "height": 189.0,
    "weight": 90.0
   },
   {
    "id": "489688",
    "name": "Yasin Ayari",
    "pos": "MF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/ac9ed8a6-7b39-4962-8245-b80556224ca0/AYARI-Yasin_489688?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-06",
    "height": 172.0,
    "weight": 69.0
   },
   {
    "id": "433795",
    "name": "Mattias Svanberg",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/0d003261-373c-46f2-90c6-34d700c027f6/SVANBERG-Mattias_433795?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-05",
    "height": 186.0,
    "weight": 77.0
   },
   {
    "id": "493061",
    "name": "Eric Smith",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/7f7bf320-92e1-4267-bc6b-56f2ec37e94f/SMITH-Eric_493061?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-08",
    "height": 192.0,
    "weight": 86.0
   },
   {
    "id": "502945",
    "name": "Alexander Bernhardsson",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/165d5004-48b5-4a8c-86ee-d7c982b9b96c/BERNHARDSSON-Alexander_502945?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-08",
    "height": 184.0,
    "weight": 70.0
   },
   {
    "id": "503047",
    "name": "Besfort Zeneli",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/7bd98883-dd6c-4e8f-954e-af31d070eac7/ZENELI-Besfort_503047?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-21",
    "height": 187.0,
    "weight": 71.0
   },
   {
    "id": "360496",
    "name": "Kristoffer Nordfeldt",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/747828c3-0592-411d-889a-9a59ae78e0b6/NORDFELDT-Kristoffer_360496?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-06-23",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "519958",
    "name": "Elliot Stroud",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/12d24b4c-5628-4013-8f4d-bddea4ae2258/STROUD-Elliot_519958?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-06-22",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "489691",
    "name": "Gustaf Nilsson",
    "pos": "FW",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/ba9d4008-fe99-49d2-afb3-c3a9d7a97da8/NILSSON-Gustaf_489691?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-05-23",
    "height": 197.0,
    "weight": 88.0
   },
   {
    "id": "514202",
    "name": "Taha Ali",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/9a70800c-37c4-4cd9-b195-f307dbaad09b/ALI-Taha_514202?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-01",
    "height": 174.0,
    "weight": 63.0
   }
  ]
 },
 {
  "id": "43971",
  "code": "SUI",
  "name": "Switzerland",
  "flag": "🇨🇭",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/SUI",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#E20000",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Quarter-final",
  "topScorers": [
   "Johan MANZAMBI"
  ],
  "players": [
   {
    "id": "448107",
    "name": "Gregor Kobel",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/8c199208-00cd-46ca-877b-f0fd4fb08e31/KOBEL-Gregor_448107?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-12-06",
    "height": 196.0,
    "weight": 91.0
   },
   {
    "id": "493221",
    "name": "Miro Muheim",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/d3efd73b-690b-417d-a645-0a45b5c00bc8/MUHEIM-Miro_493221?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-24",
    "height": 182.0,
    "weight": 82.0
   },
   {
    "id": "356412",
    "name": "Silvan Widmer",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/41a8791f-677e-4106-b2e4-9d71011c561d/WIDMER-Silvan_356412?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-05",
    "height": 183.0,
    "weight": 83.0
   },
   {
    "id": "398509",
    "name": "Nico Elvedi",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/5631cb24-dba7-44dd-ac2c-1c67b14d7649/ELVEDI-Nico_398509?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-09-30",
    "height": 189.0,
    "weight": 85.0
   },
   {
    "id": "405178",
    "name": "Manuel Akanji",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/3a90610e-9f70-434a-b8b0-450a1ea81d75/AKANJI-Manuel_405178?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-07-19",
    "height": 188.0,
    "weight": 95.0
   },
   {
    "id": "401448",
    "name": "Denis Zakaria",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/e47d229b-d092-4759-82e0-0e5f88b2c894/ZAKARIA-Denis_401448?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-11-20",
    "height": 189.0,
    "weight": 77.0
   },
   {
    "id": "393480",
    "name": "Breel Embolo",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/b2483096-041c-489b-a1c5-6d930f380909/EMBOLO-Breel_393480?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-14",
    "height": 184.0,
    "weight": 86.0
   },
   {
    "id": "402021",
    "name": "Remo Freuler",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/821a56dc-683d-4326-a784-21e25428a18f/FREULER-Remo_402021?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-04-15",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "502727",
    "name": "Johan Manzambi",
    "pos": "MF",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/a0cb9413-32ea-4b8f-9801-55474cb12b77/MANZAMBI-Johan_502727?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-10-14",
    "height": 182.0,
    "weight": 76.0
   },
   {
    "id": "311558",
    "name": "Granit Xhaka",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/a6c333cc-3042-4094-9ec0-094479b8ca3a/XHAKA-Granit_311558?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-09-27",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "448114",
    "name": "Dan Ndoye",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/b536dbbe-88a2-4caf-97c0-6baac25c43fe/NDOYE-Dan_448114?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-25",
    "height": 184.0,
    "weight": 72.0
   },
   {
    "id": "402022",
    "name": "Yvon Mvogo",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/66a48e5b-90b7-48fa-94b6-f91d76c28962/MVOGO-Yvon_402022?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-06",
    "height": 190.0,
    "weight": 88.0
   },
   {
    "id": "313559",
    "name": "Ricardo Rodriguez",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/07f27983-8eee-43f3-b68c-b45b6f806785/RODRIGUEZ-Ricardo_313559?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-08-25",
    "height": 182.0,
    "weight": 82.0
   },
   {
    "id": "448120",
    "name": "Ardon Jashari",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/9e9fc9ed-5b8e-4c1e-a4e3-c29201d34dae/JASHARI-Ardon_448120?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-30",
    "height": 181.0,
    "weight": 75.0
   },
   {
    "id": "411226",
    "name": "Djibril Sow",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/64b86b6f-824e-4ef9-aa1e-43cfff2a7df1/SOW-Djibril_411226?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-06",
    "height": 183.0,
    "weight": 76.0
   },
   {
    "id": "448124",
    "name": "Christian Fassnacht",
    "pos": "FW",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/7ece88c1-0971-4298-a4f1-00547bf2c889/FASSNACHT-Christian_448124?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-11-11",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "448131",
    "name": "Ruben Vargas",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/625f7ce0-81a9-4bab-9b18-c9ec395b5096/VARGAS-Ruben_448131?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-05",
    "height": 179.0,
    "weight": 70.0
   },
   {
    "id": "448136",
    "name": "Eray Coemert",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/9b17e0f6-f09e-417d-9829-857d7a7d1fa3/COEMERT-Eray_448136?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-04",
    "height": 183.0,
    "weight": 80.0
   },
   {
    "id": "448127",
    "name": "Noah Okafor",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/dd8abcd7-7775-4f67-9e25-eaa6e7cb2b97/OKAFOR-Noah_448127?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-24",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "433147",
    "name": "Michel Aebischer",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/33ced9ed-c3fd-4933-bc83-4a7a1465a94f/AEBISCHER-Michel_433147?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-06",
    "height": 183.0,
    "weight": 76.0
   },
   {
    "id": "484862",
    "name": "Marvin Keller",
    "pos": "GK",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/4c9ca839-ca31-4d4c-a620-3a5117c5efa8/KELLER-Marvin_484862?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-03",
    "height": 189.0,
    "weight": 89.0
   },
   {
    "id": "448103",
    "name": "Fabian Rieder",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/7e5b9fb5-dfcf-47e7-b185-ebd6d915e0be/RIEDER-Fabian_448103?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-02-16",
    "height": 181.0,
    "weight": 74.0
   },
   {
    "id": "448112",
    "name": "Zeki Amdouni",
    "pos": "FW",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/64a9489f-28d0-40ca-9592-3cda9cb7cac5/AMDOUNI-Zeki_448112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-04",
    "height": 183.0,
    "weight": 82.0
   },
   {
    "id": "484864",
    "name": "Aurele Amenda",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/f38da0cf-fda0-4f52-838c-0bb40ab279c8/AMENDA-Aurele_484864?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-07-31",
    "height": 194.0,
    "weight": 98.0
   },
   {
    "id": "510908",
    "name": "Luca Jaquez",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/2f3d611d-71c6-40ac-bc76-fdad78fe3c5e/JAQUEZ-Luca_510908?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-06-02",
    "height": 187.0,
    "weight": 83.0
   },
   {
    "id": "448104",
    "name": "Cedric Itten",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/b9cc3593-aa7e-4f6f-b22b-2cdeae513a1e/ITTEN-Cedric_448104?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-12-27",
    "height": 190.0,
    "weight": 82.0
   }
  ]
 },
 {
  "id": "43888",
  "code": "TUN",
  "name": "Tunisia",
  "flag": "🇹🇳",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/TUN",
  "group": "CAF",
  "confederation": "CAF",
  "color": "#E91426",
  "accent": "#FFFFFF",
  "host": false,
  "finalPosition": "Group F",
  "topScorers": [
   "Hazem MASTOURI"
  ],
  "players": [
   {
    "id": "520245",
    "name": "Mouhib Chamakh",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/7047e775-2f2c-4ea2-9ca6-6fc23363c591/CHAMAKH-Mouhib_520245?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-08-25",
    "height": 189.0,
    "weight": 85.0
   },
   {
    "id": "433362",
    "name": "Ali Abdi",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/8ff3509c-8a73-40ea-ac0e-1beed4560b23/ABDI-Ali_433362?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-12-20",
    "height": 177.0,
    "weight": 78.0
   },
   {
    "id": "433380",
    "name": "Montassar Talbi",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/253ef705-760c-457f-afde-067d2fb39010/TALBI-Montassar_433380?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-05-26",
    "height": 190.0,
    "weight": 80.0
   },
   {
    "id": "433367",
    "name": "Omar Rekik",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/2f586126-6a63-4e5b-9f85-6e15800449d9/REKIK-Omar_433367?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-12-20",
    "height": 188.0,
    "weight": 77.0
   },
   {
    "id": "516043",
    "name": "Adam Arous",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/7cbb37f5-5dcd-4fa9-919e-f3fe4f843868/AROUS-Adam_516043?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-07-17",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "411653",
    "name": "Dylan Bronn",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/9a7aa138-5845-4890-aa20-43f4021160ed/BRONN-Dylan_411653?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-19",
    "height": 186.0,
    "weight": 75.0
   },
   {
    "id": "448662",
    "name": "Elias Achouri",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/5ffd95df-83a5-4768-9331-0842c3f433b6/ACHOURI-Elias_448662?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-10",
    "height": 187.0,
    "weight": 74.0
   },
   {
    "id": "482885",
    "name": "Elias Saad",
    "pos": "FW",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/2037123b-a7b7-4922-adcd-37607cd92c43/SAAD-Elias_482885?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-12-27",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "494374",
    "name": "Hazem Mastouri",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/2565fb18-c785-4773-8d83-81c6fd25da1d/MASTOURI-Hazem_494374?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-18",
    "height": 191.0,
    "weight": 80.0
   },
   {
    "id": "433378",
    "name": "Hannibal Mejbri",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/856f0cc0-6dcc-48bc-a8db-f4fe26d8ae06/MEJBRI-Hannibal_433378?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-01-21",
    "height": 177.0,
    "weight": 73.0
   },
   {
    "id": "464484",
    "name": "Ismael Gharbi",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/cd471dba-dc7d-4688-9021-e704b66cec76/GHARBI-Ismael_464484?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-04-10",
    "height": 180.0,
    "weight": 77.0
   },
   {
    "id": "441362",
    "name": "Mortadha Ben Ouanes",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/b9afdecd-b04d-4224-be9b-50643fc77299/BEN-OUANES-Mortadha_441362?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-07-02",
    "height": 188.0,
    "weight": 74.0
   },
   {
    "id": "336459",
    "name": "Rani Khedira",
    "pos": "MF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/21f404b3-b430-489b-819c-c0460a2c3590/KHEDIRA-Rani_336459?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-01-27",
    "height": 188.0,
    "weight": 84.0
   },
   {
    "id": "512039",
    "name": "Khalil Ayari",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/9b51ba77-1740-47cc-93f1-1529287d27ea/AYARI-Khalil_512039?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-02-02",
    "height": 174.0,
    "weight": 70.0
   },
   {
    "id": "479781",
    "name": "Mohamed Hadj Mahmoud",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/bcdeb1a5-6411-40c5-bac8-576703796438/HADJ-MAHMOUD-Mohamed_479781?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-04-24",
    "height": 179.0,
    "weight": 78.0
   },
   {
    "id": "433365",
    "name": "Aymen Dahmen",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/90030173-815d-4411-8eac-20fb42834f9d/DAHMEN-Aymen_433365?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-01-28",
    "height": 188.0,
    "weight": 80.0
   },
   {
    "id": "411658",
    "name": "Ellyes Skhiri",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e2ba8e19-b4ab-435f-b12c-e56d655c31e6/SKHIRI-Ellyes_411658?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-05-10",
    "height": 185.0,
    "weight": 74.0
   },
   {
    "id": "520247",
    "name": "Rayan Elloumi",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/15445a99-9bc9-41c4-8d6f-c46ac25b3d5d/ELLOUMI-Rayan_520247?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-09-17",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "494375",
    "name": "Firas Chaouat",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/cf52c447-03a8-450b-a4b8-e238b1e3c071/CHAOUAT-Firas_494375?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-08",
    "height": 185.0,
    "weight": 70.0
   },
   {
    "id": "419189",
    "name": "Yan Valery",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/6ffa54d7-e23d-400d-a90a-960903c63f8b/VALERY-Yan_419189?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-22",
    "height": 181.0,
    "weight": 73.0
   },
   {
    "id": "425607",
    "name": "Mohamed Amine Ben Hmida",
    "pos": "DF",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/cb5fcd59-cbd1-4e4f-b5e7-f9adc81441e5/BEN-HMIDA-Mohamed-Amine_425607?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-12-15",
    "height": 181.0,
    "weight": 70.0
   },
   {
    "id": "372294",
    "name": "Sabri Ben Hessen",
    "pos": "GK",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/69fa6a49-0e30-42d4-afe1-83d6e38c1eed/BEN-HESSEN-Sabri_372294?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-13",
    "height": 189.0,
    "weight": 80.0
   },
   {
    "id": "506335",
    "name": "Moutaz Neffati",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/0f6a863a-959a-40ec-a07f-0c77d7c5a322/NEFFATI-Moutaz_506335?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-09-04",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "520246",
    "name": "Raed Chikhaoui",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/8ecb6694-a3aa-4efe-b13d-64a020109ec2/CHIKHAOUI-Raed_520246?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-06-09",
    "height": 191.0,
    "weight": 85.0
   },
   {
    "id": "433361",
    "name": "Anis Slimane",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/5a0e929e-a66f-4563-849e-c7bb62591b5d/SLIMANE-Anis_433361?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-16",
    "height": 188.0,
    "weight": 86.0
   },
   {
    "id": "504502",
    "name": "Sebastian Tounekti",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/29d9d0d2-28ec-4c0c-9861-a9d8062d5f9d/TOUNEKTI-Sebastian_504502?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-07-13",
    "height": 182.0,
    "weight": 80.0
   }
  ]
 },
 {
  "id": "43972",
  "code": "TUR",
  "name": "Türkiye",
  "flag": "🇹🇷",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/TUR",
  "group": "UEFA",
  "confederation": "UEFA",
  "color": "#FFFFFF",
  "accent": "#E30A17",
  "host": false,
  "finalPosition": "Group D",
  "topScorers": [
   "Baris Alper YILMAZ"
  ],
  "players": [
   {
    "id": "360498",
    "name": "Mert Gunok",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/1ce10157-fad1-435e-b21d-b4f25a483bc1/GUNOK-Mert_360498?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1989-03-01",
    "height": 196.0,
    "weight": 89.0
   },
   {
    "id": "433072",
    "name": "Zeki Celik",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/903b63c2-ab06-47b8-911c-bf4f026601fd/CELIK-Zeki_433072?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-02-17",
    "height": 180.0,
    "weight": 80.0
   },
   {
    "id": "441179",
    "name": "Merih Demiral",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/905e3e12-72e9-440d-96f5-0b3a48aebe92/DEMIRAL-Merih_441179?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-05",
    "height": 190.0,
    "weight": 89.0
   },
   {
    "id": "401167",
    "name": "Caglar Soyuncu",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/1b2e4fe1-8aec-4473-845b-d0ccb4e20a3a/SOYUNCU-Caglar_401167?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-05-23",
    "height": 185.0,
    "weight": 88.0
   },
   {
    "id": "389907",
    "name": "Salih Ozcan",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/1e968b8d-1b4c-4bce-86b7-8a4ad87eef3a/OZCAN-Salih_389907?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-01-11",
    "height": 182.0,
    "weight": 81.0
   },
   {
    "id": "433118",
    "name": "Orkun Kokcu",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/90a510ff-865f-4293-a59b-8a92e12a89b0/KOKCU-Orkun_433118?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-29",
    "height": 175.0,
    "weight": 82.0
   },
   {
    "id": "441188",
    "name": "Kerem Akturkoglu",
    "pos": "FW",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/9cccf7c0-ebfc-4b65-8587-74742f5a9992/AKTURKOGLU-Kerem_441188?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-21",
    "height": 172.0,
    "weight": 73.0
   },
   {
    "id": "484087",
    "name": "Arda Guler",
    "pos": "FW",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/e2f26175-13ac-4850-acd7-6408de06ce19/GULER-Arda_484087?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-02-25",
    "height": 175.0,
    "weight": 74.0
   },
   {
    "id": "495347",
    "name": "Deniz Gul",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/92368352-f3ab-459f-bb72-4a7e432dd39a/GUL-Deniz_495347?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-07-02",
    "height": 192.0,
    "weight": 92.0
   },
   {
    "id": "369304",
    "name": "Hakan Calhanoglu",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/f192cf34-173f-47b3-9748-981bd3f21275/CALHANOGLU-Hakan_369304?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-02-08",
    "height": 178.0,
    "weight": 75.0
   },
   {
    "id": "484112",
    "name": "Kenan Yildiz",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/7dff809e-a965-4b36-a7b5-8da772fc96a5/YILDIZ-Kenan_484112?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-05-04",
    "height": 187.0,
    "weight": 84.0
   },
   {
    "id": "441180",
    "name": "Altay Bayindir",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/f8c86015-cce5-4965-9d7c-183ef908079a/BAYINDIR-Altay_441180?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-04-14",
    "height": 198.0,
    "weight": 90.0
   },
   {
    "id": "484065",
    "name": "Eren Elmali",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/9e9cf618-403b-4984-801d-3e82f0e11d3e/ELMALI-Eren_484065?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-07",
    "height": 181.0,
    "weight": 77.0
   },
   {
    "id": "484082",
    "name": "Abdulkerim Bardakci",
    "pos": "DF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/de2b1023-3aee-4233-b83d-07f94fd288d4/BARDAKCI-Abdulkerim_484082?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-09-07",
    "height": 185.0,
    "weight": 91.0
   },
   {
    "id": "406249",
    "name": "Ozan Kabak",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/c42910db-c5e6-4706-bc99-1e08456bd3ef/KABAK-Ozan_406249?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-25",
    "height": 187.0,
    "weight": 87.0
   },
   {
    "id": "484092",
    "name": "Ismail Yuksek",
    "pos": "MF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/1f8b0453-0b84-4eea-9c24-9cd992611aed/YUKSEK-Ismail_484092?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-01-26",
    "height": 183.0,
    "weight": 75.0
   },
   {
    "id": "472877",
    "name": "Irfan Can Kahveci",
    "pos": "FW",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/4661ea5f-9a56-4047-bbcf-6748250e0ebe/KAHVECI-Irfan-Can_472877?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-07-15",
    "height": 180.0,
    "weight": 78.0
   },
   {
    "id": "430120",
    "name": "Mert Muldur",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/61f43913-2824-4711-9838-0d620f393353/MULDUR-Mert_430120?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-03",
    "height": 184.0,
    "weight": 74.0
   },
   {
    "id": "406231",
    "name": "Yunus Akgun",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/32587fe7-0e67-4aa1-8b07-3a1618183e80/AKGUN-Yunus_406231?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-07-07",
    "height": 173.0,
    "weight": 72.0
   },
   {
    "id": "484113",
    "name": "Ferdi Kadioglu",
    "pos": "DF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/c69621e7-9ba5-438d-89dc-7871b6e0f611/KADIOGLU-Ferdi_484113?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-10-07",
    "height": 174.0,
    "weight": 74.0
   },
   {
    "id": "484139",
    "name": "Baris Alper Yilmaz",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/49e46d17-bf69-41b1-a8df-5aeabf137c7d/YILMAZ-Baris-Alper_484139?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-23",
    "height": 186.0,
    "weight": 86.0
   },
   {
    "id": "336170",
    "name": "Kaan Ayhan",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/e9747d8e-47e9-45f3-b3b7-d3caf1ba1ecf/AYHAN-Kaan_336170?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-11-10",
    "height": 185.0,
    "weight": 88.0
   },
   {
    "id": "441181",
    "name": "Ugurcan Cakir",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/6cedaf47-2a99-4e31-bb0d-46ce78df26a6/CAKIR-Ugurcan_441181?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-04-05",
    "height": 191.0,
    "weight": 85.0
   },
   {
    "id": "486076",
    "name": "Oguz Aydin",
    "pos": "FW",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/b29233e3-0131-45eb-96e4-ad77044a1959/AYDIN-Oguz_486076?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-27",
    "height": 183.0,
    "weight": 77.0
   },
   {
    "id": "484072",
    "name": "Samet Akaydin",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/72f4dcdb-4463-412b-8ea1-9cb25d4fe44d/AKAYDIN-Samet_484072?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-03-13",
    "height": 190.0,
    "weight": 85.0
   },
   {
    "id": "486074",
    "name": "Can Uzun",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/18128593-2c01-460e-9db1-9212fa7dc369/UZUN-Can_486074?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2005-11-11",
    "height": 186.0,
    "weight": 85.0
   }
  ]
 },
 {
  "id": "43921",
  "code": "USA",
  "name": "USA",
  "flag": "🇺🇸",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/USA",
  "group": "CONCACAF",
  "confederation": "CONCACAF",
  "color": "#0326DE",
  "accent": "#DE121D",
  "host": true,
  "finalPosition": "Round of 16",
  "topScorers": [
   "Folarin BALOGUN"
  ],
  "players": [
   {
    "id": "448217",
    "name": "Matt Turner",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/01fb042f-5de5-41df-8104-7445672fdca5/TURNER-Matt_448217?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-24",
    "height": 190.0,
    "weight": 79.0
   },
   {
    "id": "406280",
    "name": "Sergino Dest",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/5ee00bd8-552e-4e02-b680-b16534e53493/DEST-Sergino_406280?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-11-03",
    "height": 173.0,
    "weight": 62.0
   },
   {
    "id": "419062",
    "name": "Chris Richards",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/54036d3d-1588-4634-944b-a7c2d97d0b76/RICHARDS-Chris_419062?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-28",
    "height": 189.0,
    "weight": 93.0
   },
   {
    "id": "390238",
    "name": "Tyler Adams",
    "pos": "MF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/7fdbded2-aa27-44b1-9bf1-ff1d17c58f86/ADAMS-Tyler_390238?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-14",
    "height": 175.0,
    "weight": 72.0
   },
   {
    "id": "441251",
    "name": "Antonee Robinson",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/62363054-d9e0-4926-9404-90b975d56647/ROBINSON-Antonee_441251?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-08-08",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "390272",
    "name": "Auston Trusty",
    "pos": "DF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/e14ee5aa-4770-492a-9e51-95343310e5d9/TRUSTY-Auston_390272?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-12",
    "height": 190.0,
    "weight": 78.0
   },
   {
    "id": "419068",
    "name": "Giovanni Reyna",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/b30d701d-d9eb-4b2d-8db4-6841fc9ed1a9/REYNA-Giovanni_419068?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-11-13",
    "height": 187.0,
    "weight": 79.0
   },
   {
    "id": "390259",
    "name": "Weston McKENNIE",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/4406f0ad-8f60-4a98-89c0-89797bfe804d/McKENNIE-Weston_390259?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-28",
    "height": 180.0,
    "weight": 88.0
   },
   {
    "id": "419082",
    "name": "Ricardo Pepi",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/2a7c4d85-fa83-40ec-a953-d4cebbd63480/PEPI-Ricardo_419082?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-01-09",
    "height": 185.0,
    "weight": 73.0
   },
   {
    "id": "390267",
    "name": "Christian Pulisic",
    "pos": "FW",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/34d1c247-2a09-4fd6-87bc-71ec687a54aa/PULISIC-Christian_390267?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-18",
    "height": 177.0,
    "weight": 73.0
   },
   {
    "id": "419055",
    "name": "Brenden Aaronson",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/8352f743-68bc-4077-ad83-5cd22f1a62dd/AARONSON-Brenden_419055?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-10-22",
    "height": 177.0,
    "weight": 66.0
   },
   {
    "id": "436599",
    "name": "Miles Robinson",
    "pos": "DF",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/30b49573-5890-4dc2-8e78-a8ab7d00d43e/ROBINSON-Miles_436599?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-03-14",
    "height": 187.0,
    "weight": 88.0
   },
   {
    "id": "339510",
    "name": "Tim Ream",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/964be907-1e8e-49ec-bd7f-7085cf7d79d3/REAM-Tim_339510?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1987-10-05",
    "height": 186.0,
    "weight": 79.0
   },
   {
    "id": "499912",
    "name": "Sebastian Berhalter",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/ef9aedbe-e6e8-4eba-9e62-beac982879ef/BERHALTER-Sebastian_499912?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-05-10",
    "height": 175.0,
    "weight": 69.0
   },
   {
    "id": "385994",
    "name": "Cristian Roldan",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/8b0d52a9-62d1-4e23-9a23-e786cfde39dd/ROLDAN-Cristian_385994?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-03",
    "height": 173.0,
    "weight": 75.0
   },
   {
    "id": "464542",
    "name": "Alex Freeman",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/554008b5-0520-4b67-8cab-c72ba087471f/FREEMAN-Alex_464542?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-08-09",
    "height": 188.0,
    "weight": 81.0
   },
   {
    "id": "448214",
    "name": "Malik Tillman",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/c8c38ca3-7100-4bca-88e7-4ea66fd86ff7/TILLMAN-Malik_448214?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-05-28",
    "height": 187.0,
    "weight": 71.0
   },
   {
    "id": "486390",
    "name": "Max Arfsten",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/3670d375-3a2f-41c8-8c5a-9c9bbd8f93f4/ARFSTEN-Max_486390?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-19",
    "height": 185.0,
    "weight": 77.0
   },
   {
    "id": "390276",
    "name": "Haji Wright",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/31951bf6-a6b5-4646-b489-a2ca3fd4e550/WRIGHT-Haji_390276?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-03-27",
    "height": 191.0,
    "weight": 80.0
   },
   {
    "id": "466624",
    "name": "Folarin Balogun",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/bd47db79-966e-4eba-a8da-f6ba01148f27/BALOGUN-Folarin_466624?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-07-03",
    "height": 179.0,
    "weight": 66.0
   },
   {
    "id": "406304",
    "name": "Timothy Weah",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/c0dcfa0a-b862-4cd2-9c33-034bd18dc231/WEAH-Timothy_406304?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-22",
    "height": 183.0,
    "weight": 66.0
   },
   {
    "id": "419077",
    "name": "Mark McKENZIE",
    "pos": "DF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/492ad87d-f9a1-449e-9361-64323405107b/McKENZIE-Mark_419077?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-02-25",
    "height": 186.0,
    "weight": 84.0
   },
   {
    "id": "423700",
    "name": "Joe Scally",
    "pos": "DF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/86a32b0d-9007-4451-bbc6-a383a284f32f/SCALLY-Joe_423700?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2002-12-31",
    "height": 184.0,
    "weight": 80.0
   },
   {
    "id": "499913",
    "name": "Matt Freese",
    "pos": "GK",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/c46f695b-3acc-4360-abf4-3110ff60d86e/FREESE-Matt_499913?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-09-02",
    "height": 198.0,
    "weight": 85.0
   },
   {
    "id": "464546",
    "name": "Chris Brady",
    "pos": "GK",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/843ccc00-8c38-4a4e-91ba-a25694677cf0/BRADY-Chris_464546?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-03-03",
    "height": 193.0,
    "weight": 83.0
   },
   {
    "id": "390278",
    "name": "Alex Zendejas",
    "pos": "FW",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/c23fe669-c31a-45e3-b5b2-bbe9ecb8b4de/ZENDEJAS-Alex_390278?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-07",
    "height": 167.0,
    "weight": 66.0
   }
  ]
 },
 {
  "id": "43930",
  "code": "URU",
  "name": "Uruguay",
  "flag": "🇺🇾",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/URU",
  "group": "CONMEBOL",
  "confederation": "CONMEBOL",
  "color": "#7EC1FF",
  "accent": "#FFC100",
  "host": false,
  "finalPosition": "Group H",
  "topScorers": [
   "Maxi ARAUJO"
  ],
  "players": [
   {
    "id": "368664",
    "name": "Sergio Rochet",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/b5a98e25-83d4-441e-9c25-0eb4581277dc/ROCHET-Sergio_368664?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-23",
    "height": 189.0,
    "weight": 83.0
   },
   {
    "id": "368655",
    "name": "Jose Maria Gimenez",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/977da143-5380-497d-85f7-d6e5ca34b27c/GIMENEZ-Jose-Maria_368655?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-01-20",
    "height": 186.0,
    "weight": 79.0
   },
   {
    "id": "419108",
    "name": "Sebastian Caceres",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/f959cef5-7f3b-4baa-af52-c8972780fbce/CACERES-Sebastian_419108?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-18",
    "height": 180.0,
    "weight": 88.0
   },
   {
    "id": "419101",
    "name": "Ronald Araujo",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/41008beb-38a3-46e0-9229-229d0afc8db7/ARAUJO-Ronald_419101?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-03-07",
    "height": 185.0,
    "weight": 81.0
   },
   {
    "id": "441623",
    "name": "Manuel Ugarte",
    "pos": "MF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/4ff94bd7-9c21-4338-be92-bad080e8d541/UGARTE-Manuel_441623?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-04-11",
    "height": 182.0,
    "weight": 75.0
   },
   {
    "id": "386538",
    "name": "Rodrigo Bentancur",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/148bf081-d6bb-4b52-8db0-9231126fa762/BENTANCUR-Rodrigo_386538?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-25",
    "height": 187.0,
    "weight": 73.0
   },
   {
    "id": "402898",
    "name": "Nicolas De La Cruz",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/7694c9e6-d4f9-4f60-8173-5a3a79bcaaa2/DE-LA-CRUZ-Nicolas_402898?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-06-01",
    "height": 167.0,
    "weight": 66.0
   },
   {
    "id": "402884",
    "name": "Federico Valverde",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/bc29f114-2d51-4605-ae7a-eadf774e9d38/VALVERDE-Federico_402884?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-22",
    "height": 182.0,
    "weight": 78.0
   },
   {
    "id": "419126",
    "name": "Darwin Nunez",
    "pos": "FW",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/078805a6-5fbe-44f3-a58c-ed3837ca5665/NUNEZ-Darwin_419126?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-06-24",
    "height": 185.0,
    "weight": 78.0
   },
   {
    "id": "368652",
    "name": "Giorgian De Arrascaeta",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/ddf1b0a3-7ee9-4da9-b89e-773dc228fa58/DE-ARRASCAETA-Giorgian_368652?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-06-01",
    "height": 177.0,
    "weight": 71.0
   },
   {
    "id": "439956",
    "name": "Facundo Pellistri",
    "pos": "FW",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/51b7eeb6-cac1-48cd-9ed3-4a18b34c5d90/PELLISTRI-Facundo_439956?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-12-20",
    "height": 174.0,
    "weight": 72.0
   },
   {
    "id": "402897",
    "name": "Santiago Mele",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/39573fa9-f716-4703-b772-cf1892d1b748/MELE-Santiago_402897?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-06",
    "height": 185.0,
    "weight": 80.0
   },
   {
    "id": "368660",
    "name": "Guillermo Varela",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/5e8ec886-a385-4ca6-9e90-d16b13c37534/VARELA-Guillermo_368660?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-03-24",
    "height": 174.0,
    "weight": 76.0
   },
   {
    "id": "402876",
    "name": "Agustin Canobbio",
    "pos": "MF",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/5985fa52-e467-4c1c-95f2-355bd1cb3925/CANOBBIO-Agustin_402876?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-10-01",
    "height": 176.0,
    "weight": 81.0
   },
   {
    "id": "473062",
    "name": "Emiliano Martinez",
    "pos": "MF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/0cf69c75-fc91-401b-a1f3-f8f833c87eed/MARTINEZ-Emiliano_473062?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-17",
    "height": 184.0,
    "weight": 65.0
   },
   {
    "id": "402893",
    "name": "Mathias Olivera",
    "pos": "DF",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/704d2d9d-1b5f-4296-87f4-b7b591a58116/OLIVERA-Mathias_402893?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-31",
    "height": 174.0,
    "weight": 75.0
   },
   {
    "id": "402895",
    "name": "Matias Vina",
    "pos": "DF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/b8714c68-0892-4c4f-8a51-deabf1e13879/VINA-Matias_402895?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-11-09",
    "height": 180.0,
    "weight": 74.0
   },
   {
    "id": "419132",
    "name": "Brian Rodriguez",
    "pos": "FW",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/c6c94193-1372-4e11-94b5-35bcdd575e62/RODRIGUEZ-Brian_419132?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-05-20",
    "height": 175.0,
    "weight": 70.0
   },
   {
    "id": "332897",
    "name": "Rodrigo Aguirre",
    "pos": "FW",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/eadeb58a-387f-4979-ae12-23a0296c172c/AGUIRRE-Rodrigo_332897?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1994-10-01",
    "height": 182.0,
    "weight": 79.0
   },
   {
    "id": "419100",
    "name": "Maxi Araujo",
    "pos": "MF",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/f1a7af03-ada1-4642-927c-5fe06844c89c/ARAUJO-Maxi_419100?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-02-15",
    "height": 176.0,
    "weight": 71.0
   },
   {
    "id": "477536",
    "name": "Federico Vinas",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/d89cb053-d9ce-4999-91da-7e9b58f2682a/VINAS-Federico_477536?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-06-30",
    "height": 181.0,
    "weight": 85.0
   },
   {
    "id": "439538",
    "name": "Joaquin Piquerez",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/327d3db2-1e08-4b63-8026-90c136c51612/PIQUEREZ-Joaquin_439538?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-08-24",
    "height": 185.0,
    "weight": 75.0
   },
   {
    "id": "229498",
    "name": "Fernando Muslera",
    "pos": "GK",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/bec34ba5-7129-44fe-b108-bc57a1fd3257/MUSLERA-Fernando_229498?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1986-06-16",
    "height": 190.0,
    "weight": 74.0
   },
   {
    "id": "402904",
    "name": "Santiago Bueno",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/cb547d8e-b176-46d1-8ae0-d53d106d168c/BUENO-Santiago_402904?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-11-09",
    "height": 191.0,
    "weight": 73.0
   },
   {
    "id": "419134",
    "name": "Juan Manuel Sanabria",
    "pos": "MF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/ad89e83d-ec32-4c30-a78f-1255d03ac0ed/SANABRIA-Juan-Manuel_419134?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-29",
    "height": 170.0,
    "weight": 65.0
   },
   {
    "id": "419142",
    "name": "Rodrigo Zalazar",
    "pos": "MF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/4b33d4cb-ddc9-4183-abbb-1f848e8c14a8/ZALAZAR-Rodrigo_419142?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-08-12",
    "height": 175.0,
    "weight": 70.0
   }
  ]
 },
 {
  "id": "44005",
  "code": "UZB",
  "name": "Uzbekistan",
  "flag": "🇺🇿",
  "flagUrl": "https://api.fifa.com/api/v3/picture/flags-sq-4/UZB",
  "group": "AFC",
  "confederation": "AFC",
  "color": "#112BB3",
  "accent": "#1EB53A",
  "host": false,
  "finalPosition": "Group K",
  "topScorers": [
   "Abbosbek FAYZULLAEV"
  ],
  "players": [
   {
    "id": "479077",
    "name": "Utkir Yusupov",
    "pos": "GK",
    "no": 1,
    "photo": "https://digitalhub.fifa.com/transform/c3025d34-eb01-4b77-85bd-127f692514c8/YUSUPOV-Utkir_479077?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-01-04",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "464924",
    "name": "Abdukodir Khusanov",
    "pos": "DF",
    "no": 2,
    "photo": "https://digitalhub.fifa.com/transform/de1f05c2-772c-4c3c-8410-b653f3e812c9/KHUSANOV-Abdukodir_479068?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-02-29",
    "height": 186.0,
    "weight": 83.0
   },
   {
    "id": "479079",
    "name": "Khojiakbar Alijonov",
    "pos": "DF",
    "no": 3,
    "photo": "https://digitalhub.fifa.com/transform/d87a603d-2a55-4ffd-b51b-c7d2d65dec58/ALIJONOV-Khojiakbar_479079?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-04-19",
    "height": 180.0,
    "weight": 65.0
   },
   {
    "id": "385139",
    "name": "Farrukh Sayfiev",
    "pos": "DF",
    "no": 4,
    "photo": "https://digitalhub.fifa.com/transform/2db8b1e8-a601-41ad-aaf5-051040c9325c/SAYFIEV-Farrukh_385139?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1991-01-17",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "371415",
    "name": "Rustam Ashurmatov",
    "pos": "DF",
    "no": 5,
    "photo": "https://digitalhub.fifa.com/transform/8f306071-778f-4a11-bb29-76de06ba7a30/ASHURMATOV-Rustam_371415?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-07",
    "height": 186.0,
    "weight": 79.0
   },
   {
    "id": "479106",
    "name": "Akmal Mozgovoy",
    "pos": "MF",
    "no": 6,
    "photo": "https://digitalhub.fifa.com/transform/acea76c2-8e6c-4335-90da-062b53054ec0/MOZGOVOY-Akmal_479106?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1999-04-02",
    "height": 180.0,
    "weight": 70.0
   },
   {
    "id": "371348",
    "name": "Otabek Shukurov",
    "pos": "MF",
    "no": 7,
    "photo": "https://digitalhub.fifa.com/transform/eb1daf2f-c27b-45a4-a574-7ac0abd24061/SHUKUROV-Otabek_371348?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-06-22",
    "height": 183.0,
    "weight": 70.0
   },
   {
    "id": "368545",
    "name": "Jamshid Iskanderov",
    "pos": "MF",
    "no": 8,
    "photo": "https://digitalhub.fifa.com/transform/457a0153-becf-4cf5-ab9c-9c3be220327a/ISKANDEROV-Jamshid_368545?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-10-16",
    "height": 171.0,
    "weight": 58.0
   },
   {
    "id": "371345",
    "name": "Odiljon Xamrobekov",
    "pos": "MF",
    "no": 9,
    "photo": "https://digitalhub.fifa.com/transform/3653b567-3520-45f9-b757-4f13a939ef39/XAMROBEKOV-Odiljon_371345?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-02-13",
    "height": 180.0,
    "weight": 69.0
   },
   {
    "id": "484303",
    "name": "Ruslanbek Jiyanov",
    "pos": "MF",
    "no": 10,
    "photo": "https://digitalhub.fifa.com/transform/fa770cc8-4001-45ea-9087-2ab624e7ff79/RUSLANBEK-JIYANOV_484303?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-06-05",
    "height": 176.0,
    "weight": 64.0
   },
   {
    "id": "479080",
    "name": "Oston Urunov",
    "pos": "MF",
    "no": 11,
    "photo": "https://digitalhub.fifa.com/transform/d7b6d477-eacd-4954-8662-07a51b5f29fa/URUNOV-Oston_479080?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-12-19",
    "height": 181.0,
    "weight": 76.0
   },
   {
    "id": "479110",
    "name": "Abduvohid Nematov",
    "pos": "GK",
    "no": 12,
    "photo": "https://digitalhub.fifa.com/transform/1f1bfea3-5228-4270-ad8d-c1c8f08ef522/NEMATOV-Abduvohid_479110?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2001-03-20",
    "height": 182.0,
    "weight": 77.0
   },
   {
    "id": "479075",
    "name": "Sherzod Nasrullaev",
    "pos": "DF",
    "no": 13,
    "photo": "https://digitalhub.fifa.com/transform/a985d3f1-344f-45c8-947c-e8e458dca32c/NASRULLAEV-Sherzod_479075?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-07-23",
    "height": 183.0,
    "weight": 72.0
   },
   {
    "id": "385475",
    "name": "Eldor Shomurodov",
    "pos": "FW",
    "no": 14,
    "photo": "https://digitalhub.fifa.com/transform/d311d575-b59c-4d9f-8825-b506b0aa3c49/SHOMURODOV-Eldor_385475?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-29",
    "height": 190.0,
    "weight": 78.0
   },
   {
    "id": "479084",
    "name": "Umar Eshmurodov",
    "pos": "DF",
    "no": 15,
    "photo": "https://digitalhub.fifa.com/transform/42481984-3ded-4b43-854c-28b38e79718e/ESHMURODOV-Umar_479084?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1992-11-30",
    "height": 185.0,
    "weight": 72.0
   },
   {
    "id": "385472",
    "name": "Botirali Ergashev",
    "pos": "GK",
    "no": 16,
    "photo": "https://digitalhub.fifa.com/transform/b358c6ce-2f88-4210-8035-4c33186ac486/ERGASHEV-Botirali_385472?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1995-06-23",
    "height": 189.0,
    "weight": 78.0
   },
   {
    "id": "371393",
    "name": "Dostonbek Khamdamov",
    "pos": "MF",
    "no": 17,
    "photo": "https://digitalhub.fifa.com/transform/e49aa204-3009-462c-920b-c9dfcd8b9c03/KHAMDAMOV-Dostonbek_371393?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1996-07-24",
    "height": 178.0,
    "weight": 64.0
   },
   {
    "id": "479042",
    "name": "Abdulla Abdullaev",
    "pos": "DF",
    "no": 18,
    "photo": "https://digitalhub.fifa.com/transform/f771f66d-6eb1-41ec-aa83-644325f6b8fa/ABDULLAEV-Abdulla_479042?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-09-01",
    "height": 181.0,
    "weight": 72.0
   },
   {
    "id": "479086",
    "name": "Azizjon Ganiev",
    "pos": "MF",
    "no": 19,
    "photo": "https://digitalhub.fifa.com/transform/8ab4a549-fd61-4a4c-810a-c04ebd897062/GANIEV-Azizjon_479086?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1998-02-22",
    "height": 178.0,
    "weight": 64.0
   },
   {
    "id": "481220",
    "name": "Azizbek Amonov",
    "pos": "FW",
    "no": 20,
    "photo": "https://digitalhub.fifa.com/transform/f9f09a67-08e1-43dc-8ad8-5e5e3aaa291d/AMONOV-Azizbek_481220?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1997-10-30",
    "height": 181.0,
    "weight": 72.0
   },
   {
    "id": "368546",
    "name": "Igor Sergeev",
    "pos": "FW",
    "no": 21,
    "photo": "https://digitalhub.fifa.com/transform/5e05ab4f-a3c8-4086-b1a1-54ec0f4ee475/SERGEEV-Igor_368546?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "1993-04-30",
    "height": 185.0,
    "weight": 76.0
   },
   {
    "id": "464933",
    "name": "Abbosbek Fayzullaev",
    "pos": "MF",
    "no": 22,
    "photo": "https://digitalhub.fifa.com/transform/184c6d22-8ce0-4701-8582-39e1653b77f8/FAYZULLAEV-Abbosbek_464933?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-10-03",
    "height": 167.0,
    "weight": 55.0
   },
   {
    "id": "464897",
    "name": "Sherzod Esanov",
    "pos": "MF",
    "no": 23,
    "photo": "https://digitalhub.fifa.com/transform/0b3fd6fd-f931-45b7-ab1d-38b1751cb0a2/ESANOV-Sherzod_464897?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2003-02-01",
    "height": 190.0,
    "weight": 75.0
   },
   {
    "id": "475260",
    "name": "Behruzjon Karimov",
    "pos": "DF",
    "no": 24,
    "photo": "https://digitalhub.fifa.com/transform/0b62bdac-feaf-4b23-a22b-31a73c68a475/KARIMOV-Behruzjon_475260?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2007-08-07",
    "height": 172.0,
    "weight": 65.0
   },
   {
    "id": "518264",
    "name": "Avazbek Ulmasaliyev",
    "pos": "DF",
    "no": 25,
    "photo": "https://digitalhub.fifa.com/transform/6f9231dd-bc07-4ab3-a1f4-dd96ce3aa5b4/ULMASALIYEV-Avazbek_518264?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2000-03-27",
    "height": 187.0,
    "weight": 72.0
   },
   {
    "id": "464906",
    "name": "Jakhongir Urozov",
    "pos": "DF",
    "no": 26,
    "photo": "https://digitalhub.fifa.com/transform/67fe075a-e8c6-4169-846b-6d436d647014/UROZOV-Jakhongir_464906?&io=transform:fill,height:340,width:238&quality=90",
    "birth": "2004-01-18",
    "height": 190.0,
    "weight": 80.0
   }
  ]
 }
];

export const TEAMS = ALL_TEAMS;

export function getTeam(code: string): Team | undefined {
  return ALL_TEAMS.find((t) => t.code === code || t.id === code);
}

export function allPlayers(): Array<Player & { team: Team }> {
  return ALL_TEAMS.flatMap((t) => t.players.map((p) => ({ ...p, team: t })));
}

export function searchPlayers(q: string, limit = 40): Array<Player & { team: Team }> {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return allPlayers()
    .filter((p) => p.name.toLowerCase().includes(s) || p.team.name.toLowerCase().includes(s) || p.team.code.toLowerCase().includes(s))
    .slice(0, limit);
}

export const CONFEDERATIONS = Array.from(new Set(ALL_TEAMS.map((t) => t.confederation))).sort();

const dataPorts = [
  [
    'Name',
    'Description',
    'Country',
    'No. of Terminals',
    'No. of Berths',
    'Emissions rating (from A to F)',
    'Vessel calls',
    'Tugboat jobs',
  ],
  [
    'Antwerpen',
    'Port of Antwerp-Bruges is the second largest port in Europe. With connections to more than 800 destinations, it connects the European continent to the rest of the world. Port of Antwerp-Bruges generates 73,700 direct jobs and no less than €20 billion in added value.',
    'Belgium',
    2,
    12,
    'A',
    412,
    132,
  ],
  [
    'Hercules',
    'Port Hercules is the only deep-water port in Monaco. The port has been in use since ancient times. The modern port was completed in 1926, and underwent substantial improvements in the 1970s. It covers almost 40 acres, enough to provide anchorage for up to 700 vessels.',
    'Monaco',
    3,
    31,
    'F',
    342,
    123,
  ],
  [
    'Rio De Jan Eiro',
    'The Port Authority of Rio de Janeiro is responsible for the management of public ports in the State of Rio de Janeiro, which comprises the ports of Rio de Janeiro, Itaguaí, Niterói and Angra dos Reis.',
    'Brazil',
    12,
    21,
    'C',
    234,
    532,
  ],
  [
    'Singapore',
    "The Port of Singapore refers to the collective facilities and terminals that conduct maritime trade and handles Singapore's harbours and shipping. It has been ranked as the top maritime capital of the world since 2015.",
    'Singapore',
    23,
    52,
    'D',
    342,
    421,
  ],
  [
    'Fecamp',
    'FECAMP is a Medium-sized Port. The types of vessels regularly calling at FECAMP are Fishing (36%), General Cargo (13%), Other (8%), Offshore Supply Ship (8%), SAR (6%). The last vessel called at this port was JLD LAETITIA, 44m and 38s ago. The maximum length of the vessels recorded to having entered this port is 109 meters. The maximum draught is 6.2 meters. The maximum Deadweight is 6308t.',
    'France',
    14,
    24,
    'A',
    234,
    224,
  ],
  [
    'Abbot Point',
    'Abbot Point Port is home to the North Queensland Export Terminal, the most northerly deepwater coal port of Australia, situated approximately 25 kilometres north-west of the township of Bowen.',
    'Australia',
    42,
    31,
    'B',
    234,
    123,
  ],
  [
    'Bell Bay',
    'Bell Bay is an industrial centre and port located on the eastern shore of the Tamar River, in northern Tasmania, Australia. It lies just south of George Town. In the year ended June 2021, 3.6 million tonnes of exports and imports passed through Bell Bay.',
    'Australia',
    7,
    45,
    'B',
    3432,
    123,
  ],
  [
    'Yangjiang',
    "The Port of Yangjiang is a natural estuary port on the coast of the city of Yangjiang, Guangdong Province, People's Republic of China. In 2013 it had a total cargo throughput of 21 million tonnes, an increase of 30%, mostly handling ore and coal. The Port has 1 major port area and 6 port operation areas. 15 berths",
    'China',
    1,
    15,
    'C',
    423,
    412,
  ],
  [
    'Sitra',
    'Under the jurisdiction of the Bahrain Government Harbour Master at Mina Sulman. Comprises a number of private jetties, handles dry and liquid bulk including petroleum products, chemicals and LPG.\nSitra Inner Anchorage lies on the northern side of the fairway between Sitra Lightbuoy and Mina Sulman, offering protection from the prevailing NW winds.',
    'Bahrain',
    23,
    21,
    'D',
    213,
    183,
  ],
  [
    'Rafina',
    "The port of Rafina is located 33 km east of the center of Athens. It is very close to the Athens International airport Eleftherios Venizelos and it's also connected with the national road Athinon-Lamias",
    'Greece',
    18,
    23,
    'C',
    123,
    150,
  ],
];

const dataVessels = [
  [
    'Name',
    'IMO number',
    'Vessel type',
    'Age',
    'Port arrival date',
    'Port depature date',
  ],
  [
    'EVER GREET',
    9709427,
    'General Cargo Ship',
    2015,
    '2022-11-30',
    '2022-12-08',
  ],
  [
    'POOL EXPRESS',
    7455342,
    'Tug',
    2007,
    '2022-04-08',
    '2022-04-14',
  ],
  [
    'LUSTRATIO',
    9473821,
    'Fishing Vessel',
    2014,
    '2022-06-14',
    '2022-06-22',
  ],
  [
    'SEA LION',
    1920463,
    'Tug',
    2015,
    '2022-01-03',
    '2022-01-22',
  ],
  [
    'KAPTAN METE',
    1249281,
    'Pilot Vessel',
    1899,
    '2022-05-18',
    '2022-05-30',
  ],
  [
    'LEANNE P',
    9548372,
    'General Cargo Ship',
    2010,
    '2022-06-05',
    '2022-06-15',
  ],
  [
    'TRIO',
    4121656,
    'Tug',
    2013,
    '2022-06-02',
    '2022-06-22',
  ],
  [
    'DIAN KINGDOM',
    3520194,
    'Fishing Vessel',
    1970,
    '2022-01-21',
    '2022-02-04',
  ],
  [
    'BENGKALIS 1',
    7461723,
    'Fishing Vessel',
    1993,
    '2022-02-08',
    '2022-02-22',
  ],
  [
    'HUSEYIN 10',
    4231748,
    'Products Tanker',
    1991,
    '2022-09-12',
    '2022-09-18',
  ],
  [
    'Amme02',
    5340295,
    'Products Tanker',
    2016,
    '2022-04-06',
    '2022-04-26',
  ],
  [
    'FAIRCHEM ALDEBARAN',
    4593028,
    'Tug',
    2015,
    '2022-12-23',
    '2023-01-11',
  ],
  [
    'MISS BECKY',
    8053291,
    'Utility Vessel',
    1909,
    '2022-08-29',
    '2022-09-06',
  ],
  [
    'PELANGI',
    3645386,
    'Drilling Ship',
    2007,
    '2022-08-02',
    '2022-08-17',
  ],
  [
    'DEMIRLER 4',
    4364124,
    'General Cargo Ship',
    2014,
    '2022-06-01',
    '2022-06-12',
  ],
  [
    'KOH TAKIEV',
    4326531,
    'Fishing Vessel',
    1992,
    '2022-12-15',
    '2022-12-29',
  ],
  [
    'DODO',
    2784587,
    'Pilot Vessel',
    1970,
    '2022-02-13',
    '2022-02-17',
  ],
  [
    'LTS 3000',
    5475246,
    'Patrol Vessel',
    2016,
    '2022-07-17',
    '2022-07-26',
  ],
  [
    'CHANGYONG 1',
    4242315,
    'Tug',
    2010,
    '2022-11-03',
    '2022-11-11',
  ],
  [
    'NITTO MARU NO. 31',
    3458978,
    'General Cargo Ship',
    2001,
    '2022-08-19',
    '2022-08-28',
  ],
  [
    'RAIDER',
    4764243,
    'Utility Vessel',
    2014,
    '2022-07-20',
    '2022-08-04',
  ],
];

export { dataPorts, dataVessels };

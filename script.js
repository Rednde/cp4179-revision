const sections = [
  // CP4179 revision site updated version: challenge quiz + 43 hard questions.
  {
    title: "Start",
    type: "intro",
    heading: "Revise Topic 1 like a lab safety escape room.",
    body:
      "Move card by card. Click, test yourself, and only go next when the idea is clear. This is based on your CP4179 Topic 1 Chemical Safety notes.",
    tags: ["Signs", "GHS", "Pictograms", "SDS", "PPE", "Storage", "Fume hood", "Waste"],
  },
  {
    title: "Safety Signs",
    type: "signs",
    heading: "Five safety sign families you must recognise fast.",
    body:
      "Safety signs alert or remind people of hazards and precautions. Standardisation matters because clear symbols reduce confusion across languages and workplaces.",
  },
  {
    title: "GHS",
    type: "ghs",
    heading: "GHS standardises chemical classification and hazard communication.",
    body:
      "GHS uses standard labels and Safety Data Sheets. Singapore uses SS 586 for hazard communication for hazardous chemicals and dangerous goods.",
  },
  {
    title: "Pictograms",
    type: "pictograms",
    heading: "Each GHS pictogram can carry several possible meanings.",
    body:
      "The pictogram gives a fast visual warning, but you still need the signal word, hazard statements and SDS to understand the exact risk.",
  },
  {
    title: "Hazard Classes",
    type: "hazards",
    heading: "Some chemical classes are tested by definitions, criteria and examples.",
    body:
      "Pay special attention to flammable liquid categories, pyrophoric substances, oxidising substances, corrosives and gases under pressure.",
  },
  {
    title: "SDS + Labels",
    type: "label",
    heading: "SDS and GHS labels tell you how to control risk.",
    body:
      "Every chemical needs an SDS. SDS should be reviewed with the product label every 5 years, even if there is no new significant information.",
  },
  {
    title: "PPE",
    type: "ppe",
    heading: "PPE is chosen from the hazard, exposure route, and SDS.",
    body:
      "Do not memorise PPE as a costume. Choose it based on splash risk, inhalation risk, noise, temperature, corrosivity and chemical compatibility.",
  },
  {
    title: "Buying",
    type: "buying",
    heading: "Key considerations start before the chemical enters the lab.",
    body:
      "Chemical safety starts at procurement. Before buying, check whether the chemical is necessary, whether a safer substitute exists, and whether the lab can store, handle and dispose of it safely.",
  },
  {
    title: "Storage",
    type: "storage",
    heading: "Store by compatibility first, then alphabetically within the group.",
    body:
      "Good storage prevents spills, reactions, fires and degradation. Avoid floors, exits, bench tops, fume hoods and excessive stock.",
  },
  {
    title: "Containment",
    type: "containment",
    heading: "Secondary containment trays are a short calculation plus one standard to remember.",
    body:
      "For flammable and hazardous liquids, SS641 gives the containment tray capacity rule. Memorise the larger value.",
  },
  {
    title: "Containers",
    type: "containers",
    heading: "Container material matters because chemicals can break, degrade or react with containers.",
    body:
      "Glass, plastic and steel each have strengths and weaknesses. Choose based on chemical compatibility and handling risk.",
  },
  {
    title: "Fume Hood",
    type: "hood",
    heading: "Fume hoods protect the user. Clean benches protect the sample.",
    body:
      "Air should flow into a chemical fume hood. Keep the sash lowered, keep your head out, and keep chemicals about 6 inches behind the sash.",
  },
  {
    title: "Waste",
    type: "waste",
    heading: "Chemical waste must be segregated, labelled and collected properly.",
    body:
      "Hazardous waste can be corrosive, toxic, flammable, combustible or reactive. The key is to segregate, store, label and dispose through the proper route.",
  },
  {
    title: "Quiz",
    type: "quiz",
    heading: "Timed-practice style quiz",
    body:
      "Answer these like MST warm-up questions. Your score updates as you go.",
  },
  {
    title: "Finish",
    type: "finish",
    heading: "You now have a compact Topic 1 revision path.",
    body:
      "Best next step: run through the quiz once without notes, then revisit the cards where you hesitated.",
  },
];

const quizQuestions = [
  {
    question: "Which safety sign is a green square with a white symbol?",
    choices: ["Safe condition sign", "Fire safety sign", "Warning sign", "Prohibition sign"],
    answer: 0,
    explain: "Safe condition signs identify escape routes, first aid, eyewash, safety shower and emergency facilities.",
  },
  {
    question: "What does the GHS signal word 'Danger' mean?",
    choices: ["Less severe hazard", "Severe hazard", "No hazard", "Storage only"],
    answer: 1,
    explain: "GHS has two signal words: Danger for more severe hazards, Warning for less severe hazards.",
  },
  {
    question: "Which SDS section is normally used for handling and storage advice?",
    choices: ["Section 3", "Section 5", "Section 7", "Section 12"],
    answer: 2,
    explain: "Section 7 is Handling and storage.",
  },
  {
    question: "Which glove is appropriate for handling ultra-low temperature objects?",
    choices: ["Latex gloves", "Nitrile gloves", "Cotton gloves", "Cryo gloves"],
    answer: 3,
    explain: "Cryo gloves are for ultra-low temperature objects or equipment, such as liquid nitrogen work.",
  },
  {
    question: "What is the correct chemical storage order?",
    choices: [
      "Alphabetical order only",
      "By colour of bottle",
      "By compatibility, then alphabetical order",
      "By newest chemical first",
    ],
    answer: 2,
    explain: "Separate into organic/inorganic families, segregate compatible groups, then arrange alphabetically within the group.",
  },
  {
    question: "Which statement about a ductless fume hood is most accurate?",
    choices: [
      "It releases filtered air back into the lab",
      "It protects the sample only",
      "It needs no filter replacement",
      "It is a storage cabinet",
    ],
    answer: 0,
    explain: "A ductless hood filters air and releases it back into the lab, so the filter must match the substances and be replaced periodically.",
  },
  {
    question: "Under GHS, gases under pressure belongs to which hazard group?",
    choices: ["Physical hazard", "Health hazard", "Environmental hazard", "Supplementary information"],
    answer: 0,
    explain: "Gases under pressure is a physical hazard class, not a separate fourth GHS group.",
  },
  {
    question: "Which information item was missing from the old GHS label card?",
    choices: ["Supplier information", "Supplementary information", "Pictogram", "Signal word"],
    answer: 1,
    explain: "The 7 label items include supplementary information.",
  },
  {
    question: "What defines a pyrophoric substance in these notes?",
    choices: [
      "Ignites spontaneously in air below 54.4 degrees C",
      "Only reacts with water",
      "Only damages metal",
      "Has flash point above 93 degrees C",
    ],
    answer: 0,
    explain: "Pyrophoric substances ignite spontaneously in air at a temperature below 54.4 degrees C.",
  },
  {
    question: "Which Singapore Standard is linked to secondary containment trays for flammable and hazardous liquids?",
    choices: ["SS508", "SS586", "SS641", "SS532"],
    answer: 2,
    explain: "Secondary containment trays are in accordance with Singapore Standard SS641.",
  },
  {
    question: "For a secondary containment tray, which capacity should be used?",
    choices: [
      "The smallest container only",
      "Whichever is larger: largest container volume or 10% total volume",
      "Exactly 50% of total volume",
      "Any tray that fits the cabinet",
    ],
    answer: 1,
    explain: "Use the larger of the largest container volume or at least 10% of total volume, after accounting for container displacement.",
  },
  {
    question: "Which fume hood type adjusts exhaust flow as the sash moves?",
    choices: ["Constant volume", "Variable Air Volume (VAV)", "Laminar flow clean bench", "Storage hood"],
    answer: 1,
    explain: "VAV hoods vary exhaust flow and use sensors to maintain ideal face velocity.",
  },
  {
    question: "Which material is easily breakable but chemically inert and transparent?",
    choices: ["Glass", "Plastic", "Steel", "Cardboard"],
    answer: 0,
    explain: "Glass is transparent and chemically inert, but its major disadvantage is that it breaks easily.",
  },
  {
    question: "Which waste practice is correct?",
    choices: [
      "Pour toxic waste down the sink if diluted",
      "Fill waste bottles to the brim",
      "Separate strong oxidisers from organics",
      "Treat hazardous waste in the lab",
    ],
    answer: 2,
    explain: "Strong oxidisers must be segregated from organics. Do not pour toxic waste into the sink or treat hazardous waste in the lab.",
  },
  {
    question: "Which SS586 part covers preparation of Safety Data Sheets?",
    choices: ["Part 1", "Part 2", "Part 3", "Part 4"],
    answer: 2,
    explain: "SS586 Part 3 covers preparation of Safety Data Sheets.",
  },
  {
    question: "Which sign type uses a blue circle with a white symbol?",
    choices: ["Mandatory action", "Safe condition", "Warning", "Fire safety"],
    answer: 0,
    explain: "Mandatory action signs are recognised by a blue circle with a white symbol.",
  },
  {
    question: "Which PPE gives maximum protection to both eyes and face?",
    choices: ["Safety glasses", "Face shield", "Ear muffs", "Cotton gloves"],
    answer: 1,
    explain: "Face shields provide maximum eye and face protection, especially for corrosive splashes or flying particles.",
  },
  {
    question: "Which glove material is poor for strong oxidising agents, aromatic solvents, ketones and acetates?",
    choices: ["Latex", "Nitrile", "Cotton", "Cryo"],
    answer: 1,
    explain: "Nitrile gloves are poor for strong oxidising agents, aromatic solvents, ketones and acetates.",
  },
  {
    question: "Which glove material is good for ketones, esters, peroxides and strong bases?",
    choices: ["Butyl", "Latex", "Cotton", "Cut-resistant"],
    answer: 0,
    explain: "Butyl gloves are suitable for extended contact with ketones, esters, peroxides, strong bases and several corrosive chemicals.",
  },
  {
    question: "What is the recommended fill level for chemical waste bottles?",
    choices: ["Completely full", "Half full only", "About three-quarter full", "No limit"],
    answer: 2,
    explain: "Waste bottles should not be filled to the brim; about three-quarter full leaves headspace for vapour and pressure build-up.",
  },
  {
    question: "Which chemical storage type requires acids and alkalis to be separated?",
    choices: ["Corrosive chemicals", "Gaseous chemicals", "Toxic chemicals", "Flammable chemicals"],
    answer: 0,
    explain: "Corrosive chemical storage requires acids and alkalis to be separated.",
  },
  {
    question: "Which fume hood work practice is correct?",
    choices: [
      "Store chemicals in the hood permanently",
      "Keep your head inside to check the experiment",
      "Keep chemicals about 6 inches behind the sash",
      "Place bulky equipment against rear baffles",
    ],
    answer: 2,
    explain: "Chemicals should be kept about 6 inches behind the sash; the hood is not for storage and your head should stay out.",
  },
  {
    question: "Which container material may react with certain chemicals such as bromine?",
    choices: ["Glass", "Plastic", "Steel", "Plastic-lined cardboard"],
    answer: 2,
    explain: "Steel is useful for flammable liquids or fuels, but may react with certain chemicals such as bromine.",
  },
  {
    question: "Which waste disposal practice is correct?",
    choices: [
      "Throw solid chemical waste into normal bins",
      "Treat hazardous waste in the lab",
      "Return used gas cylinders to the supplier or vendor",
      "Pour waste into sink after dilution",
    ],
    answer: 2,
    explain: "Used gas cylinders should be returned to the gas supplier or vendor.",
  },
  {
    question: "Why are safety signs standardised?",
    choices: [
      "To make signs decorative",
      "To reduce confusion and accident risk across languages",
      "To avoid using colours",
      "To replace all training",
    ],
    answer: 1,
    explain: "Standardised graphical symbols help communicate safety information clearly across language and workplace barriers.",
  },
  {
    question: "Which safety sign is a red square with a white symbol and flame representation?",
    choices: ["Fire safety sign", "Safe condition sign", "Mandatory action sign", "Warning sign"],
    answer: 0,
    explain: "Fire safety signs use a red square with a white symbol and a flame representation.",
  },
  {
    question: "Which sign uses a red ring and diagonal bar?",
    choices: ["Warning", "Prohibition", "Fire safety", "Safe condition"],
    answer: 1,
    explain: "Prohibition signs use a red ring and diagonal bar with a black symbol on a white background.",
  },
  {
    question: "Which sign uses a yellow triangle with black border?",
    choices: ["Mandatory action", "Safe condition", "Warning", "Fire safety"],
    answer: 2,
    explain: "Warning signs use a yellow triangle with a black border and black symbol.",
  },
  {
    question: "Which GHS hazard group includes flammable liquids and oxidising solids?",
    choices: ["Physical hazards", "Health hazards", "Environmental hazards", "Supplementary hazards"],
    answer: 0,
    explain: "Flammable liquids and oxidising solids are physical hazards.",
  },
  {
    question: "Which GHS hazard group includes carcinogenicity and reproductive toxicity?",
    choices: ["Physical hazards", "Health hazards", "Environmental hazards", "Storage hazards"],
    answer: 1,
    explain: "Carcinogenicity and reproductive toxicity are health hazards.",
  },
  {
    question: "Which GHS pictogram category warns that a chemical may cause oxygen deficiency in enclosed spaces?",
    choices: ["Gases under pressure", "Oxidizers", "Irritant", "Environmental toxicity"],
    answer: 0,
    explain: "Gases under pressure may leak in enclosed spaces and cause oxygen deficiency.",
  },
  {
    question: "Which pictogram meaning includes respiratory sensitizer, reproductive toxicity and aspiration toxicity?",
    choices: ["Health hazard", "Flame", "Corrosion", "Exclamation mark"],
    answer: 0,
    explain: "The health hazard pictogram can include carcinogenicity, respiratory sensitizer, reproductive toxicity, target organ toxicity, mutagenicity and aspiration toxicity.",
  },
  {
    question: "Which pictogram meaning includes skin sensitizer, narcotic effects and respiratory tract irritation?",
    choices: ["Exclamation mark", "Gas cylinder", "Exploding bomb", "Environment"],
    answer: 0,
    explain: "The exclamation mark pictogram can indicate irritant, skin sensitizer, acute toxicity, narcotic effects and respiratory tract irritation.",
  },
  {
    question: "Which pictogram warns of hazards to aquatic environments?",
    choices: ["Environment", "Corrosion", "Skull and crossbones", "Flame"],
    answer: 0,
    explain: "The environmental toxicity pictogram warns of harmful effects on the environment, people and animals.",
  },
  {
    question: "For flammable liquid Category 1, which criterion is correct?",
    choices: [
      "Flash point below 23 degrees C and initial boiling point at or below 35 degrees C",
      "Flash point above 60 degrees C only",
      "Flash point above 93 degrees C",
      "No flash point criterion",
    ],
    answer: 0,
    explain: "Category 1 flammable liquids have flash point below 23 degrees C and initial boiling point at or below 35 degrees C.",
  },
  {
    question: "For flammable liquid Category 4, which flash point range applies?",
    choices: [
      "Below 23 degrees C",
      "23 to 35 degrees C",
      "Above 60 degrees C and at or below 93 degrees C",
      "Above 120 degrees C only",
    ],
    answer: 2,
    explain: "Category 4 flammable liquids have flash point above 60 degrees C and at or below 93 degrees C.",
  },
  {
    question: "Which is an example of an oxidising substance from the notes?",
    choices: ["Hydrogen peroxide", "Cotton", "Steel", "Sodium chloride"],
    answer: 0,
    explain: "Hydrogen peroxide, nitric acid and potassium nitrate are examples of oxidising substances.",
  },
  {
    question: "Which is an example of a corrosive substance from the notes?",
    choices: ["Sodium hydroxide", "Cotton", "Nitrogen gas", "Plastic"],
    answer: 0,
    explain: "Sulfuric acid, hydrochloric acid and sodium hydroxide are examples of corrosive substances.",
  },
  {
    question: "Which is an example of a pyrophoric substance from the notes?",
    choices: ["Butyl lithium", "Ethanol", "Water", "Sodium chloride"],
    answer: 0,
    explain: "Phosphine, sodium hydride and butyl lithium are listed as examples of pyrophoric substances.",
  },
  {
    question: "Which SDS section covers first aid measures?",
    choices: ["Section 1", "Section 4", "Section 9", "Section 14"],
    answer: 1,
    explain: "SDS Section 4 covers first aid measures.",
  },
  {
    question: "Which SDS section covers firefighting measures?",
    choices: ["Section 2", "Section 5", "Section 8", "Section 16"],
    answer: 1,
    explain: "SDS Section 5 covers firefighting measures.",
  },
  {
    question: "Which SDS section covers accidental release measures?",
    choices: ["Section 6", "Section 10", "Section 12", "Section 15"],
    answer: 0,
    explain: "SDS Section 6 covers accidental release measures.",
  },
  {
    question: "Which SDS section covers physical and chemical properties?",
    choices: ["Section 3", "Section 7", "Section 9", "Section 13"],
    answer: 2,
    explain: "SDS Section 9 covers physical and chemical properties.",
  },
  {
    question: "How often should SDS and product labels be reviewed under the notes?",
    choices: ["Every year", "Every 2 years", "Every 5 years", "Only after an accident"],
    answer: 2,
    explain: "The notes state SDS and product labels should be reviewed every 5 years, even without new significant information.",
  },
  {
    question: "Which GHS label item uses the words Danger or Warning?",
    choices: ["Signal word", "Product identifier", "Supplier information", "Supplementary information"],
    answer: 0,
    explain: "Danger and Warning are GHS signal words.",
  },
  {
    question: "For containers at or below 125 ml, what label may be used?",
    choices: ["No label", "Reduced workplace label", "Transport label only", "Fire label only"],
    answer: 1,
    explain: "For containers at or below 125 ml, a reduced workplace label may be used.",
  },
  {
    question: "What must a reduced workplace label include?",
    choices: [
      "Product identifier and GHS pictogram",
      "Only the container capacity",
      "Only the supplier phone number",
      "Only the date opened",
    ],
    answer: 0,
    explain: "A reduced workplace label should include the product identifier/name and GHS pictogram.",
  },
  {
    question: "Which glove type is poor for organic solvents, oils and greases?",
    choices: ["Latex", "Butyl", "Heat-resistant", "Cryo"],
    answer: 0,
    explain: "Latex gloves are poor for organic solvents, oils and greases.",
  },
  {
    question: "Which glove type is poor for halogenated and aromatic hydrocarbons?",
    choices: ["Neoprene", "Cotton", "Latex", "Cut-resistant"],
    answer: 0,
    explain: "Neoprene gloves are poor for halogenated and aromatic hydrocarbons.",
  },
  {
    question: "Which glove type is specifically for sharp tools and broken glass?",
    choices: ["Cut-resistant gloves", "Cryo gloves", "Latex gloves", "Butyl gloves"],
    answer: 0,
    explain: "Cut-resistant gloves protect against cuts when working with sharp tools and broken glass.",
  },
  {
    question: "When should ear plugs be used according to the notes?",
    choices: ["Above 85 dBA", "Above 20 dBA", "Only during chemical spills", "Only inside fume hoods"],
    answer: 0,
    explain: "Ear plugs are listed for noise above 85 dBA.",
  },
  {
    question: "When are ear muffs over ear plugs used?",
    choices: ["Above 100 dBA", "Below 30 dBA", "For corrosive splashes", "For liquid nitrogen"],
    answer: 0,
    explain: "Ear muffs over ear plugs are listed for noise above 100 dBA.",
  },
  {
    question: "Which storage location should be avoided because it disrupts airflow?",
    choices: ["Fume hood", "Lockable flammable cabinet", "Corrosive cabinet", "Secondary containment tray"],
    answer: 0,
    explain: "Chemicals should not be stored in fume hoods because they disrupt airflow and increase spill risk.",
  },
  {
    question: "Which chemical type should be kept away from oxidising chemicals?",
    choices: ["Flammable chemicals", "Glassware", "Water", "Cotton gloves"],
    answer: 0,
    explain: "Flammable chemicals should be stored away from oxidising chemicals.",
  },
  {
    question: "Which chemical type needs dedicated storage for nitric acid?",
    choices: ["Corrosive chemicals", "Gaseous chemicals", "Toxic chemicals", "General salts"],
    answer: 0,
    explain: "The corrosive storage notes state nitric acid incompatibility requires dedicated storage.",
  },
  {
    question: "Which gas cylinder practice is correct?",
    choices: [
      "Store cylinders lying down",
      "Secure cylinders with a chain or wall bracket",
      "Keep valves inaccessible",
      "Store all gases together",
    ],
    answer: 1,
    explain: "Gas cylinders should be upright and secured with a chain or wall bracket.",
  },
  {
    question: "Which standard/code is linked to storage of flammable liquids?",
    choices: ["SS532:2007", "SS641 only", "SS508 only", "SS586 Part 3 only"],
    answer: 0,
    explain: "SS532:2007 is the code of practice for storage of flammable liquids.",
  },
  {
    question: "Which container material is light and not easily breakable but may degrade after extended chemical contact?",
    choices: ["Plastic", "Glass", "Steel", "Ceramic"],
    answer: 0,
    explain: "Plastic is light and not easily breakable, but may degrade after extended contact with certain chemicals.",
  },
  {
    question: "What is a key advantage of steel safety cans?",
    choices: [
      "They minimise flammable vapour emissions",
      "They are transparent",
      "They never react with chemicals",
      "They are used for cryogenic temperatures only",
    ],
    answer: 0,
    explain: "Galvanised or stainless steel safety cans have provisions to minimise flammable vapour emissions.",
  },
  {
    question: "What does a constant volume fume hood have?",
    choices: ["Fixed exhaust flow rate", "No sash", "No airflow", "A sample protection filter only"],
    answer: 0,
    explain: "Constant volume fume hoods have a fixed exhaust flow rate.",
  },
  {
    question: "What ideal face velocity range is listed for VAV fume hoods?",
    choices: ["0.3 to 0.5 m/s", "3 to 5 m/s", "0.03 to 0.05 m/s", "10 to 15 m/s"],
    answer: 0,
    explain: "VAV hoods aim to maintain an ideal face velocity of 0.3 to 0.5 m/s.",
  },
  {
    question: "Why should bulky equipment be elevated 3 to 5 cm in a fume hood if needed?",
    choices: [
      "To allow air to flow underneath",
      "To make it look tidy",
      "To heat it faster",
      "To block the baffles",
    ],
    answer: 0,
    explain: "Elevating bulky equipment 3 to 5 cm helps air flow under it and reduces airflow obstruction.",
  },
  {
    question: "Which waste should be separated from moisture or water?",
    choices: ["Water-reactive chemicals", "Glass only", "Cotton gloves", "Plastic bottles"],
    answer: 0,
    explain: "Water-reactive chemicals should be segregated from moisture or water.",
  },
  {
    question: "Which waste should be separated into halogenated and non-halogenated groups?",
    choices: ["Organic waste", "Clean water", "Empty paper", "Uncontaminated gloves"],
    answer: 0,
    explain: "Waste segregation includes separating halogenated from non-halogenated waste.",
  },
  {
    question: "What should be done with waste containers after use?",
    choices: ["Cap all waste containers", "Leave caps off to release vapour", "Store near normal operations", "Fill beyond the brim"],
    answer: 0,
    explain: "Waste containers should be capped and stored in designated areas with suitable containment.",
  },
];

const challengeQuestions = [
  {
    type: "typed",
    question: "List 6 key storage considerations before buying/using a new chemical.",
    minMatches: 6,
    keyPoints: [
      { label: "licence or permit", terms: ["licence", "license", "permit"] },
      { label: "storage/handling requirements", terms: ["storage", "handling"] },
      { label: "maximum allowable quantity", terms: ["maximum allowable", "quantity", "amount"] },
      { label: "adequate storage space", terms: ["space", "storage space"] },
      { label: "proper facilities/equipment", terms: ["facilities", "equipment", "lab equipped"] },
      { label: "ventilation or local exhaust", terms: ["ventilation", "local exhaust", "fume hood"] },
      { label: "emergency response/first aid", terms: ["emergency", "first aid", "antidote"] },
      { label: "hazardous waste disposal", terms: ["waste", "disposal"] },
    ],
    explain:
      "Think before purchase: permits, storage/handling, allowable quantity, space, facilities, ventilation, emergency response/first aid and waste disposal.",
  },
  {
    type: "multi",
    question: "Select all good fume hood work practices.",
    choices: [
      "Keep sash lowered during experiment",
      "Put your head into the hood to inspect fumes",
      "Keep chemicals about 6 inches behind the sash",
      "Use the hood as permanent chemical storage",
      "Elevate bulky equipment 3-5 cm if airflow underneath is needed",
      "Connect electrical devices outside the hood",
    ],
    answers: [0, 2, 4, 5],
    explain:
      "Good practices include lowering sash, keeping chemicals behind the sash, preserving airflow and connecting electrical devices outside. Head stays out; hood is not storage.",
  },
  {
    type: "typed",
    question: "A cabinet has 2 L, 4 L and 10 L bottles. What minimum secondary containment tray capacity is required?",
    minMatches: 1,
    keyPoints: [{ label: "10 L", terms: ["10", "10l", "10 l", "10 litres", "10 liters"] }],
    explain:
      "Largest container is 10 L. 10% of total volume is 1.6 L, so SS641 requires the larger value: 10 L.",
  },
  {
    type: "multi",
    question: "Select all items that belong on a chemical waste label.",
    choices: [
      "Waste type",
      "Key chemical constituents",
      "Volume of waste",
      "Date of disposal",
      "Favourite storage shelf",
      "Safety/hazard symbols",
    ],
    answers: [0, 1, 2, 3, 5],
    explain:
      "Waste labels should show waste type, key constituents, volume, disposal date, PPE if needed and safety/hazard symbols.",
  },
  {
    type: "single",
    question:
      "You need to store sodium hypochlorite. Which storage reasoning is strongest?",
    choices: [
      "Store alphabetically before checking compatibility",
      "Check SDS Section 7 and chemical compatibility before deciding storage",
      "Store on bench top because it is easier to access",
      "Store in any cabinet if the bottle is closed",
    ],
    answer: 1,
    explain:
      "For storage questions, use SDS Section 7 and compatibility first. Alphabetical order only happens within a compatible group.",
  },
  {
    type: "typed",
    question: "Give the 3 SS586 parts and what each part covers.",
    minMatches: 3,
    keyPoints: [
      { label: "Part 1 transport and storage", terms: ["part 1", "transport", "storage"] },
      { label: "Part 2 GHS classification/labelling", terms: ["part 2", "ghs", "classification", "labelling", "labeling"] },
      { label: "Part 3 SDS preparation", terms: ["part 3", "sds", "safety data", "preparation"] },
    ],
    explain:
      "SS586 Part 1: transport/storage of dangerous goods. Part 2: GHS classification and labelling. Part 3: SDS preparation.",
  },
  {
    type: "multi",
    question: "Select all waste pairs that must be segregated.",
    choices: [
      "Acids from bases",
      "Strong oxidisers from organics",
      "Halogenated from non-halogenated waste",
      "Water-reactive chemicals from moisture/water",
      "All liquids together if labelled",
      "Peroxide-forming chemicals from flammable substances and acids",
    ],
    answers: [0, 1, 2, 3, 5],
    explain:
      "Incompatible waste must be separated. The notes specifically include acids/bases, oxidisers/organics, halogenated/non-halogenated, water-reactives/moisture and peroxide-formers from flammables/acids.",
  },
  {
    type: "single",
    question:
      "A bottle is 1 L and normal-shaped. Which GHS label size rule applies from the table?",
    choices: [
      "Reduced workplace label only",
      "If possible, at least 52 x 74 mm",
      "At least 105 x 148 mm",
      "At least 148 x 210 mm",
    ],
    answer: 1,
    explain:
      "1 L falls in 125 ml - 3 litres, so the label should be if possible at least 52 x 74 mm.",
  },
  {
    type: "typed",
    question: "Explain why chemicals should not be stored in a fume hood. Give 2 reasons.",
    minMatches: 2,
    keyPoints: [
      { label: "disrupts airflow", terms: ["airflow", "air flow", "disrupt"] },
      { label: "leak when power off", terms: ["power", "turned off", "leak"] },
      { label: "crowded workspace/spillage", terms: ["crowded", "spill", "spillage"] },
    ],
    explain:
      "Fume hood storage disrupts airflow, chemicals may leak into the lab when power is off, and crowding raises spill risk.",
  },
  {
    type: "multi",
    question: "Select all correct statements about gas cylinders.",
    choices: [
      "Store upright on a floor rack or locked cage",
      "Label status such as Full, In use or Empty",
      "Secure with chain or wall bracket",
      "Store beside corrosive substances for convenience",
      "Keep main valve accessible",
      "Separate incompatible gases by type",
    ],
    answers: [0, 1, 2, 4, 5],
    explain:
      "Cylinders should be upright, labelled, secured, separated by compatibility, away from corrosives/heat/sunlight, with accessible main valve.",
  },
  {
    type: "single",
    question:
      "A student chooses latex gloves for toluene because latex is good for mild chemicals. What is the issue?",
    choices: [
      "Latex is poor for organic solvents",
      "Latex is only for ultra-low temperatures",
      "Latex is only for sharp tools",
      "Latex is required for all aromatic solvents",
    ],
    answer: 0,
    explain:
      "Latex gloves are poor for organic solvents, oils and greases. Toluene is an organic/aromatic solvent.",
  },
  {
    type: "typed",
    question: "For GHS labels, list the 7 information items.",
    minMatches: 6,
    keyPoints: [
      { label: "product identifier", terms: ["product identifier", "product name", "identifier"] },
      { label: "signal word", terms: ["signal"] },
      { label: "pictogram", terms: ["pictogram"] },
      { label: "hazard statement", terms: ["hazard statement"] },
      { label: "precautionary statement", terms: ["precautionary"] },
      { label: "supplier information", terms: ["supplier", "manufacturer", "telephone", "address"] },
      { label: "supplementary information", terms: ["supplementary"] },
    ],
    explain:
      "The 7 are product identifier, signal word, pictogram, hazard statement, precautionary statement, supplier information and supplementary information.",
  },
  {
    type: "single",
    question:
      "A VAV hood sash is raised higher. What should happen to maintain protection?",
    choices: [
      "Exhaust flow changes to maintain face velocity",
      "The hood turns into a storage cabinet",
      "Face velocity is ignored",
      "The filter no longer needs replacement",
    ],
    answer: 0,
    explain:
      "A VAV hood varies exhaust flow as sash height changes, using sensors to maintain ideal face velocity.",
  },
  {
    type: "multi",
    question: "Select all correct corrosive storage practices.",
    choices: [
      "Separate acids and alkalis",
      "Keep nitric acid in dedicated storage",
      "Keep spill kit, emergency shower and eyewash available",
      "Store with flammables alphabetically",
      "Use a locked cabinet with corrosive warning",
    ],
    answers: [0, 1, 2, 4],
    explain:
      "Corrosives need acid/alkali separation, nitric acid dedicated storage, emergency support and locked corrosive-labelled cabinets.",
  },
  {
    type: "typed",
    question: "Name 4 examples of incompatible waste segregation categories.",
    minMatches: 4,
    keyPoints: [
      { label: "acids from bases", terms: ["acid", "base"] },
      { label: "heavy metals from salts", terms: ["heavy metal", "salts"] },
      { label: "oxidisers from organics", terms: ["oxidiser", "oxidizer", "organic"] },
      { label: "water-reactive from moisture", terms: ["water reactive", "moisture"] },
      { label: "halogenated from non-halogenated", terms: ["halogenated", "non-halogenated", "non halogenated"] },
      { label: "peroxide-forming from flammables/acids", terms: ["peroxide", "flammable", "acid"] },
      { label: "inorganic from organic", terms: ["inorganic", "organic"] },
    ],
    explain:
      "Examples include acids/bases, heavy metals/salts, oxidisers/organics, water-reactive/moisture, halogenated/non-halogenated, inorganic/organic and peroxide-formers from flammables/acids.",
  },
  {
    type: "single",
    question:
      "You are labelling a tiny container where a full GHS label is impractical. What is the correct approach?",
    choices: [
      "Use no label if it is small",
      "Use a reduced workplace label with product identifier and pictogram",
      "Use only a colour sticker",
      "Put the SDS section number only",
    ],
    answer: 1,
    explain:
      "Reduced workplace labels should include product identifier/name and GHS pictogram, with signal word/hazards where practicable.",
  },
  {
    type: "multi",
    question: "Select all true statements about chemical waste disposal.",
    choices: [
      "Engage a licensed TIW collector",
      "Never pour chemical waste into the sink",
      "Do not treat hazardous waste in the lab",
      "Return used gas cylinders to supplier/vendor",
      "Throw solid chemical waste into normal bins if dry",
    ],
    answers: [0, 1, 2, 3],
    explain:
      "Waste disposal uses licensed TIW collectors, no sink disposal, no normal bins, no lab treatment and gas cylinders go back to supplier/vendor.",
  },
  {
    type: "typed",
    question: "A waste bottle is bulging and missing a cap. Identify 2 problems.",
    minMatches: 2,
    keyPoints: [
      { label: "bulging/gas pressure risk", terms: ["bulging", "pressure", "gas", "explosion"] },
      { label: "missing cap/not leak-proof", terms: ["cap", "uncapped", "missing", "leak"] },
      { label: "not suitable waste container", terms: ["container", "leak proof", "leak-proof"] },
    ],
    explain:
      "Waste containers should be leak-proof, capped, not bulging/cracked/rusty and should avoid gas pressure build-up.",
  },
  {
    type: "typed",
    question: "A chemical is being transferred into a 1 L bottle. What label size applies and why?",
    minMatches: 2,
    keyPoints: [
      { label: "125 ml - 3 litres range", terms: ["125", "3 litres", "3 liters", "1 l", "1l"] },
      { label: "52 x 74 mm", terms: ["52", "74", "52 x 74"] },
      { label: "full GHS label where practical", terms: ["ghs", "label", "practical"] },
    ],
    explain:
      "A 1 L container is within 125 ml - 3 litres, so if possible the GHS label should be at least 52 x 74 mm.",
  },
  {
    type: "multi",
    question: "Select all true statements about oxidising chemicals or oxidiser pictograms.",
    choices: [
      "They may release oxygen easily",
      "They can cause or contribute to combustion",
      "They should be separated from flammables",
      "They are safe to store with reducing agents",
      "Hydrogen peroxide is an example",
    ],
    answers: [0, 1, 2, 4],
    explain:
      "Oxidisers may release oxygen, intensify fire, must be kept from flammables/reducing agents, and examples include hydrogen peroxide.",
  },
  {
    type: "single",
    question:
      "A liquid has flash point below 23 degrees C and initial boiling point above 35 degrees C. Which flammable liquid category is it?",
    choices: ["Category 1", "Category 2", "Category 3", "Category 4"],
    answer: 1,
    explain:
      "Category 2 is flash point below 23 degrees C and initial boiling point above 35 degrees C.",
  },
  {
    type: "single",
    question:
      "A liquid has flash point 50 degrees C. Which flammable liquid category best matches the notes?",
    choices: ["Category 1", "Category 2", "Category 3", "Category 4"],
    answer: 2,
    explain:
      "Category 3 covers flash point at or above 23 degrees C and at or below 60 degrees C.",
  },
  {
    type: "typed",
    question: "Name 3 things to check from an SDS before purchasing a chemical.",
    minMatches: 3,
    keyPoints: [
      { label: "flammability/flashpoint", terms: ["flammability", "flashpoint", "flash point"] },
      { label: "fire or explosion rating", terms: ["fire", "explosion"] },
      { label: "toxicity", terms: ["toxicity", "lethal"] },
      { label: "health effects", terms: ["health"] },
      { label: "route of exposure", terms: ["route", "exposure"] },
      { label: "vapour pressure", terms: ["vapour pressure", "vapor pressure"] },
      { label: "permissible exposure limit", terms: ["permissible", "exposure limit", "pel"] },
    ],
    explain:
      "Before purchase, review SDS hazards such as flammability, fire/explosion rating, toxicity, health effects, route of exposure, vapour pressure and exposure limits.",
  },
  {
    type: "multi",
    question: "Select all correct good practices when ordering chemicals.",
    choices: [
      "Purchase minimum quantity required",
      "Buy only what is needed before expiry",
      "Prefer plastic or plastic-coated glass when possible",
      "Buy excessive amounts so you never run out",
      "Skip SDS review if the chemical is common",
    ],
    answers: [0, 1, 2],
    explain:
      "Ordering practice: buy minimum required, only within reasonable use/expiry, and prefer plastic/plastic-coated glass when possible.",
  },
  {
    type: "typed",
    question: "When receiving a chemical delivery, list 4 actions lab personnel should take.",
    minMatches: 4,
    keyPoints: [
      { label: "trained personnel receive delivery", terms: ["trained", "receive"] },
      { label: "inspect container condition", terms: ["inspect", "condition", "container"] },
      { label: "obtain latest SDS", terms: ["latest", "sds"] },
      { label: "date container received", terms: ["date", "received"] },
      { label: "enter inventory", terms: ["inventory", "tracking"] },
    ],
    explain:
      "Receiving practices include trained personnel, inspecting the container, obtaining latest SDS, dating the container and entering chemical inventory.",
  },
  {
    type: "single",
    question:
      "You need extended-contact protection against ketones and esters. Which glove is the best match from the notes?",
    choices: ["Latex", "Nitrile", "Butyl", "Cotton"],
    answer: 2,
    explain:
      "Butyl gloves are listed for extended contact and are good for ketones and esters.",
  },
  {
    type: "single",
    question:
      "You are handling gasoline and hydraulic fluids with extended contact risk. Which glove is the best match?",
    choices: ["Neoprene", "Cotton", "Cryo", "Latex"],
    answer: 0,
    explain:
      "Neoprene gloves are listed for extended contact and are good for hydraulic fluids and gasoline.",
  },
  {
    type: "multi",
    question: "Select all PPE where fit-testing is required according to the notes.",
    choices: [
      "Disposable respirator",
      "Respirator with filter/cartridge",
      "Safety glasses",
      "Face shield",
      "Surgical mask",
    ],
    answers: [0, 1],
    explain:
      "Disposable respirators and respirators with filters/cartridges require fit-testing.",
  },
  {
    type: "typed",
    question: "Explain the difference between ducted and ductless fume hoods.",
    minMatches: 3,
    keyPoints: [
      { label: "ducted draws contaminated air out", terms: ["ducted", "drawn out", "piping", "ceiling", "roof", "outside"] },
      { label: "ductless filters air", terms: ["ductless", "filter", "filtered"] },
      { label: "ductless returns air to lab", terms: ["released back", "back into the lab", "recirculated"] },
      { label: "filter type/replacement matters", terms: ["filter depends", "replaced", "periodically"] },
    ],
    explain:
      "Ducted hoods exhaust contaminated air outside via ducting. Ductless hoods filter air and release it back into the lab, so filter selection and replacement matter.",
  },
  {
    type: "multi",
    question: "Select all correct statements about constant volume fume hoods.",
    choices: [
      "They have a fixed exhaust flow rate",
      "Sash height affects the opening area",
      "Lowering the sash helps maintain high face velocity",
      "They automatically vary exhaust flow like VAV hoods",
      "They are used as storage cabinets",
    ],
    answers: [0, 1, 2],
    explain:
      "Constant volume hoods have fixed exhaust flow; sash height changes opening area, so lowering sash helps maintain face velocity.",
  },
  {
    type: "typed",
    question: "List 4 practices for storing flammable chemicals.",
    minMatches: 4,
    keyPoints: [
      { label: "fire-rated cabinet", terms: ["fire-rated", "fire rated", "1 hour", "flammable cabinet"] },
      { label: "flammable warning", terms: ["flammable warning", "warning"] },
      { label: "away from oxidisers", terms: ["oxidiser", "oxidizer"] },
      { label: "minimise amount", terms: ["minimise", "minimize", "minimum", "amount"] },
      { label: "locked", terms: ["locked", "lock"] },
      { label: "solids separate from liquids", terms: ["solids", "liquids"] },
      { label: "fire-fighting equipment", terms: ["fire-fighting", "fire fighting", "extinguisher"] },
    ],
    explain:
      "Flammables need fire-rated locked cabinets, warning labels, separation from oxidisers, minimum quantities, solids/liquids separation and fire-fighting support.",
  },
  {
    type: "typed",
    question: "List 3 practices for storing toxic chemicals.",
    minMatches: 3,
    keyPoints: [
      { label: "Toxic/Poison label", terms: ["toxic", "poison"] },
      { label: "locked cabinet", terms: ["locked", "lock"] },
      { label: "well sealed containers", terms: ["sealed", "well sealed"] },
      { label: "avoid vapour/spills", terms: ["vapour", "vapor", "spill"] },
      { label: "emergency shower/eyewash", terms: ["shower", "eyewash", "eye wash"] },
    ],
    explain:
      "Toxic chemicals need toxic/poison labelling, locked storage, well-sealed containers, and emergency shower/eyewash access.",
  },
  {
    type: "multi",
    question: "Select all correct practices for reactive chemicals.",
    choices: [
      "Store isolated, cool and dry",
      "Keep away from open flames and hot surfaces",
      "Use individual chemical-resistant secondary containers",
      "Store under sunlight for visibility",
      "Use dry box/desiccator/nitrogen-purged box for moisture or air-reactive chemicals",
    ],
    answers: [0, 1, 2, 4],
    explain:
      "Reactive chemicals require isolated cool dry storage, away from heat/flames/sunlight, with suitable secondary containers and special dry/nitrogen storage if moisture or air-reactive.",
  },
  {
    type: "typed",
    question: "Explain the chemical compatibility storage order in 3 steps.",
    minMatches: 3,
    keyPoints: [
      { label: "organic and inorganic families", terms: ["organic", "inorganic"] },
      { label: "compatible storage groups", terms: ["compatible", "compatibility", "storage groups"] },
      { label: "alphabetical within group", terms: ["alphabetical", "within"] },
    ],
    explain:
      "Compatibility order: sort into organic/inorganic families, segregate into compatible storage groups, then alphabetise within each group.",
  },
  {
    type: "single",
    question:
      "A tray contains five 1 L bottles and one 3 L bottle. What minimum tray capacity does SS641 require?",
    choices: ["0.8 L", "1 L", "3 L", "8 L"],
    answer: 2,
    explain:
      "Total is 8 L, so 10% is 0.8 L. Largest container is 3 L, so the larger required capacity is 3 L.",
  },
  {
    type: "typed",
    question: "List 3 disadvantages or cautions for container materials.",
    minMatches: 3,
    keyPoints: [
      { label: "glass breaks", terms: ["glass", "break"] },
      { label: "plastic may degrade", terms: ["plastic", "degrade"] },
      { label: "steel may react", terms: ["steel", "react"] },
      { label: "bromine example", terms: ["bromine"] },
    ],
    explain:
      "Glass breaks easily, plastic may degrade after extended contact with some chemicals, and steel may react with some chemicals such as bromine.",
  },
  {
    type: "multi",
    question: "Select all actions that minimise chemical waste production.",
    choices: [
      "Buy smaller quantities",
      "Store correctly to prevent degradation",
      "Use smaller scale reactions",
      "Buy large bottles to save time",
      "Mix all waste together",
    ],
    answers: [0, 1, 2],
    explain:
      "Waste minimisation includes buying smaller quantities, storing correctly and scaling reactions down where possible.",
  },
  {
    type: "typed",
    question: "List 4 things that make a waste container unsuitable.",
    minMatches: 4,
    keyPoints: [
      { label: "cracked", terms: ["cracked", "crack"] },
      { label: "bulging", terms: ["bulging", "bulge"] },
      { label: "rusty", terms: ["rusty", "rust"] },
      { label: "improper or missing cap", terms: ["cap", "missing", "improper"] },
      { label: "not leak proof", terms: ["leak", "leak-proof", "leak proof"] },
    ],
    explain:
      "Unsuitable waste containers include cracked, bulging, rusty, leaking or improperly capped containers.",
  },
  {
    type: "single",
    question:
      "A student wants to pour waste containing toxic substances down the sink because it is dilute. What is the correct response?",
    choices: [
      "Allowed if diluted",
      "Allowed if followed with water",
      "Not allowed; toxic waste must not be poured down the sink",
      "Allowed if labelled first",
    ],
    answer: 2,
    explain:
      "Waste containing toxic substances must not be poured down the sink.",
  },
  {
    type: "multi",
    question: "Select all information that should be recorded/provided for proper waste disposal.",
    choices: [
      "Waste disposal details in a register",
      "Relevant information to licensed TIW collector",
      "Key chemical constituents",
      "Volume of waste",
      "The colour of the room",
    ],
    answers: [0, 1, 2, 3],
    explain:
      "Proper disposal involves records, relevant information for the licensed TIW collector, constituents and volume.",
  },
  {
    type: "typed",
    question: "A gas cylinder is labelled but left unsecured near sunlight and a heat source. Name 3 issues.",
    minMatches: 3,
    keyPoints: [
      { label: "unsecured", terms: ["unsecured", "secure", "chain", "bracket"] },
      { label: "sunlight", terms: ["sunlight", "direct sunlight"] },
      { label: "heat source", terms: ["heat"] },
      { label: "should be upright/rack/cage", terms: ["upright", "rack", "cage"] },
    ],
    explain:
      "Gas cylinders should be upright, secured by chain/bracket or rack/cage, and away from sunlight and heat sources.",
  },
  {
    type: "single",
    question:
      "Which PPE is most suitable for corrosive liquid splash risk to face and eyes?",
    choices: ["Safety glasses only", "Face shield", "Ear plugs", "Cotton gloves"],
    answer: 1,
    explain:
      "A face shield gives maximum protection to eyes and face for corrosive liquid splash risk.",
  },
  {
    type: "multi",
    question: "Select all true statements about reduced workplace labels.",
    choices: [
      "Used when full GHS label is not practicable",
      "Must include product identifier/name",
      "Must include GHS pictogram",
      "Signal word/hazards should be included where practicable",
      "Chemical name and pictogram must always be on the same sticker",
    ],
    answers: [0, 1, 2, 3],
    explain:
      "Reduced labels include product identifier and GHS pictogram; signal word/hazards where practicable. Name and pictogram can be on separate stickers next to each other.",
  },
];

const flashcards = [
  ["SS508", "Singapore standard for graphical symbols, safety colours, safety signs and markings."],
  ["SS586", "Singapore specification for hazard communication for hazardous chemicals and dangerous goods."],
  ["SDS Section 8", "Exposure controls and personal protection."],
  ["Secondary containment tray", "Must hold the largest container volume or 10 percent of total volume, whichever is larger."],
  ["VAV hood", "Variable Air Volume hood adjusts exhaust flow to maintain ideal face velocity."],
  ["Waste bottle headspace", "Do not fill to the brim. Leave space for vaporisation and pressure build-up."],
];

const ppeFlashcards = [
  ["Safety glasses", "Minimum level of eye protection."],
  ["Goggles", "Use when there is risk of chemical splash or flying objects."],
  ["Face shield", "Maximum protection to eyes and face; use for corrosive liquid splashes or flying particles."],
  ["Ear plugs", "Use when noise exposure is above 85 dBA."],
  ["Ear muffs over ear plugs", "Use when noise exposure is above 100 dBA."],
  ["Surgical mask", "Protects against large droplets and splashes."],
  ["Disposable respirator", "For harmful dusts, fumes, vapours or gases; requires fit-testing."],
  ["Respirator with filter/cartridge", "For particulates, hazardous vapours, dust, mists and fumes; requires fit-testing."],
  ["Lab coat or apron", "Protects from small splashes and prevents spread of contamination."],
  ["Fully covered shoes", "Protect feet from falling objects, corrosives, sharp objects, hot substances and slippery surfaces."],
  ["Safety harness", "Required for work at height more than 2 m."],
];

const gloveTypes = [
  {
    name: "Latex gloves",
    contact: "Incidental contact",
    good:
      "Wet work, mild chemicals such as detergent and cement, biohazards, bases, alcohols, inorganic chemicals, and water solutions of acids, alkalis, salts and ketones.",
    poor: "Organic solvents, oils and greases.",
  },
  {
    name: "Nitrile gloves",
    contact: "Incidental contact",
    good: "Oils, greases, aliphatic chemicals, acids, caustics and alcohols.",
    poor: "Strong oxidising agents, aromatic solvents, ketones and acetates.",
  },
  {
    name: "Neoprene gloves",
    contact: "Extended contact",
    good: "Hydraulic fluids, gasoline, alcohols, organic acids and alkalis.",
    poor: "Halogenated hydrocarbons and aromatic hydrocarbons.",
  },
  {
    name: "Butyl gloves",
    contact: "Extended contact",
    good:
      "Ketones, esters, peroxides, highly corrosive acids, strong bases, alcohols, aldehydes and nitrocompounds.",
    poor: "Halogenated solvents, aliphatic hydrocarbons and aromatic hydrocarbons.",
  },
  {
    name: "Cut-resistant gloves",
    contact: "Specific use",
    good: "Cuts while working with sharp tools and broken glass.",
    poor: "Chemical splash protection unless another compatible chemical glove is worn as needed.",
  },
  {
    name: "Cotton gloves",
    contact: "Specific use",
    good: "Light duty work such as general assembly; minimal to moderate heat, cold or abrasion resistance.",
    poor: "Rough or sharp materials and chemical protection.",
  },
  {
    name: "Heat-resistant gloves",
    contact: "Specific use",
    good: "Handling hot objects or work involving high temperatures.",
    poor: "Chemical compatibility unless the glove material is also chemically suitable.",
  },
  {
    name: "Cryo gloves",
    contact: "Specific use",
    good: "Handling ultra-low temperature objects or equipment.",
    poor: "Routine chemical handling unless specifically rated for that chemical.",
  },
];

const safetySigns = [
  {
    css: "safe",
    code: "E",
    name: "Safe condition",
    recognition: "Green square with white symbol",
    purpose:
      "Provides information on safe condition. Identifies evacuation routes and assembly points, first aid, emergency equipment, safety facilities or safety actions.",
  },
  {
    css: "fire",
    code: "F",
    name: "Fire safety",
    recognition: "Red square with white symbol and white flame representation",
    purpose: "Provides information on the type and location of fire equipment.",
  },
  {
    css: "mandatory",
    code: "M",
    name: "Mandatory action",
    recognition: "Blue circle with white symbol",
    purpose: "Specifies an action that must be carried out, such as wearing required PPE.",
  },
  {
    css: "prohibit",
    code: "P",
    name: "Prohibition",
    recognition: "Red ring and diagonal bar with black symbol on white background",
    purpose:
      "Prohibits behaviour that may result in personal injury or threat to health.",
  },
  {
    css: "warning",
    code: "W",
    name: "Warning",
    recognition: "Yellow triangle with black border and black symbol",
    purpose: "Warns of a hazard. It may be accompanied by text or extra signs for clarity.",
  },
];

const pictograms = [
  {
    label: "Oxidizers",
    short: "OX",
    hazard: "Physical hazard",
    bullets: [
      "Release oxygen easily, which can cause fire or explosion.",
      "May explode with heat, shock, friction or environmental exposure.",
    ],
  },
  {
    label: "Corrosives",
    short: "COR",
    hazard: "Physical and health hazard",
    bullets: [
      "May cause severe damage to body parts on contact.",
      "Corrosive to metals.",
    ],
  },
  {
    label: "Acute Toxicity (Severe)",
    short: "TOX",
    hazard: "Health hazard",
    bullets: [
      "May cause harmful long-term health effects.",
      "Exposure amount and toxicity affect health implications.",
      "May be fatal.",
    ],
  },
  {
    label: "Environmental Toxicity",
    short: "ENV",
    hazard: "Environmental hazard",
    bullets: [
      "May harm the environment, people and animals.",
      "Poisonous and can lead to death.",
    ],
  },
  {
    label: "Gases Under Pressure",
    short: "GAS",
    hazard: "Physical hazard",
    bullets: [
      "Stored in pressurised cylinders.",
      "May be flammable and explosive.",
      "May be harmful to health.",
      "May cause oxygen deficiency in an enclosed space.",
    ],
  },
  {
    label: "Explosives / Self-reactives / Organic Peroxides",
    short: "EXP",
    hazard: "Physical hazard",
    bullets: [
      "May cause fire, explosion or produce poisonous gas.",
      "May be fatal if swallowed or if vapours are inhaled.",
      "Can be toxic or corrosive.",
      "Avoid contact with skin or eyes.",
    ],
  },
  {
    label: "Carcinogenicity / Respiratory Sensitizer / Reproductive Toxicity / Target Organ Toxicity / Mutagenicity / Aspiration Toxicity",
    short: "HLTH",
    hazard: "Health hazard",
    bullets: [
      "Can enter your body directly through mouth or inhalation.",
      "Can cause breathing difficulties.",
      "Can cause infertility, birth defects, organ failure or cancer.",
    ],
  },
  {
    label: "Flammables / Self-reactives / Pyrophorics / Self-heating / Emits Flammable Gas / Aerosols",
    short: "FLAM",
    hazard: "Physical hazard",
    bullets: [
      "Highly flammable.",
      "May cause fire or produce poisonous gas when reacting with air, water or chemicals.",
      "May be fatal if swallowed or if vapours are inhaled.",
      "Can be toxic or corrosive.",
      "Avoid contact with skin.",
    ],
  },
  {
    label: "Irritant / Skin Sensitizer / Acute Toxicity / Narcotic Effects / Respiratory Tract Irritation / Hazardous to Ozone Layer",
    short: "IRR",
    hazard: "Health and environmental hazard",
    bullets: [
      "May cause irritation or inflammation of skin, eyes, nose or respiratory system.",
      "Can impair vital body functions.",
      "Can weaken the central nervous system.",
      "May lead to coma and death.",
    ],
  },
];

const hazardClasses = [
  {
    name: "Flammable liquids",
    definition: "Liquids that ignite easily. Category depends on flash point and initial boiling point.",
    examples: "Ethanol, acetone",
  },
  {
    name: "Pyrophoric substances",
    definition: "Substances that ignite spontaneously in air below 54.4 degrees C.",
    examples: "Sodium hydride, butyl lithium",
  },
  {
    name: "Oxidising substances",
    definition:
      "Substances that cause or contribute to combustion and speed up development of a fire.",
    examples: "Hydrogen peroxide, nitric acid",
  },
  {
    name: "Corrosive substances",
    definition:
      "Substances that cause visible destruction or irreversible changes in human skin tissue and may degrade metals.",
    examples: "Sulfuric acid, sodium hydroxide",
  },
  {
    name: "Gases under pressure",
    definition:
      "Stored in pressurised cylinders. Faulty regulators, valves or leaks can lead to asphyxiation, poisoning, fire or explosion.",
    examples: "Compressed gas cylinders, liquefied petroleum gas cylinders",
  },
];

const generalPpe = [
  ["Safety helmet", "Head protection."],
  ["Safety glasses", "Minimum eye protection."],
  ["Goggles", "Eye protection where there is risk of chemical splash or flying objects."],
  ["Face shield", "Maximum eye and face protection for corrosive splashes or flying particles."],
  ["Ear plug", "Hearing protection above 85 dBA."],
  ["Ear muffs over ear plugs", "Hearing protection above 100 dBA."],
  ["Surgical mask", "Respiratory protection for large droplets and splashes."],
  ["Disposable respirator", "Protection from harmful dusts, fumes, vapours or gases; fit-testing required."],
  ["Respirator with filter/cartridge", "Protection from particulates, hazardous vapours, dust, mists and fumes; fit-testing required."],
  ["Lab coat / apron", "Body protection from small splashes and spread of contamination."],
  ["Fully covered shoes / safety shoes", "Foot protection from falling objects, corrosives, hot substances, sharp objects and slips."],
  ["Safety harness", "Fall protection for work at height more than 2 m."],
];

const buyingConsiderations = [
  ["Need", "Is the chemical actually necessary, or can the process be eliminated?"],
  ["Substitution", "Can a safer or less hazardous chemical be used instead?"],
  ["SDS review", "Check properties, hazards, risks, exposure routes and controls before purchase."],
  ["Flammability", "Check flash point plus fire or explosion rating."],
  ["Toxicity", "Check lethal dose/concentration, health effects and route of exposure."],
  ["Exposure", "Check vapour pressure and permissible exposure limit/level."],
  ["Storage", "Check storage/handling requirements, maximum allowable quantity and available storage space."],
  ["Facilities", "Check whether the lab has proper storage, handling equipment and ventilation/local exhaust."],
  ["Emergency", "Check emergency response, first aid, worst-case spill/injury response and special antidotes."],
  ["Waste", "Check whether the chemical or end product will need hazardous waste disposal."],
];

const authorityChecks = [
  ["NEA", "Hazardous substances"],
  ["SCDF", "Petroleum and flammable substances"],
  ["SPF", "Explosives and their precursors"],
  ["HSA", "Poisons"],
];

const orderingReceiving = [
  ["Order minimum quantity", "Buy the minimum amount required for use."],
  ["Use before expiry", "Buy only what is needed within a reasonable time or before expiry."],
  ["Reduce breakage", "Choose plastic bottles or plastic-coated glass bottles where possible."],
  ["Trained receiving", "Laboratory personnel should be trained to safely receive delivery."],
  ["Inspect container", "Check the container is in good condition on arrival."],
  ["Latest SDS", "Obtain the latest version of the chemical SDS."],
  ["Date and inventory", "Date the container when received and enter it into the chemical inventory tracking system."],
];

const storagePrinciples = [
  ["Do not store", "Floors, exits, passageways, under benches, bench tops or fume hoods."],
  ["Store position", "Below eye level, away from heat and sunlight, and in small practical amounts."],
  ["Arrangement", "Sort by compatibility, then alphabetically within each compatible group."],
  ["Labels and dates", "Keep chemicals properly labelled and date containers when received or opened."],
  ["Cabinets", "Use proper lockable cabinets such as flammable, corrosive or poison cabinets."],
  ["Emergency support", "Keep fire extinguisher, spill kit, first aid kit, emergency shower and eyewash nearby."],
];

const chemicalStorageTypes = [
  {
    name: "Flammable chemicals",
    points: [
      "Use minimum 1 hour fire-rated flammable cabinet.",
      "Cabinet should have large Flammable warning and be locked.",
      "Keep away from oxidisers and highly sensitive chemicals that release heat with air or moisture.",
      "Minimise amount stored; solids stored separately from liquids.",
      "Fire-fighting facilities and equipment should be available.",
      "Know SS532:2007 for storage of flammable liquids.",
    ],
  },
  {
    name: "Corrosive chemicals",
    points: [
      "Use cabinet with large Corrosive warning.",
      "Separate acids and alkalis.",
      "Separate organic and inorganic corrosives.",
      "Nitric acid needs dedicated storage.",
      "Keep spill control kit, emergency shower and eyewash available.",
      "Cabinet should be locked.",
    ],
  },
  {
    name: "Toxic chemicals",
    points: [
      "Use Toxic or Poison label.",
      "Cabinet should be locked.",
      "Containers should be well sealed to avoid vapour release and spills.",
      "Emergency shower and eyewash should be available.",
    ],
  },
  {
    name: "Oxidising chemicals",
    points: [
      "Separate oxidisers from flammables and reducing agents.",
      "Minimise amount stored.",
      "Cabinet should be locked.",
    ],
  },
  {
    name: "Reactive chemicals",
    points: [
      "Store isolated, cool and dry.",
      "Keep away from open flames, hot surfaces, sunlight and rapid temperature changes.",
      "Use individual chemical-resistant secondary containers large enough for a full spill.",
      "Moisture or air-reactive chemicals may need sealed dry boxes, desiccators or nitrogen-purged boxes.",
      "Cabinet should be locked.",
    ],
  },
  {
    name: "Gaseous chemicals",
    points: [
      "Keep storage to minimum according to SCDF guidelines.",
      "Label gas cylinders with content and status: Full, In use or Empty.",
      "Store upright on floor rack or locked cage, away from sunlight, heat and corrosives.",
      "Secure cylinders with chain or wall bracket.",
      "Separate incompatible gases by gas type.",
      "Main valve must be accessible and shut off when not in use.",
      "Know NFPA 55:2013 and NFPA 58:2011.",
    ],
  },
];

const containerMaterials = [
  {
    name: "Glass",
    advantages: ["Clear and transparent", "Chemically inert", "Rigid and durable", "Relatively inexpensive", "Readily recyclable"],
    disadvantages: ["Easily breakable"],
  },
  {
    name: "Plastic",
    advantages: ["Light", "Not easily breakable", "Chemically inert for many uses", "Rigid and durable", "Generally non-toxic"],
    disadvantages: ["May degrade after extended contact with some chemicals"],
  },
  {
    name: "Steel",
    advantages: [
      "Convenient for storing, carrying and dispensing flammable liquid or fuel",
      "Galvanised or stainless steel safety cans reduce flammable vapour emissions",
    ],
    disadvantages: ["Reactive with some chemicals, such as bromine"],
  },
];

const wasteSections = [
  {
    name: "Waste segregation",
    points: [
      "Separate incompatible waste.",
      "Acids from bases.",
      "Heavy metals from salts.",
      "Strong oxidisers from organics.",
      "Chemical carcinogens.",
      "Water-reactive chemicals from moisture or water.",
      "Peroxide-forming chemicals from flammable substances and acids.",
      "Elemental mercury.",
      "Inorganic from organic.",
      "Halogenated from non-halogenated.",
      "Waste containing toxic substances must not be poured down the sink.",
      "Contaminated solid waste and broken glass go into plastic containers or plastic-lined cardboard boxes.",
    ],
  },
  {
    name: "Waste storage and handling",
    points: [
      "Ensure no reaction occurs in the waste bottle.",
      "Discard only after complete reaction.",
      "Avoid gas build-up pressure and explosion risk.",
      "Use leak-proof waste containers; avoid cracked, bulging, rusty or uncapped containers.",
      "Wear appropriate PPE and use a chemical fume hood if needed.",
      "Label waste type, key constituents, volume, disposal date, purity if available, PPE if needed, and hazard symbols.",
      "Do not fill to the brim; leave headspace for vaporisation and pressure build-up.",
      "Fill to about three-quarter full only.",
      "Cap all waste containers.",
      "Store in designated areas, ideally a cabinet, away from normal operations.",
      "Use appropriate secondary containment trays.",
      "Do not store incompatible waste together.",
      "Lock cabinet.",
    ],
  },
  {
    name: "Waste disposal",
    points: [
      "Engage a licensed Toxic Industrial Waste collector.",
      "Provide relevant information to facilitate disposal.",
      "Never pour chemical waste into the sink.",
      "Never throw solid chemical waste into normal rubbish bins.",
      "Do not treat hazardous waste in the lab.",
      "Return used gas cylinders to the gas supplier or vendor.",
      "Containers used to keep chemical waste are considered TIW.",
      "Record waste disposal details in a waste register.",
    ],
  },
];

let current = 0;
let score = 0;
let attempts = 0;
let flashIndex = 0;
let ppeFlashIndex = 0;
let ppeFlashAnswerVisible = false;
let activeQuizQuestions = [];
const answeredQuestions = new Set();

const lessonCard = document.getElementById("lessonCard");
const sectionNav = document.getElementById("sectionNav");
const scoreText = document.getElementById("scoreText");
const scoreBar = document.getElementById("scoreBar");
const stepCount = document.getElementById("stepCount");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

function renderNav() {
  sectionNav.innerHTML = "";
  sections.forEach((section, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${index + 1}. ${section.title}`;
    button.classList.toggle("active", index === current);
    button.addEventListener("click", () => {
      current = index;
      render();
    });
    sectionNav.append(button);
  });
}

function updateScore() {
  scoreText.textContent = `${score} / ${attempts}`;
  const width = attempts ? Math.round((score / attempts) * 100) : 0;
  scoreBar.style.width = `${width}%`;
}

function shuffleQuestions(list) {
  return [...list]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function resetQuiz() {
  activeQuizQuestions = shuffleQuestions(challengeQuestions).slice(0, 8);
  answeredQuestions.clear();
  score = 0;
  attempts = 0;
  updateScore();
}

function normaliseText(value) {
  return value.toLowerCase().replace(/[^a-z0-9.% ]/g, " ").replace(/\s+/g, " ").trim();
}

function countKeyPointMatches(answer, keyPoints) {
  const normalised = normaliseText(answer);
  return keyPoints.filter((point) =>
    point.terms.some((term) => normalised.includes(normaliseText(term)))
  );
}

function scoreQuestion(qIndex, isCorrect, feedback) {
  if (!answeredQuestions.has(qIndex)) {
    answeredQuestions.add(qIndex);
    attempts += 1;
    if (isCorrect) score += 1;
  }
  document.getElementById(`feedback-${qIndex}`).textContent = feedback;
  updateScore();
}

function shell(content) {
  const section = sections[current];
  lessonCard.innerHTML = `
    <div class="lesson-grid">
      <div>
        <p class="kicker">${section.title}</p>
        <h2>${section.heading}</h2>
        <p>${section.body}</p>
        ${section.tags ? `<div class="tag-row">${section.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
      </div>
      ${content}
    </div>
  `;
}

function renderIntro() {
  shell(`
    <div class="visual-board">
      <h3>How to use this</h3>
      <ul>
        <li>Use Next instead of scrolling endlessly.</li>
        <li>Click cards to reveal checks and explanations.</li>
        <li>Use the final quiz for fast recall practice.</li>
      </ul>
      <button class="mini-button" data-go-next>Begin revision</button>
    </div>
  `);
}

function renderSigns() {
  shell(`
    <div class="visual-board">
      <div class="sign-grid">
        ${safetySigns.map((sign) => `
          <div class="sign ${sign.css}">
            <div class="symbol"><span>${sign.code}</span></div>
            <strong>${sign.name}</strong>
            <small>${sign.recognition}</small>
            <p>${sign.purpose}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `);
}

function renderGhs() {
  shell(`
    <div class="visual-board">
      <h3>Three GHS hazard groups</h3>
      <div class="ghs-grid">
        <div class="ghs"><div class="symbol diamond"><span>PHY</span></div><span>Physical hazards: 16 classes</span></div>
        <div class="ghs"><div class="symbol diamond"><span>HLT</span></div><span>Health hazards: 10 classes</span></div>
        <div class="ghs"><div class="symbol diamond"><span>ENV</span></div><span>Environmental hazards: 3 classes</span></div>
      </div>
      <p class="feedback">Gases under pressure is not a fourth GHS group. It is one hazard class under the Physical hazard group.</p>
      <h3>SS586 parts to memorise</h3>
      <table class="table-mini">
        <tbody>
          <tr><th>Part 1</th><td>Transport and storage of dangerous goods.</td></tr>
          <tr><th>Part 2</th><td>GHS system of classification and labelling of chemicals, the Singapore way.</td></tr>
          <tr><th>Part 3</th><td>Preparation of Safety Data Sheets (SDS).</td></tr>
        </tbody>
      </table>
    </div>
  `);
}

function renderPictograms() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Pictograms</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="pictogram-grid">
        ${pictograms.map((item) => `
          <article class="pictogram-card">
            <div class="symbol diamond"><span>${item.short}</span></div>
            <h3>${item.label}</h3>
            <p class="hazard-type">${item.hazard}</p>
            <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderHazards() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Hazard Classes</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="hazard-layout">
        <div class="visual-board">
          <h3>Flammable liquid categories</h3>
          <table class="table-mini">
            <thead>
              <tr><th>Category</th><th>Classification criteria</th></tr>
            </thead>
            <tbody>
              <tr><td>Cat 1</td><td>Flash point &lt; 23 degrees C and initial boiling point &lt;= 35 degrees C</td></tr>
              <tr><td>Cat 2</td><td>Flash point &lt; 23 degrees C and initial boiling point &gt; 35 degrees C</td></tr>
              <tr><td>Cat 3</td><td>Flash point &gt;= 23 degrees C and &lt;= 60 degrees C</td></tr>
              <tr><td>Cat 4</td><td>Flash point &gt; 60 degrees C and &lt;= 93 degrees C</td></tr>
            </tbody>
          </table>
        </div>
        <div class="hazard-cards">
          ${hazardClasses.map((item) => `
            <article class="hazard-card">
              <h3>${item.name}</h3>
              <p>${item.definition}</p>
              <strong>Examples: ${item.examples}</strong>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderLabel() {
  shell(`
    <div class="visual-board">
      <h3>GHS label must include 7 information items</h3>
      <div class="sds-label">
        <strong>Product identifier</strong>
        <span class="danger">Signal word: Danger or Warning</span>
        <div class="label-slots">
          <span>Pictogram</span>
          <span>Hazard statement</span>
          <span>Precautionary statement</span>
          <span>Supplier information</span>
          <span>Supplementary information</span>
          <span>Capacity of container</span>
        </div>
      </div>
      <table class="table-mini label-table">
        <thead><tr><th>Capacity of container</th><th>Dimensions in millimetres</th></tr></thead>
        <tbody>
          <tr><td>125 ml - 3 litres</td><td>If possible, at least 52 x 74</td></tr>
          <tr><td>Greater than 3 litres but not exceeding 50 litres</td><td>At least 74 x 105</td></tr>
          <tr><td>Greater than 50 litres but not exceeding 500 litres</td><td>At least 105 x 148</td></tr>
          <tr><td>Greater than 500 litres</td><td>At least 148 x 210</td></tr>
          <tr><td>&lt;= 125 ml</td><td>Reduced workplace label</td></tr>
        </tbody>
      </table>
      <p class="feedback">Reduced workplace label: product identifier/name and GHS pictogram. Add signal word and hazards where practicable.</p>
    </div>
  `);
}

function renderPpe() {
  shell(`
    <div class="visual-board">
      <h3>Other PPE first</h3>
      <div class="ppe-grid general-ppe-grid">
        ${generalPpe.map((item, index) => `
          <button class="ppe-card general-ppe-card" data-ppe="${index}">
            <strong>${item[0]}</strong>
          </button>
        `).join("")}
      </div>
      <p class="feedback" id="ppeOutput">Click a PPE item to reveal its purpose.</p>
      <h3>Glove compatibility cards</h3>
      <p>Click a glove to revise what it is good and poor at protecting against.</p>
      <div class="ppe-grid glove-grid">
        ${gloveTypes.map((glove, index) => `
          <button class="ppe-card glove-card" data-glove="${index}">
            <strong>${glove.name}</strong>
            <span>${glove.contact}</span>
          </button>
        `).join("")}
      </div>
      <p class="feedback" id="gloveOutput">Choose a glove type.</p>
      <div class="flashcard ppe-flashcard">
        <button id="nextPpeFlash">Next PPE card</button>
        <p id="flashPrompt">Click Next PPE card to start.</p>
        <button class="mini-button" id="revealPpeFlash" disabled>Reveal purpose</button>
        <p class="feedback" id="flashOutput">The card will show the PPE name first. Reveal only when you have recalled the purpose.</p>
      </div>
    </div>
  `);
}

function renderBuying() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Buying Chemicals</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="storage-layout">
        <div class="visual-board">
          <h3>Before purchase: key considerations</h3>
          <div class="compact-grid">
            ${buyingConsiderations.map((item) => `
              <article class="compact-card">
                <strong>${item[0]}</strong>
                <p>${item[1]}</p>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="visual-board">
          <h3>Licence / permit checks</h3>
          <table class="table-mini">
            <thead><tr><th>Authority</th><th>Relevant chemicals</th></tr></thead>
            <tbody>
              ${authorityChecks.map((item) => `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`).join("")}
            </tbody>
          </table>
          <p class="feedback">Exam wording: ask whether licence or permit is required to purchase, use or store the chemical.</p>
        </div>
        <div class="visual-board">
          <h3>Good ordering and receiving practices</h3>
          <div class="compact-grid">
            ${orderingReceiving.map((item) => `
              <article class="compact-card">
                <strong>${item[0]}</strong>
                <p>${item[1]}</p>
              </article>
            `).join("")}
          </div>
        </div>
        <p class="feedback">Chemical life cycle reminder: procure, store, transfer, use, dispose.</p>
      </div>
    </div>
  `;
}

function renderStorage() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Storage</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="storage-layout">
        <div class="visual-board">
          <h3>Viewer-friendly storage rules</h3>
          <div class="compact-grid">
            ${storagePrinciples.map((item) => `
              <article class="compact-card">
                <strong>${item[0]}</strong>
                <p>${item[1]}</p>
              </article>
            `).join("")}
          </div>
          <p class="feedback">Storage order: organic/inorganic families, then compatible groups, then alphabetical order within the group.</p>
        </div>
        <div class="chemical-storage-grid">
          ${chemicalStorageTypes.map((item) => `
            <article class="storage-card">
              <h3>${item.name}</h3>
              <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
            </article>
          `).join("")}
        </div>
        <div class="scenario-box">
          <h3>Quick check</h3>
          <div class="sort-grid">
            ${["Store acids and alkalis together", "Keep gas cylinders chained upright", "Store chemicals in fume hood", "Use secondary containment tray"].map((text, index) => `
              <label>${text}
                <select data-storage="${index}">
                  <option value="">Choose</option>
                  <option value="yes">Good practice</option>
                  <option value="no">Bad practice</option>
                </select>
              </label>
            `).join("")}
          </div>
          <button class="mini-button" id="checkStorage">Check storage</button>
          <p class="feedback" id="storageFeedback">Remember: compatibility first, then alphabetical order within group.</p>
        </div>
      </div>
    </div>
  `;
}

function renderContainment() {
  shell(`
    <div class="visual-board">
      <h3>Singapore Standard SS641</h3>
      <p>For flammable and hazardous liquids, secondary containment tray capacity must be the larger of:</p>
      <div class="formula-grid">
        <div class="formula-card"><strong>1</strong><span>Volume of the largest container in the tray</span></div>
        <div class="formula-card"><strong>2</strong><span>10% of total volume of all containers in the tray</span></div>
      </div>
      <p class="feedback">Use whichever is larger, after taking away the volume occupied by all containers inside the tray.</p>
    </div>
  `);
}

function renderContainers() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Container Compatibility</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="material-grid">
        ${containerMaterials.map((material) => `
          <article class="material-card">
            <h3>${material.name}</h3>
            <strong>Advantages</strong>
            <ul>${material.advantages.map((point) => `<li>${point}</li>`).join("")}</ul>
            <strong>Disadvantages</strong>
            <ul>${material.disadvantages.map((point) => `<li>${point}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderHood() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Fume Hood</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="hood-layout">
        <div class="visual-board">
          <h3>Protection comparison</h3>
          <table class="table-mini">
            <thead><tr><th>Equipment</th><th>User</th><th>Sample</th><th>Environment</th></tr></thead>
            <tbody>
              <tr><td>Chemical fume hood</td><td>Yes</td><td>No</td><td>Depends on duct/filter</td></tr>
              <tr><td>Laminar flow clean bench</td><td>No</td><td>Yes</td><td>No</td></tr>
              <tr><td>Biosafety cabinet type II</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            </tbody>
          </table>
          <p class="feedback">Exam trap: laminar flow clean bench protects the sample, not the user.</p>
        </div>
        <div class="hood-grid">
          <article class="hood-card">
            <h3>Constant Volume</h3>
            <ul>
              <li>Fixed exhaust flow rate.</li>
              <li>Sash height controls the cross-sectional area of the opening.</li>
              <li>Sash needs to be lowered to maintain high face velocity.</li>
            </ul>
          </article>
          <article class="hood-card">
            <h3>Variable Air Volume (VAV)</h3>
            <ul>
              <li>Variable exhaust flow rate as sash is moved.</li>
              <li>Sensor detects face velocity.</li>
              <li>Fan adjusts to maintain ideal face velocity of 0.3 to 0.5 m/s.</li>
              <li>Lower sash reduces fan work, energy use and wear.</li>
            </ul>
          </article>
          <article class="hood-card">
            <h3>Ducted hood</h3>
            <ul>
              <li>Contaminated air is drawn out through ceiling piping.</li>
              <li>Air is expelled at the roof or outside the building.</li>
            </ul>
          </article>
          <article class="hood-card">
            <h3>Ductless hood</h3>
            <ul>
              <li>Filter is at the top of the hood.</li>
              <li>Filtered air is released back into the lab.</li>
              <li>Filter choice depends on substances handled.</li>
              <li>Filter must be replaced periodically.</li>
            </ul>
          </article>
        </div>
        <div class="visual-board">
          <h3>Good work practices</h3>
          <div class="compact-grid">
            <article class="compact-card"><strong>Lower sash</strong><p>Decreases chance of fumes escaping and acts as splash/explosion barrier.</p></article>
            <article class="compact-card"><strong>Head out</strong><p>Never put your head inside the hood.</p></article>
            <article class="compact-card"><strong>6 inches</strong><p>Keep chemicals about 6 inches behind the sash.</p></article>
            <article class="compact-card"><strong>Avoid blockage</strong><p>Do not place bulky equipment near rear baffles; elevate objects 3-5 cm if needed.</p></article>
            <article class="compact-card"><strong>Not storage</strong><p>Chemicals may leak into the lab when power is off and crowding raises spill risk.</p></article>
            <article class="compact-card"><strong>No extension cord</strong><p>Electrical devices should connect outside the hood to avoid ignition risk.</p></article>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWaste() {
  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Waste</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="waste-layout">
        <div class="visual-board">
          <h3>Hazardous waste if it is any of these</h3>
          <div class="tag-row">
            <span class="tag">Corrosive</span>
            <span class="tag">Toxic</span>
            <span class="tag">Flammable</span>
            <span class="tag">Combustible</span>
            <span class="tag">Reactive</span>
          </div>
          <p class="feedback">Minimise waste by buying smaller quantities, storing chemicals correctly and using smaller scale reactions.</p>
        </div>
        <div class="waste-grid">
          ${wasteSections.map((section) => `
            <article class="waste-card">
              <h3>${section.name}</h3>
              <ul>${section.points.map((point) => `<li>${point}</li>`).join("")}</ul>
            </article>
          `).join("")}
        </div>
        <div class="visual-board">
          <h3>Waste label checklist</h3>
          <ul>
            <li>Waste type and key chemical constituents</li>
            <li>Volume of waste and date of disposal</li>
            <li>Purity of substances, if available</li>
            <li>Recommended PPE, if necessary</li>
            <li>Safety or hazard symbols</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function renderQuiz() {
  if (!activeQuizQuestions.length) resetQuiz();

  const questionHtml = activeQuizQuestions.map((item, qIndex) => `
    <div class="quiz-box">
      <h3>Q${qIndex + 1}. ${item.question}</h3>
      ${renderQuizInput(item, qIndex)}
      <p class="feedback" id="feedback-${qIndex}">Choose an answer.</p>
    </div>
  `).join("");

  lessonCard.innerHTML = `
    <div>
      <p class="kicker">Quiz</p>
      <h2>${sections[current].heading}</h2>
      <p>${sections[current].body}</p>
      <div class="choice-list">${questionHtml}</div>
      <div class="quiz-toolbar quiz-toolbar-bottom">
        <span>Showing 8 challenge questions from a ${challengeQuestions.length}-question library.</span>
        <button class="mini-button" id="newQuizButton">New quiz set</button>
      </div>
    </div>
  `;
}

function renderQuizInput(item, qIndex) {
  if (item.type === "typed") {
    return `
      <textarea class="typed-answer" data-text-answer="${qIndex}" rows="4" placeholder="Type your answer from memory..."></textarea>
      <button class="mini-button" data-check-text="${qIndex}">Check typed answer</button>
    `;
  }

  if (item.type === "multi") {
    return `
      <div class="choice-list multi-choice-list">
        ${item.choices.map((choice, cIndex) => `
          <label class="multi-choice">
            <input type="checkbox" data-multi-question="${qIndex}" value="${cIndex}" />
            <span>${choice}</span>
          </label>
        `).join("")}
      </div>
      <button class="mini-button" data-check-multi="${qIndex}">Check selected answers</button>
    `;
  }

  return `
    <div class="choice-list">
      ${item.choices.map((choice, cIndex) => `<button class="choice" data-question="${qIndex}" data-choice="${cIndex}">${choice}</button>`).join("")}
    </div>
  `;
}

function renderFinish() {
  shell(`
    <div class="visual-board">
      <h3>Your quick revision routine</h3>
      <ol>
        <li>Run through all cards once.</li>
        <li>Redo the quiz until you can explain every answer.</li>
        <li>Memorise buying considerations before the chemical enters the lab.</li>
        <li>Practise sketching one GHS label from an SDS.</li>
        <li>Memorise the fume hood vs clean bench vs BSC table.</li>
        <li>Memorise storage by chemical type and the SS641 tray formula.</li>
        <li>Recite the three waste practice groups: segregation, storage/handling, disposal.</li>
      </ol>
      <button class="mini-button" id="restartButton">Restart revision</button>
    </div>
  `);
}

function bindCardEvents() {
  document.querySelectorAll("[data-go-next]").forEach((button) => {
    button.addEventListener("click", () => move(1));
  });

  document.querySelectorAll("[data-ppe]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = generalPpe[Number(button.dataset.ppe)];
      document.querySelectorAll("[data-ppe]").forEach((card) => card.classList.remove("active"));
      button.classList.add("active");
      document.getElementById("ppeOutput").innerHTML = `<strong>${item[0]}</strong><br>${item[1]}`;
    });
  });

  const nextPpeFlash = document.getElementById("nextPpeFlash");
  const revealPpeFlash = document.getElementById("revealPpeFlash");
  if (nextPpeFlash && revealPpeFlash) {
    nextPpeFlash.addEventListener("click", () => {
      const item = ppeFlashcards[ppeFlashIndex % ppeFlashcards.length];
      document.getElementById("flashPrompt").textContent = item[0];
      document.getElementById("flashOutput").textContent = "Try to recall the purpose before revealing.";
      revealPpeFlash.disabled = false;
      ppeFlashAnswerVisible = false;
    });

    revealPpeFlash.addEventListener("click", () => {
      if (ppeFlashAnswerVisible) return;
      const item = ppeFlashcards[ppeFlashIndex % ppeFlashcards.length];
      document.getElementById("flashOutput").textContent = item[1];
      ppeFlashIndex += 1;
      ppeFlashAnswerVisible = true;
      revealPpeFlash.disabled = true;
    });
  }

  document.querySelectorAll("[data-glove]").forEach((button) => {
    button.addEventListener("click", () => {
      const glove = gloveTypes[Number(button.dataset.glove)];
      document.querySelectorAll("[data-glove]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.getElementById("gloveOutput").innerHTML =
        `<strong>${glove.name}</strong><br>` +
        `<b>Good for:</b> ${glove.good}<br>` +
        `<b>Poor for:</b> ${glove.poor}`;
    });
  });

  const checkStorage = document.getElementById("checkStorage");
  if (checkStorage) {
    checkStorage.addEventListener("click", () => {
      const answers = ["no", "yes", "no", "yes"];
      const selects = [...document.querySelectorAll("[data-storage]")];
      const correct = selects.filter((select, index) => select.value === answers[index]).length;
      document.getElementById("storageFeedback").textContent =
        correct === answers.length
          ? "All correct. Storage rule locked in."
          : `${correct} / ${answers.length} correct. Acids and alkalis are separated; fume hoods are not storage.`;
    });
  }

  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const qIndex = Number(button.dataset.question);
      const cIndex = Number(button.dataset.choice);
      const item = activeQuizQuestions[qIndex];
      const isCorrect = cIndex === item.answer;

      document.querySelectorAll(`[data-question="${qIndex}"]`).forEach((choice) => {
        choice.disabled = true;
        choice.classList.toggle("correct", Number(choice.dataset.choice) === item.answer);
      });
      if (!isCorrect) button.classList.add("wrong");

      scoreQuestion(qIndex, isCorrect, item.explain);
    });
  });

  document.querySelectorAll("[data-check-multi]").forEach((button) => {
    button.addEventListener("click", () => {
      const qIndex = Number(button.dataset.checkMulti);
      const item = activeQuizQuestions[qIndex];
      const selected = [...document.querySelectorAll(`[data-multi-question="${qIndex}"]:checked`)].map((input) => Number(input.value));
      const expected = [...item.answers].sort((a, b) => a - b);
      const actual = [...selected].sort((a, b) => a - b);
      const isCorrect = expected.length === actual.length && expected.every((answer, index) => answer === actual[index]);

      document.querySelectorAll(`[data-multi-question="${qIndex}"]`).forEach((input) => {
        input.disabled = true;
        const wrapper = input.closest(".multi-choice");
        const value = Number(input.value);
        wrapper.classList.toggle("correct", item.answers.includes(value));
        wrapper.classList.toggle("wrong", input.checked && !item.answers.includes(value));
      });
      button.disabled = true;
      scoreQuestion(qIndex, isCorrect, item.explain);
    });
  });

  document.querySelectorAll("[data-check-text]").forEach((button) => {
    button.addEventListener("click", () => {
      const qIndex = Number(button.dataset.checkText);
      const item = activeQuizQuestions[qIndex];
      const answer = document.querySelector(`[data-text-answer="${qIndex}"]`).value;
      const matches = countKeyPointMatches(answer, item.keyPoints);
      const isCorrect = matches.length >= item.minMatches;
      const missed = item.keyPoints
        .filter((point) => !matches.includes(point))
        .map((point) => point.label)
        .slice(0, 4);
      const feedback =
        `${matches.length} / ${item.keyPoints.length} key points detected. ` +
        (missed.length ? `Missing examples: ${missed.join(", ")}. ` : "") +
        item.explain;

      document.querySelector(`[data-text-answer="${qIndex}"]`).disabled = true;
      button.disabled = true;
      scoreQuestion(qIndex, isCorrect, feedback);
    });
  });

  const newQuizButton = document.getElementById("newQuizButton");
  if (newQuizButton) {
    newQuizButton.addEventListener("click", () => {
      resetQuiz();
      render();
    });
  }

  const restartButton = document.getElementById("restartButton");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      current = 0;
      activeQuizQuestions = [];
      answeredQuestions.clear();
      score = 0;
      attempts = 0;
      render();
    });
  }
}

function renderContent() {
  const type = sections[current].type;
  if (type === "intro") renderIntro();
  if (type === "signs") renderSigns();
  if (type === "ghs") renderGhs();
  if (type === "pictograms") renderPictograms();
  if (type === "hazards") renderHazards();
  if (type === "label") renderLabel();
  if (type === "ppe") renderPpe();
  if (type === "buying") renderBuying();
  if (type === "storage") renderStorage();
  if (type === "containment") renderContainment();
  if (type === "containers") renderContainers();
  if (type === "hood") renderHood();
  if (type === "waste") renderWaste();
  if (type === "quiz") renderQuiz();
  if (type === "finish") renderFinish();
  bindCardEvents();
}

function move(delta) {
  current = Math.max(0, Math.min(sections.length - 1, current + delta));
  render();
}

function render() {
  renderNav();
  renderContent();
  stepCount.textContent = `${current + 1} / ${sections.length}`;
  backButton.disabled = current === 0;
  nextButton.disabled = current === sections.length - 1;
  updateScore();
}

backButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));

render();

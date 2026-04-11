const GRAPES = [
  {
    name:"Chardonnay", type:"white", aka:"",
    flavors:["green apple","lemon","pear","peach","butter","hazelnut","vanilla","tropical fruit","brioche","toast"],
    regions:[
      {name:"Chablis",note:"Lean, mineral, unoaked, high acid — steely and precise."},
      {name:"Côte de Beaune",note:"Rich, creamy, nutty, integrated oak — the benchmark for texture."},
      {name:"Napa Valley",note:"Ripe tropical fruit, heavy oak, lower acidity."},
      {name:"Margaret River",note:"Grapefruit-forward, restrained oak, elegant."},
      {name:"Marlborough NZ",note:"Crisp stone fruit, moderate oak, fresh finish."},
    ]
  },
  {
    name:"Sauvignon Blanc", type:"white", aka:"Fumé Blanc (CA)",
    flavors:["gooseberry","cut grass","grapefruit","passion fruit","jalapeño","flint","elderflower","nettle","lime"],
    regions:[
      {name:"Sancerre / Pouilly-Fumé",note:"Mineral, flinty, restrained fruit — the reference point."},
      {name:"Marlborough NZ",note:"Intense tropical aromas, capsicum, passion fruit bomb."},
      {name:"Pessac-Léognan",note:"Oak-fermented, waxy, complex — ages beautifully."},
      {name:"Casablanca, Chile",note:"Herbaceous, cool-climate precision, excellent value."},
    ]
  },
  {
    name:"Riesling", type:"white", aka:"",
    flavors:["lime","green apple","white peach","petrol","slate","ginger","honey","apricot","beeswax"],
    regions:[
      {name:"Mosel, Germany",note:"Featherweight, piercing acidity, slate minerality."},
      {name:"Rheingau, Germany",note:"Fuller body, more peach and structure."},
      {name:"Alsace, France",note:"Bone-dry to off-dry, powerful, intense texture."},
      {name:"Clare / Eden Valley, AU",note:"Lime-juice, bone-dry, develops petrol character quickly."},
      {name:"Finger Lakes, NY",note:"High acid, mineral, often off-dry."},
    ]
  },
  {
    name:"Pinot Gris / Grigio", type:"white", aka:"Pinot Grigio (IT)",
    flavors:["pear","peach","honey","white flowers","almond","smoke","ginger","quince"],
    regions:[
      {name:"Alsace, France",note:"Rich, smoky, full-bodied, often off-dry."},
      {name:"Alto Adige, Italy",note:"Light, crisp, neutral — the everyday Grigio style."},
      {name:"Friuli, Italy",note:"Textured, copper-hued, more serious."},
      {name:"Oregon, USA",note:"Between Alsace and Italy — stone fruit, spice, good acid."},
    ]
  },
  {
    name:"Gewurztraminer", type:"white", aka:"",
    flavors:["lychee","rose petal","ginger","mango","clove","turkish delight","white pepper","jasmine"],
    regions:[
      {name:"Alsace, France",note:"Benchmark — opulent, oily texture, very low acid."},
      {name:"Alto Adige, Italy",note:"Lighter, more delicate, noticeably higher acid."},
    ]
  },
  {
    name:"Chenin Blanc", type:"white", aka:"Steen (SA)",
    flavors:["quince","beeswax","wet wool","honey","green apple","ginger","dried apricot","lanolin"],
    regions:[
      {name:"Vouvray, Loire",note:"Ranges dry to lusciously sweet; waxy, honeyed character."},
      {name:"Savennières",note:"Bone-dry, intensely mineral, ages for decades."},
      {name:"Stellenbosch, South Africa",note:"Tropical, richer — Chenin's spiritual second homeland."},
    ]
  },
  {
    name:"Viognier", type:"white", aka:"",
    flavors:["apricot","peach","blossom","violet","cream","musk","honeysuckle","tangerine"],
    regions:[
      {name:"Condrieu, Rhône",note:"Intensely perfumed, full-bodied, short ageing window."},
      {name:"Languedoc",note:"More affordable, slightly less intense."},
      {name:"California",note:"Riper, higher alcohol, tropical fruit forward."},
    ]
  },
  {
    name:"Muscat Blanc", type:"white", aka:"Moscato",
    flavors:["orange blossom","grape","peach","rose","musk","lychee","mandarin"],
    regions:[
      {name:"Moscato d'Asti",note:"Light, frizzante, delicate sweetness."},
      {name:"Beaumes-de-Venise",note:"Fortified, rich, golden, honeyed."},
      {name:"Rutherglen, AU",note:"Intensely fortified — treacle-thick, raisined."},
    ]
  },
  {
    name:"Cabernet Sauvignon", type:"red", aka:"",
    flavors:["blackcurrant","cedar","tobacco","graphite","mint","eucalyptus","dark chocolate","cassis","cigar box","bay leaf"],
    regions:[
      {name:"Médoc / Pauillac",note:"Structured, tannic, needs time — blended with Merlot."},
      {name:"Napa Valley",note:"Riper, plush, higher alcohol, approachable younger."},
      {name:"Coonawarra, AU",note:"Signature eucalyptus/mint note over blackcurrant core."},
      {name:"Maipo Valley, Chile",note:"Good structure, minty, excellent value."},
      {name:"Stellenbosch, SA",note:"Medium-weight, leafy, firm tannins."},
    ]
  },
  {
    name:"Merlot", type:"red", aka:"",
    flavors:["plum","black cherry","chocolate","bay leaf","fruitcake","mocha","blackberry","tobacco","coffee"],
    regions:[
      {name:"Pomerol, Bordeaux",note:"Plush, velvety, iron minerality — Pétrus lives here."},
      {name:"Saint-Émilion",note:"Richer, more structured, blended with Cab Franc."},
      {name:"California",note:"Riper, jammy, sometimes lacking backbone."},
      {name:"Colchagua, Chile",note:"Soft, fruit-forward, plummy crowd-pleaser."},
    ]
  },
  {
    name:"Cabernet Franc", type:"red", aka:"",
    flavors:["red pepper","graphite","violet","raspberry","cassis","tobacco","herbs","leafy","pencil shavings"],
    regions:[
      {name:"Chinon / Bourgueil",note:"Light, herbaceous, pure red fruit, earthy."},
      {name:"Saint-Émilion",note:"Supporting role in blends; adds perfume and freshness."},
      {name:"Niagara, Canada",note:"Cool-climate elegance, bell pepper, fresh red fruit."},
    ]
  },
  {
    name:"Pinot Noir", type:"red", aka:"Spätburgunder (DE)",
    flavors:["cherry","raspberry","earth","mushroom","rose","game","forest floor","sous bois","red plum","cola"],
    regions:[
      {name:"Côte de Nuits, Burgundy",note:"Silky, complex, earthy — the mother ship. Terrifyingly expensive."},
      {name:"Willamette Valley, OR",note:"Earthy, medium-weight, more approachable than Burgundy."},
      {name:"Central Otago, NZ",note:"Ripe cherry, vibrant, spicy finish."},
      {name:"Mornington Peninsula, AU",note:"Savory, silky, cool-climate elegance."},
    ]
  },
  {
    name:"Syrah / Shiraz", type:"red", aka:"Shiraz (AU/ZA)",
    flavors:["blackberry","black pepper","smoked meat","violet","olive","leather","bacon","graphite","dark chocolate","blueberry"],
    regions:[
      {name:"Northern Rhône (Hermitage)",note:"Savory, peppery, smoked meat — a spice rack in a glass."},
      {name:"Barossa Valley",note:"Full-bodied, jammy, high alcohol, chocolate/vanilla."},
      {name:"McLaren Vale",note:"Richer still, velvet tannins, dark fruit."},
      {name:"Washington State",note:"Concentrated, peppery, structured."},
    ]
  },
  {
    name:"Grenache / Garnacha", type:"red", aka:"Cannonau (IT)",
    flavors:["raspberry","red cherry","white pepper","herbs","leather","orange peel","garrigue","kirsch","dried flowers"],
    regions:[
      {name:"Châteauneuf-du-Pape",note:"Dominant in blends; warm, spiced, rich, high alcohol."},
      {name:"Priorat, Spain",note:"Old-vine intensity, mineral, structured."},
      {name:"Rioja, Spain",note:"Blended with Tempranillo; adds roundness and fruit."},
    ]
  },
  {
    name:"Tempranillo", type:"red", aka:"Tinto Fino, Tinta Roriz",
    flavors:["leather","tobacco","cherry","plum","vanilla","dried fig","earth","strawberry","cedar","dill"],
    regions:[
      {name:"Rioja",note:"Oak-aged; vanilla and strawberry — Crianza to Gran Reserva spectrum."},
      {name:"Ribera del Duero",note:"More powerful, darker fruit, cool-altitude character."},
      {name:"Douro (Tinta Roriz)",note:"Robust, dark, important blending grape."},
    ]
  },
  {
    name:"Nebbiolo", type:"red", aka:"Spanna",
    flavors:["rose","tar","cherry","leather","dried herbs","tobacco","truffle","anise","violets"],
    regions:[
      {name:"Barolo",note:"Tannic, austere, needs 10+ years minimum. Roses and tar."},
      {name:"Barbaresco",note:"More approachable, feminine but still seriously structured."},
    ]
  },
  {
    name:"Sangiovese", type:"red", aka:"Brunello, Prugnolo",
    flavors:["sour cherry","dried herbs","leather","tobacco","tomato leaf","iron","dried rose","balsamic","fig"],
    regions:[
      {name:"Chianti Classico",note:"Medium body, high acid, firm tannins — the pizza grape."},
      {name:"Brunello di Montalcino",note:"Powerful, complex, long-lived."},
    ]
  },
  {
    name:"Malbec", type:"red", aka:"Côt (FR)",
    flavors:["plum","dark cherry","violet","chocolate","leather","tobacco","blackberry","coffee","dried fruit"],
    regions:[
      {name:"Mendoza, Argentina",note:"Lush, ripe, velvety — the grape that escaped mediocrity in France."},
      {name:"Cahors, France",note:"Tannic, rustic, earthy — the original 'Black Wine'."},
      {name:"Salta (high-altitude)",note:"More structured, floral, darker fruit from altitude."},
    ]
  },
  {
    name:"Zinfandel / Primitivo", type:"red", aka:"Primitivo (IT)",
    flavors:["blackberry jam","black pepper","dried fruit","leather","tobacco","baked spice","prune","fig"],
    regions:[
      {name:"Dry Creek Valley, CA",note:"Rich, jammy, high alcohol — a fruit bomb in formal wear."},
      {name:"Puglia, Italy (Primitivo)",note:"Lower alcohol, rustic, earthy, dried fruit character."},
    ]
  },
  {
    name:"Mourvèdre / Monastrell", type:"red", aka:"Mataro (AU)",
    flavors:["game","dark fruit","iron","thyme","garrigue","leather","smoked meat","dried herbs","pepper"],
    regions:[
      {name:"Bandol, Provence",note:"Meaty, savory, tannic, age-worthy — the benchmark."},
      {name:"Jumilla / Yecla, Spain",note:"Hot-climate, ripe, dense, powerful."},
      {name:"Barossa (Mataro)",note:"Old-vine intensity, dark fruit, structured."},
    ]
  },
  {
    name:"Gamay", type:"red", aka:"Gamay Noir",
    flavors:["red cherry","raspberry","violet","banana","bubblegum","cranberry","fresh herbs","earthy","black pepper","strawberry"],
    regions:[
      {name:"Beaujolais Nouveau",note:"Carbonic maceration staple — banana and bubblegum, drink immediately."},
      {name:"Beaujolais Villages / Crus",note:"More serious; Moulin-à-Vent and Morgon approach Pinot Noir in structure."},
      {name:"Touraine, Loire",note:"Light, fresh, peppery — easy-drinking everyday style."},
      {name:"Switzerland (Dôle blend)",note:"Blended with Pinot Noir; light, delicate, Alpine freshness."},
    ]
  },
  {
    name:"Torrontés", type:"white", aka:"Torrontés Riojano",
    flavors:["rose petal","peach","apricot","orange blossom","lychee","grapefruit","white pepper","jasmine","elderflower"],
    regions:[
      {name:"Salta (Cafayate), Argentina",note:"High-altitude benchmark — intensely aromatic, bone-dry, surprisingly crisp acidity."},
      {name:"La Rioja, Argentina",note:"Slightly lower altitude, fuller body, less acid tension."},
      {name:"Mendoza, Argentina",note:"Warmer, riper style — floral but softer, lower acidity."},
    ]
  },
];

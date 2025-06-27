// Data for all 118 elements with 'type' property
const elementsData = {
    "H": { atomicNumber: 1, name: "Hydrogen", symbol: "H", protons: 1, neutrons: 0, electrons: [1], charge: "0", feature: "It is lightest element in the universe", type: "nonmetal" },
    "He": { atomicNumber: 2, name: "Helium", symbol: "He", protons: 2, neutrons: 2, electrons: [2], charge: "0", feature: "Used in balloons and cryogenics", type: "nonmetal" },
    "Li": { atomicNumber: 3, name: "Lithium", symbol: "Li", protons: 3, neutrons: 4, electrons: [2, 1], charge: "0", feature: "It is used in batteries", type: "metal" },
    "Be": { atomicNumber: 4, name: "Beryllium", symbol: "Be", protons: 4, neutrons: 5, electrons: [2, 2], charge: "0", feature: "Used in alloys for strength and lightness", type: "metal" },
    "B": { atomicNumber: 5, name: "Boron", symbol: "B", protons: 5, neutrons: 6, electrons: [2, 3], charge: "0", feature: "Used in borosilicate glass and detergents", type: "metalloid" },
    "C": { atomicNumber: 6, name: "Carbon", symbol: "C", protons: 6, neutrons: 6, electrons: [2, 4], charge: "0", feature: "The basis of all organic life", type: "nonmetal" },
    "N": { atomicNumber: 7, name: "Nitrogen", symbol: "N", protons: 7, neutrons: 7, electrons: [2, 5], charge: "0", feature: "Main component of Earth's atmosphere", type: "nonmetal" },
    "O": { atomicNumber: 8, name: "Oxygen", symbol: "O", protons: 8, neutrons: 8, electrons: [2, 6], charge: "0", feature: "Essential for respiration and combustion", type: "nonmetal" },
    "F": { atomicNumber: 9, name: "Fluorine", symbol: "F", protons: 9, neutrons: 10, electrons: [2, 7], charge: "0", feature: "Used in toothpaste and refrigerants", type: "nonmetal" },
    "Ne": { atomicNumber: 10, name: "Neon", symbol: "Ne", protons: 10, neutrons: 10, electrons: [2, 8], charge: "0", feature: "Used in neon signs for distinct glow", type: "nonmetal" },
    "Na": { atomicNumber: 11, name: "Sodium", symbol: "Na", protons: 11, neutrons: 12, electrons: [2, 8, 1], charge: "0", feature: "Component of table salt", type: "metal" },
    "Mg": { atomicNumber: 12, name: "Magnesium", symbol: "Mg", protons: 12, neutrons: 12, electrons: [2, 8, 2], charge: "0", feature: "Lightweight metal used in alloys and fireworks", type: "metal" },
    "Al": { atomicNumber: 13, name: "Aluminum", symbol: "Al", protons: 13, neutrons: 14, electrons: [2, 8, 3], charge: "0", feature: "Common lightweight metal, used in cans and aircraft", type: "metal" },
    "Si": { atomicNumber: 14, name: "Silicon", symbol: "Si", protons: 14, neutrons: 14, electrons: [2, 8, 4], charge: "0", feature: "Used in semiconductors and glass", type: "metalloid" },
    "P": { atomicNumber: 15, name: "Phosphorus", symbol: "P", protons: 15, neutrons: 16, electrons: [2, 8, 5], charge: "0", feature: "Vital for DNA and bone formation", type: "nonmetal" },
    "S": { atomicNumber: 16, name: "Sulfur", symbol: "S", protons: 16, neutrons: 16, electrons: [2, 8, 6], charge: "0", feature: "Used in sulfuric acid production and rubber vulcanization", type: "nonmetal" },
    "Cl": { atomicNumber: 17, name: "Chlorine", symbol: "Cl", protons: 17, neutrons: 18, electrons: [2, 8, 7], charge: "0", feature: "Used as a disinfectant and in PVC production", type: "nonmetal" },
    "Ar": { atomicNumber: 18, name: "Argon", symbol: "Ar", protons: 18, neutrons: 22, electrons: [2, 8, 8], charge: "0", feature: "Used in incandescent and fluorescent lighting", type: "nonmetal" },
    "K": { atomicNumber: 19, name: "Potassium", symbol: "K", protons: 19, neutrons: 20, electrons: [2, 8, 8, 1], charge: "0", feature: "Important electrolyte for body function", type: "metal" },
    "Ca": { atomicNumber: 20, name: "Calcium", symbol: "Ca", protons: 20, neutrons: 20, electrons: [2, 8, 8, 2], charge: "0", feature: "Essential for strong bones and teeth", type: "metal" },
    "Sc": { atomicNumber: 21, name: "Scandium", symbol: "Sc", protons: 21, neutrons: 24, electrons: [2, 8, 9, 2], charge: "0", feature: "Used in aerospace components and sports equipment", type: "metal" },
    "Ti": { atomicNumber: 22, name: "Titanium", symbol: "Ti", protons: 22, neutrons: 26, electrons: [2, 8, 10, 2], charge: "0", feature: "Strong, lightweight, and corrosion-resistant metal", type: "metal" },
    "V": { atomicNumber: 23, name: "Vanadium", symbol: "V", protons: 23, neutrons: 28, electrons: [2, 8, 11, 2], charge: "0", feature: "Used in steel alloys to increase strength", type: "metal" },
    "Cr": { atomicNumber: 24, name: "Chromium", symbol: "Cr", protons: 24, neutrons: 28, electrons: [2, 8, 13, 1], charge: "0", feature: "Used in stainless steel and chrome plating", type: "metal" },
    "Mn": { atomicNumber: 25, name: "Manganese", symbol: "Mn", protons: 25, neutrons: 30, electrons: [2, 8, 13, 2], charge: "0", feature: "Used in steel production and batteries", type: "metal" },
    "Fe": { atomicNumber: 26, name: "Iron", symbol: "Fe", protons: 26, neutrons: 30, electrons: [2, 8, 14, 2], charge: "0", feature: "Main component of steel and found in hemoglobin", type: "metal" },
    "Co": { atomicNumber: 27, name: "Cobalt", symbol: "Co", protons: 27, neutrons: 32, electrons: [2, 8, 15, 2], charge: "0", feature: "Used in magnets, batteries, and pigments", type: "metal" },
    "Ni": { atomicNumber: 28, name: "Nickel", symbol: "Ni", protons: 28, neutrons: 31, electrons: [2, 8, 16, 2], charge: "0", feature: "Used in coins, alloys, and batteries", type: "metal" },
    "Cu": { atomicNumber: 29, name: "Copper", symbol: "Cu", protons: 29, neutrons: 35, electrons: [2, 8, 18, 1], charge: "0", feature: "Excellent electrical conductor, used in wiring and plumbing", type: "metal" },
    "Zn": { atomicNumber: 30, name: "Zinc", symbol: "Zn", protons: 30, neutrons: 35, electrons: [2, 8, 18, 2], charge: "0", feature: "Used in galvanizing steel and in brass", type: "metal" },
    "Ga": { atomicNumber: 31, name: "Gallium", symbol: "Ga", protons: 31, neutrons: 39, electrons: [2, 8, 18, 3], charge: "0", feature: "Melts near room temperature, used in semiconductors", type: "metal" },
    "Ge": { atomicNumber: 32, name: "Germanium", symbol: "Ge", protons: 32, neutrons: 41, electrons: [2, 8, 18, 4], charge: "0", feature: "Used in semiconductors and fiber optics", type: "metalloid" },
    "As": { atomicNumber: 33, name: "Arsenic", symbol: "As", protons: 33, neutrons: 42, electrons: [2, 8, 18, 5], charge: "0", feature: "Highly toxic, used in some pesticides and semiconductors", type: "metalloid" },
    "Se": { atomicNumber: 34, name: "Selenium", symbol: "Se", protons: 34, neutrons: 45, electrons: [2, 8, 18, 6], charge: "0", feature: "Used in photocells and toners", type: "nonmetal" },
    "Br": { atomicNumber: 35, name: "Bromine", symbol: "Br", protons: 35, neutrons: 45, electrons: [2, 8, 18, 7], charge: "0", feature: "Liquid at room temperature, used in flame retardants", type: "nonmetal" },
    "Kr": { atomicNumber: 36, name: "Krypton", symbol: "Kr", protons: 36, neutrons: 48, electrons: [2, 8, 18, 8], charge: "0", feature: "Used in flash lamps and lasers", type: "nonmetal" },
    "Rb": { atomicNumber: 37, name: "Rubidium", symbol: "Rb", protons: 37, neutrons: 48, electrons: [2, 8, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks", type: "metal" },
    "Sr": { atomicNumber: 38, name: "Strontium", symbol: "Sr", protons: 38, neutrons: 50, electrons: [2, 8, 18, 8, 2], charge: "0", feature: "Used in fireworks for red color", type: "metal" },
    "Y": { atomicNumber: 39, name: "Yttrium", symbol: "Y", protons: 39, neutrons: 50, electrons: [2, 8, 18, 9, 2], charge: "0", feature: "Used in display phosphors and lasers", type: "metal" },
    "Zr": { atomicNumber: 40, name: "Zirconium", symbol: "Zr", protons: 40, neutrons: 51, electrons: [2, 8, 18, 10, 2], charge: "0", feature: "Used in nuclear reactors and ceramics", type: "metal" },
    "Nb": { atomicNumber: 41, name: "Niobium", symbol: "Nb", protons: 41, neutrons: 52, electrons: [2, 8, 18, 12, 1], charge: "0", feature: "Used in superconductors and jet engines", type: "metal" },
    "Mo": { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", protons: 42, neutrons: 54, electrons: [2, 8, 18, 13, 1], charge: "0", feature: "Used in high-strength steel alloys", type: "metal" },
    "Tc": { atomicNumber: 43, name: "Technetium", symbol: "Tc", protons: 43, neutrons: 55, electrons: [2, 8, 18, 13, 2], charge: "0", feature: "Radioactive, used in medical diagnostic imaging", type: "metal" },
    "Ru": { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", protons: 44, neutrons: 57, electrons: [2, 8, 18, 15, 1], charge: "0", feature: "Used in electrical contacts and catalysts", type: "metal" },
    "Rh": { atomicNumber: 45, name: "Rhodium", symbol: "Rh", protons: 45, neutrons: 58, electrons: [2, 8, 18, 16, 1], charge: "0", feature: "Used in catalytic converters and jewelry", type: "metal" },
    "Pd": { atomicNumber: 46, name: "Palladium", symbol: "Pd", protons: 46, neutrons: 60, electrons: [2, 8, 18, 18, 0], charge: "0", feature: "Used in catalytic converters and dentistry", type: "metal" },
    "Ag": { atomicNumber: 47, name: "Silver", symbol: "Ag", protons: 47, neutrons: 61, electrons: [2, 8, 18, 18, 1], charge: "0", feature: "Used in jewelry, coinage, and photography", type: "metal" },
    "Cd": { atomicNumber: 48, name: "Cadmium", symbol: "Cd", protons: 48, neutrons: 64, electrons: [2, 8, 18, 18, 2], charge: "0", feature: "Used in batteries and pigments (toxic)", type: "metal" },
    "In": { atomicNumber: 49, name: "Indium", symbol: "In", protons: 49, neutrons: 66, electrons: [2, 8, 18, 18, 3], charge: "0", feature: "Used in touchscreens and low-melting alloys", type: "metal" },
    "Sn": { atomicNumber: 50, name: "Tin", symbol: "Sn", protons: 50, neutrons: 69, electrons: [2, 8, 18, 18, 4], charge: "0", feature: "Used in solders and protective coatings", type: "metal" },
    "Sb": { atomicNumber: 51, name: "Antimony", symbol: "Sb", protons: 51, neutrons: 71, electrons: [2, 8, 18, 18, 5], charge: "0", feature: "Used in fire retardants and semiconductors", type: "metalloid" },
    "Te": { atomicNumber: 52, name: "Tellurium", symbol: "Te", protons: 52, neutrons: 76, electrons: [2, 8, 18, 18, 6], charge: "0", feature: "Used in solar cells and thermal electric devices", type: "metalloid" },
    "I": { atomicNumber: 53, name: "Iodine", symbol: "I", protons: 53, neutrons: 74, electrons: [2, 8, 18, 18, 7], charge: "0", feature: "Antiseptic, essential for thyroid function", type: "nonmetal" },
    "Xe": { atomicNumber: 54, name: "Xenon", symbol: "Xe", protons: 54, neutrons: 77, electrons: [2, 8, 18, 18, 8], charge: "0", feature: "Used in headlights and projection lamps", type: "nonmetal" },
    "Cs": { atomicNumber: 55, name: "Cesium", symbol: "Cs", protons: 55, neutrons: 78, electrons: [2, 8, 18, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks and drilling fluids", type: "metal" },
    "Ba": { atomicNumber: 56, name: "Barium", symbol: "Ba", protons: 56, neutrons: 81, electrons: [2, 8, 18, 18, 8, 2], charge: "0", feature: "Used in diagnostic imaging (barium meals)", type: "metal" },
    "La": { atomicNumber: 57, name: "Lanthanum", symbol: "La", protons: 57, neutrons: 82, electrons: [2, 8, 18, 18, 9, 2], charge: "0", feature: "Used in camera lenses and lighter flints", type: "metal" },
    "Ce": { atomicNumber: 58, name: "Cerium", symbol: "Ce", protons: 58, neutrons: 82, electrons: [2, 8, 18, 19, 9, 2], charge: "0", feature: "Used in self-cleaning ovens and catalytic converters", type: "metal" },
    "Pr": { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", protons: 59, neutrons: 82, electrons: [2, 8, 18, 21, 8, 2], charge: "0", feature: "Used in magnets and yellow glass", type: "metal" },
    "Nd": { atomicNumber: 60, name: "Neodymium", symbol: "Nd", protons: 60, neutrons: 84, electrons: [2, 8, 18, 22, 8, 2], charge: "0", feature: "Used in powerful magnets (NdFeB)", type: "metal" },
    "Pm": { atomicNumber: 61, name: "Promethium", symbol: "Pm", protons: 61, neutrons: 84, electrons: [2, 8, 18, 23, 8, 2], charge: "0", feature: "Radioactive, used in luminous paints", type: "metal" },
    "Sm": { atomicNumber: 62, name: "Samarium", symbol: "Sm", protons: 62, neutrons: 88, electrons: [2, 8, 18, 24, 8, 2], charge: "0", feature: "Used in permanent magnets and control rods", type: "metal" },
    "Eu": { atomicNumber: 63, name: "Europium", symbol: "Eu", protons: 63, neutrons: 89, electrons: [2, 8, 18, 25, 8, 2], charge: "0", feature: "Used in red phosphors for TVs", type: "metal" },
    "Gd": { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", protons: 64, neutrons: 93, electrons: [2, 8, 18, 25, 9, 2], charge: "0", feature: "Used in MRI contrast agents and neutron shielding", type: "metal" },
    "Tb": { atomicNumber: 65, name: "Terbium", symbol: "Tb", protons: 65, neutrons: 94, electrons: [2, 8, 18, 27, 8, 2], charge: "0", feature: "Used in green phosphors and high-temperature fuel cells", type: "metal" },
    "Dy": { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", protons: 66, neutrons: 96, electrons: [2, 8, 18, 28, 8, 2], charge: "0", feature: "Used in laser materials and data storage", type: "metal" },
    "Ho": { atomicNumber: 67, name: "Holmium", symbol: "Ho", protons: 67, neutrons: 98, electrons: [2, 8, 18, 29, 8, 2], charge: "0", feature: "Used in medical lasers and colorants", type: "metal" },
    "Er": { atomicNumber: 68, name: "Erbium", symbol: "Er", protons: 68, neutrons: 99, electrons: [2, 8, 18, 30, 8, 2], charge: "0", feature: "Used in fiber optic communications and lasers", type: "metal" },
    "Tm": { atomicNumber: 69, name: "Thulium", symbol: "Tm", protons: 69, neutrons: 100, electrons: [2, 8, 18, 31, 8, 2], charge: "0", feature: "Used in portable X-ray devices", type: "metal" },
    "Yb": { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", protons: 70, neutrons: 103, electrons: [2, 8, 18, 32, 8, 2], charge: "0", feature: "Used in fiber lasers and stress gauges", type: "metal" },
    "Lu": { atomicNumber: 71, name: "Lutetium", symbol: "Lu", protons: 71, neutrons: 104, electrons: [2, 8, 18, 32, 9, 2], charge: "0", feature: "Used in medical imaging detectors", type: "metal" },
    "Hf": { atomicNumber: 72, name: "Hafnium", symbol: "Hf", protons: 72, neutrons: 106, electrons: [2, 8, 18, 32, 10, 2], charge: "0", feature: "Used in control rods for nuclear reactors", type: "metal" },
    "Ta": { atomicNumber: 73, name: "Tantalum", symbol: "Ta", protons: 73, neutrons: 108, electrons: [2, 8, 18, 32, 11, 2], charge: "0", feature: "Used in capacitors for electronics", type: "metal" },
    "W": { atomicNumber: 74, name: "Tungsten", symbol: "W", protons: 74, neutrons: 110, electrons: [2, 8, 18, 32, 12, 2], charge: "0", feature: "Highest melting point of all metals, used in filaments", type: "metal" },
    "Re": { atomicNumber: 75, name: "Rhenium", symbol: "Re", protons: 75, neutrons: 112, electrons: [2, 8, 18, 32, 13, 2], charge: "0", feature: "Used in high-temperature superalloys", type: "metal" },
    "Os": { atomicNumber: 76, name: "Osmium", symbol: "Os", protons: 76, neutrons: 114, electrons: [2, 8, 18, 32, 14, 2], charge: "0", feature: "Densest naturally occurring element, used in pen tips", type: "metal" },
    "Ir": { atomicNumber: 77, name: "Iridium", symbol: "Ir", protons: 77, neutrons: 115, electrons: [2, 8, 18, 32, 15, 2], charge: "0", feature: "Most corrosion-resistant metal, used in spark plugs", type: "metal" },
    "Pt": { atomicNumber: 78, name: "Platinum", symbol: "Pt", protons: 78, neutrons: 117, electrons: [2, 8, 18, 32, 17, 1], charge: "0", feature: "Precious metal used in jewelry and catalytic converters", type: "metal" },
    "Au": { atomicNumber: 79, name: "Gold", symbol: "Au", protons: 79, neutrons: 118, electrons: [2, 8, 18, 32, 18, 1], charge: "0", feature: "Valuable precious metal, excellent conductor", type: "metal" },
    "Hg": { atomicNumber: 80, name: "Mercury", symbol: "Hg", protons: 80, neutrons: 121, electrons: [2, 8, 18, 32, 18, 2], charge: "0", feature: "Liquid at room temp, used in thermometers (toxic)", type: "metal" },
    "Tl": { atomicNumber: 81, name: "Thallium", symbol: "Tl", protons: 81, neutrons: 123, electrons: [2, 8, 18, 32, 18, 3], charge: "0", feature: "Highly toxic, used in photoresistors and infrared optics", type: "metal" },
    "Pb": { atomicNumber: 82, name: "Lead", symbol: "Pb", protons: 82, neutrons: 125, electrons: [2, 8, 18, 32, 18, 4], charge: "0", feature: "Used in batteries, radiation shielding (toxic)", type: "metal" },
    "Bi": { atomicNumber: 83, name: "Bismuth", symbol: "Bi", protons: 83, neutrons: 126, electrons: [2, 8, 18, 32, 18, 5], charge: "0", feature: "Used in cosmetics and fire sprinklers (low toxicity)", type: "metal" },
    "Po": { atomicNumber: 84, name: "Polonium", symbol: "Po", protons: 84, neutrons: 125, electrons: [2, 8, 18, 32, 18, 6], charge: "0", feature: "Highly radioactive, used in antistatic brushes", type: "metalloid" },
    "At": { atomicNumber: 85, name: "Astatine", symbol: "At", protons: 85, neutrons: 125, electrons: [2, 8, 18, 32, 18, 7], charge: "0", feature: "Extremely rare and radioactive, potential for medicine", type: "metalloid" },
    "Rn": { atomicNumber: 86, name: "Radon", symbol: "Rn", protons: 86, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8], charge: "0", feature: "Radioactive gas, linked to lung cancer", type: "nonmetal" },
    "Fr": { atomicNumber: 87, name: "Francium", symbol: "Fr", protons: 87, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8, 1], charge: "0", feature: "Most unstable naturally occurring element", type: "metal" },
    "Ra": { atomicNumber: 88, name: "Radium", symbol: "Ra", protons: 88, neutrons: 138, electrons: [2, 8, 18, 32, 18, 8, 2], charge: "0", feature: "Highly radioactive, once used in luminous paints", type: "metal" },
    "Ac": { atomicNumber: 89, name: "Actinium", symbol: "Ac", protons: 89, neutrons: 138, electrons: [2, 8, 18, 32, 18, 9, 2], charge: "0", feature: "Highly radioactive, used as a neutron source", type: "metal" },
    "Th": { atomicNumber: 90, name: "Thorium", symbol: "Th", protons: 90, neutrons: 142, electrons: [2, 8, 18, 32, 18, 10, 2], charge: "0", feature: "Radioactive, potential nuclear fuel", type: "metal" },
    "Pa": { atomicNumber: 91, name: "Protactinium", symbol: "Pa", protons: 91, neutrons: 140, electrons: [2, 8, 18, 32, 20, 9, 2], charge: "0", feature: "Highly radioactive and toxic", type: "metal" },
    "U": { atomicNumber: 92, name: "Uranium", symbol: "U", protons: 92, neutrons: 146, electrons: [2, 8, 18, 32, 21, 9, 2], charge: "0", feature: "Used as nuclear fuel and in weapons", type: "metal" },
    "Np": { atomicNumber: 93, name: "Neptunium", symbol: "Np", protons: 93, neutrons: 144, electrons: [2, 8, 18, 32, 22, 9, 2], charge: "0", feature: "Radioactive, byproduct in nuclear reactors", type: "metal" },
    "Pu": { atomicNumber: 94, name: "Plutonium", symbol: "Pu", protons: 94, neutrons: 150, electrons: [2, 8, 18, 32, 24, 8, 2], charge: "0", feature: "Used in nuclear weapons and power", type: "metal" },
    "Am": { atomicNumber: 95, name: "Americium", symbol: "Am", protons: 95, neutrons: 148, electrons: [2, 8, 18, 32, 25, 8, 2], charge: "0", feature: "Used in smoke detectors", type: "metal" },
    "Cm": { atomicNumber: 96, name: "Curium", symbol: "Cm", protons: 96, neutrons: 151, electrons: [2, 8, 18, 32, 25, 9, 2], charge: "0", feature: "Highly radioactive, used in scientific research", type: "metal" },
    "Bk": { atomicNumber: 97, name: "Berkelium", symbol: "Bk", protons: 97, neutrons: 152, electrons: [2, 8, 18, 32, 27, 8, 2], charge: "0", feature: "Radioactive, used for research", type: "metal" },
    "Cf": { atomicNumber: 98, name: "Californium", symbol: "Cf", protons: 98, neutrons: 153, electrons: [2, 8, 18, 32, 28, 8, 2], charge: "0", feature: "Powerful neutron emitter, used in medicine and industry", type: "metal" },
    "Es": { atomicNumber: 99, name: "Einsteinium", symbol: "Es", protons: 99, neutrons: 153, electrons: [2, 8, 18, 32, 29, 8, 2], charge: "0", feature: "Highly radioactive, discovered in thermonuclear debris", type: "metal" },
    "Fm": { atomicNumber: 100, name: "Fermium", symbol: "Fm", protons: 100, neutrons: 157, electrons: [2, 8, 18, 32, 30, 8, 2], charge: "0", feature: "Highly radioactive, produced by neutron bombardment", type: "metal" },
    "Md": { atomicNumber: 101, name: "Mendelevium", symbol: "Md", protons: 101, neutrons: 157, electrons: [2, 8, 18, 32, 31, 8, 2], charge: "0", feature: "Synthetic, radioactive, used in research", type: "metal" },
    "No": { atomicNumber: 102, name: "Nobelium", symbol: "No", protons: 102, neutrons: 157, electrons: [2, 8, 18, 32, 32, 8, 2], charge: "0", feature: "Synthetic, radioactive, short half-life", type: "metal" },
    "Lr": { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", protons: 103, neutrons: 159, electrons: [2, 8, 18, 32, 32, 9, 2], charge: "0", feature: "Synthetic, radioactive, shortest half-life in series", type: "metal" },
    "Rf": { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", protons: 104, neutrons: 157, electrons: [2, 8, 18, 32, 32, 10, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Db": { atomicNumber: 105, name: "Dubnium", symbol: "Db", protons: 105, neutrons: 157, electrons: [2, 8, 18, 32, 32, 11, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Sg": { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", protons: 106, neutrons: 157, electrons: [2, 8, 18, 32, 32, 12, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Bh": { atomicNumber: 107, name: "Bohrium", symbol: "Bh", protons: 107, neutrons: 160, electrons: [2, 8, 18, 32, 32, 13, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Hs": { atomicNumber: 108, name: "Hassium", symbol: "Hs", protons: 108, neutrons: 161, electrons: [2, 8, 18, 32, 32, 14, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Mt": { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", protons: 109, neutrons: 163, electrons: [2, 8, 18, 32, 32, 15, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Ds": { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", protons: 110, neutrons: 171, electrons: [2, 8, 18, 32, 32, 16, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Rg": { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", protons: 111, neutrons: 171, electrons: [2, 8, 18, 32, 32, 17, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Cn": { atomicNumber: 112, name: "Copernicium", symbol: "Cn", protons: 112, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Nh": { atomicNumber: 113, name: "Nihonium", symbol: "Nh", protons: 113, neutrons: 170, electrons: [2, 8, 18, 32, 32, 18, 3], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Fl": { atomicNumber: 114, name: "Flerovium", symbol: "Fl", protons: 114, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 4], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Mc": { atomicNumber: 115, name: "Moscovium", symbol: "Mc", protons: 115, neutrons: 174, electrons: [2, 8, 18, 32, 32, 18, 5], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Lv": { atomicNumber: 116, name: "Livermorium", symbol: "Lv", protons: 116, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 6], charge: "0", feature: "Synthetic, highly radioactive", type: "metal" },
    "Ts": { atomicNumber: 117, name: "Tennessine", symbol: "Ts", protons: 117, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 7], charge: "0", feature: "Synthetic, highly radioactive", type: "nonmetal" },
    "Og": { atomicNumber: 118, name: "Oganesson", symbol: "Og", protons: 118, neutrons: 176, electrons: [2, 8, 18, 32, 32, 18, 8], charge: "0", feature: "Synthetic, highly radioactive, noble gas", type: "nonmetal" }
};

const elementDivs = document.querySelectorAll('.element');
const elementDetailsDiv = document.getElementById('element-details');
const closeButton = document.createElement('button');

closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;';
closeButton.addEventListener('click', () => {
    elementDetailsDiv.style.display = 'none';
});
elementDetailsDiv.appendChild(closeButton);

elementDivs.forEach(elementDiv => {
    const elementSymbol = elementDiv.id;
    const element = elementsData[elementSymbol];
    if (element) {
        elementDiv.setAttribute('data-type', element.type); // Set the data-type attribute for CSS styling
        elementDiv.addEventListener('click', () => {
            displayElementDetails(element);
        });
    } else if (elementDiv.classList.contains('lanthanoids-placeholder') || elementDiv.classList.contains('actinoids-placeholder')) {
        // Handle placeholders, they don't have detailed data but might need a click action
        elementDiv.setAttribute('data-type', 'placeholder'); // Special type for placeholders
        elementDiv.addEventListener('click', () => {
            elementDetailsDiv.style.display = 'none'; // Close any open details
            alert("Bu element grubu için detaylar henüz mevcut değil."); // Inform user
        });
    }
});

function displayElementDetails(element) {
    // Remove previous details, keeping only the close button
    while (elementDetailsDiv.children.length > 1) {
        elementDetailsDiv.removeChild(elementDetailsDiv.children[0]);
    }

    let detailsHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
        <p><strong>Proton Count:</strong> ${element.protons}</p>
        <p><strong>Neutron Count:</strong> ${element.neutrons}</p>
        <p><strong>Nuclear Charge:</strong> ${element.charge}</p>
        <p><strong>Electron Configuration:</strong> ${element.electrons.join(', ')}</p>
        ${element.feature ? `<p><strong>Feature:</strong> ${element.feature}</p>` : ''}
        <h3>Bohr Atom Model:</h3>
        <div class="bohr-model-container">
            ${drawBohrModel(element)}
        </div>
    `;

    // Insert new details before the close button
    elementDetailsDiv.insertBefore(document.createRange().createContextualFragment(detailsHTML), closeButton);
    elementDetailsDiv.style.display = 'flex';

    // Bohr modeli kapsayıcısının boyutunu ayarlayın
    const bohrContainer = elementDetailsDiv.querySelector('.bohr-model-container');
    if (bohrContainer) {
        const numberOfLayers = element.electrons.length;
        // Adjust these values if needed for better scaling
        const baseModelSize = 300; // Base size for elements with few layers
        const sizeIncrementPerLayer = 40; // Pixels to add for each additional layer
        const dynamicModelSize = baseModelSize + (Math.max(0, numberOfLayers - 1) * sizeIncrementPerLayer); // Start incrementing from 1 layer
        bohrContainer.style.width = `${dynamicModelSize}px`;
        bohrContainer.style.height = `${dynamicModelSize}px`;
    }
}

function drawBohrModel(element) {
    const numberOfLayers = element.electrons.length;

    const baseModelSize = 300;
    const sizeIncrementPerLayer = 40;
    const dynamicModelSize = baseModelSize + (Math.max(0, numberOfLayers - 1) * sizeIncrementPerLayer);

    const nucleusRadius = 25; // Smaller nucleus
    const particleRadius = 5; // Smaller particles
    const electronRadius = 6; // Smaller electrons

    const nucleusCenterX = dynamicModelSize / 2;
    const nucleusCenterY = dynamicModelSize / 2;

    let svgHTML = `<svg width="${dynamicModelSize}" height="${dynamicModelSize}" viewBox="0 0 ${dynamicModelSize} ${dynamicModelSize}">`;

    // Nucleus: Neutrons and Protons (fixed, no animation)
    // Draw protons
    for (let i = 0; i < element.protons; i++) {
        // Distribute protons in a small circle around the center
        const angle = (2 * Math.PI / element.protons) * i;
        const x = nucleusCenterX + (nucleusRadius / 2) * Math.cos(angle);
        const y = nucleusCenterY + (nucleusRadius / 2) * Math.sin(angle);
        svgHTML += `<circle cx="${x}" cy="${y}" r="${particleRadius}" fill="red"></circle>`;
    }
    // Draw neutrons
    for (let i = 0; i < element.neutrons; i++) {
        // Distribute neutrons in a slightly larger circle or intersperse
        const angle = (2 * Math.PI / element.neutrons) * i + Math.PI / element.neutrons; // Offset for interspersing
        const x = nucleusCenterX + (nucleusRadius / 2 + particleRadius) * Math.cos(angle);
        const y = nucleusCenterY + (nucleusRadius / 2 + particleRadius) * Math.sin(angle);
        svgHTML += `<circle cx="${x}" cy="${y}" r="${particleRadius}" fill="green"></circle>`;
    }
    // Ensure a central point for nucleus if few particles
    if (element.protons === 0 && element.neutrons === 0) {
        svgHTML += `<circle cx="${nucleusCenterX}" cy="${nucleusCenterY}" r="${nucleusRadius / 2}" fill="gray"></circle>`;
    }


    // Electron Layers and Electrons (with animation)
    element.electrons.forEach((electronCount, layerIndex) => {
        // Calculate orbit radius based on layer index and dynamic size
        const orbitRadius = nucleusRadius + 30 + (layerIndex * (dynamicModelSize / (numberOfLayers * 2.5))); // Adjust spacing based on total layers and model size

        // Orbit path
        svgHTML += `<circle cx="${nucleusCenterX}" cy="${nucleusCenterY}" r="${orbitRadius}" fill="none" stroke="#000000" stroke-width="1" stroke-dasharray="2 2" class="orbit-path"></circle>`;

        // Electrons in each layer
        for (let i = 0; i < electronCount; i++) {
            const angleDeg = (360 / electronCount) * i;
            const angleRad = (angleDeg * Math.PI) / 180;
            // Initial position (will be animated by CSS)
            const electronX = nucleusCenterX + orbitRadius * Math.cos(angleRad);
            const electronY = nucleusCenterY + orbitRadius * Math.sin(angleRad);

            // Speed adjustment: Outer layers typically slower
            const orbitSpeed = (3 + (layerIndex * 0.5)) + 's'; // Slower for outer layers
            svgHTML += `
                <circle
                    cx="${electronX}"
                    cy="${electronY}"
                    r="${electronRadius}"
                    fill="darkblue"
                    class="electron"
                    style="--orbit-radius: ${orbitRadius}px; --start-angle: ${angleDeg}deg; --orbit-speed: ${orbitSpeed};">
                    <title>Electron</title>
                </circle>
            `;
        }
    });
    svgHTML += `</svg>`;
    return svgHTML;
}

// Global functions for buttons
function goToPage2() {
    window.location.href = "https://chemist83.github.io/cheminformerSK4/";
}

function goToPage3() {
    window.location.href = "isotopes.html"; // Ensure isotopes.html exists or update this path
}

// Sticky ad close functionality
const closeStickyAdButtonTop = document.getElementById('close-sticky-ad-top');
const stickyAdTop = document.getElementById('sticky-ad-top');

if (closeStickyAdButtonTop && stickyAdTop) {
    closeStickyAdButtonTop.addEventListener('click', () => {
        stickyAdTop.style.display = 'none';
    });
    }

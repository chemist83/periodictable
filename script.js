// Data for all 118 elements
const elementsData = {
    "H": { atomicNumber: 1, name: "Hydrogen", symbol: "H", protons: 1, neutrons: 0, electrons: [1], charge: "0", feature: "It is lighest element in the universe" },
    "He": { atomicNumber: 2, name: "Helium", symbol: "He", protons: 2, neutrons: 2, electrons: [2], charge: "0", feature: "Used in balloons and cryogenics" },
    "Li": { atomicNumber: 3, name: "Lithium", symbol: "Li", protons: 3, neutrons: 4, electrons: [2, 1], charge: "0", feature: "It is used in batteries" },
    "Be": { atomicNumber: 4, name: "Beryllium", symbol: "Be", protons: 4, neutrons: 5, electrons: [2, 2], charge: "0", feature: "Used in alloys for strength and lightness" },
    "B": { atomicNumber: 5, name: "Boron", symbol: "B", protons: 5, neutrons: 6, electrons: [2, 3], charge: "0", feature: "Used in borosilicate glass and detergents" },
    "C": { atomicNumber: 6, name: "Carbon", symbol: "C", protons: 6, neutrons: 6, electrons: [2, 4], charge: "0", feature: "The basis of all organic life" },
    "N": { atomicNumber: 7, name: "Nitrogen", symbol: "N", protons: 7, neutrons: 7, electrons: [2, 5], charge: "0", feature: "Main component of Earth's atmosphere" },
    "O": { atomicNumber: 8, name: "Oxygen", symbol: "O", protons: 8, neutrons: 8, electrons: [2, 6], charge: "0", feature: "Essential for respiration and combustion" },
    "F": { atomicNumber: 9, name: "Fluorine", symbol: "F", protons: 9, neutrons: 10, electrons: [2, 7], charge: "0", feature: "Used in toothpaste and refrigerants" },
    "Ne": { atomicNumber: 10, name: "Neon", symbol: "Ne", protons: 10, neutrons: 10, electrons: [2, 8], charge: "0", feature: "Used in neon signs for distinct glow" },
    "Na": { atomicNumber: 11, name: "Sodium", symbol: "Na", protons: 11, neutrons: 12, electrons: [2, 8, 1], charge: "0", feature: "Component of table salt" },
    "Mg": { atomicNumber: 12, name: "Magnesium", symbol: "Mg", protons: 12, neutrons: 12, electrons: [2, 8, 2], charge: "0", feature: "Lightweight metal used in alloys and fireworks" },
    "Al": { atomicNumber: 13, name: "Aluminum", symbol: "Al", protons: 13, neutrons: 14, electrons: [2, 8, 3], charge: "0", feature: "Common lightweight metal, used in cans and aircraft" },
    "Si": { atomicNumber: 14, name: "Silicon", symbol: "Si", protons: 14, neutrons: 14, electrons: [2, 8, 4], charge: "0", feature: "Used in semiconductors and glass" },
    "P": { atomicNumber: 15, name: "Phosphorus", symbol: "P", protons: 15, neutrons: 16, electrons: [2, 8, 5], charge: "0", feature: "Vital for DNA and bone formation" },
    "S": { atomicNumber: 16, name: "Sulfur", symbol: "S", protons: 16, neutrons: 16, electrons: [2, 8, 6], charge: "0", feature: "Used in sulfuric acid production and rubber vulcanization" },
    "Cl": { atomicNumber: 17, name: "Chlorine", symbol: "Cl", protons: 17, neutrons: 18, electrons: [2, 8, 7], charge: "0", feature: "Used as a disinfectant and in PVC production" },
    "Ar": { atomicNumber: 18, name: "Argon", symbol: "Ar", protons: 18, neutrons: 22, electrons: [2, 8, 8], charge: "0", feature: "Used in incandescent and fluorescent lighting" },
    "K": { atomicNumber: 19, name: "Potassium", symbol: "K", protons: 19, neutrons: 20, electrons: [2, 8, 8, 1], charge: "0", feature: "Important electrolyte for body function" },
    "Ca": { atomicNumber: 20, name: "Calcium", symbol: "Ca", protons: 20, neutrons: 20, electrons: [2, 8, 8, 2], charge: "0", feature: "Essential for strong bones and teeth" },
    "Sc": { atomicNumber: 21, name: "Scandium", symbol: "Sc", protons: 21, neutrons: 24, electrons: [2, 8, 9, 2], charge: "0", feature: "Used in aerospace components and sports equipment" },
    "Ti": { atomicNumber: 22, name: "Titanium", symbol: "Ti", protons: 22, neutrons: 26, electrons: [2, 8, 10, 2], charge: "0", feature: "Strong, lightweight, and corrosion-resistant metal" },
    "V": { atomicNumber: 23, name: "Vanadium", symbol: "V", protons: 23, neutrons: 28, electrons: [2, 8, 11, 2], charge: "0", feature: "Used in steel alloys to increase strength" },
    "Cr": { atomicNumber: 24, name: "Chromium", symbol: "Cr", protons: 24, neutrons: 28, electrons: [2, 8, 13, 1], charge: "0", feature: "Used in stainless steel and chrome plating" }, // Exception
    "Mn": { atomicNumber: 25, name: "Manganese", symbol: "Mn", protons: 25, neutrons: 30, electrons: [2, 8, 13, 2], charge: "0", feature: "Used in steel production and batteries" },
    "Fe": { atomicNumber: 26, name: "Iron", symbol: "Fe", protons: 26, neutrons: 30, electrons: [2, 8, 14, 2], charge: "0", feature: "Main component of steel and found in hemoglobin" },
    "Co": { atomicNumber: 27, name: "Cobalt", symbol: "Co", protons: 27, neutrons: 32, electrons: [2, 8, 15, 2], charge: "0", feature: "Used in magnets, batteries, and pigments" },
    "Ni": { atomicNumber: 28, name: "Nickel", symbol: "Ni", protons: 28, neutrons: 31, electrons: [2, 8, 16, 2], charge: "0", feature: "Used in coins, alloys, and batteries" },
    "Cu": { atomicNumber: 29, name: "Copper", symbol: "Cu", protons: 29, neutrons: 35, electrons: [2, 8, 18, 1], charge: "0", feature: "Excellent electrical conductor, used in wiring and plumbing" }, // Exception
    "Zn": { atomicNumber: 30, name: "Zinc", symbol: "Zn", protons: 30, neutrons: 35, electrons: [2, 8, 18, 2], charge: "0", feature: "Used in galvanizing steel and in brass" },
    "Ga": { atomicNumber: 31, name: "Gallium", symbol: "Ga", protons: 31, neutrons: 39, electrons: [2, 8, 18, 3], charge: "0", feature: "Melts near room temperature, used in semiconductors" },
    "Ge": { atomicNumber: 32, name: "Germanium", symbol: "Ge", protons: 32, neutrons: 41, electrons: [2, 8, 18, 4], charge: "0", feature: "Used in semiconductors and fiber optics" },
    "As": { atomicNumber: 33, name: "Arsenic", symbol: "As", protons: 33, neutrons: 42, electrons: [2, 8, 18, 5], charge: "0", feature: "Highly toxic, used in some pesticides and semiconductors" },
    "Se": { atomicNumber: 34, name: "Selenium", symbol: "Se", protons: 34, neutrons: 45, electrons: [2, 8, 18, 6], charge: "0", feature: "Used in photocells and toners" },
    "Br": { atomicNumber: 35, name: "Bromine", symbol: "Br", protons: 35, neutrons: 45, electrons: [2, 8, 18, 7], charge: "0", feature: "Liquid at room temperature, used in flame retardants" },
    "Kr": { atomicNumber: 36, name: "Krypton", symbol: "Kr", protons: 36, neutrons: 48, electrons: [2, 8, 18, 8], charge: "0", feature: "Used in flash lamps and lasers" },
    "Rb": { atomicNumber: 37, name: "Rubidium", symbol: "Rb", protons: 37, neutrons: 48, electrons: [2, 8, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks" },
    "Sr": { atomicNumber: 38, name: "Strontium", symbol: "Sr", protons: 38, neutrons: 50, electrons: [2, 8, 18, 8, 2], charge: "0", feature: "Used in fireworks for red color" },
    "Y": { atomicNumber: 39, name: "Yttrium", symbol: "Y", protons: 39, neutrons: 50, electrons: [2, 8, 18, 9, 2], charge: "0", feature: "Used in display phosphors and lasers" },
    "Zr": { atomicNumber: 40, name: "Zirconium", symbol: "Zr", protons: 40, neutrons: 51, electrons: [2, 8, 18, 10, 2], charge: "0", feature: "Used in nuclear reactors and ceramics" },
    "Nb": { atomicNumber: 41, name: "Niobium", symbol: "Nb", protons: 41, neutrons: 52, electrons: [2, 8, 18, 12, 1], charge: "0", feature: "Used in superconductors and jet engines" }, // Exception
    "Mo": { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", protons: 42, neutrons: 54, electrons: [2, 8, 18, 13, 1], charge: "0", feature: "Used in high-strength steel alloys" }, // Exception
    "Tc": { atomicNumber: 43, name: "Technetium", symbol: "Tc", protons: 43, neutrons: 55, electrons: [2, 8, 18, 13, 2], charge: "0", feature: "Radioactive, used in medical diagnostic imaging" },
    "Ru": { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", protons: 44, neutrons: 57, electrons: [2, 8, 18, 15, 1], charge: "0", feature: "Used in electrical contacts and catalysts" }, // Exception
    "Rh": { atomicNumber: 45, name: "Rhodium", symbol: "Rh", protons: 45, neutrons: 58, electrons: [2, 8, 18, 16, 1], charge: "0", feature: "Used in catalytic converters and jewelry" }, // Exception
    "Pd": { atomicNumber: 46, name: "Palladium", symbol: "Pd", protons: 46, neutrons: 60, electrons: [2, 8, 18, 18, 0], charge: "0", feature: "Used in catalytic converters and dentistry" }, // Exception
    "Ag": { atomicNumber: 47, name: "Silver", symbol: "Ag", protons: 47, neutrons: 61, electrons: [2, 8, 18, 18, 1], charge: "0", feature: "Used in jewelry, coinage, and photography" }, // Exception
    "Cd": { atomicNumber: 48, name: "Cadmium", symbol: "Cd", protons: 48, neutrons: 64, electrons: [2, 8, 18, 18, 2], charge: "0", feature: "Used in batteries and pigments (toxic)" },
    "In": { atomicNumber: 49, name: "Indium", symbol: "In", protons: 49, neutrons: 66, electrons: [2, 8, 18, 18, 3], charge: "0", feature: "Used in touchscreens and low-melting alloys" },
    "Sn": { atomicNumber: 50, name: "Tin", symbol: "Sn", protons: 50, neutrons: 69, electrons: [2, 8, 18, 18, 4], charge: "0", feature: "Used in solders and protective coatings" },
    "Sb": { atomicNumber: 51, name: "Antimony", symbol: "Sb", protons: 51, neutrons: 71, electrons: [2, 8, 18, 18, 5], charge: "0", feature: "Used in fire retardants and semiconductors" },
    "Te": { atomicNumber: 52, name: "Tellurium", symbol: "Te", protons: 52, neutrons: 76, electrons: [2, 8, 18, 18, 6], charge: "0", feature: "Used in solar cells and thermal electric devices" },
    "I": { atomicNumber: 53, name: "Iodine", symbol: "I", protons: 53, neutrons: 74, electrons: [2, 8, 18, 18, 7], charge: "0", feature: "Antiseptic, essential for thyroid function" },
    "Xe": { atomicNumber: 54, name: "Xenon", symbol: "Xe", protons: 54, neutrons: 77, electrons: [2, 8, 18, 18, 8], charge: "0", feature: "Used in headlights and projection lamps" },
    "Cs": { atomicNumber: 55, name: "Cesium", symbol: "Cs", protons: 55, neutrons: 78, electrons: [2, 8, 18, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks and drilling fluids" },
    "Ba": { atomicNumber: 56, name: "Barium", symbol: "Ba", protons: 56, neutrons: 81, electrons: [2, 8, 18, 18, 8, 2], charge: "0", feature: "Used in diagnostic imaging (barium meals)" },
    "La": { atomicNumber: 57, name: "Lanthanum", symbol: "La", protons: 57, neutrons: 82, electrons: [2, 8, 18, 18, 9, 2], charge: "0", feature: "Used in camera lenses and lighter flints" },
    "Ce": { atomicNumber: 58, name: "Cerium", symbol: "Ce", protons: 58, neutrons: 82, electrons: [2, 8, 18, 19, 9, 2], charge: "0", feature: "Used in self-cleaning ovens and catalytic converters" },
    "Pr": { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", protons: 59, neutrons: 82, electrons: [2, 8, 18, 21, 8, 2], charge: "0", feature: "Used in magnets and yellow glass" },
    "Nd": { atomicNumber: 60, name: "Neodymium", symbol: "Nd", protons: 60, neutrons: 84, electrons: [2, 8, 18, 22, 8, 2], charge: "0", feature: "Used in powerful magnets (NdFeB)" },
    "Pm": { atomicNumber: 61, name: "Promethium", symbol: "Pm", protons: 61, neutrons: 84, electrons: [2, 8, 18, 23, 8, 2], charge: "0", feature: "Radioactive, used in luminous paints" },
    "Sm": { atomicNumber: 62, name: "Samarium", symbol: "Sm", protons: 62, neutrons: 88, electrons: [2, 8, 18, 24, 8, 2], charge: "0", feature: "Used in permanent magnets and control rods" },
    "Eu": { atomicNumber: 63, name: "Europium", symbol: "Eu", protons: 63, neutrons: 89, electrons: [2, 8, 18, 25, 8, 2], charge: "0", feature: "Used in red phosphors for TVs" },
    "Gd": { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", protons: 64, neutrons: 93, electrons: [2, 8, 18, 25, 9, 2], charge: "0", feature: "Used in MRI contrast agents and neutron shielding" },
    "Tb": { atomicNumber: 65, name: "Terbium", symbol: "Tb", protons: 65, neutrons: 94, electrons: [2, 8, 18, 27, 8, 2], charge: "0", feature: "Used in green phosphors and high-temperature fuel cells" },
    "Dy": { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", protons: 66, neutrons: 96, electrons: [2, 8, 18, 28, 8, 2], charge: "0", feature: "Used in laser materials and data storage" },
    "Ho": { atomicNumber: 67, name: "Holmium", symbol: "Ho", protons: 67, neutrons: 98, electrons: [2, 8, 18, 29, 8, 2], charge: "0", feature: "Used in medical lasers and colorants" },
    "Er": { atomicNumber: 68, name: "Erbium", symbol: "Er", protons: 68, neutrons: 99, electrons: [2, 8, 18, 30, 8, 2], charge: "0", feature: "Used in fiber optic communications and lasers" },
    "Tm": { atomicNumber: 69, name: "Thulium", symbol: "Tm", protons: 69, neutrons: 100, electrons: [2, 8, 18, 31, 8, 2], charge: "0", feature: "Used in portable X-ray devices" },
    "Yb": { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", protons: 70, neutrons: 103, electrons: [2, 8, 18, 32, 8, 2], charge: "0", feature: "Used in fiber lasers and stress gauges" },
    "Lu": { atomicNumber: 71, name: "Lutetium", symbol: "Lu", protons: 71, neutrons: 104, electrons: [2, 8, 18, 32, 9, 2], charge: "0", feature: "Used in medical imaging detectors" },
    "Hf": { atomicNumber: 72, name: "Hafnium", symbol: "Hf", protons: 72, neutrons: 106, electrons: [2, 8, 18, 32, 10, 2], charge: "0", feature: "Used in control rods for nuclear reactors" },
    "Ta": { atomicNumber: 73, name: "Tantalum", symbol: "Ta", protons: 73, neutrons: 108, electrons: [2, 8, 18, 32, 11, 2], charge: "0", feature: "Used in capacitors for electronics" },
    "W": { atomicNumber: 74, name: "Tungsten", symbol: "W", protons: 74, neutrons: 110, electrons: [2, 8, 18, 32, 12, 2], charge: "0", feature: "Highest melting point of all metals, used in filaments" },
    "Re": { atomicNumber: 75, name: "Rhenium", symbol: "Re", protons: 75, neutrons: 112, electrons: [2, 8, 18, 32, 13, 2], charge: "0", feature: "Used in high-temperature superalloys" },
    "Os": { atomicNumber: 76, name: "Osmium", symbol: "Os", protons: 76, neutrons: 114, electrons: [2, 8, 18, 32, 14, 2], charge: "0", feature: "Densest naturally occurring element, used in pen tips" },
    "Ir": { atomicNumber: 77, name: "Iridium", symbol: "Ir", protons: 77, neutrons: 115, electrons: [2, 8, 18, 32, 15, 2], charge: "0", feature: "Most corrosion-resistant metal, used in spark plugs" },
    "Pt": { atomicNumber: 78, name: "Platinum", symbol: "Pt", protons: 78, neutrons: 117, electrons: [2, 8, 18, 32, 17, 1], charge: "0", feature: "Precious metal used in jewelry and catalytic converters" }, // Exception
    "Au": { atomicNumber: 79, name: "Gold", symbol: "Au", protons: 79, neutrons: 118, electrons: [2, 8, 18, 32, 18, 1], charge: "0", feature: "Valuable precious metal, excellent conductor" }, // Exception
    "Hg": { atomicNumber: 80, name: "Mercury", symbol: "Hg", protons: 80, neutrons: 121, electrons: [2, 8, 18, 32, 18, 2], charge: "0", feature: "Liquid at room temp, used in thermometers (toxic)" },
    "Tl": { atomicNumber: 81, name: "Thallium", symbol: "Tl", protons: 81, neutrons: 123, electrons: [2, 8, 18, 32, 18, 3], charge: "0", feature: "Highly toxic, used in photoresistors and infrared optics" },
    "Pb": { atomicNumber: 82, name: "Lead", symbol: "Pb", protons: 82, neutrons: 125, electrons: [2, 8, 18, 32, 18, 4], charge: "0", feature: "Used in batteries, radiation shielding (toxic)" },
    "Bi": { atomicNumber: 83, name: "Bismuth", symbol: "Bi", protons: 83, neutrons: 126, electrons: [2, 8, 18, 32, 18, 5], charge: "0", feature: "Used in cosmetics and fire sprinklers (low toxicity)" },
    "Po": { atomicNumber: 84, name: "Polonium", symbol: "Po", protons: 84, neutrons: 125, electrons: [2, 8, 18, 32, 18, 6], charge: "0", feature: "Highly radioactive, used in antistatic brushes" },
    "At": { atomicNumber: 85, name: "Astatine", symbol: "At", protons: 85, neutrons: 125, electrons: [2, 8, 18, 32, 18, 7], charge: "0", feature: "Extremely rare and radioactive, potential for medicine" },
    "Rn": { atomicNumber: 86, name: "Radon", symbol: "Rn", protons: 86, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8], charge: "0", feature: "Radioactive gas, linked to lung cancer" },
    "Fr": { atomicNumber: 87, name: "Francium", symbol: "Fr", protons: 87, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8, 1], charge: "0", feature: "Most unstable naturally occurring element" },
    "Ra": { atomicNumber: 88, name: "Radium", symbol: "Ra", protons: 88, neutrons: 138, electrons: [2, 8, 18, 32, 18, 8, 2], charge: "0", feature: "Highly radioactive, once used in luminous paints" },
    "Ac": { atomicNumber: 89, name: "Actinium", symbol: "Ac", protons: 89, neutrons: 138, electrons: [2, 8, 18, 32, 18, 9, 2], charge: "0", feature: "Highly radioactive, used as a neutron source" },
    "Th": { atomicNumber: 90, name: "Thorium", symbol: "Th", protons: 90, neutrons: 142, electrons: [2, 8, 18, 32, 18, 10, 2], charge: "0", feature: "Radioactive, potential nuclear fuel" },
    "Pa": { atomicNumber: 91, name: "Protactinium", symbol: "Pa", protons: 91, neutrons: 140, electrons: [2, 8, 18, 32, 20, 9, 2], charge: "0", feature: "Highly radioactive and toxic" },
    "U": { atomicNumber: 92, name: "Uranium", symbol: "U", protons: 92, neutrons: 146, electrons: [2, 8, 18, 32, 21, 9, 2], charge: "0", feature: "Used as nuclear fuel and in weapons" },
    "Np": { atomicNumber: 93, name: "Neptunium", symbol: "Np", protons: 93, neutrons: 144, electrons: [2, 8, 18, 32, 22, 9, 2], charge: "0", feature: "Radioactive, byproduct in nuclear reactors" },
    "Pu": { atomicNumber: 94, name: "Plutonium", symbol: "Pu", protons: 94, neutrons: 150, electrons: [2, 8, 18, 32, 24, 8, 2], charge: "0", feature: "Used in nuclear weapons and power" },
    "Am": { atomicNumber: 95, name: "Americium", symbol: "Am", protons: 95, neutrons: 148, electrons: [2, 8, 18, 32, 25, 8, 2], charge: "0", feature: "Used in smoke detectors" },
    "Cm": { atomicNumber: 96, name: "Curium", symbol: "Cm", protons: 96, neutrons: 151, electrons: [2, 8, 18, 32, 25, 9, 2], charge: "0", feature: "Highly radioactive, used in scientific research" },
    "Bk": { atomicNumber: 97, name: "Berkelium", symbol: "Bk", protons: 97, neutrons: 152, electrons: [2, 8, 18, 32, 27, 8, 2], charge: "0", feature: "Radioactive, used for research" },
    "Cf": { atomicNumber: 98, name: "Californium", symbol: "Cf", protons: 98, neutrons: 153, electrons: [2, 8, 18, 32, 28, 8, 2], charge: "0", feature: "Powerful neutron emitter, used in medicine and industry" },
    "Es": { atomicNumber: 99, name: "Einsteinium", symbol: "Es", protons: 99, neutrons: 153, electrons: [2, 8, 18, 32, 29, 8, 2], charge: "0", feature: "Highly radioactive, discovered in thermonuclear debris" },
    "Fm": { atomicNumber: 100, name: "Fermium", symbol: "Fm", protons: 100, neutrons: 157, electrons: [2, 8, 18, 32, 30, 8, 2], charge: "0", feature: "Highly radioactive, produced by neutron bombardment" },
    "Md": { atomicNumber: 101, name: "Mendelevium", symbol: "Md", protons: 101, neutrons: 157, electrons: [2, 8, 18, 32, 31, 8, 2], charge: "0", feature: "Synthetic, radioactive, used in research" },
    "No": { atomicNumber: 102, name: "Nobelium", symbol: "No", protons: 102, neutrons: 157, electrons: [2, 8, 18, 32, 32, 8, 2], charge: "0", feature: "Synthetic, radioactive, short half-life" },
    "Lr": { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", protons: 103, neutrons: 159, electrons: [2, 8, 18, 32, 32, 9, 2], charge: "0", feature: "Synthetic, radioactive, shortest half-life in series" },
    "Rf": { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", protons: 104, neutrons: 157, electrons: [2, 8, 18, 32, 32, 10, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Db": { atomicNumber: 105, name: "Dubnium", symbol: "Db", protons: 105, neutrons: 157, electrons: [2, 8, 18, 32, 32, 11, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Sg": { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", protons: 106, neutrons: 157, electrons: [2, 8, 18, 32, 32, 12, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Bh": { atomicNumber: 107, name: "Bohrium", symbol: "Bh", protons: 107, neutrons: 160, electrons: [2, 8, 18, 32, 32, 13, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Hs": { atomicNumber: 108, name: "Hassium", symbol: "Hs", protons: 108, neutrons: 161, electrons: [2, 8, 18, 32, 32, 14, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Mt": { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", protons: 109, neutrons: 163, electrons: [2, 8, 18, 32, 32, 15, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Ds": { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", protons: 110, neutrons: 171, electrons: [2, 8, 18, 32, 32, 16, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Rg": { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", protons: 111, neutrons: 171, electrons: [2, 8, 18, 32, 32, 17, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Cn": { atomicNumber: 112, name: "Copernicium", symbol: "Cn", protons: 112, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 2], charge: "0", feature: "Synthetic, highly radioactive" },
    "Nh": { atomicNumber: 113, name: "Nihonium", symbol: "Nh", protons: 113, neutrons: 170, electrons: [2, 8, 18, 32, 32, 18, 3], charge: "0", feature: "Synthetic, highly radioactive" },
    "Fl": { atomicNumber: 114, name: "Flerovium", symbol: "Fl", protons: 114, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 4], charge: "0", feature: "Synthetic, highly radioactive" },
    "Mc": { atomicNumber: 115, name: "Moscovium", symbol: "Mc", protons: 115, neutrons: 174, electrons: [2, 8, 18, 32, 32, 18, 5], charge: "0", feature: "Synthetic, highly radioactive" },
    "Lv": { atomicNumber: 116, name: "Livermorium", symbol: "Lv", protons: 116, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 6], charge: "0", feature: "Synthetic, highly radioactive" },
    "Ts": { atomicNumber: 117, name: "Tennessine", symbol: "Ts", protons: 117, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 7], charge: "0", feature: "Synthetic, highly radioactive" },
    "Og": { atomicNumber: 118, name: "Oganesson", symbol: "Og", protons: 118, neutrons: 176, electrons: [2, 8, 18, 32, 32, 18, 8], charge: "0", feature: "Synthetic, highly radioactive, noble gas" }
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
    elementDiv.addEventListener('click', () => {
        const elementSymbol = elementDiv.id;
        const element = elementsData[elementSymbol];
        if (element) {
            displayElementDetails(element);
        } else {
            elementDetailsDiv.style.display = 'none';
            alert(`Sorry, details for ${elementSymbol} are not yet added.`);
        }
    });
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
        const baseModelSize = 350;
        const sizeIncrementPerLayer = 50; 
        // 3'ten sonraki her katman için artış yap (2 katmanlı Li ve Be için de 350px kalsın)
        const dynamicModelSize = baseModelSize + (Math.max(0, numberOfLayers - 2) * sizeIncrementPerLayer); 
        bohrContainer.style.width = `${dynamicModelSize}px`;
        bohrContainer.style.height = `${dynamicModelSize}px`;
    }
}

function drawBohrModel(element) {
    const numberOfLayers = element.electrons.length;
    
    // Calculate dynamic model size based on number of layers
    const baseModelSize = 350; // Base size for elements with few layers
    const sizeIncrementPerLayer = 50; // Pixels to add for each additional layer
    // Start increasing size after 2 layers (Li, Be, etc. still fit in 350px)
    const dynamicModelSize = baseModelSize + (Math.max(0, numberOfLayers - 2) * sizeIncrementPerLayer); 

    // Adjust layer spacing dynamically
    const baseLayerSpacing = 30; // Initial spacing for first few layers
    const spacingDecrementPerLayer = 2; // Reduce spacing for each additional layer
    // Ensure spacing doesn't go below a reasonable minimum (e.g., 10px)
    const dynamicLayerSpacing = Math.max(10, baseLayerSpacing - (Math.max(0, numberOfLayers - 1) * spacingDecrementPerLayer)); 

    const nucleusRadius = 30;
    const particleRadius = 6;
    const electronRadius = 7;
    
    const nucleusCenterX = dynamicModelSize / 2;
    const nucleusCenterY = dynamicModelSize / 2;
    
    let svgHTML = `<svg width="${dynamicModelSize}" height="${dynamicModelSize}" viewBox="0 0 ${dynamicModelSize} ${dynamicModelSize}">`;

    // Nucleus: Neutrons and Protons (randomized slightly for better visual spread)
    const minParticleDistance = particleRadius * 0.8;
    for (let i = 0; i < element.protons; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = minParticleDistance + Math.random() * (nucleusRadius - minParticleDistance - particleRadius); 
        const x = nucleusCenterX + radius * Math.cos(angle);
        const y = nucleusCenterY + radius * Math.sin(angle);
        svgHTML += `<circle cx="${x}" cy="${y}" r="${particleRadius}" fill="red" class="proton"></circle>`;
    }
    for (let i = 0; i < element.neutrons; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = minParticleDistance + Math.random() * (nucleusRadius - minParticleDistance - particleRadius); 
        const x = nucleusCenterX + radius * Math.cos(angle);
        const y = nucleusCenterY + radius * Math.sin(angle);
        svgHTML += `<circle cx="${x}" cy="${y}" r="${particleRadius}" fill="green" class="neutron"></circle>`;
    }

    // Electron Layers and Electrons
    element.electrons.forEach((electronCount, layerIndex) => {
        const orbitRadius = nucleusRadius + (layerIndex + 1) * dynamicLayerSpacing;
        
        // Orbit path
        svgHTML += `<circle cx="${nucleusCenterX}" cy="${nucleusCenterY}" r="${orbitRadius}" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="2 2" class="orbit-path"></circle>`;
        
        // Electrons in each layer
        for (let i = 0; i < electronCount; i++) {
            const angleDeg = (360 / electronCount) * i;
            const angleRad = (angleDeg * Math.PI) / 180;
            const electronX = nucleusCenterX + orbitRadius * Math.cos(angleRad);
            const electronY = nucleusCenterY + orbitRadius * Math.sin(angleRad);
            
            // Speed adjustment: Inner layers typically faster, outer layers slower
            const orbitSpeed = (3 - (layerIndex * 0.2)) + 's'; 
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

function goToPage2() {
    window.location.href = "https://chemist83.github.io/cheminformerSK4/"; 
          }

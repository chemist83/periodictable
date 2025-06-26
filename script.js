document.addEventListener('DOMContentLoaded', () => {
    // Data for all 118 elements including their type
    const elementsData = {
        "H": { atomicNumber: 1, name: "Hydrogen", symbol: "H", protons: 1, neutrons: 0, electrons: [1], charge: "0", feature: "It is lighest element in the universe", type: "nonmetal" }, // Nonmetal
        "He": { atomicNumber: 2, name: "Helium", symbol: "He", protons: 2, neutrons: 2, electrons: [2], charge: "0", feature: "Used in balloons and cryogenics", type: "noble-gas" }, // Noble Gas (Ametal alt kategorisi)
        "Li": { atomicNumber: 3, name: "Lithium", symbol: "Li", protons: 3, neutrons: 4, electrons: [2, 1], charge: "0", feature: "It is used in batteries", type: "alkali-metal" }, // Alkali Metal
        "Be": { atomicNumber: 4, name: "Beryllium", symbol: "Be", protons: 4, neutrons: 5, electrons: [2, 2], charge: "0", feature: "Used in alloys for strength and lightness", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "B": { atomicNumber: 5, name: "Boron", symbol: "B", protons: 5, neutrons: 6, electrons: [2, 3], charge: "0", feature: "Used in borosilicate glass and detergents", type: "metalloid" }, // Metalloid (Yarı Metal)
        "C": { atomicNumber: 6, name: "Carbon", symbol: "C", protons: 6, neutrons: 6, electrons: [2, 4], charge: "0", feature: "The basis of all organic life", type: "nonmetal" }, // Nonmetal
        "N": { atomicNumber: 7, name: "Nitrogen", symbol: "N", protons: 7, neutrons: 7, electrons: [2, 5], charge: "0", feature: "Main component of Earth's atmosphere", type: "nonmetal" }, // Nonmetal
        "O": { atomicNumber: 8, name: "Oxygen", symbol: "O", protons: 8, neutrons: 8, electrons: [2, 6], charge: "0", feature: "Essential for respiration and combustion", type: "nonmetal" }, // Nonmetal
        "F": { atomicNumber: 9, name: "Fluorine", symbol: "F", protons: 9, neutrons: 10, electrons: [2, 7], charge: "0", feature: "Used in toothpaste and refrigerants", type: "halogen" }, // Halogen (Ametal alt kategorisi)
        "Ne": { atomicNumber: 10, name: "Neon", symbol: "Ne", protons: 10, neutrons: 10, electrons: [2, 8], charge: "0", feature: "Used in neon signs for distinct glow", type: "noble-gas" }, // Noble Gas
        "Na": { atomicNumber: 11, name: "Sodium", symbol: "Na", protons: 11, neutrons: 12, electrons: [2, 8, 1], charge: "0", feature: "Component of table salt", type: "alkali-metal" }, // Alkali Metal
        "Mg": { atomicNumber: 12, name: "Magnesium", symbol: "Mg", protons: 12, neutrons: 12, electrons: [2, 8, 2], charge: "0", feature: "Lightweight metal used in alloys and fireworks", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "Al": { atomicNumber: 13, name: "Aluminum", symbol: "Al", protons: 13, neutrons: 14, electrons: [2, 8, 3], charge: "0", feature: "Common lightweight metal, used in cans and aircraft", type: "post-transition-metal" }, // Post-transition Metal
        "Si": { atomicNumber: 14, name: "Silicon", symbol: "Si", protons: 14, neutrons: 14, electrons: [2, 8, 4], charge: "0", feature: "Used in semiconductors and glass", type: "metalloid" }, // Metalloid
        "P": { atomicNumber: 15, name: "Phosphorus", symbol: "P", protons: 15, neutrons: 16, electrons: [2, 8, 5], charge: "0", feature: "Vital for DNA and bone formation", type: "nonmetal" }, // Nonmetal
        "S": { atomicNumber: 16, name: "Sulfur", symbol: "S", protons: 16, neutrons: 16, electrons: [2, 8, 6], charge: "0", feature: "Used in sulfuric acid production and rubber vulcanization", type: "nonmetal" }, // Nonmetal
        "Cl": { atomicNumber: 17, name: "Chlorine", symbol: "Cl", protons: 17, neutrons: 18, electrons: [2, 8, 7], charge: "0", feature: "Used as a disinfectant and in PVC production", type: "halogen" }, // Halogen
        "Ar": { atomicNumber: 18, name: "Argon", symbol: "Ar", protons: 18, neutrons: 22, electrons: [2, 8, 8], charge: "0", feature: "Used in incandescent and fluorescent lighting", type: "noble-gas" }, // Noble Gas
        "K": { atomicNumber: 19, name: "Potassium", symbol: "K", protons: 19, neutrons: 20, electrons: [2, 8, 8, 1], charge: "0", feature: "Important electrolyte for body function", type: "alkali-metal" }, // Alkali Metal
        "Ca": { atomicNumber: 20, name: "Calcium", symbol: "Ca", protons: 20, neutrons: 20, electrons: [2, 8, 8, 2], charge: "0", feature: "Essential for strong bones and teeth", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "Sc": { atomicNumber: 21, name: "Scandium", symbol: "Sc", protons: 21, neutrons: 24, electrons: [2, 8, 9, 2], charge: "0", feature: "Used in aerospace components and sports equipment", type: "transition-metal" }, // Transition Metal
        "Ti": { atomicNumber: 22, name: "Titanium", symbol: "Ti", protons: 22, neutrons: 26, electrons: [2, 8, 10, 2], charge: "0", feature: "Strong, lightweight, and corrosion-resistant metal", type: "transition-metal" }, // Transition Metal
        "V": { atomicNumber: 23, name: "Vanadium", symbol: "V", protons: 23, neutrons: 28, electrons: [2, 8, 11, 2], charge: "0", feature: "Used in steel alloys to increase strength", type: "transition-metal" }, // Transition Metal
        "Cr": { atomicNumber: 24, name: "Chromium", symbol: "Cr", protons: 24, neutrons: 28, electrons: [2, 8, 13, 1], charge: "0", feature: "Used in stainless steel and chrome plating", type: "transition-metal" }, // Transition Metal
        "Mn": { atomicNumber: 25, name: "Manganese", symbol: "Mn", protons: 25, neutrons: 30, electrons: [2, 8, 13, 2], charge: "0", feature: "Used in steel production and batteries", type: "transition-metal" }, // Transition Metal
        "Fe": { atomicNumber: 26, name: "Iron", symbol: "Fe", protons: 26, neutrons: 30, electrons: [2, 8, 14, 2], charge: "0", feature: "Main component of steel and found in hemoglobin", type: "transition-metal" }, // Transition Metal
        "Co": { atomicNumber: 27, name: "Cobalt", symbol: "Co", protons: 27, neutrons: 32, electrons: [2, 8, 15, 2], charge: "0", feature: "Used in magnets, batteries, and pigments", type: "transition-metal" }, // Transition Metal
        "Ni": { atomicNumber: 28, name: "Nickel", symbol: "Ni", protons: 28, neutrons: 31, electrons: [2, 8, 16, 2], charge: "0", feature: "Used in coins, alloys, and batteries", type: "transition-metal" }, // Transition Metal
        "Cu": { atomicNumber: 29, name: "Copper", symbol: "Cu", protons: 29, neutrons: 35, electrons: [2, 8, 18, 1], charge: "0", feature: "Excellent electrical conductor, used in wiring and plumbing", type: "transition-metal" }, // Transition Metal
        "Zn": { atomicNumber: 30, name: "Zinc", symbol: "Zn", protons: 30, neutrons: 35, electrons: [2, 8, 18, 2], charge: "0", feature: "Used in galvanizing steel and in brass", type: "transition-metal" }, // Transition Metal
        "Ga": { atomicNumber: 31, name: "Gallium", symbol: "Ga", protons: 31, neutrons: 39, electrons: [2, 8, 18, 3], charge: "0", feature: "Melts near room temperature, used in semiconductors", type: "post-transition-metal" }, // Post-transition Metal
        "Ge": { atomicNumber: 32, name: "Germanium", symbol: "Ge", protons: 32, neutrons: 41, electrons: [2, 8, 18, 4], charge: "0", feature: "Used in semiconductors and fiber optics", type: "metalloid" }, // Metalloid
        "As": { atomicNumber: 33, name: "Arsenic", symbol: "As", protons: 33, neutrons: 42, electrons: [2, 8, 18, 5], charge: "0", feature: "Highly toxic, used in some pesticides and semiconductors", type: "metalloid" }, // Metalloid
        "Se": { atomicNumber: 34, name: "Selenium", symbol: "Se", protons: 34, neutrons: 45, electrons: [2, 8, 18, 6], charge: "0", feature: "Used in photocells and toners", type: "nonmetal" }, // Nonmetal
        "Br": { atomicNumber: 35, name: "Bromine", symbol: "Br", protons: 35, neutrons: 45, electrons: [2, 8, 18, 7], charge: "0", feature: "Liquid at room temperature, used in flame retardants", type: "halogen" }, // Halogen
        "Kr": { atomicNumber: 36, name: "Krypton", symbol: "Kr", protons: 36, neutrons: 48, electrons: [2, 8, 18, 8], charge: "0", feature: "Used in flash lamps and lasers", type: "noble-gas" }, // Noble Gas
        "Rb": { atomicNumber: 37, name: "Rubidium", symbol: "Rb", protons: 37, neutrons: 48, electrons: [2, 8, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks", type: "alkali-metal" }, // Alkali Metal
        "Sr": { atomicNumber: 38, name: "Strontium", symbol: "Sr", protons: 38, neutrons: 50, electrons: [2, 8, 18, 8, 2], charge: "0", feature: "Used in fireworks for red color", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "Y": { atomicNumber: 39, name: "Yttrium", symbol: "Y", protons: 39, neutrons: 50, electrons: [2, 8, 18, 9, 2], charge: "0", feature: "Used in display phosphors and lasers", type: "transition-metal" }, // Transition Metal
        "Zr": { atomicNumber: 40, name: "Zirconium", symbol: "Zr", protons: 40, neutrons: 51, electrons: [2, 8, 18, 10, 2], charge: "0", feature: "Used in nuclear reactors and ceramics", type: "transition-metal" }, // Transition Metal
        "Nb": { atomicNumber: 41, name: "Niobium", symbol: "Nb", protons: 41, neutrons: 52, electrons: [2, 8, 18, 12, 1], charge: "0", feature: "Used in superconductors and jet engines", type: "transition-metal" }, // Transition Metal
        "Mo": { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", protons: 42, neutrons: 54, electrons: [2, 8, 18, 13, 1], charge: "0", feature: "Used in high-strength steel alloys", type: "transition-metal" }, // Transition Metal
        "Tc": { atomicNumber: 43, name: "Technetium", symbol: "Tc", protons: 43, neutrons: 55, electrons: [2, 8, 18, 13, 2], charge: "0", feature: "Radioactive, used in medical diagnostic imaging", type: "transition-metal" }, // Transition Metal
        "Ru": { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", protons: 44, neutrons: 57, electrons: [2, 8, 18, 15, 1], charge: "0", feature: "Used in electrical contacts and catalysts", type: "transition-metal" }, // Transition Metal
        "Rh": { atomicNumber: 45, name: "Rhodium", symbol: "Rh", protons: 45, neutrons: 58, electrons: [2, 8, 18, 16, 1], charge: "0", feature: "Used in catalytic converters and jewelry", type: "transition-metal" }, // Transition Metal
        "Pd": { atomicNumber: 46, name: "Palladium", symbol: "Pd", protons: 46, neutrons: 60, electrons: [2, 8, 18, 18, 0], charge: "0", feature: "Used in catalytic converters and dentistry", type: "transition-metal" }, // Transition Metal
        "Ag": { atomicNumber: 47, name: "Silver", symbol: "Ag", protons: 47, neutrons: 61, electrons: [2, 8, 18, 18, 1], charge: "0", feature: "Used in jewelry, coinage, and photography", type: "transition-metal" }, // Transition Metal
        "Cd": { atomicNumber: 48, name: "Cadmium", symbol: "Cd", protons: 48, neutrons: 64, electrons: [2, 8, 18, 18, 2], charge: "0", feature: "Used in batteries and pigments (toxic)", type: "transition-metal" }, // Transition Metal
        "In": { atomicNumber: 49, name: "Indium", symbol: "In", protons: 49, neutrons: 66, electrons: [2, 8, 18, 18, 3], charge: "0", feature: "Used in touchscreens and low-melting alloys", type: "post-transition-metal" }, // Post-transition Metal
        "Sn": { atomicNumber: 50, name: "Tin", symbol: "Sn", protons: 50, neutrons: 69, electrons: [2, 8, 18, 18, 4], charge: "0", feature: "Used in solders and protective coatings", type: "post-transition-metal" }, // Post-transition Metal
        "Sb": { atomicNumber: 51, name: "Antimony", symbol: "Sb", protons: 51, neutrons: 71, electrons: [2, 8, 18, 18, 5], charge: "0", feature: "Used in fire retardants and semiconductors", type: "metalloid" }, // Metalloid
        "Te": { atomicNumber: 52, name: "Tellurium", symbol: "Te", protons: 52, neutrons: 76, electrons: [2, 8, 18, 18, 6], charge: "0", feature: "Used in solar cells and thermal electric devices", type: "metalloid" }, // Metalloid
        "I": { atomicNumber: 53, name: "Iodine", symbol: "I", protons: 53, neutrons: 74, electrons: [2, 8, 18, 18, 7], charge: "0", feature: "Antiseptic, essential for thyroid function", type: "halogen" }, // Halogen
        "Xe": { atomicNumber: 54, name: "Xenon", symbol: "Xe", protons: 54, neutrons: 77, electrons: [2, 8, 18, 18, 8], charge: "0", feature: "Used in headlights and projection lamps", type: "noble-gas" }, // Noble Gas
        "Cs": { atomicNumber: 55, name: "Cesium", symbol: "Cs", protons: 55, neutrons: 78, electrons: [2, 8, 18, 18, 8, 1], charge: "0", feature: "Highly reactive, used in atomic clocks and drilling fluids", type: "alkali-metal" }, // Alkali Metal
        "Ba": { atomicNumber: 56, name: "Barium", symbol: "Ba", protons: 56, neutrons: 81, electrons: [2, 8, 18, 18, 8, 2], charge: "0", feature: "Used in diagnostic imaging (barium meals)", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "La": { atomicNumber: 57, name: "Lanthanum", symbol: "La", protons: 57, neutrons: 82, electrons: [2, 8, 18, 18, 9, 2], charge: "0", feature: "Used in camera lenses and lighter flints", type: "lanthanide" }, // Lanthanide
        "Ce": { atomicNumber: 58, name: "Cerium", symbol: "Ce", protons: 58, neutrons: 82, electrons: [2, 8, 18, 19, 9, 2], charge: "0", feature: "Used in self-cleaning ovens and catalytic converters", type: "lanthanide" }, // Lanthanide
        "Pr": { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", protons: 59, neutrons: 82, electrons: [2, 8, 18, 21, 8, 2], charge: "0", feature: "Used in magnets and yellow glass", type: "lanthanide" }, // Lanthanide
        "Nd": { atomicNumber: 60, name: "Neodymium", symbol: "Nd", protons: 60, neutrons: 84, electrons: [2, 8, 18, 22, 8, 2], charge: "0", feature: "Used in powerful magnets (NdFeB)", type: "lanthanide" }, // Lanthanide
        "Pm": { atomicNumber: 61, name: "Promethium", symbol: "Pm", protons: 61, neutrons: 84, electrons: [2, 8, 18, 23, 8, 2], charge: "0", feature: "Radioactive, used in luminous paints", type: "lanthanide" }, // Lanthanide
        "Sm": { atomicNumber: 62, name: "Samarium", symbol: "Sm", protons: 62, neutrons: 88, electrons: [2, 8, 18, 24, 8, 2], charge: "0", feature: "Used in permanent magnets and control rods", type: "lanthanide" }, // Lanthanide
        "Eu": { atomicNumber: 63, name: "Europium", symbol: "Eu", protons: 63, neutrons: 89, electrons: [2, 8, 18, 25, 8, 2], charge: "0", feature: "Used in red phosphors for TVs", type: "lanthanide" }, // Lanthanide
        "Gd": { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", protons: 64, neutrons: 93, electrons: [2, 8, 18, 25, 9, 2], charge: "0", feature: "Used in MRI contrast agents and neutron shielding", type: "lanthanide" }, // Lanthanide
        "Tb": { atomicNumber: 65, name: "Terbium", symbol: "Tb", protons: 65, neutrons: 94, electrons: [2, 8, 18, 27, 8, 2], charge: "0", feature: "Used in green phosphors and high-temperature fuel cells", type: "lanthanide" }, // Lanthanide
        "Dy": { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", protons: 66, neutrons: 96, electrons: [2, 8, 18, 28, 8, 2], charge: "0", feature: "Used in laser materials and data storage", type: "lanthanide" }, // Lanthanide
        "Ho": { atomicNumber: 67, name: "Holmium", symbol: "Ho", protons: 67, neutrons: 98, electrons: [2, 8, 18, 29, 8, 2], charge: "0", feature: "Used in medical lasers and colorants", type: "lanthanide" }, // Lanthanide
        "Er": { atomicNumber: 68, name: "Erbium", symbol: "Er", protons: 68, neutrons: 99, electrons: [2, 8, 18, 30, 8, 2], charge: "0", feature: "Used in fiber optic communications and lasers", type: "lanthanide" }, // Lanthanide
        "Tm": { atomicNumber: 69, name: "Thulium", symbol: "Tm", protons: 69, neutrons: 100, electrons: [2, 8, 18, 31, 8, 2], charge: "0", feature: "Used in portable X-ray devices", type: "lanthanide" }, // Lanthanide
        "Yb": { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", protons: 70, neutrons: 103, electrons: [2, 8, 18, 32, 8, 2], charge: "0", feature: "Used in fiber lasers and stress gauges", type: "lanthanide" }, // Lanthanide
        "Lu": { atomicNumber: 71, name: "Lutetium", symbol: "Lu", protons: 71, neutrons: 104, electrons: [2, 8, 18, 32, 9, 2], charge: "0", feature: "Used in medical imaging detectors", type: "lanthanide" }, // Lanthanide
        "Hf": { atomicNumber: 72, name: "Hafnium", symbol: "Hf", protons: 72, neutrons: 106, electrons: [2, 8, 18, 32, 10, 2], charge: "0", feature: "Used in control rods for nuclear reactors", type: "transition-metal" }, // Transition Metal
        "Ta": { atomicNumber: 73, name: "Tantalum", symbol: "Ta", protons: 73, neutrons: 108, electrons: [2, 8, 18, 32, 11, 2], charge: "0", feature: "Used in capacitors for electronics", type: "transition-metal" }, // Transition Metal
        "W": { atomicNumber: 74, name: "Tungsten", symbol: "W", protons: 74, neutrons: 110, electrons: [2, 8, 18, 32, 12, 2], charge: "0", feature: "Highest melting point of all metals, used in filaments", type: "transition-metal" }, // Transition Metal
        "Re": { atomicNumber: 75, name: "Rhenium", symbol: "Re", protons: 75, neutrons: 112, electrons: [2, 8, 18, 32, 13, 2], charge: "0", feature: "Used in high-temperature superalloys", type: "transition-metal" }, // Transition Metal
        "Os": { atomicNumber: 76, name: "Osmium", symbol: "Os", protons: 76, neutrons: 114, electrons: [2, 8, 18, 32, 14, 2], charge: "0", feature: "Densest naturally occurring element, used in pen tips", type: "transition-metal" }, // Transition Metal
        "Ir": { atomicNumber: 77, name: "Iridium", symbol: "Ir", protons: 77, neutrons: 115, electrons: [2, 8, 18, 32, 15, 2], charge: "0", feature: "Most corrosion-resistant metal, used in spark plugs", type: "transition-metal" }, // Transition Metal
        "Pt": { atomicNumber: 78, name: "Platinum", symbol: "Pt", protons: 78, neutrons: 117, electrons: [2, 8, 18, 32, 17, 1], charge: "0", feature: "Precious metal used in jewelry and catalytic converters", type: "transition-metal" }, // Transition Metal
        "Au": { atomicNumber: 79, name: "Gold", symbol: "Au", protons: 79, neutrons: 118, electrons: [2, 8, 18, 32, 18, 1], charge: "0", feature: "Valuable precious metal, excellent conductor", type: "transition-metal" }, // Transition Metal
        "Hg": { atomicNumber: 80, name: "Mercury", symbol: "Hg", protons: 80, neutrons: 121, electrons: [2, 8, 18, 32, 18, 2], charge: "0", feature: "Liquid at room temp, used in thermometers (toxic)", type: "transition-metal" }, // Transition Metal
        "Tl": { atomicNumber: 81, name: "Thallium", symbol: "Tl", protons: 81, neutrons: 123, electrons: [2, 8, 18, 32, 18, 3], charge: "0", feature: "Highly toxic, used in photoresistors and infrared optics", type: "post-transition-metal" }, // Post-transition Metal
        "Pb": { atomicNumber: 82, name: "Lead", symbol: "Pb", protons: 82, neutrons: 125, electrons: [2, 8, 18, 32, 18, 4], charge: "0", feature: "Used in batteries, radiation shielding (toxic)", type: "post-transition-metal" }, // Post-transition Metal
        "Bi": { atomicNumber: 83, name: "Bismuth", symbol: "Bi", protons: 83, neutrons: 126, electrons: [2, 8, 18, 32, 18, 5], charge: "0", feature: "Used in cosmetics and fire sprinklers (low toxicity)", type: "post-transition-metal" }, // Post-transition Metal
        "Po": { atomicNumber: 84, name: "Polonium", symbol: "Po", protons: 84, neutrons: 125, electrons: [2, 8, 18, 32, 18, 6], charge: "0", feature: "Highly radioactive, used in antistatic brushes", type: "metalloid" }, // Metalloid
        "At": { atomicNumber: 85, name: "Astatine", symbol: "At", protons: 85, neutrons: 125, electrons: [2, 8, 18, 32, 18, 7], charge: "0", feature: "Extremely rare and radioactive, potential for medicine", type: "halogen" }, // Halogen
        "Rn": { atomicNumber: 86, name: "Radon", symbol: "Rn", protons: 86, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8], charge: "0", feature: "Radioactive gas, linked to lung cancer", type: "noble-gas" }, // Noble Gas
        "Fr": { atomicNumber: 87, name: "Francium", symbol: "Fr", protons: 87, neutrons: 136, electrons: [2, 8, 18, 32, 18, 8, 1], charge: "0", feature: "Most unstable naturally occurring element", type: "alkali-metal" }, // Alkali Metal
        "Ra": { atomicNumber: 88, name: "Radium", symbol: "Ra", protons: 88, neutrons: 138, electrons: [2, 8, 18, 32, 18, 8, 2], charge: "0", feature: "Highly radioactive, once used in luminous paints", type: "alkaline-earth-metal" }, // Alkaline Earth Metal
        "Ac": { atomicNumber: 89, name: "Actinium", symbol: "Ac", protons: 89, neutrons: 138, electrons: [2, 8, 18, 32, 18, 9, 2], charge: "0", feature: "Highly radioactive, used as a neutron source", type: "actinide" }, // Actinide
        "Th": { atomicNumber: 90, name: "Thorium", symbol: "Th", protons: 90, neutrons: 142, electrons: [2, 8, 18, 32, 18, 10, 2], charge: "0", feature: "Radioactive, potential nuclear fuel", type: "actinide" }, // Actinide
        "Pa": { atomicNumber: 91, name: "Protactinium", symbol: "Pa", protons: 91, neutrons: 140, electrons: [2, 8, 18, 32, 20, 9, 2], charge: "0", feature: "Highly radioactive and toxic", type: "actinide" }, // Actinide
        "U": { atomicNumber: 92, name: "Uranium", symbol: "U", protons: 92, neutrons: 146, electrons: [2, 8, 18, 32, 21, 9, 2], charge: "0", feature: "Used as nuclear fuel and in weapons", type: "actinide" }, // Actinide
        "Np": { atomicNumber: 93, name: "Neptunium", symbol: "Np", protons: 93, neutrons: 144, electrons: [2, 8, 18, 32, 22, 9, 2], charge: "0", feature: "Radioactive, byproduct in nuclear reactors", type: "actinide" }, // Actinide
        "Pu": { atomicNumber: 94, name: "Plutonium", symbol: "Pu", protons: 94, neutrons: 150, electrons: [2, 8, 18, 32, 24, 8, 2], charge: "0", feature: "Used in nuclear weapons and power", type: "actinide" }, // Actinide
        "Am": { atomicNumber: 95, name: "Americium", symbol: "Am", protons: 95, neutrons: 148, electrons: [2, 8, 18, 32, 25, 8, 2], charge: "0", feature: "Used in smoke detectors", type: "actinide" }, // Actinide
        "Cm": { atomicNumber: 96, name: "Curium", symbol: "Cm", protons: 96, neutrons: 151, electrons: [2, 8, 18, 32, 25, 9, 2], charge: "0", feature: "Highly radioactive, used in scientific research", type: "actinide" }, // Actinide
        "Bk": { atomicNumber: 97, name: "Berkelium", symbol: "Bk", protons: 97, neutrons: 152, electrons: [2, 8, 18, 32, 27, 8, 2], charge: "0", feature: "Radioactive, used for research", type: "actinide" }, // Actinide
        "Cf": { atomicNumber: 98, name: "Californium", symbol: "Cf", protons: 98, neutrons: 153, electrons: [2, 8, 18, 32, 28, 8, 2], charge: "0", feature: "Powerful neutron emitter, used in medicine and industry", type: "actinide" }, // Actinide
        "Es": { atomicNumber: 99, name: "Einsteinium", symbol: "Es", protons: 99, neutrons: 153, electrons: [2, 8, 18, 32, 29, 8, 2], charge: "0", feature: "Highly radioactive, discovered in thermonuclear debris", type: "actinide" }, // Actinide
        "Fm": { atomicNumber: 100, name: "Fermium", symbol: "Fm", protons: 100, neutrons: 157, electrons: [2, 8, 18, 32, 30, 8, 2], charge: "0", feature: "Highly radioactive, produced by neutron bombardment", type: "actinide" }, // Actinide
        "Md": { atomicNumber: 101, name: "Mendelevium", symbol: "Md", protons: 101, neutrons: 157, electrons: [2, 8, 18, 32, 31, 8, 2], charge: "0", feature: "Synthetic, radioactive, used in research", type: "actinide" }, // Actinide
        "No": { atomicNumber: 102, name: "Nobelium", symbol: "No", protons: 102, neutrons: 157, electrons: [2, 8, 18, 32, 32, 8, 2], charge: "0", feature: "Synthetic, radioactive, short half-life", type: "actinide" }, // Actinide
        "Lr": { atomicNumber: 103, name: "Lawrencium", symbol: "Lr", protons: 103, neutrons: 159, electrons: [2, 8, 18, 32, 32, 9, 2], charge: "0", feature: "Synthetic, radioactive, shortest half-life in series", type: "actinide" }, // Actinide
        "Rf": { atomicNumber: 104, name: "Rutherfordium", symbol: "Rf", protons: 104, neutrons: 157, electrons: [2, 8, 18, 32, 32, 10, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Db": { atomicNumber: 105, name: "Dubnium", symbol: "Db", protons: 105, neutrons: 157, electrons: [2, 8, 18, 32, 32, 11, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Sg": { atomicNumber: 106, name: "Seaborgium", symbol: "Sg", protons: 106, neutrons: 157, electrons: [2, 8, 18, 32, 32, 12, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Bh": { atomicNumber: 107, name: "Bohrium", symbol: "Bh", protons: 107, neutrons: 160, electrons: [2, 8, 18, 32, 32, 13, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Hs": { atomicNumber: 108, name: "Hassium", symbol: "Hs", protons: 108, neutrons: 161, electrons: [2, 8, 18, 32, 32, 14, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Mt": { atomicNumber: 109, name: "Meitnerium", symbol: "Mt", protons: 109, neutrons: 163, electrons: [2, 8, 18, 32, 32, 15, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Ds": { atomicNumber: 110, name: "Darmstadtium", symbol: "Ds", protons: 110, neutrons: 171, electrons: [2, 8, 18, 32, 32, 16, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Rg": { atomicNumber: 111, name: "Roentgenium", symbol: "Rg", protons: 111, neutrons: 171, electrons: [2, 8, 18, 32, 32, 17, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Cn": { atomicNumber: 112, name: "Copernicium", symbol: "Cn", protons: 112, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 2], charge: "0", feature: "Synthetic, highly radioactive", type: "transition-metal" }, // Transition Metal
        "Nh": { atomicNumber: 113, name: "Nihonium", symbol: "Nh", protons: 113, neutrons: 170, electrons: [2, 8, 18, 32, 32, 18, 3], charge: "0", feature: "Synthetic, highly radioactive", type: "post-transition-metal" }, // Post-transition Metal
        "Fl": { atomicNumber: 114, name: "Flerovium", symbol: "Fl", protons: 114, neutrons: 173, electrons: [2, 8, 18, 32, 32, 18, 4], charge: "0", feature: "Synthetic, highly radioactive", type: "post-transition-metal" }, // Post-transition Metal
        "Mc": { atomicNumber: 115, name: "Moscovium", symbol: "Mc", protons: 115, neutrons: 174, electrons: [2, 8, 18, 32, 32, 18, 5], charge: "0", feature: "Synthetic, highly radioactive", type: "post-transition-metal" }, // Post-transition Metal
        "Lv": { atomicNumber: 116, name: "Livermorium", symbol: "Lv", protons: 116, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 6], charge: "0", feature: "Synthetic, highly radioactive", type: "post-transition-metal" }, // Post-transition Metal
        "Ts": { atomicNumber: 117, name: "Tennessine", symbol: "Ts", protons: 117, neutrons: 177, electrons: [2, 8, 18, 32, 32, 18, 7], charge: "0", feature: "Synthetic, highly radioactive", type: "halogen" }, // Halogen
        "Og": { atomicNumber: 118, name: "Oganesson", symbol: "Og", protons: 118, neutrons: 176, electrons: [2, 8, 18, 32, 32, 18, 8], charge: "0", feature: "Synthetic, highly radioactive, noble gas", type: "noble-gas" } // Noble Gas
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
        const elementData = elementsData[elementSymbol];

        // Add element type class for styling
        if (elementData && elementData.type) {
            elementDiv.classList.add(elementData.type);
        }

        elementDiv.addEventListener('click', () => {
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
        elementDetailsDiv.innerHTML = ''; // Clear previous content
        elementDetailsDiv.appendChild(closeButton); // Add close button back

        const title = document.createElement('h2');
        title.textContent = `${element.name} (${element.symbol})`;
        elementDetailsDiv.appendChild(title);

        const atomicNumberP = document.createElement('p');
        atomicNumberP.innerHTML = `<strong>Atomic Number:</strong> ${element.atomicNumber}`;
        elementDetailsDiv.appendChild(atomicNumberP);

        const protonsP = document.createElement('p');
        protonsP.innerHTML = `<strong>Protons:</strong> ${element.protons}`;
        elementDetailsDiv.appendChild(protonsP);

        const neutronsP = document.createElement('p');
        neutronsP.innerHTML = `<strong>Neutrons:</strong> ${element.neutrons}`;
        elementDetailsDiv.appendChild(neutronsP);

        const electronsP = document.createElement('p');
        electronsP.innerHTML = `<strong>Electron Configuration:</strong> ${element.electrons.join(', ')}`;
        elementDetailsDiv.appendChild(electronsP);

        const chargeP = document.createElement('p');
        chargeP.innerHTML = `<strong>Common Charge:</strong> ${element.charge}`;
        elementDetailsDiv.appendChild(chargeP);

        const featureP = document.createElement('p');
        featureP.innerHTML = `<strong>Feature:</strong> ${element.feature}`;
        elementDetailsDiv.appendChild(featureP);

        // Bohr model
        const bohrModelContainer = document.createElement('div');
        bohrModelContainer.classList.add('bohr-model-container');
        elementDetailsDiv.appendChild(bohrModelContainer);
        drawBohrModel(element, bohrModelContainer);

        elementDetailsDiv.style.display = 'block';
    }

    function drawBohrModel(element, container) {
        container.innerHTML = ''; // Clear previous model

        const nucleus = document.createElement('div');
        nucleus.classList.add('nucleus');
        nucleus.textContent = element.protons; // Show proton count in nucleus
        container.appendChild(nucleus);

        const maxShellSize = 200; // Max size for the outermost shell
        const shellSpacing = 20; // Spacing between shells

        element.electrons.forEach((numElectrons, shellIndex) => {
            const shell = document.createElement('div');
            shell.classList.add('shell');

            // Calculate shell size dynamically
            const shellSize = (shellIndex + 1) * shellSpacing * 2 + 30; // Nucleus size (30) + spacing
            shell.style.width = `${shellSize}px`;
            shell.style.height = `${shellSize}px`;
            shell.style.zIndex = shellIndex; // Inner shells are behind outer shells

            // Position electrons on the shell
            for (let i = 0; i < numElectrons; i++) {
                const electron = document.createElement('div');
                electron.classList.add('electron');

                const angle = (i / numElectrons) * 2 * Math.PI;
                // Calculate position relative to the center of the shell
                // Subtract 4 (half electron width) to center the electron on the shell
                const electronX = (shellSize / 2 - 4) * Math.cos(angle);
                const electronY = (shellSize / 2 - 4) * Math.sin(angle);

                electron.style.transform = `translate(${electronX}px, ${electronY}px)`;
                shell.appendChild(electron);
            }
            container.appendChild(shell);
        });

        // Adjust container size to fit the outermost shell
        const lastShellIndex = element.electrons.length - 1;
        const finalContainerSize = (lastShellIndex + 1) * shellSpacing * 2 + 30 + 10; // Add some margin
        container.style.width = `${finalContainerSize}px`;
        container.style.height = `${finalContainerSize}px`;
    }

    function goToPage2() {
        window.location.href = "https://chemist83.github.io/cheminformerSK4/";
    }

    // Attach goToPage2 to the button if it exists
    const useMoreFeaturesButton = document.querySelector('.real-button');
    if (useMoreFeaturesButton) {
        useMoreFeaturesButton.addEventListener('click', goToPage2);
    }

    const closeStickyAdButtonTop = document.getElementById('close-sticky-ad-top');
    const stickyAdTop = document.getElementById('sticky-ad-top');

    if (closeStickyAdButtonTop && stickyAdTop) {
        closeStickyAdButtonTop.addEventListener('click', () => {
            stickyAdTop.style.display = 'none'; // Hide the sticky ad
        });
    }
});

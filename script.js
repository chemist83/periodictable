// Data for the first 80 elements

// protons: same as atomic number

// neutrons: approximately atomic mass - proton count (for the most common isotope)

// electrons: electron distribution in shells

const elementsData = {

    "H": { atomicNumber: 1, name: "Hydrogen", symbol: "H", protons: 1, neutrons: 0, electrons: [1], charge: "0", feature: "It is lighest element in the universe" },

    "He": { atomicNumber: 2, name: "Helium", symbol: "He", protons: 2, neutrons: 2, electrons: [2], charge: "0" },

    "Li": { atomicNumber: 3, name: "Lithium", symbol: "Li", protons: 3, neutrons: 4, electrons: [2, 1], charge: "0", feature: "It is used in batteries" },

    "Be": { atomicNumber: 4, name: "Beryllium", symbol: "Be", protons: 4, neutrons: 5, electrons: [2, 2], charge: "0" },

    "B": { atomicNumber: 5, name: "Boron", symbol: "B", protons: 5, neutrons: 6, electrons: [2, 3], charge: "0" },

    "C": { atomicNumber: 6, name: "Carbon", symbol: "C", protons: 6, neutrons: 6, electrons: [2, 4], charge: "0" },

    "N": { atomicNumber: 7, name: "Nitrogen", symbol: "N", protons: 7, neutrons: 7, electrons: [2, 5], charge: "0" },

    "O": { atomicNumber: 8, name: "Oxygen", symbol: "O", protons: 8, neutrons: 8, electrons: [2, 6], charge: "0" },

    "F": { atomicNumber: 9, name: "Fluorine", symbol: "F", protons: 9, neutrons: 10, electrons: [2, 7], charge: "0" },

    "Ne": { atomicNumber: 10, name: "Neon", symbol: "Ne", protons: 10, neutrons: 10, electrons: [2, 8], charge: "0" },

    "Na": { atomicNumber: 11, name: "Sodium", symbol: "Na", protons: 11, neutrons: 12, electrons: [2, 8, 1], charge: "0" },

    "Mg": { atomicNumber: 12, name: "Magnesium", symbol: "Mg", protons: 12, neutrons: 12, electrons: [2, 8, 2], charge: "0" },

    "Al": { atomicNumber: 13, name: "Aluminum", symbol: "Al", protons: 13, neutrons: 14, electrons: [2, 8, 3], charge: "0" },

    "Si": { atomicNumber: 14, name: "Silicon", symbol: "Si", protons: 14, neutrons: 14, electrons: [2, 8, 4], charge: "0" },

    "P": { atomicNumber: 15, name: "Phosphorus", symbol: "P", protons: 15, neutrons: 16, electrons: [2, 8, 5], charge: "0" },

    "S": { atomicNumber: 16, name: "Sulfur", symbol: "S", protons: 16, neutrons: 16, electrons: [2, 8, 6], charge: "0" },

    "Cl": { atomicNumber: 17, name: "Chlorine", symbol: "Cl", protons: 17, neutrons: 18, electrons: [2, 8, 7], charge: "0" },

    "Ar": { atomicNumber: 18, name: "Argon", symbol: "Ar", protons: 18, neutrons: 22, electrons: [2, 8, 8], charge: "0" },

    "K": { atomicNumber: 19, name: "Potassium", symbol: "K", protons: 19, neutrons: 20, electrons: [2, 8, 8, 1], charge: "0" },

    "Ca": { atomicNumber: 20, name: "Calcium", symbol: "Ca", protons: 20, neutrons: 20, electrons: [2, 8, 8, 2], charge: "0" },

    "Sc": { atomicNumber: 21, name: "Scandium", symbol: "Sc", protons: 21, neutrons: 24, electrons: [2, 8, 9, 2], charge: "0" },

    "Ti": { atomicNumber: 22, name: "Titanium", symbol: "Ti", protons: 22, neutrons: 26, electrons: [2, 8, 10, 2], charge: "0" },

    "V": { atomicNumber: 23, name: "Vanadium", symbol: "V", protons: 23, neutrons: 28, electrons: [2, 8, 11, 2], charge: "0" },

    "Cr": { atomicNumber: 24, name: "Chromium", symbol: "Cr", protons: 24, neutrons: 28, electrons: [2, 8, 13, 1], charge: "0" }, // Exception

    "Mn": { atomicNumber: 25, name: "Manganese", symbol: "Mn", protons: 25, neutrons: 30, electrons: [2, 8, 13, 2], charge: "0" },

    "Fe": { atomicNumber: 26, name: "Iron", symbol: "Fe", protons: 26, neutrons: 30, electrons: [2, 8, 14, 2], charge: "0" },

    "Co": { atomicNumber: 27, name: "Cobalt", symbol: "Co", protons: 27, neutrons: 32, electrons: [2, 8, 15, 2], charge: "0" },

    "Ni": { atomicNumber: 28, name: "Nickel", symbol: "Ni", protons: 28, neutrons: 31, electrons: [2, 8, 16, 2], charge: "0" },

    "Cu": { atomicNumber: 29, name: "Copper", symbol: "Cu", protons: 29, neutrons: 35, electrons: [2, 8, 18, 1], charge: "0" }, // Exception

    "Zn": { atomicNumber: 30, name: "Zinc", symbol: "Zn", protons: 30, neutrons: 35, electrons: [2, 8, 18, 2], charge: "0" },

    "Ga": { atomicNumber: 31, name: "Gallium", symbol: "Ga", protons: 31, neutrons: 39, electrons: [2, 8, 18, 3], charge: "0" },

    "Ge": { atomicNumber: 32, name: "Germanium", symbol: "Ge", protons: 32, neutrons: 41, electrons: [2, 8, 18, 4], charge: "0" },

    "As": { atomicNumber: 33, name: "Arsenic", symbol: "As", protons: 33, neutrons: 42, electrons: [2, 8, 18, 5], charge: "0" },

    "Se": { atomicNumber: 34, name: "Selenium", symbol: "Se", protons: 34, neutrons: 45, electrons: [2, 8, 18, 6], charge: "0" },

    "Br": { atomicNumber: 35, name: "Bromine", symbol: "Br", protons: 35, neutrons: 45, electrons: [2, 8, 18, 7], charge: "0" },

    "Kr": { atomicNumber: 36, name: "Krypton", symbol: "Kr", protons: 36, neutrons: 48, electrons: [2, 8, 18, 8], charge: "0" },

    "Rb": { atomicNumber: 37, name: "Rubidium", symbol: "Rb", protons: 37, neutrons: 48, electrons: [2, 8, 18, 8, 1], charge: "0" },

    "Sr": { atomicNumber: 38, name: "Strontium", symbol: "Sr", protons: 38, neutrons: 50, electrons: [2, 8, 18, 8, 2], charge: "0" },

    "Y": { atomicNumber: 39, name: "Yttrium", symbol: "Y", protons: 39, neutrons: 50, electrons: [2, 8, 18, 9, 2], charge: "0" },

    "Zr": { atomicNumber: 40, name: "Zirconium", symbol: "Zr", protons: 40, neutrons: 51, electrons: [2, 8, 18, 10, 2], charge: "0" },

    "Nb": { atomicNumber: 41, name: "Niobium", symbol: "Nb", protons: 41, neutrons: 52, electrons: [2, 8, 18, 12, 1], charge: "0" }, // Exception

    "Mo": { atomicNumber: 42, name: "Molybdenum", symbol: "Mo", protons: 42, neutrons: 54, electrons: [2, 8, 18, 13, 1], charge: "0" }, // Exception

    "Tc": { atomicNumber: 43, name: "Technetium", symbol: "Tc", protons: 43, neutrons: 55, electrons: [2, 8, 18, 13, 2], charge: "0" },

    "Ru": { atomicNumber: 44, name: "Ruthenium", symbol: "Ru", protons: 44, neutrons: 57, electrons: [2, 8, 18, 15, 1], charge: "0" }, // Exception

    "Rh": { atomicNumber: 45, name: "Rhodium", symbol: "Rh", protons: 45, neutrons: 58, electrons: [2, 8, 18, 16, 1], charge: "0" }, // Exception

    "Pd": { atomicNumber: 46, name: "Palladium", symbol: "Pd", protons: 46, neutrons: 60, electrons: [2, 8, 18, 18, 0], charge: "0" }, // Exception

    "Ag": { atomicNumber: 47, name: "Silver", symbol: "Ag", protons: 47, neutrons: 61, electrons: [2, 8, 18, 18, 1], charge: "0" }, // Exception

    "Cd": { atomicNumber: 48, name: "Cadmium", symbol: "Cd", protons: 48, neutrons: 64, electrons: [2, 8, 18, 18, 2], charge: "0" },

    "In": { atomicNumber: 49, name: "Indium", symbol: "In", protons: 49, neutrons: 66, electrons: [2, 8, 18, 18, 3], charge: "0" },

    "Sn": { atomicNumber: 50, name: "Tin", symbol: "Sn", protons: 50, neutrons: 69, electrons: [2, 8, 18, 18, 4], charge: "0" },

    // --- Yeni Eklenen Elementler (51-80) ---

    "Sb": { atomicNumber: 51, name: "Antimony", symbol: "Sb", protons: 51, neutrons: 71, electrons: [2, 8, 18, 18, 5], charge: "0" },

    "Te": { atomicNumber: 52, name: "Tellurium", symbol: "Te", protons: 52, neutrons: 76, electrons: [2, 8, 18, 18, 6], charge: "0" },

    "I": { atomicNumber: 53, name: "Iodine", symbol: "I", protons: 53, neutrons: 74, electrons: [2, 8, 18, 18, 7], charge: "0" },

    "Xe": { atomicNumber: 54, name: "Xenon", symbol: "Xe", protons: 54, neutrons: 77, electrons: [2, 8, 18, 18, 8], charge: "0" },

    "Cs": { atomicNumber: 55, name: "Cesium", symbol: "Cs", protons: 55, neutrons: 78, electrons: [2, 8, 18, 18, 8, 1], charge: "0" },

    "Ba": { atomicNumber: 56, name: "Barium", symbol: "Ba", protons: 56, neutrons: 81, electrons: [2, 8, 18, 18, 8, 2], charge: "0" },

    "La": { atomicNumber: 57, name: "Lanthanum", symbol: "La", protons: 57, neutrons: 82, electrons: [2, 8, 18, 18, 9, 2], charge: "0" },

    "Ce": { atomicNumber: 58, name: "Cerium", symbol: "Ce", protons: 58, neutrons: 82, electrons: [2, 8, 18, 19, 9, 2], charge: "0" },

    "Pr": { atomicNumber: 59, name: "Praseodymium", symbol: "Pr", protons: 59, neutrons: 82, electrons: [2, 8, 18, 21, 8, 2], charge: "0" },

    "Nd": { atomicNumber: 60, name: "Neodymium", symbol: "Nd", protons: 60, neutrons: 84, electrons: [2, 8, 18, 22, 8, 2], charge: "0" },

    "Pm": { atomicNumber: 61, name: "Promethium", symbol: "Pm", protons: 61, neutrons: 84, electrons: [2, 8, 18, 23, 8, 2], charge: "0" },

    "Sm": { atomicNumber: 62, name: "Samarium", symbol: "Sm", protons: 62, neutrons: 88, electrons: [2, 8, 18, 24, 8, 2], charge: "0" },

    "Eu": { atomicNumber: 63, name: "Europium", symbol: "Eu", protons: 63, neutrons: 89, electrons: [2, 8, 18, 25, 8, 2], charge: "0" },

    "Gd": { atomicNumber: 64, name: "Gadolinium", symbol: "Gd", protons: 64, neutrons: 93, electrons: [2, 8, 18, 25, 9, 2], charge: "0" },

    "Tb": { atomicNumber: 65, name: "Terbium", symbol: "Tb", protons: 65, neutrons: 94, electrons: [2, 8, 18, 27, 8, 2], charge: "0" },

    "Dy": { atomicNumber: 66, name: "Dysprosium", symbol: "Dy", protons: 66, neutrons: 96, electrons: [2, 8, 18, 28, 8, 2], charge: "0" },

    "Ho": { atomicNumber: 67, name: "Holmium", symbol: "Ho", protons: 67, neutrons: 98, electrons: [2, 8, 18, 29, 8, 2], charge: "0" },

    "Er": { atomicNumber: 68, name: "Erbium", symbol: "Er", protons: 68, neutrons: 99, electrons: [2, 8, 18, 30, 8, 2], charge: "0" },

    "Tm": { atomicNumber: 69, name: "Thulium", symbol: "Tm", protons: 69, neutrons: 100, electrons: [2, 8, 18, 31, 8, 2], charge: "0" },

    "Yb": { atomicNumber: 70, name: "Ytterbium", symbol: "Yb", protons: 70, neutrons: 103, electrons: [2, 8, 18, 32, 8, 2], charge: "0" },

    "Lu": { atomicNumber: 71, name: "Lutetium", symbol: "Lu", protons: 71, neutrons: 104, electrons: [2, 8, 18, 32, 9, 2], charge: "0" },

    "Hf": { atomicNumber: 72, name: "Hafnium", symbol: "Hf", protons: 72, neutrons: 106, electrons: [2, 8, 18, 32, 10, 2], charge: "0" },

    "Ta": { atomicNumber: 73, name: "Tantalum", symbol: "Ta", protons: 73, neutrons: 108, electrons: [2, 8, 18, 32, 11, 2], charge: "0" },

    "W": { atomicNumber: 74, name: "Tungsten", symbol: "W", protons: 74, neutrons: 110, electrons: [2, 8, 18, 32, 12, 2], charge: "0" },

    "Re": { atomicNumber: 75, name: "Rhenium", symbol: "Re", protons: 75, neutrons: 112, electrons: [2, 8, 18, 32, 13, 2], charge: "0" },

    "Os": { atomicNumber: 76, name: "Osmium", symbol: "Os", protons: 76, neutrons: 114, electrons: [2, 8, 18, 32, 14, 2], charge: "0" },

    "Ir": { atomicNumber: 77, name: "Iridium", symbol: "Ir", protons: 77, neutrons: 115, electrons: [2, 8, 18, 32, 15, 2], charge: "0" },

    "Pt": { atomicNumber: 78, name: "Platinum", symbol: "Pt", protons: 78, neutrons: 117, electrons: [2, 8, 18, 32, 17, 1], charge: "0" }, // Exception

    "Au": { atomicNumber: 79, name: "Gold", symbol: "Au", protons: 79, neutrons: 118, electrons: [2, 8, 18, 32, 18, 1], charge: "0" }, // Exception

    "Hg": { atomicNumber: 80, name: "Mercury", symbol: "Hg", protons: 80, neutrons: 121, electrons: [2, 8, 18, 32, 18, 2], charge: "0" }

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

}

// SADECE BU FONKSİYONU DEĞİŞTİR:

function drawBohrModel(element) {

    const numberOfLayers = element.electrons.length;

    // Dinamik model boyutu hesapla

    // Daha fazla katman varsa daha büyük bir model boyutu

    // Minimum 350, her ek katman için 50px artır (3 katmandan sonra)

    const baseModelSize = 350;

    const sizeIncrementPerLayer = 50; 

    const dynamicModelSize = baseModelSize + (Math.max(0, numberOfLayers - 3) * sizeIncrementPerLayer); 

    // Dinamik yörünge aralığı ayarla

    // Daha fazla katman varsa yörünge aralığını azalt (1 katmandan sonra)

    const baseLayerSpacing = 30;

    const spacingDecrementPerLayer = 3; 

    const dynamicLayerSpacing = Math.max(15, baseLayerSpacing - (Math.max(0, numberOfLayers - 1) * spacingDecrementPerLayer)); 

    const nucleusRadius = 30;

    const particleRadius = 6;

    const electronRadius = 7;

    

    // Merkez koordinatları dinamik boyuta göre ayarla

    const nucleusCenterX = dynamicModelSize / 2;

    const nucleusCenterY = dynamicModelSize / 2;

    // SVG etiketini dinamik boyutlarla güncelle

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

        // Yörünge yarıçapını dinamik aralığa göre hesapla

        const orbitRadius = nucleusRadius + (layerIndex + 1) * dynamicLayerSpacing;

        

        // Orbit path

        svgHTML += `<circle cx="${nucleusCenterX}" cy="${nucleusCenterY}" r="${orbitRadius}" fill="none" stroke="#aaa" stroke-width="1" stroke-dasharray="2 2" class="orbit-path"></circle>`;

        

        // Electrons in each layer

        for (let i = 0; i < electronCount; i++) {

            const angleDeg = (360 / electronCount) * i;

            const angleRad = (angleDeg * Math.PI) / 180;

            const electronX = nucleusCenterX + orbitRadius * Math.cos(angleRad);

            const electronY = nucleusCenterY + orbitRadius * Math.sin(angleRad);

            

            // Hız ayarı: İç katmanlar genellikle daha hızlı, dış katmanlar daha yavaş

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

              

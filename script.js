
// Navigatin bar scripts
function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Script for filtering all tables
function filterAllTables() {
    // Získání vybrané hodnoty z filtru
    const filterValue = document.getElementById("globalCategoryFilter").value.toLowerCase();
                
    // Výběr všech tabulek, které mají třídu "filterable-table"
    const tables = document.querySelectorAll(".filterable-table");

    // Procházení každé tabulky zvlášť
    tables.forEach(table => {
        const tbody = table.querySelector("tbody");
        const rows = tbody.getElementsByTagName("tr");

        // Procházení všech řádků v aktuální tabulce
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName("td");
                        
            if (cells.length > 0) {
                // Výběr úplně posledního sloupce (index se dynamicky přizpůsobí počtu sloupců)
                const lastCell = cells[cells.length - 1];
                const cellText = (lastCell.textContent || lastCell.innerText).toLowerCase();

                // Podmínka pro zobrazení nebo skrytí řádku
                if (filterValue === "all" || cellText.includes(filterValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        }
    });
}

// Scripty pro tabulky

    // Pomocný script pro bezpečné získání textu z buňky bez ovlivnění tagy <a>, <img> a <br>
    function getCellText(row, columnIndex) {
        const cell = row.cells[columnIndex];
        
        // Pokud řadíme první sloupec (index 0), ignorujeme odkazy a obrázky
        if (columnIndex === 0) {
            const profileDiv = cell.querySelector('.cell-profile');
            if (profileDiv) {
                // Vytvoříme kopii divu v paměti, abychom neupravovali viditelnou stránku
                const clone = profileDiv.cloneNode(true);
                // Kompletně odstraníme tagy <a> (včetně odkazu a obrázku uvnitř)
                clone.querySelectorAll('a').forEach(link => link.remove());
                
                // Vezmeme text, nahradíme konce řádků (způsobené <br>) mezerou a vyčistíme duplicitní mezery
                return clone.textContent.replace(/\s+/g, ' ').trim();
            }
        }
        
        // Pro ostatní sloupce také vyčistíme bílé znaky a konce řádků
        return cell.textContent.replace(/\s+/g, ' ').trim();
    }

    // Funkce, která si při prvním načtení zapamatuje původní pořadí řádků
    function initializeOriginalOrder() {
        const tableBodies = document.querySelectorAll(".filterable-tbody");
        tableBodies.forEach(tableBody => {
            const rows = tableBody.querySelectorAll("tr");
            rows.forEach((row, index) => {
                // Pokud řádek ještě nemá uložený index, zapíšeme ho tam
                if (!row.hasAttribute("data-original-index")) {
                    row.setAttribute("data-original-index", index);
                }
            });
        });
    }

    // Spustíme inicializaci hned, jak je skript připraven
    initializeOriginalOrder();

    // Script for sorting all tables
    function sortAllTables() {
        // Pro případ, že by se tabulky generovaly dynamicky, pojistíme inicializaci indexů
        initializeOriginalOrder();

        const sortValue = document.getElementById("sortSelect").value;
        const tableBodies = document.querySelectorAll(".filterable-tbody");

        tableBodies.forEach(tableBody => {
            const rows = Array.from(tableBody.querySelectorAll("tr"));

            // KDYŽ JE VYBRÁNA VÝCHOZÍ MOŽNOST: Vrátíme tabulku do původního stavu
            if (!sortValue) {
                rows.sort((rowA, rowB) => {
                    const indexA = parseInt(rowA.getAttribute("data-original-index"));
                    const indexB = parseInt(rowB.getAttribute("data-original-index"));
                    return indexA - indexB;
                });
            } else {
                // KLASICKÉ ŘAZENÍ PODLE VYBRANÉHO SLOUPCE
                const [colIndexStr, order] = sortValue.split("-");
                const columnIndex = parseInt(colIndexStr);

                rows.sort((rowA, rowB) => {
                    let cellA = getCellText(rowA, columnIndex);
                    let cellB = getCellText(rowB, columnIndex);

                    // Numerické řazení pro 2. a 3. sloupec (indexy 1 a 2)
                    if (columnIndex === 1 || columnIndex === 2) {
                        
                        // ODSTRANĚNÍ TEČEK (tisíců): "6.000" -> "6000"
                        // Pokud text obsahuje tečky jako oddělovače tisíců, vymažeme je, aby parseFloat fungoval správně
                        const cleanA = cellA.replace(/\./g, '');
                        const cleanB = cellB.replace(/\./g, '');

                        const valA = cellA === "" ? NaN : parseFloat(cleanA);
                        const valB = cellB === "" ? NaN : parseFloat(cleanB);

                        // Pokud jsou obě buňky prázdné, neměníme jejich pozici
                        if (isNaN(valA) && isNaN(valB)) return 0;
                        // Prázdné/neplatné buňky odsuneme vždy na konec tabulky
                        if (isNaN(valA)) return 1;
                        if (isNaN(valB)) return -1;

                        const comparison = valA - valB;
                        return order === "asc" ? comparison : -comparison;
                    } else {
                        // Abecední řazení pro 1. sloupec (index 0)
                        if (cellA === "" && cellB === "") return 0;
                        if (cellA === "") return 1;
                        if (cellB === "") return -1;

                        // localeCompare zajistí správné řazení včetně české diakritiky (Č, Š, Ž...)
                        const comparison = cellA.localeCompare(cellB, 'cs');
                        return order === "asc" ? comparison : -comparison;
                    }
                });
            }

            // Přidáme seřazené řádky zpět do DOM struktury dané tabulky
            rows.forEach(row => tableBody.appendChild(row));
        });
    }

// Script for moving user on website by buttons
    document.addEventListener('DOMContentLoaded', () => {
        
        // Zapsáno textově a rozděleno přes split, aby to systém bezpečně zobrazil
        const levels = "1,2,3,4,5".split(",");
        
        levels.forEach(lvl => {
            const tlacitko = document.getElementById("button-uni-level-" + lvl);
            const cilovaSekce = document.getElementById("univerzita-level-" + lvl);

            if (tlacitko && cilovaSekce) {
                tlacitko.addEventListener('click', () => {
                    cilovaSekce.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start'      
                    });
                });
            }
        });

        // Automatické vložení SVG ikon a funkce "Zpět nahoru" do přichycených nadpisů
        const nadpisy = document.querySelectorAll('.nadpis-univerzita');
        
        nadpisy.forEach(nadpis => {
            nadpis.style.cursor = 'pointer';

            const svgIkona = `
                <svg class="ikona-nahoru" xmlns="http://w3.org" viewBox="0 0 24 24" height="27px" width="27px" fill="#e3e3e3">
                <path d="M9.9,19q-2.42,0-4.16-1.57T4,13.5T5.74,9.57T9.9,8h6.3L13.6,5.4L15,4l5,5l-5,5l-1.4-1.4L16.2,10H9.9q-1.57,0-2.74,1T6,13.5T7.16,16T9.9,17H17v2H9.9Z"/>
                </svg>
            `;
            
            nadpis.innerHTML += svgIkona;

            nadpis.addEventListener('click', () => {
                window.scrollTo({
                    top: 600,
                    behavior: 'smooth'
                });
            });
        });

    });
// Ukázková herní data
const items = [
    {
        name: "Hrdina",
        image: "Jednotky/Images Jednotky/icm_1.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/kn_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge hrdinove'>Hrdinové</span><span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "0&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "600&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Na poslední úrovni Hrdina dostřelí na vzdálenost 3 pole, a má zvýšenou střelbu o +8&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>. Musí u sebe ale nést střelecký artefakt." },
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Na poslední úrovni se Hrdina rozzuří po dobu 40 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b-big1.gif'>", name: "Obří Hrdina", desc: "Hrdina se na 60 minut změní na obřího Hrdinu 2x2 pole velkého." }
        ],
    
    },
    {
        name: "Hrdina Bílý",
        image: "Jednotky/Images Jednotky/icm_2.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/kb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge hrdinove'>Hrdinové</span><span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "0&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "600&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Na poslední úrovni Hrdina dostřelí na vzdálenost 3 pole, a má zvýšenou střelbu o +8&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>. Musí u sebe ale nést střelecký artefakt." },
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Na poslední úrovni se Hrdina rozzuří po dobu 40 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b-big1.gif'>", name: "Obří Hrdina", desc: "Hrdina se na 60 minut změní na obřího Hrdinu 2x2 pole velkého." }
        ],
        dodatecneInfo: "Bílý hrdina je vylepšení na klasického hrdinu, které lze ve hře koupit za 40&nbsp<img class='ikona' src='Jednotky/Images/credits.gif'> na půl roku. Hrdina se rychleji uzdravuje (+2<img class='ikona' src='Jednotky/Images/hea.gif'>), a má přídavnou kapsu na artefakt. V případě smrti hrdiny je na rozdíl od obyčejného hrdiny šance na ztrátu artefaktu minimální (náhoda je 1 z 10). Artefakty, které nese, budou přeneseny do nové hry, nemusíš tedy stavět 9. level hradu."
    },
    {
        name: "Zbrojnoš Bílý",
        image: "Jednotky/Images Jednotky/icm_4.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>550&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "18&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Modlitba k Bohu", desc: "Zvýší obranu o +3<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },      
        ],

    },
    {
        name: "Zbrojnoš Panoš",
        image: "Jednotky/Images Jednotky/icm_5.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbp_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "110",
        hodnost9: "1.100",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>530&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "15&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp13&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Zvolání: Za Krále!", desc: "Zvýší obranu o +2<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },      
        ],

    },
    {
        name: "Zbrojnoš",
        image: "Jednotky/Images Jednotky/icm_6.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "",
        hodnost9: "",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>520&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "15&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp12&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        ],

    },
    {
        name: "Zbrojnoš Modrý",
        image: "Jednotky/Images Jednotky/icm_7.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>540&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "18&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp13&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "5&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Bojová Píseň", desc: "Zvýší obranu o +3<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },      
        ],

    },
    {
        name: "Zbrojnoš Zelenáč",
        image: "Jednotky/Images Jednotky/icm_8.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "",
        hodnost9: "",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "12&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "3&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        ],

    },
    {
        name: "Zbrojnoš Černý Toulavý",
        image: "Jednotky/Images Jednotky/icm_9.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "",
        hodnost9: "",
        kategorie: "",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>520&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Černá Modlitba", desc: "Zvýší obranu o +4<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Zastrašení", desc: "Sníží jednotce útok o 2 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." },  
        ],
        dodatecneInfo: "POZOR: Nejedná se o klasického černého zbrojnoše."
    },
        {
        name: "Černý Rytíř Toulavý",
        image: "Jednotky/Images Jednotky/icm_10.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bk_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "",
        stats: {
            energie: "<span class='energie'>xxx&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>xxx&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "xxx&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbspxxx&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "xxx&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "xxx&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "xxx&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+xxx&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+xxx&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>xxx&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>xxx&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>xxx&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        { cost: "",icon: "", name: "", desc: "Shopnosti této jednotky jsou neznámé." },
        ],
        dodatecneInfo: "POZOR: Nejedná se o klasického Černého Rytíře."
    },
    {
        name: "Černý Král",
        image: "Jednotky/Images Jednotky/icm_11.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bk_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "42&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp60&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "15&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "27&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "3000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+50&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+10&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        { cost: "",icon: "", name: "", desc: "Shopnosti této jednotky jsou neznámé." },
        ],
        dodatecneInfo: "POZOR: Nejedná se o černého rytíře, ale o Černé Krále. Jsou si velice podobní, ale mají trochu odlišné staty. Černého krále můžete najít např. na mapách ZD6 nebo KÚ Hrad Černého Bratrstva a Záchrana Kostela."
    },
    {
        name: "Střelec",
        image: "Jednotky/Images Jednotky/icm_12.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/ar_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp7&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Jenotka může střílet na vzdálenost 1 až 3 pole (podle její hodnosti)." },          
        ],

    },
    {
        name: "Střelec Modrý",
        image: "Jednotky/Images Jednotky/icm_13.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/arm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "10&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp7&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp6&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Jenotka může střílet na vzdálenost 1 až 3 pole (podle její hodnosti)." },    
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +18<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },        
        ],

    },
    {
        name: "Střelec Červený",
        image: "Jednotky/Images Jednotky/icm_14.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/arcz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>2800&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>250&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "300&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+35&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Jenotka může střílet na vzdálenost 1 až 3 pole (podle její hodnosti)." },          
        ],

    },
    {
        name: "Stavitel",
        image: "Jednotky/Images Jednotky/icm_15.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bu_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp1&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/kl.gif'>", name: "Stavět", desc: "Jednotka umí stavět a opravovat budovy na mapě." },      
        ],

    },
    {
        name: "Zbrojnoš Černý",
        image: "Jednotky/Images Jednotky/icm_16.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "205",
        hodnost9: "2.050",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>520&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Černá Modlitba", desc: "Zvýší obranu o +4<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Zastrašení", desc: "Sníží jednotce útok o 2 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." },  
        ],

    },
    {
        name: "Druid",
        image: "Jednotky/Images Jednotky/icm_17.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/lez_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp5&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "7&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "300&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal.gif'>", name: "Léčení", desc: "Jednotka umí léčit, efekt se zvyšuje s magickou sílou." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal_add.gif'>", name: "Léčivé byliny", desc: "Zvýší přírustek zdraví o +12 <img class='ikona' src='Jednotky/Images/hea.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_bless.gif'>", name: "Požehnání", desc: "Odstraní z jednotky veškerá negativní kouzla." },
            { cost: "300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add_2x2.gif'>", name: "Síla přírody", desc: "Zvýší magickou sílu o +6 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Sešle magický štít se silou = magická síla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magic_shield_add_2x2.gif'>", name: "Magický štít", desc: "Sešle magický štít se silou = magická síla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na plochu 2x2. Doba záleží na magické síle jednotky." },
        ],
        dodatecneInfo: "Umí obětovat šupiny na oltáři."
    },
    {
        name: "Léčitel",
        image: "Jednotky/Images Jednotky/icm_18.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/le_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>2500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>200&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "2&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "300&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal.gif'>", name: "Léčení", desc: "Jednotka umí léčit, efekt se zvyšuje s magickou sílou." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add.gif'>", name: "Modlidba", desc: "Zvýší magickou sílu o +4 <img class='ikona' src='Jednotky/Images/spells_ico.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Sešle magický štít se silou = magická síla + 3 <img class='ikona' src='Jednotky/Images/shield_mag.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magic_shield_add_2x2.gif'>", name: "Magický štít", desc: "Sešle magický štít se silou = magická síla + 3 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na plochu 2x2. Doba záleží na magické síle jednotky." },
        ],
        dodatecneInfo: "Umí obětovat šupiny na oltáři."
    },
    {
        name: "Mnich Bílý",
        image: "Jednotky/Images Jednotky/icm_19.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/leb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>600&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "24&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp21&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "4&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "400&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal.gif'>", name: "Léčení", desc: "Jednotka umí léčit, efekt se zvyšuje s magickou sílou." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal_add.gif'>", name: "Léčivé byliny", desc: "Zvýší přírustek zdraví o +11 <img class='ikona' src='Jednotky/Images/hea.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_bless.gif'>", name: "Požehnání", desc: "Odstraní z jednotky veškerá negativní kouzla." },
            { cost: "300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add_2x2.gif'>", name: "Modlitba", desc: "Zvýší magickou sílu o +5 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Sešle magický štít se silou = magická síla + 5 <img class='ikona' src='Jednotky/Images/shield_mag.gif'>. Doba záleží na magické síle jednotky." },
        ],
        dodatecneInfo: "Umí obětovat šupiny na oltáři."
    },
    {
        name: "Vozík",
        image: "Jednotky/Images Jednotky/icm_20.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/vo_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>2500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>100&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "8&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "8000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Šermíř",
        image: "Jednotky/Images Jednotky/icm_21.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/se_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "26&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "550&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>10&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Jednotka se rozzuří na 15 minut. Cooldown: ?." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_add.gif'>", name: "Velitelský hlas", desc: "Zvýší útok o +2 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +28<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 5 minut. Cooldown: 2 hodiny." },
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Šermíř Černý",
        image: "Jednotky/Images Jednotky/icm_22.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/sec_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "2.075",
        hodnost9: "20.750",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>3300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>560&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "30&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "550&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>12&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Jednotka se rozzuří na 15 minut. Cooldown: ?." },
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Zastrašení", desc: "Sníží jednotce útok o 3 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." }, 
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +28<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Bojová kázeň", desc: "Zvýší obranu o +9<img class='ikona' src='Jednotky/Images/sh.gif'> na 20 minut." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Bojová kázeň", desc: "Zvýší obranu o +9<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 20 minut." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_3x3.gif'>", name: "Bojová kázeň", desc: "Zvýší obranu o +9<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 3x3 na 20 minut." },
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Léčitel Černý",
        image: "Jednotky/Images Jednotky/icm_23.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/lec_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>3500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp6&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "5&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "300&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal.gif'>", name: "Léčení", desc: "Jednotka umí léčit, efekt se zvyšuje s magickou sílou." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_dispel.gif'>", name: "Magická očista", desc: "Odstraní z jednotky veškerá kouzla." },
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Strach", desc: "Sníží jednotce útok o 5 <img class='ikona' src='Jednotky/Images/m2.gif'>. Doba záleží na magické síle jednotky." },             
            { cost: "300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add_2x2.gif'>", name: "Pekelná magie", desc: "Zvýší magickou sílu o +5 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },
        ],
        dodatecneInfo: "Umí obětovat šupiny na oltáři."
    },
    {
        name: "Skřetí Beran",
        image: "Jednotky/Images Jednotky/icm_24.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bez_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>800&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "10&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "13&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Beranidlo",
        image: "Jednotky/Images Jednotky/icm_25.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/be_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>2500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp12&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "12&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "33&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Beranidlo Černé",
        image: "Jednotky/Images Jednotky/icm_26.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bec_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "14&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "40&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Šermíři Dvojčata",
        image: "Jednotky/Images Jednotky/icm_27.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/sed_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>700&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "34&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "800&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>14&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>10&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Jednotka se rozzuří na 15 minut. Cooldown: ?." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_add.gif'>", name: "Velitelský hlas", desc: "Zvýší útok o +3 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +28<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Templář Bílý",
        image: "Jednotky/Images Jednotky/icm_28.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/seb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>580&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "27&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp14&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "550&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>13&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_heal_add.gif'>", name: "Léčivé byliny", desc: "Zvýší přírustek zdraví o +5 <img class='ikona' src='Jednotky/Images/hea.gif'> na 20 minut." },
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_bless.gif'>", name: "Požehnání", desc: "Odstraní z jednotky veškerá negativní kouzla." },
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +28<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Společná modlitba", desc: "Zvýší obranu o +7<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 20 minut." },
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Skřet",
        image: "Jednotky/Images Jednotky/icm_30.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orsa_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "225",
        hodnost9: "2.250",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "12&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "800&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Skřet Sekerník",
        image: "Jednotky/Images Jednotky/icm_31.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orsese_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "14&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "100&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Skřet se Štítem",
        image: "Jednotky/Images Jednotky/icm_32.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orsast_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "12&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp14&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "7&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "100&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Skřet Modrák",
        image: "Jednotky/Images Jednotky/icm_33.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orsm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp8&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "700&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Skřet Stavitel",
        image: "Jednotky/Images Jednotky/icm_34.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orst_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "14&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp7&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "700&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/kl.gif'>", name: "Stavět", desc: "Jednotka umí stavět a opravovat budovy na mapě." },      
        ],

    },
    {
        name: "Skřetí Velitel",
        image: "Jednotky/Images Jednotky/icm_45.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orv_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "1.300",
        hodnost9: "13.000",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "30&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp15&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1600&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Zastrašení", desc: "Sníží jednotce útok o 4 <img class='ikona' src='Jednotky/Images/m2.gif'> na 20 minut." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Výchovné seřvání", desc: "Zvýší obranu o +11<img class='ikona' src='Jednotky/Images/sh.gif'> na 20 minut." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Výchovné seřvání", desc: "Zvýší obranu o +11<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 20 minut." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_3x3.gif'>", name: "Výchovné seřvání", desc: "Zvýší obranu o +11<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 3x3 na 20 minut." },
        ],
    
    },
    {
        name: "Skřetí Velitel Rudý",
        image: "Jednotky/Images Jednotky/icm_46.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orvce_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "34&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "12&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "2000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Strach", desc: "Sníží jednotce útok o 5 <img class='ikona' src='Jednotky/Images/m2.gif'> na 110 minut." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +12<img class='ikona' src='Jednotky/Images/sh.gif'> na 110 minut." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +12<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 110 minut." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_3x3.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +12<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 3x3 na 110 minut." },
        ],
        dodatecneInfo: "Kabo je borec"    
    },
    {
        name: "Skřetí Velitel Černý",
        image: "Jednotky/Images Jednotky/icm_47.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orvc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1800&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "36&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp25&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "14&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "2200&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+22&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Strach", desc: "Sníží jednotce útok o 6 <img class='ikona' src='Jednotky/Images/m2.gif'> na 110 minut." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +13<img class='ikona' src='Jednotky/Images/sh.gif'> na 110 minut." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +13<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 110 minut." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_3x3.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +13<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 3x3 na 110 minut." },
        ],
   
    },
    {
        name: "Skřetí Velitel Zlatý",
        image: "Jednotky/Images Jednotky/icm_48.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orvz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "1.300",
        hodnost9: "13.000",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2200&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "42&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp30&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "20&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "2400&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+24&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem.gif'>", name: "Strach", desc: "Sníží jednotce útok o 7 <img class='ikona' src='Jednotky/Images/m2.gif'> na 110 minut." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +14<img class='ikona' src='Jednotky/Images/sh.gif'> na 110 minut." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_2x2.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +14<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2 na 110 minut." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_add_3x3.gif'>", name: "Chrabrost", desc: "Zvýší obranu o +14<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 3x3 na 110 minut." },
        ],
    
    },
    {
        name: "Skřetí Šaman",
        image: "Jednotky/Images Jednotky/icm_55.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/ors_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>2000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>800&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "21&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp21&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "5&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            strelbaObrana: "6&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "400&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/sp.gif'>", name: "Ohnivá koule", desc: "Jednotka umí seslat ohnivou kouli, poškození se zvyšuje s magickou sílou, a je ovlivněno šťastným zásahem." },
            { cost: "300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add_2x2.gif'>", name: "Šamanský rituál", desc: "Zvýší magickou sílu o +5 <img class='ikona' src='Jednotky/Images/spells_ico.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_def_shoot_rem.gif'>", name: "Neobratnost", desc: "Sníží obranu proti střelám o 14<img class='ikona' src='Jednotky/Images/sh_shot.gif'>. Doba záleží na magické síle jednotky." },
            { cost: "700&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_rem_2x2.gif'>", name: "Strach", desc: "Sníží obranu o 7<img class='ikona' src='Jednotky/Images/sh.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." }, 
        ],
        dodatecneInfo: "Umí obětovat šupiny na oltáři."
    },
    {
        name: "Skřetí Upír",
        image: "Jednotky/Images Jednotky/icm_60.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/orsz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge skreti'>Skřeti</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "40&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "12&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        { cost: "",icon: "", name: "", desc: "Shopnosti této jednotky zatím nejsou dodělány. xxx" },
        ],
        dodatecneInfo: "Vysává energii a život z okolních jednotek."
    },
    {
        name: "Velkej Kňour",
        image: "Jednotky/Images Jednotky/icm_70.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dv_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp8&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Zlatej Kňour",
        image: "Jednotky/Images Jednotky/icm_71.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dvz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp8&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Černej Kňour",
        image: "Jednotky/Images Jednotky/icm_72.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dvc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>350&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "13&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Růžový Kňour",
        image: "Jednotky/Images Jednotky/icm_73.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dvr_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp8&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Růžové Prase",
        image: "Jednotky/Images Jednotky/icm_74.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dmr_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "60",
        hodnost9: "600",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>160&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+18&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Malej Divočák",
        image: "Jednotky/Images Jednotky/icm_75.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>150&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp3&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Zlatej Divočák",
        image: "Jednotky/Images Jednotky/icm_76.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dmz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>150&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp3&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+16&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Černý Divočák",
        image: "Jednotky/Images Jednotky/icm_77.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dmc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>1200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>200&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp5&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+18&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },
    {
        name: "Trpaslík Stavitel",
        image: "Jednotky/Images Jednotky/icm_80.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dws_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge trpaslici'>Trpaslíci</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>800&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "10&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp26&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "8&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "2000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/kl.gif'>", name: "Stavět", desc: "Jednotka umí stavět a opravovat budovy na mapě." },      
        ],

    },
    {
        name: "Trpaslík Obránce",
        image: "Jednotky/Images Jednotky/icm_81.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dwo_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "800",
        hodnost9: "8.000",
        kategorie: "<span class='badge trpaslici'>Trpaslíci</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>900&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp50&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "14&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "800&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Trpasličí krytí", desc: "Zvýší obranu o +4<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },     
        ],

    },
    {
        name: "Trpaslík Střelec",
        image: "Jednotky/Images Jednotky/icm_82.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dwb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge trpaslici'>Trpaslíci</span>",
        stats: {
            energie: "<span class='energie'>1800&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>600&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "14&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "100&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Jenotka může střílet na vzdálenost 1 až 3 pole (podle její hodnosti)." },    
            { cost: "",icon: "<img src='Jednotky/Images/b_def_shoot_add.gif'>", name: "Úhybné manévry", desc: "Zvýší střeleckou obranu +18<img class='ikona' src='Jednotky/Images/sh_shot.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },    
        ],

    },
    {
        name: "Trpaslík Válečník",
        image: "Jednotky/Images Jednotky/icm_83.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dwv_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge trpaslici'>Trpaslíci</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "16&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp30&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "3&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1200&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+20&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_attack_add.gif'>", name: "Trpasličí pivo", desc: "Zvýší útok o +4 <img class='ikona' src='Jednotky/Images/m2.gif'> sám sobě na 20 minut. Cooldown: 2 hodiny." },
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_defense_rem.gif'>", name: "Válečný řev", desc: "Sníží jednotce obranu o 7<img class='ikona' src='Jednotky/Images/sh.gif'> na 20 minut." },    
        ],

    },
    {
        name: "Trpaslík Stařešina",
        image: "Jednotky/Images Jednotky/icm_84.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/dwr_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge trpaslici'>Trpaslíci</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1200&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "28&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp40&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            magickaSila: "7&nbsp<img class='ikona' src='Jednotky/Images/spells_ico.gif'>",
            obranaStrely: "5&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+50&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+3&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "400&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_energy_add_2x2.gif'>", name: "Pochodové písně", desc: "Zvýší přírůstek energie o +10<img class='ikona' src='Jednotky/Images/eng.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },
            { cost: "300&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_add_2x2.gif'>", name: "Trpasličí runy", desc: "Zvýší magickou sílu o +5 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },
            { cost: "900&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_attack_rem_2x2.gif'>", name: "Válečný řev", desc: "Sníží útok o 4<img class='ikona' src='Jednotky/Images/m2.gif'> na ploše 2x2. Doba záleží na magické síle jednotky." },    
        ],

    },
    {
        name: "Bomba",
        image: "Jednotky/Images Jednotky/icm_100.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bo_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>100&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/if.gif'>", name: "Zapálit Bombu!", desc: "Zapálená bomba vybuchne za určitou dobu, které záleží na rychlosti boje mapy. Dosah poškození je 3 políčka na každou stranu, uprostřed je poškození největší." },
        ],
        dodatecneInfo: "Rychlost mapy 1x: Výbuch za 12-24 minut<br>Rychlost mapy 4x: Výbuch za 3-6 minut<br>Rychlost mapy 5x a více: Výbuch za 2 minuty"   
    },
    {
        name: "Bomba Zlatá",
        image: "Jednotky/Images Jednotky/icm_101.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/boz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "",
        stats: {
            energie: "<span class='energie'>1000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>100&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp24&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/if.gif'>", name: "Zapálit Bombu!", desc: "Zapálená bomba vybuchne za určitou dobu, které záleží na rychlosti boje mapy. Dosah poškození je 5 políček na každou stranu, uprostřed je poškození největší." },
        ],
        dodatecneInfo: "Rychlost mapy 1x: Výbuch za 12-24 minut<br>Rychlost mapy 4x: Výbuch za 3-6 minut<br>Rychlost mapy 5x a více: Výbuch za 2 minuty"    
    },
    {
        name: "Bomba Černá",
        image: "Jednotky/Images Jednotky/icm_102.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bo_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>1500&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>100&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "0&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+15&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/if.gif'>", name: "Zapálit Bombu!", desc: "Zapálená bomba vybuchne za určitou dobu, které záleží na rychlosti boje mapy. Dosah poškození je 4 políčka na každou stranu, uprostřed je poškození největší." },
        ],
        dodatecneInfo: "Rychlost mapy 1x: Výbuch za 12-24 minut<br>Rychlost mapy 4x: Výbuch za 3-6 minut<br>Rychlost mapy 5x a více: Výbuch za 2 minuty"   
    },
    {
        name: "Bažinný Dráček",
        image: "Jednotky/Images Jednotky/icm_110.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Rudý Dráček",
        image: "Jednotky/Images Jednotky/icm_111.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "25&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp25&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "1&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "3&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Ledový Dráček",
        image: "Jednotky/Images Jednotky/icm_112.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "30&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp30&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+3&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Skalní Dráček",
        image: "Jednotky/Images Jednotky/icm_113.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "35&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp35&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "3&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+4&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Černý Dráček",
        image: "Jednotky/Images Jednotky/icm_114.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drce_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "40&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp40&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+5&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Zlatý Dráček",
        image: "Jednotky/Images Jednotky/icm_115.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drzl_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "2.575",
        hodnost9: "25.750",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "45&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp45&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "5&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Bažinný Drak",
        image: "Jednotky/Images Jednotky/icm_120.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "75&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp75&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "30&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "5000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Rudý Drak",
        image: "Jednotky/Images Jednotky/icm_121.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvc_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4200&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "80&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp80&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "1&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "35&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "6000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Ledový Drak",
        image: "Jednotky/Images Jednotky/icm_122.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4400&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "85&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp85&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "40&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "7000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Skalní Drak",
        image: "Jednotky/Images Jednotky/icm_123.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "7.800",
        hodnost9: "78.000",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4600&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "90&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp90&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "3&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "45&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "8000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Černý Drak",
        image: "Jednotky/Images Jednotky/icm_124.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvce_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "7.950",
        hodnost9: "79.500",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4800&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "95&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp95&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "50&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "9000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Zlatý Drak",
        image: "Jednotky/Images Jednotky/icm_125.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drvzl_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>6000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>5000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "100&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp100&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "5&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "55&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "10000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+6&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem_2x2.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu o 20 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na ploše 2x2 na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 12 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "Střelecké jednotky na něj mají bonus"
    },
    {
        name: "Dráček Černého Krále",
        image: "Jednotky/Images Jednotky/icm_150.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/drce_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge draci'>Draci</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>2000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "40&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp40&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "1000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+4&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "450&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/ifl.gif'>", name: "Létání", desc: "Jednotka umí létat, každé políčko letu stojí 450 <img class='ikona' src='Jednotky/Images/eng.gif'>." },
            { cost: "200&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",icon: "<img src='Jednotky/Images/b_magpower_rem.gif'>", name: "Dračí pohled", desc: "Sníží magickou sílu jednotky o 12 <img class='ikona' src='Jednotky/Images/spells_ico.gif'> na 20 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b_magic_shield_add.gif'>", name: "Magický štít", desc: "Vytvoří nad sebou magický štít se silou = síla kouzla + 7 <img class='ikona' src='Jednotky/Images/shield_mag.gif'> na 20 minut. Cooldown: 2 hodiny." },    
        ],
        dodatecneInfo: "POZOR: Nejedná se o klasického černého dráčka.<br>Střelecké jednotky na něj mají bonus."
    },
    {
        name: "Elfí vlk",
        image: "Jednotky/Images Jednotky/icm_190.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/pmze_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge zvirata'>Zvířata</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>180&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "11&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp6&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "300&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+40&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            
        ],
    
    },

];
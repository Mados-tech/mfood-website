const appName = "Mfood";
const companyName = "Mados Group";
const languages = [ { name:"English", code: "en" }, { name:"Français", code: "fr" }, { name:"Swahili", code: "sw" } ];

const MenuGrid = (locale, homePath) => {
    return `
<div class="footer-items">
    <div class="footer-block">
        <img id="logo-footer" alt="Mfood Logo" src="./images/mfood_logo.png" />
        <div class="footer-block-menu">
        </div>
    </div>
    <div class="footer-item">
    <div class="footer-item-links">
        <a href="${homePath}adresse">${{
            en:"Features",
            fr:"Fonctionnalités",
            sw:"Vipengele",
        }[locale]}</a>
        <a href="${homePath}adresse">${{
            en:"Pricing",
            fr:"Tarif",
            sw:"Bei",
        }[locale]}</a>
        <a href="${homePath}adresse">${{
            en:"Advantages",
            fr:"Avantages",
            sw:"Faida",
        }[locale]}</a>
    </div>
    </div>
    <div class="footer-item">
        <div class="footer-item-links">
            <a href="${homePath}vision">${{
                en:"Get in touch",
                fr:"Contactez-nous",
                sw:"Wasiliana",
            }[locale]}</a>
            <a href="${homePath}but">${{
                en:"Request a demo",
                fr:"Demander une démo",
                sw:"Omba onyesho",
            }[locale]}</a>
            <a href="${homePath}mission">${{
                en:"Privacy policies",
                fr:"Les politiques de confidentialité",
                sw:"Sera za faragha",
            }[locale]}</a>
        </div>
    </div>
    <div class="footer-item">
    <div class="footer-item-links">
    <a href="${homePath}devenir-membre">${{
        en:"FAQ",
        fr:"FAQ",
        sw:"FAQ",
    }[locale]}</a>
        <a href="${homePath}devenir-membre">${{
            en:"Become a partner",
            fr:"Devenir un partenaire",
            sw:"Kuwa mshirika",
        }[locale]}</a>
        <a href="${homePath}devenir-membre">${{
            en:"Suggest a feature",
            fr:"Suggérer une fonctionnalité",
            sw:"Pendekeza kipengele",
        }[locale]}</a>
    </div>
</div>
    <div class="footer-item">
    <div class="footer-item-links">
        <a href="${homePath}adresse">Google Play</a>
        </div>
    </div>
</div>
    `
}

export const Footer = (locale, homePath) => {
    return `
    ${MenuGrid(locale, homePath)}
    <div class="flex-normal closer">
    © Copyright ${companyName}
    <div class="filter-section">
        <i class="fa fa-globe"></i>
        <select id="lng-changer">
        ${languages.map((e,i)=>{
            const isDefault = e.code === languages.find((element) => element.code === locale).code
            return `<option ${isDefault && "selected = selected"} value=${e.code}>${e.name}</option>`;
        })}
        </select>
    </div>
    </div>
    `
}

export const Title = (locale, homePath) => {
    return `${appName} | ${{
        fr:"Gérez votre hôtel ou restaurant depuis un smartphone",
        en:"Manage your hotel or restaurant from a smartphone",
        sw:"Dhibiti hoteli au mkahawa wako kutoka kwa simu mahiri"
    }[locale]}`;
}

const DownloadNowButton = (locale, homePath) => {
    return `<button>${{
        fr:"Télécharger maintenant",
        en:"Download now",
        sw:"Download sasa"
    }[locale]}</button>`;
}

export const NavBar = (locale, homePath) => {
    return `
    <div>
        <img id="mds-logo" class="nav-img" alt="MadosGroup Logo" src="./images/madosg_group_logo.png" />
        <img class="nav-img" alt="Mfood Logo" src="./images/mfood_logo.png" />
    </div>
    ${DownloadNowButton(locale, homePath)}
    `;
}

export const LandingLeft = (locale, homePath) => {
    return `
    <h1 class="large-title">${appName} ${{
        fr:"vous permet de gérer votre hôtel ou restaurant depuis un smartphone!",
        en:"lets you to manage your hotel or restaurant from a smartphone!",
        sw:"hukuruhusu kudhibiti hoteli au mgahawa wako kutoka kwa simu mahiri!"
    }[locale]}</h1>
    <p class="p-medium">${{
            fr:"Nous croyons que chaque propriétaire d'hôtel ou de restaurant, où qu'il se trouve, mérite un système d'information organisé au sein de son entreprise.",
            en:"We believe that every hotel or restaurant owner, anywhere, deserves an organized information system within their business.",
            sw:"Tunaamini kwamba kila mmiliki wa hoteli au mgahawa, popote pale, anastahili kuwa na mfumo wa taarifa uliopangwa ndani ya biashara yake."
        }[locale]}</p>
    <div class="landing-buttons">
        <button>${{
            en:"Free Download",
            fr:"Téléchargement Gratuit",
            sw:"Upakuaji wa Bure",
        }[locale]}</button>
        <button class="secondary-button">${{
            en:"Request a demo",
            fr:"Demander une démo",
            sw:"Omba onyesho",
        }[locale]}</button>
    </div>
    `;
}

export const RunBusiness = (locale, homePath) => {
    return `
    <p class="feature-carded">${{
        en:"RUN YOUR BUSINESSES WELL",
        fr:"GÉREZ BIEN VOS ENTREPRISES",
        sw:"ENDESHA BIASHARA ZAKO VIZURI",
    }[locale]}</p>
    <h1 class="large-subtitle">${{
        en:"Do you own different hotels or restaurants? Don't worry.",
        fr:"Possédez-vous différents hôtels ou restaurants ? Ne vous inquiètez pas.",
        sw:"Je, unamiliki hoteli au mikahawa tofauti? Usijali.",
    }[locale]}</h1>
    <p>${{
            en:"You may manage the personnel, revenues, rooms, and generate QR codes for your food menus for each of your hotels or restaurants separately.",
            fr:"Vous pouvez gérer le personnel, les revenus, les chambres et générer des codes QR pour vos menus alimentaires pour chacun de vos hôtels ou restaurants séparément.",
            sw:"Unaweza kudhibiti wafanyikazi, mapato, vyumba na kutengeneza misimbo ya QR ya menyu zako za vyakula kwa kila hoteli au mikahawa yako kivyake.",
        }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Different companies",
                    fr:"Différentes entreprises",
                    sw:"Makampuni tofauti",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Staff members",
                    fr:"Employés",
                    sw:"Wafanyakazi",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Revenue overview",
                    fr:"Aperçu des revenus",
                    sw:"Muhtasari wa mapato",
                }[locale]}</p>
            </div>
        </div>
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Generate QR codes",
                    fr:"Générer des codes QR",
                    sw:"Tengeneza Msimbo wa QR",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Add hotel rooms",
                    fr:"Ajouter des chambres d'hôtel",
                    sw:"Ongeza vyumba vya hoteli",
                }[locale]}</p>
            </div>

        </div>
    </div>
    ${DownloadNowButton(locale, homePath)}
    `;
}

export const MultiCurrencies = (locale, homePath) => {
    return `
    <p class="feature-carded">${{
        en:"MULTI CURRENCY",
        fr:"MULTI DEVISE",
        sw:"MULTI CURRENCY",
    }[locale]}</p>
    <h1 class="large-subtitle">${{
        en:"Use different currencies when working in the same hotel or restaurant.",
        fr:"Utilisez des devises différentes lorsque vous travaillez dans le même hôtel ou restaurant.",
        sw:"Tumia sarafu tofauti unapofanya kazi katika hoteli au mkahawa mmoja.",
    }[locale]}</h1>
    <p>${{en:"We enable you to work with several currencies in the same hotel or restaurant so that you can provide a variety of food menus.",
            fr:"Nous vous permettons de travailler avec plusieurs devises dans le même hôtel ou restaurant afin que vous puissiez proposer une variété de menus alimentaires.",
            sw:"Tunakuwezesha kufanya kazi na sarafu kadhaa katika hoteli au mkahawa mmoja ili uweze kutoa menyu mbalimbali za vyakula.",
        }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Add a currency",
                    fr:"Ajouter une devise",
                    sw:"Ongeza sarafu",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Using a common currency throughout all enterprises",
                    fr:"Utiliser une monnaie commune à toutes les entreprises",
                    sw:"Kutumia sarafu ya pamoja katika biashara zote",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Link a currency to a food Menu",
                    fr:"Associez une devise à un menu alimentaire",
                    sw:"Unganisha sarafu kwenye Menyu ya chakula",
                }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
                    en:"Hotel room prices using new currencies",
                    fr:"Prix ​​des chambres d'hôtel en utilisant de nouvelles devises",
                    sw:"Bei za vyumba vya hoteli kwa kutumia sarafu mpya",
                }[locale]}</p>
            </div>
        </div>
    </div>
    ${DownloadNowButton(locale, homePath)}
    `;
}

export const FoodAndMenu = (locale, homePath) => {
    return `
    <p class="feature-carded">${{
        en:"FOODS & MENU",
        fr:"NOURRITURE ET MENU",
        sw:"VYAKULA NA MENU",
    }[locale]}</p>
    <h1 class="large-subtitle">${{
        en:"Manage items that you use in all of your businesses and that you offer on the menu.",
        fr:"Gérez les articles que vous utilisez dans tous vos commerces et que vous proposez au menu.",
        sw:"Dhibiti bidhaa unazotumia katika biashara zako zote na unazotoa kwenye menyu.",
    }[locale]}</h1>
    <p>${{
        en:"Add products, classify them, create a menu, and then add the products you provide to it.",
        fr:"Ajoutez des produits, classez-les, créez un menu, puis ajoutez-y les produits que vous fournissez.",
        sw:"Ongeza bidhaa, ziainishe, unda menyu, na kisha uongeze bidhaa unazotoa kwake.",
    }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
        en:"Add a food",
        fr:"Ajouter un repas",
        sw:"Ongeza chakula",
    }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
        en:"Add a food category",
        fr:"Ajouter une catégorie de repas",
        sw:"Ongeza kategoria ya chakula",
    }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
        en:"Create a Menu",
        fr:"Créer un menu",
        sw:"Unda Menyu",
    }[locale]}</p>
            </div>
                        <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
        en:"Add food to the Menu",
        fr:"Ajouter des aliments au menu",
        sw:"Ongeza chakula kwenye Menyu",
    }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
        en:"Set the food price",
        fr:"Fixer le prix des repas",
        sw:"Weka bei ya chakula",
    }[locale]}</p>
            </div>
        </div>
    </div>
    ${DownloadNowButton(locale, homePath)}
    `;
}

export const PricingSection = (locale, homePath) => {
    return `
    <div class="left-side">
    <h1 class="large-title">${{
        en:"The right price for you !",
        fr:"Le juste prix pour vous !",
        sw:"Bei inayofaa kwako!",
    }[locale]}</h1>
    <p class="p-medium text-align-justify">${{
            en:"We believe that every hotel or restaurant owner, wherever located, deserves an organized information system within their business that provides security and accessibility.",
            fr:"Nous croyons que chaque propriétaire d'hôtel ou de restaurant, où qu'il se trouve, mérite un système d'information organisé au sein de son entreprise qui offre sécurité et accessibilité.",
            sw:"Tunaamini kwamba kila mmiliki wa hoteli au mkahawa, popote alipo, anastahili kuwa na mfumo wa taarifa uliopangwa ndani ya biashara yake ambao hutoa usalama na ufikiaji.",
        }[locale]}</p>
        ${DownloadNowButton(locale, homePath)}
</div>
<div class="right-side">
    <div class="bordered-section pricing-cards">
        <div class="bordered-item p-card">
            <div class="bordered-item-no">${{
                en:"STARTER",
                fr:"ENTRÉE",
                sw:"ANZA",
            }[locale]}</div>
            <h1 class="large-title">$0</h1>
            <div class="checkable-features">
                <div class="flex-normal">
                    <i class="fa fa-square-check"></i>
                    <p>${{
                        en:"30 days trial",
                        fr:"30 jours d'essai",
                        sw:"Jaribio la siku 30",
                    }[locale]}</p>
                </div>
                <div class="flex-normal">
                    <i class="fa fa-square-check"></i>
                    <p>${{
                        en:"One-time",
                        fr:"Une fois",
                        sw:"Mara moja",
                    }[locale]}</p>
                </div>
            </div>
        </div>
        <div class="bordered-item p-card">
            <div class="bordered-item-no">PRO</div>
            <h1 class="large-title">$120</h1>
            <div class="checkable-features">
                <div class="flex-normal">
                    <i class="fa fa-square-check"></i>
                    <p>${{
                        en:"12 months",
                        fr:"12 mois",
                        sw:"Miezi 12",
                    }[locale]}</p>
                </div>
            </div>
        </div>
    </div>
</div>    
    `;
}

export const AdvantagesSection = (locale, homePath) => {
    return `
    <div class="when-us-header">
    <h1 class="large-title">${{
        en:"What advantages does Mfood offer your hotel or restaurant ?",
        fr:"Quels avantages Mfood offre-t-il à votre hôtel ou restaurant ?",
        sw:"Je, Mfood inatoa faida gani kwa hoteli au mgahawa wako?",
    }[locale]}</h1>
    <p class="large-subtitle">${{
            en:"We took the time needed to create a system that will let you communicate with your hotel or restaurant management from any location.",
            fr:"Nous avons pris le temps nécessaire pour créer un système qui vous permettra de communiquer avec la direction de votre hôtel ou restaurant depuis n'importe quel endroit.",
            sw:"Tulichukua muda unaohitajika kuunda mfumo ambao utakuruhusu kuwasiliana na wasimamizi wa hoteli au mikahawa yako kutoka eneo lolote.",
        }[locale]}</p>
</div>
<div class="when-items">
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Availability",
            fr:"Disponibilité",
            sw:"Upatikanaji",
        }[locale]}</div>
        <p>${{
                en:"With the help of our skilled IT specialists, we ensure that the system is continously accessible to you around-the-clock",
                fr:"Avec l'aide de nos spécialistes informatiques qualifiés, nous veillons à ce que le système vous soit accessible en permanence 24 heures sur 24.",
                sw:"Kwa usaidizi wa wataalamu wetu wenye ujuzi wa TEHAMA, tunahakikisha kuwa mfumo unapatikana kwako kila saa.",
            }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Operational Management",
            fr:"Gestion opérationnelle",
            sw:"Usimamizi wa Uendeshaji",
        }[locale]}</div>
        <p>${{
                en:"No IT infrastructure management, installation or updates required. We handle everything while you provide the finest service to your clients.",
                fr:"Aucune gestion, installation ou mise à jour de l'infrastructure informatique requise. Nous nous occupons de tout pendant que vous fournissez le meilleur service à vos clients.",
                sw:"Hakuna usimamizi wa miundombinu ya IT, usakinishaji au sasisho zinazohitajika. Tunashughulikia kila kitu huku ukitoa huduma bora zaidi kwa wateja wako.",
            }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Scalability",
            fr:"Évolutivité",
            sw:"Scalability",
        }[locale]}</div>
        <p>${{
                en:"We monitor everything that happens, and of course, with the aid of your feedback, we continue to improve the services with fresh updates.",
                fr:"Nous surveillons tout ce qui se passe et, bien sûr, grâce à vos commentaires, nous continuons d'améliorer les services avec de nouvelles mises à jour.",
                sw:"Tunafuatilia kila kitu kinachotokea, na bila shaka, kwa msaada wa maoni yako, tunaendelea kuboresha huduma kwa masasisho mapya.",
            }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Data Storage",
            fr:"Stockage de données",
            sw:"Hifadhi ya Data",
        }[locale]}</div>
        <p>${{
            en:"Leave the worries about data security and storage to us. We will keep your data in the cloud.",
            fr:"Laissez-nous nous soucier de la sécurité et du stockage des données. Nous conserverons vos données dans le cloud.",
            sw:"Acha wasiwasi kuhusu usalama na hifadhi ya data kwetu. Tutaweka data yako kwenye wingu.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Increase Security",
            fr:"Augmenter la sécurité",
            sw:"Kuongeza Usalama",
        }[locale]}</div>
        <p>${{
                en:"We continually make significant investments in security knowledge and technology as the system's maintainer.",
                fr:"Nous réalisons continuellement des investissements importants dans les connaissances et la technologie en matière de sécurité en tant que mainteneur du système.",
                sw:"Tunaweka uwekezaji mkubwa kila mara katika maarifa ya usalama na teknolojia kama wasimamizi wa mfumo.",
            }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en:"Analytics",
            fr:"Analytique",
            sw:"Uchanganuzi",
        }[locale]}</div>
        <p>${{
                en:"We keep an eye on the system and submit faults using our AI analysis techniques so that we can make it better.",
                fr:"Nous gardons un œil sur le système et soumettons les défauts à l'aide de nos techniques d'analyse par IA afin de pouvoir l'améliorer.",
                sw:"Tunaweka jicho kwenye mfumo na kuwasilisha makosa kwa kutumia mbinu zetu za uchambuzi wa AI ili tuweze kuuboresha zaidi.",
            }[locale]}</p>
    </div>
</div> 
    `;
}

const appName = "Mfood";
const companyName = "Mados Group";
const languages = [{ name: "English", code: "en" }, { name: "Français", code: "fr" }, { name: "Swahili", code: "sw" }];

const MenuGrid = (locale, homePath) => {
    return `
<div class="footer-items">
    <a href="${homePath}" class="footer-block">
        <img id="logo-footer" alt="Mfood Logo" src="${homePath}images/mfood_logo.png" />
        <div class="footer-block-menu">
        </div>
    </a>
    <div class="footer-item">
    <div class="footer-item-links">
        <a href="${homePath}features">${{
            en: "Features",
            fr: "Fonctionnalités",
            sw: "Vipengele",
        }[locale]}</a>
        <a href="${homePath}pricing">${{
            en: "Pricing",
            fr: "Tarif",
            sw: "Bei",
        }[locale]}</a>
        <a href="${homePath}advantages">${{
            en: "Advantages",
            fr: "Avantages",
            sw: "Faida",
        }[locale]}</a>
    </div>
    </div>
    <div class="footer-item">
        <div class="footer-item-links">
            <a href="${homePath}">${{
            en: "Get in touch",
            fr: "Contactez-nous",
            sw: "Wasiliana",
        }[locale]}</a>
            <a href="${homePath}privacy">${{
            en: "Privacy policies",
            fr: "Les politiques de confidentialité",
            sw: "Sera za faragha",
        }[locale]}</a>
        <a href="${homePath}terms">${{
            en: "Terms and conditions",
            fr: "Termes et conditions",
            sw: "Sheria na Masharti",
        }[locale]}</a>
        </div>
    </div>
    <div class="footer-item">
    <div class="footer-item-links">
    <a href="${homePath}">${{
            en: "FAQ",
            fr: "FAQ",
            sw: "FAQ",
        }[locale]}</a>
        <a href="${homePath}">${{
            en: "Become a partner",
            fr: "Devenir un partenaire",
            sw: "Kuwa mshirika",
        }[locale]}</a>
        <a href="${homePath}">${{
            en: "Suggest a feature",
            fr: "Suggérer une fonctionnalité",
            sw: "Pendekeza kipengele",
        }[locale]}</a>
    </div>
</div>
    <div class="footer-item">
    <div class="footer-item-links">
    <a href="${homePath}">${{
            en: "Request a demo",
            fr: "Demander une démo",
            sw: "Omba onyesho",
        }[locale]}</a>
        <a href="${homePath}">${{
            fr: "Télécharger maintenant",
            en: "Download now",
            sw: "Download sasa"
        }[locale]}</a>
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
        ${languages.map((e, i) => {
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
        fr: "Gérez votre hôtel ou restaurant depuis un smartphone",
        en: "Manage your hotel or restaurant from a smartphone",
        sw: "Dhibiti hoteli au mkahawa wako kutoka kwa simu mahiri"
    }[locale]}`;
}

const DownloadNowButton = (locale, homePath) => {
    return `<button>${{
        fr: "Télécharger maintenant",
        en: "Download now",
        sw: "Download sasa"
    }[locale]}</button>`;
}

export const NavBar = (locale, homePath) => {
    return `
    <div>
        <img id="mds-logo" class="nav-img" alt="MadosGroup Logo" src="${homePath}images/madosg_group_logo.png" />
        <a href="${homePath}"><img class="nav-img" alt="Mfood Logo" src="${homePath}images/mfood_logo.png" /></a>
    </div>
    ${DownloadNowButton(locale, homePath)}
    `;
}

export const LandingLeft = (locale, homePath) => {
    return `
    <h1 class="large-title">${appName} ${{
            fr: "vous permet de gérer votre hôtel ou restaurant depuis un smartphone!",
            en: "lets you to manage your hotel or restaurant from a smartphone!",
            sw: "hukuruhusu kudhibiti hoteli au mgahawa wako kutoka kwa simu mahiri!"
        }[locale]}</h1>
    <p class="p-medium">${{
            fr: "Nous croyons que chaque propriétaire d'hôtel ou de restaurant, où qu'il se trouve, mérite un système d'information organisé au sein de son entreprise.",
            en: "We believe that every hotel or restaurant owner, anywhere, deserves an organized information system within their business.",
            sw: "Tunaamini kwamba kila mmiliki wa hoteli au mgahawa, popote pale, anastahili kuwa na mfumo wa taarifa uliopangwa ndani ya biashara yake."
        }[locale]}</p>
    <div class="landing-buttons">
        <button>${{
            en: "Free Download",
            fr: "Téléchargement Gratuit",
            sw: "Upakuaji wa Bure",
        }[locale]}</button>
        <button class="secondary-button">${{
            en: "Request a demo",
            fr: "Demander une démo",
            sw: "Omba onyesho",
        }[locale]}</button>
    </div>
    `;
}

export const RunBusiness = (locale, homePath) => {
    return `
    <p class="feature-carded">${{
            en: "RUN YOUR BUSINESSES WELL",
            fr: "GÉREZ BIEN VOS ENTREPRISES",
            sw: "ENDESHA BIASHARA ZAKO VIZURI",
        }[locale]}</p>
    <h1 class="large-subtitle">${{
            en: "Do you own different hotels or restaurants? Don't worry.",
            fr: "Possédez-vous différents hôtels ou restaurants ? Ne vous inquiètez pas.",
            sw: "Je, unamiliki hoteli au mikahawa tofauti? Usijali.",
        }[locale]}</h1>
    <p>${{
            en: "You may manage the personnel, revenues, rooms, and generate QR codes for your food menus for each of your hotels or restaurants separately.",
            fr: "Vous pouvez gérer le personnel, les revenus, les chambres et générer des codes QR pour vos menus alimentaires pour chacun de vos hôtels ou restaurants séparément.",
            sw: "Unaweza kudhibiti wafanyikazi, mapato, vyumba na kutengeneza misimbo ya QR ya menyu zako za vyakula kwa kila hoteli au mikahawa yako kivyake.",
        }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Different companies",
            fr: "Différentes entreprises",
            sw: "Makampuni tofauti",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Staff members",
            fr: "Employés",
            sw: "Wafanyakazi",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Revenue overview",
            fr: "Aperçu des revenus",
            sw: "Muhtasari wa mapato",
        }[locale]}</p>
            </div>
        </div>
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Generate QR codes",
            fr: "Générer des codes QR",
            sw: "Tengeneza Msimbo wa QR",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Add hotel rooms",
            fr: "Ajouter des chambres d'hôtel",
            sw: "Ongeza vyumba vya hoteli",
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
            en: "MULTI CURRENCY",
            fr: "MULTI DEVISE",
            sw: "MULTI CURRENCY",
        }[locale]}</p>
    <h1 class="large-subtitle">${{
            en: "Use different currencies when working in the same hotel or restaurant.",
            fr: "Utilisez des devises différentes lorsque vous travaillez dans le même hôtel ou restaurant.",
            sw: "Tumia sarafu tofauti unapofanya kazi katika hoteli au mkahawa mmoja.",
        }[locale]}</h1>
    <p>${{
            en: "We enable you to work with several currencies in the same hotel or restaurant so that you can provide a variety of food menus.",
            fr: "Nous vous permettons de travailler avec plusieurs devises dans le même hôtel ou restaurant afin que vous puissiez proposer une variété de menus alimentaires.",
            sw: "Tunakuwezesha kufanya kazi na sarafu kadhaa katika hoteli au mkahawa mmoja ili uweze kutoa menyu mbalimbali za vyakula.",
        }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Add a currency",
            fr: "Ajouter une devise",
            sw: "Ongeza sarafu",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Using a common currency throughout all enterprises",
            fr: "Utiliser une monnaie commune à toutes les entreprises",
            sw: "Kutumia sarafu ya pamoja katika biashara zote",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Link a currency to a food Menu",
            fr: "Associez une devise à un menu alimentaire",
            sw: "Unganisha sarafu kwenye Menyu ya chakula",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Hotel room prices using new currencies",
            fr: "Prix ​​des chambres d'hôtel en utilisant de nouvelles devises",
            sw: "Bei za vyumba vya hoteli kwa kutumia sarafu mpya",
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
            en: "FOODS & MENU",
            fr: "NOURRITURE ET MENU",
            sw: "VYAKULA NA MENU",
        }[locale]}</p>
    <h1 class="large-subtitle">${{
            en: "Manage items that you use in all of your businesses and that you offer on the menu.",
            fr: "Gérez les articles que vous utilisez dans tous vos commerces et que vous proposez au menu.",
            sw: "Dhibiti bidhaa unazotumia katika biashara zako zote na unazotoa kwenye menyu.",
        }[locale]}</h1>
    <p>${{
            en: "Add products, classify them, create a menu, and then add the products you provide to it.",
            fr: "Ajoutez des produits, classez-les, créez un menu, puis ajoutez-y les produits que vous fournissez.",
            sw: "Ongeza bidhaa, ziainishe, unda menyu, na kisha uongeze bidhaa unazotoa kwake.",
        }[locale]}</p>
    <div class="divider"></div>
    <div class="flex-normal f-n-start">
        <div class="checkable-features">
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Add a food",
            fr: "Ajouter un repas",
            sw: "Ongeza chakula",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Add a food category",
            fr: "Ajouter une catégorie de repas",
            sw: "Ongeza kategoria ya chakula",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Create a Menu",
            fr: "Créer un menu",
            sw: "Unda Menyu",
        }[locale]}</p>
            </div>
                        <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Add food to the Menu",
            fr: "Ajouter des aliments au menu",
            sw: "Ongeza chakula kwenye Menyu",
        }[locale]}</p>
            </div>
            <div class="flex-normal">
                <i class="fa fa-square-check"></i>
                <p>${{
            en: "Set the food price",
            fr: "Fixer le prix des repas",
            sw: "Weka bei ya chakula",
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
            en: "The right price for you !",
            fr: "Le juste prix pour vous !",
            sw: "Bei inayofaa kwako!",
        }[locale]}</h1>
    <p class="p-medium text-align-justify">${{
            en: "We believe that every hotel or restaurant owner, wherever located, deserves an organized information system within their business that provides security and accessibility.",
            fr: "Nous croyons que chaque propriétaire d'hôtel ou de restaurant, où qu'il se trouve, mérite un système d'information organisé au sein de son entreprise qui offre sécurité et accessibilité.",
            sw: "Tunaamini kwamba kila mmiliki wa hoteli au mkahawa, popote alipo, anastahili kuwa na mfumo wa taarifa uliopangwa ndani ya biashara yake ambao hutoa usalama na ufikiaji.",
        }[locale]}</p>
        ${DownloadNowButton(locale, homePath)}
</div>
<div class="right-side">
    <div class="bordered-section pricing-cards">
        <div class="bordered-item p-card">
            <div class="bordered-item-no">${{
            en: "STARTER",
            fr: "ENTRÉE",
            sw: "ANZA",
        }[locale]}</div>
            <h1 class="large-title">$0</h1>
            <div class="checkable-features">
                <div class="flex-normal">
                    <i class="fa fa-square-check"></i>
                    <p>${{
            en: "30 days trial",
            fr: "30 jours d'essai",
            sw: "Jaribio la siku 30",
        }[locale]}</p>
                </div>
                <div class="flex-normal">
                    <i class="fa fa-square-check"></i>
                    <p>${{
            en: "One-time",
            fr: "Une fois",
            sw: "Mara moja",
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
            en: "12 months",
            fr: "12 mois",
            sw: "Miezi 12",
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
            en: "What advantages does Mfood offer your hotel or restaurant ?",
            fr: "Quels avantages Mfood offre-t-il à votre hôtel ou restaurant ?",
            sw: "Je, Mfood inatoa faida gani kwa hoteli au mgahawa wako?",
        }[locale]}</h1>
    <p class="large-subtitle">${{
            en: "We took the time needed to create a system that will let you communicate with your hotel or restaurant management from any location.",
            fr: "Nous avons pris le temps nécessaire pour créer un système qui vous permettra de communiquer avec la direction de votre hôtel ou restaurant depuis n'importe quel endroit.",
            sw: "Tulichukua muda unaohitajika kuunda mfumo ambao utakuruhusu kuwasiliana na wasimamizi wa hoteli au mikahawa yako kutoka eneo lolote.",
        }[locale]}</p>
</div>
<div class="when-items">
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Availability",
            fr: "Disponibilité",
            sw: "Upatikanaji",
        }[locale]}</div>
        <p>${{
            en: "With the help of our skilled IT specialists, we ensure that the system is continously accessible to you around-the-clock",
            fr: "Avec l'aide de nos spécialistes informatiques qualifiés, nous veillons à ce que le système vous soit accessible en permanence 24 heures sur 24.",
            sw: "Kwa usaidizi wa wataalamu wetu wenye ujuzi wa TEHAMA, tunahakikisha kuwa mfumo unapatikana kwako kila saa.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Operational Management",
            fr: "Gestion opérationnelle",
            sw: "Usimamizi wa Uendeshaji",
        }[locale]}</div>
        <p>${{
            en: "No IT infrastructure management, installation or updates required. We handle everything while you provide the finest service to your clients.",
            fr: "Aucune gestion, installation ou mise à jour de l'infrastructure informatique requise. Nous nous occupons de tout pendant que vous fournissez le meilleur service à vos clients.",
            sw: "Hakuna usimamizi wa miundombinu ya IT, usakinishaji au sasisho zinazohitajika. Tunashughulikia kila kitu huku ukitoa huduma bora zaidi kwa wateja wako.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Scalability",
            fr: "Évolutivité",
            sw: "Scalability",
        }[locale]}</div>
        <p>${{
            en: "We monitor everything that happens, and of course, with the aid of your feedback, we continue to improve the services with fresh updates.",
            fr: "Nous surveillons tout ce qui se passe et, bien sûr, grâce à vos commentaires, nous continuons d'améliorer les services avec de nouvelles mises à jour.",
            sw: "Tunafuatilia kila kitu kinachotokea, na bila shaka, kwa msaada wa maoni yako, tunaendelea kuboresha huduma kwa masasisho mapya.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Data Storage",
            fr: "Stockage de données",
            sw: "Hifadhi ya Data",
        }[locale]}</div>
        <p>${{
            en: "Leave the worries about data security and storage to us. We will keep your data in the cloud.",
            fr: "Laissez-nous nous soucier de la sécurité et du stockage des données. Nous conserverons vos données dans le cloud.",
            sw: "Acha wasiwasi kuhusu usalama na hifadhi ya data kwetu. Tutaweka data yako kwenye wingu.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Increase Security",
            fr: "Augmenter la sécurité",
            sw: "Kuongeza Usalama",
        }[locale]}</div>
        <p>${{
            en: "We continually make significant investments in security knowledge and technology as the system's maintainer.",
            fr: "Nous réalisons continuellement des investissements importants dans les connaissances et la technologie en matière de sécurité en tant que mainteneur du système.",
            sw: "Tunaweka uwekezaji mkubwa kila mara katika maarifa ya usalama na teknolojia kama wasimamizi wa mfumo.",
        }[locale]}</p>
    </div>
    <div class="bordered-item">
        <div class="bordered-item-no">${{
            en: "Analytics",
            fr: "Analytique",
            sw: "Uchanganuzi",
        }[locale]}</div>
        <p>${{
            en: "We keep an eye on the system and submit faults using our AI analysis techniques so that we can make it better.",
            fr: "Nous gardons un œil sur le système et soumettons les défauts à l'aide de nos techniques d'analyse par IA afin de pouvoir l'améliorer.",
            sw: "Tunaweka jicho kwenye mfumo na kuwasilisha makosa kwa kutumia mbinu zetu za uchambuzi wa AI ili tuweze kuuboresha zaidi.",
        }[locale]}</p>
    </div>
</div> 
    `;
}

export const PrivacyPolicy = (locale, homePath) => {
    return `
${{
            en: `
    <h1>Privacy Policy</h1>
    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
    </p>
    <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
        collection and use of information in accordance with this Privacy Policy.</p>
    <h1>Interpretation and Definitions</h1>
    <h2>Interpretation</h2>
    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.
        The following definitions shall have the same meaning regardless of whether they appear in singular or in
        plural.</p>
    <h2>Definitions</h2>
    <p>For the purposes of this Privacy Policy:</p>
    <ul>
        <li>
            <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our
                Service.</p>
        </li>
        <li>
            <p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control
                with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of directors or other managing authority.
            </p>
        </li>
        <li>
            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;,
                &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Mados Group, Rez-de-chaussée, Bureau
                n° 29, Hôtel de ville de Bujumbura, 1, Av. de l'Université, Bujumbura.</p>
        </li>
        <li>
            <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other
                device by a website, containing the details of Your browsing history on that website among its many
                uses.</p>
        </li>
        <li>
            <p><strong>Country</strong> refers to: Burundi</p>
        </li>
        <li>
            <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone
                or a digital tablet.</p>
        </li>
        <li>
            <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable
                individual.</p>
        </li>
        <li>
            <p><strong>Service</strong> refers to the Website.</p>
        </li>
        <li>
            <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf
                of the Company. It refers to third-party companies or individuals employed by the Company to
                facilitate the Service, to provide the Service on behalf of the Company, to perform services related
                to the Service or to assist the Company in analyzing how the Service is used.</p>
        </li>
        <li>
            <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of
                the Service or from the Service infrastructure itself (for example, the duration of a page visit).
            </p>
        </li>
        <li>
            <p><strong>Website</strong> refers to Mfood, accessible from <a href="https://mfood.madosgroup.com"
                    rel="external nofollow noopener" target="_blank">https://mfood.madosgroup.com</a></p>
        </li>
        <li>
            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other
                legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </p>
        </li>
    </ul>
    <h1>Collecting and Using Your Personal Data</h1>
    <h2>Types of Data Collected</h2>
    <h3>Personal Data</h3>
    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that
        can be used to contact or identify You. Personally identifiable information may include, but is not limited
        to:</p>
    <ul>
        <li>
            <p>Email address</p>
        </li>
        <li>
            <p>Usage Data</p>
        </li>
    </ul>
    <h3>Usage Data</h3>
    <p>Usage Data is collected automatically when using the Service.</p>
    <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser
        type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time
        spent on those pages, unique device identifiers and other diagnostic data.</p>
    <p>When You access the Service by or through a mobile device, We may collect certain information automatically,
        including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP
        address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use,
        unique device identifiers and other diagnostic data.</p>
    <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the
        Service by or through a mobile device.</p>
    <h3>Tracking Technologies and Cookies</h3>
    <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
        information. Tracking technologies used are beacons, tags, and scripts to collect and track information and
        to improve and analyze Our Service. The technologies We use may include:</p>
    <ul>
        <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can
            instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You
            do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted
            Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
        <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small
            electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel
            gifs) that permit the Company, for example, to count users who have visited those pages or opened an
            email and for other related website statistics (for example, recording the popularity of a certain
            section and verifying system and server integrity).</li>
    </ul>
    <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your
        personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You
        close Your web browser. Learn more about cookies on the <a
            href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
            target="_blank">Free Privacy Policy website</a> article.</p>
    <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
    <ul>
        <li>
            <p><strong>Necessary / Essential Cookies</strong></p>
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies are essential to provide You with services available through the Website and
                to enable You to use some of its features. They help to authenticate users and prevent fraudulent
                use of user accounts. Without these Cookies, the services that You have asked for cannot be
                provided, and We only use these Cookies to provide You with those services.</p>
        </li>
        <li>
            <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
        </li>
        <li>
            <p><strong>Functionality Cookies</strong></p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                remembering your login details or language preference. The purpose of these Cookies is to provide
                You with a more personal experience and to avoid You having to re-enter your preferences every time
                You use the Website.</p>
        </li>
    </ul>
    <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
        Policy or the Cookies section of our Privacy Policy.</p>
    <h2>Use of Your Personal Data</h2>
    <p>The Company may use Personal Data for the following purposes:</p>
    <ul>
        <li>
            <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
            </p>
        </li>
        <li>
            <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The
                Personal Data You provide can give You access to different functionalities of the Service that are
                available to You as a registered user.</p>
        </li>
        <li>
            <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of
                the purchase contract for the products, items or services You have purchased or of any other
                contract with Us through the Service.</p>
        </li>
        <li>
            <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent
                forms of electronic communication, such as a mobile application's push notifications regarding
                updates or informative communications related to the functionalities, products or contracted
                services, including the security updates, when necessary or reasonable for their implementation.</p>
        </li>
        <li>
            <p><strong>To provide You</strong> with news, special offers and general information about other goods,
                services and events which we offer that are similar to those that you have already purchased or
                enquired about unless You have opted not to receive such information.</p>
        </li>
        <li>
            <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
        </li>
        <li>
            <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of
                Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding,
                in which Personal Data held by Us about our Service users is among the assets transferred.</p>
        </li>
        <li>
            <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data
                analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services, marketing and your experience.</p>
        </li>
    </ul>
    <p>We may share Your personal information in the following situations:</p>
    <ul>
        <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers
            to monitor and analyze the use of our Service, to contact You.</li>
        <li><strong>For business transfers:</strong> We may share or transfer Your personal information in
            connection with, or during negotiations of, any merger, sale of Company assets, financing, or
            acquisition of all or a portion of Our business to another company.</li>
        <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we
            will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and
            any other subsidiaries, joint venture partners or other companies that We control or that are under
            common control with Us.</li>
        <li><strong>With business partners:</strong> We may share Your information with Our business partners to
            offer You certain products, services or promotions.</li>
        <li><strong>With other users:</strong> when You share personal information or otherwise interact in the
            public areas with other users, such information may be viewed by all users and may be publicly
            distributed outside.</li>
        <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with
            Your consent.</li>
    </ul>
    <h2>Retention of Your Personal Data</h2>
    <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
        Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
        disputes, and enforce our legal agreements and policies.</p>
    <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for
        a shorter period of time, except when this data is used to strengthen the security or to improve the
        functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
    <h2>Transfer of Your Personal Data</h2>
    <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other
        places where the parties involved in the processing are located. It means that this information may be
        transferred to — and maintained on — computers located outside of Your state, province, country or other
        governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
    <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement
        to that transfer.</p>
    <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
        accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization
        or a country unless there are adequate controls in place including the security of Your data and other
        personal information.</p>
    <h2>Delete Your Personal Data</h2>
    <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected
        about You.</p>
    <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
    <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one,
        and visiting the account settings section that allows you to manage Your personal information. You may also
        contact Us to request access to, correct, or delete any personal information that You have provided to Us.
    </p>
    <p>Please note, however, that We may need to retain certain information when we have a legal obligation or
        lawful basis to do so.</p>
    <h2>Disclosure of Your Personal Data</h2>
    <h3>Business Transactions</h3>
    <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We
        will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy
        Policy.</p>
    <h3>Law enforcement</h3>
    <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so
        by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
    <h3>Other legal requirements</h3>
    <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
    <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
    </ul>
    <h2>Security of Your Personal Data</h2>
    <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the
        Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable
        means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
    <h1>Children's Privacy</h1>
    <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
        information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your
        child has provided Us with Personal Data, please contact Us. If We become aware that We have collected
        Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to
        remove that information from Our servers.</p>
    <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires
        consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
    <h1>Links to Other Websites</h1>
    <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party
        link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy
        of every site You visit.</p>
    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any
        third party sites or services.</p>
    <h1>Changes to this Privacy Policy</h1>
    <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new
        Privacy Policy on this page.</p>
    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
        are effective when they are posted on this page.</p>
    <h1>Contact Us</h1>
    <p>If you have any questions about this Privacy Policy, You can contact us:</p>
    <ul>
        <li>
            <p>By email: info@madosgroup.com</p>
        </li>
        <li>
            <p>By visiting this page on our website: <a href="https://madosgroup.com"
                    rel="external nofollow noopener" target="_blank">https://madosgroup.com</a></p>
        </li>
        <li>
            <p>By phone number: +257 69 37 85 07</p>
        </li>
    </ul>
    `,
            fr: `
            <h1>Politique de confidentialité</h1>
            <p>Cette politique de confidentialité décrit nos politiques et procédures sur la collecte, l'utilisation et la divulgation de vos
                informations lorsque vous utilisez le service et vous informe de vos droits à la vie privée et de la manière dont la loi vous protège.
            </p>
            <p>Nous utilisons vos données personnelles pour fournir et améliorer le service. En utilisant le Service, Vous acceptez les
                collecte et utilisation des informations conformément à la présente politique de confidentialité.</p>
            <h1>Interprétation et définitions</h1>
            <h2>Interprétation</h2>
            <p>Les mots dont la lettre initiale est en majuscule ont des significations définies dans les conditions suivantes.
                Les définitions suivantes auront le même sens qu'elles apparaissent au singulier ou au
                pluriel.</p>
            <h2>Définitions</h2>
            <p>Aux fins de la présente politique de confidentialité :</p>
            <ul>
                <li>
                    <p><strong>Compte</strong> désigne un compte unique créé pour vous permettre d'accéder à notre service ou à des parties de notre
                        Services.</p>
                </li>
                <li>
                    <p><strong>Affilié</strong> désigne une entité qui contrôle, est contrôlée par ou est sous contrôle commun
                        avec une partie, où &quot;contrôle&quot; désigne la propriété de 50 % ou plus des actions, des capitaux propres
                        d'intérêts ou d'autres titres habilités à voter pour l'élection des administrateurs ou d'une autre autorité de gestion.
                    </p>
                </li>
                <li>
                    <p><strong>Société</strong> (ci-après dénommée "la Société", "Nous",
                        &quot;Nous&quot; ou &quot;Notre&quot; dans la présente Entente) fait référence au Groupe Mados, Rez-de-chaussée, Bureau
                        n° 29, Hôtel de ville de Bujumbura, 1, Av. de l'Université, Bujumbura.</p>
                </li>
                <li>
            <p><strong>Les cookies</strong> sont de petits fichiers qui sont placés sur votre ordinateur, appareil mobile ou tout autre
                appareil par un site Web, contenant les détails de votre historique de navigation sur ce site Web parmi ses nombreux
                utilise.</p>
        </li>
        <li>
            <p><strong>Pays</strong> fait référence à : Burundi</p>
        </li>
        <li>
            <p><strong>Appareil</strong> désigne tout appareil pouvant accéder au Service, tel qu'un ordinateur, un téléphone portable
                ou une tablette numérique.</p>
        </li>
        <li>
            <p><strong>Les données personnelles</strong> sont toutes les informations relatives à une personne identifiée ou identifiable
                individuel.</p>
        </li>
        <li>
            <p><strong>Service</strong> fait référence au site Web.</p>
        </li>
        <li>
            <p><strong>Prestataire de services</strong> désigne toute personne physique ou morale qui traite les données pour le compte
                de la compagnie. Il fait référence à des sociétés tierces ou à des personnes employées par la Société pour
                faciliter le Service, fournir le Service au nom de la Société, effectuer des services liés
                au Service ou pour aider la Société à analyser l'utilisation du Service.</p>
        </li>
        <li>
             <p><strong>Données d'utilisation</strong> fait référence aux données collectées automatiquement, soit générées par l'utilisation de
                 du Service ou de l'infrastructure du Service elle-même (par exemple, la durée d'une visite de page).
             </p>
         </li>
         <li>
             <p><strong>Site Web</strong> fait référence à Mfood, accessible depuis <a href="https://mfood.madosgroup.com"
                     rel="external nofollow noopener" target="_blank">https://mfood.madosgroup.com</a></p>
         </li>
         <li>
             <p><strong>Vous</strong> désigne la personne accédant ou utilisant le Service, ou la société, ou autre
                 l'entité juridique au nom de laquelle cette personne accède ou utilise le Service, selon le cas.
             </p>
         </li>
         </ul>
         <h1>Collecte et utilisation de vos données personnelles</h1>
     <h2>Types de données collectées</h2>
     <h3>Données personnelles</h3>
     <p>Lorsque vous utilisez Notre Service, Nous pouvons Vous demander de Nous fournir certaines informations personnellement identifiables qui
         peuvent être utilisés pour vous contacter ou vous identifier. Les informations personnellement identifiables peuvent inclure, mais sans s'y limiter
         à :</p>
     <ul>
         <li>
             <p>Adresse e-mail</p>
         </li>
         <li>
             <p>Données d'utilisation</p>
         </li>
     </ul>
     <h3>Données d'utilisation</h3>
     <p>Les données d'utilisation sont collectées automatiquement lors de l'utilisation du service.</p>
     <p>Les données d'utilisation peuvent inclure des informations telles que l'adresse de protocole Internet de votre appareil (par exemple, l'adresse IP), le navigateur
         type, version du navigateur, les pages de notre Service que vous visitez, l'heure et la date de votre visite, l'heure
         dépensés sur ces pages, des identifiants d'appareil uniques et d'autres données de diagnostic.</p>
     <p>Lorsque vous accédez au Service par ou via un appareil mobile, nous pouvons collecter automatiquement certaines informations,
         y compris, mais sans s'y limiter, le type d'appareil mobile que vous utilisez, l'identifiant unique de votre appareil mobile, l'adresse IP
         l'adresse de Votre appareil mobile, Votre système d'exploitation mobile, le type de navigateur Internet mobile que Vous utilisez,
         identifiants uniques de l'appareil et autres données de diagnostic.</p>
     <p>Nous pouvons également collecter des informations que votre navigateur envoie chaque fois que vous visitez notre service ou lorsque vous accédez au
         Service par ou via un appareil mobile.</p>
     <h3>Technologies de suivi et cookies</h3>
     <p>Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre service et stocker certains
         information. Les technologies de suivi utilisées sont des balises, des balises et des scripts pour collecter et suivre les informations et
         pour améliorer et analyser Notre Service. Les technologies que nous utilisons peuvent inclure :</p>
     <ul>
         <li><strong>Cookies ou cookies de navigateur.</strong> Un cookie est un petit fichier placé sur votre appareil. Tu peux
             demander à votre navigateur de refuser tous les cookies ou d'indiquer quand un cookie est envoyé. Cependant, si vous
             n'acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre service. Sauf si vous avez ajusté
             Paramétrage de votre navigateur pour qu'il refuse les Cookies, notre Service peut utiliser des Cookies.</li>
         <li><strong>Balises Web.</strong> Certaines sections de notre Service et nos e-mails peuvent contenir de petites
             fichiers électroniques connus sous le nom de balises Web (également appelés gifs clairs, pixels invisibles et pixel unique
             gifs) qui permettent à la Société, par exemple, de compter les utilisateurs qui ont visité ces pages ou ouvert un
             e-mail et pour d'autres statistiques de site Web connexes (par exemple, enregistrer la popularité d'un certain
             section et vérification de l'intégrité du système et du serveur).</li>
     </ul>
     <p>Les cookies peuvent être &quot;Persistants&quot; ou &quot;Session&quot; Biscuits. Les cookies persistants restent sur votre
         ordinateur personnel ou appareil mobile lorsque vous vous déconnectez, tandis que les cookies de session sont supprimés dès que vous
         fermer Votre navigateur Web. En savoir plus sur les cookies sur le <a
             href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
             target="_blank">Article gratuit sur le site Web de la politique de confidentialité</a>.</p>
     <p>Nous utilisons à la fois des cookies de session et des cookies persistants aux fins décrites ci-dessous :</p>
     <ul>
         <li>
             <p><strong>Cookies nécessaires/essentiels</strong></p>
             <p>Type : Cookies de session</p>
             <p>Géré par : Nous</p>
             <p>Objectif : ces cookies sont essentiels pour vous fournir les services disponibles via le site Web et
                 pour vous permettre d'utiliser certaines de ses fonctionnalités. Ils aident à authentifier les utilisateurs et à prévenir les fraudes
                 l'utilisation des comptes utilisateurs. Sans ces Cookies, les services que Vous avez demandés ne peuvent être
                 fournis, et nous n'utilisons ces cookies que pour vous fournir ces services.</p>
         </li>
         <li>
             <p><strong>Politique relative aux cookies / Avis d'acceptation des cookies</strong></p>
             <p>Type : Cookies persistants</p>
             <p>Géré par : Nous</p>
             <p>Objectif : Ces cookies identifient si les utilisateurs ont accepté l'utilisation de cookies sur le site Web.</p>
         </li>
         <li>
             <p><strong>Cookies de fonctionnalité</strong></p>
             <p>Type : Cookies persistants</p>
             <p>Géré par : Nous</p>
             <p>Objectif : ces cookies nous permettent de mémoriser les choix que vous faites lorsque vous utilisez le site Web, tels que
                 se souvenir de vos informations de connexion ou de votre préférence de langue. Le but de ces Cookies est de fournir
                 Vous avec une expérience plus personnelle et pour Vous éviter d'avoir à ressaisir vos préférences à chaque fois
                 Vous utilisez le site Web.</p>
         </li>
     </ul>
     <p>Pour plus d'informations sur les cookies que nous utilisons et vos choix concernant les cookies, veuillez visiter notre Cookies
         Politique ou la section Cookies de notre Politique de confidentialité.</p>
     <h2>Utilisation de vos données personnelles</h2>
     <p>La Société peut utiliser les Données personnelles aux fins suivantes :</p>
     <ul>
         <li>
             <p><strong>Pour fournir et maintenir notre Service</strong>, y compris pour surveiller l'utilisation de notre Service.
             </p>
         </li>
         <li>
             <p><strong>Pour gérer Votre Compte :</strong> pour gérer Votre inscription en tant qu'utilisateur du Service. Le
                 Les données personnelles que vous fournissez peuvent vous donner accès à différentes fonctionnalités du service qui sont
                 à votre disposition en tant qu'utilisateur enregistré.</p>
         </li>
         <li>
             <p><strong>Pour l'exécution d'un contrat :</strong> l'élaboration, le respect et l'engagement de
                 le contrat d'achat des produits, articles ou services que vous avez achetés ou de tout autre
                 contracter avec nous par le biais du service.</p>
         </li>
         <li>
             <p><strong>Pour vous contacter :</strong> pour vous contacter par e-mail, appels téléphoniques, SMS ou autre équivalent
                 formes de communication électronique, telles que les notifications push d'une application mobile concernant
                 mises à jour ou communications informatives liées aux fonctionnalités, produits ou sous contrat
                 services, y compris les mises à jour de sécurité, lorsque cela est nécessaire ou raisonnable pour leur mise en œuvre.</p>
         </li>
         <li>
             <p><strong>Pour vous fournir</strong> des actualités, des offres spéciales et des informations générales sur d'autres biens,
                 les services et événements que nous proposons qui sont similaires à ceux que vous avez déjà achetés ou
                 à moins que vous n'ayez choisi de ne pas recevoir ces informations.</p>
         </li>
         <li>
             <p><strong>Pour gérer Vos demandes :</strong> Pour nous assister et gérer Vos demandes.</p>
         </li>
         <li>
             <p><strong>Pour les transferts d'entreprise :</strong> nous pouvons utiliser vos informations pour évaluer ou mener une fusion,
                 cession, restructuration, réorganisation, dissolution ou autre vente ou transfert de tout ou partie de
                 Nos actifs, que ce soit en tant qu'entreprise en activité ou dans le cadre d'une faillite, d'une liquidation ou d'une procédure similaire,
                 dans lequel les données personnelles que nous détenons sur les utilisateurs de nos services font partie des actifs transférés.</p>
         </li>
         <li>
             <p><strong>À d'autres fins</strong> : nous pouvons utiliser vos informations à d'autres fins, telles que des données
                 analyse, identifier les tendances d'utilisation, déterminer l'efficacité de nos campagnes promotionnelles et
                 pour évaluer et améliorer notre Service, nos produits, nos services, notre marketing et votre expérience.</p>
         </li>
     </ul>
     <p>Nous pouvons partager vos informations personnelles dans les situations suivantes :</p>
     <ul>
         <li><strong>Avec des fournisseurs de services :</strong> nous pouvons partager vos informations personnelles avec des fournisseurs de services
             pour surveiller et analyser l'utilisation de notre service, pour vous contacter.</li>
         <li><strong>Pour les transferts commerciaux :</strong> nous pouvons partager ou transférer vos informations personnelles dans
             dans le cadre de ou pendant les négociations de toute fusion, vente d'actifs de la Société, financement ou
             acquisition de tout ou partie de Notre activité à une autre société.</li>
         <li><strong>Avec des affiliés :</strong> nous pouvons partager vos informations avec nos affiliés, auquel cas nous
             exigera de ces affiliés qu'ils respectent cette politique de confidentialité. Les sociétés affiliées comprennent notre société mère et
             toutes autres filiales, coentreprises ou autres sociétés que nous contrôlons ou qui sont sous
             contrôle commun avec Nous.</li>
         <li><strong>Avec des partenaires commerciaux :</strong> nous pouvons partager vos informations avec nos partenaires commerciaux pour
             Vous proposer certains produits, services ou promotions.</li>
         <li><strong>Avec d'autres utilisateurs :</strong> lorsque vous partagez des informations personnelles ou interagissez autrement dans le
             zones publiques avec d'autres utilisateurs, ces informations peuvent être vues par tous les utilisateurs et peuvent être rendues publiques
             distribué à l'extérieur.</li>
         <li><strong>Avec votre consentement</strong> : nous pouvons divulguer vos informations personnelles à toute autre fin avec
             Votre consentement.</li>
     </ul>
     <h2>Conservation de vos données personnelles</h2>
     <p>La Société ne conservera vos données personnelles que le temps nécessaire aux fins énoncées dans le présent
         Politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour nous conformer à nos obligations légales.
         obligations (par exemple, si nous sommes tenus de conserver vos données pour nous conformer aux lois applicables), résoudre
         litiges et appliquer nos accords et politiques juridiques.</p>
     <p>La Société conservera également les Données d'utilisation à des fins d'analyse interne. Les données d'utilisation sont généralement conservées pour
         un délai plus court, sauf lorsque ces données sont utilisées pour renforcer la sécurité ou pour améliorer la
         fonctionnalité de Notre Service, ou Nous sommes légalement tenus de conserver ces données pendant des périodes plus longues.</p>
     <h2>Transfert de vos données personnelles</h2>
     <p>Vos informations, y compris les données personnelles, sont traitées dans les bureaux d'exploitation de la société et dans tout autre
         lieux où se trouvent les parties impliquées dans le traitement. Cela signifie que ces informations peuvent être
         transférés et conservés sur des ordinateurs situés en dehors de votre état, province, pays ou autre
         juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.</p>
     <p>Votre consentement à cette politique de confidentialité suivi de votre soumission de ces informations représente votre accord
         à ce transfert.</p>
     <p>La Société prendra toutes les mesures raisonnablement nécessaires pour s'assurer que Vos données sont traitées en toute sécurité et en
         conformément à la présente politique de confidentialité et aucun transfert de vos données personnelles n'aura lieu à une organisation
         ou un pays à moins que des contrôles adéquats ne soient en place, y compris la sécurité de vos données et d'autres
         informations personnelles.</p>
     <h2>Supprimer vos données personnelles</h2>
     <p>Vous avez le droit de supprimer ou de demander que nous vous aidions à supprimer les données personnelles que nous avons collectées
         à propos de vous.</p>
     <p>Notre service peut vous donner la possibilité de supprimer certaines informations vous concernant depuis le service.</p>
     <p>Vous pouvez mettre à jour, modifier ou supprimer vos informations à tout moment en vous connectant à votre compte, si vous en avez un,
         et visiter la section des paramètres du compte qui vous permet de gérer vos informations personnelles. Vous pouvez également
         contactez-nous pour demander l'accès, la correction ou la suppression des informations personnelles que vous nous avez fournies.
     </p>
     <p>Veuillez noter, cependant, que nous pouvons avoir besoin de conserver certaines informations lorsque nous avons une obligation légale ou
         base légale pour le faire.</p>
     <h2>Divulgation de vos données personnelles</h2>
     <h3>Transactions commerciales</h3>
     <p>Si la Société est impliquée dans une fusion, une acquisition ou une vente d'actifs, vos données personnelles peuvent être transférées. Nous
         fournira un avis avant que vos données personnelles ne soient transférées et ne soient soumises à une autre politique de confidentialité.
         Politique.</p>
     <h3>Application de la loi</h3>
     <p>Dans certaines circonstances, la Société peut être tenue de divulguer vos données personnelles si nécessaire
         par la loi ou en réponse à des demandes valables d'autorités publiques (par exemple, un tribunal ou une agence gouvernementale).</p>
     <h3>Autres exigences légales</h3>
     <p>La Société peut divulguer Vos Données Personnelles en croyant de bonne foi qu'une telle action est nécessaire pour :</p>
     <ul>
         <li>Se conformer à une obligation légale</li>
         <li>Protéger et défendre les droits ou la propriété de la Société</li>
         <li>Prévenir ou enquêter sur d'éventuels actes répréhensibles en rapport avec le Service</li>
         <li>Protéger la sécurité personnelle des Utilisateurs du Service ou du public</li>
         <li>Protection contre la responsabilité légale</li>
     </ul>
     <h2>Sécurité de vos données personnelles</h2>
     <p>La sécurité de vos données personnelles est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur le
         Internet, ou méthode de stockage électronique est 100% sécurisé. Bien que nous nous efforcions d'utiliser des produits commercialement acceptables
         moyens de protéger Vos Données Personnelles, Nous ne pouvons garantir leur sécurité absolue.</p>
     <h1>Confidentialité des enfants</h1>
     <p>Notre Service ne s'adresse pas aux personnes de moins de 13 ans. Nous ne collectons pas sciemment des informations personnellement identifiables
         informations de toute personne de moins de 13 ans. Si vous êtes un parent ou un tuteur et que vous savez que votre
         l'enfant nous a fourni des données personnelles, veuillez nous contacter. Si Nous apprenons que Nous avons collecté
         Données personnelles de toute personne de moins de 13 ans sans vérification du consentement parental, nous prenons des mesures pour
         supprimer ces informations de nos serveurs.</p>
     <p>Si nous devons compter sur le consentement comme base légale pour le traitement de vos informations et que votre pays l'exige
         consentement d'un parent, nous pouvons exiger le consentement de vos parents avant de collecter et d'utiliser ces informations.</p>
     <h1>Liens vers d'autres sites Web</h1>
     <p>Notre Service peut contenir des liens vers d'autres sites Web qui ne sont pas exploités par Nous. Si vous cliquez sur un tiers
         lien, vous serez dirigé vers le site de ce tiers. Nous vous conseillons vivement de consulter la politique de confidentialité
         de chaque site que vous visitez.</p>
     <p>Nous n'avons aucun contrôle sur et n'assumons aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques de tout
         sites ou services tiers.</p>
     <h1>Modifications de cette politique de confidentialité</h1>
     <p>Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant le nouveau
         Politique de confidentialité sur cette page.</p>
     <p>Il vous est conseillé de consulter régulièrement cette politique de confidentialité pour tout changement. Modifications de cette politique de confidentialité
         sont effectifs dès leur publication sur cette page.</p>
     <h1>Contactez-nous</h1>
     <p>Si vous avez des questions sur cette politique de confidentialité, vous pouvez nous contacter :</p>
     <ul>
         <li>
             <p>Par e-mail : info@madosgroup.com</p>
         </li>
         <li>
             <p>En visitant cette page sur notre site : <a href="https://madosgroup.com"
                     rel="external nofollow noopener" target="_blank">https://madosgroup.com</a></p>
         </li>
         <li>
             <p>Par téléphone : +257 69 37 85 07</p>
         </li>
     </ul>
            `,
            sw: `
            <h1>Sera ya Faragha</h1>
            <p>Sera hii ya Faragha inafafanua sera na taratibu zetu kuhusu ukusanyaji, matumizi na ufichuzi wa Wako
                habari unapotumia Huduma na kukueleza kuhusu haki Zako za faragha na jinsi sheria inavyokulinda.
            </ p>
            <p>Tunatumia data Yako ya Kibinafsi kutoa na kuboresha Huduma. Kwa kutumia Huduma, Unakubali
                ukusanyaji na matumizi ya taarifa kwa mujibu wa Sera hii ya Faragha.</p>
            <h1>Ufafanuzi</h1>
            <p>Maneno ambayo herufi ya mwanzo imeandikwa kwa herufi kubwa yana maana zilizofafanuliwa chini ya masharti yafuatayo.
                Fasili zifuatazo zitakuwa na maana sawa bila kujali kama zinaonekana katika umoja au ndani
                wingi.</p>
            <p>Kwa madhumuni ya Sera hii ya Faragha:</p>
            <ul>
                <li>
                    <p><strong>Akaunti</strong> inamaanisha akaunti ya kipekee iliyoundwa kwa ajili Yako kufikia Huduma zetu au sehemu zetu
                        Huduma.</p>
                </li>
                <li>
                    <p><strong>Mshirika</strong> inamaanisha huluki inayodhibiti, kudhibitiwa au iliyo chini ya udhibiti wa pamoja
                        na karamu, ambapo &quot;kudhibiti&quot; inamaanisha umiliki wa 50% au zaidi ya hisa, usawa
                        maslahi au dhamana nyinginezo zilizo na haki ya kupiga kura kwa ajili ya uchaguzi wa wakurugenzi au mamlaka nyingine ya usimamizi.
                    </ p>
                </li>
                <li>
                    <p><strong>Kampuni</strong> (inayojulikana kama &quot;Kampuni&quot;, &quot;Sisi&quot;,
                        &quot;Sisi&quot; au &quot;Yetu&quot; katika Mkataba huu) inarejelea Mados Group, Rez-de-chaussée, Bureau
                        n° 29, Hotel de ville de Bujumbura, 1, Av. de l'Université, Bujumbura.</p>
                </li>
                <li>
                    <p><strong>Vidakuzi</strong> ni faili ndogo ambazo huwekwa kwenye Kompyuta yako, kifaa cha mkononi au nyingine yoyote
                        kifaa na tovuti, iliyo na maelezo ya historia yako ya kuvinjari kwenye tovuti hiyo kati ya nyingi zake
                        hutumia.</p>
                </li>
                <li>
                    <p><strong>Nchi</strong> inarejelea: Burundi</p>
                </li>
                <li>
                    <p><strong>Kifaa</strong> kinamaanisha kifaa chochote kinachoweza kufikia Huduma kama vile kompyuta, simu ya mkononi
                        au kompyuta kibao ya kidijitali.</p>
                </li>
                <li>
                    <p><strong>Data ya Kibinafsi</strong> ni taarifa yoyote inayohusiana na mtu anayetambulika au anayeweza kutambulika.
                        mtu binafsi.</p>
                </li>
                <li>
                    <p><strong>Huduma</strong> inarejelea Tovuti.</p>
                </li>
                <li>
                    <p><strong>Mtoa Huduma</strong> maana yake ni mtu yeyote wa asili au wa kisheria anayechakata data kwa niaba
                        wa Kampuni. Inarejelea kampuni za wahusika wengine au watu binafsi walioajiriwa na Kampuni
                        kuwezesha Huduma, kutoa Huduma kwa niaba ya Kampuni, kutekeleza huduma zinazohusiana
                        kwa Huduma au kusaidia Kampuni katika kuchanganua jinsi Huduma inatumiwa.</p>
                </li>
                <li>
                    <p><strong>Data ya Matumizi</strong> inarejelea data iliyokusanywa kiotomatiki, ama inayotokana na matumizi ya
                        Huduma au kutoka kwa miundombinu ya Huduma yenyewe (kwa mfano, muda wa kutembelea ukurasa).
                    </ p>
                </li>
                <li>
                    <p><strong>Tovuti</strong> inarejelea Mfood, inayopatikana kutoka <a href="https://mfood.madosgroup.com"
                            rel="external nofollow noopener" target="_blank">https://mfood.madosgroup.com</a></p>
                </li>
                <li>
                    <p><strong>Wewe</strong> inamaanisha mtu binafsi anayefikia au kutumia Huduma, au kampuni, au nyinginezo
                        huluki ya kisheria kwa niaba yake ambayo mtu kama huyo anafikia au kutumia Huduma, kama inavyotumika.
                    </ p>
                </li>
            </ul>
            <h1>Kukusanya na Kutumia Data Yako ya Kibinafsi</h1>
     <h2>Aina za Data Zilizokusanywa</h2>
     <h3>Data ya Kibinafsi</h3>
     <p>Tunapotumia Huduma Yetu, Tunaweza kukuomba Utupe taarifa fulani zinazoweza kumtambulisha mtu binafsi ambazo
         inaweza kutumika kuwasiliana au kukutambulisha. Taarifa zinazoweza kumtambulisha mtu binafsi zinaweza kujumuisha, lakini sio mdogo
         kwa:</p>
     <ul>
         <li>
             <p>Anwani ya barua pepe</p>
         </li>
         <li>
             <p>Data ya Matumizi</p>
         </li>
     </ul>
     <h3>Data ya Matumizi</h3>
     <p>Data ya Matumizi inakusanywa kiotomatiki unapotumia Huduma.</p>
     <p>Data ya Matumizi inaweza kujumuisha maelezo kama vile anwani ya Itifaki ya Mtandao ya Kifaa chako (k.m. anwani ya IP), kivinjari
         aina, toleo la kivinjari, kurasa za Huduma yetu unayotembelea, saa na tarehe ya Ziara Yako, saa
         zilizotumika kwenye kurasa hizo, vitambulishi vya kipekee vya vifaa na data nyingine ya uchunguzi.</p>
     <p>Unapofikia Huduma kwa au kupitia kifaa cha mkononi, Tunaweza kukusanya taarifa fulani kiotomatiki,
         ikijumuisha, lakini sio tu, aina ya kifaa cha rununu Unachotumia, Kitambulisho cha kipekee cha kifaa chako cha mkononi, IP
         Anwani ya kifaa chako cha mkononi, Mfumo wako wa uendeshaji wa simu ya mkononi, aina ya kivinjari cha simu cha mkononi unachotumia,
         vitambulishi vya kipekee vya kifaa na data nyingine ya uchunguzi.</p>
     <p>Tunaweza pia kukusanya maelezo ambayo kivinjari chako hutuma wakati wowote Unapotembelea Huduma yetu au unapofikia
         Huduma kwa au kupitia kifaa cha mkononi.</p>
     <h3>Teknolojia na Vidakuzi vya Kufuatilia</h3>
     <p>Tunatumia Vidakuzi na teknolojia sawa za ufuatiliaji ili kufuatilia shughuli kwenye Huduma Yetu na kuhifadhi fulani
         habari. Teknolojia za ufuatiliaji zinazotumiwa ni viashiria, lebo, na hati za kukusanya na kufuatilia taarifa na
         ili kuboresha na kuchambua Huduma Yetu. Teknolojia Tunazotumia zinaweza kujumuisha:</p>
     <ul>
         <li><strong>Vidakuzi au Vidakuzi vya Kivinjari.</strong> Kidakuzi ni faili ndogo iliyowekwa kwenye Kifaa Chako. Unaweza
             agiza kivinjari chako kukataa Vidakuzi vyote au kuonyesha wakati Kidakuzi kinatumwa. Walakini, ikiwa Wewe
             Usikubali Vidakuzi, Huenda usiweze kutumia baadhi ya sehemu za Huduma yetu. Isipokuwa umerekebisha
             Mpangilio wa kivinjari chako ili kukataa Vidakuzi, Huduma yetu inaweza kutumia Vidakuzi.</li>
         <li><strong>Beacons za Wavuti.</strong> Sehemu fulani za Huduma yetu na barua pepe zetu zinaweza kuwa na ndogo
             faili za kielektroniki zinazojulikana kama viashiria vya wavuti (pia hujulikana kama gifs wazi, lebo za pikseli, na pikseli moja
             gifs) zinazoruhusu Kampuni, kwa mfano, kuhesabu watumiaji ambao wametembelea kurasa hizo au kufungua
             barua pepe na kwa takwimu zingine zinazohusiana za tovuti (kwa mfano, kurekodi umaarufu wa fulani
             sehemu na mfumo wa uthibitishaji na uadilifu wa seva).</li>
     </ul>
     <p>Vidakuzi vinaweza &quot;Kudumu&quot; au &quot;Kipindi&quot; Vidakuzi. Vidakuzi Vinavyoendelea hubaki kwenye Wako
         kompyuta binafsi au kifaa cha mkononi Ukienda nje ya mtandao, huku Vidakuzi vya Kipindi vinafutwa mara tu Wewe
         funga Kivinjari chako cha wavuti. Jifunze zaidi kuhusu vidakuzi kwenye <a
             href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking"
             target="_blank">Tovuti ya Sera ya Faragha Isiyolipishwa</a> makala.</p>
     <p>Tunatumia Vidakuzi vya Kipindi na Vinavyoendelea kwa madhumuni yaliyobainishwa hapa chini:</p>
     <ul>
         <li>
             <p><strong>Vidakuzi Muhimu / Muhimu</strong></p>
             <p>Aina: Vidakuzi vya Kipindi</p>
             <p>Inasimamiwa na: Sisi</p>
             <p>Kusudi: Vidakuzi hivi ni muhimu ili kukupa huduma zinazopatikana kupitia Tovuti na
                 ili kukuwezesha kutumia baadhi ya vipengele vyake. Wanasaidia kuthibitisha watumiaji na kuzuia ulaghai
                 matumizi ya akaunti za watumiaji. Bila Vidakuzi hivi, huduma ambazo Umeomba haziwezi kuwa
                 zinazotolewa, na Tunatumia Vidakuzi hivi pekee kukupa huduma hizo.</p>
         </li>
         <li>
             <p><strong>Sera ya Vidakuzi / Vidakuzi vya Kukubali Ilani</strong></p>
             <p>Aina: Vidakuzi Vinavyoendelea</p>
             <p>Inasimamiwa na: Nasi</p>
             <p>Kusudi: Vidakuzi hivi vinabainisha ikiwa watumiaji wamekubali matumizi ya vidakuzi kwenye Tovuti.</p>
         </li>
         <li>
             <p><strong>Vidakuzi vya Utendaji</strong></p>
             <p>Aina: Vidakuzi Vinavyoendelea</p>
             <p>Inasimamiwa na: Nasi</p>
             <p>Kusudi: Vidakuzi hivi huturuhusu kukumbuka chaguo Unazofanya Unapotumia Tovuti, kama vile
                 kukumbuka maelezo yako ya kuingia au upendeleo wa lugha. Madhumuni ya Vidakuzi hivi ni kutoa
                 Una uzoefu wa kibinafsi zaidi na ili kukuepusha kulazimika kuweka tena mapendeleo yako kila wakati
                 Unatumia Tovuti.</p>
         </li>
     </ul>
     <p>Kwa maelezo zaidi kuhusu vidakuzi tunavyotumia na chaguo zako kuhusu vidakuzi, tafadhali tembelea Vidakuzi vyetu
         Sera au sehemu ya Vidakuzi ya Sera yetu ya Faragha.</p>
     <h2>Matumizi ya Data Yako ya Kibinafsi</h2>
     <p>Kampuni inaweza kutumia Data ya Kibinafsi kwa madhumuni yafuatayo:</p>
     <ul>
         <li>
             <p><strong>Kutoa na kudumisha Huduma yetu</strong>, ikijumuisha kufuatilia matumizi ya Huduma yetu.
             </ p>
         </li>
         <li>
             <p><strong>Ili kudhibiti Akaunti Yako:</strong> kudhibiti Usajili Wako kama mtumiaji wa Huduma. The
                 Data ya Kibinafsi Unayotoa inaweza kukupa ufikiaji wa utendaji tofauti wa Huduma ambao ni
                 inapatikana Kwako kama mtumiaji aliyesajiliwa.</p>
         </li>
         <li>
             <p><strong>Kwa utendakazi wa mkataba:</strong> uundaji, utiifu na uwajibikaji wa
                 mkataba wa ununuzi wa bidhaa, bidhaa au huduma Ulizonunua au nyingine yoyote
                 mkataba na Sisi kupitia Huduma.</p>
         </li>
         <li>
             <p><strong>Ili kuwasiliana Nawe:</strong> Ili kuwasiliana Nawe kwa barua pepe, simu, SMS, au vifaa vingine sawia.
                 aina za mawasiliano ya kielektroniki, kama vile arifa za programu ya rununu kuhusu
                 sasisho au mawasiliano ya habari yanayohusiana na utendakazi, bidhaa au kandarasi
                 huduma, ikijumuisha masasisho ya usalama, inapohitajika au inafaa kwa utekelezaji wake.</p>
         </li>
         <li>
             <p><strong>Ili kukupa</strong> habari, matoleo maalum na maelezo ya jumla kuhusu bidhaa nyingine,
                 huduma na matukio ambayo tunatoa ambayo yanafanana na yale ambayo tayari umenunua au
                 uliuliza kuhusu isipokuwa kama umechagua kutopokea taarifa kama hizo.</p>
         </li>
         <li>
             <p><strong>Ili kudhibiti maombi Yako:</strong> Kuhudhuria na kudhibiti maombi Yako Kwetu.</p>
         </li>
         <li>
             <p><strong>Kwa uhamisho wa biashara:</strong> Tunaweza kutumia Taarifa Yako kutathmini au kufanya muunganisho,
                 uondoaji, urekebishaji, upangaji upya, uvunjaji, au uuzaji mwingine au uhamisho wa baadhi au yote
                 Mali zetu, iwe kama shughuli inayoendelea au kama sehemu ya kufilisika, kufilisi, au mchakato kama huo,
                 ambamo Data ya Kibinafsi tuliyonayo kuhusu watumiaji wetu wa Huduma ni miongoni mwa mali zinazohamishwa.</p>
         </li>
         <li>
             <p><strong>Kwa madhumuni mengine</strong>: Tunaweza kutumia maelezo Yako kwa madhumuni mengine, kama vile data
                 uchambuzi, kutambua mwelekeo wa matumizi, kubainisha ufanisi wa kampeni zetu za utangazaji na
                 kutathmini na kuboresha Huduma, bidhaa, huduma, uuzaji na uzoefu wako.</p>
         </li>
     </ul>
     <p>Tunaweza kushiriki maelezo Yako ya kibinafsi katika hali zifuatazo:</p>
     <ul>
         <li><strong>Na Watoa Huduma:</strong> Tunaweza kushiriki maelezo Yako ya kibinafsi na Watoa Huduma
             kufuatilia na kuchambua matumizi ya Huduma yetu, kuwasiliana na Wewe.</li>
         <li><strong>Kwa uhamisho wa biashara:</strong> Tunaweza kushiriki au kuhamisha maelezo yako ya kibinafsi ndani
             uhusiano na, au wakati wa mazungumzo ya, muunganisho wowote, uuzaji wa mali ya Kampuni, ufadhili, au
             upatikanaji wa yote au sehemu ya biashara Yetu kwa kampuni nyingine.</li>
         <li><strong>Na Washirika:</strong> Tunaweza kushiriki maelezo yako na washirika wetu, katika hali ambayo sisi
             itahitaji washirika hao kuheshimu Sera hii ya Faragha. Washirika ni pamoja na kampuni yetu mama na
             matawi mengine yoyote, washirika wa ubia au makampuni mengine ambayo Tunadhibiti au yaliyo chini yake
             udhibiti wa pamoja nasi.</li>
         <li><strong>Na washirika wa biashara:</strong> Tunaweza kushiriki maelezo yako na washirika wetu wa biashara
             kukupa bidhaa, huduma au matangazo fulani.</li>
         <li><strong>Na watumiaji wengine:</strong> Unaposhiriki maelezo ya kibinafsi au vinginevyo kuingiliana katika
             maeneo ya umma na watumiaji wengine, habari kama hiyo inaweza kutazamwa na watumiaji wote na inaweza kuwa hadharani
             kusambazwa nje.</li>
         <li><strong>Kwa idhini Yako</strong>: Tunaweza kufichua maelezo Yako ya kibinafsi kwa madhumuni mengine yoyote na
             Idhini yako.</li>
     </ul>
     <h2>Uhifadhi wa Data Yako ya Kibinafsi</h2>
     <p>Kampuni itahifadhi Data Yako ya Kibinafsi kwa muda tu inavyohitajika kwa madhumuni yaliyowekwa katika hili
         Sera ya Faragha. Tutahifadhi na kutumia Data Yako ya Kibinafsi kwa kiwango kinachohitajika ili kutii sheria zetu
         wajibu (kwa mfano, ikiwa tunahitajika kuhifadhi data yako ili kutii sheria zinazotumika), suluhisha
         migogoro, na kutekeleza makubaliano na sera zetu za kisheria.</p>
     <p>Kampuni pia itahifadhi Data ya Matumizi kwa madhumuni ya uchambuzi wa ndani. Data ya Matumizi kwa ujumla huhifadhiwa kwa
         muda mfupi, isipokuwa wakati data hii inatumiwa kuimarisha usalama au kuboresha
         utendakazi wa Huduma Yetu, au Tunawajibika kisheria kuhifadhi data hii kwa muda mrefu zaidi.</p>
     <h2>Uhamisho wa Data Yako ya Kibinafsi</h2>
     <p>Taarifa zako, ikijumuisha Data ya Kibinafsi, huchakatwa katika ofisi za uendeshaji za Kampuni na katika nyingine yoyote
         mahali ambapo wahusika wanaohusika katika usindikaji wapo. Ina maana kwamba habari hii inaweza kuwa
         kuhamishwa hadi - na kudumishwa kwenye - kompyuta zilizo nje ya jimbo lako, mkoa, nchi au nyingine
         mamlaka ya serikali ambapo sheria za ulinzi wa data zinaweza kutofautiana na zile za mamlaka Yako.</p>
     <p>Idhini yako kwa Sera hii ya Faragha ikifuatiwa na Uwasilishaji Wako wa habari kama hiyo inawakilisha makubaliano Yako
         kwa uhamisho huo.</p>
     <p>Kampuni itachukua hatua zote zinazohitajika ili kuhakikisha kuwa data yako inashughulikiwa kwa usalama na ndani
         kwa mujibu wa Sera hii ya Faragha na hakuna uhamisho wa Data Yako ya Kibinafsi utafanyika kwa shirika
         au nchi isipokuwa kuwe na udhibiti wa kutosha unaojumuisha usalama wa data Yako na nyinginezo
         habari ya kibinafsi.</p>
     <h2>Futa Data yako ya Kibinafsi</h2>
     <p>Una haki ya kufuta au kuomba Tusaidie katika kufuta Data ya Kibinafsi ambayo Tumekusanya
         kukuhusu.</p>
     <p>Huduma yetu inaweza kukupa uwezo wa kufuta taarifa fulani kukuhusu kutoka ndani ya Huduma.</p>
     <p>Unaweza kusasisha, kurekebisha, au kufuta maelezo Yako wakati wowote kwa kuingia kwenye Akaunti Yako, ikiwa unayo,
         na kutembelea sehemu ya mipangilio ya akaunti inayokuruhusu kudhibiti maelezo Yako ya kibinafsi. Unaweza pia
         wasiliana Nasi ili kuomba ufikiaji, kusahihisha, au kufuta maelezo yoyote ya kibinafsi ambayo Umetupatia.
     </ p>
     <p>Tafadhali kumbuka, hata hivyo, kwamba Tunaweza kuhitaji kuhifadhi habari fulani tunapokuwa na wajibu wa kisheria au
         msingi halali wa kufanya hivyo.</p>
     <h2>Ufichuzi wa Data Yako ya Kibinafsi</h2>
     <h3>Miamala ya Biashara</h3>
     <p>Kama Kampuni inahusika katika uunganishaji, upatikanaji au uuzaji wa mali, Data Yako ya Kibinafsi inaweza kuhamishwa. Sisi
         itatoa notisi kabla ya Data Yako ya Kibinafsi kuhamishwa na kuwa chini ya Faragha tofauti
         Sera.</p>
         <h3>Utekelezaji wa sheria</h3>
         <p>Chini ya hali fulani, Kampuni inaweza kuhitajika kufichua Data Yako ya Kibinafsi ikihitajika kufanya hivyo
             kisheria au kwa kujibu maombi halali ya mamlaka ya umma (k.m. mahakama au wakala wa serikali).</p>
         <h3>Masharti mengine ya kisheria</h3>
         <p>Kampuni inaweza kufichua Data Yako ya Kibinafsi kwa imani nzuri kwamba hatua kama hiyo ni muhimu kwa:</p>
         <ul>
             <li>Zingatia wajibu wa kisheria</li>
             <li>Linda na utetee haki au mali ya Kampuni</li>
             <li> Zuia au chunguza makosa yanayowezekana kuhusiana na Huduma</li>
             <li>Linda usalama wa kibinafsi wa Watumiaji wa Huduma au umma</li>
             <li>Linda dhidi ya dhima ya kisheria</li>
         </ul>
         <h2>Usalama wa Data Yako ya Kibinafsi</h2>
         <p>Usalama wa Data Yako ya Kibinafsi ni muhimu Kwetu, lakini kumbuka kwamba hakuna njia ya uwasilishaji kwenye
             Mtandao, au njia ya kuhifadhi kielektroniki ni salama 100%. Huku Tunajitahidi kutumia zinazokubalika kibiashara
             inamaanisha kulinda Data Yako ya Kibinafsi, Hatuwezi kukuhakikishia usalama wake kamili.</p>
         <h1>Faragha ya Watoto</h1>
         <p>Huduma yetu haishughulikii mtu yeyote aliye chini ya umri wa miaka 13. Hatukusanyi watu wanaotambulika kimakusudi.
             habari kutoka kwa mtu yeyote aliye chini ya umri wa miaka 13. Ikiwa Wewe ni mzazi au mlezi na unafahamu kuwa Wako
             mtoto ametupatia Data ya Kibinafsi, tafadhali wasiliana Nasi. Tukijua kuwa tumekusanya
             Data ya Kibinafsi kutoka kwa mtu yeyote aliye chini ya umri wa miaka 13 bila uthibitishaji wa kibali cha mzazi, Tunachukua hatua
             ondoa maelezo hayo kutoka kwa seva zetu.</p>
         <p>Ikiwa tunahitaji kutegemea idhini kama msingi wa kisheria wa kuchakata maelezo yako na nchi yako inahitaji
             idhini kutoka kwa mzazi, Tunaweza kuhitaji idhini ya mzazi wako kabla ya Hatujakusanya na kutumia maelezo hayo.</p>
         <h1>Viungo kwa Tovuti Nyingine</h1>
         <p>Huduma yetu inaweza kuwa na viungo vya tovuti zingine ambazo hazitumiki nasi. Ukibonyeza mtu wa tatu
             kiungo, Utaelekezwa kwa tovuti ya mtu huyo wa tatu. Tunakushauri sana ukague Sera ya Faragha
             ya kila tovuti Unayotembelea.</p>
         <p>Hatuna udhibiti na hatuwajibikii maudhui, sera za faragha au desturi zozote
             tovuti au huduma za watu wengine.</p>
         <h1>Mabadiliko kwenye Sera hii ya Faragha</h1>
         <p>Tunaweza kusasisha Sera Yetu ya Faragha mara kwa mara. Tutakuarifu kuhusu mabadiliko yoyote kwa kuchapisha mapya
             Sera ya Faragha kwenye ukurasa huu.</p>
         <p>Unashauriwa kukagua Sera hii ya Faragha mara kwa mara kwa mabadiliko yoyote. Mabadiliko ya Sera hii ya Faragha
             zinafaa zinapochapishwa kwenye ukurasa huu.</p>
         <h1>Wasiliana Nasi</h1>
         <p>Ikiwa una maswali yoyote kuhusu Sera hii ya Faragha, Unaweza kuwasiliana nasi:</p>
         <ul>
             <li>
                 <p>Kwa barua pepe: info@madosgroup.com</p>
             </li>
             <li>
                 <p>Kwa kutembelea ukurasa huu kwenye tovuti yetu: <a href="https://madosgroup.com"
                         rel="external nofollow noopener" target="_blank">https://madosgroup.com</a></p>
             </li>
             <li>
                 <p>Kwa nambari ya simu: +257 69 37 85 07</p>
             </li>
         </ul>
            `,
        }[locale]}
    `;
}

export const TermsAndConditions = (locale, homePath) => {
    return `
${{
            en: `
            <h2><strong>Terms and Conditions</strong></h2>

            <p>Welcome to Mfood!</p>
            
            <p>These terms and conditions outline the rules and regulations for the use of Mados Group's Website, located at <a href="https://mfood.madosgroup.com" target="_blank">https://mfood.madosgroup.com</a>.</p>
            
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Mfood if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of bi. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
            
            <h3><strong>Cookies</strong></h3>
            
            <p>We employ the use of cookies. By accessing Mfood, you agreed to use cookies in agreement with the Mados Group's Privacy Policy. </p>
            
            <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
            
            <h3><strong>License</strong></h3>
            
            <p>Unless otherwise stated, Mados Group and/or its licensors own the intellectual property rights for all material on Mfood. All intellectual property rights are reserved. You may access this from Mfood for your own personal use subjected to restrictions set in these terms and conditions.</p>
            
            <p>You must not:</p>
            <ul>
                <li>Republish material from Mfood</li>
                <li>Sell, rent or sub-license material from Mfood</li>
                <li>Reproduce, duplicate or copy material from Mfood</li>
                <li>Redistribute content from Mfood</li>
            </ul>
            
            <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/">Terms and Conditions Generator</a>.</p>
            
            <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Mados Group does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Mados Group,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Mados Group shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            
            <p>Mados Group reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            
            <p>You warrant and represent that:</p>
            
            <ul>
                <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>
            
            <p>You hereby grant Mados Group a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
            
            <h3><strong>Hyperlinking to our Content</strong></h3>
            
            <p>The following organizations may link to our Website without prior written approval:</p>
            
            <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            
            <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
            
            <p>We may consider and approve other link requests from the following types of organizations:</p>
            
            <ul>
                <li>commonly-known consumer and/or business information sources;</li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
            </ul>
            
            <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Mados Group; and (d) the link is in the context of general resource information.</p>
            
            <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
            
            <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Mados Group. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
            
            <p>Approved organizations may hyperlink to our Website as follows:</p>
            
            <ul>
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator being linked to; or</li>
                <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
            </ul>
            
            <p>No use of Mados Group's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
            
            <h3><strong>iFrames</strong></h3>
            
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
            
            <h3><strong>Content Liability</strong></h3>
            
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            
            <h3><strong>Reservation of Rights</strong></h3>
            
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
            
            <h3><strong>Removal of links from our website</strong></h3>
            
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
            
            <h3><strong>Disclaimer</strong></h3>
            
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            
            <ul>
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>        

            `,
            fr: `
<h2><strong>Conditions d'utilisation</strong></h2>

             <p>Bienvenue chez Mfood !</p>
            
             <p>Ces termes et conditions décrivent les règles et réglementations d'utilisation du site Web du groupe Mados, situé à <a href="https://mfood.madosgroup.com" target="_blank">https://mfood.madosgroup .com</a>.</p>
            
             <p>En accédant à ce site Web, nous supposons que vous acceptez ces termes et conditions. Ne continuez pas à utiliser Mfood si vous n'acceptez pas de prendre tous les termes et conditions énoncés sur cette page.</p>
            
             <p>La terminologie suivante s'applique aux présentes conditions générales, à la déclaration de confidentialité et à l'avis de non-responsabilité ainsi qu'à tous les accords : "Client", "Vous" et "Votre" font référence à vous, la personne qui se connecte sur ce site Web et qui se conforme aux conditions générales de la Société. conditions. « La Société », « Nous-mêmes », « Nous », « Notre » et « Nous » font référence à notre Société. « Partie », « Parties » ou « Nous » désignent à la fois le Client et nous-mêmes. Tous les termes se réfèrent à l'offre, à l'acceptation et à la considération du paiement nécessaire pour entreprendre le processus de notre assistance au Client de la manière la plus appropriée dans le but exprès de répondre aux besoins du Client en ce qui concerne la fourniture des services déclarés de la Société, conformément à et sous réserve de la loi en vigueur de bi. Toute utilisation de la terminologie ci-dessus ou d'autres mots au singulier, au pluriel, en majuscules et/ou il/elle ou ils, sont considérés comme interchangeables et donc comme faisant référence à ceux-ci.</p>
                <h3><strong>Cookies</strong></h3>
            
             <p>Nous utilisons des cookies. En accédant à Mfood, vous acceptez l'utilisation de cookies en accord avec la politique de confidentialité du groupe Mados. </p>
            
             <p>La plupart des sites Web interactifs utilisent des cookies pour nous permettre de récupérer les détails de l'utilisateur pour chaque visite. Les cookies sont utilisés par notre site Web pour activer la fonctionnalité de certaines zones afin de faciliter la tâche des personnes visitant notre site Web. Certains de nos partenaires affiliés/publicitaires peuvent également utiliser des cookies.</p>
            
             <h3><strong>Licence</strong></h3>
            
             <p>Sauf indication contraire, Mados Group et/ou ses concédants détiennent les droits de propriété intellectuelle pour tout le matériel sur Mfood. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de Mfood pour votre usage personnel sous réserve des restrictions définies dans les présentes conditions générales.</p>
            
             <p>Vous ne devez pas :</p>
             <ul>
                 <li>Republier du matériel de Mfood</li>
                 <li>Vendre, louer ou sous-licencier du matériel de Mfood</li>
                 <li>Reproduire, dupliquer ou copier le matériel de Mfood</li>
                 <li>Redistribuer le contenu de Mfood</li>
             </ul>
            
             <p>Cet Accord prend effet à la date des présentes. Nos conditions générales ont été créées à l'aide du <a href="https://www.termsfeed.com/terms-conditions-generator/">générateur de conditions générales</a>.</p>
            
             <p> Certaines parties de ce site Web offrent aux utilisateurs la possibilité de publier et d'échanger des opinions et des informations dans certaines zones du site Web. Le groupe Mados ne filtre, n'édite, ne publie ni ne révise les commentaires avant leur présence sur le site Web. Les commentaires ne reflètent pas les points de vue et opinions du groupe Mados, de ses agents et/ou de ses sociétés affiliées. Les commentaires reflètent les points de vue et opinions de la personne qui publie ses points de vue et opinions. Dans la mesure permise par les lois applicables, Mados Group ne sera pas responsable des Commentaires ou de toute responsabilité, dommages ou dépenses causés et/ou subis du fait de toute utilisation et/ou publication et/ou apparition des Commentaires sur ce site Web.</p>
            
             <p>Mados Group se réserve le droit de surveiller tous les commentaires et de supprimer tout commentaire pouvant être considéré comme inapproprié, offensant ou entraînant une violation des présentes conditions générales.</p>
            
             <p>Vous garantissez et déclarez que :</p>
            
             <ul>
                 <li>Vous avez le droit de publier les Commentaires sur notre site Web et disposez de toutes les licences et autorisations nécessaires pour le faire ;</li>
                 <li>Les commentaires n'envahissent aucun droit de propriété intellectuelle, y compris, sans s'y limiter, les droits d'auteur, les brevets ou les marques de commerce d'un tiers ;</li>
                 <li>Les commentaires ne contiennent aucun contenu diffamatoire, calomnieux, offensant, indécent ou autrement illégal qui constitue une atteinte à la vie privée</li>
                 <li>Les commentaires ne seront pas utilisés pour solliciter ou promouvoir des activités commerciales ou personnalisées ou présenter des activités commerciales ou des activités illégales.</li>
             </ul>
            
             <p>Vous accordez par la présente à Mados Group une licence non exclusive pour utiliser, reproduire, modifier et autoriser d'autres personnes à utiliser, reproduire et modifier n'importe lequel de vos commentaires sous toutes formes, formats ou supports.</p>
            <h3><strong>Lien hypertexte vers notre contenu</strong></h3>
            
             <p>Les organisations suivantes peuvent créer un lien vers notre site Web sans autorisation écrite préalable :</p>
            
             <ul>
                 <li>Agences gouvernementales ;</li>
                 <li>Moteurs de recherche ;</li>
                 <li>Organismes de presse ;</li>
                 <li>Les distributeurs d'annuaires en ligne peuvent créer un lien vers notre site Web de la même manière qu'ils créent un lien hypertexte vers les sites Web d'autres entreprises répertoriées ; et</li>
                 <li>Entreprises accréditées à l'échelle du système, à l'exception des organisations à but non lucratif, des centres commerciaux caritatifs et des groupes de collecte de fonds caritatifs qui ne peuvent pas créer de lien hypertexte vers notre site Web.</li>
             </ul>
            
             <p>Ces organisations peuvent créer un lien vers notre page d'accueil, vers des publications ou vers d'autres informations du site Web tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou l'approbation de la partie de liaison et de ses produits et/ou services ; et (c) s'inscrit dans le contexte du site de la partie de liaison.</p>
            
             <p>Nous pouvons examiner et approuver d'autres demandes de lien provenant des types d'organisations suivants :</p>
            
             <ul>
                 <li>des sources d'informations sur les consommateurs et/ou les entreprises bien connues ;</li>
                 <li>les sites communautaires dot.com ;</li>
                 <li>associations ou autres groupes représentant des organisations caritatives ;</li>
                 <li>distributeurs d'annuaires en ligne ;</li>
                 <li>portails Internet ;</li>
                 <li>des cabinets comptables, juridiques et de conseil ; et</li>
                 <li>établissements d'enseignement et associations professionnelles</li>
             </ul>
            
             <p>Nous approuverons les demandes de lien de ces organisations si nous décidons que : (a) le lien ne nous ferait pas paraître défavorable à nous-mêmes ou à nos entreprises accréditées ; (b) l'organisation n'a aucun dossier négatif avec nous ; (c) le bénéfice pour nous de la visibilité du lien hypertexte compense l'absence de Mados Group ; et (d) le lien se trouve dans le contexte d'informations générales sur les ressources.</p>
            
             <p>Ces organisations peuvent créer un lien vers notre page d'accueil tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou l'approbation de la partie de liaison et de ses produits ou services ; et (c) s'inscrit dans le contexte du site de la partie de liaison.</p>
            
             <p>Si vous êtes l'une des organisations énumérées au paragraphe 2 ci-dessus et que vous souhaitez créer un lien vers notre site Web, vous devez nous en informer en envoyant un e-mail à Mados Group. Veuillez inclure votre nom, le nom de votre organisation, vos coordonnées ainsi que l'URL de votre site, une liste de toutes les URL à partir desquelles vous avez l'intention de créer un lien vers notre site Web et une liste des URL de notre site vers lesquelles vous souhaitez lien. Attendre 2-3 semaines pour une réponse.</p>
            
             <p>Les organisations approuvées peuvent créer un lien hypertexte vers notre site Web comme suit :</p>
            
             <ul>
                 <li>Par l'utilisation de notre dénomination sociale ; ou</li>
                 <li>En utilisant le localisateur de ressources uniforme auquel il est lié ; ou</li>
                 <li>Par l'utilisation de toute autre description de notre site Web lié qui a du sens dans le contexte et le format du contenu sur le site de la partie de liaison.</li>
             </ul>
            
             <p>Aucune utilisation du logo du groupe Mados ou d'autres illustrations ne sera autorisée pour le lien en l'absence d'un accord de licence de marque.</p>
             <h3><strong>iFrames</strong></h3>
            
             <p>Sans approbation préalable et autorisation écrite, vous ne pouvez pas créer de cadres autour de nos pages Web qui modifient de quelque manière que ce soit la présentation visuelle ou l'apparence de notre site Web.</p>
            
             <h3><strong>Responsabilité relative au contenu</strong></h3>
            
             <p>Nous ne serons pas tenus responsables du contenu qui apparaît sur votre site Web. Vous acceptez de nous protéger et de nous défendre contre toutes les réclamations qui surgissent sur votre site Web. Aucun lien ne doit apparaître sur un site Web pouvant être interprété comme diffamatoire, obscène ou criminel, ou qui enfreint, viole ou préconise la violation ou toute autre violation des droits de tiers.</p>
            
             <h3><strong>Réservation des droits</strong></h3>
            
             <p>Nous nous réservons le droit de vous demander de supprimer tous les liens ou tout lien particulier vers notre site Web. Vous acceptez de supprimer immédiatement tous les liens vers notre site Web sur demande. Nous nous réservons également le droit de modifier ces termes et conditions et sa politique de liaison à tout moment. En vous connectant continuellement à notre site Web, vous acceptez d'être lié et de suivre ces conditions générales de liaison.</p>
            
             <h3><strong>Suppression de liens de notre site Web</strong></h3>
            
             <p>Si vous trouvez un lien sur notre site Web qui est offensant pour quelque raison que ce soit, vous êtes libre de nous contacter et de nous en informer à tout moment. Nous examinerons les demandes de suppression de liens, mais nous ne sommes pas obligés de vous répondre directement.</p>
            
             <p>Nous ne garantissons pas que les informations sur ce site Web sont correctes, nous ne garantissons pas leur exhaustivité ou leur exactitude ; nous ne promettons pas non plus de garantir que le site Web reste disponible ou que le contenu du site Web est tenu à jour.</p>
            
             <h3><strong>Avertissement</strong></h3>
            
             <p>Dans la mesure maximale permise par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site Web et à l'utilisation de ce site Web. Rien dans cette clause de non-responsabilité :</p>
            
             <ul>
                 <li>limiter ou exclure notre ou votre responsabilité en cas de décès ou de blessure ;</li>
                 <li>limiter ou exclure notre ou votre responsabilité en cas de fraude ou de déclaration frauduleuse ;</li>
                 <li>limiter l'une de nos ou vos responsabilités d'une manière qui n'est pas autorisée par la loi applicable ; ou</li>
                 <li>exclure l'une de nos ou vos responsabilités qui ne peuvent être exclues en vertu de la loi applicable.</li>
             </ul>
            
             <p>Les limitations et interdictions de responsabilité définies dans cette section et ailleurs dans cette clause de non-responsabilité : (a) sont soumises au paragraphe précédent ; et (b) régissent toutes les responsabilités découlant de la clause de non-responsabilité, y compris les responsabilités contractuelles, délictuelles et pour manquement à une obligation légale.</p>
            
             <p>Tant que le site Web et les informations et services sur le site Web sont fournis gratuitement, nous ne serons pas responsables de toute perte ou dommage de quelque nature que ce soit.</p>
             `,
            sw: `
<h2><strong>Sheria na Masharti</strong></h2>

             <p>Karibu kwenye Mfood!</p>
            
             <p>Sheria na masharti haya yanabainisha sheria na kanuni za matumizi ya Tovuti ya Mados Group, iliyoko <a href="https://mfood.madosgroup.com" target="_blank">https://mfood.madosgroup. .com</a>.</p>
            
             <p>Kwa kufikia tovuti hii tunadhania kuwa unakubali sheria na masharti haya. Usiendelee kutumia Mfood ikiwa hukubali kuchukua sheria na masharti yote yaliyotajwa kwenye ukurasa huu.</p>
            
             <p> Istilahi ifuatayo inatumika kwa Sheria na Masharti haya, Taarifa ya Faragha na Notisi ya Kanusho na Makubaliano yote: "Mteja", "Wewe" na "Wako" inarejelea wewe, mtu anayeingia kwenye tovuti hii na kutii sheria na masharti ya Kampuni. masharti. "Kampuni", "Wenyewe", "Sisi", "Yetu" na "Sisi", inarejelea Kampuni yetu. "Chama", "Chama", au "Sisi", inarejelea Mteja na sisi wenyewe. Masharti yote yanarejelea toleo, kukubalika na kuzingatia malipo muhimu ili kutekeleza mchakato wa usaidizi wetu kwa Mteja kwa njia inayofaa zaidi kwa madhumuni ya kukidhi mahitaji ya Mteja kuhusiana na utoaji wa huduma zilizotajwa na Kampuni, kwa mujibu wa na kwa kuzingatia, sheria iliyopo ya bi. Matumizi yoyote ya istilahi hapo juu au maneno mengine katika umoja, wingi, herufi kubwa na/au yeye au wao, yanachukuliwa kuwa yanaweza kubadilishana na hivyo kurejelea sawa.</p>          
            <h3><strong>Vidakuzi</strong></h3>
            
             <p>Tunaajiri matumizi ya vidakuzi. Kwa kufikia Mfood, ulikubali kutumia vidakuzi kwa makubaliano na Sera ya Faragha ya Mados Group. </ p>
            
             <p>Tovuti nyingi zinazoingiliana hutumia vidakuzi ili kuturuhusu kurudisha maelezo ya mtumiaji kwa kila ziara. Vidakuzi hutumiwa na tovuti yetu ili kuwezesha utendakazi wa maeneo fulani ili kurahisisha watu wanaotembelea tovuti yetu. Baadhi ya washirika wetu/matangazo wanaweza pia kutumia vidakuzi.</p>
            
             <h3><strong>Leseni</strong></h3>
            
             <p> Isipokuwa imeelezwa vinginevyo, Mados Group na/au watoa leseni wake wanamiliki haki miliki kwa nyenzo zote kwenye Mfood. Haki zote za uvumbuzi zimehifadhiwa. Unaweza kufikia hii kutoka kwa Mfood kwa matumizi yako binafsi kwa kuzingatia vikwazo vilivyowekwa katika sheria na masharti haya.</p>
            
             <p>Hupaswi:</p>
             <ul>
                 <li>Chapisha upya nyenzo kutoka Mfood</li>
                 <li>Uza, kodisha au nyenzo ndogo ya leseni kutoka Mfood</li>
                 <li>Zalisha, nakala au nakili nyenzo kutoka kwa Mfood</li>
                 <li>Sambaza upya maudhui kutoka kwa Mfood</li>
             </ul>
            
             <p>Makubaliano haya yataanza tarehe yake. Sheria na Masharti yetu yaliundwa kwa usaidizi wa <a href="https://www.termsfeed.com/terms-conditions-generator/">Kizalishaji cha Sheria na Masharti</a>.</p>
            
             <p>Sehemu za tovuti hii hutoa fursa kwa watumiaji kuchapisha na kubadilishana maoni na taarifa katika maeneo fulani ya tovuti. Mados Group haichuji, kuhariri, kuchapisha au kukagua Maoni kabla ya uwepo wao kwenye tovuti. Maoni hayaakisi maoni na maoni ya Mados Group, mawakala wake na/au washirika wake. Maoni yanaonyesha maoni na maoni ya mtu anayechapisha maoni na maoni yake. Kwa kiwango kinachoruhusiwa na sheria zinazotumika, Mados Group haitawajibika kwa Maoni au dhima yoyote, uharibifu au gharama zinazosababishwa na/au kuteseka kutokana na matumizi yoyote ya na/au kuchapisha na/au kuonekana kwa Maoni kwenye. tovuti hii.</p>
            
             <p>Mados Group inahifadhi haki ya kufuatilia Maoni yote na kuondoa Maoni yoyote ambayo yanaweza kuchukuliwa kuwa hayafai, ya kukera au kusababisha ukiukaji wa Sheria na Masharti haya.</p>
            
             <p>Unathibitisha na kuwakilisha hilo:</p>
            
             <ul>
                 <li>Una haki ya kuchapisha Maoni kwenye tovuti yetu na una leseni na idhini zote zinazohitajika kufanya hivyo;</li>
                 <li>Maoni hayavamizi haki yoyote ya uvumbuzi, ikijumuisha bila kikomo hakimiliki, hataza au chapa ya biashara ya mtu mwingine yeyote;</li>
                 <li>Maoni hayana nyenzo zozote za kashfa, kashfa, za kuudhi, zisizofaa au vinginevyo ambazo ni kinyume cha sheria ambazo ni uvamizi wa faragha</li>
                 <li>Maoni hayatatumika kuomba au kukuza biashara au desturi au kuwasilisha shughuli za kibiashara au shughuli haramu.</li>
             </ul>
            
             <p>Kwa hili unaipatia Mados Group leseni isiyo ya kipekee ya kutumia, kuzalisha tena, kuhariri na kuwaidhinisha wengine kutumia, kutoa tena na kuhariri Maoni yako yoyote katika aina, miundo au midia yoyote na yote.</p>
            <h3><strong>Kuunganisha kwa Hyperlinking kwa Maudhui yetu</strong></h3>
            
             <p>Mashirika yafuatayo yanaweza kuunganisha kwenye Tovuti yetu bila idhini iliyoandikwa ya awali:</p>
            
             <ul>
                 <li>Mashirika ya serikali;</li>
                 <li>Injini za utafutaji;</li>
                 <li>Mashirika ya habari;</li>
                 <li>Wasambazaji wa saraka za mtandaoni wanaweza kuunganisha kwenye Tovuti yetu kwa njia sawa na wanavyounganisha kwenye Tovuti za biashara zingine zilizoorodheshwa; na</li>
                 <li>Biashara Zilizoidhinishwa na Mfumo mzima isipokuwa kuomba mashirika yasiyo ya faida, maduka makubwa ya hisani na vikundi vya kuchangisha pesa ambavyo huenda visiwe na kiungo kwenye Tovuti yetu.</li>
             </ul>
            
             <p>Mashirika haya yanaweza kuunganisha kwa ukurasa wetu wa nyumbani, kwa machapisho au maelezo mengine ya Tovuti mradi tu kiungo: (a) si danganyifu kwa njia yoyote; (b) haimaanishi kwa uwongo ufadhili, uidhinishaji au idhini ya mhusika anayeunganisha na bidhaa na/au huduma zake; na (c) inafaa ndani ya muktadha wa tovuti ya mhusika anayeunganisha.</p>
            
             <p>Tunaweza kuzingatia na kuidhinisha maombi mengine ya kuunganisha kutoka kwa aina zifuatazo za mashirika:</p>
            
             <ul>
                 <li>vyanzo vya habari vya watumiaji na/au vya biashara vinavyojulikana sana;</li>
                 <li>tovuti za jumuiya za dot.com;</li>
                 <li>vyama au vikundi vingine vinavyowakilisha mashirika ya kutoa misaada;</li>
                 <li>wasambazaji wa saraka za mtandaoni;</li>
                 <li>lango za mtandao;</li>
                 <li> makampuni ya uhasibu, sheria na ushauri; na</li>
                 <li>taasisi za elimu na vyama vya biashara.</li>
             </ul>
            
             <p>Tutaidhinisha maombi ya kuunganisha kutoka kwa mashirika haya ikiwa tutaamua kwamba: (a) kiungo hakitatufanya tuonekane vibaya kwetu au kwa biashara zetu zilizoidhinishwa; (b) shirika halina rekodi zozote mbaya kwetu; (c) manufaa kwetu kutokana na mwonekano wa kiungo hufidia kutokuwepo kwa Mados Group; na (d) kiungo kiko katika muktadha wa taarifa ya jumla ya rasilimali.</p>
            
             <p> Mashirika haya yanaweza kuunganishwa na ukurasa wetu wa nyumbani mradi tu kiungo: (a) si danganyifu kwa njia yoyote; (b) haimaanishi kwa uwongo ufadhili, uidhinishaji au idhini ya mhusika anayeunganisha na bidhaa au huduma zake; na (c) inafaa ndani ya muktadha wa tovuti ya mhusika anayeunganisha.</p>
            
             <p>Ikiwa wewe ni mojawapo ya mashirika yaliyoorodheshwa katika aya ya 2 hapo juu na ungependa kuunganisha kwenye tovuti yetu, ni lazima utufahamishe kwa kutuma barua pepe kwa Mados Group. Tafadhali jumuisha jina lako, jina la shirika lako, maelezo ya mawasiliano pamoja na URL ya tovuti yako, orodha ya URL zozote ambazo unakusudia kuunganisha kwa Tovuti yetu, na orodha ya URL kwenye tovuti yetu ambayo ungependa kiungo. Subiri wiki 2-3 kwa jibu.</p>
            
             <p>Mashirika yaliyoidhinishwa yanaweza kuunganisha kwenye Tovuti yetu kama ifuatavyo:</p>
            
             <ul>
                 <li>Kwa kutumia jina la shirika letu; au</li>
                 <li>Kwa kutumia kitafuta rasilimali sare kinachounganishwa na; au</li>
                 <li>Kwa kutumia maelezo mengine yoyote ya Tovuti yetu kuunganishwa na ambayo yanaeleweka ndani ya muktadha na muundo wa maudhui kwenye tovuti ya mhusika anayeunganisha.</li>
             </ul>
            
             <p>Hakuna matumizi ya nembo ya Mados Group au kazi nyingine ya sanaa itaruhusiwa kwa kuunganisha kutokuwepo kwa makubaliano ya leseni ya chapa ya biashara.</p>
                <h3><strong>iFrames</strong></h3>
            
             <p>Bila idhini ya awali na ruhusa iliyoandikwa, huwezi kuunda fremu karibu na Kurasa zetu za Wavuti ambazo hubadilisha kwa njia yoyote uwasilishaji wa taswira au mwonekano wa Tovuti yetu.</p>
            
             <h3><strong>Dhima ya Maudhui</strong></h3>
            
             <p>Hatutawajibika kwa maudhui yoyote yatakayoonekana kwenye Tovuti yako. Unakubali kutulinda na kututetea dhidi ya madai yote yanayoongezeka kwenye Tovuti yako. Hakuna kiungo/viungo vinavyopaswa kuonekana kwenye Tovuti yoyote ambayo inaweza kufasiriwa kama kashfa, uchafu au jinai, au ambayo inakiuka, vinginevyo inakiuka, au kutetea ukiukaji au ukiukaji mwingine wa, haki zozote za wahusika wengine.</p>
            
             <h3><strong>Uhifadhi wa Haki</strong></h3>
            
             <p>Tunahifadhi haki ya kukuomba uondoe viungo vyote au kiungo chochote cha Tovuti yetu. Unaidhinisha kuondoa mara moja viungo vyote vya Tovuti yetu kwa ombi. Pia tunahifadhi haki ya kurekebisha sheria na masharti haya na inaunganisha sera wakati wowote. Kwa kuendelea kuunganisha kwenye Tovuti yetu, unakubali kuunganishwa na kufuata sheria na masharti haya ya kuunganisha.</p>
            
             <h3><strong>Kuondolewa kwa viungo kutoka kwa tovuti yetu</strong></h3>
            
             <p>Ukipata kiungo chochote kwenye Tovuti yetu ambacho kinakera kwa sababu yoyote ile, uko huru kuwasiliana nasi na kutujulisha wakati wowote. Tutazingatia maombi ya kuondoa viungo lakini hatuwajibikiwi au hivyo au kukujibu moja kwa moja.</p>
            
             <p>Hatuhakikishi kuwa maelezo kwenye tovuti hii ni sahihi, hatutoi utimilifu au usahihi wake; wala hatuahidi kuhakikisha kwamba tovuti inaendelea kupatikana au kwamba nyenzo kwenye tovuti inasasishwa.</p>
            
             <h3><strong>Kanusho</strong></h3>
            
             <p>Kwa kiwango cha juu kinachoruhusiwa na sheria inayotumika, hatujumuishi uwakilishi, dhamana na masharti yote yanayohusiana na tovuti yetu na matumizi ya tovuti hii. Hakuna chochote katika kanusho hiki kitakacho:</p>
            
             <ul>
                 <li>kuwekea mipaka au kutojumuisha dhima yetu au yako kwa kifo au jeraha la kibinafsi;</li>
                 <li>kuwekea mipaka au kuwatenga dhima yetu au yako kwa ulaghai au uwakilishi mbaya wa ulaghai;</li>
                 <li>weka kikomo cha dhima zetu zozote au zako kwa njia yoyote ambayo hairuhusiwi chini ya sheria inayotumika; au</li>
                 <li>ondoa dhima zetu zozote au dhima zako ambazo haziwezi kujumuishwa chini ya sheria inayotumika.</li>
             </ul>
            
             <p>Masharti na makatazo ya dhima yaliyowekwa katika Sehemu hii na mahali pengine katika kanusho hili: (a) yanategemea aya iliyotangulia; na (b) itasimamia dhima zote zinazotokana na kanusho, ikijumuisha dhima zinazotokana na mkataba, katika uvunjaji wa sheria na kwa ukiukaji wa wajibu wa kisheria.</p>
            
             <p>Mradi tovuti na maelezo na huduma kwenye tovuti hutolewa bila malipo, hatutawajibika kwa hasara au uharibifu wowote wa aina yoyote.</p>
             `,
        }[locale]}
    `;
}



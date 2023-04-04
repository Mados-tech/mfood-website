
export const Logo = (locale, homePath) => {
    return `
    <a href="${homePath}" class="nav-logo flex">
        <img class="cie-logo" alt="aparic logo" src="https://dpictures.s3.amazonaws.com/aparic/logo.png" />
        <p class="light">ASSOCIATION POUR LA PROMOTION
            <br />
            ET L'ACCOMPAGNEMENT RENFORCÉ
            <br />
            DES INITIATIVES COMMUNAUTAIRES
        </p>
    </a>
    `
}

export const MenuGrid = (locale, homePath) => {
    return `
<div class="footer-items">
    <div class="footer-block">
        <img id="logo-footer" alt="Mfood Logo" src="./images/mfood_logo.png" />
        <div class="footer-block-menu">
        </div>
    </div>
    <div class="footer-item">
    <div class="footer-item-links">
        <a href="${homePath}adresse">Features</a>
        <a href="${homePath}adresse">Pricing</a>
        <a href="${homePath}adresse">Advantages</a>
    </div>
    </div>
    <div class="footer-item">
        <div class="footer-item-links">
            <a href="${homePath}vision">Get in touch</a>
            <a href="${homePath}but">Request a demo</a>
            <a href="${homePath}mission">Privacy policies</a>
            <a href="${homePath}mission">Terms and conditions</a>
        </div>
    </div>
    <div class="footer-item">
    <div class="footer-item-links">
    <a href="${homePath}devenir-membre">FAQ</a>
        <a href="${homePath}devenir-membre">Become a partner</a>
        <a href="${homePath}devenir-membre">Suggest a feature</a>
    </div>
</div>
    <div class="footer-item">
    <div class="footer-item-links">
        <a href="${homePath}adresse">Google Play</a>
        </div>
    </div>

    <div class="footer-item">
        <div class="footer-item-links">
            
        </div>
    </div>

</div>
    `
}

export const Footer = (locale, homePath) => {
    return `
    ${MenuGrid(locale, homePath)}
    <div>© Copyright Mados Group</div>
    `
}

export const NavHolder = (locale, homePath) => {
    return `
    <div class="footer-header">
        ${Logo(locale, homePath)}
        <i id="close-menu-holder" class="fa fa-close" onclick="displayMenu(0)"></i>
    </div>
    ${MenuGrid(locale, homePath)}
    `
}

export const NavBar = (locale, homePath) => {
    return `
        <div class="nav-header">
            <div class="social-nav">
                <a target="_blank" href="https://facebook.com/aparic"><i class="fa-brands fa-facebook"></i></a>
                <a target="_blank" href="https://twitter.com/aparic"><i class="fa-brands fa-twitter"></i></a>
                <a target="_blank" href="https://instagram.com/aparic"><i class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://youtube.com/aparic"><i class="fa-brands fa-youtube"></i></a>
            </div>
            <div class="social-nav contact-nav">
                <a href="mailto:aparicassociation2022@gmail.com" class="icon-text flex column-gap-middle mail-contact">
                    <i class="fa fa-envelope"></i>
                    <p>aparicassociation2022@gmail.com</p>
                </a>
                <a class="icon-text flex column-gap-middle">
                    <i class="fa fa-clock"></i>
                    <p>Lun - Sam 8:00' - 16:00'</p>
                </a>
                <i id="bars-menu" class="fa fa-bars" onclick="displayMenu(1)"></i>
            </div>
        </div>
        <div class="nav-menu-holder">${NavHolder(locale, homePath)}</div>
    `;
}

export const Partners = (locale, homePath, list, status, yearOf) => {
    console.log(yearOf, locale, status);
    const partners = list;
    const finalP = partners.filter((element) => element.status === status);
    return `${finalP.map((e) => {
        console.log(e);
        return `<div class="partner-item">
                    <img src="${e.photo ?? " https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/mathier190500002.jpg?ver=6"}" />
                    <p class="p-medium bold">${e.name}</p>
                    <p class="partner-comment">${e.comment}</p>
                    <a href=${e.letter}>Lettre de partenariat</a>
                </div>`;
    })}`.replaceAll(",", "");
}

export const ImprovedLife = (locale, homePath, store, year) => {

    if (!Object.keys(store).length) return `<p class="large-subtitle">Nous n'avons pas de données pour ${year}</p>`;
    const { sexWorkers, drugDealers, madPeople } = store;

    function getSubTotal(object) {
        const { male, female } = object;
        return male + female;
    }

    function getTotal() {
        return sexWorkers + getSubTotal(drugDealers) + getSubTotal(madPeople);
    }

    return `
        <div class="dot-p">
        <p class="large-title">Total</p>
        <p class="large-title">${getTotal()}</p>
        </div>
        <p class="section-title large-subtitle title-filter">Travailleuses de sexe<span>${sexWorkers}</span></p>
        <p class="section-title large-subtitle title-filter">Usagers de drogue<span>${getSubTotal(drugDealers)}</span></p>
        <p class="p-medium">♀ Femme ${drugDealers.female} <br/>♂ Homme ${drugDealers.male}</p>
        <p class="section-title large-subtitle title-filter">Malades mentaux<span>${getSubTotal(madPeople)}</span></p>
        <p class="p-medium">♀ Femme ${madPeople.female} <br/>♂ Homme ${madPeople.male}</p>
    `;
}

export const ProvinceOfIntervention = (locale, homePath, provinces) => {
    return `
    <p class="large-subtitle">
    ${provinces.map((e) => {
        return `•${e} <br/><br/>`;
    })}
    </p>
    `.replaceAll(",", "");
}

export const NumberStat = (locale, homePath, store) => {
    const { improvedLife, provincesOfInterventions, partner } = store;

    function getSubTotal(object) {
        const { male, female } = object;
        return male + female;
    }

    function getTotal(sexWorkers, drugDealers, madPeople) {
        return sexWorkers + getSubTotal(drugDealers) + getSubTotal(madPeople);
    }


    function getImprovedLifeTotal(storeOfImprovedLife) {
        var total = 0;
        for (var stringKey of Object.keys(storeOfImprovedLife)) {
            console.log(stringKey, Number(stringKey))
            const { sexWorkers, drugDealers, madPeople } = storeOfImprovedLife[Number(stringKey)];
            total += getTotal(sexWorkers, drugDealers, madPeople);
        }
        return total;
    }
    return `
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Fondé en</h1>
            <p class="large-title">2021</p>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Membres adhérents</h1>
            <p class="large-title">14</p>
            <!-- <a href="">En savoir plus</a> -->
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Des vies améliorées</h1>
            <p class="large-title">${getImprovedLifeTotal(improvedLife)}</p>
            <a href="./vie-ameliorees/">En savoir plus</a>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Nos partenaires</h1>
            <p class="large-title">${partner.list.length}</p>
            <a href="./partenaires/">En savoir plus</a>
        </div>
        <div class="bordered-item">
            <h1 class="b-t-title p-medium">Provinces d’intervention</h1>
            <p class="large-title">${provincesOfInterventions.length}</p>
            <a href="./provinces-d-intervention/">En savoir plus</a>
        </div>
    `;
}


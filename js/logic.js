import { NavBar, Footer, Partners, ImprovedLife, ProvinceOfIntervention, NumberStat } from './components.js';

const homePath = localStorage.getItem('home') ?? '/';


const defaultPayload = {
    partner: {
        year: Number(new Date().getFullYear()),
        list: [
            {
                name: "Ministère de  l’Education Nationale et de la Recherche Scientifique",
                comment: "",
                letter: "",
                year: 2022,
                status: "public",
            },
            {
                name: "Ministère de la Fonction Publique, du Travail et de l’Emploi",
                comment: "",
                letter: "",
                year: 2022,
                status: "public",
            },
            {
                name: "Ministère des Affaires de la Communauté Est Africaine, de la Jeunesse, des Sports et de la Culture",
                comment: "",
                letter: "",
                year: 2022,
                status: "public",
            },
            {
                name: "Ministère de la Femme, de la Solidarité nationale, de la Famille et de l'Action humanitaire",
                comment: "",
                letter: "",
                year: 2022,
                status: "public",
            },
            {
                name: "ALCS Tabara",
                comment: "",
                letter: "",
                year: 2022,
                status: "associative",
            },
            {
                name: "Fédération Nationale des Associations engagées dans le Domaine de l'Enfance au Burundi, FENADEB",
                comment: "",
                letter: "",
                year: 2022,
                status: "associative",
            },
            {
                name: "Jeunesse Porte flambeau contre le Sida et la Drogue, JPCSD",
                comment: "",
                letter: "",
                year: 2022,
                status: "associative",
            },
            {
                name: "Fédération des pêcheurs et fournisseurs des poissons au Burundi/ Coopérative des Pêche pour le Développement du Commerce de Poissons au Burundi, FPFPB/ COPEDECOBU",
                comment: "",
                letter: "",
                year: 2022,
                status: "associative",
            }
        ],

    },
    provincesOfInterventions: ["Bujumbura Mairie", "Muramvya", "Cibitoke", "Gitega"],
    improvedLife: {
        2022: {
            sexWorkers: 168,
            drugDealers: {
                male: 62,
                female: 25,
            },
            madPeople: {
                male: 25,
                female: 22,
            },
        },
    }
};

function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function insertTemplates({ locale = 'fr', payload = {} }) {
    const { partner } = payload;
    innerHTML('.nav-headers-menu', NavBar(locale, homePath));
    innerHTML('#footer', Footer(locale, homePath));
    innerHTML('#province-d-intervention', ProvinceOfIntervention(locale, homePath, payload.provincesOfInterventions));
    innerHTML('#numbers-section', NumberStat(locale, homePath, payload));
    innerHTML('#public-parters', Partners(locale, homePath, defaultPayload.partner.list, "public", partner.year));
    innerHTML('#associative-parters', Partners(locale, homePath, defaultPayload.partner.list, "associative", partner.year));
    innerHTML('#improved-life', ImprovedLife(locale, homePath, defaultPayload.improvedLife[Number(new Date().getFullYear())] ?? {}, Number(new Date().getFullYear())));
}

insertTemplates({ locale: 'fr', payload: defaultPayload });


function selectListener({ key = "", onChange = () => { } }) {
    if (document.getElementById(key)) {
        document.getElementById(key).onchange = function (e) {
            const { value } = e.target;
            onChange(value);

        }
    }
}

selectListener({
    key: "filter_partner", onChange: (value) => {
        innerHTML('#public-parters', Partners('fr', homePath, defaultPayload.partner.list, "public", Number(value)));
        innerHTML('#associative-parters', Partners('fr', homePath, defaultPayload.partner.list, "associative", Number(value)));
    }
});

selectListener({
    key: "filter_improvedLife", onChange: (value) => {
        innerHTML('#improved-life', ImprovedLife('fr', homePath, defaultPayload.improvedLife[Number(value)] ?? {}, Number(value)));
    }
});

import { NavBar, Footer, Title, LandingLeft, RunBusiness, MultiCurrencies, FoodAndMenu, PricingSection,AdvantagesSection } from './components.js';

const homePath = localStorage.getItem('home') ?? '/';

const defaultPayload = {};

function innerHTML(key, html) {
    if (document.querySelector(key)) {
        document.querySelectorAll(key).forEach((element) => {
            element.innerHTML = html;
        });
    }
}

function selectListener({ key = "", onChange = () => { } }) {
    if (document.getElementById(key)) {
        document.getElementById(key).onchange = function (e) {
            const { value } = e.target;
            onChange(value);

        }
    }
}

function insertTemplates({ locale = 'fr', payload = {} }) {
    const { partner } = payload;
    innerHTML('#nav', NavBar(locale, homePath));
    innerHTML('#landing-left', LandingLeft(locale, homePath));
    innerHTML('#run-business', RunBusiness(locale, homePath));
    innerHTML('#multi-currencies', MultiCurrencies(locale, homePath));
    innerHTML('#food-menu', FoodAndMenu(locale, homePath));
    innerHTML('.pricing-section', PricingSection(locale, homePath));
    innerHTML('.advantages-section', AdvantagesSection(locale, homePath));
    innerHTML('#title', Title(locale, homePath));
    innerHTML('#footer', Footer(locale, homePath));
    selectListener({
        key: "lng-changer", onChange: (value) => {
            insertTemplates({ locale: String(value), payload: defaultPayload });
        }
    });
}

insertTemplates({ locale: 'en', payload: defaultPayload });


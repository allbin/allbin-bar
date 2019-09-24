import oh, { TypedDictionary } from 'output-helpers';

type Keys = 
    | 'allbin'
    | 'allbin_link_text'
    | 'about'
    | 'a_tool_by_allbin'
    | 'account_information'
    | 'change_password'
    | 'changed'
    | 'changelog_info'
    | 'changelog'
    | 'close'
    | 'company_info_1'
    | 'company_info_2'
    | 'company_info_3'
    | 'contact'
    | 'contact_text'
    | 'current_version'
    | 'email_us'
    | 'email'
    | 'first_name'
    | 'fixed'
    | 'help'
    | 'language'
    | 'last_name'
    | 'logged_in_as'
    | 'logout'
    | 'new'
    | 'reset_password_info'
    | 'sent'
    | 'to_dashboard'
    | 'updated'
    | 'username'
    ;

export type Dictionary = { [key in Keys]: string };

const dictionary: TypedDictionary<Dictionary> = {
    // 'prefix': 'allbin_bar_',
    'sv-SE': {
        allbin: "All Binary",
        allbin_link_text: "https://www.allbinary.se",
        about: 'om verktyget',
        a_tool_by_allbin: 'ett verktyg av All Binary',
        account_information: 'kontoinformation',
        change_password: 'byt lösenord',
        changed: 'ändrat',
        changelog: 'versionshistorik',
        changelog_info: 'Versionshistoriken visar vad som hänt vid varje större release av verktyget.',
        close: 'stäng',
        company_info_1: `All Binary verkar inom två huvudsakliga affärsområden med den gemensamma nämnaren
            att vi underlättar hantering, visualisering och användning av data.`,
        company_info_2: `Affärsområdet Transport tar fasta på att det aldrig varit viktigare än nu att resa mer kollektivt.
            Vi underlättar analys och planering av kollektivtrafiken genom att visualisera data från realtidssystem och
            biljettsystem samt skapar verktyg för inventering av hållplatser och ärendehantering.`,
        company_info_3: `Affärsområdet IOE med produkten SenseView har som mål att underlätta utbyggnaden av den smarta
            staden. Vi tror på kraften i att experimentera med många olika sensorer och pilotprojekt för att skapa
            underlag för större investeringar och upphandlingar när man påvisat värde och fått med fler på tåget.
            SenseViews syfte är att underlätta och visuellt visa upp de pågående pilotprojekt som en stad genomför.`,
        contact: 'kontakt',
        contact_text: 'Att resa tillsammans har aldrig varit viktigare. Vi underlättar analys och planering av kollektivtrafiken genom att visualisera data från realtidssystem och biljettsystem samt skapar verktyg för inventering av hållplatser och ärendehantering.',
        current_version: 'nuvarande version',
        email_us: 'skicka epost till oss',
        email: 'epost',
        first_name: 'förnamn',
        fixed: 'åtgärdat',
        help: 'hjälp',
        language: 'språk',
        last_name: 'efternamn',
        logout: 'logga ut',
        logged_in_as: 'inloggad som',
        new: 'nytt',
        reset_password_info: 'när du klickar på knappen skickas ett epost till följande adress med instruktioner',
        sent: 'skickat',
        to_dashboard: 'till Dashboard',
        updated: 'uppdaterat',
        username: 'användarnamn',
    },
    'en-US': {
        //UI
        allbin: "All Binary",
        allbin_link_text: 'https://www.allbinary.se',
        about: 'about the tool',
        a_tool_by_allbin: 'a tool by All Binary',
        account_information: 'account information',
        change_password: 'change password',
        changed: 'changed',
        changelog: 'change log',
        changelog_info: 'The changelog contains a list of changes made with each significant release of the tool.',
        close: 'close',
        company_info_1: `All Binary operates within two primary business units with the common denominator that we make
            it easy to handle, visualize and use data.`,
        company_info_2: `Our Transport business unit is focused on the increasing need to travel together using public
            transit. We make analysis and planning of public transit easier by visualizing data from realtime and ticket
            systems. We also create tools for keeping track of bus stops and work order management.`,
        company_info_3: `Our IOE business unit with the product SenseView is focused on helping cities and companies
            become smarter. We believe in the power of experimenting with different sensors and pilots before investing
            in bigger systems. It is important to get more people onboard and with SenseView it is easier to show what is ongoing in the smart city or industry.`,
        contact: 'contact',
        contact_text: 'Traveling together has never been more important. We facilitate the analysis and planning of public transport by visualizing data from real-time systems and ticket systems, as well as creating tools for inventory of stops and case management.',
        current_version: 'current version',
        email_us: 'email us',
        email: 'email',
        first_name: 'first name',
        fixed: 'fixed',
        help: 'help',
        language: 'language',
        last_name: 'last name',
        logout: 'sign out',
        logged_in_as: 'logged in as',
        new: 'new',
        reset_password_info: 'when you click the button an email will be sent to the follow address with instructions',
        sent: 'sent',
        to_dashboard: 'to Dashboard',
        updated: 'updated',
        username: 'username',
    },
};

const translate = (key: keyof Dictionary, capitalize: boolean = true) => {
    return oh.translateTyped<Dictionary>(key, capitalize, undefined, undefined, dictionary);
};

export { dictionary };
export default translate;

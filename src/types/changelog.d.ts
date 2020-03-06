type Changelog = {
            title: TranslatedString,
            changes?: TranslatedString[]
}[];
type TranslatedString =  {
    [key in import('output-helpers').LangId]: string;
};


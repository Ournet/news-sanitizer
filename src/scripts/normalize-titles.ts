import { getSupportedLanguages, readDataTitles, writeDataTitles } from "../data";

async function normalize() {

    const languages = getSupportedLanguages();

    for (const lang of languages) {
        const titles = await readDataTitles(lang);
        await writeDataTitles(lang, titles);
    }

}

normalize()

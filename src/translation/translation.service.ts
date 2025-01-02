import { Injectable, BadRequestException } from '@nestjs/common';
import { TargetLanguageCode, Translator } from 'deepl-node';

@Injectable()
export class TranslationService {
    private translator: Translator;

    constructor() {
        this.translator = new Translator('YOUR_DEEPL_API_KEY');
    }

    async translateText(text: string, targetLang: TargetLanguageCode) {
        try {
            const result = await this.translator.translateText(text, null, targetLang);
            return { original: text, translated: result.text };
        } catch (error) {
            throw new BadRequestException(`Translation failed: ${error.message}`);
        }
    }
}

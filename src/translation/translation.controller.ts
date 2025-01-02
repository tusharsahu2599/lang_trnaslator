import { Controller, Post, Body, Get } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translation')
export class TranslationController {
    constructor(private readonly translationService: TranslationService) { }

    @Post()
    async translate(@Body() body: { text: string; targetLang: string }) {
        const { text, targetLang } = body;
        return this.translationService.translateText(text, targetLang);
    }
    @Get('test')
    async test() {
        return 'hello'
    }
}

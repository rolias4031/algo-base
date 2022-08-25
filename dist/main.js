"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const compression = require("compression");
async function bootstrap() {
    const appOptions = {
        cors: true,
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, appOptions);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.use((0, helmet_1.default)());
    app.use(compression());
    await app.listen(process.env.PORT || 3333);
}
bootstrap();
//# sourceMappingURL=main.js.map
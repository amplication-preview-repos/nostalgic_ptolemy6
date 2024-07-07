import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RsvpModuleBase } from "./base/rsvp.module.base";
import { RsvpService } from "./rsvp.service";
import { RsvpController } from "./rsvp.controller";
import { RsvpResolver } from "./rsvp.resolver";

@Module({
  imports: [RsvpModuleBase, forwardRef(() => AuthModule)],
  controllers: [RsvpController],
  providers: [RsvpService, RsvpResolver],
  exports: [RsvpService],
})
export class RsvpModule {}

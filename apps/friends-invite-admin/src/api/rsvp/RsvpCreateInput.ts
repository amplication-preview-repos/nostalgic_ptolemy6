import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RsvpCreateInput = {
  event?: EventWhereUniqueInput | null;
  responseStatus?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};

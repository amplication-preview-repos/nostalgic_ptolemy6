import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RsvpWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  responseStatus?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
};

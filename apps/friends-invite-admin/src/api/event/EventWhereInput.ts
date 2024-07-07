import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RsvpListRelationFilter } from "../rsvp/RsvpListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  rsvps?: RsvpListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

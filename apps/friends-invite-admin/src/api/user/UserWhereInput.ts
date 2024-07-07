import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RsvpListRelationFilter } from "../rsvp/RsvpListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  rsvps?: RsvpListRelationFilter;
  username?: StringFilter;
};

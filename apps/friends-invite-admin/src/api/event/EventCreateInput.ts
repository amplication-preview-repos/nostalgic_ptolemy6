import { RsvpCreateNestedManyWithoutEventsInput } from "./RsvpCreateNestedManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  rsvps?: RsvpCreateNestedManyWithoutEventsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

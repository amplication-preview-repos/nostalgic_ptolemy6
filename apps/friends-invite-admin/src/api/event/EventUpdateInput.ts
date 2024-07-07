import { RsvpUpdateManyWithoutEventsInput } from "./RsvpUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  rsvps?: RsvpUpdateManyWithoutEventsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};

import { EventUpdateManyWithoutUsersInput } from "./EventUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RsvpUpdateManyWithoutUsersInput } from "./RsvpUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutUsersInput;
  fullName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  rsvps?: RsvpUpdateManyWithoutUsersInput;
  username?: string;
};

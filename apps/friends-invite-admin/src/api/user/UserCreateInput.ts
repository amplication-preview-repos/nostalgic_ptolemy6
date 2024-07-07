import { EventCreateNestedManyWithoutUsersInput } from "./EventCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RsvpCreateNestedManyWithoutUsersInput } from "./RsvpCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutUsersInput;
  fullName?: string | null;
  password: string;
  roles: InputJsonValue;
  rsvps?: RsvpCreateNestedManyWithoutUsersInput;
  username: string;
};

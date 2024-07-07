import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { Rsvp } from "../rsvp/Rsvp";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  fullName: string | null;
  id: string;
  roles: JsonValue;
  rsvps?: Array<Rsvp>;
  updatedAt: Date;
  username: string;
};

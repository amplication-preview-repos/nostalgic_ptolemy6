import { Event } from "../event/Event";
import { User } from "../user/User";

export type Rsvp = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  responseStatus?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};

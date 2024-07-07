/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Rsvp } from "./Rsvp";
import { RsvpCountArgs } from "./RsvpCountArgs";
import { RsvpFindManyArgs } from "./RsvpFindManyArgs";
import { RsvpFindUniqueArgs } from "./RsvpFindUniqueArgs";
import { CreateRsvpArgs } from "./CreateRsvpArgs";
import { UpdateRsvpArgs } from "./UpdateRsvpArgs";
import { DeleteRsvpArgs } from "./DeleteRsvpArgs";
import { Event } from "../../event/base/Event";
import { User } from "../../user/base/User";
import { RsvpService } from "../rsvp.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rsvp)
export class RsvpResolverBase {
  constructor(
    protected readonly service: RsvpService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "read",
    possession: "any",
  })
  async _rsvpsMeta(
    @graphql.Args() args: RsvpCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Rsvp])
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "read",
    possession: "any",
  })
  async rsvps(@graphql.Args() args: RsvpFindManyArgs): Promise<Rsvp[]> {
    return this.service.rsvps(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Rsvp, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "read",
    possession: "own",
  })
  async rsvp(@graphql.Args() args: RsvpFindUniqueArgs): Promise<Rsvp | null> {
    const result = await this.service.rsvp(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rsvp)
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "create",
    possession: "any",
  })
  async createRsvp(@graphql.Args() args: CreateRsvpArgs): Promise<Rsvp> {
    return await this.service.createRsvp({
      ...args,
      data: {
        ...args.data,

        event: args.data.event
          ? {
              connect: args.data.event,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Rsvp)
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "update",
    possession: "any",
  })
  async updateRsvp(@graphql.Args() args: UpdateRsvpArgs): Promise<Rsvp | null> {
    try {
      return await this.service.updateRsvp({
        ...args,
        data: {
          ...args.data,

          event: args.data.event
            ? {
                connect: args.data.event,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Rsvp)
  @nestAccessControl.UseRoles({
    resource: "Rsvp",
    action: "delete",
    possession: "any",
  })
  async deleteRsvp(@graphql.Args() args: DeleteRsvpArgs): Promise<Rsvp | null> {
    try {
      return await this.service.deleteRsvp(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Event, {
    nullable: true,
    name: "event",
  })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async getEvent(@graphql.Parent() parent: Rsvp): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Rsvp): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

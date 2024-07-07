/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RsvpWhereInput } from "./RsvpWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RsvpOrderByInput } from "./RsvpOrderByInput";

@ArgsType()
class RsvpFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RsvpWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RsvpWhereInput, { nullable: true })
  @Type(() => RsvpWhereInput)
  where?: RsvpWhereInput;

  @ApiProperty({
    required: false,
    type: [RsvpOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RsvpOrderByInput], { nullable: true })
  @Type(() => RsvpOrderByInput)
  orderBy?: Array<RsvpOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RsvpFindManyArgs as RsvpFindManyArgs };
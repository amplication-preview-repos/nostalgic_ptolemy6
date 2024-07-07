/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RsvpWhereInput } from "./RsvpWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RsvpListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RsvpWhereInput,
  })
  @ValidateNested()
  @Type(() => RsvpWhereInput)
  @IsOptional()
  @Field(() => RsvpWhereInput, {
    nullable: true,
  })
  every?: RsvpWhereInput;

  @ApiProperty({
    required: false,
    type: () => RsvpWhereInput,
  })
  @ValidateNested()
  @Type(() => RsvpWhereInput)
  @IsOptional()
  @Field(() => RsvpWhereInput, {
    nullable: true,
  })
  some?: RsvpWhereInput;

  @ApiProperty({
    required: false,
    type: () => RsvpWhereInput,
  })
  @ValidateNested()
  @Type(() => RsvpWhereInput)
  @IsOptional()
  @Field(() => RsvpWhereInput, {
    nullable: true,
  })
  none?: RsvpWhereInput;
}
export { RsvpListRelationFilter as RsvpListRelationFilter };
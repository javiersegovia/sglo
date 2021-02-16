import {
  IsNotEmpty,
  Length,
  IsUppercase,
  IsUrl,
  IsNumber,
  IsString,
} from 'class-validator'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCountryInput {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsUrl()
  flag: string

  @IsNotEmpty()
  @Length(2)
  @IsUppercase()
  @IsString()
  code2: string
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: () => "string",
    default: "email@gmail.com",
    description: "Email of the user",
  })
  email: string = "";

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: () => "string",
    default: "password",
    description: "Password of the user",
  })
  password: string = "";
}

import { ApiProperty } from "@nestjs/swagger";

export class SigninUserDTO {
    @ApiProperty({example: 'example@example.com'})
    email: string;

    @ApiProperty({example: '********'})
    password: string;
}
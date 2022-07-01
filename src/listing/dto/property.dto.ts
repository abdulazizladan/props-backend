import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreatePropertyDTO{
    @ApiProperty({readOnly: true})
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    @IsInt()
    price: number;

    @ApiProperty()
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    streetAddress: string;
    
    @ApiProperty()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    @IsNotEmpty()
    user: string;

    @ApiProperty({default: () => Date.now()})
    dateCreated: Date;

    dateModified: Date;
}

export class UpdatePropertyDTO {
    
    @ApiProperty()
    price: number;

    @ApiProperty()
    status: string;
}
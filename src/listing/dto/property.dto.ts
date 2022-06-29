import { ApiProperty } from "@nestjs/swagger";

export class CreatePropertyDTO{
    @ApiProperty({readOnly: true})
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    streetAddress: string;
    
    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    user: string;

    @ApiProperty({default: () => Date.now()})
    dateCreated: Date;

    dateModified: Date;
}
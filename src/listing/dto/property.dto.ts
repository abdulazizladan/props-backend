export class CreatePropertyDTO{
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public type: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public image: string,
        public user: string,
    ){}
}
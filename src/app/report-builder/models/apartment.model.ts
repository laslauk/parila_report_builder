export class Apartment {
    public floor?: string;
    public walls?: string;
    public roof?: string;

    constructor(floor: string, walls: string, roof: string)
    {
        this.floor = floor;
        this.walls = walls;
        this.roof = roof;
    }
}
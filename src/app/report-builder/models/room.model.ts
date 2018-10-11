export class Room {
    public location?: string;
    public floor?: string;
    public walls?: string;
    public roof?: string

    constructor( location: string, floor: string, wall: string, roof: string)
    {
        this.location = location;
        this.floor = floor;
        this.walls = wall;
        this.roof = roof;
    }
}


export class KPH {
    public location?: string;
    public floor?: string;
    public walls?: string;
    public roof?: string
    public IVPipes?: string
    public surfaceMaterial?: string

    constructor( location: string, floor: string, walls: string, roof: string, IVPipes: string, surfaceMaterial: string)
    {
        this.location = location;
        this.floor = floor;
        this.walls = walls;
        this.roof = roof;
        this.surfaceMaterial = surfaceMaterial;
        this.IVPipes = IVPipes
    }
}

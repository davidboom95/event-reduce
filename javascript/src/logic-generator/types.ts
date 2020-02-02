export interface Human {
    _id: string; // primary
    name: string;
    gender: 'm' | 'f';
    age: number;
    alive: boolean;
}

export type MongoQuery = {
    selector: any;
    skip?: number;
    limit?: number;
    sort?: any[]
};
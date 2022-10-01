export interface User {
	name: string
	balance: number
}

export enum LOCATION {
	EUA = "EUA",
	BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
	BRAZILIAN = "BRAZILIAN",
	AMERICAN = "AMERICAN",
}

export interface UserCasino {
	name: string;
	age: number;
	nacionality: NACIONALITY;
}

export interface Casino {
	name: string;
	location: LOCATION;
}

export interface ResultNation {
	brazilians: ResultPermission;
	americans: ResultPermission;
}

export interface ResultPermission {
	allowedUsers: string[];
	unallowedUsers: string[];
}
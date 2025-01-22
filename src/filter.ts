export interface Filter {
    name: string;
    fieldName: string;
    regex: RegExp;
};

export type Field = "name" | "company" | "location";
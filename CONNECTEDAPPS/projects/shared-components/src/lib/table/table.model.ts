import { ContentItemType } from "./table.component";

export interface TableSettings<T = string> {
    columns: T[];
    actions: boolean;
    
}

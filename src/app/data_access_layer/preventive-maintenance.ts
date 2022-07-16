export interface PreventiveMaintenance {
    $key: any;
    assets: [string];
    due_date: any;
    frequency: string;
    labor: Map<string, string>;
    name: string;
    procedure: Map< number, Map<string, boolean> >;
    sector_team: string;
    start_date: any;
    status: string,
    summary: string;
}

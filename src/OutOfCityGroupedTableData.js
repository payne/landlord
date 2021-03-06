import outOfCityGroupedData from "./data/ownerInNebraskaOutOfOmahaGrouping.json";

export const outOfCityGroupedTableData = {
    title: "Out of Omaha landlords with the most properties",
    columns: [
        {title: 'Owner Name', field: 'OWNER'},
        {title: 'Number of Properties', field: 'PROPERTY_COUNT', defaultSort: 'desc'},
    ],
    parcels: outOfCityGroupedData,
}

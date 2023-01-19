
import { GridColDef } from '@mui/x-data-grid';
import { TfgTheme } from '../../../components/themes/TfgTheme';
import { IVaccine } from '../../../interfaces';
import { StyledDataGrid } from './DataTable.styles';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Name', width: 300 },
  { field: 'category', headerName: 'Category', width: 200},
  { field: 'phase', headerName: 'Phase', width: 100},
  { field: 'developerResearcher', headerName: 'Developer / Researcher', width: 300},
  { field: 'funder', headerName: 'Funder', width: 200},
];

export const DataTable = ({ vaccines } : any) =>  {
  const rows = vaccines.map((vac: IVaccine) => ({
    id: vac.trimedName,
    category: vac.category,
    phase: vac.phase,
    developerResearcher: vac.developerResearcher,
    funder: vac.funder !== 'undefined' ? vac.funder : 'N/A'
  }))
  
  return (
    <div style={{ 
      display: 'flex',
      height: 500,
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center' }}>
      <StyledDataGrid sx={{ color: TfgTheme.palette.find({color: "primary", type: 'contrastText'})}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

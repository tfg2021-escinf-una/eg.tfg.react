import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const StyledDataGrid = styled(DataGrid)`
  box-shadow: 2;
  border: 2;
  ${({theme}) => theme.typography.create({
    weight: 'normal',
    size: 'sm',
    color: { color: 'primary', type: 'contrastText' }
  })};
  
  .MuiTablePagination-displayedRows {
    color ${({ theme }) => theme.palette.find({color: 'primary', type: 'contrastText'})};
  };
`

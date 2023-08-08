import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Ref',
    headerName: 'Ref',
    type: 'String',
    width: 150,
  },
  {
    field: 'BillDate',
    headerName: 'Bill Date',
    type: 'String',
    width: 150,
  },
  {
    field: 'NombreDeprestations',
    headerName: 'Nombre De prestations',
    type: 'String',
    width: 150,
  },
  {
    field: 'BillNumber',
    headerName: 'Bill Number',
    type: 'String',
    width: 150,
  },
  {
    field: 'DocketValue',
    headerName: 'Docket Value',
    type: 'String',
    width: 150,
  },
  {
    field: 'Statut',
    headerName: 'Statut',
    type: 'String',
    width: 150,
  },

 
];

const rows = [
  { id: 1, Ref: 'FSD45DS1', BillDate: '14/09/2020',NombreDeprestations:'56', BillNumber: '123789',DocketValue:'100 DT',Statut:'chiba9'},
  { id: 2, Ref: 'FSD45DS1', BillDate: '14/09/2020',NombreDeprestations:'56', BillNumber: '123789',DocketValue:'100 DT',Statut:'ba9'},
];

const DataTable =()=> {
  return (
    <div  style={{ height: 400, width: '100%' }}>
      <DataGrid 
       
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
export default DataTable 
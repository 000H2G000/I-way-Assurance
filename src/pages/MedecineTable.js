import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'Ref', headerName: 'Ref', width: 70 },
  { field: 'Medecin', headerName: 'Medecin', width: 130 },
  { field: 'Remboursable', headerName: 'Remboursable', width: 130 }

];

const rows = [
  { id: 1, Ref: '123456', Medecin: '7arboucha',Remboursable:'oui'},
  { id: 2, Ref: '123456', Medecin: '7arboucha',Remboursable:'oui'},
  { id: 3, Ref: '123456', Medecin: '7arboucha',Remboursable:'non'},
  { id: 4, Ref: '123456', Medecin: '7arboucha',Remboursable:'oui'},
];

const DataTable =({data})=> {
  // rows = data
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
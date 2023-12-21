import { Paper } from "@mui/material";
import Title from "./Title";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import MessageService from "../Services/MessageService";

const columns = [
  { field: 'col1', headerName: 'UserID', width: 100 },
  { field: 'col2', headerName: 'Name', width: 150 },
  { field: 'col3', headerName: 'Email', width: 150 },
  { field: 'col4', headerName: 'Message Category', width: 150 },
  { field: 'col5', headerName: 'Notification Type', width: 150 },
  { field: 'col6', headerName: 'Message', width: 300 },
  { field: 'col7', headerName: 'Date/Time', width: 230 },
];

const LogHistory = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    MessageService.getlogs().then((res) => {
      debugger
      setRows([]);
      res.map((log) => {
        setRows((prev) => [...prev, {
          id: log.id, col1: log.userId, col2: log.User.name, col3: log.User.email, col4: log.category, col5: log.type,
          col6: log.message, col7: new Date(Date.parse(log.createdAt)).toUTCString()
        }]);
      });
    });
  }, []);
  return (
    <>
      <Paper className='submission-paper' elevation={6}>
        <Title text={'Log History'} />
        <div className='submission-form-main'>
          <div className="log-table">
            <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick={true} />
          </div>
        </div>
      </Paper>
    </>
  );
}

export default LogHistory;

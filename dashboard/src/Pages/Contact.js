import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import "../Components/Datatable.css";
import ContactsStore from "../Mobx/ContactMobx";

function Contact(props) {

  
  const rows = [];   ContactsStore.hotels.forEach((contact) => {
    
    rows.push({ 
    
    id: contact.id, col1: contact.id, col2: contact.Customername, col3: contact.email, 
    col4: contact.message, 
    }); });

    const columns = [
      { field: "col1", headerName: "first", width: 150 },
      { field: "col2", headerName: "second", width: 150 },
      { field: "col4", headerName: "third", width: 150 },
  
  
  
    ];

  return (
    <div className="table" style={{ height: 500, width: "60%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        localeText={{
          toolbarDensity: "Size",
          toolbarDensityLabel: "Size",
          toolbarDensityCompact: "Small",
          toolbarDensityStandard: "Medium",
          toolbarDensityComfortable: "Large",
        }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default Contact;

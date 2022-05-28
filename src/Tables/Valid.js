import React, { useState } from "react";

import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";

export default function App() {
  const [dataStore, setDataStore] = useState([
    { name: "1Jon", job: "1Software Dev", age: 29 },
    { name: "2Jon", job: "2Software Dev", age: 2229 }
  ]);

  return (
    <div className="App">
      
      <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <MaterialTable
          columns={[
            {
              title: "Name",
              field: "name"
            },
            {
              title: "Occupation",
              field: "job"
            },
            {
              title: "Age",
              field: "age",
              type: "numeric"
            }
          ]}
          data={dataStore}
          title="Material-Table Demo"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}
          actions={[
            {
              icon: () => <SaveIcon />,
              tooltip: "Save User",
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                Save
              </Button>
            )
          }}
          options={{}}
        />
      </div>
    </div>
  );
}

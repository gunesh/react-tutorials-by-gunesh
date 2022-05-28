import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


const Paging = observer((props) =>{
  const myStore = useMyStore();

  const PageLink = ()=>{
    var rows = [];
    for (var i = 1; i <= myStore.option.total_pages; i++) {
        rows.push(<li class="page-item ">
          <button class="page-link" onClick={()=>{
            console.log('Hi',i)
          }}>{i}</button>
          </li>);
    }
    return rows;
  }

  const PagePre = ()=>{     
    return ( <li class="page-item ">
    <button class="page-link" onClick={()=>{
      console.log('Prev')
    }} aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
      <span class="sr-only"></span>
    </button>
  </li>);
  }

  const PageNext = ()=>{     
    return ( <li class="page-item ">
    <button class="page-link"  onClick={()=>{
      console.log('Next')
    }} aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
      <span class="sr-only"></span>
    </button>
  </li>);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {PagePre()}
        {PageLink()}
        {PageNext()}
       </ul>
    </nav>
  )
});

const Settings = observer((props) => {
  const myStore = useMyStore();
  const [fields, setFields] = useState({
    page: myStore.option.page,
    per_page: myStore.option.per_page,
    total_pages:myStore.option.total_pages
  });
  const changeHandler = (e) => {
    var tmpState = { ...fields, [e.target.name]: [e.target.value] };
    setFields(tmpState);
  };
  const { page, per_page,total_pages } = fields;
  const showData = () => {
    // Set Option for API call
    myStore.setApiOption(page, per_page);
    myStore.apiData((data) => {});
    console.log('E', myStore);
  };

  useEffect(() => {
    showData();
  }, []);

  const Options = ()=>{
      var rows = [];
      for (var i = 1; i <= myStore.option.total_pages; i++) {
          rows.push(<option value={i}>{i}</option>);
      }
      return rows;
  }

  
  return (
    <Fragment>



<div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]">
                <span class="glyphicon glyphicon-minus">+</span>
              </button>
          </span>
          <input type="text" name="quant[2]" class="form-control input-number" value="10" min="1" max="100" />
          <span class="input-group-btn">
              <button type="button" class="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                  <span class="glyphicon glyphicon-plus">-</span>
              </button>
          </span>
      </div>



     Count: {myStore.option.count}<br />
     Total Pages: {myStore.option.total_pages}<br />
      Page No :{' '}
      <input
        type="text"
        name="page"
        value={page}
        onChange={(e) => {
          changeHandler(e);
        }}
        placeholder="Enter Page No."
      />{' '} 
      Per Page :{' '}

      {/* <select value={per_page} name="per_page"  onChange={(e) => {
        console.log('WWW',e.target.value)
          changeHandler(e);
          showData();
        }}>
        {Options()} 
      </select> */}
      <input
        type="text"
        name="per_page"
        value={per_page}
        onChange={(e) => {
          changeHandler(e);
        }}
        placeholder="Enter Per Page Record"
      />{' '}
      <br /> <br />
      <button
        onClick={() => {
          showData();
        }}
      >
        Get Data From API with Setting
      </button>
      <br />
      <br />
      {/* {myStore.option.total_pages && } */}
    </Fragment>
  );
});

const TableData = ({ id, first_name, last_name, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};
const TableHead = () => {
  return (
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  );
};

const Table = () => {
  const myStore = useMyStore();

  return (
    <Fragment>
      {/* <Paging /> */}
      <Settings onLoad={}/>
      <BlockUi blocking={myStore.loader}>
        <table
          className="table table-striped table-bordered"
          border="1"
          width="100%"
        >
          <thead className="thead-dark">
            <TableHead />
          </thead>
          <tbody>
            {myStore.itemDetails &&
              myStore.itemDetails.map((item, index) => {
                return <TableData key={`${item.id}-${index}`} {...item} />;
              })}
          </tbody>
        </table>
      </BlockUi>
    </Fragment>
  );
};

export default observer(Table);

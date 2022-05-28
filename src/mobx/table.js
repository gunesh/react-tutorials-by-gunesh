import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useMyStore } from './hooks';

const Pagination = ({ current_page, records_per_page, total_records }) => {
  let btn_pre_style = {
    visibility: 'hidden',
  };
  let btn_next_style = {
    visibility: 'visible',
  };
  const prevPage = () => {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  };

  const nextPage = () => {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
  };

  const changePage = (page) => {
    var btn_next = document.getElementById('btn_next');
    var btn_prev = document.getElementById('btn_prev');
    var listing_table = document.getElementById('listingTable');
    var page_span = document.getElementById('page');

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    if (page == 1) {
      btn_pre_style = {
        visibility: 'hidden',
      };
    } else {
      btn_pre_style = {
        visibility: 'visible',
      };
    }

    if (page == numPages()) {
      btn_next_style = {
        visibility: 'hidden',
      }
    } else {
      btn_next_style = {
        visibility: 'visible',
      }
    }
  };

  const numPages = () => {
    return Math.ceil(total_records / records_per_page);
  };

  return (
    <Fragment>
      <a
        style={btn_pre_style}
        onClick={() => {
          prevPage();
        }}
      >
        Prev
      </a>{' '}
      <a
        style={btn_next_style}
        onClick={() => {
          nextPage();
        }}
      >
        Next
      </a>{' '}
      Page: <span id="page"></span>
    </Fragment>
  );
};

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
  const itemDetails = myStore.itemDetails;
  return (
    <Fragment>
      <button
        onClick={() => {
          myStore.apiData();
          console.log(myStore);
          console.log('API Response Data', myStore.itemDetails);
        }}
      >
        Get Data From API
      </button>
      <br />
      <table class="table table-striped table-bordered" border="1" width="100%">
        <thead class="thead-dark">
          <TableHead />
        </thead>
        <tbody>
          {itemDetails.map((item, index) => {
            return (
              <Fragment>
                <TableData key={`${item.id}-${index}`} {...item} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <Pagination
        current_page={myStore.page}
        records_per_page={myStore.per_page}
        total_records={myStore.totalItem}
      />
    </Fragment>
  );
};

export default observer(Table);

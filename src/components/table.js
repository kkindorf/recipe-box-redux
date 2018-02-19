import React from 'react';
 const Table  = (props) => {
        return (
              <table className="table table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th><p>Camper Name</p></th>
                  <th onClick={props.onClickThirty}><p className="points">Points Last 30 Days</p></th>
                  <th onClick={props.onClickAll}><p className="points">Points All Time</p></th>
                </tr>
                </thead>
                  <tbody>
                  {props.rows}
                  </tbody>
              </table>

            );
    }


export default Table;
import React from 'react';
const TableRow = (props) =>{
    return (
        <tr className='active'>
          <th scope="row">{props.row}</th>
          <td className='camper-name'><img src={props.src} className="img-responsive img-circle"/><a href=
          {props.url} target='_blank'>{props.name}</a></td>
          <td className='30-day-points'>{props.points}</td>
          <td className='all-time-points'>{props.allPoints}</td>
        </tr>
  );
}

export default TableRow;
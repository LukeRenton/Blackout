import React, { useState } from 'react';
import './leaderboard.css';

export default function Leaderboard(props) {

  const [listLength, setListLength] = useState(props.listLength);

  const initialUsers = [
    { rank: 1, name: 'John Doe', score: 900.23 },
    { rank: 2, name: 'Jane Smith', score: 200.55 },
    { rank: 3, name: 'Bob Johnson', score: 55 },
    { rank: 4, name: 'Bob Johnson', score: 22 },
    { rank: 5, name: 'Bob Johnson', score: 11 },
  ];

  const [users, setUsers] = useState(initialUsers.slice(0,listLength));
    
  return (
    <div className='lead_container'>
      <div id="lead_main">
        <div id="header">
          <h1>Rankings</h1>
        </div>
      
        <div id="leaderboard">
          <div className="ribbon"></div>
          <table>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.rank}
                  className={index === 0 ? 'first-row' : ''}
                >
                  <td className={index === 0 ? 'number first-entry' : 'number'}>
                    {user.rank}
                  </td>
                  <td className={index === 0 ? 'name first-entry' : 'name'}>
                    {user.name}
                  </td>
                  <td className={index === 0 ? 'points first-entry' : 'points'}>
                    {"R" + user.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {
            props.summary ? 
            <></>
            :
            <button>Donate Now</button>
          }
        </div>
      </div>
    </div>
  );
};

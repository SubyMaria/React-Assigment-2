import React, { useState, useEffect } from 'react';
import './App.css';

import Profile from './components/Profile';
import axios from 'axios';
import 'antd/dist/antd.css';


function App() {
  const [infos, setInfos] = useState([]);
  let DataValue = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
      setInfos(resp.data);
      console.log(resp.data);
    });
  }
  useEffect(() => {
    DataValue()
  }, []);
  if (infos.length == 0) {
    return (
      <div className="ant-row" >
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ant-row">

        {infos.map((a) => {

          return (
            <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6"><Profile id={a.id} name={a.name} email={a.email} website={a.website} phone={a.phone} /></div>
          )
        })
        }

      </div>
    );
  }
}

export default App;


{/**/ }
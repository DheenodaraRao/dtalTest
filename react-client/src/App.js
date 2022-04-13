
import moment from 'moment';
import { useEffect, useState } from 'react';
import { BidApi } from './apis/BidApi';
import { DriverApi } from './apis/DriverApi';
import './App.css';

function App() {

  const [bids, setBids] = useState([]);
  const [driver, setDriver] = useState('');
  const [licenceClass, setLicenceClass] = useState('');
  const [licenceNumber, setLicenceNumber] = useState('');
  const [date, setDate] = useState(`${moment().format()}`);
  const [amount, setAmount] = useState(0);

  useEffect(() => {


    BidApi.getBids().then((resp) => {
      if(resp.status == 200){
        setBids(resp.data)
      }
      else{
        alert("Error Loading Bids");
      }
    })

  }, []);

  useEffect(() => {

    getBids()

  }, []);

  function getBids(){
    BidApi.getBids().then((resp) => {
      if(resp.status === 200){
        setBids(resp.data)
      }
      else{
        alert("Error Loading Bids");
      }
    })
  }

  function createBid(){
    DriverApi.createDriver(driver)
    .then(resp => {
      if(resp.status === 201){
        const newDriverID = resp.data.id
        BidApi.createBid(licenceClass, licenceNumber, newDriverID, date, amount)
        .then((newBidResp) => {
          if(newBidResp.status === 201){
            getBids()
          }
        })
      }
    })
  }

  function displayBids(bids) {
    return(
      <table class="table bidtable">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Licence No</th>
            <th scope="col">Bid Date</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>

          {
            bids.map(bid => {
              return (
                <tr>
                  <td>
                    {bid.driverName}
                  </td>
                  <td>
                    {bid.licenceClass}
                  </td>
                  <td>
                    {bid.licenseNumber}
                  </td>
                  <td>
                    {moment(bid.date).format("MM-DD-YYYY")}
                  </td>
                  <td>
                    {`$${bid.amount}`}
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    );
  }


  return (
        <div>
          <div className='container'>
  <div className="d-flex flex-row justify-content-around">
  <input type="text" placeholder="Driver" value={driver} onChange={e=> setDriver(e.target.value)}/>
    <input type="text" placeholder="Class" value={licenceClass} onChange={e=> setLicenceClass(e.target.value)}/>
    <input type="text"  placeholder="Licence No"  value={licenceNumber} onChange={e=> setLicenceNumber(e.target.value)}/>
    <input type="text"  placeholder="Date" value={moment(date).format("MM-DD-YYYY")} disabled/>
    <input type="text"  placeholder="Amount" value={amount} onChange={e=> setAmount(e.target.value)}/>

    <button class="btn btn-primary" onClick={()=> createBid()}>Save</button>
  </div>

          {
            displayBids(bids)
          }
        </div>
          </div>

      );
}

export default App;

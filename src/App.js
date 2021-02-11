import React , {useState, useEffect } from "react"
import axios from "axios"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Coin from "./Coin";
import logo from "./bitinr.png"
import {Button} from "reactstrap"
import Navbar from "./Navbar"


function App() {

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');

 const getPosts = async () => {
   try{
   const results = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   setCoins(results.data);
  }
  catch(error) { alert('Error fetching data');}
  

  }

  useEffect(() => {
    getPosts()
    const interval=setInterval(()=>{
      getPosts()
     },10000)
       
       
     return()=>clearInterval(interval)
  },[])

  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    
    )

  return (
   <div>
     <Navbar />
    <div className="coin-app" id="home">

      <img src={logo} className="logo" alt="logo"/>
      <h1 className="head">INR CRYPTO TRACKER</h1>
      
      
      <div className="coin-searc">
        <h1 className="coin-h">Search for currency</h1>
        <form>
          <input type="text" placeholder="🔍Search " className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} volume={coin.total_volume}
          price={coin.current_price} 
          marketCap={coin.market_cap}
          marketCapRank={coin.market_cap_rank}
          priceChange={coin.price_change_percentage_24h}
          
          circulateSupply={coin.circulating_supply}
          totalSupply={coin.total_supply}
          maxSupply={coin.max_supply}
          
          athvalue={coin.ath}
          athPercentage={coin.ath_change_percentage}
          athDate={coin.ath_date}
          lastUpdate={coin.last_updated}
          
          />
        )
      })}
      <div className="foot">
        
          <p>Developed by Arjun T</p>
          <button className="git"><a href="https://github.com/arjun-tarakesh" target="_blank" >Github</a></button>
          
         </div>
    </div>
    </div>
  );
}

export default App;

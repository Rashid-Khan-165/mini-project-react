import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=tZV0KNW-nmP5r2HXrAf_f8LS8rZwf3U6sCJWlgXqRVk="
    const HOT_URL =  "https://media.istockphoto.com/id/1205289672/photo/majestic-bright-sunrise-over-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=e_PPySVdNiVyOm453QHuQO2MdWd6F18-4VSZwuBwq9s=";
    const COLD_URL = "https://images.unsplash.com/photo-1648518520687-34a14d251b10?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";


    return(
    <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
            ? RAIN_URL 
            : (info.temp > 15 
            ? HOT_URL 
            : COLD_URL)
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C </p>
          <p>Humidity = {info.humidity} </p>
          <p>Min Temp = {info.tempMin}&deg;C </p>
          <p>Max Temp  = {info.tempMax}&deg;C </p>
          <p>The weather can be described as <i>{info.weather} </i>and feels like  = {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}
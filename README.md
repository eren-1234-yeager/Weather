# Weather App 
**This app uses an api to fetch details**<br/>

## Folder Structure
public :<pre> Contains Public domain things (like html files).</pre><br/>
src :  <pre>  Contains all JS files that whole app uses.</pre><br/>

### src
This folder contains a **components** folder that contains all components of the app.<br/>
Src contains a **contexts** folder that provide context.<br/>

## States
**States in WeatherProvider.js (It is a context provider here).**

`search` is a state that contains search query and use to search in App.<br/>
`details` is a state that contains current weather details corresponding to a query.<br/>
`locDetails` is a state that contains location details corresponding to a query.<br/>
`forecasts` is a state that contains forecast details corresponding to a query.<br/>

## Refs
**Refs in WeatherProvider.js (It is a context provider here).**<br/>
`condition` is a ref that contains current condition (of a given place).<br/>

## Urls
`/forecast/:city` to get forecast of city (city is get by useParams). <br/>
Forecast.js component is rendered in this case.<br/>

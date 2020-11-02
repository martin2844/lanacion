# Lanacion Api

An intent to catalog and save data from Lanacion's private api.

The purpose is to create a public API to access latest news from the portal, and also save data every day to a DB.


## Routes

### News
**GET** -- `/api/noticias`  
Returns current news   

**GET** -- `/api/noticias/ultimas5`  
Returns latest 5 news articles

**GET** -- `/api/noticias/categorias`  
Returns current ocurrances of categories 

### Dollar

**GET** -- `/api/dolar`  
Returns value of all dollars  

**GET** -- `/api/dolar/oficial`  
Returns value of official dolar  

**GET** -- `/api/dolar/blue`  
Returns value of blue dolar     

**GET** -- `/api/dolar/liqui`  
Returns value of contado con liqui dolar


## Version History
0.0.2 - Dollar API Routes   
0.0.1 - Scaffoling. Front Next.js - Back node & express
# ArcGridParser
TypeScript class to parse ArcGrid data

## Example


**Data Example**
```
ncols        500
nrows        500
xllcorner    -18.210000000000
yllcorner    32.627515279777
dx           0.048100000000
dy           0.023164969440
 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 -9999.000 

```

**text** = data received from server

```javascript
var parser = new ArcGridParser();
mdtData = parser.parseData(text); 
```



GNU License - Free use and modification license.

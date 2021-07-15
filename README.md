### TIMESTAMP API
An API service that handles dates, and return the correct unix timestamp, LocaleDate string.

<pre><a href="https://timemicro-api.herokuapp.com/timestamp/">Here</a></pre>

## Examples
##### Example Input
<pre>
/timestamp/2015-12-25
</pre>
##### Example Output
<pre>
{"unix":1451001600000,"locale":"शुक्रवार, 25 दिसंबर 2015","time":"12:00:00 AM"}
</pre>
##### Example Input
<pre>
/timestamp/
</pre>
##### Example Output
<pre>
{"unix":1626330887911,"local":"गुरुवार, 15 जुलाई 2021","time":"6:34:47 AM"}
</pre>

## Documentation

1. The API endpoint is GET /timestamp/:date_string

2. A date string is valid if can be successfully parsed by new Date(date_string). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

4. If the date string is invalid the api returns a JSON having the structure {"error" : "Invalid Date" }.

5. If the date string is valid the api returns a JSON having the structure {"unix": , "utc+05:30" : }

# Import recipe data

Build it like ...
```
docker build -t cookbook-import .
```

Run it like ... 
```
docker run -it -v ~/Downloads/datastore-svc-acct.json:/home/node/creds.json -e "GOOGLE_APPLICATION_CREDENTIALS=/home/node/creds.json" --rm cookbook-import
```

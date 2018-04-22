## WHAT IS THIS?

This is a demo application use nginx as a reverse proxy and loadbalance.
And a nodejs app as http backend api server. You can use pm2 to start all instances you needed.

## INSTALL

```
sudo apt install nginx
sudo cp app.conf /etc/nginx/conf.d/
sudo npm install pm2 -g
sudo npm install
pm2 start --name app1 app.js -- 8080
pm2 start --name app2 app.js -- 8081
sudo nginx -t
sudo systemctl reload nginx
sudo bash -c 'echo "127.0.0.1 webapi.io" >> /etc/hosts'
```

## TEST

```
curl http://webapi.io/api
```

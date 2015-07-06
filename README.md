# "Metal Gear Solid V: The Phantom Pain" Countdown

## How to setup Apache server


#### Install Apache2
`sudo apt-get install apache2`


#### Clone repository
Clone in `/var/www/`, then rename folder to `html/`


#### Enable .htaccess override
`sudo nano /etc/apache2/apache2.conf`

	<Directory /var/www/>
		Options Indexes FollowSymLinks
		AllowOverride All
		Require all granted
	</Directory>


#### Enable mod_rewrite
`sudo a2enmod rewrite`

`sudo service apache2 restart`


#### Edit .htaccess if needed
`sudo nano /var/www/html/.htaccess`

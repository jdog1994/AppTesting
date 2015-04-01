# Mobile Application Research and Testing Repository
<ul>
	<li>PhoneGap</li>
	<li>Mobile UI styling</li>
	<li>MongoDB</li>
	<li>Node.js</li>
	<li>REST</li>
</ul>

<b>Authors</b>
<ul>
	<li>Jonny Forney</li>
	<li>Tyler Dorn</li>
</ul>

<b>PhoneGap - LiveMobile Testing (HOWTO)</b>
<ul>
	<li> Open command prompt</li>
	<li> Navigate to your PhoneGap application directory on local machine, use cd to change directory if needed</li>
	<li>Invoke 'phonegap serve' in the cmd prompt on local PhoneGap application directory</li>
	<li> Cmd prompt will display listening IP</li>
	<li> Enter listening IP into PhoneGap mobile application for live testing of PhoneGap application</li>
</ul>

<b>Research and Useful Links</b> 
<ul>
	<li><b>PhoneGap</b>
		<ul>
			<li> http://www.smashingmagazine.com/2014/02/11/four-ways-to-build-a-mobile-app-part3-phonegap</li>
		</ul>
	</li>
	<li><b>Mobile UI</b>
		<ul>
			<li> http://jquerymobile.com/</li>
		</ul>
	</li>
	<li><b>Geolocation</b>
		<ul>
			<li> http://www.paulund.co.uk/how-to-use-geolocation-api-with-google-maps</li>
			<li> http://docs.phonegap.com/en/edge/cordova_geolocation_geolocation.md.html</li>
		</ul>
	</li>
	<li><b>MongoDB</b>
		<ul>
			<li> http://docs.mongodb.org/manual/tutorial/getting-started</li>
			<li> https://university.mongodb.com/courses/M101JS/about</li>
		</ul>
	</li>
	<li><b>Node.js</b>
		<ul>
			<li> http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb </li>
			<li> https://github.com/ccoenraets/PictureFeed -Mobile Client Node to Server Node</li> 
		</ul>
	</li>
	<li><b>The Grand Question</b></li>
		<ul>
			<li> https://devcenter.heroku.com/articles/node-websockets</li>
			<li> you’ll be running NodeJS on the server, with MongoDB as a database also on the server, and standard HTML+JS on the client. You can get the two talking “live” (without refreshing) with Websockets or SocketIO. Any reason you’re using Windows Server specifically?</li>
			<li >as to deploy... if you're doing web, I'd use ARR (Application Request Routing) in IIS pointing to your node app... as for the node app/service, use NSSM (Non-Sucking Service Manager) to install your node service, I usually use a .cmd for the service) ...  If you have Linux, then node is far easier to version/target against with docker imho</li>
			<li >it will be a lot easier and less pricey to get a VPS on something like Linode or DigitalOcean, and work with Node on Linux. I’m trying to find a good tutorial on Websockets you can check out, but lots of these are out of date.</li>
			</li>
		</ul>
</ul>

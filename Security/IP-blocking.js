// Block IP address script- By JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com/
// This notice must stay intact for use.

//Enter list of banned ips, each separated with a comma:
var bannedips=["204.110.222.254"]

var ip = '<!--#echo var="REMOTE_ADDR"-->'

var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
alert("Your IP has been banned from this site. Redirecting...")
window.location.replace("http://www.google.com")
}

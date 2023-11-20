// Block IP address script- By JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com/
// This notice must stay intact for use.

//Enter list of banned ips, each separated with a comma:
var bannedips=["204.110.222.254"]

var ip = '<!--#echo var="REMOTE_ADDR"-->'

var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
alert("Your IP has been marked as 'Problematic' and you will not be able to continue normally... sending you to the blocked version.")
window.location.replace("https://tornous.github.io/problem")
}

##Behind on your timecard?
###It's okay!
This bookmarklet will automatically select At Site/No Access for you


Manually create a bookmark in your bookmark bar and set the page to be the following:
```
javascript:(function(){;var%20numDependencies=0,loadedDependencies=0;numDependencies+=0;numDependencies+=0;var%20scriptUrls=%5B%5D;var%20scriptIds=%5B%5D;for(var%20i=0;i%3CscriptUrls.length;i++)%7Bvar%20url=scriptUrls%5Bi%5D;var%20script=document.createElement(%22script%22);script.src=url+%22?t=%22+Date.now();script.id=scriptIds%5Bi%5D;script.type=%22text/javascript%22;script.onload=scriptLoaded;document.body.appendChild(script)%7Dvar%20styleUrls=%5B%5D;for(var%20i=0;i%3CstyleUrls.length;i++)%7Bvar%20url=styleUrls%5Bi%5D;var%20link=document.createElement(%22link%22);link.href=url+%22?t=%22+Date.now();link.type=%22text/css%22;link.rel=%22stylesheet%22;link.onload=scriptLoaded;document.head.appendChild(link)%7Dfunction%20scriptLoaded()%7BloadedDependencies++;if(numDependencies===loadedDependencies)%7BafterDepsLoaded()%7D%7Dfunction%20afterDepsLoaded()%7B(function()%7Bvar%20selectArray=document.getElementsByTagName(%22select%22),i=0;for(i=0;i%3CselectArray.length;i++)%7Bif(selectArray%5Bi%5D.title!==%22Reason%22)%7Bcontinue%7DselectArray%5Bi%5D.selectedIndex=1%7D%7D)()%7DafterDepsLoaded();})()
```
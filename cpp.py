#!/usr/bin/python
import json
import cgi
import cgitb; cgitb.enable()
from os import path, system, sys
from time import sleep
from sys import exit
from subprocess import Popen, PIPE
from functions import *

#checkScript = "ps -eo pid,args | grep cpp.py | grep -v grep|wc -l"
#returnVal = Popen(checkScript,shell=True, stdout=PIPE).stdout.read().strip('\n')
#if int(returnVal) > 1:
#    system("killall cpp.py")
#    exit()


sourceFile = '/tmp/1.cpp'
saveSourceFile = '/tmp/saveCpp.cpp'

print "Content-type: text/html\n\n"
print 

form = cgi.FieldStorage()
code = form.getvalue('code')
filename1 = form.getvalue('filename1')
flag_save1 = form.getvalue('flag_save1')

#####################################################################    
if int(flag_save1) is 1:
    writeCode(saveSourceFile,str(code))
    system("cp %s /tmp/cpsave/%s.cpp" %(saveSourceFile, filename1))
    system("touch /var/www/html/saveflag")
    system("rm %s" %(saveSourceFile))
    exit()	
else:
    killnRemoveExcept('cpp.py')
    writeCode(sourceFile,str(code))
    system("g++ -w %s -o /tmp/cpbin 2> /tmp/cperror" %(sourceFile))

####################################################################    
while(True):
    if path.exists('/var/www/html/flag'):
	sleep(0.4)
	results={"output":""}
	print json.dumps(results)
	system("rm /var/www/html/flag")
	exit()  


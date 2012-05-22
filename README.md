Introduction
============
This is a rough README and contents of this page may change.
All the paths and commands are specific to ubuntu Linux distribution.
Download the html dir and place it in `/var/www/`. 
Similarly, download the `c.cgi`, `cpp.cgi`, `python.cgi`, `scilab.cgi` and put them in `/usr/lib/cgi-bin/`. Also one need to copy contents of `w3scilab/cgi-bin/`(available as repo in previous page) to `/usr/lib/cgi-bin/` to enable some extra features(not very sure, thats why I said content may change :P).
The user and groups to all above paths should be made to `www-data` recurssively.

Run `apache` now and enable `Xvfb` for plots etc.


      $ nohup Xvfb :1 -screen 0 640x480x24 -ac < /dev/null > Xvfb.out 2> Xvfb.err &


Required packages
-----------------

 * apt-get install `libdata-uuid-libuuid-perl libossp-uuid-perl libjson-perl tk8.4 libgfortran3 libuuid-perl uuid-runtime apache2 Xvfb`


License
-------
GNU GPLV3

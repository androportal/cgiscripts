var request=null;
var queryString;   //will hold the POSTed data
var hostname=window.location.host;
var demoCode = new Array();
demoCode[0]="";
demoCode[1]="[X,Y]=meshgrid(-1:.1:1,-1:.1:1);\nZ=X.^2-Y.^2;\nxtitle('z=x2-y ^2');\nmesh(X,Y,Z);\nf=gcf();\nf.color_map = jetcolormap(16);";
demoCode[2]="zgrid();";
demoCode[3]="x=-2:0.075:2;\ny=x;\nz=eval3d(milk_drop,x,y);\nplot3d(x,y,z,25,25,'X@Y@Z',[12,2,4]);";
demoCode[4]="n=64;\nr=linspace(0,1,n)';\ng=linspace(1,0,n)';\nb=ones(r);\ncmap=[r g b];\nplot3d1();";
demoCode[5]="contour2d(1:10,1:10,rand(10,10),5,rect=[0,0,11,11]);";
demoCode[6]="subplot(221);\nplot2d();\nsubplot(222);\nplot3d();\nsubplot(2,2,3);\nhistplot();\nsubplot(2,2,4);\ngrayplot();";
demoCode[7]="t=-1:0.1:1;\ndeff('[z]=my_surface(x,y)','z=x**2+y**2');\nfgrayplot(t,t,my_surface,rect=[-2,-2,2,2]);";
demoCode[8]="t=-%pi:0.3:%pi;\nplot3d(t,t,sin(t)'*cos(t),35,45,'X@Y@Z',[12,2,4]);\nxtitle(\'plot3d : z=sin(x)*cos(y)\',\' \',\' \');";
demoCode[9]="deff('z=f(x,y)','z=x^4-y^4');\nx=-3:0.2:3 ;y=x ;\nfplot3d(x,y,f,alpha=5,theta=31);"; 
demoCode[10]="deff(\"[xdot] = derpol(t,x)\",[\"xd1 = x(2)\";\"xd2 = -x(1) + (1 - x(1)**2)*x(2)\";\"xdot = [ xd1 ; xd2 ]\"]);\nxf= -1:0.1:1;\nyf= -1:0.1:1;\nfchamp(derpol,0,xf,yf);";
demoCode[11]="s=poly(0,\'s\');\nn=1+s;\nd=real(poly([-1 -2 -%i %i],\'s\'));\nevans(n,d,100);";
demoCode[12]="t= 0:.01:2*%pi;\npolarplot(sin(7*t),cos(8*t));";
demoCode[13]="hist3d();";
demoCode[14]="Matplot([1 2 3;4 5 6]);";
demoCode[15]="x=[1 2 5];\ny=[1  -5 6;3 -2 7;4  -3 8];\nbar(x,y);";
demoCode[16]="s=poly(0,'s');\nh=syslin('c',(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01));\nblack(h,0.01,100,'(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01)');\nchart(list(1,0,2,3));";
demoCode[17]="s=poly(0,'s');\nh=syslin('c',(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01));\nt='(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01)';\nbode(h,0.01,100,t);";
demoCode[18]="champ1(-5:5,-5:5,rand(11,11),rand(11,11),rect=[-10,-10,10,10],arfact=2);";
demoCode[19]="x = linspace(0,1,81);\nz = cos(2*%pi*x)'*sin(2*%pi*x);\nzm = min(z);\nzM = max(z);\ncolorbar(zm,zM);\nSgrayplot(x,x,z, strf=\"031\", rect=[0 0 1 1]);";
demoCode[20]="fcontour();";
demoCode[21]="x = [0 1 0 -1];\ny = [0 0 1  1];\nT = [1 1 2 3 1;2 3 4 1 1];\nz = [0 1 0 -1];\ncolorbar(-1,1);\nfec(x,y,T,z,strf=\"040\",mesh=%t);"
demoCode[22]="s=poly(0,'s');\nh=syslin('c',(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01));\ngainplot(h,0.01,100,'(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01)');";
demoCode[23]="u = linspace(0,2*%pi,40);\nv = linspace(0,2*%pi,20);\nx = (cos(u).*u)'*(1+cos(v)/2);\ny= (u/2)'*sin(v);\nz= (sin(u).*u)'*(1+cos(v)/2);\nplot3d2(x,y,z);";
demoCode[24]="t=linspace(-%pi,%pi,40);z=sin(t)'*cos(t);\nz1=find(abs(z) > 0.5);\nz(z1)=%inf*z1;\nplot3d1(t,t,z);";
demoCode[25]="x=linspace(0,2*%pi,40);\ny=linspace(0,2*%pi,40)';\nf=1.5+cos(y);\nX=f*cos(x);\nY=f*sin(x);\nZ=sin(y)*ones(x)+ ones(y)*cos(2*x);\nplot3d2(X,Y,Z);";
demoCode[26]="t=linspace(-1,1,20)';\nx=linspace(0,%pi,40);\nf=2+ t*cos(x);\nX=f*diag(cos(2*x));\nY=f*diag(sin(2*x));\nZ=t*sin(x);\nplot3d2(X,Y,Z);";
demoCode[27]="plot2d1('enl',1,(1:10:10000)');\nxtitle('plot2d1 log scale','t','y  log scale');\nxgrid(3);";
demoCode[28]="histplot();";
demoCode[29]="t=-50*%pi:0.1:50*%pi;\nx=t.*sin(t);y=t.*cos(t);\nz=t.*abs(t)/(50*%pi);\nparam3d(x,y,z,45,60);";
demoCode[30]="fac3d1();\nxtitle(\'Drawing surfaces defined by facets \',\'x\',\'y\');";
demoCode[31]="n=13;\nepsilon=0.2;\nomegac=3;\ns=0:0.05:10;\nh=cheb1mag(n,omegac,epsilon,s);\nplot2d(s,h);\nxtitle(\'Chebyshev filter\',\'frequencies\',\'magnitude\');";
demoCode[32]="t = linspace(0,16*%pi,1000)';\nx = -20 + t + 0.3*sin(0.5*t) + sin(t) + 2*sin(2*t) + 0.5*sin(3*t);\ny = detrend(x);\nplot2d(t,[x y],[2 5]);\nxgrid();";
demoCode[33]="x = linspace(0.01,10,5000)';\nplot2d(x,besseli(0:4,x), style=2:6);";
demoCode[34]="x=linspace(0,3,20);\ny=x^2;\nxx=linspace(0,3,100);\nyy1=interp1(x,y,xx,'nearest');\nplot(xx,[yy1],x,y,\"*\");\nxtitle('interpolation of square function');";
demoCode[35]="t=(0:0.1:5*%pi)';\nplot2d1('onn',t,[2*sin(t),1.5*squarewave(t),squarewave(t,10)]);";
demoCode[36]="x = linspace(0,1,81);\nz = cos(2*%pi*x)'*sin(2*%pi*x);\nzm = min(z); zM = max(z);\nxset(\"colormap\",jetcolormap(64));\ncolorbar(zm,zM);\nSgrayplot(x,x,z);";
demoCode[37]="[xc,yc]=contour2di(1:10,1:10,rand(10,10),5);\nk=1;n=yc(k);c=1;\nwhile k+yc(k)<size(xc,'*')\nn=yc(k);\nplot2d(xc(k+(1:n)),yc(k+(1:n)),c);\nc=c+1;\n  k=k+n+1;\nend";
demoCode[38]="getf(\'macros2.sci\');\ngetf(\'bezier.sci\');\nbeziersurftest();";
demoCode[39]="getf(\'macros1.sci\');\namdbaR(\'MESH\');\nmeshvisu();"
demoCode[40]="getf(\'macros2.sci\');\ngetf(\'bezier.sci\');\nbeziertest();";
demoCode[41]="getf(\'macros2.sci\');\ngetf(\'bezier.sci\');\ngammatest();";
demoCode[42]="deff(\'[z]=s(x,y)\',\'z=sin(x)*cos(y)\');\nt=-%pi:0.3:%pi;\nfplot3d1(t,t,s,35,45,\"X@Y@Z\");\nxtitle(\'fplot3d : z=f(x,y), f external\',\' \',\' \');";
demoCode[43]="getf(\'macros1.sci\');\namdbaR(\'MESH\');\nemc2C(1,6,\'MESH.VAL\',[-2,-2,2,2]);\nxtitle(\'Finite Element Display 1\');";
demoCode[44]="getf(\'cmplx.sci\');\nR = 2;\ntheta = -130;\nalpha = 73;\nPlotCmplxFunc(R,0,\"Disk\",\"Ox\",[40 20],\"exp\",theta,alpha,[-R,R]);";
demoCode[45]="getf(\'cmplx.sci\');\nR = 4;\ne = 0.001;\ntheta = 30;\nalpha = 60;\nPlotCmplxFunc(R,e,\"Disk\",\"Ox\",[40 20],\"log\",theta,alpha,[e,R]);";
demoCode[46]="getf(\'cmplx.sci\');\nR = 2;\ntheta = -110;\nalpha = 75;\nPlotCmplxFunc(R,0.001,\"Square\",\"Ox\",41,\"atanh\",theta,alpha,[-0.99,0.99]);";
demoCode[47]="getf(\'random.sci\');\ngetf(\'randomT.sci\');\nPoissonT();";
demoCode[48]="getf(\'random.sci\');\ngetf(\'randomT.sci\');\nWeibullT();"
demoCode[49]="rand(\'normal\');\nv=(1:20)+(1:20).*rand(1,20);\nplot2d1(\'enn\',1,v\');\nplot2d1(\'enn\',1,(1:20)\',[2,-2],\'100\',\'estimated\');\nxtitle(\'plot2d1 \',\' \',\' \');"
demoCode[50]="n=32-1;\nt=(0:n)/n;\nu=sin(80*%pi*t)+sin(100*%pi*t);\nplot2d3(\'enn\',1,abs(fft(u,-1))\'/n);\nxtitle(\'plot2d3 (vbar plot)\',\'t\',\'f(t)\');";
demoCode[51]="x=0:0.1:2*%pi;\ny=[sin(x);cos(x)]\';\nx=[x;x]\';\nplot2d(x,y);\nerrbar(x,y,0.05*ones(x),0.03*ones(x));\nxtitle(\'errbar \',\' \',\' \');";
demoCode[52]="deff(\'[z]=surf(x,y)\',\'z=x**3+y\');\nSfgrayplot(-1:0.1:1,-1:0.1:1,surf);\n";
demoCode[53]="u = linspace(-%pi/2,%pi/2,40);\nv = linspace(0,2*%pi,20);\nx= cos(u)\'*cos(v);\ny= cos(u)\'*sin(v);\nz= sin(u)\'*ones(v);\nplot3d2(x,y,z);\n";
demoCode[54]="getf(\'macros2.sci\');\n[r,a]=field(0:0.1:1,0:%pi/8:6*%pi);\nz=a/8;\nx=r.*cos(a).*(1-a/20);\ny=r.*sin(a).*(1-a/20);\nz=z-1.5;\nplot3d2(x,y,z);";
demoCode[55]="xset(\"colormap\",hsvcolormap(4));\ngetf(\'macros2.sci\');\ngetf(\'surfaces.sci\');\ntube(50);";
demoCode[56]="getf(\'macros2.sci\');\ngetf(\'surfaces.sci\');\nbh(50);";
demoCode[57]="getf(\'macros2.sci\');\ngetf(\'surfaces.sci\');\ncplxroot(2,20,130,45);";
demoCode[58]="surf();\nxtitle('Demo of surf',' ',' ');";
demoCode[59]="u = linspace(-%pi/2,%pi/2,40);\nv = linspace(0,2*%pi,20);\nX = cos(u)\'*cos(v);\nY = cos(u)\'*sin(v);\nZ = sin(u)\'*ones(v);\nplot3d3(X,Y,Z);";
demoCode[60]="s=poly(0,\'s\');\nh=syslin(\'c\',(s^2+2*0.9*10*s+100)/(s^2+2*0.3*10.1*s+102.01));\nnyquist(h,0.01,100,\'func\');m_circle();";
demoCode[61]="deff(\'z=f(x,y)\',\'z=x^4-y^4\');\nx=-3:0.2:3;\ny=x ;\nfplot3d1(x,y,f,alpha=5,theta=31);";
demoCode[62]="subplot(221);\nxset(\'colormap\',hotcolormap(32));\nplot3d1();\nsubplot(222);\nxset(\'colormap\',hotcolormap(32));\ngrayplot();";
demoCode[63]="subplot(221);\nxset(\'colormap\',hsvcolormap(32));\nplot3d1();\nsubplot(222);\nxset(\'colormap\',hsvcolormap(32));\ngrayplot();";

//demoCode[63]="xset(\"colormap\",hsvcolormap(64));\nplot3d1();";
demoCode[64]="chart();";
demoCode[65]="t=(0:0.1:6*%pi);\nplot2d(t\',sin(t)\');\nxtitle(\'plot2d and xgrid \',\'t\',\'sin(t)\');\nxgrid();";
demoCode[66]="fchamp();\nTitle=[\'fchamp \'];\nxtitle(Title,\' \',\' \');";
demoCode[67]="champ();";
demoCode[68]="contour();";
demoCode[69]="xset(\"colormap\",hsvcolormap(12));\ngetf(\'macros2.sci\');\ngetf(\'surfaces.sci\');\nrings();";
demoCode[70]="getf(\'macros2.sci\');\ngetf(\'surfaces.sci\');\nhole3d1();";
demoCode[71]="Sfgrayplot();";
demoCode[72]="getf(\'macros1.sci\');\namdbaR(\'MESH\');\nemc2C(1,6,\'MESH.VAL\');\nxtitle(\'Finite Element Display 2\');"
demoCode[73]="getf(\'macros1.sci\');\namdbaR(\'MESH\');\nemc2C(1,6,\'MESH.VAL\',[-2,-2,2,2]);\nemc2V(2,3,6,20,\'MESH.VAL\',[-2,-2,2,2]);\nxtitle(\'fec and velocity field\');"
demoCode[74]="s=poly(0,\'s\');\nsl=syslin(\'c\',1/(s*s+0.2*s+1));\ninstants=0:0.05:20;\ny=csim(\'step\',instants,sl);\nplot2d(instants\',y\');";
demoCode[75]="s=poly(0,\'s\');\nsl=syslin(\'c\',1/(s*s+0.2*s+1));\ninstants=0:0.05:20;\nyi=csim(\'imp\',instants,sl);\nplot2d(instants\',yi\');";
demoCode[76]="x=[-1:0.1:1];\ny=x;u=ones(x);\nfx=x.*.u\';fy=u.*.y\';\nchamp(x,y,fx,fy);\nxset(\"font\",2,3);\nxtitle([\'Vector field plot\';\'(with champ command)\']);";
demoCode[77]="t=(1:0.1:8)\';\nplot2d3(\'onn\',t,[1.5+0.2*sin(t) 2+cos(t)]);\nxtitle(\'Vertical bar plot\');";
demoCode[78]="t=(0:.05:1)\';\nst=sin(2*%pi*t);\nxsetech([0,0,1,0.5]);\nplot2d2(\"onn\",t,st);\nxsetech([0,0.5,1,0.5]);\nplot2d3(\"onn\",t,st);\nxsetech([0,0,1,1]);";
demoCode[79]="s=sin(0:0.1:5*%pi);\nss=fft(s(1:128),-1);\nplot2d3(\"enn\",1,abs(ss)\');\nxtitle(\'Fast Fourier Transform\',\' \',\' \');";
demoCode[80]="t=0:0.1:1000;\nx=3*sin(t)+8*sin(3*t)+0.5*sin(5*t)+3*rand(t);\ny=fft(x,-1);\nsubplot(2,1,1);plot2d(abs(y));\nsubplot(2,1,2);plot2d(fftshift(abs(y)));";
demoCode[81]="deff(\'[z]=f(x,y)\',\'z = x.*sin(y)+y.*sin(x)\');\nx = [-5:0.5:5]; y = [-7.5:0.5:7.5];\nz = feval(x,y,f);\nsurf(x,y,z') ;";
demoCode[82]="X = [0:0.1:10];\nY = 20+30*X+50*X^2;\nE = 1000*(rand(1,length(X))-0.5);\nY1 = Y + E;\nZ = [X;Y1];\nplot(X,Y,\'-\',X,Y1,\'+\');";
demoCode[83]="t=linspace(-20*%pi,20*%pi,2000);\nparam3d1(sin(t),t.*cos(t)/max(t),t/100);";
demoCode[84]="x=linspace(-%pi,%pi,40);\ny=linspace(-%pi,%pi,40);\nplot3d(x,y,sinh(x\')*cos(y)) ;";
demoCode[85]="hn=eqfir(33,[0 .2;.25 .35;.4 .5],[0 1 0],[1 1 1]);\n[hm,fr]=frmag(hn,256);\nplot(fr,hm);";
demoCode[86]="sp=[0 1 0 0], txt=[\"part1\",\"part2\",\"part3\",\"part4\"];\npie([3 4 6 2],[0 1 0 0],[\"part1\",\"part2\",\"part3\",\"part4\"]);";
demoCode[87]="getf(\'shadecomp.sci\');\ngetf(\'shadesurf2.sci\');\ngetf(\'setcmap.sci\');\nsetcmap(2);\nshadesurf2();";
demoCode[88]="getf(\'shadesurf.sci\');\ngetf(\'isosurf3d.sci\');\nisosurf3d();";
demoCode[89]="getf(\'interp2.sci\');\ngetf(\'rebin.sci\');\ngetf(\'polarmap.sci\');\npolarmap();";
demoCode[90]="getf(\'interp2.sci\');\ngetf(\'rebin.sci\');\ngetf(\'setcmap.sci\');\nsetcmap(-15);\nrebin();";
demoCode[91]="ax=gca();\nax.data_bounds=[0,0;10,10];\nax.box=\'on\';\na=5*ones(11,11);\na(2:10,2:10)=4;\na(5:7,5:7)=2;\nMatplot1(a,[1,1,3,3]);";
demoCode[92]="Matplot((1:xget(\"lastpattern\")));";
demoCode[93]="xtitle(\'grouped homogenisation\');\nx=1:3;\ny1=1:3;\ny2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);\nbarhomogenize();";
demoCode[94]="xtitle('stacked homogenisation');\nx=1:3;\ny1=1:3;\ny2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);\nbarhomogenize(\'stacked\',1);";
demoCode[95]="xtitle(\'ex1: creation of 1 yellow bar and 3 bars\');\nx=1:3;\ny1=1:3;\ny2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);";
demoCode[96]="xtitle(\'ex2: creation of 1 bar and 2 polylines\');\nx=1:10;\ny=sin(x)/2;\nbar(x,y,\'red\');\nx1=1:10;\ny1=[sin(x);cos(x)];\nplot(x1,y1);";
demoCode[97]="h=buttmag(13,300,1:1000);\nmag=20*log(h)\'/log(10);\nplot2d((1:1000)\',mag,[2],\"011\",\" \",[0,-180,1000,20]);\nxtitle(\'Butterworth filter\');"
demoCode[98]="hs=analpf(4,\'cheb1\',[.1 0],5);\nfr=0:.1:15;\nhf=freq(hs(2),hs(3),%i*fr);\nhm=abs(hf);\nplot(fr,hm);\nxtitle(\'Magnitude response continuous-time system\');";
demoCode[99]="w=0.1:0.1:5;\nmag=1+abs(sin(w));\nfresp=cepstrum(w,mag);\nplot2d([w\',w\'],[mag(:),abs(fresp)]);\nxtitle(\'Cepstrum Calculation\');"
demoCode[100]="Hlp=iir(3,\'lp\',\'ellip\',[0.1 0],[.08 .03]);\nHsb=trans(Hlp,\'sb\',[0.01 0.1]);\ngainplot(Hsb,1d-3,0.48);\nxtitle(\'Stop band filter\');";
demoCode[101]="hn=eqfir(33,[0 .23;.27 .5],[1 0],[1 .1]);\n[hm,fr]=frmag(hn,256);\nplot2d(fr\',hm\');\nxtitle(\'Minimax FIR filter\');";
demoCode[102]="t=linspace(-4*%pi,4*%pi,50);\nplot2d3(t,cos(t));";
demoCode[103]="subplot(2,3,1);\nxtitle(\'ex1: creation of 1 yellow bar and 3 bars\');\nx=1:3;\ny1=1:3;\ny2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);\nsubplot(2,3,2);\nxtitle(\'grouped homogenisation\');\nx=1:3;\ny1=1:3;\ny2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);\nbarhomogenize();\nsubplot(2,3,3);\nxtitle(\'stacked homogenisation\');\nx=1:3;y1=1:3;y2=[4 3 5;6 7 8;9 10 11];\nbar(x,y1,\'yellow\');\nbar(x,y2);\nbarhomogenize(\'stacked\',1);";
demoCode[104]="subplot(2,3,1);\nxtitle(\'ex2: creation of 1 bar and 2 polylines\');\nx=1:10; y=sin(x)/2;\nbar(x,y,\'red\');\nx1=1:10;y1=[sin(x);cos(x)];\nplot(x1,y1);\nsubplot(2,3,2);\nxtitle(\'transformation of the second polyline to bar\');\nx=1:10; y=sin(x)/2;\nbar(x,y,\'red\');\nx1=1:10;y1=[sin(x);cos(x)];\nplot(x1,y1);\ne=gce(); e2=e.children(2); e2.polyline_style=6;\nsubplot(2,3,3);\nxtitle(\'grouped homogenisation\');\nx=1:10; y=sin(x)/2;\nbar(x,y,\'red\');\nx1=1:10;y1=[sin(x);cos(x)];\nplot(x1,y1);\ne=gce(); e2=e.children(2); e2.polyline_style=6;\nbarhomogenize();";
demoCode[105]="lambda = 2;\nX = grand(100000,1,\"exp\", 1/lambda);\nXmax = max(X);\nhistplot(40, X, style=2);\nx = linspace(0,max(Xmax),100)\';\nplot2d(x,lambda*exp(-lambda*x),strf=\"000\",style=5);\nlegend([\"exponential random sample histogram\" \"exact density curve\"]);";
demoCode[106]="s=poly(0,'s');\nn=[1+s   2+3*s+4*s^2        5; 0        1-s             s];\nd=[1+3*s   5-s^3           s+1;1+s     1+s+s^2      3*s-1];\nh=syslin('c',n./d);\nplzr(h);";
demoCode[107]="x = (0:%pi/20:2*%pi)';\ny=x;\ndeff('[x,y,z] = spar(u,v)',[\"x=u.*sin(u).*cos(v)\";\"y=u.*cos(u).*cos(v)\";\"z=u.*sin(u)\"]);\n[xf, yf, zf] = eval3dp(spar,x,y);\nplot3d(xf,yf,zf);";
demoCode[108]="getf('macros1.sci');\nN=20;\nn=1:N;\nx=cos(n*2*%pi/N);\ny=sin(n*2*%pi/N);\nnoeuds=N;\nnoeul=[(1:(N))',x',y',0*ones(N,1)];\nnoeul=[noeul;(N+1),0,0,0];\ntrianl=[];\nfor i=1:(N-1),trianl=[trianl;i,i,i+1,N+1,0];end;\ntrianl=[trianl;N,N,1,N+1,0];\ntriang=N;\nrect=[-1.2,-1.2,1.2,1.2];\nfec(noeul(:,2),noeul(:,3),trianl,(1:N+1)',\"030\",\" \",rect);\nmeshvisu(3,rect);";
demoCode[109]="getf('macros1.sci');\nN=20;\nn=1:N;\nx=cos(n*2*%pi/N);\ny=sin(n*2*%pi/N);\nnoeul=[(1:(N))', x', y',zeros(N,1);(N+1), 0,  0, 0];\ntrianl=[];\nfor i=1:(N-1), trianl=[trianl;i,i,i+1,N+1,0]; end;\ntrianl=[trianl;N,N,1,N+1,0];\nxset(\"colormap\",hotcolormap(N));\nxsetech([0,0,1.0,3/4]);\nrect=[-1.2,-1.2,1.2,1.2];\nfec(noeul(:,2),noeul(:,3),trianl,(1:N+1)',\"030\",\" \",rect);\nmeshvisu(3,rect);\nxsetech([0,3/4,1,1/5]);\nMatplot((1:xget(\"lastpattern\")),\"011\",[0,0.5,N+2,1.5],[1,N+2,1,1]);";
demoCode[110]="rand('normal');rand('seed',0);x=rand(1:1024-33+1);\nnf=33;bedge=[0 .1;.125 .5];\ndes=[1 0];wate=[1 1];\nh=eqfir(nf,bedge,des,wate);\nh1=[h 0*ones(1:maxi(size(x))-1)];\nx1=[x 0*ones(1:maxi(size(h))-1)];\nhf=fft(h1,-1);\nxf=fft(x1,-1);\nyf=hf.*xf;\ny=real(fft(yf,1));\nh2=[h 0*ones(1:167)];\nhf2=fft(h2,-1);\nhf2=real(hf2.*conj(hf2));\nhsize=maxi(size(hf2));\nfr=(1:hsize)/hsize;\nsubplot(321);\nplot2d(fr',log(hf2)');\nxtitle('Data spectrum','frequency','magnitude');\n[sm1]=pspect(100,200,'tr',y);\nsmsize=maxi(size(sm1));\nfr=(1:smsize)/smsize;\nsubplot(322);\nplot2d(fr',log(sm1)');\nxtitle('Spectral estimation','frequency','spectral power');\n[sm2]=cspect(100,200,'tr',y);\nsmsize=maxi(size(sm2));\nfr=(1:smsize)/smsize;\nsubplot(325);\nplot2d(fr',log(sm2)');\nxtitle(['Spectral estimation ; periodogram method'],' ' ,' ' );";
demoCode[111]="hz=iir(3,'bp','ellip',[.15 .25],[.08 .035]);\n[hzm,fr]=frmag(hz,256);\nplot2d(fr',hzm');\nxtitle('Discrete IIR filter (ellip) ',' ',' ');";
demoCode[112]="H=syslin('c',352*poly(-5,'s')/poly([0,0,2000,200,25,1],'s','c'));\nevans(H,100);\nsgrid();";
demoCode[113]="x=[-0.3:0.8:27.3]';\ny=rand(x);\nrect=[min(x),min(y),max(x),max(y)];\ntics=[4,10,2,5];\nplotframe(rect,tics,[%f,%f],[\"My plot\",\"x\",\"y\"],[0,0,0.5,0.5]);\nplot2d(x,y,2,\"000\");\nplotframe(rect,tics,[%t,%f],[\"My plot with grids\",\"x\",\"y\"],[0.5,0,0.5,0.5]);\nplot2d(x,y,3,\"000\");\nplotframe(rect,tics,[%t,%t],[\"My plot with grids and automatic bounds\",\"x\",\"y\"],[0,0.5,0.5,0.5]);\nplot2d(x,y,4,\"000\");\nplotframe(rect,flags=[%f,%t],tics=tics,captions=[\"My plot without grids but with automatic bounds \",\"x\",\"y\"],subwin=[0.5,0.5,0.5,0.5]);\nplot2d(x,y,5,\"000\");";
demoCode[114]="n=16;rect=[-n,-n,n,n];\nplot2d(0,0,[0],'012','leg',rect);\nxclip('clipgrf');\nx=[-1 1 1 -1 -1]';\ny=[-1 -1 1 1 -1]';\nxx=x*(n-1);\nyy=y*(n-1);\nfor k=2:n,;\n  xx=[xx,x*((n-k))]; yy=[yy,y*(n-k)];\nend;\nc=0:(n-1);\nxfpolys(xx,yy,c);xclip();";
demoCode[115]="rect=[0,0,100,100];\nplot2d(0,0,[0],'012','leg',rect);\nxclip('clipgrf');\nx=[0 25 25  0 0]';\ny=[0 0 25 25 0]';\nd=25*[1 1 1 1 1]';\nxx=[];yy=[];i=0;\nfor k=1:4\n  for l=1:4\n    i=i+1;\n    xx=[xx,(l-1)*d+x];yy=[yy,y+(k-1)*d];\n  end;\nend;\nxfpolys(xx,yy,(1:16));xclip();";
demoCode[116]="plot2d(0,0,[0],'012','leg',[0,0,30,20]);\nxclip('clipgrf');\nx=[1 3 3 1 1]';\ny=[0 0 1 1 0]';\nd=4*[1 1 1 1 1]';\nxx=[x,x+d,x+2*d,x+3*d,x+4*d,x+5*d];\nyy=[y,5*y,2*y,10*y,8*y,6*y];\nxfpolys(xx,yy,2*[1 2 3 4 5 6]);xclip();";
demoCode[117]="r=(%pi):-0.01:0;\nx=r.*cos(10*r);\ny=r.*sin(10*r);\ndeff('[z]=Surf(x,y)','z=sin(x)*cos(y)');\nt=%pi*(-10:10)/10;\nfplot3d(t,t,Surf,35,45,'X@Y@Z',[19,2,3]);\nz=(sin(x).*cos(y));\n[x1,y1]=geom3d(x,y,z);\nxpoly(x1,y1,'lines');\nBackgroundColorId = color(70,174,255);\ncurrent_axe = gca();\nplot_3d = current_axe.children(2);\nplot_3d.hiddencolor = 32;\npolyline = current_axe.children(1);\npolyline.foreground = 8;\ncurrent_axe.rotation_angles = [70,47];\ncurrent_axe.background = BackgroundColorId;\n[x1,y1]=geom3d([0,0],[0,0],[5,0]);\nxsegs(x1,y1);\nxstring(x1(1),y1(1),'The point (0,0,0)');\nTitle=['plot3d and use of xgeom'];\nxtitle(Title,' ',' ');";
demoCode[118]="getf('shadesurf.sci');\ngetf('spaghetti.sci');\nspaghetti();";
demoCode[119]="w=0.01:0.01:2;s=poly(0,'s');\nG=syslin('c',2*(s^2+0.1*s+2), (s^2+s+1)*(s^2+0.3*s+1));\nfresp=repfreq(G,w);\nGid=frfit(w,fresp,4);\nfrespfit=repfreq(Gid,w);\nbode(w,[fresp;frespfit]);";
demoCode[120]="hz=iir(3,'bp','ellip',[.15 .25],[.08 .03]);\n[hzm,fr]=frmag(hz,256);\nplot2d(fr',hzm');\nxtitle('Discrete IIR filter band pass  0.15<fr<0.25 ',' ',' ');\nq=poly(0,'q');";
demoCode[121]="plot(hilb(51));";
demoCode[122]="t=(0:.05:1)';\nst=sin(2*%pi*t);\nxsetech([0,0,1,0.5]);\nplot2d2(\"onn\",t,st);\nxsetech([0,0.5,1,0.5]);\nplot2d3(\"onn\",t,st);\nxsetech([0,0,1,1]);";
demoCode[123]="h = 1;\nX = [0,1;1,1;0,0];\nY = [0,0;0,1;1,1];\nZ = [0,0;0,0;h,h];\ncolors = [1,1;1,1;64,64];\nfh = scf(0);\nfh.color_map = jetcolormap(64);\ndrawlater();\nsubplot(1,2,1);\nplot3d(X,Y,list(Z,colors));\nsubplot(1,2,2);\np = [3,2,1];\nplot3d(X(p,:),Y(p,:),list(Z(p,:),colors(p,:)));\ndrawnow();";
demoCode[124]="getf('slice3d.sci');\ngetf('trisplit.sci');\ngetf('setcmap.sci');\ngetf('oplot3d.sci');\nnx=21; ny=25; nz=30;\ns=hypermat([nx,ny,nz]);\nx=linspace(-4.5,4.5,nx)'*ones(1,ny);\ny=ones(nx,1)*linspace(-4.5,4.5,ny);\nz=linspace(-4.5,4.5,nz);\nfor i=1:nz; s(:,:,i)=x.^2 + y.^2 + z(i)^2; end\n[xx,yy,zz,c]=slice3d(x(:,1)',y(1,:),z,s,-[1 10 16],-[4 8 12],15);\n[xx,yy,zz,c]=trisplit(xx,yy,zz,c);\nsetcmap(16)\nxbasc();oplot3d(list(xx,yy,zz,c,1),32,35,45,'x@y@z',[-1 6 4]);";
demoCode[125]="getf('rebin.sci');\ngetf('interp2.sci');\nxbasc();\nrebin();\nxn=1:.1:8;\nyn=-1:.1:3;\nan=rebin(xn,yn,1:3,1:3,5*rand(3,3));\nplot3d1(xn,yn,an);"; 
function putDemo(){
      //alert("put");
      var codeIndex=document.sciForm.demo.options[document.sciForm.demo.selectedIndex].value;
      document.sciForm.scicode.value=demoCode[codeIndex];
      document.sciForm.graphicsmode.checked=true;
}
function clearForm(){
	document.sciForm.sciresult.value="";
	document.sciForm.scicode.value="";
        document.getElementById("gconsole");
//.src="scilabp.png";
        request=null;
        queryString=""; 
}
function executeCode(){
      //alert("Came here");
    document.getElementById('gconsole').onload=hideMsg;
    document.getElementById('message').innerHTML='<center>Processing...<br><img src="loading.gif"><center>';
    document.getElementById('message').style.visibility = 'visible'; 
    setQueryString();
    var url="http://"+hostname+"/cgi-bin/scilab.cgi";
    httpRequest("POST",url,true);
}
//event handler for XMLHttpRequest
function handleResponse(){
	if(request.readyState == 4){
		if(request.status == 200){
			window.status="Done.";
//alert(request.responseText);
results = eval('(' + request.responseText + ')'); 
//alert(results.output);

result="Done.";
result=results.output;
result=result.replace(/exit();/g,"");
error=results.error;
image=results.image;
if (error){
        document.getElementById('message').style.visibility = 'hidden';
	alert("Error : "+error);
        document.sciForm.sciresult.value=result+"\nSyntax Error : "+error;
        return;
}
if (image){
        //document.getElementById("gconsole").src="scilabp.png";
	 document.getElementById("gconsole").src=results.imagefile;
	 window.status="Rendering Graphics...";
	 //document.getElementById("gwindow").style.visibility = 'visible';
	 //document.getElementById("gconsole").src=results.imagefile;
         //document.getElementById("gcontent").style.width = 596;
         //document.getElementById("gcontent").style.height = 397;
         //document.getElementById("gwindow").style.width = 616;
         //document.getElementById("gwindow").style.height = 440;
         //document.getElementById("gwindow").style.left= "30%";
         //document.getElementById("gwindow").style.top= "5%";
         //document.getElementById("gmaxbutton").src = "min.gif";
         //document.getElementById("gmaxbutton").title = "Minimize";
	 //document.getElementById("gwindow").style.visibility = 'visible';
}
else{
	document.sciForm.sciresult.value=result;
	document.getElementById('message').style.visibility = 'hidden';
}
		}else {
	            alert("A problem occurred with communicating between the XMLHttpRequest object and the server program:"+request.statusText+" Code: "+request.status);
document.getElementById('message').style.visibility = 'hidden'; //Hide the progressbar gif
	      	}
	}//end outer if
}


/* Initialize a Request object that is already constructed */
function initReq(reqType,url,bool){
    /* Specify the function that will handle the HTTP response */
    request.onreadystatechange=handleResponse;
    request.open(reqType,url,bool);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    /* Only works in Mozilla-based browsers */
    //request.overrideMimeType("text/XML");
    request.send(queryString);
}

/* Wrapper function for constructing a Request object.
 Parameters:
  reqType: The HTTP request type such as GET or POST.
  url: The URL of the server program.
  asynch: Whether to send the request asynchronously or not. */
function httpRequest(reqType,url,asynch){
    //Mozilla-based browsers
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        request=new ActiveXObject("Msxml2.XMLHTTP");
        if (! request){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
     }
    //the request could still be null if neither ActiveXObject
    //initializations succeeded
    if(request){
       initReq(reqType,url,asynch);
    }  else {
        alert("Your browser does not permit the use of all "+
        "of this application's features!");}
}
function setQueryString(){
    queryString="";
    code=encodeURIComponent(document.sciForm.scicode.value);
    graphicsmode=document.sciForm.graphicsmode.checked ?document.sciForm.graphicsmode.value: 0; 
    queryString = "code="+code+"&graphicsmode="+graphicsmode;
//    alert(queryString);
}
function maxminimize(){
w= document.getElementById("gcontent").style.width;
if (w == "596px"){
        document.getElementById("gcontent").style.width = 0;
      	document.getElementById("gcontent").style.height = 0;
        document.getElementById("gwindow").style.width = 250;
        document.getElementById("gwindow").style.height = 20;
	document.getElementById("gwindow").style.left= "20%";
	document.getElementById("gwindow").style.top= "90%";
        document.getElementById("gmaxbutton").src = "restore.gif";
	document.getElementById("gmaxbutton").title = "Maximize";
}
else{
        document.getElementById("gcontent").style.width = 596;
      	document.getElementById("gcontent").style.height = 397;
        document.getElementById("gwindow").style.width = 616;
      	document.getElementById("gwindow").style.height = 440;
	document.getElementById("gwindow").style.left= "30%";
	document.getElementById("gwindow").style.top= "5%";
	document.getElementById("gmaxbutton").src = "min.gif";
	document.getElementById("gmaxbutton").title = "Minimize";
}
}
function closeit(){
        //document.getElementById("gcontent").style.width = 600;
      	//document.getElementById("gcontent").style.height = 300;
	document.getElementById("gwindow").style.visibility="hidden";
}
function showHelp(){
	helpwin.show();return false
     
}
function hideMsg() {
       var image=document.getElementById("gconsole");
       if(image.complete){
 		document.getElementById("gcontent").style.width = 596;
      		document.getElementById("gcontent").style.height = 397;
        	document.getElementById("gwindow").style.width = 616;
      		document.getElementById("gwindow").style.height = 440;
		document.getElementById("gwindow").style.left= "30%";
		document.getElementById("gwindow").style.top= "5%";
		document.getElementById("gmaxbutton").src = "min.gif";
		document.getElementById("gwindow").style.visibility = 'visible';
		document.getElementById('message').style.visibility = 'hidden';
		window.status="Done.";
	}else {
		setTimeout("hideMsg()", 250);
	}
}
function printImg(){
	src = document.getElementById("gconsole").src;
	//document.getElementById("iFrame1").src=src;
	//document.frames['iFrame1'].document.print(); 
	link = "about:blank";
	var pw = window.open(link, "_new");
	pw.document.open();
	pw.document.write(makepage(src));
	pw.document.close();
	//alert("Printing...");
}
function makepage(src){
  // We break the closing script tag in half to prevent
  // the HTML parser from seeing it as a part of
  // the *main* page.

  return "<html>\n" +
    "<head>\n" +
    "<title>W3 Scilab - NRCFOSS,India</title>\n" +
    "<script>\n" +
    "function step1() {\n" +
    "  setTimeout('step2()', 10);\n" +
    "}\n" +
    "function step2() {\n" +
    "  window.print();\n" +
    "  window.close();\n" +
    "}\n" +
    "</scr" + "ipt>\n" +
    "</head>\n" +
    "<body onLoad='step1()'>\n" +
    "<img src='" + src + "'/>\n" +
    "</body>\n" +
    "</html>\n";
}

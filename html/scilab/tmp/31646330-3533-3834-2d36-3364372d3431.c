x=-2:0.075:2;
y=x;
z=eval3d(milk_drop,x,y);
plot3d(x,y,z,25,25,'X@Y@Z',[12,2,4]);
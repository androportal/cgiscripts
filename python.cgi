#! /usr/bin/perl
#use strict;
use CGI;
use CGI::Carp 'fatalsToBrowser';
use Data::UUID;
use JSON;
my $request = new CGI;
my $ug = Data::UUID->new;
my $uuid=$ug->create_str();
my $file=$ug->to_string($uuid);
my $incode=$request->param('code');
if ($incode =~ m/unix_w|unix_g|unix_s|unix_x|unix|host|dir/){
	$error="Shell Command (sh) execution disabled";
	$results->{"output"}="";
	$results->{"image"}=0;
	$results->{"imagefile"}="";
	$results->{"error"}=$error;
	my $json=objToJson($results);
        print "Content-type: text/html\n\n";
	print $json;
	exit;
}
my $graphicsmode=$request->param('graphicsmode');
my $codefile="/var/www/html/python/tmp/$file.py";
my $errorfile="/var/www/html/python/tmp/$file.err";
my $imagepath="/var/www/html/python/tmp/$file.png";
my $results;
if ($graphicsmode){
	guimode();
}
else{
	noguimode();
}
sub guimode{
	$< = 0;
#	$ENV{'TMPDIR'}="/var/www/html/python";
	$ENV{'HOME'}="/var/www/html/python";
	$ENV{'DISPLAY'}=":1.0";
    my $cmd="python $codefile 2>&1";
    open CODE,">$codefile";
	print CODE $incode;
    print CODE "\nsavefig(\'$imagepath\')\n";
	close CODE;
        print "Content-type: text/html\n\n";
	open (CMD,"$cmd|");
	my @data=<CMD>;
	close CMD;
	my $error="";
        my $output="som thing";
	if (-e $errorfile){
		open (ERROR,$errorfile);
		my @error=<ERROR>;
		close ERROR;
		$error=join("",@error);
		unlink $errorfile;
	}
	my $output=join("",@data);
#	$output =~ s/exit\(\);//g;
#	$output =~ s/-->catch//g;
#	unlink $codefile;
	$results->{"output"}=$output;
	$results->{"image"}=1;
	$results->{"imagefile"}="./tmp/$file.png";
    $results->{"error"}=$error;
	my $json=objToJson($results);
	print $json;
}
sub noguimode{
	open CODE,">$codefile";
	print CODE $incode;
	close CODE;
	print "Content-type: text/html\n\n";
	my $path=$ENV{'PATH'};
	$ENV{'PATH'}=$path.":/usr/lib/scilab-4.1.1/bin/";
	$< = 0;
	$ENV{'TMPDIR'}="var/www/html/python";
	$ENV{'DISPLAY'}=":0.0";
	my $cmd="python $codefile 2>&1";
	open (CMD,"$cmd|");
	my @data=<CMD>;
	close CMD;
	my $error;
	if (-e $errorfile){
		open (ERROR,$errorfile);
		my @error=<ERROR>;
		close ERROR;
		$error=join("",@error);
	}
	my $output=join("",@data);
	$output =~ s/exit\(\);//g;
	$output =~ s/-->catch//g;
	unlink $codefile;
	unlink $errorfile;
	$results->{"output"}=$output;
	$results->{"image"}=0;
	$results->{"imagefile"}="";
	$results->{"error"}=$error;
	my $json=objToJson($results);
	print $json;
}

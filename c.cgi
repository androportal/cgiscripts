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
my $codefile="/var/www/html/c/tmp/$file.c";
my $errorfile="/var/www/html/c/tmp/$file.err";
my $binary="bin";
my $results;
noguimode();
sub noguimode{
	open CODE,">$codefile";
	print CODE $incode;
	close CODE;
	print "Content-type: text/html\n\n";
	$< = 0;
	$ENV{'DISPLAY'}=":0.0";
	my $cmd="gcc $codefile -o bin 2>&1";

	open (CMD,"$cmd|");
	my @data1=<CMD>;
	close CMD;
	
    my $cmd="./bin";
	open (CMD,"$cmd|");
	my @data2=<CMD>;
	close CMD;
	my $error;
	if (-e $errorfile){
		open (ERROR,$errorfile);
		my @error=<ERROR>;
		close ERROR;
		$error=join("",@error);
	}
	my $output=join("",@data1," ",@data2);
	$output =~ s/exit\(\);//g;
	$output =~ s/-->catch//g;
	unlink $codefile;
	unlink $binary;
	$results->{"output"}=$output;
	$results->{"image"}=0;
	$results->{"imagefile"}="";
	$results->{"error"}=$error;
	my $json=objToJson($results);
	print $json;
}

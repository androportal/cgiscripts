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
my $codefile="/var/www/html/scilab/tmp/$file.cpp";
my $errorfile="/var/www/html/scilab/tmp/$file.err";
my $imagepath="/var/www/html/scilab/tmp/$file.png";
my $results;
noguimode();
sub noguimode{
	open CODE,">$codefile";
	print CODE $incode;
	close CODE;
	print "Content-type: text/html\n\n";
	my $path=$ENV{'PATH'};
	$ENV{'PATH'}=$path.":/usr/lib/scilab-4.1.1/bin/";
	$< = 0;
	$ENV{'TMPDIR'}="var/www/html/scilab";
	$ENV{'SCIDIR'}="/usr/lib/scilab-4.1.1";
	$ENV{'HOME'}="/var/www/html/scilab";
	$ENV{'DISPLAY'}=":0.0";
	$ENV{'LD_LIBRARY_PATH'}=$ENV{'SCI'}."/bin:".$ENV{'SCI'}."/libs";
	$ENV{'LD_LIBRARY_PATH'}=$ENV{'LD_LIBRARY_PATH'}.":/usr/lib/scilab-4.1.1/bin:/usr/lib/scilab-4.1.1/lib/scilab";
	$ENV{'SHLIB_PATH'}=$ENV{'SHLIB_PATH'}.":/usr/lib/scilab-4.1.1/bin:/usr/lib/scilab-4.1.1/lib/scilab";
	$ENV{'TCL_LIBRARY'}=$ENV{'SCI'}."/tcl/tcl8.4";
	$ENV{'TK_LIBRARY'}=$ENV{'SCI'}."/tcl/tk8.4";
	my $cmd="g++ $codefile 2>&1";
############# expt #######################

	open (CMD,"$cmd|");
	my @data1=<CMD>;
	close CMD;

############### expt end ####################
	my $cmd="./a.out";
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
	#unlink $codefile;
	unlink $errorfile;
	$results->{"output"}=$output;
	$results->{"image"}=0;
	$results->{"imagefile"}="";
	$results->{"error"}=$error;
	my $json=objToJson($results);
	print $json;
}

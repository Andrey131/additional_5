module.exports = function check(str, bracketsConfig) {
  
  var i=0;
  var a=0;
  


	while(i<str.length)
	{
		if(str[i]=='('||str[i]=='['||str[i]=='{')
		{
			a++;
		}
		if(str[i]==')'||str[i]==']'||str[i]=='}')
		{
			a--;
		}
		i++;
	}

	if(a==0)
	{
		return true;
	}
	else{
		return false;
	}



}

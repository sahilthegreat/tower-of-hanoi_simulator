var lis = [];
var y = 20;
var acnt = 3;
var bcnt = 0;
var ccnt = 0;
function TOH(n, src,  dest, help) {
    if (n == 0)
        return;
    TOH(n-1,src,help,dest);
    lis.push("move from "+src+" to "+dest);
    TOH(n-1,help,dest,src);
}
function call(){
    TOH(3,'a','b','c');
    
lis.forEach((x, index) => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.innerHTML = x; 
      document.getElementById("para").appendChild(li);
      const im1 = document.querySelector('.bead1');
      const im2 = document.querySelector('.bead2');
      const im3 = document.querySelector('.bead3');
      var  source = x.substring(10,11);
      var dest = x.substring(15,16);
      //im.style.left = y+"px";
      if (source=='a'&& dest=='b')
        {   if (acnt==1&&bcnt!=2)
              {
                im1.style.left = '150px';
                im1.style.top = '125px';
              }
            else if(acnt==1&&bcnt==2)
              {
              im3.style.left = '150px';
              im3.style.top = '75px';
              }
            else
              {
              im3.style.left = '150px';
              im3.style.top = '125px';
              }
            acnt-=1;
            bcnt+=1;
        }
      if (source=='a'&& dest=='c')
        {
            im2.style.left = '280px';
            im2.style.top = '125px';
            acnt-=1;
            ccnt+=1;
        }
      if (source=='b'&& dest=='c')
        {  
            im3.style.left = '280px';
            im3.style.top = '100px';
            ccnt+=1;
            bcnt-=1;
        }
      if (source=='c'&& dest=='a')
        {
            im3.style.left = '20px';
            im3.style.top = '125px';
            acnt+=1;
            ccnt-=1;
        }
      if (source=='c'&& dest=='b')
        {
            im2.style.left = '150px';
            im2.style.top = '100px';
            bcnt+=1;
            ccnt-=1;
        }
    }, index * 1000);
  });

}
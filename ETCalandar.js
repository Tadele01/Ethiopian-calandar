
  var months = ["መስከረም","ጥቅምት","ህዳር","ታህሳስ","ጥር","የካቲት","መጋቢት","ሚያዚያ","ግንቦት","ሰኔ","ሃምሌ","ነሃሴ","ጳጉሜ"]
  var monthVals = ["september","october","november","december","january","february","march","april","may","june","july","august","puagme"]
  var zemens = ["ዘመነ ዮሃንስ","ዘመነ ማትዮስ","ዘመነ ማርቆስ","ዘመነ ሉቃስ"]
  var habeshaNums = ["፩","፪","፫","፬","፭","፮","፯","፰","፱","፲","፲፩","፲፪","፲፫","፲፬","፲፭","፲፮","፲፯","፲፰","፲፱","፳","፳፩","፳፪","፳፫","፳፬","፳፭","፳፮","፳፯","፳፰","፳፱","፴"];

  

  for (var i = 0; i < 13; i++) {
    monthed.innerHTML += "<option value='"+monthVals[i]+"'>"+months[i]+"</option>";
  }

  for (var i = 2015; i >=2005; i--) {
    yeared.innerHTML += "<option value='"+i+"'>"+i+"</option>";
  }


  var theTable= "<tr>\
      <th>ሰኞ</th>\
      <th>ማክሰኞ</th>\
      <th>ረቡእ</th>\
      <th>ሀሙስ</th>\
      <th>አርብ</th>\
      <th>ቅዳሜ</th>\
      <th>እሁድ</th>\
    </tr>\
    <tr>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
    </tr>\
    <tr>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
    </tr>\
    <tr>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
    </tr>\
    <tr>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
    </tr>\
    <tr>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
    </tr>\
    <tr>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
      <td class='dark'></td>\
      <td></td>\
    </tr>\
  </table>"



  function monthTranslator(month){
    return(months[monthVals.indexOf(month)])
  }


function tableMaker(month,year){
  var beginning = startFinder(year,month) +4;
  var yearName = zemens[year%4];
  var start = "<table class='cal' cellpadding='0' cellspacing='0' id='"+month+"'>\
               <tr class='hangers'><td colspan=7><div class='hanger left'></div><div class='hanger right'></div><td></tr>"
  var title = "<tr class='labeled'>\
    <td colspan='3' class='dark'>"+monthTranslator(month)+"</td>\
    <td colspan='4'>"+yearName+"</td>\
  </tr>"
  generateOn.innerHTML += start+title+theTable;

  var tda = document.getElementById(month),innerHTML;
  var trs = tda.getElementsByTagName("td");

  var lengthOfMonth = 30;
  if (month=="puagme"){
    lengthOfMonth = 5;
    if (yearName==zemens[0]){
      lengthOfMonth = 6;
    }
  }

  for (var i = 0; i < lengthOfMonth; i++) {
    trs[beginning].innerHTML=habeshaNums[i]+'<br>'+(i+1);
    beginning++;
  }

}

function startFinder(year,month){
  var monthNum = monthVals.indexOf(month)+1
  var ameteAlem = 5500 + year;
  var ndays = ameteAlem + Math.ceil(ameteAlem/4) + (monthNum-2)*30 + 2;
  var toStart = (ndays + 6)%7;
  return toStart;
}


// tableMaker("september",2010)
// tableMaker("october",2010)
// tableMaker("november",2010)
// tableMaker("december",2010)
// tableMaker("puagme",2010)

function yearlyGenerator(){
  generateOn.innerHTML = "";
  var year = eval(yeared.value)
  yearDisplay.innerHTML= year+" አ.ም";
  for (var month in monthVals) {
    tableMaker(monthVals[month],year)
  }
}

function monthlyGenerator(){
  generateOn.innerHTML = "";
  var month = monthed.value;
  var year = eval(yeared.value)
  yearDisplay.innerHTML= year+" አ.ም";
  tableMaker(month,year)
}


//Utils:::DateFormatter
const DateFormatter = {
    getStringDate:(timestamp) => {
      var date = new Date(timestamp);
      var day = (parseInt(date.getDate()) < 10 )?('0'+date.getDate()):date.getDate();
      var month = (parseInt(date.getMonth()+1) < 10 ) ?('0'+(date.getMonth()+1)):(date.getMonth()+1);
      var year = date.getFullYear();
      date = day+'/'+month+'/'+year;
      return date;
    }
}


module.exports = {DateFormatter};

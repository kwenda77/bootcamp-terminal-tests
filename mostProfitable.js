module.exports = function mostProfitableDepartment(salesData){
    const  map = {};

    for(var i = 0; i<salesData.length;i++){
      //console.log(salesData[i]);
      const salesD = salesData[i];
     map[salesD.department] = 0;
    }
     //console.log(map); 
      
      for(var i = 0; i<salesData.length;i++){
      //console.log(salesData[i]);
        const salesD = salesData[i];
        var currentTotal = map[salesD.department];
        currentTotal = currentTotal +  salesD.sales;
        map[salesD.department] = currentTotal;
    }
     //console.log(map); 
      var currentMaxSales = 0;
      var currentDepartment = '';
      for( const departments in map){
        //console.log(map[departments]);
        var currentDeparmentSales = map[departments];
        if(map[departments]>currentMaxSales){
                 currentMaxSales = map[departments]; 
                 currentDepartment = departments;
          
    
           }
      }
        //console.log(currentMaxSales);
        return currentDepartment; 
    }
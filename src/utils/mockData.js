   import { IMAGE1_URL, IMAGE2_URL } from "./constants";

   const resList = [ 
         {  
          info : 
            {
             id: 1234,
             name :"KFC",
             avgRating : "3.8 stars" ,
             costForTwo : "400 for two",
             cuisines : ["Biryani, North Indian, Asian"],
             image : IMAGE1_URL
            },
         },
         {
             info : {
             id : 12345,
             name : "Dominos'" ,
             avgRating : "4.5 stars" ,
             costForTwo : "300 for two" ,
             cuisines : ["Pizza, Italian"] ,
             image : IMAGE2_URL
             },
         },
         {
             info : {
             id : 123456,
             name : "MCD'" ,
             avgRating : "4.1 stars" ,
             costForTwo : "350 for two" ,
             cuisines : ["Burger, Whooper"] ,
             image : IMAGE2_URL
             },
         }]

         export default resList;
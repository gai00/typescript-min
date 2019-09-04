import Dio from "./libs/Dio";

(async () => {
  console.log("THE WORLD");
  
  const dio = new Dio();
  console.log(dio.say());
})();
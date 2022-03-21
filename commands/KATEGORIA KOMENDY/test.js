/// Aby tworzyć komendy, musisz stworzyć pierw tzw. kategorię (jest to folder z nazwą np. 4FUN) oraz w tej kategorii komende w .js

module.exports = {
    name: `test`,
    description: 'szpaku',
    run: async(client, message, args) => {

      if(!message.author.bot);{

       if (message.content("]test")){

         let generator = Math.random(0, 8);

       let riposta0 = 'cringe';
       let riposta1 = 'no god pls no';
       let riposta2 = 'Zmutuje cie';
       let riposta3 = 'ROZOWA PANTERA';
       let riposta4 = 'brachu ale cringe';
       let riposta5 = 'kto pytal';
       let riposta6 = 'pysk';
       let riposta7 = 'sperma';
       let riposta8 = 'oh no cringe';

       if(generator == 0)
         {
            message.channel.send(riposta0);
         }else if(generator == 1) {
            message.channel.send(riposta1);
         }else if (generator == 2){
            message.channel.send(riposta2);
         }else if(generator == 3) {
            message.channel.send(riposta3);
         }else if(generator == 4) {
            message.channel.send(riposta4);
         }else if (generator == 5){
            message.channel.send(riposta5);
         }else if(generator == 6) {
            message.channel.send(riposta6);
         }else if (generator == 7){
            message.channel.send(riposta7);
         }else if(generator == 8) {
            message.channel.send(riposta8);
         }

      // i tu kod komendy :D
      
      }
   }
}
}

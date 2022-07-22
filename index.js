// JavaScript source code

//Constante para el paquete de MySQL
const mysql = require('mysql')
//Constante para el pquete Express
const express = require('express');
//variable para los metodos de express
var app = express();
// constante para el paquete de bodyparser
const bp = require('body-parser');

//Enviando los datos JSON a NodeJS API
app.use(bp.json());

// conectar a la base de datos (Mysql)
var  mysqlConnection = mysql.createConnection({


host:'localhost' ,
user: 'root' ,
password: '' ,
database: 'new_schema' ,
multipleStatements: true


})


//Test de conexion a base de datos
mysqlConnection.connect((err)=>{
       if (!err) {
            console.log('Conexion Exitosa');
       } else {

            console.log('Error al conectar a la DB')

         }
});

//Ejecutar el server en un puerto especifico.

app.listen(3000,() => console.log('Server Running puerto: 3000'));


// seleccionar casillero
app.get("/Sel_casillero",(req, res) => {
     try {
      const {  num_casillero, dir_casillero, tip_casillero, fec_creacion, usr_creo,cod_modulo } = req.body;
      const consulta = ' call Sel_casillero('${num_casillero}',${dir_casillero},${tip_casillero},${fec_creacion},${usr_creo},${cod_modulo})`;
      conn.query(consulta, (error, results) => {
          if (error) throw error;
          if (results.lenght > 0) {
               res.json(results[0]);
          }else {
               res.setEncoding("")

          }
     })
} catch (error) {
     res.setEncoding("0")
}


});

// Insertar casillero
app.post("/ins_casillero", (req, res) => {
     try {
       const { num_casillero,  dir_casillero, tip_casillero, fec_creacion, usr_creo, cod_modulo } = req.body;
       const consulta = `call ins_casillero('${num_casillero}',${dir_casillero},${tip_casillero},${fec_creacion},${usr_creo},${cod_modulo})`;
       conn.query(consulta, (error, results) => {
           if (error) throw error;
           if (results.length > 0) {
               res.json(results);
               console.log(results[0][0].casillero);
           }  
       })
     } catch (error) {
       res.send("0")
     }
   });


   //actualizar casillero
   app.put('/upd_casillero', (req, res) => {
     try {
      const { num_casillero,  dir_casillero, tip_casillero, fec_creacion, usr_creo, cod_modulo } = req.body;
      const consulta = `call upd_casillero('${num_casillero}',${dir_casillero},${tip_casillero},${fec_creacion},${usr_creo},${cod_modulo})`;
      conn.query(consulta, error => {
          if (error) throw error;
          res.send("1")
      });
  } catch (error) {
      res.send("0");
     }
  });
   


// seleccionar paquetes
app.get("/Sel_paquetes", (req, res) => {
     try {
         const { nom_casillero, tip_paquete, peso_paquete, ind_paquete, cod_modulo} = req.body;
     const consulta = `call Sel_paquetes('${nom_casillero}',${tip_paquete},${peso_paquete}${ind_paquete},${cod_modulo})`;
     conn.query(consulta, (error, results) => {
         if (error) throw error;
         if (results.length > 0) {
             res.json(results);
         }
     })
     } catch (error) {
         res.send("0");
     }
 });

 //Insertar paquetes
 app.post("/", (req, res) => {
     try {
       const { nom_casillero, tip_paquete, peso_paquete, ind_paquete, cod_modulo } = req.body;
       const consulta = `call ('${nom_casillero}',${tip_paquete},${peso_paquete}${ind_paquete},${cod_modulo})`;
       conn.query(consulta, (error, results) => {
           if (error) throw error;
           if (results.length > 0) {
               res.json(results);
               console.log(results[0][0].paquetes);
           }  
       })
     } catch (error) {
       res.send("0")
     }
   });


//actualizar paquetes 

app.put('/upd_paquetes', (req, res) => {
     try {
      const { nom_casillero, tip_paquete, peso_paquete, ind_paquete, cod_modulo } = req.body;
      const consulta = `call upd_paquetes('${nom_casillero}',${tip_paquete},${peso_paquete}${ind_paquete},${cod_modulo})`;
      conn.query(consulta, error => {
          if (error) throw error;
          res.send("1")
      });
  } catch (error) {
      res.send("0");
     }
  });

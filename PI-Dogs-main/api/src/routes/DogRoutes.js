require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const { Dog, Temperament } = require('../db.js');
const { Op } = require('sequelize');
const getAlldogsApi = require('../funciones/funApi.js');
const getAllDogsDB = require('../funciones/funDB.js');


//-------------BUSCA TODOS LOS PERROS Y POR NOMBRE-------------//

router.get('/', async (req, res, next) =>
{
  const { name } = req.query;

  try {
    const dogDB = await getAllDogsDB(name);
    const dogsApi = await getAlldogsApi(name);


    if (name) {
      if (dogDB.length) {
        res.json(dogDB)
      } else if (dogsApi.length) {
        res.json(dogsApi)

      } else {

        res.send('No se encontro esa raza')
      }

    } else {
      await Promise.all([dogDB, dogsApi])
        .then(response =>
        {
          const [dogDB, dogsApi] = response
        })

      res.send([...dogDB, ...dogsApi])
    }

  } catch (error) {
    next(error)
  }

})

//----------------------BUSCA POR ID----------------------//

router.get('/:id', async (req, res, next) =>
{
  const { id } = req.params;
  try {
    if (id) {
      if (id.includes('-')) {
        const dogsDBId = await Dog.findByPk(id, {
          include: {
            model: Temperament,
            attributes: ['name'],
            through: {
              attributes: []
            }
          }
        })
        res.send(dogsDBId)
      } else {
        const dogsApi = await getAlldogsApi();
        const dogsId = dogsApi.filter(e => e.id == id);
        console.log(dogsId)
        res.json(dogsId)
      }
    }else{
      res.status(401).send({msj:'no se encontro el Perro'})
    }
  } catch (error) {
    next(error)
  }
})

//-------------------------POST-------------------------//


router.post('/', async (req, res, next) =>
{
  const { name, heightMin, heightMax, weightMin, weightMax, life_span, temperament } = req.body;

  try {
    const dogPost = await Dog.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,

    })
    let selectTemp = await Temperament.findAll({
      where: {
        name: temperament
      },

    })
    dogPost.addTemperament(selectTemp);
    res.send('Creado con exito')
  } catch (error) {
    next(error)
  }


})


//-------------------------DELETE-------------------------//

router.delete('/:id', async (req, res, next) =>
{
  const { id } = req.params;
  try {
    let nExcluidos = await Dog.destroy(
      {
        where: { id: id }
      }
    )
  
    res.send(`Eliminado con exito`)
    
  } catch (error) {
    next(error)
  }
})


//-------------------------PUT-------------------------//
router.put('/:id', async (req, res, next) =>
{
  const { id } = req.params;
  const { name, heightMin, heightMax, weightMin, weightMax, life_span, temperament } = req.body;
  try {
    const dogsDB = await Dog.findAll({
      where: {
        id: id
      }
    })
    if (!dogsDB) {
      res.status(401).send('El id no existe en Base de Datos' )
    } else {
      const dogsUpdate = await Dog.update({
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
      }, {
        where: {
          id: id
        }
      })
     /*  let selectTemp = await Temperament.findAll({
        where: {
          name: temperament
        },
      })
      dogsUpdate.addTemperament(selectTemp) */
      res.send('modificado con exito')
    }
  } catch (error) {
    next(error)
  }
})



module.exports = router;

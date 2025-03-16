using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WS0._1Venta.Models;
using WS0._1Venta.Models.Respuesta;
using WS0._1Venta.Models.Request;


namespace WS0._1Venta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public  IActionResult Get()
        {//Esto es una interfaceque nos permite hacer 

            using (VentaRealContext bd = new VentaRealContext())
            {
                    Respuesta objres = new Respuesta();
                try
                {
                    //usamos el orderv desde aqui para mostrarlos de ultimos a rimeros
                    var lst = bd.Clientes.OrderByDescending(d=>d.Id).ToList();
                    objres.Exito = 1;
                    objres.Mensaje="Conexion get exitosa";
                    objres.Data = lst;
                    
                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje= ex.Message;
                    throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }

        }

        [HttpPost]
        //atencion a los parametros para agregar mediante request
        public IActionResult Add(ClienteRequest clienteRequest)
        {
            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    //este cliente probiene de la bdd
                    Cliente modelCliente = new Cliente();
                    modelCliente.Nombre = clienteRequest.Nombre;
                    //agregamos el request a la bdd
                    bd.Clientes.Add(modelCliente);
                    bd.SaveChanges();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion Post exitosa";
                    //objres.Data = lst;

                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje = ex.Message;
                    //throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }
        }

        [HttpPut]
        //atencion a los parametros para agregar mediante request
        public IActionResult Edit(ClienteRequest clienteRequest)
        {
            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    //Elta linea busca el id del cliente es muy importante
                    Cliente modelCliente = bd.Clientes.Find(clienteRequest.id);
                    modelCliente.Nombre = clienteRequest.Nombre;
                    //agregamos el request a la bdd
                    bd.Clientes.Entry(modelCliente).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    bd.SaveChanges();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion Put exitosa";
                    //objres.Data = lst;

                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje = ex.Message;
                    //throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }
        }
        
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    //Elta linea busca el id del cliente es muy importante
                    Cliente modelCliente = bd.Clientes.Find(id);
                    bd.Remove(modelCliente);
                    bd.SaveChanges();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion delete exitosa";
                    //objres.Data = lst;

                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje = ex.Message;
                    //throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }
        }


    }
}

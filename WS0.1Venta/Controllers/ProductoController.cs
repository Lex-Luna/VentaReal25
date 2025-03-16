using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WS0._1Venta.Models.Respuesta;
using WS0._1Venta.Models;
using WS0._1Venta.Models.Request;

namespace WS0._1Venta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {//Esto es una interfaceque nos permite hacer 

            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    var lst = bd.Productos.OrderByDescending(d => d.Id).ToList();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion get exitosa";
                    objres.Data = lst;

                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje = ex.Message;
                    throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }

        }

        //atencion a los parametros para agregar mediante request
        [HttpPost]
        public IActionResult Add(ProductoRequest productoRequest)
        {
            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    //este cliente probiene de la bdd
                    Producto modelProducto = new Producto();
                    modelProducto.Nombre = productoRequest.Nombre;
                    modelProducto.PrecioUnitario = productoRequest.PrecioUnitario;
                    modelProducto.Costo = productoRequest.Costo;
                    //agregamos el request a la bdd
                    bd.Productos.Add(modelProducto);
                    bd.SaveChanges();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion Post exitosa";
                    //objres.Data = lst;

                }
                catch (Exception ex)
                {
                    objres.Exito = 0;
                    objres.Mensaje = ex.InnerException?.Message ?? ex.Message; // Captura la excepción interna
                                                                               // Logear el error para más detalles
                                                                               //throw ex;
                }
                return Ok(objres);//Ok metodo de interface,ok convierte a json el objeto
            }
        }

        [HttpPut]
        //atencion a los parametros para agregar mediante request
        public IActionResult Edit(ProductoRequest productoRequest)
        {
            using (VentaRealContext bd = new VentaRealContext())
            {
                Respuesta objres = new Respuesta();
                try
                {
                    //Elta linea busca el id del cliente es muy importante
                    Producto modelProducto = bd.Productos.Find(productoRequest.Id);
                    modelProducto.Nombre = productoRequest.Nombre;
                    modelProducto.PrecioUnitario = productoRequest.PrecioUnitario;
                    modelProducto.Costo = productoRequest.Costo;
                    //agregamos el request a la bdd
                    bd.Productos.Entry(modelProducto).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    bd.SaveChanges();
                    objres.Exito = 1;
                    objres.Mensaje = "Conexion Editado exitosa";
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
                    Producto modelProducto= bd.Productos.Find(id);
                    bd.Remove(modelProducto);
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

namespace WS0._1Venta.Models.Request
{
    public class ProductoRequest
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = null!;

        public string PrecioUnitario { get; set; } = null!;

        public string Costo { get; set; } = null!;
    }
}

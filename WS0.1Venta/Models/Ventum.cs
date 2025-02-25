using System;
using System.Collections.Generic;

namespace WS0._1Venta.Models;

public partial class Ventum
{
    public int Id { get; set; }

    public DateTime Fecha { get; set; }

    public decimal Total { get; set; }

    public int IdCliente { get; set; }

    public virtual ICollection<Concepto> Conceptos { get; set; } = new List<Concepto>();
}
